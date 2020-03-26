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
//  Id pregunta: 2866 Año de creación de pregunta: 2002
 questions[0]= "1)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[0]= new Array();
 choices[0][0] = "rc.local";
 choices[0][1] = "autoexec.bat";
 choices[0][2] = "rc4";
 choices[0][3] = "prelogin";
 answers[0] = 0;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2866. ";
 preguntaids[0] = 2866


//  Id pregunta: 2848 Año de creación de pregunta: 2002
 questions[1]= "2)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[1]= new Array();
 choices[1][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[1][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[1][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[1][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[1] = 3;
 units[1] = ['56'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2848. ";
 preguntaids[1] = 2848


//  Id pregunta: 2882 Año de creación de pregunta: 2002
 questions[2]= "3)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[2]= new Array();
 choices[2][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[2][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[2][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[2][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[2] = 1;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2882. ";
 preguntaids[2] = 2882


//  Id pregunta: 2895 Año de creación de pregunta: 2002
 questions[3]= "4)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[3]= new Array();
 choices[3][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[3][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[3][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[3][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[3] = 2;
 units[3] = ['68'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2895. ";
 preguntaids[3] = 2895


//  Id pregunta: 2849 Año de creación de pregunta: 2002
 questions[4]= "5)  En relaci&oacute;n con el diccionario de recursos de informaci&oacute;n de una base de datos, se define 'metadatos' como:";
 choices[4]= new Array();
 choices[4][0] = "El repositorio que contiene todos los datos de la organizaci&oacute;n";
 choices[4][1] = "La informaci&oacute;n relativa al propio diccionario de datos, su estructura y sus caracter&iacute;sticas";
 choices[4][2] = "La informaci&oacute;n de nivel conceptual que determina la visi&oacute;n global del sistema de informaci&oacute;n";
 choices[4][3] = "El conjunto de datos necesarios para deducir determinada informaci&oacute;n no especificada en la base de datos";
 answers[4] = 1;
 units[4] = ['60'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2849. ";
 preguntaids[4] = 2849


//  Id pregunta: 2900 Año de creación de pregunta: 2002
 questions[5]= "6)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[5]= new Array();
 choices[5][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[5][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[5][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[5][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[5] = 2;
 units[5] = ['68'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2900. ";
 preguntaids[5] = 2900


//  Id pregunta: 2892 Año de creación de pregunta: 2002
 questions[6]= "7)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[6]= new Array();
 choices[6][0] = "Red de contratos";
 choices[6][1] = "Arquitectura de pizarra";
 choices[6][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[6][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[6] = 2;
 units[6] = ['67'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2892. ";
 preguntaids[6] = 2892


//  Id pregunta: 2858 Año de creación de pregunta: 2002
 questions[7]= "8)  En un entorno transaccional, &iquest;cu&aacute;l de las siguientes acciones traer&iacute;a como resultado una disminuci&oacute;n del tiempo de respuesta?:";
 choices[7]= new Array();
 choices[7][0] = "Compactaci&oacute;n de datos en el dispositivo de almacenamiento magn&eacute;tico, para disminuir el n&uacute;mero de E/S al DASD";
 choices[7][1] = "Ampliaci&oacute;n de la partici&oacute;n de memoria principal para los programas activos, para disminuir la frecuencia de 'swapping'";
 choices[7][2] = "Ampliaci&oacute;n de la memoria virtual, para disminuir la paginaci&oacute;n";
 choices[7][3] = "Todas las anteriores respuestas son correctas";
 answers[7] = 1;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2858. ";
 preguntaids[7] = 2858


//  Id pregunta: 2847 Año de creación de pregunta: 2002
 questions[8]= "9)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[8]= new Array();
 choices[8][0] = "ISA es posterior a MCA";
 choices[8][1] = "AGP es posterior a PCI";
 choices[8][2] = "XT es posterior a ISA";
 choices[8][3] = "EISA es anterior a MCA";
 answers[8] = 1;
 units[8] = ['51'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2847. Orden cronologico: ISA-PCI-USB-AGP";
 preguntaids[8] = 2847


//  Id pregunta: 2875 Año de creación de pregunta: 2002
 questions[9]= "10)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[9]= new Array();
 choices[9][0] = "M&eacute;todo de la varianza";
 choices[9][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[9][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[9][3] = "M&eacute;todo de Kohonen";
 answers[9] = 2;
 units[9] = ['68'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2875. ";
 preguntaids[9] = 2875


//  Id pregunta: 2891 Año de creación de pregunta: 2002
 questions[10]= "11)  Indicar cual de la siguientes cualidades de los sistemas expertos es falsa:";
 choices[10]= new Array();
 choices[10][0] = "Capacidad para explicar la forma en que el sistema resuelve los problemas planteados";
 choices[10][1] = "Flexibilidad para incorporar gradualmente nuevo conocimiento";
 choices[10][2] = "Pueden procesar informaci&oacute;n simb&oacute;lica en vez de s&oacute;lo informaci&oacute;n num&eacute;rica";
 choices[10][3] = "S&oacute;lo pueden operar con conocimiento completo";
 answers[10] = 3;
 units[10] = ['68'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2891. ";
 preguntaids[10] = 2891


//  Id pregunta: 2879 Año de creación de pregunta: 2002
 questions[11]= "12)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[11]= new Array();
 choices[11][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[11][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[11][2] = "Es un editor de texto";
 choices[11][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[11] = 2;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2879. ";
 preguntaids[11] = 2879


//  Id pregunta: 2838 Año de creación de pregunta: 2002
 questions[12]= "13)  En las escala de integraci&oacute;n ULSI significa:";
 choices[12]= new Array();
 choices[12][0] = "Ultima Large Scale Integration";
 choices[12][1] = "Under Large Scale Integration";
 choices[12][2] = "Ultra Large Scale Integration";
 choices[12][3] = "Update Large Scale Integration";
 answers[12] = 2;
 units[12] = ['51'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2838. ";
 preguntaids[12] = 2838


//  Id pregunta: 2839 Año de creación de pregunta: 2002
 questions[13]= "14)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[13]= new Array();
 choices[13][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[13][1] = "Se emplea la microprogramaci&oacute;n";
 choices[13][2] = "No se emplea la microprogramaci&oacute;n";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = 2;
 units[13] = ['50'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2839. ";
 preguntaids[13] = 2839


//  Id pregunta: 2860 Año de creación de pregunta: 2002
 questions[14]= "15)  En un ordenador que emplea memoria virtual:";
 choices[14]= new Array();
 choices[14][0] = "Las direcciones que generan los programas se refieren a un espacio mayor que el espacio realmente disponible en memoria principal";
 choices[14][1] = "El mapa de direcciones l&oacute;gicas o virtual es igual al mapa de direcciones f&iacute;sicas o reales";
 choices[14][2] = "El espacio virtual emplea como soporte la memoria principal";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = 0;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2860. ";
 preguntaids[14] = 2860


//  Id pregunta: 2854 Año de creación de pregunta: 2002
 questions[15]= "16)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[15]= new Array();
 choices[15][0] = "X.500";
 choices[15][1] = "ADSI";
 choices[15][2] = "LDAP";
 choices[15][3] = "Todas son falsas";
 answers[15] = 1;
 units[15] = ['58'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2854. ";
 preguntaids[15] = 2854


//  Id pregunta: 2869 Año de creación de pregunta: 2002
 questions[16]= "17)  En un sistema operativo, el 'dispatcher' se encarga de:";
 choices[16]= new Array();
 choices[16][0] = "Asignar un proceso a un procesador que ha quedado libre";
 choices[16][1] = "Optimizar el uso de la memoria RAM";
 choices[16][2] = "Gestionar las interrupciones de entrada/salida";
 choices[16][3] = "Asignar nuevas p&aacute;ginas de memoria al proceso que se est&eacute; ejecutando si las necesita";
 answers[16] = 0;
 units[16] = ['56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2869. ";
 preguntaids[16] = 2869


//  Id pregunta: 2852 Año de creación de pregunta: 2002
 questions[17]= "18)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[17][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[17][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[17][3] = "Todas las respuestas anteriores son ciertas";
 answers[17] = 3;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2852. ";
 preguntaids[17] = 2852


//  Id pregunta: 2909 Año de creación de pregunta: 2002
 questions[18]= "19)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[18]= new Array();
 choices[18][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[18][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[18][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[18][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[18] = 2;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2909. ";
 preguntaids[18] = 2909


//  Id pregunta: 2872 Año de creación de pregunta: 2002
 questions[19]= "20)  En una operaci&oacute;n de acceso directo a memoria, el procesador debe enviar distintas informaciones necesarias para realizar la operaci&oacute;n. Indique cu&aacute;l de las siguientes alternativas se refiere a una informaci&oacute;n que no es necesaria en una operaci&oacute;n de DMA:";
 choices[19]= new Array();
 choices[19][0] = "Direcci&oacute;n de memoria";
 choices[19][1] = "Tama&ntilde;o de las palabras";
 choices[19][2] = "Sentido de la operaci&oacute;n";
 choices[19][3] = "Identificaci&oacute;n del perif&eacute;rico";
 answers[19] = 1;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2872. ";
 preguntaids[19] = 2872


//  Id pregunta: 2845 Año de creación de pregunta: 2002
 questions[20]= "21)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[20]= new Array();
 choices[20][0] = "RAM";
 choices[20][1] = "ROM";
 choices[20][2] = "memoria interna del procesador";
 choices[20][3] = "disco duro asociado a la UAL y la UC";
 answers[20] = 1;
 units[20] = ['51'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2845. ";
 preguntaids[20] = 2845


//  Id pregunta: 2853 Año de creación de pregunta: 2002
 questions[21]= "22)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[21]= new Array();
 choices[21][0] = "fvi";
 choices[21][1] = "fred";
 choices[21][2] = "sed";
 choices[21][3] = "xlexp";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2853. sed (stream editor) es un editor de flujo, una potente herramienta de tratamiento de texto para el sistema operativoUnix que acepta como entrada un archivo, lo lee y modifica l&iacute;nea a l&iacute;nea de acuerdo a un script, mostrando el resultado por salida est&aacute;ndar (normalmente en pantalla, a menos que se realice una redirecci&oacute;n). Sed permite manipular flujos de datos, como por ejemplo cortar l&iacute;neas, buscar y reemplazar texto (con soporte de expresiones regulares), entre otras cosas";
 preguntaids[21] = 2853


//  Id pregunta: 2856 Año de creación de pregunta: 2002
 questions[22]= "23)  En un disco duro Winchester:";
 choices[22]= new Array();
 choices[22][0] = "Las cabezas tocan el disco en todo momento";
 choices[22][1] = "Las cabezas nunca tocan el disco";
 choices[22][2] = "Las cabezas tocan el disco para grabar";
 choices[22][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[22] = 1;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2856. ";
 preguntaids[22] = 2856


//  Id pregunta: 2906 Año de creación de pregunta: 2002
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[23]= new Array();
 choices[23][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[23][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[23][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[23][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2906. ";
 preguntaids[23] = 2906


//  Id pregunta: 2904 Año de creación de pregunta: 2002
 questions[24]= "25)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[24]= new Array();
 choices[24][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[24][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[24][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[24][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[24] = 3;
 units[24] = ['68'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2904. ";
 preguntaids[24] = 2904


//  Id pregunta: 2880 Año de creación de pregunta: 2002
 questions[25]= "26)  En Unix la gesti&oacute;n de procesos se realiza:";
 choices[25]= new Array();
 choices[25][0] = "Cuanta m&aacute;s CPU ha consumido un proceso mayor se hace su prioridad, ya que se considera que debe ser uno de los procesos principales del sistema";
 choices[25][1] = "Existe una &uacute;nica cola de procesos. La prioridad se asigna seg&uacute;n el orden de llegada de los mismos";
 choices[25][2] = "El mecanismo de planificaci&oacute;n funciona mediante un timeout que ordena a un driver llamar a una subrutina del kernel cuando ha transcurrido un determinado tiempo";
 choices[25][3] = "El scheduler asigna rodajas de tiempo (time slicers) a los distintos procesos. La duraci&oacute;n de cada rodaja es variable seg&uacute;n la prioridad que tenga asignada el proceso";
 answers[25] = 3;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2880. ";
 preguntaids[25] = 2880


//  Id pregunta: 2871 Año de creación de pregunta: 2002
 questions[26]= "27)  En una conexi&oacute;n RS-232 C o V24/V28 el conector tiene:";
 choices[26]= new Array();
 choices[26][0] = "15 pines";
 choices[26][1] = "32 pines";
 choices[26][2] = "24 pines";
 choices[26][3] = "25 pines";
 answers[26] = 3;
 units[26] = ['52'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2871. ";
 preguntaids[26] = 2871


//  Id pregunta: 2894 Año de creación de pregunta: 2002
 questions[27]= "28)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[27]= new Array();
 choices[27][0] = "Jerarqu&iacute;a circular";
 choices[27][1] = "Jerarqu&iacute;a simple";
 choices[27][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[27][3] = "Colecci&oacute;n lineal";
 answers[27] = 0;
 units[27] = ['68'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2894. ";
 preguntaids[27] = 2894


//  Id pregunta: 2887 Año de creación de pregunta: 2002
 questions[28]= "29)  GNU:";
 choices[28]= new Array();
 choices[28][0] = "Es un acr&oacute;nimo de 'GNU is Not Unix'";
 choices[28][1] = "Fue fundado en 1984 por Richard M. Stallman para crear un sistema operativo Unix completo, basado en software libre.";
 choices[28][2] = "Es el autor de las licencias de software libre GPL y LGPL";
 choices[28][3] = "Todas son ciertas";
 answers[28] = 3;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2887. ";
 preguntaids[28] = 2887


//  Id pregunta: 2903 Año de creación de pregunta: 2002
 questions[29]= "30)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[29]= new Array();
 choices[29][0] = "Deducci&oacute;n de valores de ranuras";
 choices[29][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[29][2] = "Herencia de ranuras";
 choices[29][3] = "Equiparaci&oacute;n de marcos";
 answers[29] = 2;
 units[29] = ['68'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2903. ";
 preguntaids[29] = 2903


//  Id pregunta: 2897 Año de creación de pregunta: 2002
 questions[30]= "31)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[30]= new Array();
 choices[30][0] = "Agentes interfaz";
 choices[30][1] = "Agentes de gesti&oacute;n";
 choices[30][2] = "Agentes de informaci&oacute;n";
 choices[30][3] = "Agentes virtuales";
 answers[30] = 1;
 units[30] = ['67'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2897. ";
 preguntaids[30] = 2897


//  Id pregunta: 2850 Año de creación de pregunta: 2002
 questions[31]= "32)  En relaci&oacute;n con la gesti&oacute;n de prioridades entre perif&eacute;ricos para acceder a un recurso com&uacute;n,  cu&aacute;l de las siguientes sentencias es correcta?:";
 choices[31]= new Array();
 choices[31][0] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s utilizada cuando los dispositivos est&aacute;n conectados mediante bus al recurso com&uacute;n";
 choices[31][1] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[31][2] = "La gesti&oacute;n de prioridad programada es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[31][3] = "La gesti&oacute;n de prioridad h&iacute;brida emplea simult&aacute;neamente los conceptos de gesti&oacute;n distribuida y programada";
 answers[31] = 0;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2850. ";
 preguntaids[31] = 2850


//  Id pregunta: 2862 Año de creación de pregunta: 2002
 questions[32]= "33)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[32]= new Array();
 choices[32][0] = "Vectorizaci&oacute;n.";
 choices[32][1] = "Filtrado.";
 choices[32][2] = "Scanning.";
 choices[32][3] = "Overlay.";
 answers[32] = 3;
 units[32] = ['71'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2862. ";
 preguntaids[32] = 2862


//  Id pregunta: 2846 Año de creación de pregunta: 2002
 questions[33]= "34)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[33]= new Array();
 choices[33][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[33][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[33][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[33][3] = "Todas son ciertas";
 answers[33] = 3;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2846. ";
 preguntaids[33] = 2846


//  Id pregunta: 2883 Año de creación de pregunta: 2002
 questions[34]= "35)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[34]= new Array();
 choices[34][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[34][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[34][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[34][3] = "Todas las anteriores son ciertas";
 answers[34] = 1;
 units[34] = ['64', '65'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2883. ";
 preguntaids[34] = 2883


//  Id pregunta: 2861 Año de creación de pregunta: 2002
 questions[35]= "36)  En un perif&eacute;rico de la CPU se distinguen:";
 choices[35]= new Array();
 choices[35][0] = "Las se&ntilde;ales de control y el acceso directo a memoria (DMA)";
 choices[35][1] = "Se&ntilde;ales de direcci&oacute;n y de datos";
 choices[35][2] = "E/S y acceso directo a memoria (DMA)";
 choices[35][3] = "Dispositivo perif&eacute;rico y controlador del perif&eacute;rico";
 answers[35] = 3;
 units[35] = ['51'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2861. ";
 preguntaids[35] = 2861


//  Id pregunta: 2863 Año de creación de pregunta: 2002
 questions[36]= "37)  En un sistema de memoria virtual, cuando un proceso en ejecuci&oacute;n genera un 'fallo de p&aacute;gina':";
 choices[36]= new Array();
 choices[36][0] = "Es un error grave del sistema operativo que ocasiona el aborto del programa";
 choices[36][1] = "El sistema operativo busca en memoria secundaria (disco) la p&aacute;gina que falta y la carga en memoria";
 choices[36][2] = "El sistema operativo busca en memoria secundaria la p&aacute;gina que falta y la intenta llevar a memoria; si no hay espacio para la nueva p&aacute;gina, interrumpe la ejecuci&oacute;n del programa, dando el control a otro proceso";
 choices[36][3] = "Un proceso en ejecuci&oacute;n nunca puede generar un fallo de p&aacute;gina ya que de lo contrario todo el equipo 'caer&aacute;' produciendose una reinicializaci&oacute;n de la m&aacute;quina";
 answers[36] = 1;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2863. ";
 preguntaids[36] = 2863


//  Id pregunta: 2870 Año de creación de pregunta: 2002
 questions[37]= "38)  En un sistema vectorial:";
 choices[37]= new Array();
 choices[37][0] = "Los MFLOPS pico son mayores que los MIPS";
 choices[37][1] = "Los MIPS pico son los mismos que los MFLOPs pico";
 choices[37][2] = "Ambas variables no tienen relaci&oacute;n directa";
 choices[37][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[37] = 0;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2870. ";
 preguntaids[37] = 2870


//  Id pregunta: 2834 Año de creación de pregunta: 2002
 questions[38]= "39)  En la programaci&oacute;n orientada a objetos de los sistemas expertos:";
 choices[38]= new Array();
 choices[38][0] = "Bajo este paradigma los programas se estructuran en procedimientos orientados al proceso";
 choices[38][1] = "Los objetos se comunican entre s&iacute; mediante arcos";
 choices[38][2] = "La especificaci&oacute;n de un objeto es independiente de su implementaci&oacute;n";
 choices[38][3] = "La propiedad de herencia afecta no s&oacute;lo a la componente est&aacute;tica de los objetos (m&eacute;todos) sino tambi&eacute;n a su componente din&aacute;mica";
 answers[38] = 2;
 units[38] = ['68'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2834. ";
 preguntaids[38] = 2834


//  Id pregunta: 2874 Año de creación de pregunta: 2002
 questions[39]= "40)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[39]= new Array();
 choices[39][0] = "M debe ser de longitud fija";
 choices[39][1] = "no tiene por qu&eacute; conocerse H";
 choices[39][2] = "h debe ser de longitud fija";
 choices[39][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[39] = 2;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2874. ";
 preguntaids[39] = 2874


//  Id pregunta: 2905 Año de creación de pregunta: 2002
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[40]= new Array();
 choices[40][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[40][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[40][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[40][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[40] = 1;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2905. ";
 preguntaids[40] = 2905


//  Id pregunta: 2886 Año de creación de pregunta: 2002
 questions[41]= "42)  Entre las operaciones de desplazamiento existe la de desplazamiento l&oacute;gico, que consiste en:";
 choices[41]= new Array();
 choices[41][0] = "Los bits desplazados por un extremo se insertan por el otro.";
 choices[41][1] = "Los bits reemplazos son sustituidos por bits iguales al m&aacute;s cercano.";
 choices[41][2] = "Es igual a del desplazamiento aritm&eacute;tico.";
 choices[41][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[41] = 3;
 units[41] = ['50'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2886. ";
 preguntaids[41] = 2886


//  Id pregunta: 2876 Año de creación de pregunta: 2002
 questions[42]= "43)  En una representaci&oacute;n de tipo simb&oacute;lico de un Sistema Experto Basado en el Conocimiento, al conjunto de campos de informaci&oacute;n (ranuras) que describen un objeto se le da el nombre de:";
 choices[42]= new Array();
 choices[42][0] = "Regla de producci&oacute;n";
 choices[42][1] = "Restricci&oacute;n";
 choices[42][2] = "Red sem&aacute;ntica";
 choices[42][3] = "Marco";
 answers[42] = 3;
 units[42] = ['68'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2876. ";
 preguntaids[42] = 2876


//  Id pregunta: 2901 Año de creación de pregunta: 2002
 questions[43]= "44)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[43]= new Array();
 choices[43][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[43][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[43][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[43][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[43] = 1;
 units[43] = ['68'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2901. ";
 preguntaids[43] = 2901


//  Id pregunta: 2902 Año de creación de pregunta: 2002
 questions[44]= "45)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[44]= new Array();
 choices[44][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[44][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[44][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[44][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[44] = 2;
 units[44] = ['68'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2902. ";
 preguntaids[44] = 2902


//  Id pregunta: 2833 Año de creación de pregunta: 2002
 questions[45]= "46)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[45]= new Array();
 choices[45][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[45][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[45][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[45][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[45] = 2;
 units[45] = ['67'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2833. ";
 preguntaids[45] = 2833


//  Id pregunta: 2857 Año de creación de pregunta: 2002
 questions[46]= "47)  En un disco magn&eacute;tico,  &iquest;qu&eacute; son las pistas?:";
 choices[46]= new Array();
 choices[46][0] = "Un espacio peque&ntilde;o entre los sectores";
 choices[46][1] = "Las posiciones donde la cabeza se mueve cuando el disco se apaga";
 choices[46][2] = "El n&uacute;mero de 'platos' del disco";
 choices[46][3] = "Nada de lo anterior es correcto";
 answers[46] = 3;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2857. Una pista de unidad de disco es un camino circular en la superficie del disco magn&eacute;tico donde la informaci&oacute;n es grabada magn&eacute;ticamente y de la cual tambi&eacute;n se lee la informaci&oacute;n registrada.";
 preguntaids[46] = 2857


//  Id pregunta: 2881 Año de creación de pregunta: 2002
 questions[47]= "48)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[47]= new Array();
 choices[47][0] = "Tiene privilegios suficientes";
 choices[47][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[47][2] = "Tiene suficientes recursos disponibles";
 choices[47][3] = "No puede";
 answers[47] = 2;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2881. ";
 preguntaids[47] = 2881


//  Id pregunta: 2859 Año de creación de pregunta: 2002
 questions[48]= "49)  En un marco, al pedir el valor de un slot:";
 choices[48]= new Array();
 choices[48][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[48][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[48][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[48][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[48] = 3;
 units[48] = ['68'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2859. ";
 preguntaids[48] = 2859


//  Id pregunta: 2835 Año de creación de pregunta: 2002
 questions[49]= "50)  En la terminolog&iacute;a de software libre:";
 choices[49]= new Array();
 choices[49][0] = "El software libre no tiene porque ser gratis";
 choices[49][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[49][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[49][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[49] = 0;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2835. ";
 preguntaids[49] = 2835


//  Id pregunta: 2864 Año de creación de pregunta: 2002
 questions[50]= "51)  En un sistema fuertemente acoplado (tightly coupled):";
 choices[50]= new Array();
 choices[50][0] = "Los procesadores solo pueden acceder a los recursos mas cercanos, que ellos controlan";
 choices[50][1] = "Los procesadores pueden acceder a todos los recursos del sistema, mediante paso de mensajes";
 choices[50][2] = "El acceso es posible directamente para todos los procesadores, a la misma velocidad";
 choices[50][3] = "El acceso es posible directamente para todos los procesadores, pero con variaciones de velocidad seg&uacute;n la memoria accedida";
 answers[50] = 2;
 units[50] = ['56'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2864. ";
 preguntaids[50] = 2864


//  Id pregunta: 2843 Año de creación de pregunta: 2002
 questions[51]= "52)  En los discos &oacute;pticos (CD-ROM, WROM etc) la densidad de grabaci&oacute;n es:";
 choices[51]= new Array();
 choices[51][0] = "Constante";
 choices[51][1] = "Variable, dependiendo de la distancia al centro";
 choices[51][2] = "Depende del tipo";
 choices[51][3] = "Igual que en los discos magn&eacute;ticos";
 answers[51] = 0;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2843. ";
 preguntaids[51] = 2843


//  Id pregunta: 2867 Año de creación de pregunta: 2002
 questions[52]= "53)  En un sistema operativo Linux, el runlevel 6:";
 choices[52]= new Array();
 choices[52][0] = "Pone a la m&aacute;quina en modo multiusuario";
 choices[52][1] = "Pone a la m&aacute;quina en modo monousuario";
 choices[52][2] = "Prepara a la m&aacute;quina para reiniciar";
 choices[52][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[52] = 2;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2867. ";
 preguntaids[52] = 2867


//  Id pregunta: 2877 Año de creación de pregunta: 2002
 questions[53]= "54)  En una unidad de disco magn&eacute;tico, el tiempo de acceso a la informaci&oacute;n viene dado por:";
 choices[53]= new Array();
 choices[53][0] = "El tiempo de latencia";
 choices[53][1] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de latencia";
 choices[53][2] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de transferencia";
 choices[53][3] = "La longitud de la pista partido por la velocidad de rotaci&oacute;n m&aacute;s el tiempo de posicionamiento de la cabeza";
 answers[53] = 1;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2877. ";
 preguntaids[53] = 2877


//  Id pregunta: 2908 Año de creación de pregunta: 2002
 questions[54]= "55)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[54]= new Array();
 choices[54][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[54][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[54][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[54][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[54] = 2;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2908. ";
 preguntaids[54] = 2908


//  Id pregunta: 2868 Año de creación de pregunta: 2002
 questions[55]= "56)  En un sistema operativo Unix System V, &iquest;qu&eacute; tipo de informaci&oacute;n contiene un nodo-i?:";
 choices[55]= new Array();
 choices[55][0] = "Informaci&oacute;n sobre el tama&ntilde;o y nombre del sistema de ficheros";
 choices[55][1] = "Informaci&oacute;n sobre los derechos de acceso al fichero";
 choices[55][2] = "Datos del usuario";
 choices[55][3] = "Informaci&oacute;n sobre los usuarios del fichero";
 answers[55] = 1;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2868. ";
 preguntaids[55] = 2868


//  Id pregunta: 2873 Año de creación de pregunta: 2002
 questions[56]= "57)  En una operaci&oacute;n de grabaci&oacute;n sobre una cinta magn&eacute;tica:";
 choices[56]= new Array();
 choices[56][0] = "Se escribe un car&aacute;cter";
 choices[56][1] = "Se escribe un bloque";
 choices[56][2] = "Se lee un dato";
 choices[56][3] = "Se escribe un registro l&oacute;gico";
 answers[56] = 1;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2873. ";
 preguntaids[56] = 2873


//  Id pregunta: 2888 Año de creación de pregunta: 2002
 questions[57]= "58)  HTTL significa:";
 choices[57]= new Array();
 choices[57][0] = "L&oacute;gica Transistor-Transistor de alta velocidad.";
 choices[57][1] = "Lenguaje de transferencia HiperTexto.";
 choices[57][2] = "Lenguaje de Tokens HiperTexto.";
 choices[57][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[57] = 0;
 units[57] = ['50', '51'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2888. ";
 preguntaids[57] = 2888


//  Id pregunta: 2842 Año de creación de pregunta: 2002
 questions[58]= "59)  En los criptosistemas asim&eacute;tricos:";
 choices[58]= new Array();
 choices[58][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[58][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[58][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[58][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[58] = 2;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2842. La respuesta D para que fuera correcta deberia ser &quot;El emisor cifra con su clave privada y el receptor descifra con la clave p&uacute;blica del emisor&quot;";
 preguntaids[58] = 2842


//  Id pregunta: 2907 Año de creación de pregunta: 2002
 questions[59]= "60)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[59]= new Array();
 choices[59][0] = "Fuentes abiertas";
 choices[59][1] = "Gratuidad";
 choices[59][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[59][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[59] = 2;
 units[59] = ['66'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2907. ";
 preguntaids[59] = 2907


//  Id pregunta: 2885 Año de creación de pregunta: 2002
 questions[60]= "61)  Entre las formas de representaci&oacute;n param&eacute;trica del conocimiento se encuentra:";
 choices[60]= new Array();
 choices[60][0] = "Reglas de producci&oacute;n";
 choices[60][1] = "Reglas sem&aacute;nticas";
 choices[60][2] = "Redes neuronales";
 choices[60][3] = "Restricciones";
 answers[60] = 2;
 units[60] = ['68'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2885. ";
 preguntaids[60] = 2885


//  Id pregunta: 2896 Año de creación de pregunta: 2002
 questions[61]= "62)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[61]= new Array();
 choices[61][0] = "Permanencia";
 choices[61][1] = "Facilidad de reproducci&oacute;n";
 choices[61][2] = "Funcionamiento uniforme";
 choices[61][3] = "Eficiencia";
 answers[61] = 3;
 units[61] = ['68'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2896. ";
 preguntaids[61] = 2896


//  Id pregunta: 2898 Año de creación de pregunta: 2002
 questions[62]= "63)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[62]= new Array();
 choices[62][0] = "De verificaci&oacute;n.";
 choices[62][1] = "De descubrimiento.";
 choices[62][2] = "De predicci&oacute;n.";
 choices[62][3] = "De validaci&oacute;n.";
 answers[62] = 3;
 units[62] = ['72', '73'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2898. ";
 preguntaids[62] = 2898


//  Id pregunta: 2836 Año de creación de pregunta: 2002
 questions[63]= "64)  En la Unidad Central de Proceso (CPU):";
 choices[63]= new Array();
 choices[63][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[63][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[63][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[63][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[63] = 1;
 units[63] = ['51'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2836. ";
 preguntaids[63] = 2836


//  Id pregunta: 2889 Año de creación de pregunta: 2002
 questions[64]= "65)  HURD:";
 choices[64]= new Array();
 choices[64][0] = "Es el sistema operativo GNU por definici&oacute;n";
 choices[64][1] = "Utiliza arquitectura Microkernel";
 choices[64][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[64][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[64] = 2;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2889. ";
 preguntaids[64] = 2889


//  Id pregunta: 2851 Año de creación de pregunta: 2002
 questions[65]= "66)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[65]= new Array();
 choices[65][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[65][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[65][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[65][3] = "Si no existen grupos repetitivos";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2851. ";
 preguntaids[65] = 2851


//  Id pregunta: 2890 Año de creación de pregunta: 2002
 questions[66]= "67)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[66]= new Array();
 choices[66][0] = "System V y BSD";
 choices[66][1] = "System IV y System V";
 choices[66][2] = "System V y Posix";
 choices[66][3] = "Posix y Motif";
 answers[66] = 0;
 units[66] = ['57'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2890. ";
 preguntaids[66] = 2890


//  Id pregunta: 2884 Año de creación de pregunta: 2002
 questions[67]= "68)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[67]= new Array();
 choices[67][0] = "Estar orientado a objetos.";
 choices[67][1] = "Los datos de la empresa no son modificados.";
 choices[67][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[67][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[67] = 3;
 units[67] = ['72', '73'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2884. ";
 preguntaids[67] = 2884


//  Id pregunta: 2844 Año de creación de pregunta: 2002
 questions[68]= "69)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[68]= new Array();
 choices[68][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[68][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[68][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[68][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[68] = 3;
 units[68] = ['67'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2844. ";
 preguntaids[68] = 2844


//  Id pregunta: 2893 Año de creación de pregunta: 2002
 questions[69]= "70)  Indicar cu&aacute;l de las siguientes no es un tipo de georreferenciaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Directa.";
 choices[69][1] = "Discreta.";
 choices[69][2] = "Indirecta.";
 choices[69][3] = "Posicional.";
 answers[69] = 3;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2893. ";
 preguntaids[69] = 2893


//  Id pregunta: 2841 Año de creación de pregunta: 2002
 questions[70]= "71)  En los algoritmos de clave sim&eacute;trica:";
 choices[70]= new Array();
 choices[70][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[70][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[70][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[70][3] = "no pueden ser usados para autenticar a las partes";
 answers[70] = 1;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2841. ";
 preguntaids[70] = 2841


//  Id pregunta: 2878 Año de creación de pregunta: 2002
 questions[71]= "72)  En Unix el comando  pwd sirve para:";
 choices[71]= new Array();
 choices[71][0] = "Introducir la contrase&ntilde;a al sistema";
 choices[71][1] = "Saber cu&aacute;l es directorio donde se est&aacute; situado";
 choices[71][2] = "Cambiar nuestra contrase&ntilde;a";
 choices[71][3] = "Saber cu&aacute;l es nuestra impresora asignada";
 answers[71] = 1;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2878. ";
 preguntaids[71] = 2878


//  Id pregunta: 2840 Año de creación de pregunta: 2002
 questions[72]= "73)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[72]= new Array();
 choices[72][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[72][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[72][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[72][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[72] = 1;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2840. ";
 preguntaids[72] = 2840


//  Id pregunta: 2837 Año de creación de pregunta: 2002
 questions[73]= "74)  En las bases de datos orientadas a objeto, para cuantificar el movimiento existente entre la entrada a las bases de datos y la salida se emplean dos sistemas que se conocen como:";
 choices[73]= new Array();
 choices[73][0] = "Creatividad y destructividad de los objetos";
 choices[73][1] = "Tasa e incremento de variaci&oacute;n de los objetos";
 choices[73][2] = "Intervalo y tiempo de vida de los objetos";
 choices[73][3] = "Din&aacute;mica fuerte y din&aacute;mica d&eacute;bil";
 answers[73] = 3;
 units[73] = ['60'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2837. ";
 preguntaids[73] = 2837


//  Id pregunta: 2865 Año de creación de pregunta: 2002
 questions[74]= "75)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[74]= new Array();
 choices[74][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[74][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[74][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[74][3] = "Todas son falsas";
 answers[74] = 1;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2865. ";
 preguntaids[74] = 2865


