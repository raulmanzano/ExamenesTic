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
//  Id pregunta: 3704 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l no es un tipo de mantenimiento software?:";
 choices[0]= new Array();
 choices[0][0] = "Continuo";
 choices[0][1] = "Correctivo";
 choices[0][2] = "Adaptativo";
 choices[0][3] = "Perfectivo";
 answers[0] = 0;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3704. ";
 preguntaids[0] = 3704


//  Id pregunta: 3666 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[1]= new Array();
 choices[1][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[1][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[1][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[1][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[1] = 2;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3666. ";
 preguntaids[1] = 3666


//  Id pregunta: 1708 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n M&eacute;trica v3, las pruebas de gesti&oacute;n de copias de seguridad y recuperaci&oacute;n en el entorno de producci&oacute;n son:";
 choices[2]= new Array();
 choices[2][0] = "Pruebas del sistema.";
 choices[2][1] = "Pruebas de implantaci&oacute;n.";
 choices[2][2] = "Pruebas de aceptaci&oacute;n.";
 choices[2][3] = "Pruebas de integraci&oacute;n.";
 answers[2] = 1;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1708. ";
 preguntaids[2] = 1708


//  Id pregunta: 3655 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[3]= new Array();
 choices[3][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[3][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[3][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[3][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[3] = 3;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3655. ";
 preguntaids[3] = 3655


//  Id pregunta: 3294 Año de creación de pregunta: 2003
 questions[4]= "5)  Seg&uacute;n la metodolog&iacute;a Metrica v3 un diagrama de estructura se representa en forma de &aacute;rbol. Indicar, entre las siguientes, cu&aacute;l no corresponde a alguna de las representaciones gr&aacute;ficas que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos";
 choices[4]= new Array();
 choices[4][0] = "Lineal";
 choices[4][1] = "Secuencial";
 choices[4][2] = "Repetitiva";
 choices[4][3] = "Alternativa";
 answers[4] = 0;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3294. ";
 preguntaids[4] = 3294


//  Id pregunta: 3719 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Qu&eacute; actividad del an&aacute;lisis del sistema de informaci&oacute;n solo se realiza en el caso de an&aacute;lisis orientado a objetos?:";
 choices[5]= new Array();
 choices[5][0] = "ASI 6 (Elaboraci&oacute;n del modelo de datos)";
 choices[5][1] = "ASI 8 (Definici&oacute;n de interfaces de usuario)";
 choices[5][2] = "ASI 4 (An&aacute;lisis de los casos de uso)";
 choices[5][3] = "ASI 3 (Identificaci&oacute;n de subsistemas de an&aacute;lisis)";
 answers[5] = 2;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3719. ";
 preguntaids[5] = 3719


//  Id pregunta: 3756 Año de creación de pregunta: 2002
 questions[6]= "7)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[6]= new Array();
 choices[6][0] = "Program Evaluation &amp; Review Technique";
 choices[6][1] = "Diagramas de Gantt";
 choices[6][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[6][3] = "Diagrama de Regresi&oacute;n";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3756. ";
 preguntaids[6] = 3756


//  Id pregunta: 3650 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[7]= new Array();
 choices[7][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[7][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[7][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[7][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[7] = 1;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3650. ";
 preguntaids[7] = 3650


//  Id pregunta: 3646 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[8]= new Array();
 choices[8][0] = "Estudio de la situaci&oacute;n actual";
 choices[8][1] = "Definici&oacute;n de requisitos del sistema";
 choices[8][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[8][3] = "Todas las anteriores";
 answers[8] = 3;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3646. ";
 preguntaids[8] = 3646


//  Id pregunta: 3776 Año de creación de pregunta: 2002
 questions[9]= "10)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[9]= new Array();
 choices[9][0] = "componentes";
 choices[9][1] = "despliegue";
 choices[9][2] = "interacci&oacute;n";
 choices[9][3] = "colaboraci&oacute;n";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3776. ";
 preguntaids[9] = 3776


//  Id pregunta: 3608 Año de creación de pregunta: 2004
 questions[10]= "11)  La asignaci&oacute;n de la petici&oacute;n, en METRICA V3, consiste en:";
 choices[10]= new Array();
 choices[10][0] = "La tarea del Mantenimiento de sistemas de informaci&oacute;n en METRICA V3 en la que se determina el tipo de mantenimiento requerido por la petici&oacute;n asignada.";
 choices[10][1] = "La determinaci&oacute;n de los recursos necesarios para atender una petici&oacute;n de mantenimiento una vez aceptada la petici&oacute;n";
 choices[10][2] = "La determinaci&oacute;n de quien es la responsabilidad de atender una petici&oacute;n, previa a la aceptaci&oacute;n de la petici&oacute;n";
 choices[10][3] = "No es una tarea incluida en esta metodolog&iacute;a";
 answers[10] = 0;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3608. Pregunta Junta Andalucia - A";
 preguntaids[10] = 3608


//  Id pregunta: 2354 Año de creación de pregunta: 2003
 questions[11]= "12)  Se&ntilde;alar la respuesta correcta respecto a M&eacute;trica V3";
 choices[11]= new Array();
 choices[11][0] = "No propone la utilizaci&oacute;n de MAGERIT como la metodolog&iacute;a de an&aacute;lsis y gesti&oacute;n de riesgos";
 choices[11][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos.";
 choices[11][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de propia metodolog&iacute;a.";
 choices[11][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos.";
 answers[11] = 2;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 2354. EXAMEN CASTILLA LA MANCHA";
 preguntaids[11] = 2354


//  Id pregunta: 3634 Año de creación de pregunta: 2004
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[12]= new Array();
 choices[12][0] = "An&aacute;lisis de impacto";
 choices[12][1] = "Catalogaci&oacute;n";
 choices[12][2] = "Planificaci&oacute;n";
 choices[12][3] = "Pruebas de regresi&oacute;n";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3634. Pregunta Junta Andalucia - A";
 preguntaids[12] = 3634


//  Id pregunta: 3875 Año de creación de pregunta: 2002
 questions[13]= "14)  La metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA V3 es una iniciativa promovida por:";
 choices[13]= new Array();
 choices[13][0] = "La Subdirecci&oacute;n General de Coordinaci&oacute;n Inform&aacute;tica del MAP";
 choices[13][1] = "La Comisi&oacute;n de Estrategia TIC";
 choices[13][2] = "La Direcci&oacute;n General de Inform&aacute;tica Tributaria";
 choices[13][3] = "Todas las anteriores";
 answers[13] = 1;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3875. ";
 preguntaids[13] = 3875


//  Id pregunta: 3551 Año de creación de pregunta: 2004
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[14]= new Array();
 choices[14][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[14][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[14][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[14][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3551. TIC MAP B 2004";
 preguntaids[14] = 3551


//  Id pregunta: 3543 Año de creación de pregunta: 2004
 questions[15]= "16)  Son interfaces de Metrica v.3:";
 choices[15]= new Array();
 choices[15][0] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Perfiles, Aseguramiento de la Calidad";
 choices[15][1] = "Gesti&oacute;n de Perfiles, Gesti&oacute;n de Proyectos, Seguridad, Gesti&oacute;n de Configuraci&oacute;n";
 choices[15][2] = "Gesti&oacute;n de Proyectos, Seguridad, Aseguramiento de la Calidad";
 choices[15][3] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Configuraci&oacute;n, Seguridad, Aseguramiento de la Calidad";
 answers[15] = 2;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3543. Similar a examen TIC MAP A 2004. JMRP: La pregunta es correcta. La opci&oacute;n correcta no menciona todos los interfaces de M&eacute;trica3 pero eso no hace que sea incorrecta";
 preguntaids[15] = 3543


//  Id pregunta: 3545 Año de creación de pregunta: 2004
 questions[16]= "17)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[16]= new Array();
 choices[16][0] = "Pruebas unitarias";
 choices[16][1] = "Pruebas de sistema";
 choices[16][2] = "Pruebas de regresi&oacute;n";
 choices[16][3] = "Pruebas de aceptaci&oacute;n";
 answers[16] = 2;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3545. Similar a examen TIC SS A 2004";
 preguntaids[16] = 3545


//  Id pregunta: 3587 Año de creación de pregunta: 2004
 questions[17]= "18)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[17]= new Array();
 choices[17][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[17][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[17][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[17][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[17] = 1;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3587. Pregunta Junta Andalucia - A";
 preguntaids[17] = 3587


//  Id pregunta: 3582 Año de creación de pregunta: 2002
 questions[18]= "19)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[18]= new Array();
 choices[18][0] = "WBS";
 choices[18][1] = "MARK II";
 choices[18][2] = "JAD";
 choices[18][3] = "PERT";
 answers[18] = 2;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3582. ";
 preguntaids[18] = 3582


//  Id pregunta: 3589 Año de creación de pregunta: 2004
 questions[19]= "20)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[19][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[19][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[19][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[19] = 2;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3589. Pregunta Junta Andalucia - A";
 preguntaids[19] = 3589


//  Id pregunta: 1825 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l es la opci&oacute;n correcta que representa el proceso de M&eacute;trica 3 donde se realiza la actividad de Valoraci&oacute;n de Alternativas";
 choices[20]= new Array();
 choices[20][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[20][1] = "An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[20][2] = "Estudio de la Viabilidad del Sistema";
 choices[20][3] = "Mantenimiento del Sistema";
 answers[20] = 2;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 1825. ";
 preguntaids[20] = 1825


//  Id pregunta: 3533 Año de creación de pregunta: 2004
 questions[21]= "22)  En un diagrama de transici&oacute;n de estados, en la metodolog&iacute;a Metrica V3:";
 choices[21]= new Array();
 choices[21][0] = "Se puede incluir mas de un estado inicial, que iran conectados mediante una transici&oacute;n sin etiquetar al primer estado del diagrama";
 choices[21][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final";
 choices[21][2] = "Puede haber varios estados finales en un diagrama, que ser&aacute;n mutuamente excluyentes";
 choices[21][3] = "Los &uacute;nicos elementos permitidos son estaedos, transiciones y acciones.";
 answers[21] = 2;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3533. Pregunta TIC-B 2004";
 preguntaids[21] = 3533


//  Id pregunta: 3871 Año de creación de pregunta: 2002
 questions[22]= "23)  La garant&iacute;a de que en un determinado software bajo prueba se han ejecutado todos los bucles en sus partes internas y condiciones de retorno, y se han ejecutado todas las decisiones l&oacute;gicas en sus variantes verdadera y falsa, corresponde a:";
 choices[22]= new Array();
 choices[22][0] = "Los tests estructurales";
 choices[22][1] = "Los tests funcionales";
 choices[22][2] = "Las revisiones t&eacute;cnicas formales";
 choices[22][3] = "Las revisiones de usuario";
 answers[22] = 0;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3871. ";
 preguntaids[22] = 3871


//  Id pregunta: 1707 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique en qu&eacute; procesos de M&eacute;trica v.3, NO se llevan a cabo actividades relacionadas con la interfaz de Gesti&oacute;n de Configuraci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Estudio de viabilidad del sistema.";
 choices[23][1] = "Construcci&oacute;n del sistema de informaci&oacute;n.";
 choices[23][2] = "Mantenimiento de sistemas de informaci&oacute;n.";
 choices[23][3] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 answers[23] = 3;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1707. ";
 preguntaids[23] = 1707


//  Id pregunta: 1706 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es Prueba del Sistema, seg&uacute;n M&eacute;trica v.3:";
 choices[24]= new Array();
 choices[24][0] = "Pruebas de comunicaciones.";
 choices[24][1] = "Pruebas de rendimiento.";
 choices[24][2] = "Pruebas de volumen.";
 choices[24][3] = "Pruebas de integraci&oacute;n.";
 answers[24] = 3;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1706. ";
 preguntaids[24] = 1706


//  Id pregunta: 3532 Año de creación de pregunta: 2004
 questions[25]= "26)  El estudio de Viabilidad del Sistema:";
 choices[25]= new Array();
 choices[25][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[25][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[25][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[25][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[25] = 0;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3532. Pregunta TIC-B 2004";
 preguntaids[25] = 3532


//  Id pregunta: 3591 Año de creación de pregunta: 2004
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?";
 choices[26]= new Array();
 choices[26][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[26][1] = "Diagrama de Despliegue";
 choices[26][2] = "Diagrama de Flujo de Datos (DFD)";
 choices[26][3] = "Diagrama de Interacci&oacute;n";
 answers[26] = 2;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3591. Pregunta Junta Andalucia - A";
 preguntaids[26] = 3591


//  Id pregunta: 3694 Año de creación de pregunta: 2002
 questions[27]= "28)  La definici&oacute;n &quot;margen suplementario de tiempo que existe en una actividad si las actividades precedentes empiezan lo m&aacute;s tarde posible y las posteriores lo antes posible&quot; corresponde a:";
 choices[27]= new Array();
 choices[27][0] = "holgura independiente";
 choices[27][1] = "holgura total";
 choices[27][2] = "holgura libre";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 0;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3694. ";
 preguntaids[27] = 3694


//  Id pregunta: 1720 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la interfaz de Aseguramiento de la Calidad de m&eacute;trica v.3:";
 choices[28]= new Array();
 choices[28][0] = "El Plan de aseguramiento de la Calidad comienza en la fase de An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[28][1] = "El Plan de Aseguramiento de la Calidad se aplica a lo largo de todo el desarrollo, en los procesos de An&aacute;lisis, Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema y en su posterior Mantenimiento.";
 choices[28][2] = "La finalidad de los procedimientos extraordinarios de Auditor&iacute;a es revisar las actividades propias de aseguramiento de calidad.";
 choices[28][3] = "El Grupo de Aseguramiento de Calidad debe contar con miembros del equipo de desarrollo.";
 answers[28] = 1;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 1720. ";
 preguntaids[28] = 1720


//  Id pregunta: 3552 Año de creación de pregunta: 2004
 questions[29]= "30)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "Definici&oacute;n de &iacute;ndices";
 choices[29][1] = "Generalizaci&oacute;n";
 choices[29][2] = "Entidades deductivas";
 choices[29][3] = "Entidades hist&oacute;ricas";
 answers[29] = 1;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3552. TIC MAP B 2004";
 preguntaids[29] = 3552


//  Id pregunta: 3645 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[30]= new Array();
 choices[30][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[30][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[30][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[30][3] = "Todas son falsas";
 answers[30] = 2;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3645. ";
 preguntaids[30] = 3645


//  Id pregunta: 3699 Año de creación de pregunta: 2002
 questions[31]= "32)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[31]= new Array();
 choices[31][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[31][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[31][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[31][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[31] = 1;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3699. ";
 preguntaids[31] = 3699


//  Id pregunta: 3546 Año de creación de pregunta: 2004
 questions[32]= "33)  El tipo de mantenimiento consistente en a&ntilde;adir nueva funcionalidad y adaptar el sistema a nuevos requerimientos del usuario se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Correctivo";
 choices[32][1] = "Adaptativo";
 choices[32][2] = "Evolutivo";
 choices[32][3] = "Perfectivo";
 answers[32] = 2;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3546. Similar a examen TIC SS A 2004";
 preguntaids[32] = 3546


//  Id pregunta: 3534 Año de creación de pregunta: 2004
 questions[33]= "34)  La metodolog&iacute;a METRICA V3 considera que la t&eacute;cnica de estimaci&oacute;n del esfuerzo m&aacute;s adecuada en el desarrollo del software es:";
 choices[33]= new Array();
 choices[33][0] = "La t&eacute;cnica de los puntos de funci&oacute;n poligonial";
 choices[33][1] = "La t&eacute;cnica de los puntos de funci&oacute;n 3D";
 choices[33][2] = "La t&eacute;cnica de los puntos caracter&iacute;sticos";
 choices[33][3] = "La t&eacute;cnica de los puntos de funci&oacute;n";
 answers[33] = 3;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3534. Pregunta TIC-B 2004";
 preguntaids[33] = 3534


//  Id pregunta: 3874 Año de creación de pregunta: 2002
 questions[34]= "35)  La interfaz de METRICA V3 denominada &quot;Gesti&oacute;n de proyectos&quot;:";
 choices[34]= new Array();
 choices[34][0] = "Contempla tanto el desarrollo de nuevos proyectos como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[34][1] = "Consta de 4 tipos de actividades: de inicio de proyecto, de seguimiento y control, de finalizaci&oacute;n de proyecto, y de mantenimiento";
 choices[34][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[34][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[34] = 0;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3874. ";
 preguntaids[34] = 3874


//  Id pregunta: 3823 Año de creación de pregunta: 2002
 questions[35]= "36)  En las fases del proceso de prueba de software diga cu&aacute;l, seg&uacute;n M&eacute;trica v3, corresponde a la prueba que se realiza una vez ensamblado el software para comprobar que cumple las especificaciones:";
 choices[35]= new Array();
 choices[35][0] = "Prueba de integraci&oacute;n";
 choices[35][1] = "Prueba de unidad";
 choices[35][2] = "Prueba de aceptaci&oacute;n";
 choices[35][3] = "Prueba de validaci&oacute;n";
 answers[35] = 2;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3823. ";
 preguntaids[35] = 3823


//  Id pregunta: 3734 Año de creación de pregunta: 2002
 questions[36]= "37)  A la hora de poner en explotaci&oacute;n un servicio:";
 choices[36]= new Array();
 choices[36][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de explotaci&oacute;n, ya que es el mejor medio para detectar los errores.";
 choices[36][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n.";
 choices[36][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el de preexplotaci&oacute;n es s&oacute;lo para las pruebas de rendimiento.";
 choices[36][3] = "Conviene realizar algunas pruebas en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de explotaci&oacute;n, junto a los usuarios.";
 answers[36] = 1;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3734. ";
 preguntaids[36] = 3734


//  Id pregunta: 2588 Año de creación de pregunta: 2002
 questions[37]= "38)  Un elemento clave en la integraci&oacute;n de los sistemas de informaci&oacute;n, que permite hacer relaciones y operaciones interactivas sobre todos los datos de la organizaci&oacute;n para efectuar labores de planificaci&oacute;n, control y operaci&oacute;n son los llamados:";
 choices[37]= new Array();
 choices[37][0] = "Optical Character Readers (OCR)";
 choices[37][1] = "Diccionarios de Recursos de Informaci&oacute;n (DRI)";
 choices[37][2] = "Servidores de red local";
 choices[37][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[37] = 1;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 2588. Ver la pr&aacute;ctica An&aacute;lisis de Impacto en M&eacute;trica";
 preguntaids[37] = 2588


//  Id pregunta: 3593 Año de creación de pregunta: 2004
 questions[38]= "39)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[38]= new Array();
 choices[38][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[38][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[38][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[38][3] = "Paso a Producci&oacute;n";
 answers[38] = 1;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3593. Pregunta Junta Andalucia - A";
 preguntaids[38] = 3593


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[39]= "40)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[39]= new Array();
 choices[39][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[39][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[39][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[39][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[39] = 0;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[39] = 3631


//  Id pregunta: 3749 Año de creación de pregunta: 2002
 questions[40]= "41)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[40]= new Array();
 choices[40][0] = "Correctivo";
 choices[40][1] = "Perfectivo";
 choices[40][2] = "Evolutivo";
 choices[40][3] = "Adaptativo";
 answers[40] = 2;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3749. ";
 preguntaids[40] = 3749


//  Id pregunta: 3836 Año de creación de pregunta: 2002
 questions[41]= "42)  En un diagrama de GANTT, un hito, por definici&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Dura lo mismo que la etapa que lo genera";
 choices[41][1] = "Dura una unidad temporal";
 choices[41][2] = "Su duraci&oacute;n se incluye en las etapas que desencadena";
 choices[41][3] = "No tiene duraci&oacute;n";
 answers[41] = 3;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3836. ";
 preguntaids[41] = 3836


//  Id pregunta: 3607 Año de creación de pregunta: 2004
 questions[42]= "43)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[42]= new Array();
 choices[42][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[42][1] = "Registro de cambios";
 choices[42][2] = "Registro de petici&oacute;n";
 choices[42][3] = "Cat&aacute;logo de peticiones";
 answers[42] = 2;
 units[42] = ['91'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3607. Pregunta Junta Andalucia - A";
 preguntaids[42] = 3607


//  Id pregunta: 3550 Año de creación de pregunta: 2004
 questions[43]= "44)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[43]= new Array();
 choices[43][0] = "Realizar las entrevistas al usuario";
 choices[43][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[43][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[43][3] = "Dirigir a los programadores";
 answers[43] = 1;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3550. TIC MAP B 2004";
 preguntaids[43] = 3550


//  Id pregunta: 3715 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;En qu&eacute; consisten los Factores Cr&iacute;ticos del &Eacute;xito?:";
 choices[44]= new Array();
 choices[44][0] = "Son los elementos del proyecto que pueden retrasar o hundir el proyecto si no se resuelven satisfactoriamente.";
 choices[44][1] = "Son los requisitos m&aacute;s importantes del an&aacute;lisis de requisitos del sistema";
 choices[44][2] = "Son factores cr&iacute;ticos  que se miden despu&eacute;s de la terminaci&oacute;n del proyecto";
 choices[44][3] = "Son los objetivos del proyecto";
 answers[44] = 0;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3715. ";
 preguntaids[44] = 3715


//  Id pregunta: 3688 Año de creación de pregunta: 2002
 questions[45]= "46)  Indique la afirmaci&oacute;n falsa, relativa al mantenimiento de las aplicaciones:";
 choices[45]= new Array();
 choices[45][0] = "Comienza cuando el sistema es entregado al usuario y contin&uacute;a mientras permanece activa su vida &uacute;til";
 choices[45][1] = "Las modificaciones que implican mejoras o ampliaciones de la funcionalidad no necesitan ser aprobados por el usuario";
 choices[45][2] = "Los cambios reflejados en la fase de mantenimiento deben quedar reflejados en la documentaci&oacute;n de todas las fases anteriores";
 choices[45][3] = "El mantenimiento puede ser correctivo, perfectivo o adaptativo";
 answers[45] = 1;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3688. ";
 preguntaids[45] = 3688


//  Id pregunta: 1960 Año de creación de pregunta: 2016
 questions[46]= "47)  Cu&aacute;l de las siguientes NO es una interfaz de METRICA v3:";
 choices[46]= new Array();
 choices[46][0] = "Aseguramiento de la calidad.";
 choices[46][1] = "Control de costes.";
 choices[46][2] = "Gesti&oacute;n de proyectos.";
 choices[46][3] = "Seguridad.";
 answers[46] = 1;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 1960. ";
 preguntaids[46] = 1960


//  Id pregunta: 3597 Año de creación de pregunta: 2004
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[47]= new Array();
 choices[47][0] = "Las particiones de equivalencia";
 choices[47][1] = "Prueba del camino b&aacute;sico";
 choices[47][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[47][3] = "Los grafos causa-efecto";
 answers[47] = 1;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3597. ";
 preguntaids[47] = 3597


//  Id pregunta: 3606 Año de creación de pregunta: 2004
 questions[48]= "49)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[48]= new Array();
 choices[48][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[48][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[48][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[48][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[48] = 0;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3606. Pregunta Junta Andalucia - A";
 preguntaids[48] = 3606


//  Id pregunta: 3633 Año de creación de pregunta: 2004
 questions[49]= "50)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[49]= new Array();
 choices[49][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[49][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[49][2] = "El equipo de mantenimiento y el jefe de proyecto";
 choices[49][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[49] = 2;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3633. Pregunta Junta Andalucia - A";
 preguntaids[49] = 3633


//  Id pregunta: 3647 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso implantaci&oacute;n y aceptaci&oacute;n del sistema de informaci&oacute;n?:";
 choices[50]= new Array();
 choices[50][0] = "Preparaci&oacute;n del mantenimiento";
 choices[50][1] = "Carga de datos al entorno de operaci&oacute;n";
 choices[50][2] = "Pruebas de aceptaci&oacute;n del sistema";
 choices[50][3] = "Todas las anteriores";
 answers[50] = 3;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3647. ";
 preguntaids[50] = 3647


//  Id pregunta: 3700 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes perfiles  no est&aacute; incluido en la Guia de Participantes de METRICA 3?:";
 choices[51]= new Array();
 choices[51][0] = "Directivo";
 choices[51][1] = "Consultor";
 choices[51][2] = "T&eacute;cnico";
 choices[51][3] = "Programador";
 answers[51] = 2;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3700. ";
 preguntaids[51] = 3700


//  Id pregunta: 3718 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;En qu&eacute; procesos de M&eacute;trica V3 se contemplan la migraci&oacute;n y carga inicial de datos?:";
 choices[52]= new Array();
 choices[52][0] = "DSI, CSI, IAS";
 choices[52][1] = "EVS, DSI, CSI";
 choices[52][2] = "ASI, DTS, CSI";
 choices[52][3] = "EVS, CSI, MSI";
 answers[52] = 0;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3718. ";
 preguntaids[52] = 3718


//  Id pregunta: 3717 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[53]= new Array();
 choices[53][0] = "CSI";
 choices[53][1] = "DSI";
 choices[53][2] = "IAS";
 choices[53][3] = "DCS";
 answers[53] = 0;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3717. ";
 preguntaids[53] = 3717


//  Id pregunta: 3664 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes pruebas se contemplan en M&eacute;trica V3?:";
 choices[54]= new Array();
 choices[54][0] = "Pruebas de regresi&oacute;n";
 choices[54][1] = "Pruebas de integraci&oacute;n";
 choices[54][2] = "Pruebas del sistema";
 choices[54][3] = "Todas las anteriores";
 answers[54] = 3;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3664. ";
 preguntaids[54] = 3664


//  Id pregunta: 1892 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cual de las siguientes alternativas corresponde a los procesos de Desarrollo de Sistemas de Informaci&oacute;n dentro de la metodolog&iacute;a M&eacute;trica v3:";
 choices[55]= new Array();
 choices[55][0] = "Estudio de Viabilidad del Sistema, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[55][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[55][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[55][3] = "Estudio de Viabilidad del Sistema, An&aacute;lisis del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[55] = 3;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1892. ";
 preguntaids[55] = 1892


//  Id pregunta: 3611 Año de creación de pregunta: 2002
 questions[56]= "57)  Sobre la naturaleza del software, entre las caracter&iacute;sticas que lo determinan y lo diferencian tenemos:";
 choices[56]= new Array();
 choices[56][0] = "Es de existencia inmaterial";
 choices[56][1] = "Es invisible, se manifiesta a trav&eacute;s de Hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 choices[56][2] = "Es una t&eacute;cnica muy madura, en la que existen datos hist&oacute;ricos importantes";
 choices[56][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son ciertas";
 answers[56] = 3;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3611. ";
 preguntaids[56] = 3611


//  Id pregunta: 3609 Año de creación de pregunta: 2002
 questions[57]= "58)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[57][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[57][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[57][3] = "No se incluyen los gastos de comunicaciones";
 answers[57] = 1;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3609. ";
 preguntaids[57] = 3609


//  Id pregunta: 3565 Año de creación de pregunta: 2004
 questions[58]= "59)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[58]= new Array();
 choices[58][0] = "caja negra";
 choices[58][1] = "caja blanca";
 choices[58][2] = "caja roja";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 0;
 units[58] = ['91', '93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3565. Similar a examen TIC SS A 2003";
 preguntaids[58] = 3565


//  Id pregunta: 3758 Año de creación de pregunta: 2002
 questions[59]= "60)  Dentro de METRICA V3, &iquest;cu&aacute;l de los siguientes procesos no forma parte de la fase de desarrollo?:";
 choices[59]= new Array();
 choices[59][0] = "EVS";
 choices[59][1] = "IAS";
 choices[59][2] = "PSI";
 choices[59][3] = "ASI";
 answers[59] = 2;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3758. ";
 preguntaids[59] = 3758


//  Id pregunta: 3588 Año de creación de pregunta: 2002
 questions[60]= "61)  Indicar la afirmaci&oacute;n falsa sobre la naturaleza del software:";
 choices[60]= new Array();
 choices[60][0] = "Es independiente del hardware y del entorno en el que se ejecuta";
 choices[60][1] = "Es f&aacute;cil de modificar pero muy dif&iacute;cil de validar";
 choices[60][2] = "Tiene un concepto de fiabilidad diferente al del material: los errores provienen de su definici&oacute;n y no de su deterioro";
 choices[60][3] = "Es invisible, se manifiesta a trav&eacute;s del hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 answers[60] = 0;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3588. ";
 preguntaids[60] = 3588


//  Id pregunta: 3842 Año de creación de pregunta: 2002
 questions[61]= "62)  Entre las novedades de la versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[61]= new Array();
 choices[61][0] = "Se incluyen las t&eacute;cnicas propias de un desarrollo orientado a objetos y las t&eacute;cnicas de desarrollo del tipo estructurado";
 choices[61][1] = "La incorporaci&oacute;n del proceso de Mantenimiento y de los &uacute;ltimos est&aacute;ndares de ingenier&iacute;a de software y de calidad ISO 12207 e ISO 9000-3";
 choices[61][2] = "La incorporaci&oacute;n con puntos definidos de interfaz para las metodolog&iacute;as de seguridad (MAGERIT), de aseguramiento de la calidad (PGGC - Plan General de Garant&iacute;a de Calidad), Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[61][3] = "Todas las anteriores";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3842. ";
 preguntaids[61] = 3842


//  Id pregunta: 3775 Año de creación de pregunta: 2002
 questions[62]= "63)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[62]= new Array();
 choices[62][0] = "componentes";
 choices[62][1] = "despliegue";
 choices[62][2] = "actividades";
 choices[62][3] = "ninguno de los anteriores";
 answers[62] = 1;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3775. ";
 preguntaids[62] = 3775


//  Id pregunta: 3799 Año de creación de pregunta: 2002
 questions[63]= "64)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[63]= new Array();
 choices[63][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[63][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[63][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[63][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[63] = 2;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3799. ";
 preguntaids[63] = 3799


//  Id pregunta: 3782 Año de creación de pregunta: 2002
 questions[64]= "65)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[64]= new Array();
 choices[64][0] = "Es de tipo perfectivo";
 choices[64][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[64][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[64][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[64] = 3;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3782. ";
 preguntaids[64] = 3782


//  Id pregunta: 1893 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n METRICA version 3, el proceso MSI (Mantenimiento de Sistemas de Informaci&oacute;n) solo incluye los mantenimientos:";
 choices[65]= new Array();
 choices[65][0] = "Mantenimiento correctivo y evolutivo";
 choices[65][1] = "Mantenimiento evolutivo y adaptativo";
 choices[65][2] = "Mantenimiento adaptativo y perfectivo";
 choices[65][3] = "Mantenimiento perfectivo y correctivo";
 answers[65] = 0;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 1893. ";
 preguntaids[65] = 1893


//  Id pregunta: 3703 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Cu&aacute;l es la versi&oacute;n actual de la m&eacute;todolog&iacute;a M&eacute;trica?:";
 choices[66]= new Array();
 choices[66][0] = "v1";
 choices[66][1] = "v2";
 choices[66][2] = "v2.1";
 choices[66][3] = "v3";
 answers[66] = 3;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3703. ";
 preguntaids[66] = 3703


//  Id pregunta: 3644 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[67]= new Array();
 choices[67][0] = "An&aacute;lisis de Casos de Uso";
 choices[67][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[67][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[67][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[67] = 2;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3644. ";
 preguntaids[67] = 3644


//  Id pregunta: 2352 Año de creación de pregunta: 2003
 questions[68]= "69)  La interfaz de M&eacute;tica V3 denominada &ldquo;Gesti&oacute;n de proyectos&rdquo;";
 choices[68]= new Array();
 choices[68][0] = "Contempla tanto el desarrollo de nuevos proyectos, como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[68][1] = "Consta de cuatro tipos de actividades; de inicio del proyecto , de seguimiento y control de finalizaci&oacute;n del proyecto, y de mantenimiento.";
 choices[68][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[68][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[68] = 0;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 2352. EXAMEN CASTILLA LA MANCHA";
 preguntaids[68] = 2352


//  Id pregunta: 3604 Año de creación de pregunta: 2004
 questions[69]= "70)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[69]= new Array();
 choices[69][0] = "Cambios precisos para corregir errores del software";
 choices[69][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[69][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[69][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[69] = 3;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3604. Pregunta Junta Andalucia - A";
 preguntaids[69] = 3604


//  Id pregunta: 3716 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?:";
 choices[70]= new Array();
 choices[70][0] = "Diagramas de despliegue";
 choices[70][1] = "Diagramas de componentes";
 choices[70][2] = "Diagramas de descomposici&oacute;n";
 choices[70][3] = "Diagramas de estructura";
 answers[70] = 0;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3716. ";
 preguntaids[70] = 3716


//  Id pregunta: 3596 Año de creación de pregunta: 2004
 questions[71]= "72)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[71]= new Array();
 choices[71][0] = "Dise&ntilde;o";
 choices[71][1] = "Estudio de viabilidad";
 choices[71][2] = "An&aacute;lisis orientado a objetos";
 choices[71][3] = "An&aacute;lisis estructurado";
 answers[71] = 3;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3596. Examen Seguridad Social-A 2004";
 preguntaids[71] = 3596


//  Id pregunta: 3812 Año de creación de pregunta: 2002
 questions[72]= "73)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[72]= new Array();
 choices[72][0] = "Los datos";
 choices[72][1] = "Las relaciones";
 choices[72][2] = "Los atributos";
 choices[72][3] = "Otras entidades";
 answers[72] = 2;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 3812. ";
 preguntaids[72] = 3812


//  Id pregunta: 3843 Año de creación de pregunta: 2002
 questions[73]= "74)  Entre las nuevas tecnolog&iacute;as incorporadas a la Versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[73]= new Array();
 choices[73][0] = "Orientaci&oacute;n a objetos";
 choices[73][1] = "Entorno cliente/servidor";
 choices[73][2] = "Reutilizaci&oacute;n de m&oacute;dulos - componentes (tambi&eacute;n denominados productos) y bases de datos";
 choices[73][3] = "Todas las respuestas anteriores son correctas";
 answers[73] = 3;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3843. ";
 preguntaids[73] = 3843


//  Id pregunta: 1709 Año de creación de pregunta: 2016
 questions[74]= "75)  Dentro de la Actividad MSI 3 (Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n), se&ntilde;ale cu&aacute;les son las tareas asignadas a esta actividad seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[74]= new Array();
 choices[74][0] = "Identificaci&oacute;n de Elementos Afectados, Establecimiento del Plan de Acci&oacute;n, Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n.";
 choices[74][1] = "An&aacute;lisis de Impacto de los Cambios, Mantenimiento de los M&oacute;dulos, Planificaci&oacute;n de los Planes de Contingencia.";
 choices[74][2] = "Identificaci&oacute;n de los Cambios, Validaci&oacute;n Pruebas de Regresi&oacute;n, Aprobaci&oacute;n y Cierre de las Peticiones.";
 choices[74][3] = "Verificaci&oacute;n y Estudio de la Petici&oacute;n, Estudio de la Propuesta de Petici&oacute;n.";
 answers[74] = 0;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 1709. ";
 preguntaids[74] = 1709


