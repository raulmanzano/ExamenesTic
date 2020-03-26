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
//  Id pregunta: 10076 Año de creación de pregunta: 2015
 questions[0]= "1)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[0]= new Array();
 choices[0][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[0][1] = "RAID 0.";
 choices[0][2] = "RAID 1.";
 choices[0][3] = "RAID 5.";
 answers[0] = 1;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10076. Examen TIC A2 2014";
 preguntaids[0] = 10076


//  Id pregunta: 10013 Año de creación de pregunta: 2015
 questions[1]= "2)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[1]= new Array();
 choices[1][0] = "Es un lenguaje basado en XML.";
 choices[1][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[1][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[1][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[1] = 3;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10013. Examen TIC A2 2014";
 preguntaids[1] = 10013


//  Id pregunta: 10048 Año de creación de pregunta: 2015
 questions[2]= "3)  Elija la respuesta correcta respecto Java EE 7:";
 choices[2]= new Array();
 choices[2][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[2][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[2][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[2][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[2] = 2;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10048. Examen TIC A2 2014";
 preguntaids[2] = 10048


//  Id pregunta: 10065 Año de creación de pregunta: 2015
 questions[3]= "4)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[3][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[3][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[3][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[3] = 1;
 units[3] = ['91', '85', '86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10065. Examen TIC A2 2014";
 preguntaids[3] = 10065


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[4]= new Array();
 choices[4][0] = "Diagrama de clases.";
 choices[4][1] = "Diagrama de objetos.";
 choices[4][2] = "Diagrama de despliegue.";
 choices[4][3] = "Diagrama de actividades.";
 answers[4] = 3;
 units[4] = ['85', '89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[4] = 10045


//  Id pregunta: 10021 Año de creación de pregunta: 2015
 questions[5]= "6)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[5]= new Array();
 choices[5][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[5][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[5][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[5][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[5] = 2;
 units[5] = ['84'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10021. Examen TIC A2 2014";
 preguntaids[5] = 10021


//  Id pregunta: 10075 Año de creación de pregunta: 2015
 questions[6]= "7)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[6]= new Array();
 choices[6][0] = "TortoiseCVS";
 choices[6][1] = "Subversive";
 choices[6][2] = "Sventon";
 choices[6][3] = "Subclipse";
 answers[6] = 0;
 units[6] = ['31'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10075. Examen TIC A2 2014";
 preguntaids[6] = 10075


//  Id pregunta: 10066 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[7]= new Array();
 choices[7][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[7][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[7][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[7][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[7] = 2;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10066. Examen TIC A2 2014";
 preguntaids[7] = 10066


//  Id pregunta: 10039 Año de creación de pregunta: 2015
 questions[8]= "9)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[8]= new Array();
 choices[8][0] = "Catedr@.";
 choices[8][1] = "Dokeos.";
 choices[8][2] = "Moodle.";
 choices[8][3] = "Claroline.";
 answers[8] = 0;
 units[8] = ['70'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10039. Examen TIC A2 2014";
 preguntaids[8] = 10039


//  Id pregunta: 10018 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[9]= new Array();
 choices[9][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[9][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[9][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[9][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[9] = 1;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10018. Examen TIC A2 2014";
 preguntaids[9] = 10018


//  Id pregunta: 10044 Año de creación de pregunta: 2015
 questions[10]= "11)  El tipo de prueba BigBang es de tipo:";
 choices[10]= new Array();
 choices[10][0] = "Prueba de sistema.";
 choices[10][1] = "Prueba de aceptaci&oacute;n.";
 choices[10][2] = "Prueba de rendimiento.";
 choices[10][3] = "Prueba de integraci&oacute;n.";
 answers[10] = 3;
 units[10] = ['92'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10044. Examen TIC A2 2014";
 preguntaids[10] = 10044


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[11]= "12)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[11]= new Array();
 choices[11][0] = "Es siempre cero.";
 choices[11][1] = "Es igual a su tiempo early.";
 choices[11][2] = "Es mayor que su tiempo early.";
 choices[11][3] = "Es menor que su tiempo early.";
 answers[11] = 1;
 units[11] = ['31'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[11] = 10024


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[12]= "13)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[12]= new Array();
 choices[12][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[12][1] = "Cuando haya recibido al menos dos ACK.";
 choices[12][2] = "Cuando reciba cualquier ACK.";
 choices[12][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[12] = 2;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[12] = 10005


//  Id pregunta: 10056 Año de creación de pregunta: 2015
 questions[13]= "14)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[13]= new Array();
 choices[13][0] = "jconverter";
 choices[13][1] = "schemagen";
 choices[13][2] = "xjc";
 choices[13][3] = "jaxbws";
 answers[13] = 2;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10056. Examen TIC A2 2014";
 preguntaids[13] = 10056


//  Id pregunta: 10038 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[14]= new Array();
 choices[14][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[14][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[14][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[14][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[14] = 1;
 units[14] = ['89'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10038. Examen TIC A2 2014";
 preguntaids[14] = 10038


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[15]= "16)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[15]= new Array();
 choices[15][0] = "Diagrama de secuencia.";
 choices[15][1] = "Diagrama de colaboraci&oacute;n.";
 choices[15][2] = "Diagrama de clases.";
 choices[15][3] = "Diagrama de Casos de Uso.";
 answers[15] = 3;
 units[15] = ['91', '85', '89'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[15] = 10029


//  Id pregunta: 10047 Año de creación de pregunta: 2015
 questions[16]= "17)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[16]= new Array();
 choices[16][0] = "JSR 342.";
 choices[16][1] = "JSR 366.";
 choices[16][2] = "JSR 324.";
 choices[16][3] = "JSR 224.";
 answers[16] = 0;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10047. Examen TIC A2 2014";
 preguntaids[16] = 10047


//  Id pregunta: 10042 Año de creación de pregunta: 2015
 questions[17]= "18)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[17]= new Array();
 choices[17][0] = "Badboy.";
 choices[17][1] = "Selenium.";
 choices[17][2] = "Jmeter.";
 choices[17][3] = "Cherokee.";
 answers[17] = 3;
 units[17] = ['92'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10042. Examen TIC A2 2014";
 preguntaids[17] = 10042


//  Id pregunta: 10037 Año de creación de pregunta: 2015
 questions[18]= "19)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[18]= new Array();
 choices[18][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[18][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[18][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[18][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[18] = 2;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10037. Examen TIC A2 2014";
 preguntaids[18] = 10037


//  Id pregunta: 10070 Año de creación de pregunta: 2015
 questions[19]= "20)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[19]= new Array();
 choices[19][0] = "/dev/sda1";
 choices[19][1] = "/dev/hda1";
 choices[19][2] = "/dev/hda5";
 choices[19][3] = "/dev/hda2";
 answers[19] = 2;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10070. Examen TIC A2 2014";
 preguntaids[19] = 10070


//  Id pregunta: 10059 Año de creación de pregunta: 2015
 questions[20]= "21)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[20]= new Array();
 choices[20][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[20][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[20][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[20][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[20] = 1;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10059. Examen TIC A2 2014";
 preguntaids[20] = 10059


//  Id pregunta: 10043 Año de creación de pregunta: 2015
 questions[21]= "22)  Para poder realizar pruebas de caja blanca que realicen cobertura de c&oacute;digo, la herramienta que NO se deber&iacute;a usar es:";
 choices[21]= new Array();
 choices[21][0] = "EclEMMA.";
 choices[21][1] = "eCobertura.";
 choices[21][2] = "Jmeter.";
 choices[21][3] = "Java Code Coverage.";
 answers[21] = 2;
 units[21] = ['92'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10043. Examen TIC A2 2014";
 preguntaids[21] = 10043


//  Id pregunta: 10079 Año de creación de pregunta: 2015
 questions[22]= "23)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "MAC del interface principal del puente.";
 choices[22][1] = "IP del interface principal del puente.";
 choices[22][2] = "MAC del puente.";
 choices[22][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[22] = 2;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10079. Examen TIC A2 2014";
 preguntaids[22] = 10079


//  Id pregunta: 10011 Año de creación de pregunta: 2015
 questions[23]= "24)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[23]= new Array();
 choices[23][0] = "Sesiones de trabajo.";
 choices[23][1] = "Valoraciones Delphi.";
 choices[23][2] = "Histogramas.";
 choices[23][3] = "&Aacute;rboles de ataque.";
 answers[23] = 3;
 units[23] = ['45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 10011. Examen TIC A2 2014";
 preguntaids[23] = 10011


//  Id pregunta: 10069 Año de creación de pregunta: 2015
 questions[24]= "25)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[24]= new Array();
 choices[24][0] = "grep error log.txt | wc &ndash;l";
 choices[24][1] = "grep wc &ndash;l |error log.txt";
 choices[24][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[24][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[24] = 0;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10069. Examen TIC A2 2014";
 preguntaids[24] = 10069


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[25]= "26)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "Abstracci&oacute;n.";
 choices[25][1] = "Polimorfismo.";
 choices[25][2] = "Herencia.";
 choices[25][3] = "Encapsulamiento.";
 answers[25] = 3;
 units[25] = ['89'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[25] = 10046


//  Id pregunta: 10033 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[26]= new Array();
 choices[26][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[26][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[26][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[26][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[26] = 1;
 units[26] = ['91', '86'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 10033. Examen TIC A2 2014";
 preguntaids[26] = 10033


//  Id pregunta: 10016 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[27]= new Array();
 choices[27][0] = "EUPL";
 choices[27][1] = "GPL";
 choices[27][2] = "LGPL";
 choices[27][3] = "BSD";
 answers[27] = 3;
 units[27] = ['66'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10016. Examen TIC A2 2014";
 preguntaids[27] = 10016


//  Id pregunta: 10027 Año de creación de pregunta: 2015
 questions[28]= "29)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[28]= new Array();
 choices[28][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[28][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[28][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[28][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[28] = 2;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10027. Examen TIC A2 2014";
 preguntaids[28] = 10027


//  Id pregunta: 10062 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[29]= new Array();
 choices[29][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[29][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[29][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[29][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[29] = 3;
 units[29] = ['72'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10062. Examen TIC A2 2014";
 preguntaids[29] = 10062


//  Id pregunta: 10074 Año de creación de pregunta: 2015
 questions[30]= "31)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[30]= new Array();
 choices[30][0] = "JOB";
 choices[30][1] = "COMMENT";
 choices[30][2] = "EXEC";
 choices[30][3] = "DD";
 answers[30] = 1;
 units[30] = ['60', '61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10074. Examen TIC A2 2014";
 preguntaids[30] = 10074


//  Id pregunta: 10063 Año de creación de pregunta: 2015
 questions[31]= "32)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[31]= new Array();
 choices[31][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[31][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[31][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[31][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[31] = 3;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10063. Examen TIC A2 2014";
 preguntaids[31] = 10063


//  Id pregunta: 10007 Año de creación de pregunta: 2015
 questions[32]= "33)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[32]= new Array();
 choices[32][0] = "88";
 choices[32][1] = "42";
 choices[32][2] = "74";
 choices[32][3] = "105";
 answers[32] = 0;
 units[32] = ['120'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10007. Examen TIC A2 2014";
 preguntaids[32] = 10007


//  Id pregunta: 10009 Año de creación de pregunta: 2015
 questions[33]= "34)  En relaci&oacute;n a OpenDocument (ODF), se&ntilde;ale la respuesta FALSA:";
 choices[33]= new Array();
 choices[33][0] = "Es un formato de archivo abierto y est&aacute;ndar para el almacenamiento de documentos tales como hojas de c&aacute;lculo, textos, gr&aacute;ficas y presentaciones.";
 choices[33][1] = "El tipo MIME para documentos texto de OpenDocument es: application/vnd.openxmlformats-officedocument.wordprocessingml.document.";
 choices[33][2] = "Est&aacute; basado en XML.";
 choices[33][3] = "Las extensiones de los archivos incluyen: odt para documentos de texto, ods para hojas de c&aacute;lculo, odp para presentaciones y odb para bases de datos.";
 answers[33] = 1;
 units[33] = ['66'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10009. Examen TIC A2 2014";
 preguntaids[33] = 10009


//  Id pregunta: 10020 Año de creación de pregunta: 2015
 questions[34]= "35)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[34]= new Array();
 choices[34][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[34][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[34][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[34][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[34] = 3;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10020. Examen TIC A2 2014";
 preguntaids[34] = 10020


//  Id pregunta: 10040 Año de creación de pregunta: 2015
 questions[35]= "36)  En relaci&oacute;n a las pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[35]= new Array();
 choices[35][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[35][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[35][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[35][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control y, despu&eacute;s, los m&oacute;dulos de bajo nivel. Los m&oacute;dulos intermedios se integran al final.";
 answers[35] = 3;
 units[35] = ['92'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 10040. Examen TIC A2 2014";
 preguntaids[35] = 10040


//  Id pregunta: 10028 Año de creación de pregunta: 2015
 questions[36]= "37)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[36]= new Array();
 choices[36][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[36][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[36][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[36][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[36] = 0;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10028. Examen TIC A2 2014";
 preguntaids[36] = 10028


//  Id pregunta: 10053 Año de creación de pregunta: 2015
 questions[37]= "38)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[37]= new Array();
 choices[37][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[37][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[37][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[37][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[37] = 3;
 units[37] = ['55'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10053. Examen TIC A2 2014";
 preguntaids[37] = 10053


//  Id pregunta: 10050 Año de creación de pregunta: 2015
 questions[38]= "39)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[38]= new Array();
 choices[38][0] = "EntityConnection.";
 choices[38][1] = "SqlConnection.";
 choices[38][2] = "SqlCeConnection.";
 choices[38][3] = "OleOdbcConnection.";
 answers[38] = 3;
 units[38] = ['63'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10050. Examen TIC A2 2014";
 preguntaids[38] = 10050


//  Id pregunta: 10035 Año de creación de pregunta: 2015
 questions[39]= "40)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[39]= new Array();
 choices[39][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[39][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[39][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[39][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[39] = 3;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10035. Examen TIC A2 2014";
 preguntaids[39] = 10035


//  Id pregunta: 10022 Año de creación de pregunta: 2015
 questions[40]= "41)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[40]= new Array();
 choices[40][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[40][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[40][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[40][3] = "La tabla con los requisitos ya implementados.";
 answers[40] = 2;
 units[40] = ['84'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10022. Examen TIC A2 2014";
 preguntaids[40] = 10022


//  Id pregunta: 10031 Año de creación de pregunta: 2015
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[41]= new Array();
 choices[41][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[41][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[41][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[41][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[41] = 0;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10031. Examen TIC A2 2014";
 preguntaids[41] = 10031


//  Id pregunta: 10055 Año de creación de pregunta: 2015
 questions[42]= "43)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[42]= new Array();
 choices[42][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[42][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[42][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[42][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[42] = 1;
 units[42] = ['74'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 10055. Examen TIC A2 2014";
 preguntaids[42] = 10055


//  Id pregunta: 10077 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "Virtual PC.";
 choices[43][1] = "XEN.";
 choices[43][2] = "Atheros.";
 choices[43][3] = "VirtualBox.";
 answers[43] = 2;
 units[43] = ['124'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10077. Examen TIC A2 2014";
 preguntaids[43] = 10077


//  Id pregunta: 10051 Año de creación de pregunta: 2015
 questions[44]= "45)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[44]= new Array();
 choices[44][0] = "Bajoo.";
 choices[44][1] = "Azure.";
 choices[44][2] = "Heroku.";
 choices[44][3] = "Adrive.";
 answers[44] = 1;
 units[44] = ['63'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10051. Examen TIC A2 2014";
 preguntaids[44] = 10051


//  Id pregunta: 10010 Año de creación de pregunta: 2015
 questions[45]= "46)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[45]= new Array();
 choices[45][0] = "Auditor&iacute;a.";
 choices[45][1] = "Acreditaci&oacute;n.";
 choices[45][2] = "Certificaci&oacute;n.";
 choices[45][3] = "Evaluaci&oacute;n.";
 answers[45] = 1;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 10010. Examen TIC A2 2014";
 preguntaids[45] = 10010


//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[46]= new Array();
 choices[46][0] = "Request.";
 choices[46][1] = "Invoke.";
 choices[46][2] = "Response.";
 choices[46][3] = "Confirmation.";
 answers[46] = 1;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[46] = 10006


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[47]= new Array();
 choices[47][0] = "Denegaci&oacute;n de servicio.";
 choices[47][1] = "Hombre intermedio.";
 choices[47][2] = "Fuerza Bruta.";
 choices[47][3] = "Ingenier&iacute;a social.";
 answers[47] = 0;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[47] = 10014


//  Id pregunta: 10072 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[48]= new Array();
 choices[48][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[48][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[48][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[48][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[48] = 3;
 units[48] = ['60'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10072. Examen TIC A2 2014";
 preguntaids[48] = 10072


//  Id pregunta: 10064 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[49]= new Array();
 choices[49][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[49][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[49][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[49][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[49] = 1;
 units[49] = ['82', '84'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10064. Examen TIC A2 2014";
 preguntaids[49] = 10064


//  Id pregunta: 10041 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[50]= new Array();
 choices[50][0] = "ISO 29781";
 choices[50][1] = "ISO 29621";
 choices[50][2] = "ISO 29382";
 choices[50][3] = "ISO 29119";
 answers[50] = 3;
 units[50] = ['92'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10041. Examen TIC A2 2014";
 preguntaids[50] = 10041


//  Id pregunta: 10071 Año de creación de pregunta: 2015
 questions[51]= "52)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[51]= new Array();
 choices[51][0] = "RFID";
 choices[51][1] = "RSYNC";
 choices[51][2] = "RMAN";
 choices[51][3] = "RMON";
 answers[51] = 2;
 units[51] = ['60'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10071. Examen TIC A2 2014";
 preguntaids[51] = 10071


//  Id pregunta: 10060 Año de creación de pregunta: 2015
 questions[52]= "53)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[52]= new Array();
 choices[52][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[52][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[52][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[52][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[52] = 1;
 units[52] = ['93'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10060. Examen TIC A2 2014";
 preguntaids[52] = 10060


//  Id pregunta: 10023 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[53]= new Array();
 choices[53][0] = "MERISE.";
 choices[53][1] = "SDM (Structured Development Method).";
 choices[53][2] = "RUP (Rational Unified Process).";
 choices[53][3] = "SCRUM.";
 answers[53] = 1;
 units[53] = ['84'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10023. Examen TIC A2 2014";
 preguntaids[53] = 10023


//  Id pregunta: 10078 Año de creación de pregunta: 2015
 questions[54]= "55)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[54]= new Array();
 choices[54][0] = "IEEE 802.3ab";
 choices[54][1] = "IEEE 802.3at";
 choices[54][2] = "IEEE 802.3ap";
 choices[54][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[54] = 1;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10078. Examen TIC A2 2014";
 preguntaids[54] = 10078


//  Id pregunta: 10019 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[55]= new Array();
 choices[55][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[55][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[55][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[55][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[55] = 2;
 units[55] = ['82'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10019. Examen TIC A2 2014";
 preguntaids[55] = 10019


//  Id pregunta: 10025 Año de creación de pregunta: 2015
 questions[56]= "57)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[56]= new Array();
 choices[56][0] = "Consultor.";
 choices[56][1] = "Analista.";
 choices[56][2] = "Programador.";
 choices[56][3] = "Jefe de Proyecto.";
 answers[56] = 0;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10025. Examen TIC A2 2014";
 preguntaids[56] = 10025


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[57]= "58)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[57]= new Array();
 choices[57][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[57][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[57][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[57][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[57] = 3;
 units[57] = ['63'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[57] = 10052


//  Id pregunta: 10034 Año de creación de pregunta: 2015
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[58]= new Array();
 choices[58][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[58][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[58][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[58][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[58] = 3;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 10034. Examen TIC A2 2014";
 preguntaids[58] = 10034


//  Id pregunta: 10067 Año de creación de pregunta: 2015
 questions[59]= "60)  El comando ping es el acr&oacute;nimo de:";
 choices[59]= new Array();
 choices[59][0] = "Packet Internet Group.";
 choices[59][1] = "Packet Internet Gangway.";
 choices[59][2] = "Packet Internet Gate.";
 choices[59][3] = "Packet Internet Groper.";
 answers[59] = 3;
 units[59] = ['103'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10067. Examen TIC A2 2014";
 preguntaids[59] = 10067


//  Id pregunta: 10058 Año de creación de pregunta: 2015
 questions[60]= "61)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[60]= new Array();
 choices[60][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[60][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[60][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[60][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[60] = 3;
 units[60] = ['94'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10058. Examen TIC A2 2014";
 preguntaids[60] = 10058


//  Id pregunta: 10061 Año de creación de pregunta: 2015
 questions[61]= "62)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[61]= new Array();
 choices[61][0] = "Operable.";
 choices[61][1] = "Perceptible.";
 choices[61][2] = "Robustez.";
 choices[61][3] = "Comprensible.";
 answers[61] = 2;
 units[61] = ['42'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10061. Examen TIC A2 2014";
 preguntaids[61] = 10061


//  Id pregunta: 10017 Año de creación de pregunta: 2015
 questions[62]= "63)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[62]= new Array();
 choices[62][0] = "PDF";
 choices[62][1] = "EPUB";
 choices[62][2] = "RTF";
 choices[62][3] = "FLAC";
 answers[62] = 3;
 units[62] = ['66'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10017. Examen TIC A2 2014";
 preguntaids[62] = 10017


//  Id pregunta: 10012 Año de creación de pregunta: 2015
 questions[63]= "64)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[63]= new Array();
 choices[63][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[63][1] = "Estructura de respuesta a incidentes.";
 choices[63][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[63][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[63] = 1;
 units[63] = ['36', '45'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 10012. Examen TIC A2 2014";
 preguntaids[63] = 10012


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[64]= new Array();
 choices[64][0] = "Regla del 80-20.";
 choices[64][1] = "Regla del 30-40-30.";
 choices[64][2] = "Regla del 40-20-40.";
 choices[64][3] = "Regla del 20-60-20.";
 answers[64] = 2;
 units[64] = ['31', '94'];
 blocks[64] = ['B1', 'B3'];
 comments[64] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[64] = 10026


//  Id pregunta: 10030 Año de creación de pregunta: 2015
 questions[65]= "66)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[65]= new Array();
 choices[65][0] = "Serializable.";
 choices[65][1] = "Repeatable Read (lecturas repetibles).";
 choices[65][2] = "Read Committed (lecturas comprometidas).";
 choices[65][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[65] = 3;
 units[65] = ['60', '61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 10030. Examen TIC A2 2014";
 preguntaids[65] = 10030


//  Id pregunta: 10015 Año de creación de pregunta: 2015
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[66]= new Array();
 choices[66][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[66][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[66][2] = "Libertad de distribuir copias.";
 choices[66][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[66] = 0;
 units[66] = ['66'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10015. Examen TIC A2 2014";
 preguntaids[66] = 10015


//  Id pregunta: 10049 Año de creación de pregunta: 2015
 questions[67]= "68)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Java BluePrints.";
 choices[67][1] = "Java Specification Request.";
 choices[67][2] = "Java Community Process.";
 choices[67][3] = "Java Pattern Spec.";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10049. Examen TIC A2 2014";
 preguntaids[67] = 10049


//  Id pregunta: 10073 Año de creación de pregunta: 2015
 questions[68]= "69)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[68]= new Array();
 choices[68][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[68][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[68][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[68][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[68] = 1;
 units[68] = ['60'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10073. Examen TIC A2 2014";
 preguntaids[68] = 10073


//  Id pregunta: 10036 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[69]= new Array();
 choices[69][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[69][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[69][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[69][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[69] = 1;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 10036. Examen TIC A2 2014";
 preguntaids[69] = 10036


//  Id pregunta: 10032 Año de creación de pregunta: 2015
 questions[70]= "71)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[70]= new Array();
 choices[70][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[70][1] = "Cat&aacute;logo de productos a generar.";
 choices[70][2] = "Cat&aacute;logo de clases.";
 choices[70][3] = "Cat&aacute;logo de entidades.";
 answers[70] = 3;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10032. Examen TIC A2 2014";
 preguntaids[70] = 10032


//  Id pregunta: 10068 Año de creación de pregunta: 2015
 questions[71]= "72)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[71]= new Array();
 choices[71][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[71][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[71][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[71][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[71] = 1;
 units[71] = ['56'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 10068. Examen TIC A2 2014";
 preguntaids[71] = 10068


//  Id pregunta: 10054 Año de creación de pregunta: 2015
 questions[72]= "73)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[72]= new Array();
 choices[72][0] = "Crear colecciones.";
 choices[72][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[72][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[72][3] = "Desbloquear un recurso.";
 answers[72] = 2;
 units[72] = ['103'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10054. Examen TIC A2 2014";
 preguntaids[72] = 10054


//  Id pregunta: 10057 Año de creación de pregunta: 2015
 questions[73]= "74)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[73]= new Array();
 choices[73][0] = "En 6 niveles, desde el cero al cinco.";
 choices[73][1] = "En 5 niveles, desde el uno al cinco.";
 choices[73][2] = "En 6 niveles, desde el uno al seis.";
 choices[73][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[73] = 0;
 units[73] = ['93'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10057. Examen TIC A2 2014";
 preguntaids[73] = 10057


//  Id pregunta: 10008 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[74]= new Array();
 choices[74][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[74][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[74][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[74][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[74] = 0;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10008. Examen TIC A2 2014";
 preguntaids[74] = 10008


