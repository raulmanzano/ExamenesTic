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
//  Id pregunta: 5364 Año de creación de pregunta: 2006
 questions[0]= "1)  Caso de utilizar un &uacute;nico m&eacute;todo, se economizan cintas con backups de tipo";
 choices[0]= new Array();
 choices[0][0] = "Completo";
 choices[0][1] = "Diferencial";
 choices[0][2] = "Incremental";
 choices[0][3] = "Es indiferente";
 answers[0] = 2;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 5364. ";
 preguntaids[0] = 5364


//  Id pregunta: 2455 Año de creación de pregunta: 2006
 questions[1]= "2)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[1]= new Array();
 choices[1][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[1][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[1][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[1][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[1] = 2;
 units[1] = ['38'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2455. ";
 preguntaids[1] = 2455


//  Id pregunta: 3766 Año de creación de pregunta: 2002
 questions[2]= "3)  DRM es:";
 choices[2]= new Array();
 choices[2][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[2][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[2][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[2][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales";
 answers[2] = 3;
 units[2] = ['41'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 3766. ";
 preguntaids[2] = 3766


//  Id pregunta: 5437 Año de creación de pregunta: 2007
 questions[3]= "4)  Indique cu&aacute;l de los siguientes criterios pondera la situaci&oacute;n m&aacute;s optimista con la m&aacute;s pesimista mediante un factor alfa:";
 choices[3]= new Array();
 choices[3][0] = "Criterio de Laplace";
 choices[3][1] = "Criterio de Wald";
 choices[3][2] = "Criterio de Savage";
 choices[3][3] = "Criterio de Hurwicz";
 answers[3] = 3;
 units[3] = ['38'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 5437. ";
 preguntaids[3] = 5437


//  Id pregunta: 4883 Año de creación de pregunta: 2002
 questions[4]= "5)  La f&oacute;rmula de Little es:";
 choices[4]= new Array();
 choices[4][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[4][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[4][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[4][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[4] = 2;
 units[4] = ['30'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 4883. ";
 preguntaids[4] = 4883


//  Id pregunta: 2456 Año de creación de pregunta: 2006
 questions[5]= "6)  Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo";
 choices[5]= new Array();
 choices[5][0] = "70 a&ntilde;os";
 choices[5][1] = "60 a&ntilde;os";
 choices[5][2] = "100 a&ntilde;os";
 choices[5][3] = "50 a&ntilde;os";
 answers[5] = 0;
 units[5] = ['41'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2456. ";
 preguntaids[5] = 2456


//  Id pregunta: 4059 Año de creación de pregunta: 2003
 questions[6]= "7)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[6]= new Array();
 choices[6][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[6][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[6][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[6][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[6] = 1;
 units[6] = ['40', '91'];
 blocks[6] = ['B1', 'B3'];
 comments[6] = "Id Pregunta: 4059. ";
 preguntaids[6] = 4059


//  Id pregunta: 5565 Año de creación de pregunta: 2007
 questions[7]= "8)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.3:";
 choices[7]= new Array();
 choices[7][0] = "Incidente";
 choices[7][1] = "Incidencia";
 choices[7][2] = "Contingencia";
 choices[7][3] = "Impacto";
 answers[7] = 0;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 5565. ";
 preguntaids[7] = 5565


//  Id pregunta: 2450 Año de creación de pregunta: 2006
 questions[8]= "9)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[8]= new Array();
 choices[8][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[8][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[8][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[8][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[8] = 2;
 units[8] = ['41'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2450. ";
 preguntaids[8] = 2450


//  Id pregunta: 4291 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[9]= new Array();
 choices[9][0] = "MAGERIT es un &oacute;rgano encargado de establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[9][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[9][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[9][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[9] = 0;
 units[9] = ['45'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 4291. ";
 preguntaids[9] = 4291


//  Id pregunta: 2466 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no se considera un riesgo de origen accidental?:";
 choices[10]= new Array();
 choices[10][0] = "Huelga del personal";
 choices[10][1] = "Errores en la utilizaci&oacute;n de los datos";
 choices[10][2] = "Aver&iacute;as en las instalaciones el&eacute;ctricas";
 choices[10][3] = "Interrupci&oacute;n de suministro de energ&iacute;a";
 answers[10] = 0;
 units[10] = ['45'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2466. ";
 preguntaids[10] = 2466


//  Id pregunta: 3473 Año de creación de pregunta: 2006
 questions[11]= "12)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[11]= new Array();
 choices[11][0] = "El Ministerio de Econom&iacute;a, Industria y Competitividad.";
 choices[11][1] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[11][2] = "El Ministerio de Justicia";
 choices[11][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[11] = 1;
 units[11] = ['30'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 3473. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";
 preguntaids[11] = 3473


//  Id pregunta: 5345 Año de creación de pregunta: 2006
 questions[12]= "13)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[12]= new Array();
 choices[12][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[12][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[12][2] = "Tecnolog&iacute;a adaptativa";
 choices[12][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[12] = 1;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 5345. ";
 preguntaids[12] = 5345


//  Id pregunta: 2452 Año de creación de pregunta: 2006
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[13]= new Array();
 choices[13][0] = "XPG4 Base";
 choices[13][1] = "XPG4 Commands and Utilities";
 choices[13][2] = "XPG4 Language";
 choices[13][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[13] = 2;
 units[13] = ['40'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2452. ";
 preguntaids[13] = 2452


//  Id pregunta: 4294 Año de creación de pregunta: 2002
 questions[14]= "15)  Como medidas de tipo f&iacute;sico, en seguridad inform&aacute;tica, podemos hablar de:";
 choices[14]= new Array();
 choices[14][0] = "Seguridad de datos y de software";
 choices[14][1] = "Seguridad organizativo-administrativa y de software";
 choices[14][2] = "Seguridad de hardware y de datos";
 choices[14][3] = "Adecuaci&oacute;n de locales y seguridad de accesos";
 answers[14] = 3;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 4294. ";
 preguntaids[14] = 4294


//  Id pregunta: 4293 Año de creación de pregunta: 2002
 questions[15]= "16)  A la hora de asegurar un Centro de Proceso de Datos:";
 choices[15]= new Array();
 choices[15][0] = "Habr&aacute; que considerar el riesgo de perturbaciones electromagn&eacute;ticas por parte del sistema de iluminaci&oacute;n (fluorescentes o similares)";
 choices[15][1] = "El riesgo de perturbaciones electromagn&eacute;ticas es siempre despreciable";
 choices[15][2] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina con la instalaci&oacute;n de toma de tierra en todos los dispositivos";
 choices[15][3] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina prohibiendo el uso de tel&eacute;fonos m&oacute;viles en el CPD";
 answers[15] = 0;
 units[15] = ['36'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 4293. ";
 preguntaids[15] = 4293


//  Id pregunta: 4538 Año de creación de pregunta: 2002
 questions[16]= "17)  La anchura est&aacute;ndar de un rack es:";
 choices[16]= new Array();
 choices[16][0] = "11 pulgadas";
 choices[16][1] = "25 pulgadas";
 choices[16][2] = "19 pulgadas";
 choices[16][3] = "15 pulgadas";
 answers[16] = 2;
 units[16] = ['46'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 4538. ";
 preguntaids[16] = 4538


//  Id pregunta: 2469 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Qu&eacute; son empresas spin-off?";
 choices[17]= new Array();
 choices[17][0] = "Empresas dedicadas al SW libre.";
 choices[17][1] = "Empresas vinculadas a la Universidad y que se dedican a tareas de I+D.";
 choices[17][2] = "Empresas de aceleraci&oacute;n de electrones para la producci&oacute;n de energ&iacute;a.";
 choices[17][3] = "No existen.";
 answers[17] = 1;
 units[17] = ['24'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2469. ";
 preguntaids[17] = 2469


//  Id pregunta: 2447 Año de creación de pregunta: 2006
 questions[18]= "19)  &iquest;Por qu&eacute; no puede considerarse cierto que la correcta aplicaci&oacute;n y gesti&oacute;n de parches es la soluci&oacute;n a la mayor&iacute;a de los problemas de seguridad?";
 choices[18]= new Array();
 choices[18][0] = "Los parches siempre abren nuevas vulnerabilidades";
 choices[18][1] = "Los parches crean problemas de interoperatibilidad";
 choices[18][2] = "Los parches solo tratan los fallos software conocidos";
 choices[18][3] = "Los parches pueden arreglar problemas de mala configuraci&oacute;n";
 answers[18] = 2;
 units[18] = ['36'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2447. ";
 preguntaids[18] = 2447


//  Id pregunta: 4446 Año de creación de pregunta: 2002
 questions[19]= "20)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[19][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[19][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[19][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[19] = 1;
 units[19] = ['24'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 4446. ";
 preguntaids[19] = 4446


//  Id pregunta: 4295 Año de creación de pregunta: 2002
 questions[20]= "21)  Con respecto a almacenamiento de copias de seguridad, &iquest;qu&eacute; garant&iacute;as nos ofrece un armario de protecci&oacute;n combinada?:";
 choices[20]= new Array();
 choices[20][0] = "Su misi&oacute;n principal es proteger del fuego y electromagnetismo";
 choices[20][1] = "Su misi&oacute;n principal es proteger del agua y del fuego";
 choices[20][2] = "Su misi&oacute;n principal es proteger de radiaciones electricas";
 choices[20][3] = "Ninguna de las anteriores es correcta";
 answers[20] = 0;
 units[20] = ['45'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 4295. ";
 preguntaids[20] = 4295


//  Id pregunta: 5482 Año de creación de pregunta: 2007
 questions[21]= "22)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[21]= new Array();
 choices[21][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[21][1] = "Autenticaci&oacute;n, confidencialidad, integridad, disponibilidad y trazabilidad";
 choices[21][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[21][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[21] = 1;
 units[21] = ['45'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 5482. ";
 preguntaids[21] = 5482


//  Id pregunta: 5495 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes derechos, si es asignado a un operador de ordenador, deber&iacute;a hacer sospechar a un auditor inform&aacute;tico, cuando se realiza una auditor&iacute;a de derechos de acceso?";
 choices[22]= new Array();
 choices[22][0] = "Leer acceso a datos.";
 choices[22][1] = "Borrar acceso a archivos de datos de transacci&oacute;n.";
 choices[22][2] = "Acceso de leer/ejecutar a programas.";
 choices[22][3] = "Actualizar acceso a archivos de lenguaje/script de control de trabajo.";
 answers[22] = 1;
 units[22] = ['36'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 5495. ";
 preguntaids[22] = 5495


//  Id pregunta: 4022 Año de creación de pregunta: 2002
 questions[23]= "24)  La cintoteca o armario ign&iacute;fugo debe colocarse en:";
 choices[23]= new Array();
 choices[23][0] = "El sotano";
 choices[23][1] = "Un sitio estable desde el punto de vista metereologico";
 choices[23][2] = "Pegado a la estructura del edificio";
 choices[23][3] = "No hace falta tener cuidado con su localizacion";
 answers[23] = 2;
 units[23] = ['45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 4022. ";
 preguntaids[23] = 4022


//  Id pregunta: 2459 Año de creación de pregunta: 2006
 questions[24]= "25)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[24]= new Array();
 choices[24][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado";
 choices[24][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os";
 choices[24][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido";
 choices[24][3] = "El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes";
 answers[24] = 0;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2459. ";
 preguntaids[24] = 2459


//  Id pregunta: 5438 Año de creación de pregunta: 2007
 questions[25]= "26)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[25]= new Array();
 choices[25][0] = "ISO 12207";
 choices[25][1] = "ISO 2167";
 choices[25][2] = "ISO 27002";
 choices[25][3] = "ISO 9004";
 answers[25] = 2;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 5438. ";
 preguntaids[25] = 5438


//  Id pregunta: 5520 Año de creación de pregunta: 2007
 questions[26]= "27)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[26]= new Array();
 choices[26][0] = "Obras.";
 choices[26][1] = "Suministro";
 choices[26][2] = "Servicios";
 choices[26][3] = "Bienes y servicios.";
 answers[26] = 1;
 units[26] = ['37'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 5520. ";
 preguntaids[26] = 5520


//  Id pregunta: 5362 Año de creación de pregunta: 2006
 questions[27]= "28)  Un sitio caliente de respaldo se caracteriza por";
 choices[27]= new Array();
 choices[27][0] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[27][1] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[27][2] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[27][3] = "La A y la B";
 answers[27] = 3;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 5362. ";
 preguntaids[27] = 5362


//  Id pregunta: 2755 Año de creación de pregunta: 2002
 questions[28]= "29)  El Gartner Group:";
 choices[28]= new Array();
 choices[28][0] = "Es una organizaci&oacute;n de expertos que analiza las diferentes tendenciasde las tecnologias de la informacion en base a estimaciones porcentuales.";
 choices[28][1] = "Es una organizaci&oacute;n de normalizaci&oacute;n en tecnolog&iacute;as de la informaci&oacute;n.";
 choices[28][2] = "Est&aacute; constitu&iacute;da como una organizaci&oacute;n de usuarios Unix que analiza y eval&uacute;a los productos que aparecen en el mercado sobre dicho sistema operativo.";
 choices[28][3] = "Es una organizaci&oacute;n que presenta benchmarks sobre equipos Unix.";
 answers[28] = 0;
 units[28] = ['48'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2755. ";
 preguntaids[28] = 2755


//  Id pregunta: 2445 Año de creación de pregunta: 2006
 questions[29]= "30)  &iquest;Cu&aacute;l es la diferencia entre una auditor&iacute;a de vulnerabilidades y un test de penetraci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "Un test de penetraci&oacute;n identifica los servicios en ejecuci&oacute;n. Una auditor&iacute;a de vulnerabilidades proporciona una mayor informaci&oacute;n sobre las vulnerabilidades.";
 choices[29][1] = "Un test de penetraci&oacute;n enumera los recursos, una auditor&iacute;a de vulnerabilidaes enumera las vulnerabilidades.";
 choices[29][2] = "Un test de penetraci&oacute;n aprovecha las vulnerabilidades, una auditor&iacute;a de vulnerabilidades encuentra las vulnerabilidades.";
 choices[29][3] = "Los dos son lo mismo.";
 answers[29] = 2;
 units[29] = ['36'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2445. ";
 preguntaids[29] = 2445


//  Id pregunta: 5484 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes elementos se pueden anexar a archivos como una protecci&oacute;n contra los virus?";
 choices[30]= new Array();
 choices[30][0] = "Bloqueadores de conducta.";
 choices[30][1] = "Verificadores de redundancia c&iacute;clica (CRC)";
 choices[30][2] = "Inmunizadores.";
 choices[30][3] = "Monitores activos.";
 answers[30] = 2;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 5484. ";
 preguntaids[30] = 5484


//  Id pregunta: 2449 Año de creación de pregunta: 2006
 questions[31]= "32)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[31]= new Array();
 choices[31][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[31][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del cat&aacute;logo de bienes y servicios de contrataci&oacute;n centralizada";
 choices[31][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[31][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado sin publicidad";
 answers[31] = 2;
 units[31] = ['38'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2449. ";
 preguntaids[31] = 2449


//  Id pregunta: 2451 Año de creación de pregunta: 2006
 questions[32]= "33)  Se&ntilde;ale cual de las siguientes normas se debe tener en cuenta en el Area de Seguridad de una organizaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "ISO 27002";
 choices[32][1] = "ISO 14508 sobre perfiles de protecci&oacute;n";
 choices[32][2] = "ISO 14848";
 choices[32][3] = "UNE-ISO 17799";
 answers[32] = 0;
 units[32] = ['48'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2451. ";
 preguntaids[32] = 2451


//  Id pregunta: 5564 Año de creación de pregunta: 2007
 questions[33]= "34)  La gesti&oacute;n proactiva de un sistema permite";
 choices[33]= new Array();
 choices[33][0] = "Solucionar todas las posibles incidencias.";
 choices[33][1] = "Detectar los problemas con anterioridad a la percepci&oacute;n de los mismos por parte del usuario.";
 choices[33][2] = "Corregir los problemas antes de que estos se produzcan.";
 choices[33][3] = "Mantener a todos los usuarios informados del estado de los sistemas.";
 answers[33] = 1;
 units[33] = ['28'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 5564. ";
 preguntaids[33] = 5564


//  Id pregunta: 2457 Año de creación de pregunta: 2006
 questions[34]= "35)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[34]= new Array();
 choices[34][0] = "X.600";
 choices[34][1] = "Open LDAP";
 choices[34][2] = "X.400";
 choices[34][3] = "X.500";
 answers[34] = 3;
 units[34] = ['43'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2457. ";
 preguntaids[34] = 2457


//  Id pregunta: 5559 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[35]= new Array();
 choices[35][0] = "Agregar y quitar usuarios.";
 choices[35][1] = "Desarrollo de aplicaciones internas.";
 choices[35][2] = "Realizar copias de seguridad.";
 choices[35][3] = "Monitorizar el sistema.";
 answers[35] = 1;
 units[35] = ['30'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 5559. Examen TIC MAP B 2006";
 preguntaids[35] = 5559


//  Id pregunta: 5488 Año de creación de pregunta: 2007
 questions[36]= "37)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[36]= new Array();
 choices[36][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[36][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[36][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[36][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[36] = 0;
 units[36] = ['30'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 5488. ";
 preguntaids[36] = 5488


//  Id pregunta: 5462 Año de creación de pregunta: 2007
 questions[37]= "38)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[37]= new Array();
 choices[37][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[37][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[37][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[37][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[37] = 0;
 units[37] = ['33'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 5462. Map 2005";
 preguntaids[37] = 5462


//  Id pregunta: 3487 Año de creación de pregunta: 2006
 questions[38]= "39)  En un centro de llamadas, gestionar las necesidades del usuario la primera vez que llama, evitando la necesidad de una segunda llamada";
 choices[38]= new Array();
 choices[38][0] = "Soporte electr&oacute;nico";
 choices[38][1] = "Solicitud autom&aacute;tica de repetici&oacute;n (ARQ)";
 choices[38][2] = "Calidad de servicio";
 choices[38][3] = "Resoluci&oacute;n de primera llamada";
 answers[38] = 3;
 units[38] = ['30'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 3487. ";
 preguntaids[38] = 3487


//  Id pregunta: 2458 Año de creación de pregunta: 2006
 questions[39]= "40)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[39]= new Array();
 choices[39][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[39][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[39][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[39][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[39] = 0;
 units[39] = ['30'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2458. ";
 preguntaids[39] = 2458


//  Id pregunta: 5494 Año de creación de pregunta: 2007
 questions[40]= "41)  Los objetivos de alto nivel de la auditoria inform&aacute;tica son, con car&aacute;cter general: I) Dar a la Direcci&oacute;n garant&iacute;a suficiente del cumplimiento de los objetivos de control. II) Sustanciar los riesgos resultantes, si se detectan debilidades de control significativas. III) Aconsejar a la Direcci&oacute;n sobre el curso de acciones correctivas.";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo I";
 choices[40][1] = "S&oacute;lo II.";
 choices[40][2] = "I y II.";
 choices[40][3] = "I, II y III";
 answers[40] = 3;
 units[40] = ['36'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 5494. ";
 preguntaids[40] = 5494


//  Id pregunta: 5259 Año de creación de pregunta: 2006
 questions[41]= "42)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[41]= new Array();
 choices[41][0] = "La defensa de los productos de las multinacionales";
 choices[41][1] = "Evitar que se pueda difundir el software libre";
 choices[41][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[41][3] = "La defensa de los derechos de los autores";
 answers[41] = 3;
 units[41] = ['36'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 5259. ";
 preguntaids[41] = 5259


//  Id pregunta: 4296 Año de creación de pregunta: 2002
 questions[42]= "43)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[42]= new Array();
 choices[42][0] = "Amenazas";
 choices[42][1] = "Vulnerabilidad";
 choices[42][2] = "Impacto";
 choices[42][3] = "Riesgo";
 answers[42] = 2;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 4296. ";
 preguntaids[42] = 4296


//  Id pregunta: 5496 Año de creación de pregunta: 2007
 questions[43]= "44)  Una entidad estatal emplea a 3.000 personas (250 en el departamento TIC), gestiona un presupuesto de gastos de 1.000 millones de Euros, tiene una base de datos central de 4.000 millones de registros, y registra un volumen de 45 millones de transacciones anuales. Una autoevaluaci&oacute;n de riesgos realizada recientemente ha concluido en la necesidad de establecer una unidad/funci&oacute;n de auditor&iacute;a inform&aacute;tica. La ubicaci&oacute;n org&aacute;nica m&aacute;s adecuada de esta nueva unidad ser&iacute;a:";
 choices[43]= new Array();
 choices[43][0] = "Dentro del Departamento TIC, en dependencia directa del Director de Sistemas de Informaci&oacute;n.";
 choices[43][1] = "Dentro del Departamento TIC, dependiendo del Administrador Corporativo de Seguridad.";
 choices[43][2] = "Dentro de la Unidad de Auditor&iacute;a Interna.";
 choices[43][3] = "Dentro de la Secretar&iacute;a General o unidad de servicios generales.";
 answers[43] = 2;
 units[43] = ['36'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 5496. ";
 preguntaids[43] = 5496


//  Id pregunta: 5493 Año de creación de pregunta: 2007
 questions[44]= "45)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[44][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[44][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[44][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[44] = 1;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 5493. ";
 preguntaids[44] = 5493


//  Id pregunta: 4850 Año de creación de pregunta: 2002
 questions[45]= "46)  En un sistema en el que todos los usuarios necesitan el mismo servicio:";
 choices[45]= new Array();
 choices[45][0] = "Todos los usuarios esperan el mismo tiempo para ser atendidos.";
 choices[45][1] = "El tiempo total de servicio es el mismo y no depende del patr&oacute;n de llegadas.";
 choices[45][2] = "S&oacute;lo se puede acotar el tiempo m&iacute;nimo de espera.";
 choices[45][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[45] = 3;
 units[45] = ['30'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 4850. ";
 preguntaids[45] = 4850


//  Id pregunta: 3945 Año de creación de pregunta: 2002
 questions[46]= "47)  Para evaluar el comportamiento de un sistema inform&aacute;tico se utilizan diferentes variables. Una de las siguientes no es utilizada para este fin:";
 choices[46]= new Array();
 choices[46][0] = "Factor de cola";
 choices[46][1] = "Overhead";
 choices[46][2] = "Swapping";
 choices[46][3] = "Triggers";
 answers[46] = 3;
 units[46] = ['30'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 3945. ";
 preguntaids[46] = 3945


//  Id pregunta: 5361 Año de creación de pregunta: 2006
 questions[47]= "48)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[47]= new Array();
 choices[47][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[47][1] = "Hacer una copia de seguridad de todos los datos";
 choices[47][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[47][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[47] = 2;
 units[47] = ['45'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 5361. ";
 preguntaids[47] = 5361


//  Id pregunta: 4884 Año de creación de pregunta: 2002
 questions[48]= "49)  La f&oacute;rmula de Little indica:";
 choices[48]= new Array();
 choices[48][0] = "N&uacute;mero medio de servidores esperando a ser requeridos por el usuario";
 choices[48][1] = "N&uacute;mero medio de usuarios esperando";
 choices[48][2] = "N&uacute;mero m&aacute;ximo de usuarios esperando que puede soportar el sistema";
 choices[48][3] = "N&uacute;mero medio de usuarios en el sistema";
 answers[48] = 3;
 units[48] = ['30'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 4884. ";
 preguntaids[48] = 4884


//  Id pregunta: 5365 Año de creación de pregunta: 2006
 questions[49]= "50)  Caso de utilizar un &uacute;nico m&eacute;todo, se economiza tiempo de restauraci&oacute;n con backups de tipo";
 choices[49]= new Array();
 choices[49][0] = "Completo";
 choices[49][1] = "Diferencial";
 choices[49][2] = "Incremental";
 choices[49][3] = "Es indiferente";
 answers[49] = 0;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 5365. ";
 preguntaids[49] = 5365


//  Id pregunta: 3282 Año de creación de pregunta: 2003
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[50]= new Array();
 choices[50][0] = "Mas del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios.";
 choices[50][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos informaticos.";
 choices[50][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electr&oacute;nica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[50][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficacia para proyectos no triviales.";
 answers[50] = 2;
 units[50] = ['40'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 3282. Junta Andaluc&iacute;a";
 preguntaids[50] = 3282


//  Id pregunta: 2454 Año de creación de pregunta: 2006
 questions[51]= "52)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[51]= new Array();
 choices[51][0] = "X/OPEN";
 choices[51][1] = "ACE";
 choices[51][2] = "OSF";
 choices[51][3] = "IEEE";
 answers[51] = 3;
 units[51] = ['43'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2454. ";
 preguntaids[51] = 2454


//  Id pregunta: 5366 Año de creación de pregunta: 2006
 questions[52]= "53)  Con el termino &quot;ventana de backup&quot; se define";
 choices[52]= new Array();
 choices[52][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[52][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[52][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[52][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[52] = 3;
 units[52] = ['45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 5366. ";
 preguntaids[52] = 5366


//  Id pregunta: 5491 Año de creación de pregunta: 2007
 questions[53]= "54)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[53]= new Array();
 choices[53][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[53][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[53][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[53][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[53] = 1;
 units[53] = ['30'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 5491. ";
 preguntaids[53] = 5491


//  Id pregunta: 2446 Año de creación de pregunta: 2006
 questions[54]= "55)  &iquest;Cu&aacute;ndo es mejor realizar una auditor&iacute;a de vulnerabilidades que un test de penetraci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Normalmente es necesario ejecutar ambos";
 choices[54][1] = "Cuando buscas una visi&oacute;n m&aacute;s amplia del entorno en lugar de una visi&oacute;n m&aacute;s concreta de un punto";
 choices[54][2] = "Cuando los tests de penetraci&oacute;n est&aacute;n llenos de falsos positivos";
 choices[54][3] = "Cuando los tests de penetraci&oacute;n pueden, potencialmente, da&ntilde;ar equipos cr&iacute;ticos";
 answers[54] = 1;
 units[54] = ['36'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2446. ";
 preguntaids[54] = 2446


//  Id pregunta: 2516 Año de creación de pregunta: 2004
 questions[55]= "56)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[55]= new Array();
 choices[55][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[55][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[55][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[55][3] = "La FNMT";
 answers[55] = 3;
 units[55] = ['30'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2516. Examen TIC MAP B 2004";
 preguntaids[55] = 2516


//  Id pregunta: 5344 Año de creación de pregunta: 2006
 questions[56]= "57)  Documento que indica por escrito como una organizaci&oacute;n planea proteger los recursos f&iacute;sicos e inform&aacute;ticos";
 choices[56]= new Array();
 choices[56][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[56][1] = "Pol&iacute;tica de Seguridad";
 choices[56][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[56][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[56] = 1;
 units[56] = ['45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 5344. ";
 preguntaids[56] = 5344


//  Id pregunta: 3585 Año de creación de pregunta: 2002
 questions[57]= "58)  Funciones de un sistema de informaci&oacute;n son:";
 choices[57]= new Array();
 choices[57][0] = "Entrada de datos, almacenamiento y presentaci&oacute;n de los mismos";
 choices[57][1] = "Entrada de datos, comunicaciones y c&aacute;lculo";
 choices[57][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son correctas";
 choices[57][3] = "Almacenamiento de datos, c&aacute;lculo y comunicaciones";
 answers[57] = 2;
 units[57] = ['24'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 3585. ";
 preguntaids[57] = 3585


//  Id pregunta: 2453 Año de creación de pregunta: 2006
 questions[58]= "59)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y por lo especialmente previsto por la LOPD?";
 choices[58]= new Array();
 choices[58][0] = "Los derivados del Registro Civil";
 choices[58][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[58][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[58][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[58] = 0;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2453. ";
 preguntaids[58] = 2453


//  Id pregunta: 5490 Año de creación de pregunta: 2007
 questions[59]= "60)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[59]= new Array();
 choices[59][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[59][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[59][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[59][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[59] = 3;
 units[59] = ['30'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 5490. ";
 preguntaids[59] = 5490


//  Id pregunta: 4299 Año de creación de pregunta: 2009
 questions[60]= "61)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[60]= new Array();
 choices[60][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[60][1] = "Resultado de una agresi&oacute;n";
 choices[60][2] = "Posibilidad de ocurrencia de un incidente";
 choices[60][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[60] = 3;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 4299. ";
 preguntaids[60] = 4299


//  Id pregunta: 4290 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[61]= new Array();
 choices[61][0] = "Plan de emergencia";
 choices[61][1] = "Plan de sistemas";
 choices[61][2] = "Plan de recuperaci&oacute;n";
 choices[61][3] = "Plan de respaldo";
 answers[61] = 1;
 units[61] = ['36'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 4290. ";
 preguntaids[61] = 4290


//  Id pregunta: 5566 Año de creación de pregunta: 2007
 questions[62]= "63)  Seg&uacute;n Magerit v.3 los elementos del an&aacute;lisis de riesgos son:";
 choices[62]= new Array();
 choices[62][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[62][1] = "Activos, amenazas y salvaguardas.";
 choices[62][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[62][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[62] = 1;
 units[62] = ['45'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 5566. ";
 preguntaids[62] = 5566


//  Id pregunta: 5419 Año de creación de pregunta: 2007
 questions[63]= "64)  La Agencia de Protecci&oacute;n de Datos se adscribe al Ministerio de";
 choices[63]= new Array();
 choices[63][0] = "Administraciones P&uacute;blicas";
 choices[63][1] = "Industria, Turismo y Comercio";
 choices[63][2] = "Justicia";
 choices[63][3] = "Ninguna es correcta";
 answers[63] = 3;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 5419. La AEPD actua con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones y se relaciona con el Gobierno a trav&eacute;s del Ministerio de Justicia";
 preguntaids[63] = 5419


//  Id pregunta: 5492 Año de creación de pregunta: 2007
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[64]= new Array();
 choices[64][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[64][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[64][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[64][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[64] = 3;
 units[64] = ['45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 5492. ";
 preguntaids[64] = 5492


//  Id pregunta: 3953 Año de creación de pregunta: 2002
 questions[65]= "66)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[65][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[65][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[65][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[65] = 2;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 3953. ";
 preguntaids[65] = 3953


//  Id pregunta: 5309 Año de creación de pregunta: 2006
 questions[66]= "67)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[66]= new Array();
 choices[66][0] = "clusters";
 choices[66][1] = "multicast";
 choices[66][2] = "balanceo de carga";
 choices[66][3] = "peering";
 answers[66] = 2;
 units[66] = ['39'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 5309. ";
 preguntaids[66] = 5309


//  Id pregunta: 5483 Año de creación de pregunta: 2007
 questions[67]= "68)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[67]= new Array();
 choices[67][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[67][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[67][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[67][3] = "Halon en lugar de agua.";
 answers[67] = 0;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5483. ";
 preguntaids[67] = 5483


//  Id pregunta: 3727 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[68]= new Array();
 choices[68][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[68][1] = "Organizaci&oacute;n funcional";
 choices[68][2] = "Organizaci&oacute;n proyecto-staff";
 choices[68][3] = "Organizaci&oacute;n por aplicaciones";
 answers[68] = 0;
 units[68] = ['30'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 3727. ";
 preguntaids[68] = 3727


//  Id pregunta: 5312 Año de creación de pregunta: 2006
 questions[69]= "70)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[69]= new Array();
 choices[69][0] = "Common Management Information Protocol (CMIP)";
 choices[69][1] = "Network Data Management Protocol (NDMP)";
 choices[69][2] = "Point-to-Point Protocol (PPP)";
 choices[69][3] = "Bootstrap Protocol (BOOTP)";
 answers[69] = 1;
 units[69] = ['45'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 5312. ";
 preguntaids[69] = 5312


//  Id pregunta: 4297 Año de creación de pregunta: 2009
 questions[70]= "71)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[70]= new Array();
 choices[70][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[70][1] = "Lo que podr&iacute;a pasar";
 choices[70][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[70][3] = "Lo que probablemente pase";
 answers[70] = 2;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 4297. ";
 preguntaids[70] = 4297


//  Id pregunta: 5563 Año de creación de pregunta: 2007
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[71]= new Array();
 choices[71][0] = "Mantenimiento correctivo.";
 choices[71][1] = "Mantenimiento preventivo.";
 choices[71][2] = "Mantenimiento perfectivo.";
 choices[71][3] = "Mantenimiento adaptativo.";
 answers[71] = 1;
 units[71] = ['30'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5563. ";
 preguntaids[71] = 5563


//  Id pregunta: 2448 Año de creación de pregunta: 2006
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[72]= new Array();
 choices[72][0] = "Impide la descarga de contenido protegido";
 choices[72][1] = "Impide la copia de contenido protegido";
 choices[72][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[72][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[72] = 0;
 units[72] = ['41'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2448. ";
 preguntaids[72] = 2448


//  Id pregunta: 5363 Año de creación de pregunta: 2006
 questions[73]= "74)  Un sitio frio de respaldo se caracteriza por";
 choices[73]= new Array();
 choices[73][0] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[73][1] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[73][2] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[73][3] = "ninguna de las anteriores";
 answers[73] = 0;
 units[73] = ['45'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 5363. ";
 preguntaids[73] = 5363


//  Id pregunta: 5325 Año de creación de pregunta: 2006
 questions[74]= "75)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[74]= new Array();
 choices[74][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[74][1] = "clave";
 choices[74][2] = "acuerdo de nivel de servicio (SLA)";
 choices[74][3] = "dongle";
 answers[74] = 3;
 units[74] = ['41'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 5325. ";
 preguntaids[74] = 5325


