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
//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[0]= "1)  JNDI se usa para el acceso a:";
 choices[0]= new Array();
 choices[0][0] = "Datos de ficheros";
 choices[0][1] = "Sistemas gestores de bases de datos";
 choices[0][2] = "Directorios de nombres";
 choices[0][3] = "Colas de mensajer&iacute;a";
 answers[0] = 2;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 710. AGE A1 2015";
 preguntaids[0] = 710


//  Id pregunta: 1669 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;El lenguaje de programaci&oacute;n java tiene APIs para el protocolo de comunicaciones seguras Secure Sockets Layer (SSL)?.";
 choices[1]= new Array();
 choices[1][0] = "S&iacute;, por ejemplo, la Java Secure Socket Extensi&oacute;n (JSSE) que incluye clases que pueden ser instanciadas para crear canales seguros.";
 choices[1][1] = "En la actualidad para realizar las funciones de encriptaci&oacute;n de la informaci&oacute;n solo est&aacute; disponible la clase SSLSocket.";
 choices[1][2] = "Java solo admite SSL para programar clientes web.";
 choices[1][3] = "S&iacute;, cuenta con las CRL o listas de revocaci&oacute;n de certificados.";
 answers[1] = 0;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1669. ";
 preguntaids[1] = 1669


//  Id pregunta: 3161 Año de creación de pregunta: 2002
 questions[2]= "3)  El creador de JAVA es:";
 choices[2]= new Array();
 choices[2][0] = "Microsoft";
 choices[2][1] = "IBM";
 choices[2][2] = "SUN Microsystems";
 choices[2][3] = "CERN";
 answers[2] = 2;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3161. ";
 preguntaids[2] = 3161


//  Id pregunta: 1190 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale qu&eacute; JSR de Java define la especificaci&oacute;n de Portlets versi&oacute;n 2.0:";
 choices[3]= new Array();
 choices[3][0] = "JSR 268.";
 choices[3][1] = "JSR 186.";
 choices[3][2] = "JSR 286.";
 choices[3][3] = "JSR 127.";
 answers[3] = 2;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1190. ";
 preguntaids[3] = 1190


//  Id pregunta: 2918 Año de creación de pregunta: 2002
 questions[4]= "5)  JDeveloper es:";
 choices[4]= new Array();
 choices[4][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[4][1] = "Una base de datos";
 choices[4][2] = "Un gestor de contenidos";
 choices[4][3] = "Un gestor de informes";
 answers[4] = 0;
 units[4] = ['64', '65'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2918. ";
 preguntaids[4] = 2918


//  Id pregunta: 3333 Año de creación de pregunta: 2004
 questions[5]= "6)  &iquest;Qu&eacute; es un JNI?";
 choices[5]= new Array();
 choices[5][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[5][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[5][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[5][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[5] = 3;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3333. ";
 preguntaids[5] = 3333


//  Id pregunta: 2828 Año de creación de pregunta: 2002
 questions[6]= "7)  En Java, al declarar una variable de tipo array";
 choices[6]= new Array();
 choices[6][0] = "No es necesario indicar la longitud del objeto";
 choices[6][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[6][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = 0;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2828. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";
 preguntaids[6] = 2828


//  Id pregunta: 2479 Año de creación de pregunta: 2004
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[7]= new Array();
 choices[7][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los 'threads'";
 choices[7][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[7][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[7][3] = "La variable 'this' de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[7] = 1;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2479. ";
 preguntaids[7] = 2479


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[8]= "9)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[8]= new Array();
 choices[8][0] = "En sentencias switch para alterar el control de flujo.";
 choices[8][1] = "Para manejar excepciones.";
 choices[8][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[8][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 718. Junta de Extremadura A1 2015";
 preguntaids[8] = 718


//  Id pregunta: 1343 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[9]= new Array();
 choices[9][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesion stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[9][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[9][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, sequen necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[9][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1343. ";
 preguntaids[9] = 1343


//  Id pregunta: 2496 Año de creación de pregunta: 2004
 questions[10]= "11)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[10]= new Array();
 choices[10][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[10][1] = "Lo que en otros entornos de programaci&oacute;n se llama depurador o debugger";
 choices[10][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[10][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[10] = 0;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2496. Examen TIC MAP B 2004";
 preguntaids[10] = 2496


//  Id pregunta: 2593 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[11]= new Array();
 choices[11][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[11][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[11][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[11][3] = "Debido a las peculiares caracteristicas de Java, los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[11] = 2;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2593. ";
 preguntaids[11] = 2593


//  Id pregunta: 2810 Año de creación de pregunta: 2002
 questions[12]= "13)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Private o privadas";
 choices[12][1] = "Static o est&aacute;ticas";
 choices[12][2] = "Final o final";
 choices[12][3] = "System o sistema";
 answers[12] = 1;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2810. ";
 preguntaids[12] = 2810


//  Id pregunta: 2912 Año de creación de pregunta: 2002
 questions[13]= "14)  Indique una caracter&iacute;stica falsa de Java:";
 choices[13]= new Array();
 choices[13][0] = "Es interpretado y portable a distintas plataformas";
 choices[13][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[13][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[13][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[13] = 3;
 units[13] = ['64', '65'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2912. ";
 preguntaids[13] = 2912


//  Id pregunta: 1342 Año de creación de pregunta: 2016
 questions[14]= "15)  Throwable es la superclase de todos los errores y excepciones de lava SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[14]= new Array();
 choices[14][0] = "java. lang";
 choices[14][1] = "java.error";
 choices[14][2] = "java.util";
 choices[14][3] = "Throwable no es una clase, es un interface, y este pertenece al paquete java.io.";
 answers[14] = 0;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1342. ";
 preguntaids[14] = 1342


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[15]= "16)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[15]= new Array();
 choices[15][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[15][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[15][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[15][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[15] = 1;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 709. AGE A1 2015";
 preguntaids[15] = 709


//  Id pregunta: 1715 Año de creación de pregunta: 2016
 questions[16]= "17)  Para simular la herencia m&uacute;ltiple de otros lenguajes de programaci&oacute;n, JAVA emplea:";
 choices[16]= new Array();
 choices[16][0] = "Interfaces.";
 choices[16][1] = "Clases abstractas.";
 choices[16][2] = "Sobreescritura de m&eacute;todos.";
 choices[16][3] = "Conversiones impl&iacute;citas.";
 answers[16] = 0;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1715. ";
 preguntaids[16] = 1715


//  Id pregunta: 1714 Año de creación de pregunta: 2016
 questions[17]= "18)  En un entorno JAVA, la conexi&oacute;n entre m&oacute;dulos que componen una aplicaci&oacute;n se verifica en:";
 choices[17]= new Array();
 choices[17][0] = "Tiempo de compilaci&oacute;n.";
 choices[17][1] = "Tiempo de ejecuci&oacute;n.";
 choices[17][2] = "Tiempo de verificaci&oacute;n.";
 choices[17][3] = "Tiempo de ensamblaje.";
 answers[17] = 1;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1714. ";
 preguntaids[17] = 1714


//  Id pregunta: 2683 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[18]= new Array();
 choices[18][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[18][1] = "Un control ActiveX";
 choices[18][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 2;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2683. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";
 preguntaids[18] = 2683


//  Id pregunta: 1560 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes plataformas permite la implementaci&oacute;n de aplicaciones ricas de internet (RIA)?";
 choices[19]= new Array();
 choices[19][0] = "Java RIA";
 choices[19][1] = "Java EE";
 choices[19][2] = "Java ME";
 choices[19][3] = "Java FX";
 answers[19] = 3;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1560. ";
 preguntaids[19] = 1560


//  Id pregunta: 1359 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada en Java?";
 choices[20]= new Array();
 choices[20][0] = "switch";
 choices[20][1] = "break";
 choices[20][2] = "continue";
 choices[20][3] = "Then";
 answers[20] = 3;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1359. ";
 preguntaids[20] = 1359


//  Id pregunta: 2637 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[21]= new Array();
 choices[21][0] = "JXML";
 choices[21][1] = "JML";
 choices[21][2] = "JAXP";
 choices[21][3] = "Todas son falsas";
 answers[21] = 2;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2637. ";
 preguntaids[21] = 2637


//  Id pregunta: 1716 Año de creación de pregunta: 2016
 questions[22]= "23)  En Java Platform Enterprise Edition existe una tecnolog&iacute;a que simplifica la construcci&oacute;n de interfaces de usuario para aplicaciones Java Server. Mediante esta tecnolog&iacute;a los desarrolladores pueden construir r&aacute;pidamente aplicaciones web ensamblado componentes de interfaz de usuario reutilizables. Se&ntilde;ale cu&aacute;l es:";
 choices[22]= new Array();
 choices[22][0] = "JavaServer Pages.";
 choices[22][1] = "JavaServer Faces.";
 choices[22][2] = "JavaServer Servlets.";
 choices[22][3] = "JavaServer Components.";
 answers[22] = 1;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1716. ";
 preguntaids[22] = 1716


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[23]= "24)  El atributo de la etiqueta &lt;jsp:useBean&gt; encargado de especificar el &aacute;mbito o alcance que tendr&aacute; el bean es:";
 choices[23]= new Array();
 choices[23][0] = "request";
 choices[23][1] = "scope";
 choices[23][2] = "class";
 choices[23][3] = "session";
 answers[23] = 1;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 717. AGE A2 2015";
 preguntaids[23] = 717


//  Id pregunta: 1574 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una de las principales caracter&iacute;sticas del lenguaje JAVA:";
 choices[24]= new Array();
 choices[24][0] = "Orientaci&oacute;n a objetos";
 choices[24][1] = "Herencia M&uacute;ltiple";
 choices[24][2] = "Arquitectura Neutra";
 choices[24][3] = "Multithread";
 answers[24] = 1;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1574. ";
 preguntaids[24] = 1574


//  Id pregunta: 2916 Año de creación de pregunta: 2002
 questions[25]= "26)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[25]= new Array();
 choices[25][0] = "Siemens";
 choices[25][1] = "Sun Microsystems";
 choices[25][2] = "General Electric";
 choices[25][3] = "IBM";
 answers[25] = 1;
 units[25] = ['64', '65'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2916. ";
 preguntaids[25] = 2916


//  Id pregunta: 1717 Año de creación de pregunta: 2016
 questions[26]= "27)  Indicar la repuesta FALSA:";
 choices[26]= new Array();
 choices[26][0] = "Los Enterprise JavaBeans son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida.";
 choices[26][1] = "Existen tres tipos de Enterprise Beans: Session, entity y message-driven.";
 choices[26][2] = "Los componentes EJB pueden encontrarse f&iacute;sicamente ubicados en m&aacute;quinas distintas de las que albergan los componentes que les invocan.";
 choices[26][3] = "Los stateful session beans son componentes sin estado, es decir, no guardan informaci&oacute;n entre distintas llamadas de un cliente.";
 answers[26] = 3;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1717. ";
 preguntaids[26] = 1717


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[27]= new Array();
 choices[27][0] = "JAXP";
 choices[27][1] = "JNI";
 choices[27][2] = "JNDI";
 choices[27][3] = "JDBC";
 answers[27] = 1;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 714. AGE A1 2015";
 preguntaids[27] = 714


//  Id pregunta: 3247 Año de creación de pregunta: 2003
 questions[28]= "29)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[28]= new Array();
 choices[28][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[28][1] = "Una biblioteca de clases Java.";
 choices[28][2] = "Una interfaz de usuario.";
 choices[28][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[28] = 0;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3247. Junta Andaluc&iacute;a";
 preguntaids[28] = 3247


//  Id pregunta: 2827 Año de creación de pregunta: 2002
 questions[29]= "30)  En Java:";
 choices[29]= new Array();
 choices[29][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[29][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[29][2] = "Los programas son aplicaciones web de servidor";
 choices[29][3] = "Todas las anteriores respuestas son ciertas";
 answers[29] = 3;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2827. ";
 preguntaids[29] = 2827


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[30]= new Array();
 choices[30][0] = "SessionBean";
 choices[30][1] = "JavaBean";
 choices[30][2] = "MBeans";
 choices[30][3] = "MessageDrivenBean";
 answers[30] = 2;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 712. AGE A1 2015";
 preguntaids[30] = 712


//  Id pregunta: 2825 Año de creación de pregunta: 2002
 questions[31]= "32)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[31]= new Array();
 choices[31][0] = "Superset o superconjunto";
 choices[31][1] = "Package o paquete";
 choices[31][2] = "Superclass o Superclase";
 choices[31][3] = "Colection o Colecci&oacute;n";
 answers[31] = 1;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2825. ";
 preguntaids[31] = 2825


//  Id pregunta: 1499 Año de creación de pregunta: 2016
 questions[32]= "33)  Si decimos que JEE permite utilizar el concepto de sandbox (Java Sandbox), nos estamos refiriendo a que:";
 choices[32]= new Array();
 choices[32][0] = "Cada proceso se ejecuta limitado en los recursos proporcionados por la Java Virtual Machine, y no puede afectar a otros recursos del equipo.";
 choices[32][1] = "A la posibilidad de pasar par&aacute;metros por valor en cada mensaje.";
 choices[32][2] = "A la caracter&iacute;stica que le permite interactuar con elementos de la arquitectura .NET.";
 choices[32][3] = "Al entorno de pruebas integrado en la arquitectura JEE 5.";
 answers[32] = 0;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1499. ";
 preguntaids[32] = 1499


//  Id pregunta: 1345 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes productos lava dispone de un motor de workflow?";
 choices[33]= new Array();
 choices[33][0] = "Hibernate.";
 choices[33][1] = "Easy BPM.";
 choices[33][2] = "Spring.";
 choices[33][3] = "jBPM.";
 answers[33] = 3;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1345. ";
 preguntaids[33] = 1345


//  Id pregunta: 3278 Año de creación de pregunta: 2003
 questions[34]= "35)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[34]= new Array();
 choices[34][0] = "Es independiente del SO";
 choices[34][1] = "Es independiente de la plataforma";
 choices[34][2] = "Es independiente del HW";
 choices[34][3] = "Write once run everywhere";
 answers[34] = 3;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3278. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";
 preguntaids[34] = 3278


//  Id pregunta: 1481 Año de creación de pregunta: 2016
 questions[35]= "36)  El API de java utilizado para mapear XML&acute;s desde y hacia clases JAVA es:";
 choices[35]= new Array();
 choices[35][0] = "JAXP.";
 choices[35][1] = "JAXS.";
 choices[35][2] = "JAXB.";
 choices[35][3] = "WSDL.";
 answers[35] = 2;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1481. ";
 preguntaids[35] = 1481


//  Id pregunta: 1562 Año de creación de pregunta: 2016
 questions[36]= "37)  En lenguaje Java, a&ntilde;adir metadatos al c&oacute;digo fuente que est&aacute;n disponibles para la aplicaci&oacute;n en tiempo de ejecuci&oacute;n se consigue con una caracter&iacute;stica denominada:";
 choices[36]= new Array();
 choices[36][0] = "CDATA.";
 choices[36][1] = "Closure.";
 choices[36][2] = "Annotation.";
 choices[36][3] = "Enum.";
 answers[36] = 2;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1562. ";
 preguntaids[36] = 1562


//  Id pregunta: 2985 Año de creación de pregunta: 2002
 questions[37]= "38)  Los servlets:";
 choices[37]= new Array();
 choices[37][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[37][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[37][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[37][3] = "Todas las respuestas anteriores son correctas";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2985. ";
 preguntaids[37] = 2985


//  Id pregunta: 1346 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[38]= new Array();
 choices[38][0] = "Contexts and Dependency Injection.";
 choices[38][1] = "Common Display Interface.";
 choices[38][2] = "Context-Dependent Interface.";
 choices[38][3] = "Case-Driven Implementation.";
 answers[38] = 0;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1346. ";
 preguntaids[38] = 1346


//  Id pregunta: 2909 Año de creación de pregunta: 2002
 questions[39]= "40)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[39]= new Array();
 choices[39][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[39][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[39][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[39][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[39] = 2;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2909. ";
 preguntaids[39] = 2909


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es Java Web Start?";
 choices[40]= new Array();
 choices[40][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[40][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[40][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[40][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[40] = 3;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 713. AGE A1 2015";
 preguntaids[40] = 713


//  Id pregunta: 2826 Año de creación de pregunta: 2002
 questions[41]= "42)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[41]= new Array();
 choices[41][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[41][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[41][2] = "El objeto se destruye a s&iacute; mismo";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = 3;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2826. El objeto puede eliminarse cuando no hay referencias a &eacute;l.";
 preguntaids[41] = 2826


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n a Java y JavaScript indique la respuesta FALSA:";
 choices[42]= new Array();
 choices[42][0] = "JavaScript es un lenguaje de programaci&oacute;n posterior a Java.";
 choices[42][1] = "Java JDK 8 no integra un motor de JavaScript.";
 choices[42][2] = "JavaScript es un lenguaje interpretado, y Java es compilado.";
 choices[42][3] = "JavaScript es est&aacute;ndar, Java no.";
 answers[42] = 1;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 716. AGE A2 2015";
 preguntaids[42] = 716


//  Id pregunta: 2546 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Qu&eacute; significan las siglas JNI?";
 choices[43]= new Array();
 choices[43][0] = "Interfaz para llamar m&eacute;todos nativos";
 choices[43][1] = "Sistema de directorio";
 choices[43][2] = "Sistema para datamining";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2546. ";
 preguntaids[43] = 2546


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; tecnolog&iacute;a impide la ejecuci&oacute;n de los applets de Java en el navegador Chrome en sus &uacute;ltimas versiones?";
 choices[44]= new Array();
 choices[44][0] = "XQAPI";
 choices[44][1] = "PPAPI";
 choices[44][2] = "CRAPI";
 choices[44][3] = "NPAPI";
 answers[44] = 3;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 715. AGE A2 2015";
 preguntaids[44] = 715


//  Id pregunta: 1348 Año de creación de pregunta: 2016
 questions[45]= "46)  Elija la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[45][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[45][2] = "EI Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[45][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[45] = 0;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1348. ";
 preguntaids[45] = 1348


//  Id pregunta: 1713 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas se corresponde con una directiva JSP (Java Server Pages):";
 choices[46]= new Array();
 choices[46][0] = "destroy";
 choices[46][1] = "forward";
 choices[46][2] = "page";
 choices[46][3] = "out";
 answers[46] = 2;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1713. ";
 preguntaids[46] = 1713


//  Id pregunta: 2915 Año de creación de pregunta: 2002
 questions[47]= "48)  Java ME:";
 choices[47]= new Array();
 choices[47][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[47][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[47][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[47][3] = "Todas las anteriores respuestas son falsas";
 answers[47] = 0;
 units[47] = ['64', '65'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2915. ";
 preguntaids[47] = 2915


//  Id pregunta: 2914 Año de creación de pregunta: 2002
 questions[48]= "49)  Java ME es:";
 choices[48]= new Array();
 choices[48][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[48][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[48][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[48][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[48] = 1;
 units[48] = ['64', '65'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2914. ";
 preguntaids[48] = 2914


//  Id pregunta: 1939 Año de creación de pregunta: 2016
 questions[49]= "50)  JDBC es:";
 choices[49]= new Array();
 choices[49][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&Iacute;a ODBC.";
 choices[49][1] = "Un API (Application Programming Interface) que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[49][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet.";
 choices[49][3] = "EI est&aacute;ndar ODBC para bases de datos relacionales.";
 answers[49] = 1;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1939. ";
 preguntaids[49] = 1939


//  Id pregunta: 2973 Año de creación de pregunta: 2002
 questions[50]= "51)  Los applets de Java se ejecutan en el:";
 choices[50]= new Array();
 choices[50][0] = "Servidor web";
 choices[50][1] = "Cliente web";
 choices[50][2] = "Servidor de base de datos";
 choices[50][3] = "Servidor de webmail";
 answers[50] = 1;
 units[50] = ['64', '65'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2973. ";
 preguntaids[50] = 2973


//  Id pregunta: 3391 Año de creación de pregunta: 2006
 questions[51]= "52)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[51]= new Array();
 choices[51][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[51][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[51][2] = "En muchas ocasiones no puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[51][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[51] = 1;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3391. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";
 preguntaids[51] = 3391


//  Id pregunta: 1670 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;ndo utilizar&iacute;a el API JDBC?";
 choices[52]= new Array();
 choices[52][0] = "Cuando tenga que declarar los localizadores a base de datos o URL.";
 choices[52][1] = "Cuando quiera utilizar un dialecto SQL est&aacute;ndar contra cualquier base de datos.";
 choices[52][2] = "Cuando tuviera que realizar operaciones sobre una base de datos desde el lenguaje de programaci&oacute;n JAVA.";
 choices[52][3] = "Cuando tuviera que realizar operaciones sobre una base de datos desde el lenguaje de programaci&oacute;n NATURAL.";
 answers[52] = 2;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1670. ";
 preguntaids[52] = 1670


//  Id pregunta: 2521 Año de creación de pregunta: 2004
 questions[53]= "54)  Las aplicaciones Java son comprobadas:";
 choices[53]= new Array();
 choices[53][0] = "en tiempo de compilaci&oacute;n";
 choices[53][1] = "en tiempo de ejecuci&oacute;n";
 choices[53][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[53][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[53] = 2;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2521. Similar a examen TIC SS A 2003";
 preguntaids[53] = 2521


//  Id pregunta: 1169 Año de creación de pregunta: 2016
 questions[54]= "55)  El paquete Java SE 8 al que pertenece el interfaz List es:";
 choices[54]= new Array();
 choices[54][0] = "java.lang";
 choices[54][1] = "java.util";
 choices[54][2] = "java.collection";
 choices[54][3] = "List no es un interfaz Java, est&aacute; definido como clase abstracta.";
 answers[54] = 1;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1169. ";
 preguntaids[54] = 1169


//  Id pregunta: 2591 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[55]= new Array();
 choices[55][0] = "JavaScript";
 choices[55][1] = "Applet";
 choices[55][2] = "Servlet";
 choices[55][3] = "XML";
 answers[55] = 1;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2591. ";
 preguntaids[55] = 2591


//  Id pregunta: 3298 Año de creación de pregunta: 2004
 questions[56]= "57)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[56]= new Array();
 choices[56][0] = "Leer ficheros locales";
 choices[56][1] = "Cargar librer&iacute;as nativas";
 choices[56][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[56][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[56] = 2;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3298. ";
 preguntaids[56] = 3298


//  Id pregunta: 1170 Año de creación de pregunta: 2016
 questions[57]= "58)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Java BluePrints.";
 choices[57][1] = "Java Specification Request.";
 choices[57][2] = "Java Community Process.";
 choices[57][3] = "Java Pattern Spec.";
 answers[57] = 0;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1170. ";
 preguntaids[57] = 1170


//  Id pregunta: 1606 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Es posible incluir c&oacute;digo JavaScript en un script ASP?";
 choices[58]= new Array();
 choices[58][0] = "No, es imposible pues ASP es de Microsoft y JavaScript es un est&aacute;ndar abierto.";
 choices[58][1] = "S&iacute;, comenzando el documento con una sentencia &lt;%@ language=&quot;javascript&quot; %&gt;.";
 choices[58][2] = "S&iacute;, comenzando el documento con una sentencia &lt;% language=&quot;javascript&quot; %&gt;.";
 choices[58][3] = "S&iacute;, comenzando el documento con una sentencia &lt;% language=&quot;javascript&quot; %&gt;, y finaliz&aacute;ndolo con &lt;%/ language=&quot;javascript&quot; %&gt;.";
 answers[58] = 1;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1606. ";
 preguntaids[58] = 1606


//  Id pregunta: 2711 Año de creación de pregunta: 2002
 questions[59]= "60)  Cronol&oacute;gicamente, la aparici&oacute;n de CGI, applets y servlets ocurri&oacute; en el siguiente orden:";
 choices[59]= new Array();
 choices[59][0] = "CGI-&gt;servlets-&gt;applets";
 choices[59][1] = "Applets-&gt;servlets-&gt;CGI";
 choices[59][2] = "CGI-&gt;applets-&gt;servlets";
 choices[59][3] = "Servlets-&gt;CGI-&gt;applets";
 answers[59] = 2;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2711. ";
 preguntaids[59] = 2711


//  Id pregunta: 2566 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Qu&eacute; son los midlets?:";
 choices[60]= new Array();
 choices[60][0] = "Son aplicaciones Java para la capa de middleware";
 choices[60][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[60][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[60][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[60] = 3;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2566. ";
 preguntaids[60] = 2566


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[61]= "62)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[61]= new Array();
 choices[61][0] = "0";
 choices[61][1] = "1";
 choices[61][2] = "Tantos como peticiones concurrentes tenga.";
 choices[61][3] = "Tantos como le permita la memoria de la JVM.";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 711. AGE A1 2015";
 preguntaids[61] = 711


//  Id pregunta: 1480 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; sistema es el est&aacute;ndar para documentar programas escritos en lenguaje Java?";
 choices[62]= new Array();
 choices[62][0] = "Javadoc";
 choices[62][1] = "Docjava";
 choices[62][2] = "Javarem";
 choices[62][3] = "Remjava";
 answers[62] = 0;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1480. ";
 preguntaids[62] = 1480


//  Id pregunta: 3187 Año de creación de pregunta: 2003
 questions[63]= "64)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[63]= new Array();
 choices[63][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[63][1] = "Puede incluir un subdirectorio META-INF";
 choices[63][2] = "Puede incluir un fichero MANIFEST.MF";
 choices[63][3] = "Puede incluir clases e im&aacute;genes pero no sonidos";
 answers[63] = 3;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3187. ";
 preguntaids[63] = 3187


//  Id pregunta: 2531 Año de creación de pregunta: 2004
 questions[64]= "65)  En Java, respecto a la herencia de clases ...";
 choices[64]= new Array();
 choices[64][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[64][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[64][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[64][3] = "Todas las anteriores son falsas";
 answers[64] = 3;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2531. ";
 preguntaids[64] = 2531


//  Id pregunta: 1718 Año de creación de pregunta: 2016
 questions[65]= "66)  Los scriptlets se definen como:";
 choices[65]= new Array();
 choices[65][0] = "Expresiones entre las etiquetas &lt;%= y %&gt; que se eval&uacute;an y el resultado se convierte a una cadena embebida en JSP.";
 choices[65][1] = "Fragmentos de c&oacute;digo Java entre las etiquetas &lt;% y %&gt; y embebido en JSP";
 choices[65][2] = "Atributos generales entre etiquetas &lt;%@ y %&gt; asociados a un fragmento JavaScript";
 choices[65][3] = "Declaraciones de m&eacute;todos y variables entre etiquetas &lt;%! y %&gt; en una p&aacute;gina JSP.";
 answers[65] = 1;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1718. ";
 preguntaids[65] = 1718


//  Id pregunta: 1167 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la tecnolog&iacute;a JPA (Java Persistence API).";
 choices[66]= new Array();
 choices[66][0] = "El fichero &quot;persistence.xml&quot; permite la configuraci&oacute;n de JPA.";
 choices[66][1] = "Existen dos m&eacute;todos para gestionar las transacciones denominadas &quot;RESOURCE_LOCAL&quot; y &quot;JTA&quot;.";
 choices[66][2] = "JPQL es un lenguaje de consulta orientado a objetos, independiente de la plataforma y definido como parte de la especificaci&oacute;n JPA.";
 choices[66][3] = "Todas son correctas.";
 answers[66] = 3;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1167. ";
 preguntaids[66] = 1167


//  Id pregunta: 2883 Año de creación de pregunta: 2002
 questions[67]= "68)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[67]= new Array();
 choices[67][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[67][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[67][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = 1;
 units[67] = ['64', '65'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2883. ";
 preguntaids[67] = 2883


//  Id pregunta: 1168 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de las siguientes NO est&aacute; relacionada con la persistencia para Java EE:";
 choices[68]= new Array();
 choices[68][0] = "JPA.";
 choices[68][1] = "Hibernate.";
 choices[68][2] = "JSON.";
 choices[68][3] = "iBATIS.";
 answers[68] = 2;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1168. ";
 preguntaids[68] = 1168


//  Id pregunta: 3332 Año de creación de pregunta: 2004
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[69]= new Array();
 choices[69][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[69][1] = "Es dependiente de la plataforma";
 choices[69][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[69][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[69] = 1;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3332. ";
 preguntaids[69] = 3332


//  Id pregunta: 2983 Año de creación de pregunta: 2002
 questions[70]= "71)  Los programas fuente Java:";
 choices[70]= new Array();
 choices[70][0] = "Se compilan siempre";
 choices[70][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[70][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[70][3] = "Hay partes compiladas y partes interpretadas";
 answers[70] = 0;
 units[70] = ['64', '65'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2983. Siempre se compilan a Bytecode.";
 preguntaids[70] = 2983


//  Id pregunta: 1940 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[71]= new Array();
 choices[71][0] = "RMI";
 choices[71][1] = "JAXP";
 choices[71][2] = "JNOI";
 choices[71][3] = "JNI";
 answers[71] = 3;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1940. ";
 preguntaids[71] = 1940


//  Id pregunta: 2677 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; es JDBC?:";
 choices[72]= new Array();
 choices[72][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[72][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[72][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[72][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[72] = 1;
 units[72] = ['60', '61', '64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2677. ";
 preguntaids[72] = 2677


//  Id pregunta: 3006 Año de creación de pregunta: 2002
 questions[73]= "74)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[73]= new Array();
 choices[73][0] = "Controles Java";
 choices[73][1] = "Applets";
 choices[73][2] = "Servlets";
 choices[73][3] = "Aplicaciones CGI";
 answers[73] = 1;
 units[73] = ['64', '65'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3006. ";
 preguntaids[73] = 3006


//  Id pregunta: 1604 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un componente de la arquitectura J2EE?";
 choices[74]= new Array();
 choices[74][0] = "SAAJ";
 choices[74][1] = "JAX-RPC";
 choices[74][2] = "JTA";
 choices[74][3] = "MJS";
 answers[74] = 3;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1604. ";
 preguntaids[74] = 1604


