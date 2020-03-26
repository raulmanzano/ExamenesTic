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
//  Id pregunta: 4050 Año de creación de pregunta: 2003
 questions[0]= "1)  La tecnolog&iacute;a denominada OCR (Optical Character Recognizer), se emplea para:";
 choices[0]= new Array();
 choices[0][0] = "Extraer de un documento electr&oacute;nico un conjunto de palabras o caracteres (descriptores) que sirvan para la representaci&oacute;n del mismo en bases de datos documentales.";
 choices[0][1] = "Analizar tramas de bit, en transmisiones a trav&eacute;s de dispositivos f&iacute;sicos de fibra &oacute;ptica (10/100/1000baseFX).";
 choices[0][2] = "Analizar la autenticidad e integridad de documentos firmados electr&oacute;nicamente.";
 choices[0][3] = "Interpretar digitalmente un documento en papel y generar un archivo electr&oacute;nico de texto con las palabras reconocidas.";
 answers[0] = 3;
 units[0] = ['81'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 4050. Junta Andaluc&iacute;a";
 preguntaids[0] = 4050


//  Id pregunta: 3275 Año de creación de pregunta: 2003
 questions[1]= "2)  Los thin clients son:";
 choices[1]= new Array();
 choices[1][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[1][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[1][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[1][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[1] = 0;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3275. Junta Andaluc&iacute;a";
 preguntaids[1] = 3275


//  Id pregunta: 4046 Año de creación de pregunta: 2003
 questions[2]= "3)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[2]= new Array();
 choices[2][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[2][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[2][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[2][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[2] = 1;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 4046. Junta Andaluc&iacute;a";
 preguntaids[2] = 4046


//  Id pregunta: 3268 Año de creación de pregunta: 2003
 questions[3]= "4)  La forma normal Boyce-Codd (FNBC):";
 choices[3]= new Array();
 choices[3][0] = "Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[3][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[3][2] = "Se denomina indistintamente 5FN.";
 choices[3][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[3] = 1;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3268. Junta Andaluc&iacute;a";
 preguntaids[3] = 3268


//  Id pregunta: 3633 Año de creación de pregunta: 2004
 questions[4]= "5)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[4]= new Array();
 choices[4][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[4][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[4][2] = "El equipo de mantenimiento y el jefe de proyecto";
 choices[4][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[4] = 2;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3633. Pregunta Junta Andalucia - A";
 preguntaids[4] = 3633


//  Id pregunta: 3584 Año de creación de pregunta: 2004
 questions[5]= "6)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Superclave";
 choices[5][1] = "Clave principal";
 choices[5][2] = "Tupla m&uacute;ltiple";
 choices[5][3] = "Clave ajena";
 answers[5] = 3;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3584. Pregunta Junta Andalucia - A";
 preguntaids[5] = 3584


//  Id pregunta: 4049 Año de creación de pregunta: 2003
 questions[6]= "7)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[6]= new Array();
 choices[6][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[6][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[6][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[6][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[6] = 1;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 4049. Junta Andaluc&iacute;a";
 preguntaids[6] = 4049


//  Id pregunta: 4044 Año de creación de pregunta: 2003
 questions[7]= "8)  En el contexto del dise&ntilde;o y la programaci&oacute;n de ordenadores, un m&oacute;dulo es:";
 choices[7]= new Array();
 choices[7][0] = "Una unidad intercambiable que realiza una funci&oacute;n espec&iacute;fica y tiene conexiones con el entorno.";
 choices[7][1] = "Una parte fija de un sistema inform&aacute;tico que realiza las operaciones aritm&eacute;tico-l&oacute;gicas.";
 choices[7][2] = "Una parte del entorno de un sistema inform&aacute;tico.";
 choices[7][3] = "Un ordenador dedicado a una tarea espec&iacute;fica o para un rango reducido de tareas.";
 answers[7] = 0;
 units[7] = ['89'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 4044. Junta Andaluc&iacute;a";
 preguntaids[7] = 4044


//  Id pregunta: 5106 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[8]= new Array();
 choices[8][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[8][1] = "Diagrama de Despliegue.";
 choices[8][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[8][3] = "Diagrama de Interacci&oacute;n.";
 answers[8] = 2;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 5106. Junta Andaluc&iacute;a";
 preguntaids[8] = 5106


//  Id pregunta: 3185 Año de creación de pregunta: 2003
 questions[9]= "10)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Procedimiento";
 choices[9][1] = "Producto.";
 choices[9][2] = "Secuencia.";
 choices[9][3] = "Segmento.";
 answers[9] = 0;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3185. Junta Andaluc&iacute;a";
 preguntaids[9] = 3185


//  Id pregunta: 3218 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[10]= new Array();
 choices[10][0] = "Redistribuci&oacute;n libre.";
 choices[10][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[10][2] = "Derecho de modificaci&oacute;n.";
 choices[10][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[10] = 3;
 units[10] = ['66'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3218. Junta Andaluc&iacute;a";
 preguntaids[10] = 3218


//  Id pregunta: 3283 Año de creación de pregunta: 2003
 questions[11]= "12)  Si en un texto de inform&aacute;tica encontr&aacute;ramos la expresi&oacute;n &quot;memoria de ferrita&rdquo;, sabr&iacute;amos que estamos leyendo un libro de:";
 choices[11]= new Array();
 choices[11][0] = "Dispositivos optoelectr&oacute;nicos.";
 choices[11][1] = "Historia de la inform&aacute;tica.";
 choices[11][2] = "Dispositivos perif&eacute;ricos.";
 choices[11][3] = "Inteligencia artificial.";
 answers[11] = 1;
 units[11] = ['52'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3283. Junta Andaluc&iacute;a";
 preguntaids[11] = 3283


//  Id pregunta: 3196 Año de creación de pregunta: 2003
 questions[12]= "13)  El Standard IEEE 1387.2-1995: Software Administration, define el est&aacute;ndar POSIX-7.2:";
 choices[12]= new Array();
 choices[12][0] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas pero no en entornos heterog&eacute;neos.";
 choices[12][1] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas o en entornos heterog&eacute;neos.";
 choices[12][2] = "POSIX (Portable Operating System Interface) es un grupo de interfaces est&aacute;ndares de sistema operativo, y la 7.2 esta dise&ntilde;ada espec&iacute;ficamente para soportar la portabilidad de aplicaciones en c&oacute;digo fuente.";
 choices[12][3] = "Este est&aacute;ndar provee un entorno de computaci&oacute;n en el cual las aplicaciones pueden ser portadas a todos los productos certificados, que pueden ser de distintos proveedores. Contiene est&aacute;ndares para el sistema operativo, protocolos de red, lenguajes de p";
 answers[12] = 1;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3196. Junta Andaluc&iacute;a";
 preguntaids[12] = 3196


//  Id pregunta: 3226 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[13][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[13][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[13][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[13] = 3;
 units[13] = ['52'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3226. Junta Andaluc&iacute;a";
 preguntaids[13] = 3226


//  Id pregunta: 3608 Año de creación de pregunta: 2004
 questions[14]= "15)  La asignaci&oacute;n de la petici&oacute;n, en METRICA V3, consiste en:";
 choices[14]= new Array();
 choices[14][0] = "La tarea del Mantenimiento de sistemas de informaci&oacute;n en METRICA V3 en la que se determina el tipo de mantenimiento requerido por la petici&oacute;n asignada.";
 choices[14][1] = "La determinaci&oacute;n de los recursos necesarios para atender una petici&oacute;n de mantenimiento una vez aceptada la petici&oacute;n";
 choices[14][2] = "La determinaci&oacute;n de quien es la responsabilidad de atender una petici&oacute;n, previa a la aceptaci&oacute;n de la petici&oacute;n";
 choices[14][3] = "No es una tarea incluida en esta metodolog&iacute;a";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3608. Pregunta Junta Andalucia - A";
 preguntaids[14] = 3608


//  Id pregunta: 3236 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[15]= new Array();
 choices[15][0] = "Base de datos remota.";
 choices[15][1] = "Proceso distribuido.";
 choices[15][2] = "Presentaci&oacute;n remota.";
 choices[15][3] = "Presentaci&oacute;n distribuida.";
 answers[15] = 0;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3236. Junta Andaluc&iacute;a";
 preguntaids[15] = 3236


//  Id pregunta: 4048 Año de creación de pregunta: 2003
 questions[16]= "17)  En METRICA versi&oacute;n 3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?:";
 choices[16]= new Array();
 choices[16][0] = "Estudio de Viabilidad del Sistema (EVS).";
 choices[16][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI).";
 choices[16][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI).";
 choices[16][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI).";
 answers[16] = 1;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 4048. Junta Andaluc&iacute;a";
 preguntaids[16] = 4048


//  Id pregunta: 3634 Año de creación de pregunta: 2004
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[17]= new Array();
 choices[17][0] = "An&aacute;lisis de impacto";
 choices[17][1] = "Catalogaci&oacute;n";
 choices[17][2] = "Planificaci&oacute;n";
 choices[17][3] = "Pruebas de regresi&oacute;n";
 answers[17] = 1;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3634. Pregunta Junta Andalucia - A";
 preguntaids[17] = 3634


//  Id pregunta: 3247 Año de creación de pregunta: 2003
 questions[18]= "19)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[18]= new Array();
 choices[18][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[18][1] = "Una biblioteca de clases Java.";
 choices[18][2] = "Una interfaz de usuario.";
 choices[18][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[18] = 0;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3247. Junta Andaluc&iacute;a";
 preguntaids[18] = 3247


//  Id pregunta: 3195 Año de creación de pregunta: 2003
 questions[19]= "20)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos sat&eacute;lites operativos se compone?";
 choices[19]= new Array();
 choices[19][0] = "16";
 choices[19][1] = "24";
 choices[19][2] = "32";
 choices[19][3] = "64";
 answers[19] = 1;
 units[19] = ['71'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3195. Junta Andaluc&iacute;a";
 preguntaids[19] = 3195


//  Id pregunta: 3273 Año de creación de pregunta: 2003
 questions[20]= "21)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[20]= new Array();
 choices[20][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[20][1] = "L&iacute;neas de entrada y salida.";
 choices[20][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[20][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[20] = 2;
 units[20] = ['52'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3273. Junta Andaluc&iacute;a";
 preguntaids[20] = 3273


//  Id pregunta: 4047 Año de creación de pregunta: 2003
 questions[21]= "22)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[21]= new Array();
 choices[21][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[21][1] = "El responsable de mantenimiento y el jefe de proyecto.";
 choices[21][2] = "El equipo de mantenimiento y el jefe del proyecto.";
 choices[21][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios.";
 answers[21] = 2;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 4047. Junta Andaluc&iacute;a";
 preguntaids[21] = 4047


//  Id pregunta: 4018 Año de creación de pregunta: 2004
 questions[22]= "23)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[22]= new Array();
 choices[22][0] = "Estas t&eacute;cnicas no se utilizan en el PSI";
 choices[22][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n";
 choices[22][2] = "PSI5 Estudio de los sistemas de informaci&oacute;n actuales";
 choices[22][3] = "PSI4 Identificaci&oacute;n de requisitos";
 answers[22] = 3;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 4018. Pregunta Junta Andalucia - A";
 preguntaids[22] = 4018


//  Id pregunta: 4045 Año de creación de pregunta: 2003
 questions[23]= "24)  En el Mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[23]= new Array();
 choices[23][0] = "Estad&iacute;stica e Inventario de Cambios.";
 choices[23][1] = "Registro de cambios.";
 choices[23][2] = "Registro de la petici&oacute;n.";
 choices[23][3] = "Catalogo de peticiones.";
 answers[23] = 2;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 4045. Junta Andaluc&iacute;a";
 preguntaids[23] = 4045


//  Id pregunta: 3220 Año de creación de pregunta: 2003
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[24]= new Array();
 choices[24][0] = "Directa.";
 choices[24][1] = "Totalmente asociativa.";
 choices[24][2] = "Asociativa por conjuntos.";
 choices[24][3] = "Suprayectiva.";
 answers[24] = 3;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3220. Junta Andaluc&iacute;a";
 preguntaids[24] = 3220


//  Id pregunta: 3248 Año de creación de pregunta: 2003
 questions[25]= "26)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "R&eacute;plica.";
 choices[25][1] = "Segmento.";
 choices[25][2] = "Instancia.";
 choices[25][3] = "Tablespace.";
 answers[25] = 2;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3248. Junta Andaluc&iacute;a";
 preguntaids[25] = 3248


//  Id pregunta: 5122 Año de creación de pregunta: 2003
 questions[26]= "27)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[26]= new Array();
 choices[26][0] = "ICMP";
 choices[26][1] = "SNMP.";
 choices[26][2] = "SMTP.";
 choices[26][3] = "MIME.";
 answers[26] = 0;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5122. Junta Andaluc&iacute;a";
 preguntaids[26] = 5122


//  Id pregunta: 3593 Año de creación de pregunta: 2004
 questions[27]= "28)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[27]= new Array();
 choices[27][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[27][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[27][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[27][3] = "Paso a Producci&oacute;n";
 answers[27] = 1;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3593. Pregunta Junta Andalucia - A";
 preguntaids[27] = 3593


//  Id pregunta: 5121 Año de creación de pregunta: 2003
 questions[28]= "29)  En el nivel de Enlace del modelo OSI, parada-espera, adelante-atr&aacute;s, y rechazo selectivo, son:";
 choices[28]= new Array();
 choices[28][0] = "M&eacute;todos de detecci&oacute;n de errores.";
 choices[28][1] = "Mecanismos de solicitud de repetici&oacute;n autom&aacute;tica (ARQ).";
 choices[28][2] = "Protocolos de control de enlace de alto nivel.";
 choices[28][3] = "Procedimientos de acceso al enlace.";
 answers[28] = 1;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5121. Junta Andaluc&iacute;a";
 preguntaids[28] = 5121


//  Id pregunta: 3606 Año de creación de pregunta: 2004
 questions[29]= "30)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[29]= new Array();
 choices[29][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[29][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[29][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[29][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[29] = 0;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3606. Pregunta Junta Andalucia - A";
 preguntaids[29] = 3606


//  Id pregunta: 5108 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[30]= new Array();
 choices[30][0] = "Enterprise Java Beans (EJB).";
 choices[30][1] = "Servlets.";
 choices[30][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[30][3] = "JavaServer Pages (JSP).";
 answers[30] = 2;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5108. Junta Andaluc&iacute;a";
 preguntaids[30] = 5108


//  Id pregunta: 3604 Año de creación de pregunta: 2004
 questions[31]= "32)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[31]= new Array();
 choices[31][0] = "Cambios precisos para corregir errores del software";
 choices[31][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[31][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[31][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[31] = 3;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3604. Pregunta Junta Andalucia - A";
 preguntaids[31] = 3604


//  Id pregunta: 3228 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[32]= new Array();
 choices[32][0] = "DVD-R.";
 choices[32][1] = "DVD+R.";
 choices[32][2] = "DVD-ROM.";
 choices[32][3] = "DVD-RAM.";
 answers[32] = 2;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3228. Junta Andaluc&iacute;a";
 preguntaids[32] = 3228


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[33]= "34)  En un modelo de datos jer&aacute;rquico:";
 choices[33]= new Array();
 choices[33][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[33][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[33][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[33][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[33] = 1;
 units[33] = ['60'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[33] = 3261


//  Id pregunta: 3221 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes operaciones l&oacute;gicas es incorrecta?:";
 choices[34]= new Array();
 choices[34][0] = "complementario de (A+B) = complementario (A) . complementario (B)";
 choices[34][1] = "complementario de (A.B) = complementario (A) + complementario (B)";
 choices[34][2] = "complementario de (A . A) = complementario (A)";
 choices[34][3] = "doble complementario (A) = A";
 answers[34] = 2;
 units[34] = ['52'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3221. Junta Andaluc&iacute;a";
 preguntaids[34] = 3221


//  Id pregunta: 5113 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[35]= new Array();
 choices[35][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[35][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[35][2] = "Especificaci&oacute;n de medio 10BASE-T.";
 choices[35][3] = "Especificaci&oacute;n de medio 10BROAD36.";
 answers[35] = 0;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5113. Junta Andaluc&iacute;a";
 preguntaids[35] = 5113


//  Id pregunta: 3269 Año de creación de pregunta: 2003
 questions[36]= "37)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[36][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[36][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[36][3] = "Criptograf&iacute;a paralela.";
 answers[36] = 1;
 units[36] = ['76'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3269. Junta Andaluc&iacute;a";
 preguntaids[36] = 3269


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[37]= new Array();
 choices[37][0] = "zx81.";
 choices[37][1] = "IBM XT.";
 choices[37][2] = "APPLE.";
 choices[37][3] = "Amstrad CPC 128.";
 answers[37] = 2;
 units[37] = ['56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[37] = 3242


//  Id pregunta: 3271 Año de creación de pregunta: 2003
 questions[38]= "39)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[38]= new Array();
 choices[38][0] = "150 KB/seg.";
 choices[38][1] = "3600 KB/seg.";
 choices[38][2] = "7200 KB/seg.";
 choices[38][3] = "3 MB/seg.";
 answers[38] = 2;
 units[38] = ['53'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3271. Junta Andaluc&iacute;a";
 preguntaids[38] = 3271


//  Id pregunta: 3284 Año de creación de pregunta: 2003
 questions[39]= "40)  Si estamos hablando de GNOME, nos referimos a:";
 choices[39]= new Array();
 choices[39][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[39][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[39][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[39][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[39] = 1;
 units[39] = ['66'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3284. Junta Andaluc&iacute;a";
 preguntaids[39] = 3284


//  Id pregunta: 4051 Año de creación de pregunta: 2003
 questions[40]= "41)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[40]= new Array();
 choices[40][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[40][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[40][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[40][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[40] = 0;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4051. Junta Andaluc&iacute;a";
 preguntaids[40] = 4051


//  Id pregunta: 3587 Año de creación de pregunta: 2004
 questions[41]= "42)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[41]= new Array();
 choices[41][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[41][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[41][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[41][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[41] = 1;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3587. Pregunta Junta Andalucia - A";
 preguntaids[41] = 3587


//  Id pregunta: 4019 Año de creación de pregunta: 2004
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[42]= new Array();
 choices[42][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[42][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[42][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[42][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[42] = 2;
 units[42] = ['92', '93', '98'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4019. Pregunta Junta Andalucia - A";
 preguntaids[42] = 4019


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[43]= new Array();
 choices[43][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[43][1] = "Alta volatilidad de los datos.";
 choices[43][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[43][3] = "Integraci&oacute;n del formato de los datos.";
 answers[43] = 1;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[43] = 3217


//  Id pregunta: 4042 Año de creación de pregunta: 2003
 questions[44]= "45)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?:";
 choices[44]= new Array();
 choices[44][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico,";
 choices[44][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico.";
 choices[44][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico: se realiza de forma conjunta.";
 choices[44][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o l&oacute;gico.";
 answers[44] = 0;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 4042. Junta Andaluc&iacute;a";
 preguntaids[44] = 4042


//  Id pregunta: 5120 Año de creación de pregunta: 2003
 questions[45]= "46)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[45]= new Array();
 choices[45][0] = "HDLC, LAPB y LAPD.";
 choices[45][1] = "SDLC, LAPB e ICMP.";
 choices[45][2] = "LAPB, LAPD y LAPH.";
 choices[45][3] = "HDLC, LAPB e ICMP.";
 answers[45] = 0;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5120. Junta Andaluc&iacute;a";
 preguntaids[45] = 5120


//  Id pregunta: 2372 Año de creación de pregunta: 2004
 questions[46]= "47)  Un fichero automatizado con (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[46]= new Array();
 choices[46][0] = "B&aacute;sico";
 choices[46][1] = "Medio";
 choices[46][2] = "Alto";
 choices[46][3] = "Cr&iacute;tico";
 answers[46] = 2;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2372. Junta Andaluc&iacute;a 2002";
 preguntaids[46] = 2372


//  Id pregunta: 4052 Año de creación de pregunta: 2003
 questions[47]= "48)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[47]= new Array();
 choices[47][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[47][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[47][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[47][3] = "Paso a Producci&oacute;n.";
 answers[47] = 1;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4052. Junta Andaluc&iacute;a";
 preguntaids[47] = 4052


//  Id pregunta: 3255 Año de creación de pregunta: 2003
 questions[48]= "49)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[48]= new Array();
 choices[48][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[48][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[48][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[48][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[48] = 1;
 units[48] = ['86'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3255. Junta Andaluc&iacute;a";
 preguntaids[48] = 3255


//  Id pregunta: 3286 Año de creación de pregunta: 2003
 questions[49]= "50)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[49]= new Array();
 choices[49][0] = "Sistemas de ayuda de KDE.";
 choices[49][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[49][2] = "Entorno de escritorio.";
 choices[49][3] = "Administradores de ventanas en LINUX.";
 answers[49] = 3;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3286. Junta Andaluc&iacute;a";
 preguntaids[49] = 3286


//  Id pregunta: 3227 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[50]= new Array();
 choices[50][0] = "La clave p&uacute;blica del titular.";
 choices[50][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[50][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[50][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[50] = 2;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3227. Junta Andaluc&iacute;a";
 preguntaids[50] = 3227


//  Id pregunta: 3266 Año de creación de pregunta: 2003
 questions[51]= "52)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[51]= new Array();
 choices[51][0] = "PL/SQL.";
 choices[51][1] = "JSQL.";
 choices[51][2] = "SQL embebido.";
 choices[51][3] = "SQL anfitri&oacute;n.";
 answers[51] = 2;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3266. Junta Andaluc&iacute;a";
 preguntaids[51] = 3266


//  Id pregunta: 3586 Año de creación de pregunta: 2004
 questions[52]= "53)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[52]= new Array();
 choices[52][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[52][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[52][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[52][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[52] = 0;
 units[52] = ['84', '86'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3586. Pregunta Junta Andalucia - A";
 preguntaids[52] = 3586


//  Id pregunta: 5105 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[53]= new Array();
 choices[53][0] = "http, https.";
 choices[53][1] = "smtp, pop-3, mime.";
 choices[53][2] = "xml, xsl, xjar.";
 choices[53][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[53] = 2;
 units[53] = ['116'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5105. Junta Andaluc&iacute;a";
 preguntaids[53] = 5105


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[54]= "55)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[54]= new Array();
 choices[54][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[54][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[54][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[54][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[54] = 0;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[54] = 3631


//  Id pregunta: 4017 Año de creación de pregunta: 2004
 questions[55]= "56)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[55]= new Array();
 choices[55][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[55][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[55][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[55][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[55] = 0;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 4017. Pregunta Junta Andalucia - A";
 preguntaids[55] = 4017


//  Id pregunta: 5094 Año de creación de pregunta: 2003
 questions[56]= "57)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[56]= new Array();
 choices[56][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[56][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[56][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[56][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[56] = 2;
 units[56] = ['107'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5094. Junta Andaluc&iacute;a";
 preguntaids[56] = 5094


//  Id pregunta: 3246 Año de creación de pregunta: 2003
 questions[57]= "58)  En el contexto de las estructuras din&aacute;micas de datos, una cola es:";
 choices[57]= new Array();
 choices[57][0] = "Un tipo de dato que contiene la direcci&oacute;n en memoria de un nodo.";
 choices[57][1] = "Una lista LIFO (Last In First Out).";
 choices[57][2] = "Una estructura de datos no lineal donde la inserci&oacute;n siempre es por el extremo inferior.";
 choices[57][3] = "Una secuencia de elementos en el que las operaciones de inserci&oacute;n y borrado se realiza sobre extremos opuestos de la secuencia.";
 answers[57] = 3;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3246. Junta Andaluc&iacute;a";
 preguntaids[57] = 3246


//  Id pregunta: 3224 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[58]= new Array();
 choices[58][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[58][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[58][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[58][3] = "Bloque temporizador.";
 answers[58] = 3;
 units[58] = ['52'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3224. Junta Andaluc&iacute;a";
 preguntaids[58] = 3224


//  Id pregunta: 3249 Año de creación de pregunta: 2003
 questions[59]= "60)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Superclave.";
 choices[59][1] = "Clave principal.";
 choices[59][2] = "Tupla m&uacute;ltiple.";
 choices[59][3] = "Clave ajena.";
 answers[59] = 3;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3249. Junta Andaluc&iacute;a";
 preguntaids[59] = 3249


//  Id pregunta: 3274 Año de creación de pregunta: 2003
 questions[60]= "61)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[60]= new Array();
 choices[60][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[60][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[60][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[60][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[60] = 1;
 units[60] = ['76'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3274. Junta Andaluc&iacute;a";
 preguntaids[60] = 3274


//  Id pregunta: 4043 Año de creación de pregunta: 2003
 questions[61]= "62)  En el contexto de los sistemas gestores de bases de datos documentales (SGBDD), la funcionalidad que permite que determinadas palabras u objetos redirijan a otros textos relacionados o con informaci&oacute;n ampliada, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Tesauro.";
 choices[61][1] = "Hipertexto.";
 choices[61][2] = "Referencia cruzada.";
 choices[61][3] = "Atributo.";
 answers[61] = 1;
 units[61] = ['99'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4043. Junta Andaluc&iacute;a";
 preguntaids[61] = 4043


//  Id pregunta: 3282 Año de creación de pregunta: 2003
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[62]= new Array();
 choices[62][0] = "Mas del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios.";
 choices[62][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos informaticos.";
 choices[62][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electr&oacute;nica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[62][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficacia para proyectos no triviales.";
 answers[62] = 2;
 units[62] = ['40'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 3282. Junta Andaluc&iacute;a";
 preguntaids[62] = 3282


//  Id pregunta: 5115 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Qu&eacute; es Javascript7:";
 choices[63]= new Array();
 choices[63][0] = "Un compilador de Java.";
 choices[63][1] = "Un generador de applets Java";
 choices[63][2] = "Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[63][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[63] = 3;
 units[63] = ['62'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 5115. Junta Andaluc&iacute;a";
 preguntaids[63] = 5115


//  Id pregunta: 3607 Año de creación de pregunta: 2004
 questions[64]= "65)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[64]= new Array();
 choices[64][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[64][1] = "Registro de cambios";
 choices[64][2] = "Registro de petici&oacute;n";
 choices[64][3] = "Cat&aacute;logo de peticiones";
 answers[64] = 2;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3607. Pregunta Junta Andalucia - A";
 preguntaids[64] = 3607


//  Id pregunta: 3186 Año de creación de pregunta: 2003
 questions[65]= "66)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[65]= new Array();
 choices[65][0] = "&Iacute;ndice no &uacute;nico.";
 choices[65][1] = "Vista.";
 choices[65][2] = "Database link.";
 choices[65][3] = "Clustered Cable.";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3186. Junta Andaluc&iacute;a";
 preguntaids[65] = 3186


//  Id pregunta: 3589 Año de creación de pregunta: 2004
 questions[66]= "67)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[66][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[66][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[66][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[66] = 2;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3589. Pregunta Junta Andalucia - A";
 preguntaids[66] = 3589


//  Id pregunta: 4027 Año de creación de pregunta: 2004
 questions[67]= "68)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[67]= new Array();
 choices[67][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[67][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[67][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[67][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[67] = 3;
 units[67] = ['92', '93', '98'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4027. Pregunta Junta Andalucia - A";
 preguntaids[67] = 4027


//  Id pregunta: 4041 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Qu&eacute; es el Modelo CMM (modelo de madurez de la capacidad de proceso de software)?:";
 choices[68]= new Array();
 choices[68][0] = "Metodolog&iacute;a de dise&ntilde;o de componentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[68][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[68][2] = "Modelo organizativo para el dise&ntilde;o software de macroensambladores cruzados.";
 choices[68][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[68] = 3;
 units[68] = ['92'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 4041. Junta Andaluc&iacute;a";
 preguntaids[68] = 4041


//  Id pregunta: 3256 Año de creación de pregunta: 2003
 questions[69]= "70)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[69]= new Array();
 choices[69][0] = "Vectorial.";
 choices[69][1] = "Shape.";
 choices[69][2] = "Mapa de bits.";
 choices[69][3] = "R&aacute;ster.";
 answers[69] = 3;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3256. Junta Andaluc&iacute;a";
 preguntaids[69] = 3256


//  Id pregunta: 3214 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[70]= new Array();
 choices[70][0] = "PowerPC.";
 choices[70][1] = "Alpha.";
 choices[70][2] = "Ultrasparc.";
 choices[70][3] = "Itanium.";
 answers[70] = 3;
 units[70] = ['52'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3214. Junta Andaluc&iacute;a";
 preguntaids[70] = 3214


//  Id pregunta: 3583 Año de creación de pregunta: 2004
 questions[71]= "72)  En un modelo de datos jer&aacute;rquico";
 choices[71]= new Array();
 choices[71][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[71][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[71][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[71][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[71] = 1;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3583. Pregunta Junta Andalucia - A";
 preguntaids[71] = 3583


//  Id pregunta: 3238 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Qu&eacute; es JDBC?:";
 choices[72]= new Array();
 choices[72][0] = "Un modelo de objetos ActiveX.";
 choices[72][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[72][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[72][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[72] = 3;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3238. Junta Andaluc&iacute;a";
 preguntaids[72] = 3238


//  Id pregunta: 3591 Año de creación de pregunta: 2004
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?";
 choices[73]= new Array();
 choices[73][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[73][1] = "Diagrama de Despliegue";
 choices[73][2] = "Diagrama de Flujo de Datos (DFD)";
 choices[73][3] = "Diagrama de Interacci&oacute;n";
 answers[73] = 2;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3591. Pregunta Junta Andalucia - A";
 preguntaids[73] = 3591


//  Id pregunta: 3234 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[74]= new Array();
 choices[74][0] = "63";
 choices[74][1] = "127";
 choices[74][2] = "256";
 choices[74][3] = "1024";
 answers[74] = 1;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3234. Similar Junta Andaluc&iacute;a";
 preguntaids[74] = 3234


