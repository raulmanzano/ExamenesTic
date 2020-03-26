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
//  Id pregunta: 3629 Año de creación de pregunta: 2002
 questions[0]= "1)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[0]= new Array();
 choices[0][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[0][1] = "Los indices se almacenan dentro de la base de datos";
 choices[0][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[0][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[0] = 3;
 units[0] = ['100'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3629. ";
 preguntaids[0] = 3629


//  Id pregunta: 3614 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes funciones no es importante para un sistema operativo de tiempo real?";
 choices[1]= new Array();
 choices[1][0] = "Manejo eficaz de interrupciones.";
 choices[1][1] = "Gran manejo de memoria virtual.";
 choices[1][2] = "Mecanismos potentes y vers&aacute;tiles de comunicaci&oacute;n entre procesos.";
 choices[1][3] = "Funciones sencillas, &aacute;giles y potentes para el manejo de ficheros.";
 answers[1] = 1;
 units[1] = ['86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3614. ";
 preguntaids[1] = 3614


//  Id pregunta: 3581 Año de creación de pregunta: 2002
 questions[2]= "3)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[2]= new Array();
 choices[2][0] = "Establecer los objetivos y metas principales";
 choices[2][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[2][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[2][3] = "Todas las anteriores respuestas son correctas";
 answers[2] = 3;
 units[2] = ['83'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3581. ";
 preguntaids[2] = 3581


//  Id pregunta: 3592 Año de creación de pregunta: 2002
 questions[3]= "4)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[3]= new Array();
 choices[3][0] = "Eficiencia";
 choices[3][1] = "Correspondencia";
 choices[3][2] = "Eficacia";
 choices[3][3] = "Capacidad";
 answers[3] = 2;
 units[3] = ['83'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3592. ";
 preguntaids[3] = 3592


//  Id pregunta: 3656 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto a las m&eacute;tricas de calidad del software?:";
 choices[4]= new Array();
 choices[4][0] = "COCOMO es un modelo de estimaci&oacute;n del software que se basa en el n&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[4][1] = "La m&eacute;trica de complejidad del software conocida como de los puntos de funci&oacute;n se obtiene utilizando una relaci&oacute;n emp&iacute;rica basada en medidas del dominio de informaci&oacute;n y en valoraciones subjetivas";
 choices[4][2] = "La t&eacute;cnica de Halstead sirve para medir la complejidad de un desarrollo bas&aacute;ndose en su 'longitud', su 'vocabulario' y su 'volumen', que se obtienen mediante ciertas ecuaciones que utilizan el n&uacute;mero de operadores y operandos del desarrollo";
 choices[4][3] = "Son ciertas todas las anteriores";
 answers[4] = 3;
 units[4] = ['93'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3656. ";
 preguntaids[4] = 3656


//  Id pregunta: 3641 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;C&oacute;mo conviene que sea el acoplamiento?";
 choices[5]= new Array();
 choices[5][0] = "M&aacute;ximo.";
 choices[5][1] = "M&iacute;nimo.";
 choices[5][2] = "No es importante.";
 choices[5][3] = "Por defecto.";
 answers[5] = 1;
 units[5] = ['89'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3641. ";
 preguntaids[5] = 3641


//  Id pregunta: 3621 Año de creación de pregunta: 2002
 questions[6]= "7)  El Sistema de Gesti&oacute;n del Diccionario de Recursos de Informaci&oacute;n (SGDRI):";
 choices[6]= new Array();
 choices[6][0] = "Es un componente del Sistema de Gesti&oacute;n de Base de Datos (SGBD) del sistema de informaci&oacute;n";
 choices[6][1] = "Se puede apoyar en el SGBD, en el Sistema de Gesti&oacute;n de Ficheros y en el sistema operativo";
 choices[6][2] = "Permite el almacenamiento de la sintaxis y la sem&aacute;ntica de los diferentes lenguajes que soporta los componentes DRI";
 choices[6][3] = "Describe los datos, componentes f&iacute;sicos y elementos del entorno que integran cada subsistema";
 answers[6] = 1;
 units[6] = ['100'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3621. posible referencia:http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-152.pdf";
 preguntaids[6] = 3621


//  Id pregunta: 3587 Año de creación de pregunta: 2004
 questions[7]= "8)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[7]= new Array();
 choices[7][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[7][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[7][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[7][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[7] = 1;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3587. Pregunta Junta Andalucia - A";
 preguntaids[7] = 3587


//  Id pregunta: 3586 Año de creación de pregunta: 2004
 questions[8]= "9)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[8]= new Array();
 choices[8][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[8][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[8][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[8][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[8] = 0;
 units[8] = ['84', '86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3586. Pregunta Junta Andalucia - A";
 preguntaids[8] = 3586


//  Id pregunta: 3632 Año de creación de pregunta: 2002
 questions[9]= "10)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[9]= new Array();
 choices[9][0] = "Est&aacute;n integradas por campos";
 choices[9][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[9][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[9][3] = "Se almacenan en tablas";
 answers[9] = 2;
 units[9] = ['100'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3632. ";
 preguntaids[9] = 3632


//  Id pregunta: 3642 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;C&oacute;mo conviene que sea la cohesi&oacute;n entre m&oacute;dulos?";
 choices[10]= new Array();
 choices[10][0] = "M&aacute;xima.";
 choices[10][1] = "M&iacute;nima.";
 choices[10][2] = "No es importante.";
 choices[10][3] = "Por defecto.";
 answers[10] = 0;
 units[10] = ['89'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3642. ";
 preguntaids[10] = 3642


//  Id pregunta: 3655 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[11]= new Array();
 choices[11][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[11][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[11][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[11][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[11] = 3;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3655. ";
 preguntaids[11] = 3655


//  Id pregunta: 3609 Año de creación de pregunta: 2002
 questions[12]= "13)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[12][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[12][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[12][3] = "No se incluyen los gastos de comunicaciones";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3609. ";
 preguntaids[12] = 3609


//  Id pregunta: 3597 Año de creación de pregunta: 2004
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[13]= new Array();
 choices[13][0] = "Las particiones de equivalencia";
 choices[13][1] = "Prueba del camino b&aacute;sico";
 choices[13][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[13][3] = "Los grafos causa-efecto";
 answers[13] = 1;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3597. ";
 preguntaids[13] = 3597


//  Id pregunta: 3638 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;A cu&aacute;nto equivale el trabajo de un hombre por mes en COCOMO, medido en horas de trabajo?:";
 choices[14]= new Array();
 choices[14][0] = "140 horas";
 choices[14][1] = "150 horas";
 choices[14][2] = "172 horas";
 choices[14][3] = "152 horas";
 answers[14] = 3;
 units[14] = ['94'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3638. ";
 preguntaids[14] = 3638


//  Id pregunta: 3601 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[15]= new Array();
 choices[15][0] = "Integridad";
 choices[15][1] = "Sencillez";
 choices[15][2] = "Mantenibilidad";
 choices[15][3] = "Portabilidad";
 answers[15] = 1;
 units[15] = ['93'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3601. ";
 preguntaids[15] = 3601


//  Id pregunta: 3647 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso implantaci&oacute;n y aceptaci&oacute;n del sistema de informaci&oacute;n?:";
 choices[16]= new Array();
 choices[16][0] = "Preparaci&oacute;n del mantenimiento";
 choices[16][1] = "Carga de datos al entorno de operaci&oacute;n";
 choices[16][2] = "Pruebas de aceptaci&oacute;n del sistema";
 choices[16][3] = "Todas las anteriores";
 answers[16] = 3;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3647. ";
 preguntaids[16] = 3647


//  Id pregunta: 3618 Año de creación de pregunta: 2002
 questions[17]= "18)  DARTS es el acr&oacute;nimo de:";
 choices[17]= new Array();
 choices[17][0] = "Data Redesign for Transactional Systems.";
 choices[17][1] = "Design Aproach for Real Time Systems.";
 choices[17][2] = "Design Aproach for Real Transactional Systems.";
 choices[17][3] = "No es acr&oacute;nimo de nada.";
 answers[17] = 1;
 units[17] = ['86'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3618. ";
 preguntaids[17] = 3618


//  Id pregunta: 3605 Año de creación de pregunta: 2002
 questions[18]= "19)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[18]= new Array();
 choices[18][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[18][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[18][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[18][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[18] = 1;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3605. ";
 preguntaids[18] = 3605


//  Id pregunta: 3654 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[19]= new Array();
 choices[19][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[19][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[19][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[19][3] = "Todas las anteriores respuestas son ciertas";
 answers[19] = 3;
 units[19] = ['85'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3654. ";
 preguntaids[19] = 3654


//  Id pregunta: 3593 Año de creación de pregunta: 2004
 questions[20]= "21)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[20]= new Array();
 choices[20][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[20][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[20][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[20][3] = "Paso a Producci&oacute;n";
 answers[20] = 1;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3593. Pregunta Junta Andalucia - A";
 preguntaids[20] = 3593


//  Id pregunta: 3639 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;A qu&eacute; se refieren las normas ISO 14000?";
 choices[21]= new Array();
 choices[21][0] = "A la calidad en los procesos productivos";
 choices[21][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[21][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[21][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[21] = 1;
 units[21] = ['98'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3639. ";
 preguntaids[21] = 3639


//  Id pregunta: 3612 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales &quot;silencios documentales&quot;?:";
 choices[22]= new Array();
 choices[22][0] = "A la informaci&oacute;n excedente";
 choices[22][1] = "A la informaci&oacute;n no excedente";
 choices[22][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[22][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[22] = 3;
 units[22] = ['100', '99'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3612. ";
 preguntaids[22] = 3612


//  Id pregunta: 3600 Año de creación de pregunta: 2004
 questions[23]= "24)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[23]= new Array();
 choices[23][0] = "Liderazgo";
 choices[23][1] = "Resultados Empresariales";
 choices[23][2] = "Pol&iacute;ticas y estrategias";
 choices[23][3] = "Valor de las acciones";
 answers[23] = 3;
 units[23] = ['98'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3600. ";
 preguntaids[23] = 3600


//  Id pregunta: 3615 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un sistema de tiempo real?";
 choices[24]= new Array();
 choices[24][0] = "Control de seguimiento de sat&eacute;lites.";
 choices[24][1] = "Control de edificios inteligentes.";
 choices[24][2] = "N&oacute;mina de una empresa.";
 choices[24][3] = "Reserva de billetes de una compa&ntilde;&iacute;a de transportes interurbana.";
 answers[24] = 2;
 units[24] = ['86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3615. ";
 preguntaids[24] = 3615


//  Id pregunta: 3604 Año de creación de pregunta: 2004
 questions[25]= "26)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[25]= new Array();
 choices[25][0] = "Cambios precisos para corregir errores del software";
 choices[25][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[25][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[25][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3604. Pregunta Junta Andalucia - A";
 preguntaids[25] = 3604


//  Id pregunta: 3636 Año de creación de pregunta: 2002
 questions[26]= "27)  De los siguientes, &iquest;cu&aacute;l es un SGBD orientado a objetos puro?:";
 choices[26]= new Array();
 choices[26][0] = "GEMSTONE";
 choices[26][1] = "ONTOS";
 choices[26][2] = "OBJECT-DB";
 choices[26][3] = "DOMINIQUE";
 answers[26] = 0;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3636. Ser&aacute; puro OO si el lenguage que usa es puramente OO. Y eso solo lo cumple Smalltalk, de entre esas opciones.";
 preguntaids[26] = 3636


//  Id pregunta: 3625 Año de creación de pregunta: 2002
 questions[27]= "28)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[27]= new Array();
 choices[27][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[27][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[27][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[27][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[27] = 2;
 units[27] = ['100'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3625. ";
 preguntaids[27] = 3625


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[28]= "29)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[28]= new Array();
 choices[28][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[28][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[28][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[28][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[28] = 0;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[28] = 3631


//  Id pregunta: 3658 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[29]= new Array();
 choices[29][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[29][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[29][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[29][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[29] = 1;
 units[29] = ['84'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3658. ";
 preguntaids[29] = 3658


//  Id pregunta: 3649 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Upsizing&quot;?:";
 choices[30]= new Array();
 choices[30][0] = "Las aplicaciones se elevan a la gerencia de la organizaci&oacute;n";
 choices[30][1] = "El &quot;upsizing&quot; es lo que queda de un &quot;righsizing&quot; cuando se le hace un &quot;downsizing&quot;";
 choices[30][2] = "S&oacute;lo se realiza en algunos sistemas";
 choices[30][3] = "Con la tecnolog&iacute;a web ya no tiene sentido hablar de &quot;upsizing&quot; ya que es centralizada";
 answers[30] = 2;
 units[30] = ['95'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3649. ";
 preguntaids[30] = 3649


//  Id pregunta: 3602 Año de creación de pregunta: 2004
 questions[31]= "32)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[31]= new Array();
 choices[31][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[31][1] = "Documentaci&oacute;n";
 choices[31][2] = "Diccionario de datos";
 choices[31][3] = "todas las anteriores";
 answers[31] = 3;
 units[31] = ['84', '86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3602. ";
 preguntaids[31] = 3602


//  Id pregunta: 3623 Año de creación de pregunta: 2002
 questions[32]= "33)  En la actualidad existen dos est&aacute;ndares importantes sobre diccionario de recursos de la informaci&oacute;n. Entre los organismos que han participado en su elaboraci&oacute;n est&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "IEEE";
 choices[32][1] = "CENELEC";
 choices[32][2] = "DELFOS";
 choices[32][3] = "IEC";
 answers[32] = 3;
 units[32] = ['100'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3623. E est&aacute;ndar ISO/IEC 10728:1993 versa sobre Diccionarios de Recursos de Informaci&oacute;n (http://www.iso.org/iso/catalogue_detail.htm?csnumber=18821)";
 preguntaids[32] = 3623


//  Id pregunta: 3590 Año de creación de pregunta: 2002
 questions[33]= "34)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[33]= new Array();
 choices[33][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[33][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[33][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[33][3] = "Todas son falsas";
 answers[33] = 3;
 units[33] = ['84', '86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3590. ";
 preguntaids[33] = 3590


//  Id pregunta: 3613 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no  es de un sistema de tiempo real?";
 choices[34]= new Array();
 choices[34][0] = "Fuertes restricciones en el tiempo de respuesta.";
 choices[34][1] = "La informaci&oacute;n debe estar permanentemente actualizada.";
 choices[34][2] = "El sistema permanecer&aacute; permanentemente activo contestando a cada evento seg&uacute;n las caracter&iacute;sticas del mismo y a la disposici&oacute;n de los recursos.";
 choices[34][3] = "Alto rendimiento del sistema tanto hardware como software, funcionando conjuntamente, lo que hace que el dise&ntilde;ador se encuentre con fuertes problemas de integraci&oacute;n de diversas tecnolog&iacute;as.";
 answers[34] = 2;
 units[34] = ['86'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3613. ";
 preguntaids[34] = 3613


//  Id pregunta: 3651 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto al diccionario de datos?";
 choices[35]= new Array();
 choices[35][0] = "El diccionario de datos es complementario a otras t&eacute;cnicas como diagramas de flujo de datos o diagramas entidad/relaci&oacute;n";
 choices[35][1] = "En general, las entidades del diagrama entidad/relaci&oacute;n se corresponden a los almacenes del diagrama de flujo de datos y el diccionario de datos";
 choices[35][2] = "El s&iacute;mbolo &quot;@&quot; se suele utilizar como identificador o clave de acceso en el caso de almacenes";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = 3;
 units[35] = ['86'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3651. ";
 preguntaids[35] = 3651


//  Id pregunta: 3616 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l no es un requisito para un software de tiempo real?";
 choices[36]= new Array();
 choices[36][0] = "Predecible.";
 choices[36][1] = "Encapsulado.";
 choices[36][2] = "Fiable.";
 choices[36][3] = "F&aacute;cil de mantener.";
 answers[36] = 1;
 units[36] = ['86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3616. ";
 preguntaids[36] = 3616


//  Id pregunta: 3626 Año de creación de pregunta: 2002
 questions[37]= "38)  En un sistema de tiempo real, la captura de est&iacute;mulos del entorno por el sistema se puede llevar  cabo por comprobaci&oacute;n de los dispositivos sensores cada cierto intervalo de tiempo. Esta t&eacute;cnica se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Muestreo o 'polling'.";
 choices[37][1] = "Tiempo real cr&iacute;tico.";
 choices[37][2] = "Interrupci&oacute;n.";
 choices[37][3] = "Tiempo real no cr&iacute;tico.";
 answers[37] = 0;
 units[37] = ['86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3626. ";
 preguntaids[37] = 3626


//  Id pregunta: 3634 Año de creación de pregunta: 2004
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[38]= new Array();
 choices[38][0] = "An&aacute;lisis de impacto";
 choices[38][1] = "Catalogaci&oacute;n";
 choices[38][2] = "Planificaci&oacute;n";
 choices[38][3] = "Pruebas de regresi&oacute;n";
 answers[38] = 1;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3634. Pregunta Junta Andalucia - A";
 preguntaids[38] = 3634


//  Id pregunta: 3633 Año de creación de pregunta: 2004
 questions[39]= "40)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[39][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[39][2] = "El equipo de mantenimiento y el jefe de proyecto";
 choices[39][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[39] = 2;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3633. Pregunta Junta Andalucia - A";
 preguntaids[39] = 3633


//  Id pregunta: 3598 Año de creación de pregunta: 2004
 questions[40]= "41)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[40]= new Array();
 choices[40][0] = "la programaci&oacute;n funcional";
 choices[40][1] = "El acoplamiento d&eacute;bil";
 choices[40][2] = "La ocultaci&oacute;n de la implementacion";
 choices[40][3] = "el polimorfismo";
 answers[40] = 0;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3598. ";
 preguntaids[40] = 3598


//  Id pregunta: 3640 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede certificarse una empresa?:";
 choices[41]= new Array();
 choices[41][0] = "9001, 9002 y 9003";
 choices[41][1] = "S&oacute;lo 9001";
 choices[41][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[41][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[41] = 1;
 units[41] = ['98'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3640. ";
 preguntaids[41] = 3640


//  Id pregunta: 3610 Año de creación de pregunta: 2002
 questions[42]= "43)  Seg&uacute;n Roger S. Pressman, entre los principios del an&aacute;lisis de requerimientos tenemos:";
 choices[42]= new Array();
 choices[42][0] = "El dominio de la Informaci&oacute;n, as&iacute; como el dominio funcional de un problema debe ser representado y comprendido";
 choices[42][1] = "El problema debe subdividirse de forma que se descubran los detalles de una manera progresiva";
 choices[42][2] = "Deben desarrollarse las representaciones l&oacute;gicas y f&iacute;sicas del sistema";
 choices[42][3] = "Todas las anteriores son ciertas";
 answers[42] = 3;
 units[42] = ['84'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3610. ";
 preguntaids[42] = 3610


//  Id pregunta: 3619 Año de creación de pregunta: 2002
 questions[43]= "44)  De las siguientes bases de datos se&ntilde;alar la que no tiene car&aacute;cter documental:";
 choices[43]= new Array();
 choices[43][0] = "KNOSYS";
 choices[43][1] = "STAIRS";
 choices[43][2] = "ADABAS";
 choices[43][3] = "MISTRAL";
 answers[43] = 2;
 units[43] = ['99'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3619. ";
 preguntaids[43] = 3619


//  Id pregunta: 3594 Año de creación de pregunta: 2004
 questions[44]= "45)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[44]= new Array();
 choices[44][0] = "M&eacute;tricas de productividad";
 choices[44][1] = "M&eacute;tricas de fiabilidad";
 choices[44][2] = "M&eacute;tricas de rendimiento";
 choices[44][3] = "M&eacute;tricas de Complejidad";
 answers[44] = 2;
 units[44] = ['93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3594. ";
 preguntaids[44] = 3594


//  Id pregunta: 3657 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes al paradigma de desarrollo mediante prototipos es cierta?:";
 choices[45]= new Array();
 choices[45][0] = "Est&aacute; indicado cuando las especificaciones funcionales del usuario no se pueden definir en una fase inicial del proyecto";
 choices[45][1] = "Est&aacute; indicado cuando varias aplicaciones independientemente desarrolladas deban ser ligadas estrechamente";
 choices[45][2] = "Coincide con el modelo de desarrollo evolutivo";
 choices[45][3] = "En este modelo, el sistema operativo, lenguaje de programaci&oacute;n y algoritmos son las &uacute;nicas coincidencias entre prototipo y sistema final";
 answers[45] = 0;
 units[45] = ['90'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3657. ";
 preguntaids[45] = 3657


//  Id pregunta: 3588 Año de creación de pregunta: 2002
 questions[46]= "47)  Indicar la afirmaci&oacute;n falsa sobre la naturaleza del software:";
 choices[46]= new Array();
 choices[46][0] = "Es independiente del hardware y del entorno en el que se ejecuta";
 choices[46][1] = "Es f&aacute;cil de modificar pero muy dif&iacute;cil de validar";
 choices[46][2] = "Tiene un concepto de fiabilidad diferente al del material: los errores provienen de su definici&oacute;n y no de su deterioro";
 choices[46][3] = "Es invisible, se manifiesta a trav&eacute;s del hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 answers[46] = 0;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3588. ";
 preguntaids[46] = 3588


//  Id pregunta: 3603 Año de creación de pregunta: 2002
 questions[47]= "48)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[47]= new Array();
 choices[47][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[47][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[47][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[47][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[47] = 3;
 units[47] = ['83'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3603. ";
 preguntaids[47] = 3603


//  Id pregunta: 3611 Año de creación de pregunta: 2002
 questions[48]= "49)  Sobre la naturaleza del software, entre las caracter&iacute;sticas que lo determinan y lo diferencian tenemos:";
 choices[48]= new Array();
 choices[48][0] = "Es de existencia inmaterial";
 choices[48][1] = "Es invisible, se manifiesta a trav&eacute;s de Hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 choices[48][2] = "Es una t&eacute;cnica muy madura, en la que existen datos hist&oacute;ricos importantes";
 choices[48][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son ciertas";
 answers[48] = 3;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3611. ";
 preguntaids[48] = 3611


//  Id pregunta: 3607 Año de creación de pregunta: 2004
 questions[49]= "50)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[49]= new Array();
 choices[49][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[49][1] = "Registro de cambios";
 choices[49][2] = "Registro de petici&oacute;n";
 choices[49][3] = "Cat&aacute;logo de peticiones";
 answers[49] = 2;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3607. Pregunta Junta Andalucia - A";
 preguntaids[49] = 3607


//  Id pregunta: 3645 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[50]= new Array();
 choices[50][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[50][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[50][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[50][3] = "Todas son falsas";
 answers[50] = 2;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3645. ";
 preguntaids[50] = 3645


//  Id pregunta: 3589 Año de creación de pregunta: 2004
 questions[51]= "52)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[51][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[51][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[51][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[51] = 2;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3589. Pregunta Junta Andalucia - A";
 preguntaids[51] = 3589


//  Id pregunta: 3635 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest; De los siguientes, cu&aacute;l es un lenguaje orientado a objetos puro?:";
 choices[52]= new Array();
 choices[52][0] = "Dominum";
 choices[52][1] = "PureLisp";
 choices[52][2] = "Eiffel";
 choices[52][3] = "Domino";
 answers[52] = 2;
 units[52] = ['85'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3635. Eiffel es Orientado a Objetos, de modo que la respuesta v&aacute;lida s&oacute;lo puede ser la C";
 preguntaids[52] = 3635


//  Id pregunta: 3591 Año de creación de pregunta: 2004
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?";
 choices[53]= new Array();
 choices[53][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[53][1] = "Diagrama de Despliegue";
 choices[53][2] = "Diagrama de Flujo de Datos (DFD)";
 choices[53][3] = "Diagrama de Interacci&oacute;n";
 answers[53] = 2;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3591. Pregunta Junta Andalucia - A";
 preguntaids[53] = 3591


//  Id pregunta: 3637 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[54]= new Array();
 choices[54][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[54][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[54][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[54][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[54] = 1;
 units[54] = ['93'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3637. ";
 preguntaids[54] = 3637


//  Id pregunta: 3595 Año de creación de pregunta: 2004
 questions[55]= "56)  &iquest;Qu&eacute; t&eacute;cnica se puede usar para medir el tama&ntilde;o";
 choices[55]= new Array();
 choices[55][0] = "Program Evaluation and Review Tecnique (PERT)";
 choices[55][1] = "Diagrama de extrapolaci&oacute;n";
 choices[55][2] = "M&eacute;trica Bang";
 choices[55][3] = "WBS (Work Breakdown Structure)";
 answers[55] = 2;
 units[55] = ['94'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3595. Examen Seguridad Social-A 2004";
 preguntaids[55] = 3595


//  Id pregunta: 3648 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Downsizing&quot;?";
 choices[56]= new Array();
 choices[56][0] = "El downsizing centraliza los procesos en sistemas tipo main-frame.";
 choices[56][1] = "Pretende acercar el proceso all&iacute; donde se va a realizar.";
 choices[56][2] = "Acerca los servidores a los Centros de Proceso de Datos m&aacute;s proximos a la gerencia de la empresa.";
 choices[56][3] = "Siempre que se hace downsizing se pide autorizaci&oacute;n al usuario afectado.";
 answers[56] = 1;
 units[56] = ['95'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3648. ";
 preguntaids[56] = 3648


//  Id pregunta: 3644 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[57]= new Array();
 choices[57][0] = "An&aacute;lisis de Casos de Uso";
 choices[57][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[57][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[57][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[57] = 2;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3644. ";
 preguntaids[57] = 3644


//  Id pregunta: 3620 Año de creación de pregunta: 2002
 questions[58]= "59)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[58]= new Array();
 choices[58][0] = "La tasa de errores.";
 choices[58][1] = "El jitter.";
 choices[58][2] = "El retardo m&aacute;ximo.";
 choices[58][3] = "La velocidad de transmisi&oacute;n.";
 answers[58] = 2;
 units[58] = ['86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3620. ";
 preguntaids[58] = 3620


//  Id pregunta: 3606 Año de creación de pregunta: 2004
 questions[59]= "60)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[59]= new Array();
 choices[59][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[59][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[59][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[59][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[59] = 0;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3606. Pregunta Junta Andalucia - A";
 preguntaids[59] = 3606


//  Id pregunta: 3652 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?";
 choices[60]= new Array();
 choices[60][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[60][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[60][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[60][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[60] = 1;
 units[60] = ['98'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3652. ";
 preguntaids[60] = 3652


//  Id pregunta: 3622 Año de creación de pregunta: 2002
 questions[61]= "62)  En an&aacute;lisis documental al nivel en el que se extraen las palabras claves m&aacute;s representativas del contenido del documento, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Nivel de asiento";
 choices[61][1] = "Nivel de descriptor";
 choices[61][2] = "Nivel de resumen";
 choices[61][3] = "Nivel documental";
 answers[61] = 1;
 units[61] = ['99'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3622. ";
 preguntaids[61] = 3622


//  Id pregunta: 3630 Año de creación de pregunta: 2002
 questions[62]= "63)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[62]= new Array();
 choices[62][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[62][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[62][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[62][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[62] = 1;
 units[62] = ['100'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3630. ";
 preguntaids[62] = 3630


//  Id pregunta: 3650 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[63]= new Array();
 choices[63][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[63][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[63][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[63][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[63] = 1;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3650. ";
 preguntaids[63] = 3650


//  Id pregunta: 3582 Año de creación de pregunta: 2002
 questions[64]= "65)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[64]= new Array();
 choices[64][0] = "WBS";
 choices[64][1] = "MARK II";
 choices[64][2] = "JAD";
 choices[64][3] = "PERT";
 answers[64] = 2;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3582. ";
 preguntaids[64] = 3582


//  Id pregunta: 3608 Año de creación de pregunta: 2004
 questions[65]= "66)  La asignaci&oacute;n de la petici&oacute;n, en METRICA V3, consiste en:";
 choices[65]= new Array();
 choices[65][0] = "La tarea del Mantenimiento de sistemas de informaci&oacute;n en METRICA V3 en la que se determina el tipo de mantenimiento requerido por la petici&oacute;n asignada.";
 choices[65][1] = "La determinaci&oacute;n de los recursos necesarios para atender una petici&oacute;n de mantenimiento una vez aceptada la petici&oacute;n";
 choices[65][2] = "La determinaci&oacute;n de quien es la responsabilidad de atender una petici&oacute;n, previa a la aceptaci&oacute;n de la petici&oacute;n";
 choices[65][3] = "No es una tarea incluida en esta metodolog&iacute;a";
 answers[65] = 0;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3608. Pregunta Junta Andalucia - A";
 preguntaids[65] = 3608


//  Id pregunta: 3628 Año de creación de pregunta: 2002
 questions[66]= "67)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[66]= new Array();
 choices[66][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[66][1] = "Eficiente.";
 choices[66][2] = "Modular.";
 choices[66][3] = "Facilidad de mantenimiento.";
 answers[66] = 1;
 units[66] = ['86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3628. ";
 preguntaids[66] = 3628


//  Id pregunta: 3599 Año de creación de pregunta: 2004
 questions[67]= "68)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a las tecnolog&iacute;as CASE (Computer Aided Software Engineering):";
 choices[67]= new Array();
 choices[67][0] = "Las herramientas &quot;lower-CASE&quot; est&aacute;n orientadas a las etapas finales del ciclo de vida, especialmente a la codificaci&oacute;n";
 choices[67][1] = "Las herramientas &quot;upper-CASE&quot; se orientan a las primeras etapas del ciclo de vida";
 choices[67][2] = "Las herramientas I-CASE (CASE Integrado) abarcan el ciclo de vida completo de un sistema de informaci&oacute;n";
 choices[67][3] = "Todas las anteriores son correctas";
 answers[67] = 3;
 units[67] = ['82'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3599. ";
 preguntaids[67] = 3599


//  Id pregunta: 3617 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Qu&eacute; es un 'antidiccionario'?:";
 choices[68]= new Array();
 choices[68][0] = "Un conjunto de palabras de caracterizaci&oacute;n o palabras clave";
 choices[68][1] = "Un conjunto de palabras y signos algebraico-matem&aacute;tico que puede encontrarse en los textos";
 choices[68][2] = "Un conjunto de palabras vac&iacute;as de significado (art&iacute;culos, preposiciones...)";
 choices[68][3] = "Un diccionario en orden alfab&eacute;tico inverso";
 answers[68] = 2;
 units[68] = ['100'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3617. ";
 preguntaids[68] = 3617


//  Id pregunta: 3659 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[69]= new Array();
 choices[69][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[69][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[69][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[69][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[69] = 2;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3659. ";
 preguntaids[69] = 3659


//  Id pregunta: 3646 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[70]= new Array();
 choices[70][0] = "Estudio de la situaci&oacute;n actual";
 choices[70][1] = "Definici&oacute;n de requisitos del sistema";
 choices[70][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[70][3] = "Todas las anteriores";
 answers[70] = 3;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3646. ";
 preguntaids[70] = 3646


//  Id pregunta: 3624 Año de creación de pregunta: 2002
 questions[71]= "72)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[71]= new Array();
 choices[71][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[71][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[71][2] = "Alto rendimiento del sistema.";
 choices[71][3] = "La fiabilidad.";
 answers[71] = 0;
 units[71] = ['86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3624. ";
 preguntaids[71] = 3624


//  Id pregunta: 3627 Año de creación de pregunta: 2002
 questions[72]= "73)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[72][1] = "Cuando acaba la rutina que los actualiza.";
 choices[72][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[72][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[72] = 3;
 units[72] = ['60', '61', '86'];
 blocks[72] = ['B2', 'B3'];
 comments[72] = "Id Pregunta: 3627. ";
 preguntaids[72] = 3627


//  Id pregunta: 3596 Año de creación de pregunta: 2004
 questions[73]= "74)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[73]= new Array();
 choices[73][0] = "Dise&ntilde;o";
 choices[73][1] = "Estudio de viabilidad";
 choices[73][2] = "An&aacute;lisis orientado a objetos";
 choices[73][3] = "An&aacute;lisis estructurado";
 answers[73] = 3;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3596. Examen Seguridad Social-A 2004";
 preguntaids[73] = 3596


//  Id pregunta: 3653 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[74]= new Array();
 choices[74][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[74][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[74][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[74][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[74] = 2;
 units[74] = ['85'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3653. ";
 preguntaids[74] = 3653


