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
//  Id pregunta: 6532 Año de creación de pregunta: 2003
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[0]= new Array();
 choices[0][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[0][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[0][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[0][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[0] = 3;
 units[0] = ['54'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6532. ";
 preguntaids[0] = 6532


//  Id pregunta: 7916 Año de creación de pregunta: 2011
 questions[1]= "2)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[1]= new Array();
 choices[1][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[1][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[1][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[1][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[1] = 0;
 units[1] = ['54'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7916. Examen TIC A1 2010";
 preguntaids[1] = 7916


//  Id pregunta: 2580 Año de creación de pregunta: 2002
 questions[2]= "3)  ALGOL, COBOL y FORTRAN son lenguajes de programaci&oacute;n de la d&eacute;cada de los:";
 choices[2]= new Array();
 choices[2][0] = "40s";
 choices[2][1] = "50s";
 choices[2][2] = "60s";
 choices[2][3] = "70s";
 answers[2] = 1;
 units[2] = ['54'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2580. ";
 preguntaids[2] = 2580


//  Id pregunta: 2649 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[3]= new Array();
 choices[3][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[3][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[3][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[3][3] = "Todos las respuestas anteriores son correctas";
 answers[3] = 0;
 units[3] = ['54'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2649. ";
 preguntaids[3] = 2649


//  Id pregunta: 9382 Año de creación de pregunta: 2014
 questions[4]= "5)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "TIER I";
 choices[4][1] = "TIER II";
 choices[4][2] = "TIER III";
 choices[4][3] = "TIER IV";
 answers[4] = 2;
 units[4] = ['54'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9382. Examen TIC A2  2013";
 preguntaids[4] = 9382


//  Id pregunta: 2655 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[5]= new Array();
 choices[5][0] = "Segunda";
 choices[5][1] = "Tercera";
 choices[5][2] = "Cuarta";
 choices[5][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[5] = 2;
 units[5] = ['54'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2655. ";
 preguntaids[5] = 2655


//  Id pregunta: 8672 Año de creación de pregunta: 2013
 questions[6]= "7)  &iquest;En qu&eacute; se parece CICS (Customer Information Control System) e IMS (Information Management System)?";
 choices[6]= new Array();
 choices[6][0] = "Ambos son sistemas transaccionales";
 choices[6][1] = "No tienen nada que ver";
 choices[6][2] = "Son protocolos de acceso a ficheros";
 choices[6][3] = "Son correctas A) y C)";
 answers[6] = 0;
 units[6] = ['54'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8672. Examen TIC A1 2011";
 preguntaids[6] = 8672


//  Id pregunta: 5479 Año de creación de pregunta: 2007
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre granjas de servidores (web farms) no es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Una granja es un tipo de sistema de procesamiento distribuido, que consiste en un grupo de servidores interconectados trabajando de forma conjunta como un &uacute;nico recurso de computaci&oacute;n integrado.";
 choices[7][1] = "En una granja de servidores, los servidores pueden tener sistemas operativos individuales o compartidos, y tambi&eacute;n debe ser instalados para proporcionar el balanceo de la carga cuando hay muchas peticiones al servidor";
 choices[7][2] = "La decisi&oacute;n para distribuir la carga a un servidor en particular debe ser una opci&oacute;n preprogramada est&aacute;ticamente, pues es imposible la reconfiguraci&oacute;n din&aacute;mica.";
 choices[7][3] = "La red es la parte m&aacute;s cr&iacute;tica de una granja. Su capacidad y funcionamiento influyen en el rendimiento del sistema completo";
 answers[7] = 2;
 units[7] = ['54'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5479. ";
 preguntaids[7] = 5479


//  Id pregunta: 5478 Año de creación de pregunta: 2007
 questions[8]= "9)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[8]= new Array();
 choices[8][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[8][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[8][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[8][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[8] = 3;
 units[8] = ['54'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 5478. ";
 preguntaids[8] = 5478


//  Id pregunta: 3086 Año de creación de pregunta: 2002
 questions[9]= "10)  Un sistema inform&aacute;tico SCADA es:";
 choices[9]= new Array();
 choices[9][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[9][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[9][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[9][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[9] = 0;
 units[9] = ['54'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3086. ";
 preguntaids[9] = 3086


//  Id pregunta: 1858 Año de creación de pregunta: 2016
 questions[10]= "11)  Se denomina hypervisor a:";
 choices[10]= new Array();
 choices[10][0] = "Proceso principal del kernel de un sistema operativo.";
 choices[10][1] = "Aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[10][2] = "Software sobre el que se ejecutan las m&aacute;quinas virtuales.";
 choices[10][3] = "Sistema operativo modificado para ser virtualizado.";
 answers[10] = 2;
 units[10] = ['54'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1858. ";
 preguntaids[10] = 1858


//  Id pregunta: 5151 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;Cual de los siguientes es un monitor de transacciones?";
 choices[11]= new Array();
 choices[11][0] = "Tuxedo";
 choices[11][1] = "Tivoli";
 choices[11][2] = "Unicenter TNG";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = 0;
 units[11] = ['54'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 5151. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";
 preguntaids[11] = 5151


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "VMware ESX";
 choices[12][1] = "XenServer";
 choices[12][2] = "Alfresco";
 choices[12][3] = "Microsoft Hyper-V";
 answers[12] = 2;
 units[12] = ['54'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 656. AGE A1 2015";
 preguntaids[12] = 656


//  Id pregunta: 8464 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "XEN";
 choices[13][1] = "KVM";
 choices[13][2] = "UML";
 choices[13][3] = "Todas lo son";
 answers[13] = 3;
 units[13] = ['54'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8464. ";
 preguntaids[13] = 8464


//  Id pregunta: 8724 Año de creación de pregunta: 2013
 questions[14]= "15)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[14]= new Array();
 choices[14][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[14][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[14][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[14][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[14] = 2;
 units[14] = ['54'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8724. Examen TICA2-2011";
 preguntaids[14] = 8724


//  Id pregunta: 10696 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n Popek y Goldberg, &iquest;Qu&eacute; caracteristicas debe de tener un sistema para que sea virtualizable?";
 choices[15]= new Array();
 choices[15][0] = "Equivalencia.";
 choices[15][1] = "Control de Recursos.";
 choices[15][2] = "Eficiencia.";
 choices[15][3] = "Todos los anteriores.";
 answers[15] = 3;
 units[15] = ['54'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10696. ";
 preguntaids[15] = 10696


//  Id pregunta: 10326 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un servidor de correo electr&oacute;nico?";
 choices[16]= new Array();
 choices[16][0] = "Sendmail";
 choices[16][1] = "Microsoft Exchange";
 choices[16][2] = "IBM Lotus Domino";
 choices[16][3] = "SMTP Websphere";
 answers[16] = 3;
 units[16] = ['54'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10326. IBM Websphere es un servidor de apps, y SMTP un protocolo";
 preguntaids[16] = 10326


