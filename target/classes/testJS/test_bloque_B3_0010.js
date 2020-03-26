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
//  Id pregunta: 3928 Año de creación de pregunta: 2002
 questions[0]= "1)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[0]= new Array();
 choices[0][0] = "Dise&ntilde;o de prototipos";
 choices[0][1] = "Tests finales";
 choices[0][2] = "An&aacute;lisis de requerimientos";
 choices[0][3] = "Ninguno de ellos";
 answers[0] = 2;
 units[0] = ['85', '86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3928. ";
 preguntaids[0] = 3928


//  Id pregunta: 3950 Año de creación de pregunta: 2002
 questions[1]= "2)  Respecto a la construcci&oacute;n de un prototipo podemos decir:";
 choices[1]= new Array();
 choices[1][0] = "Es el proceso que facilita al programador la creaci&oacute;n del modelo de software a construir";
 choices[1][1] = "Puede adoptar la forma de un 'prototipo que funcione' que describa la interacci&oacute;n hombre-m&aacute;quina, de forma que facilite al usuario la comprensi&oacute;n de c&oacute;mo funcionar&aacute; tal trabajo";
 choices[1][2] = "Puede adoptar la forma de 'un prototipo que funcione' que implementa algunos subconjuntos de la funcionalidad requerida al software deseado";
 choices[1][3] = "Todas las respuestas anteriores son ciertas";
 answers[1] = 3;
 units[1] = ['90'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3950. ";
 preguntaids[1] = 3950


//  Id pregunta: 3963 Año de creación de pregunta: 2002
 questions[2]= "3)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[2]= new Array();
 choices[2][0] = "Agregaci&oacute;n.";
 choices[2][1] = "Coherencia.";
 choices[2][2] = "Herencia.";
 choices[2][3] = "Dependencia.";
 answers[2] = 1;
 units[2] = ['85', '89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3963. ";
 preguntaids[2] = 3963


//  Id pregunta: 3960 Año de creación de pregunta: 2002
 questions[3]= "4)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[3]= new Array();
 choices[3][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[3][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[3][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[3][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[3] = 0;
 units[3] = ['93'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3960. ";
 preguntaids[3] = 3960


//  Id pregunta: 3968 Año de creación de pregunta: 2002
 questions[4]= "5)  Sobre la cardinalidad de un tipo entidad podemos decir:";
 choices[4]= new Array();
 choices[4][0] = "Es el n&uacute;mero de ocurrencias de un tipo de entidad que se pueden interrelacionar con cada ocurrencia de los otros tipos de entidad en un determinado tipo de interrelaci&oacute;n";
 choices[4][1] = "Se habla de una cardinalidad m&aacute;xima y m&iacute;nima";
 choices[4][2] = "En las interrelaciones binarias el tipo de correspondencia se deduce directamente a partir de los tipos de entidad involucrada";
 choices[4][3] = "Todas las respuestas anteriores son ciertas";
 answers[4] = 3;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3968. ";
 preguntaids[4] = 3968


//  Id pregunta: 3979 Año de creación de pregunta: 2002
 questions[5]= "6)  Uno de los efectos de la falta de calidad en el desarrollo de software es la insatisfacci&oacute;n de los usuarios. &iquest;Cu&aacute;l es una de las principales causas de esta insatisfacci&oacute;n?:";
 choices[5]= new Array();
 choices[5][0] = "El dimensionamiento del hardware";
 choices[5][1] = "Las necesidades funcionales solicitadas y no contempladas por el software para &eacute;l desarrollado";
 choices[5][2] = "Las dificultades de adaptaci&oacute;n al nuevo trabajo";
 choices[5][3] = "Los usuarios no suelen estar insatisfechos nunca";
 answers[5] = 1;
 units[5] = ['98'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3979. ";
 preguntaids[5] = 3979


//  Id pregunta: 3921 Año de creación de pregunta: 2002
 questions[6]= "7)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[6]= new Array();
 choices[6][0] = "Manuales de procedimientos";
 choices[6][1] = "Manuales de usuarios";
 choices[6][2] = "Manuales de explotaci&oacute;n";
 choices[6][3] = "Manuales de contingencias";
 answers[6] = 2;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3921. ";
 preguntaids[6] = 3921


//  Id pregunta: 3910 Año de creación de pregunta: 2002
 questions[7]= "8)  La t&eacute;cnica conocida como Diagrama de Flujo de Datos, se utiliza:";
 choices[7]= new Array();
 choices[7][0] = "Para modelizaci&oacute;n de funciones";
 choices[7][1] = "S&oacute;lo para modelizaci&oacute;n de sistemas en tiempo real";
 choices[7][2] = "Para modelizaci&oacute;n de datos";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = 3;
 units[7] = ['85', '86'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3910. ";
 preguntaids[7] = 3910


//  Id pregunta: 3941 Año de creación de pregunta: 2002
 questions[8]= "9)  No es un tipo de prueba:";
 choices[8]= new Array();
 choices[8][0] = "Pruebas individuales";
 choices[8][1] = "Pruebas unitarias";
 choices[8][2] = "Pruebas de Aceptaci&oacute;n";
 choices[8][3] = "Pruebas de Regresi&oacute;n";
 answers[8] = 0;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3941. ";
 preguntaids[8] = 3941


//  Id pregunta: 3911 Año de creación de pregunta: 2002
 questions[9]= "10)  La t&eacute;cnica Halstead usa:";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de operandos distintos de un programa";
 choices[9][1] = "La longitud de un programa";
 choices[9][2] = "El tiempo de ejecuci&oacute;n &oacute;ptimo";
 choices[9][3] = "No existe";
 answers[9] = 0;
 units[9] = ['93'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3911. ";
 preguntaids[9] = 3911


//  Id pregunta: 3967 Año de creación de pregunta: 2002
 questions[10]= "11)  Si se usa la t&eacute;cnica McCabe se puede valorar:";
 choices[10]= new Array();
 choices[10][0] = "Las aristas de un grafo";
 choices[10][1] = "El n&uacute;mero de regiones cerradas de un grafo";
 choices[10][2] = "Los nodos desconectados de un grafo";
 choices[10][3] = "No tiene ninguna relaci&oacute;n con grafos";
 answers[10] = 1;
 units[10] = ['93'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3967. ";
 preguntaids[10] = 3967


//  Id pregunta: 3920 Año de creación de pregunta: 2002
 questions[11]= "12)  Las relaciones denominadas maestro-detalle, corresponden a:";
 choices[11]= new Array();
 choices[11][0] = "Relaciones con cardinalidad n:m";
 choices[11][1] = "Relaciones con cardinalidad 1:1";
 choices[11][2] = "Relaciones unarias";
 choices[11][3] = "Relaciones con cardinalidad 1:n";
 answers[11] = 3;
 units[11] = ['85'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3920. ";
 preguntaids[11] = 3920


//  Id pregunta: 3917 Año de creación de pregunta: 2002
 questions[12]= "13)  Las herramientas que incluyen componentes para la gesti&oacute;n de proyectos y la gesti&oacute;n de configuraci&oacute;n son las:";
 choices[12]= new Array();
 choices[12][0] = "L-CASE (Lower CASE)";
 choices[12][1] = "I-CASE (Integrated CASE)";
 choices[12][2] = "IPSE (Integrated Project Support Environment)";
 choices[12][3] = "CAST (Computer Aided Software Testing)";
 answers[12] = 2;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3917. ";
 preguntaids[12] = 3917


//  Id pregunta: 3940 Año de creación de pregunta: 2002
 questions[13]= "14)  No es un tipo de cohesi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Logica.";
 choices[13][1] = "Temporal.";
 choices[13][2] = "Funcional.";
 choices[13][3] = "Por estampado.";
 answers[13] = 3;
 units[13] = ['89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3940. ";
 preguntaids[13] = 3940


//  Id pregunta: 3964 Año de creación de pregunta: 2002
 questions[14]= "15)  Se&ntilde;ale de las siguientes respuestas la que es una funci&oacute;n propia del responsable de producci&oacute;n y sistemas:";
 choices[14]= new Array();
 choices[14][0] = "Establecer los planes de pruebas de cada aplicaci&oacute;n";
 choices[14][1] = "Definir una metodolog&iacute;a para el desarrollo de aplicaciones";
 choices[14][2] = "Planificar y evaluar el crecimiento del almacenamiento de datos";
 choices[14][3] = "Establecer los procedimientos para la gesti&oacute;n de la organizaci&oacute;n";
 answers[14] = 2;
 units[14] = ['100'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3964. ";
 preguntaids[14] = 3964


//  Id pregunta: 3929 Año de creación de pregunta: 2002
 questions[15]= "16)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[15]= new Array();
 choices[15][0] = "Atributos, relaciones y entidades";
 choices[15][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[15][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[15][3] = "Niveles, diagramas y objetos";
 answers[15] = 1;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3929. ";
 preguntaids[15] = 3929


//  Id pregunta: 3931 Año de creación de pregunta: 2002
 questions[16]= "17)  Los inconvenientes del modelo en espiral son&hellip;:";
 choices[16]= new Array();
 choices[16][0] = "Dependencia de la experiencia del personal";
 choices[16][1] = "No es tan estandar como METRICA";
 choices[16][2] = "No es adecuado para la orientaci&oacute;n a objetos";
 choices[16][3] = "Todas las anteriores son ciertas";
 answers[16] = 0;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3931. ";
 preguntaids[16] = 3931


//  Id pregunta: 3907 Año de creación de pregunta: 2002
 questions[17]= "18)  La propuesta del ciclo de vida en espiral se ha realizado para superar determinados problemas del modelo en cascada. Entre estos:";
 choices[17]= new Array();
 choices[17][0] = "Identificar factores de riesgo y resolverlos antes de implementar fases m&aacute;s conocidas";
 choices[17][1] = "Utilizar prototipos desechables antes de comenzar un desarrollo en cascada";
 choices[17][2] = "Supone la repetici&oacute;n cada vez con mayor nivel de detalle del modelo en cascada";
 choices[17][3] = "Es un modelo en cascada completo de prototipado r&aacute;pido para la fase de an&aacute;lisis y especificaci&oacute;n de requisitos";
 answers[17] = 0;
 units[17] = ['82'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3907. ";
 preguntaids[17] = 3907


//  Id pregunta: 3969 Año de creación de pregunta: 2002
 questions[18]= "19)  UML se corresponde con:";
 choices[18]= new Array();
 choices[18][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[18][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[18][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[18][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[18] = 2;
 units[18] = ['85', '89'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3969. ";
 preguntaids[18] = 3969


//  Id pregunta: 3949 Año de creación de pregunta: 2002
 questions[19]= "20)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[19]= new Array();
 choices[19][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[19][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[19][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[19][3] = "Los criterios para calificar al software";
 answers[19] = 1;
 units[19] = ['93'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3949. ";
 preguntaids[19] = 3949


//  Id pregunta: 3939 Año de creación de pregunta: 2002
 questions[20]= "21)  No es un tipo de acoplamiento:";
 choices[20]= new Array();
 choices[20][0] = "Externo.";
 choices[20][1] = "Por contenido.";
 choices[20][2] = "Temporal.";
 choices[20][3] = "Por estampado.";
 answers[20] = 2;
 units[20] = ['89'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3939. ";
 preguntaids[20] = 3939


//  Id pregunta: 3951 Año de creación de pregunta: 2002
 questions[21]= "22)  Respecto a la evaluaci&oacute;n realizada por COCOMO, &iquest;cu&aacute;l es la afirmaci&oacute;n falsa?:";
 choices[21]= new Array();
 choices[21][0] = "Se incluye s&oacute;lamente la parte de construcci&oacute;n del sistema y de integraci&oacute;n y pruebas";
 choices[21][1] = "No incluye la parte de formaci&oacute;n de los usuarios";
 choices[21][2] = "No incluye las conversiones";
 choices[21][3] = "No incluye los esfuerzos de planificaci&oacute;n de la instalaci&oacute;n";
 answers[21] = 0;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3951. ";
 preguntaids[21] = 3951


//  Id pregunta: 3975 Año de creación de pregunta: 2002
 questions[22]= "23)  Un sistema de an&aacute;lisis de sistema en tiempo real puede ser:";
 choices[22]= new Array();
 choices[22][0] = "DOLMEN.";
 choices[22][1] = "DESIGN RT.";
 choices[22][2] = "RT-XML.";
 choices[22][3] = "DARTS.";
 answers[22] = 3;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3975. ";
 preguntaids[22] = 3975


//  Id pregunta: 3938 Año de creación de pregunta: 2002
 questions[23]= "24)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[23]= new Array();
 choices[23][0] = "Resultados en la Sociedad";
 choices[23][1] = "Resultados en las Personas";
 choices[23][2] = "Resultados en los Clientes";
 choices[23][3] = "El manual de calidad de la empresa";
 answers[23] = 3;
 units[23] = ['98'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3938. ";
 preguntaids[23] = 3938


//  Id pregunta: 3918 Año de creación de pregunta: 2002
 questions[24]= "25)  Las metodolog&iacute;as:";
 choices[24]= new Array();
 choices[24][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[24][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[24][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[24][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[24] = 3;
 units[24] = ['84'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3918. ";
 preguntaids[24] = 3918


//  Id pregunta: 3924 Año de creación de pregunta: 2002
 questions[25]= "26)  Los almacenes de datos de un DFD:";
 choices[25]= new Array();
 choices[25][0] = "Representan datos en movimiento";
 choices[25][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[25][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[25][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[25] = 3;
 units[25] = ['85', '86'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3924. ";
 preguntaids[25] = 3924


//  Id pregunta: 3965 Año de creación de pregunta: 2002
 questions[26]= "27)  Se&ntilde;ale el tipo de prueba que es de caja negra:";
 choices[26]= new Array();
 choices[26][0] = "Prueba de bucles";
 choices[26][1] = "Prueba basada en grafos";
 choices[26][2] = "Prueba del camino b&aacute;sico";
 choices[26][3] = "Prueba de condici&oacute;n";
 answers[26] = 1;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3965. ";
 preguntaids[26] = 3965


//  Id pregunta: 3930 Año de creación de pregunta: 2002
 questions[27]= "28)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[27]= new Array();
 choices[27][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[27][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[27][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[27][3] = "Todos los anteriores";
 answers[27] = 3;
 units[27] = ['92', '93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3930. ";
 preguntaids[27] = 3930


//  Id pregunta: 3905 Año de creación de pregunta: 2002
 questions[28]= "29)  La planificaci&oacute;n de un proyecto inform&aacute;tico debe permitir responder a las preguntas:";
 choices[28]= new Array();
 choices[28][0] = "&iquest;Qu&eacute; tareas hay que realizar, qui&eacute;n debe realizarlas, cu&aacute;ndo se deben realizar?";
 choices[28][1] = "&iquest;Qui&eacute;nes son los miembros del proyecto, cu&aacute;l es su jerarqu&iacute;a, a qu&eacute; unidades pertenecen?";
 choices[28][2] = "&iquest;Qui&eacute;n es el responsable del proyecto, cu&aacute;ntas personas van a participar, cu&aacute;l es su formaci&oacute;n?";
 choices[28][3] = "&iquest;Qui&eacute;nes son los proveedores, cu&aacute;l es su experiencia, de cu&aacute;ntos empleados disponen?";
 answers[28] = 0;
 units[28] = ['83'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3905. ";
 preguntaids[28] = 3905


//  Id pregunta: 3926 Año de creación de pregunta: 2002
 questions[29]= "30)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[29]= new Array();
 choices[29][0] = "Modularidad, Independencia de los entornos";
 choices[29][1] = "Coherencia, concisi&oacute;n";
 choices[29][2] = "Trazabilidad, integridad, coherencia";
 choices[29][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[29] = 2;
 units[29] = ['93'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3926. ";
 preguntaids[29] = 3926


//  Id pregunta: 3937 Año de creación de pregunta: 2002
 questions[30]= "31)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[30]= new Array();
 choices[30][0] = "Liderazgo";
 choices[30][1] = "Personas";
 choices[30][2] = "Estrategia";
 choices[30][3] = "Satisfacci&oacute;n del cliente";
 answers[30] = 3;
 units[30] = ['98'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3937. ";
 preguntaids[30] = 3937


//  Id pregunta: 3922 Año de creación de pregunta: 2002
 questions[31]= "32)  Las series ISO-9000, desde el punto de vista de su &aacute;mbito, podr&iacute;an calificarse como:";
 choices[31]= new Array();
 choices[31][0] = "Certificaci&oacute;n de producto";
 choices[31][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[31][2] = "Total Quality Management";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = 1;
 units[31] = ['92'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3922. ";
 preguntaids[31] = 3922


//  Id pregunta: 3962 Año de creación de pregunta: 2002
 questions[32]= "33)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[32]= new Array();
 choices[32][0] = "Caso de uso.";
 choices[32][1] = "Carpetas.";
 choices[32][2] = "Actor.";
 choices[32][3] = "Relaci&oacute;n.";
 answers[32] = 1;
 units[32] = ['85', '89'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3962. ";
 preguntaids[32] = 3962


//  Id pregunta: 3925 Año de creación de pregunta: 2002
 questions[33]= "34)  Los almacenes de datos, en un DFD:";
 choices[33]= new Array();
 choices[33][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[33][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro";
 choices[33][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[33][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[33] = 1;
 units[33] = ['85', '86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3925. ";
 preguntaids[33] = 3925


//  Id pregunta: 3982 Año de creación de pregunta: 2002
 questions[34]= "35)  Utilizando la funcionalidad como criterio principal, las herramientas CASE pueden agruparse en Herramientas de planificaci&oacute;n de sistemas, Herramientas de an&aacute;lisis y dise&ntilde;o, Herramientas de programaci&oacute;n, Herramientas de integraci&oacute;n y prueba, y Herramientas de:";
 choices[34]= new Array();
 choices[34][0] = "Mantenimiento";
 choices[34][1] = "Gesti&oacute;n de prototipos";
 choices[34][2] = "Reintegraci&oacute;n";
 choices[34][3] = "Programaci&oacute;n";
 answers[34] = 0;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3982. ";
 preguntaids[34] = 3982


//  Id pregunta: 3952 Año de creación de pregunta: 2002
 questions[35]= "36)  Respecto a los procesos, en un DFD:";
 choices[35]= new Array();
 choices[35][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[35][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[35][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[35][3] = "Las opciones a) y b) son correctas";
 answers[35] = 3;
 units[35] = ['85', '86'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3952. ";
 preguntaids[35] = 3952


//  Id pregunta: 3914 Año de creación de pregunta: 2002
 questions[36]= "37)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[36]= new Array();
 choices[36][0] = "Planificaci&oacute;n del proyecto";
 choices[36][1] = "An&aacute;lisis de viabilidad";
 choices[36][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[36][3] = "Seguimiento del proyecto";
 answers[36] = 1;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3914. ";
 preguntaids[36] = 3914


//  Id pregunta: 3934 Año de creación de pregunta: 2002
 questions[37]= "38)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[37]= new Array();
 choices[37][0] = "Iteraci&oacute;n";
 choices[37][1] = "Selecci&oacute;n";
 choices[37][2] = "Composici&oacute;n";
 choices[37][3] = "Opcionalidad";
 answers[37] = 3;
 units[37] = ['85', '86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3934. ";
 preguntaids[37] = 3934


//  Id pregunta: 3935 Año de creación de pregunta: 2002
 questions[38]= "39)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[38]= new Array();
 choices[38][0] = "Fiabilidad";
 choices[38][1] = "Reusabilidad";
 choices[38][2] = "Flexibilidad";
 choices[38][3] = "Facilidad de prueba";
 answers[38] = 2;
 units[38] = ['92', '93'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3935. ";
 preguntaids[38] = 3935


//  Id pregunta: 3915 Año de creación de pregunta: 2002
 questions[39]= "40)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[39]= new Array();
 choices[39][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[39][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[39][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto";
 choices[39][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[39] = 1;
 units[39] = ['85', '86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3915. ";
 preguntaids[39] = 3915


//  Id pregunta: 3976 Año de creación de pregunta: 2002
 questions[40]= "41)  Una caracter&iacute;stica de los sistemas en tiempo real es:";
 choices[40]= new Array();
 choices[40][0] = "Gesti&oacute;n de memoria virtual eficiente.";
 choices[40][1] = "Inexistencia de mecanismos de exclusi&oacute;n mutua que retrasen el flujo en &quot;real time&quot;.";
 choices[40][2] = "Sem&aacute;foros para dirigir los procesos.";
 choices[40][3] = "Gesti&oacute;n de los accesos a disco exclusivamente mediante interrupciones.";
 answers[40] = 2;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3976. ";
 preguntaids[40] = 3976


//  Id pregunta: 3981 Año de creación de pregunta: 2002
 questions[41]= "42)  Uno de los siguientes no es un problema de la fase de an&aacute;lisis de requisitos:";
 choices[41]= new Array();
 choices[41][0] = "El usuario posee el conocimiento de forma desorganizada";
 choices[41][1] = "Manejo de la complejidad del problema";
 choices[41][2] = "La adquisici&oacute;n de la informaci&oacute;n pertinente";
 choices[41][3] = "Acomodar los cambios que puedan ocurrir durante o despu&eacute;s del an&aacute;lisis";
 answers[41] = 0;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3981. ";
 preguntaids[41] = 3981


//  Id pregunta: 3974 Año de creación de pregunta: 2002
 questions[42]= "43)  Un proceso en un DFD&hellip;:";
 choices[42]= new Array();
 choices[42][0] = "Puede descomponerse en otros procesos";
 choices[42][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[42][2] = "Puede estar aislado";
 choices[42][3] = "Puede equivaler a una entidad externa";
 answers[42] = 0;
 units[42] = ['85', '86'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3974. ";
 preguntaids[42] = 3974


//  Id pregunta: 3909 Año de creación de pregunta: 2002
 questions[43]= "44)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[43]= new Array();
 choices[43][0] = "Ingenier&iacute;a inversa";
 choices[43][1] = "Reestructuraci&oacute;n";
 choices[43][2] = "Reingenier&iacute;a";
 choices[43][3] = "Ingenier&iacute;a hacia delante";
 answers[43] = 1;
 units[43] = ['97'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3909. ";
 preguntaids[43] = 3909


//  Id pregunta: 3913 Año de creación de pregunta: 2002
 questions[44]= "45)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[44]= new Array();
 choices[44][0] = "La localizaci&oacute;n de objetos.";
 choices[44][1] = "La direcci&oacute;n de reuniones.";
 choices[44][2] = "La negociaci&oacute;n.";
 choices[44][3] = "Los diagramas generales de un sistema.";
 answers[44] = 0;
 units[44] = ['85', '89'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3913. ";
 preguntaids[44] = 3913


//  Id pregunta: 3923 Año de creación de pregunta: 2002
 questions[45]= "46)  Las ventajas del modelo en espiral son&hellip;:";
 choices[45]= new Array();
 choices[45][0] = "Potencia la reutilizaci&oacute;n del software existente.";
 choices[45][1] = "No tiene dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[45][2] = "Es muy interesante tanto para el software contratado como para el propio";
 choices[45][3] = "No acaba nunca";
 answers[45] = 0;
 units[45] = ['82'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3923. ";
 preguntaids[45] = 3923


//  Id pregunta: 3971 Año de creación de pregunta: 2002
 questions[46]= "47)  Un almac&eacute;n de datos en un DFD&hellip;:";
 choices[46]= new Array();
 choices[46][0] = "No tiene por qu&eacute; equivaler a una tabla";
 choices[46][1] = "Representa una base de datos";
 choices[46][2] = "Es un objeto de tipo dato";
 choices[46][3] = "Se usa tanto como repositorio como en la recogida de basura";
 answers[46] = 0;
 units[46] = ['85', '86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3971. ";
 preguntaids[46] = 3971


//  Id pregunta: 3959 Año de creación de pregunta: 2002
 questions[47]= "48)  Se&ntilde;alar cual es la informaci&oacute;n correcta respecto a las pruebas:";
 choices[47]= new Array();
 choices[47][0] = "Los casos de prueba bien elegidos son los que tienen gran probabilidad de demostrar que el software funciona bien";
 choices[47][1] = "Las pruebas no tienen que documentarse porque jam&aacute;s tienen que repetirse o revisarse";
 choices[47][2] = "Debe contemplar &uacute;nicamente casos imprevistos o entradas no v&aacute;lidas";
 choices[47][3] = "Ninguna de las anteriores respuetas es correcta";
 answers[47] = 3;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3959. ";
 preguntaids[47] = 3959


//  Id pregunta: 3932 Año de creación de pregunta: 2002
 questions[48]= "49)  Los modelos de ciclo de vida que incluyen prototipos software desechables, se realizan por la necesidad de ...";
 choices[48]= new Array();
 choices[48][0] = "Acortar el tiempo de implementaci&oacute;n facilitando la reutilizaci&oacute;n de software";
 choices[48][1] = "Mejorar la comprensi&oacute;n de los requisitos del sistema a dise&ntilde;ar";
 choices[48][2] = "Facilitar el mantenimiento del sistema";
 choices[48][3] = "La utilizaci&oacute;n de sistemas CASE que facilitan el desarrollo del prototipo";
 answers[48] = 1;
 units[48] = ['82'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3932. ";
 preguntaids[48] = 3932


//  Id pregunta: 3956 Año de creación de pregunta: 2002
 questions[49]= "50)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[49]= new Array();
 choices[49][0] = "Obligatoria en A y opcional en B";
 choices[49][1] = "Obligatoria en B y opcional en A";
 choices[49][2] = "Obligatoria en ambos extremos";
 choices[49][3] = "Opcional en ambos extremos";
 answers[49] = 1;
 units[49] = ['85'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3956. ";
 preguntaids[49] = 3956


//  Id pregunta: 3944 Año de creación de pregunta: 2002
 questions[50]= "51)  Para el an&aacute;lisis de sistemas en tiempo real no se usan:";
 choices[50]= new Array();
 choices[50][0] = "Modelos matem&aacute;ticos.";
 choices[50][1] = "Diagramas de bloques.";
 choices[50][2] = "Redes de Petri.";
 choices[50][3] = "Dominios distribuidos de Halm.";
 answers[50] = 3;
 units[50] = ['96'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3944. ";
 preguntaids[50] = 3944


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[51]= "52)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[51]= new Array();
 choices[51][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[51][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[51][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[51][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[51] = 1;
 units[51] = ['85', '89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3908. ";
 preguntaids[51] = 3908


//  Id pregunta: 3916 Año de creación de pregunta: 2002
 questions[52]= "53)  Las herramientas CASE se emplean con objeto de:";
 choices[52]= new Array();
 choices[52][0] = "Aumentar la productividad";
 choices[52][1] = "Controlar riesgos";
 choices[52][2] = "Asegurar la calidad";
 choices[52][3] = "Reutilizar c&oacute;digo";
 answers[52] = 0;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3916. ";
 preguntaids[52] = 3916


//  Id pregunta: 3933 Año de creación de pregunta: 2002
 questions[53]= "54)  En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[53]= new Array();
 choices[53][0] = "Herencia";
 choices[53][1] = "Encapsulaci&oacute;n";
 choices[53][2] = "Abstracci&oacute;n";
 choices[53][3] = "Polimorfismo";
 answers[53] = 3;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3933. ";
 preguntaids[53] = 3933


//  Id pregunta: 3980 Año de creación de pregunta: 2002
 questions[54]= "55)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[54]= new Array();
 choices[54][0] = "Tarjetas CRC";
 choices[54][1] = "An&aacute;lisis l&eacute;xico";
 choices[54][2] = "Contraste de modelos";
 choices[54][3] = "Todas las anteriores son ciertas";
 answers[54] = 3;
 units[54] = ['85'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3980. ";
 preguntaids[54] = 3980


//  Id pregunta: 3919 Año de creación de pregunta: 2002
 questions[55]= "56)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[55]= new Array();
 choices[55][0] = "M&eacute;tricas de productividad";
 choices[55][1] = "M&eacute;tricas de los factores de calidad";
 choices[55][2] = "M&eacute;tricas de complejidad";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = 1;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3919. ";
 preguntaids[55] = 3919


//  Id pregunta: 3948 Año de creación de pregunta: 2002
 questions[56]= "57)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[56]= new Array();
 choices[56][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[56][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[56][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[56][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[56] = 2;
 units[56] = ['92'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3948. ";
 preguntaids[56] = 3948


//  Id pregunta: 3942 Año de creación de pregunta: 2002
 questions[57]= "58)  No es una de las formas de aplicar COCOMO:";
 choices[57]= new Array();
 choices[57][0] = "B&aacute;sico";
 choices[57][1] = "Avanzado";
 choices[57][2] = "Intermedio";
 choices[57][3] = "Asistido";
 answers[57] = 3;
 units[57] = ['94'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3942. ";
 preguntaids[57] = 3942


//  Id pregunta: 3977 Año de creación de pregunta: 2002
 questions[58]= "59)  Una entidad externa en un DFD:";
 choices[58]= new Array();
 choices[58][0] = "No debe figurar en el DFD";
 choices[58][1] = "No se tiene en consideraci&oacute;n";
 choices[58][2] = "Interactua con el sistema";
 choices[58][3] = "Se relaciona con otras entidades externas";
 answers[58] = 2;
 units[58] = ['85', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3977. ";
 preguntaids[58] = 3977


//  Id pregunta: 3957 Año de creación de pregunta: 2002
 questions[59]= "60)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos si no han sido detectados una vez finalizado el proyecto?:";
 choices[59]= new Array();
 choices[59][0] = "Especificaci&oacute;n";
 choices[59][1] = "Dise&ntilde;o";
 choices[59][2] = "Codificaci&oacute;n";
 choices[59][3] = "Otros";
 answers[59] = 0;
 units[59] = ['92'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3957. ";
 preguntaids[59] = 3957


//  Id pregunta: 3973 Año de creación de pregunta: 2002
 questions[60]= "61)  Un m&eacute;todo orientado a los procesos es:";
 choices[60]= new Array();
 choices[60][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[60][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[60][2] = "An&aacute;lisis de flujo de datos";
 choices[60][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[60] = 2;
 units[60] = ['85', '86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3973. ";
 preguntaids[60] = 3973


//  Id pregunta: 3958 Año de creación de pregunta: 2002
 questions[61]= "62)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[61]= new Array();
 choices[61][0] = "El dominio de la informaci&oacute;n";
 choices[61][1] = "La subdivisi&oacute;n del problema";
 choices[61][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[61][3] = "Los tres anteriores";
 answers[61] = 3;
 units[61] = ['84', '85', '86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3958. ";
 preguntaids[61] = 3958


//  Id pregunta: 3936 Año de creación de pregunta: 2002
 questions[62]= "63)  M&eacute;trica V3 define m&uacute;ltiples actividades. &iquest;Puede identificar alguna?:";
 choices[62]= new Array();
 choices[62][0] = "Dise&ntilde;o de clases";
 choices[62][1] = "Dise&ntilde;o del modelo f&iacute;sico de datos";
 choices[62][2] = "Dise&ntilde;o del sistema de informaci&oacute;n";
 choices[62][3] = "Ninguna de las anteriores es una actividad de M&eacute;trica V3";
 answers[62] = 0;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3936. ";
 preguntaids[62] = 3936


//  Id pregunta: 3972 Año de creación de pregunta: 2002
 questions[63]= "64)  Un an&aacute;lisis de requerimientos puede dividirse en las siguientes &aacute;reas principales:";
 choices[63]= new Array();
 choices[63][0] = "Evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n y documentaci&oacute;n del problema";
 choices[63][1] = "Reconocimiento del problema, evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n y revisi&oacute;n";
 choices[63][2] = "Reconocimiento del problema, especificaci&oacute;n y revisi&oacute;n";
 choices[63][3] = "Revisi&oacute;n, evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n del problema y documentaci&oacute;n del mismo";
 answers[63] = 1;
 units[63] = ['84'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3972. ";
 preguntaids[63] = 3972


//  Id pregunta: 3955 Año de creación de pregunta: 2002
 questions[64]= "65)  Se entiende por ciclo de vida:";
 choices[64]= new Array();
 choices[64][0] = "Conjunto de fases (o etapas) por las que pasa el sistema desde que se concibe hasta que se retira del servicio";
 choices[64][1] = "El conjunto de fases de desarrollo";
 choices[64][2] = "Etapas de la ingenieria del software";
 choices[64][3] = "Las etapas de la utilizaci&oacute;n de un sistema";
 answers[64] = 0;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3955. ";
 preguntaids[64] = 3955


//  Id pregunta: 3906 Año de creación de pregunta: 2002
 questions[65]= "66)  La planificaci&oacute;n estrat&eacute;gica es:";
 choices[65]= new Array();
 choices[65][0] = "Un momento en el tiempo para tomar decisiones";
 choices[65][1] = "Una herramienta para anticiparse a los cambios";
 choices[65][2] = "Un proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo los objetivos a largo plazo, identificando metas y objetivos cuantitativos, desarrollando estrategias para alcanzar dichos objetivos y localizando recursos para llevar a cabo dichas estrategias";
 choices[65][3] = "Una herramienta que se limita a extrapolar el presente al futuro";
 answers[65] = 2;
 units[65] = ['83'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3906. ";
 preguntaids[65] = 3906


//  Id pregunta: 3927 Año de creación de pregunta: 2002
 questions[66]= "67)  Los criterios, ordenados de menor a mayor, para definir el nivel de cohesi&oacute;n son:";
 choices[66]= new Array();
 choices[66][0] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[66][1] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[66][2] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[66][3] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 answers[66] = 1;
 units[66] = ['89'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3927. ";
 preguntaids[66] = 3927


//  Id pregunta: 3947 Año de creación de pregunta: 2002
 questions[67]= "68)  Por configuraci&oacute;n se entiende:";
 choices[67]= new Array();
 choices[67][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[67][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[67][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[67][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[67] = 2;
 units[67] = ['95'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3947. ";
 preguntaids[67] = 3947


//  Id pregunta: 3954 Año de creación de pregunta: 2002
 questions[68]= "69)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[68]= new Array();
 choices[68][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[68][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[68][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[68][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[68] = 3;
 units[68] = ['92', '93'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3954. ";
 preguntaids[68] = 3954


//  Id pregunta: 3912 Año de creación de pregunta: 2002
 questions[69]= "70)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[69]= new Array();
 choices[69][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos";
 choices[69][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[69][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[69][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[69] = 0;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3912. ";
 preguntaids[69] = 3912


//  Id pregunta: 3966 Año de creación de pregunta: 2002
 questions[70]= "71)  Si se usa COCOMO, no se tendr&aacute;n en cuenta:";
 choices[70]= new Array();
 choices[70][0] = "Las l&iacute;neas de c&oacute;digo de los programas de pruebas";
 choices[70][1] = "Las declaraciones iniciales";
 choices[70][2] = "Los trabajos desarrollados en &quot;scripts&quot;";
 choices[70][3] = "Las instrucciones de formateo por pantalla de los datos";
 answers[70] = 0;
 units[70] = ['94'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3966. ";
 preguntaids[70] = 3966


//  Id pregunta: 3961 Año de creación de pregunta: 2002
 questions[71]= "72)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[71]= new Array();
 choices[71][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[71][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[71][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[71][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[71] = 2;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3961. ";
 preguntaids[71] = 3961


//  Id pregunta: 3943 Año de creación de pregunta: 2002
 questions[72]= "73)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[72]= new Array();
 choices[72][0] = "Falso";
 choices[72][1] = "Cierto";
 choices[72][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[72][3] = "S&oacute;lo si se elige METRICA";
 answers[72] = 1;
 units[72] = ['82'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 3943. ";
 preguntaids[72] = 3943


//  Id pregunta: 3970 Año de creación de pregunta: 2002
 questions[73]= "74)  Un  m&eacute;todo orientado a los datos es:";
 choices[73]= new Array();
 choices[73][0] = "Diagramas HIPO";
 choices[73][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[73][2] = "Historia de la vida de una entidad";
 choices[73][3] = "Dise&ntilde;o estructurado: Yourdon-Constantine";
 answers[73] = 1;
 units[73] = ['86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3970. ";
 preguntaids[73] = 3970


//  Id pregunta: 3946 Año de creación de pregunta: 2002
 questions[74]= "75)  Para reutilizar &quot;software&quot; es ventajoso utilizar lenguajes de programaci&oacute;n orientados a objetos por la siguiente raz&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Porque son m&aacute;s modernos.";
 choices[74][1] = "Porque permiten agrupar los objetos y las operaciones que se realizan sobre los mismos.";
 choices[74][2] = "Porque permiten recursividad.";
 choices[74][3] = "Porque admiten paso de par&aacute;metros por valor y por referencia.";
 answers[74] = 1;
 units[74] = ['85', '89'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3946. ";
 preguntaids[74] = 3946


