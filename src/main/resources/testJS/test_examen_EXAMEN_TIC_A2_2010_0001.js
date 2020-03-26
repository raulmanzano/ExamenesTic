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
//  Id pregunta: 7979 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[0]= new Array();
 choices[0][0] = "Perfil Jefe de Proyecto.";
 choices[0][1] = "Perfil Consultor.";
 choices[0][2] = "Perfil Analista.";
 choices[0][3] = "Perfil Programador.";
 answers[0] = 0;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7979. Examen TIC A2 2010";
 preguntaids[0] = 7979


//  Id pregunta: 7994 Año de creación de pregunta: 2011
 questions[1]= "2)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[1]= new Array();
 choices[1][0] = "IIS (Internet Information Services)";
 choices[1][1] = "Apache";
 choices[1][2] = "Joomla";
 choices[1][3] = "Microsoft Web Server";
 answers[1] = 0;
 units[1] = ['63'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7994. Examen TIC A2 2010";
 preguntaids[1] = 7994


//  Id pregunta: 7941 Año de creación de pregunta: 2011
 questions[2]= "3)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de:";
 choices[2]= new Array();
 choices[2][0] = "Enlace.";
 choices[2][1] = "Red.";
 choices[2][2] = "Transporte.";
 choices[2][3] = "Aplicaci&oacute;n.";
 answers[2] = 2;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7941. Examen TIC A2 2010";
 preguntaids[2] = 7941


//  Id pregunta: 7963 Año de creación de pregunta: 2011
 questions[3]= "4)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[3]= new Array();
 choices[3][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[3][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[3][2] = "GSM, HSUPA, HSDPA, UMTS.";
 choices[3][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[3] = 1;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7963. Examen TIC A2 2010";
 preguntaids[3] = 7963


//  Id pregunta: 7975 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[4]= new Array();
 choices[4][0] = "ISO 14000-1";
 choices[4][1] = "ISO 18001";
 choices[4][2] = "ISO 19005-1";
 choices[4][3] = "ISO 690";
 answers[4] = 2;
 units[4] = ['80'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7975. Examen TIC A2 2010";
 preguntaids[4] = 7975


//  Id pregunta: 7992 Año de creación de pregunta: 2011
 questions[5]= "6)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[5]= new Array();
 choices[5][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[5][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[5][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[5][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[5] = 2;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7992. Examen TIC A2 2010";
 preguntaids[5] = 7992


//  Id pregunta: 7945 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes definiciones explica de mejor manera lo que es el throughput de un sistema inform&aacute;tico?";
 choices[6]= new Array();
 choices[6][0] = "La cantidad de trabajo &uacute;til ejecutada por unidad de tiempo en un entorno de carga determinado.";
 choices[6][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede ejecutar por unidad de tiempo en un entorno de carga determinado.";
 choices[6][2] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n utilizados simult&aacute;neamente.";
 choices[6][3] = "Es el porcentaje de tiempo durante el cual se est&aacute; utilizando un componente del sistema inform&aacute;tico.";
 answers[6] = 0;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7945. Examen TIC A2 2010";
 preguntaids[6] = 7945


//  Id pregunta: 7967 Año de creación de pregunta: 2011
 questions[7]= "8)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP:";
 choices[7]= new Array();
 choices[7][0] = "Intercambio din&aacute;mico de claves.";
 choices[7][1] = "Autenticaci&oacute;n 802.1x";
 choices[7][2] = "Preshared Keys (PSK).";
 choices[7][3] = "Encriptaci&oacute;n AES.";
 answers[7] = 2;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7967. Examen TIC A2 2010";
 preguntaids[7] = 7967


//  Id pregunta: 7985 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[8]= new Array();
 choices[8][0] = "Diagrama de Clases.";
 choices[8][1] = "Flujograma de Sistemas.";
 choices[8][2] = "Flujograma de Programas.";
 choices[8][3] = "Diagrama de Flujo de Datos.";
 answers[8] = 2;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7985. Examen TIC A2 2010";
 preguntaids[8] = 7985


//  Id pregunta: 7983 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[9]= new Array();
 choices[9][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[9][1] = "PERT.";
 choices[9][2] = "CPM.";
 choices[9][3] = "El histograma de recursos.";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7983. Examen TIC A2 2010";
 preguntaids[9] = 7983


//  Id pregunta: 7995 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Para que sirve la palabra clave &quot;static&quot; en Java?";
 choices[10]= new Array();
 choices[10][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[10][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[10][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[10][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[10] = 1;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7995. Examen TIC A2 2010";
 preguntaids[10] = 7995


//  Id pregunta: 7986 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[11]= new Array();
 choices[11][0] = "El Diccionario de Datos.";
 choices[11][1] = "El Diagrama de Flujo de Datos.";
 choices[11][2] = "Las especificaciones de procesos.";
 choices[11][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[11] = 3;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 7986. Examen TIC A2 2010";
 preguntaids[11] = 7986


//  Id pregunta: 7956 Año de creación de pregunta: 2011
 questions[12]= "13)  Respecto a la Web 2.0 se puede afirmar que:";
 choices[12]= new Array();
 choices[12][0] = "Transforma software del web hacia la plataforma de escritorio.";
 choices[12][1] = "Se trata de una actitud evolutiva, m&aacute;s que una tecnolog&iacute;a.";
 choices[12][2] = "Pretende sustituir a las redes sociales, al manejar usuarios y comunidades.";
 choices[12][3] = "Encapsula APIs o XML para impedir que las aplicaciones puedan ser manipuladas por otros.";
 answers[12] = 1;
 units[12] = ['125'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7956. Examen TIC A2 2010";
 preguntaids[12] = 7956


//  Id pregunta: 7966 Año de creación de pregunta: 2011
 questions[13]= "14)  De las siguientes opciones, se&ntilde;ale aquella que representa la m&aacute;xima velocidad a la que un dispositivo inal&aacute;mbrico puede enviar datos conforme al est&aacute;ndar IEEE indicado:";
 choices[13]= new Array();
 choices[13][0] = "802.11a usando DSSS, a 11 Mbps.";
 choices[13][1] = "802.11a usando DSSS, a 54 Mbps.";
 choices[13][2] = "802.11b usando OFDM, a 54 Mbps";
 choices[13][3] = "802.11g usando OFDM, a 54 Mbps.";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7966. Examen TIC A2 2010";
 preguntaids[13] = 7966


//  Id pregunta: 7939 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[14]= new Array();
 choices[14][0] = "Gestor DHCP.";
 choices[14][1] = "MIB.";
 choices[14][2] = "Agente-SMAP.";
 choices[14][3] = "NMS.";
 answers[14] = 0;
 units[14] = ['112'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 7939. Examen TIC A2 2010";
 preguntaids[14] = 7939


//  Id pregunta: 7981 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[15]= new Array();
 choices[15][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[15][1] = "Staffing Size.";
 choices[15][2] = "Catalogaci&oacute;n.";
 choices[15][3] = "Diagrama de Gantt.";
 answers[15] = 2;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7981. Examen TIC A2 2010";
 preguntaids[15] = 7981


//  Id pregunta: 7955 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet?";
 choices[16]= new Array();
 choices[16][0] = "IETF.";
 choices[16][1] = "ICANN.";
 choices[16][2] = "IAB.";
 choices[16][3] = "IRTF.";
 answers[16] = 2;
 units[16] = ['48', '103'];
 blocks[16] = ['B1', 'B4'];
 comments[16] = "Id Pregunta: 7955. Examen TIC A2 2010";
 preguntaids[16] = 7955


//  Id pregunta: 7937 Año de creación de pregunta: 2011
 questions[17]= "18)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[17]= new Array();
 choices[17][0] = "No admite TCP/IP.";
 choices[17][1] = "No es un protocolo abierto.";
 choices[17][2] = "No requiere X.500.";
 choices[17][3] = "Ninguna de las anteriores es correcta.";
 answers[17] = 2;
 units[17] = ['116'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7937. Examen TIC A2 2010";
 preguntaids[17] = 7937


//  Id pregunta: 7938 Año de creación de pregunta: 2011
 questions[18]= "19)  Dada la red 193.163.14.192/27, podemos decir que:";
 choices[18]= new Array();
 choices[18][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[18][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[18][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[18][3] = "Es una red con direccionamiento privado.";
 answers[18] = 1;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7938. Examen TIC A2 2010";
 preguntaids[18] = 7938


//  Id pregunta: 8004 Año de creación de pregunta: 2011
 questions[19]= "20)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[19]= new Array();
 choices[19][0] = "Define su contenido.";
 choices[19][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[19][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[19][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[19] = 2;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 8004. Examen TIC A2 2010";
 preguntaids[19] = 8004


//  Id pregunta: 7959 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL?";
 choices[20]= new Array();
 choices[20][0] = "VDSL.";
 choices[20][1] = "DDSL.";
 choices[20][2] = "HDSL.";
 choices[20][3] = "ADSL.";
 answers[20] = 1;
 units[20] = ['108'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7959. Examen TIC A2 2010";
 preguntaids[20] = 7959


//  Id pregunta: 7964 Año de creación de pregunta: 2011
 questions[21]= "22)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es:";
 choices[21]= new Array();
 choices[21][0] = "GPRS.";
 choices[21][1] = "HSDPA.";
 choices[21][2] = "HSUPA.";
 choices[21][3] = "UMTS.";
 answers[21] = 2;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7964. Examen TIC A2 2010";
 preguntaids[21] = 7964


//  Id pregunta: 8006 Año de creación de pregunta: 2011
 questions[22]= "23)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA:";
 choices[22]= new Array();
 choices[22][0] = "WAVE.";
 choices[22][1] = "TrueCrypt.";
 choices[22][2] = "CSS Analyser.";
 choices[22][3] = "TAW.";
 answers[22] = 1;
 units[22] = ['42'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 8006. Examen TIC A2 2010";
 preguntaids[22] = 8006


//  Id pregunta: 7970 Año de creación de pregunta: 2011
 questions[23]= "24)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es:";
 choices[23]= new Array();
 choices[23][0] = "Ley 7/2010.";
 choices[23][1] = "Real Decreto 691/2010.";
 choices[23][2] = "Directiva 98/48/CE.";
 choices[23][3] = "Real Decreto 944/2005.";
 answers[23] = 1;
 units[23] = ['115', '121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7970. Examen TIC A2 2010";
 preguntaids[23] = 7970


//  Id pregunta: 7980 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[24]= new Array();
 choices[24][0] = "Los diagramas de Gantt.";
 choices[24][1] = "Program Evaluation &amp; Review Technique.";
 choices[24][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[24][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[24] = 1;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 7980. Examen TIC A2 2010";
 preguntaids[24] = 7980


//  Id pregunta: 7944 Año de creación de pregunta: 2011
 questions[25]= "26)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[25]= new Array();
 choices[25][0] = "Nivel 4 - HDLC.";
 choices[25][1] = "Nivel 1 - CSMA/CD.";
 choices[25][2] = "Nivel 3 - X.25.";
 choices[25][3] = "Nivel 2 - LAPB";
 answers[25] = 0;
 units[25] = ['105'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7944. Examen TIC A2 2010";
 preguntaids[25] = 7944


//  Id pregunta: 7942 Año de creación de pregunta: 2011
 questions[26]= "27)  El protocolo FTP es un protocolo:";
 choices[26]= new Array();
 choices[26][0] = "Seguro.";
 choices[26][1] = "Orientado a conexi&oacute;n.";
 choices[26][2] = "De nivel de enlace.";
 choices[26][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red.";
 answers[26] = 1;
 units[26] = ['103'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7942. Examen TIC A2 2010";
 preguntaids[26] = 7942


//  Id pregunta: 7989 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "&Aacute;rbol Binario.";
 choices[27][1] = "Lista.";
 choices[27][2] = "Lista enlazada.";
 choices[27][3] = "&Aacute;rbol-B.";
 answers[27] = 3;
 units[27] = ['68'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7989. Examen TIC A2 2010";
 preguntaids[27] = 7989


//  Id pregunta: 7940 Año de creación de pregunta: 2011
 questions[28]= "29)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[28]= new Array();
 choices[28][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[28][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[28][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[28][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[28] = 2;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7940. Examen TIC A2 2010";
 preguntaids[28] = 7940


//  Id pregunta: 7900 Año de creación de pregunta: 2011
 questions[29]= "30)  De las siguientes sentencias, indicar la correcta:";
 choices[29]= new Array();
 choices[29][0] = "Cuanto mayor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[29][1] = "Cuanto menor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[29][2] = "Cuando el Payback es mayor que el m&aacute;ximo per&iacute;odo definido por la empresa, entonces se debe aceptar el proyecto.";
 choices[29][3] = "El Payback de un sistema, no muestra si es atractivo o no para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 answers[29] = 1;
 units[29] = ['40'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7900. Examen TIC A2 2010";
 preguntaids[29] = 7900


//  Id pregunta: 8008 Año de creación de pregunta: 2011
 questions[30]= "31)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos?";
 choices[30]= new Array();
 choices[30][0] = "Redes de Shelman.";
 choices[30][1] = "Redes de Coperfield.";
 choices[30][2] = "Redes ART.";
 choices[30][3] = "M&aacute;quina de Gauss.";
 answers[30] = 2;
 units[30] = ['72'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8008. Examen TIC A2 2010";
 preguntaids[30] = 8008


//  Id pregunta: 7943 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast?";
 choices[31]= new Array();
 choices[31][0] = "256";
 choices[31][1] = "254";
 choices[31][2] = "30";
 choices[31][3] = "64";
 answers[31] = 1;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7943. Examen TIC A2 2010";
 preguntaids[31] = 7943


//  Id pregunta: 7961 Año de creación de pregunta: 2011
 questions[32]= "33)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[32]= new Array();
 choices[32][0] = "A 56 o 64 kbps.";
 choices[32][1] = "A 6.4, 8 o 11.8 kbps.";
 choices[32][2] = "&Uacute;nicamente a 8 kbps.";
 choices[32][3] = "A 5.3 o 6.4 kbps.";
 answers[32] = 1;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7961. Examen TIC A2 2010";
 preguntaids[32] = 7961


//  Id pregunta: 7982 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[33]= new Array();
 choices[33][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[33][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[33][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[33][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema.";
 answers[33] = 3;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7982. Examen TIC A2 2010";
 preguntaids[33] = 7982


//  Id pregunta: 7990 Año de creación de pregunta: 2011
 questions[34]= "35)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[34]= new Array();
 choices[34][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[34][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[34][2] = "No contiene ciclos.";
 choices[34][3] = "Es conexo y contiene un ciclo.";
 answers[34] = 1;
 units[34] = ['68'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7990. Examen TIC A2 2010";
 preguntaids[34] = 7990


//  Id pregunta: 8009 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[35]= new Array();
 choices[35][0] = "Predicci&oacute;n.";
 choices[35][1] = "Categorizaci&oacute;n.";
 choices[35][2] = "Clustering.";
 choices[35][3] = "Estad&iacute;sticas.";
 answers[35] = 2;
 units[35] = ['72'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8009. Examen TIC A2 2010";
 preguntaids[35] = 8009


//  Id pregunta: 7899 Año de creación de pregunta: 2011
 questions[36]= "37)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[36]= new Array();
 choices[36][0] = "VAN (Valor Actual Neto).";
 choices[36][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[36][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[36][3] = "El m&eacute;todo del payback";
 answers[36] = 0;
 units[36] = ['40'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 7899. Examen TIC A2 2010";
 preguntaids[36] = 7899


//  Id pregunta: 7978 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[37]= new Array();
 choices[37][0] = "Programaci&oacute;n Extrema (XP).";
 choices[37][1] = "SCRUM.";
 choices[37][2] = "RDS.";
 choices[37][3] = "Feature-Driven Development (FDD).";
 answers[37] = 2;
 units[37] = ['84'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7978. Examen TIC A2 2010";
 preguntaids[37] = 7978


//  Id pregunta: 7988 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[38]= new Array();
 choices[38][0] = "Merge sort.";
 choices[38][1] = "Bubble sort.";
 choices[38][2] = "Quicksort.";
 choices[38][3] = "Insertion sort.";
 answers[38] = 2;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 7988. Examen TIC A2 2010";
 preguntaids[38] = 7988


//  Id pregunta: 7993 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[39]= new Array();
 choices[39][0] = "Estereotipos.";
 choices[39][1] = "Valores etiquetados.";
 choices[39][2] = "Artefactos.";
 choices[39][3] = "Restricciones.";
 answers[39] = 2;
 units[39] = ['85', '86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7993. Examen TIC A2 2010";
 preguntaids[39] = 7993


//  Id pregunta: 7947 Año de creación de pregunta: 2011
 questions[40]= "41)  El protocolo MPLS (Multiprotocol Label Switching), &iquest;entre qu&eacute; capas del modelo OSI opera?";
 choices[40]= new Array();
 choices[40][0] = "Entre la capa f&iacute;sica y la de enlace de datos.";
 choices[40][1] = "Entre la capa de enlace de datos y la capa de red.";
 choices[40][2] = "Entre la capa de red y la capa de transporte.";
 choices[40][3] = "Entre la capa de transporte y las capas superiores.";
 answers[40] = 1;
 units[40] = ['107'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7947. Examen TIC A2 2010";
 preguntaids[40] = 7947


//  Id pregunta: 7952 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[41]= new Array();
 choices[41][0] = "XAdES-X.";
 choices[41][1] = "XAdES-X-L.";
 choices[41][2] = "XAdES-C.";
 choices[41][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[41] = 1;
 units[41] = ['77'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7952. Examen TIC A2 2010";
 preguntaids[41] = 7952


//  Id pregunta: 8001 Año de creación de pregunta: 2011
 questions[42]= "43)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[42]= new Array();
 choices[42][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[42][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[42][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[42][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[42] = 2;
 units[42] = ['92'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 8001. Examen TIC A2 2010";
 preguntaids[42] = 8001


//  Id pregunta: 7934 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[43]= new Array();
 choices[43][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite.";
 choices[43][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[43][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto.";
 choices[43][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[43] = 0;
 units[43] = ['47'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 7934. Examen TIC A2 2010";
 preguntaids[43] = 7934


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "SOAP envelope.";
 choices[44][1] = "SOAP binding framework";
 choices[44][2] = "SOAP encoding rules.";
 choices[44][3] = "SOAP  RPC representation.";
 answers[44] = 2;
 units[44] = ['55'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[44] = 7997


//  Id pregunta: 7976 Año de creación de pregunta: 2011
 questions[45]= "46)  Si hablamos del control automatizado de documentos electr&oacute;nicos a trav&eacute;s de su ciclo de vida completo en una organizaci&oacute;n, desde su creaci&oacute;n inidal hasta su archivado final, estamos hablando de:";
 choices[45]= new Array();
 choices[45][0] = "Desarrollo de software";
 choices[45][1] = "Gesti&oacute;n documental";
 choices[45][2] = "Sistemas gestores de base de datos";
 choices[45][3] = "Sistemas de soporte a la decisi&oacute;n";
 answers[45] = 1;
 units[45] = ['99'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7976. Examen TIC A2 2010";
 preguntaids[45] = 7976


//  Id pregunta: 7949 Año de creación de pregunta: 2011
 questions[46]= "47)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[46]= new Array();
 choices[46][0] = "El est&aacute;ndar criptogr&aacute;fico RSA.";
 choices[46][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[46][2] = "El intercambio de claves Diffie-Hellman.";
 choices[46][3] = "La sintaxis del mensaje criptogr&aacute;fico.";
 answers[46] = 2;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7949. Examen TIC A2 2010";
 preguntaids[46] = 7949


//  Id pregunta: 8005 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[47]= new Array();
 choices[47][0] = "Accesibilidad";
 choices[47][1] = "Correcci&oacute;n";
 choices[47][2] = "Reusabilidad";
 choices[47][3] = "Interoperabilidad";
 answers[47] = 0;
 units[47] = ['92', '93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 8005. Examen TIC A2 2010";
 preguntaids[47] = 8005


//  Id pregunta: 7958 Año de creación de pregunta: 2011
 questions[48]= "49)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[48]= new Array();
 choices[48][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[48][1] = "El n&uacute;mero de canales de alta velocidad disponibles.";
 choices[48][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[48][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[48] = 3;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7958. Examen TIC A2 2010";
 preguntaids[48] = 7958


//  Id pregunta: 7965 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[49]= new Array();
 choices[49][0] = "2,4 GHz y hasta 11Mbps.";
 choices[49][1] = "5 GHz y hasta 54Mbps.";
 choices[49][2] = "2,4 GHz y hasta 54 Mbps.";
 choices[49][3] = "5 GHz y hasta 11 Mbps.";
 answers[49] = 1;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 7965. Examen TIC A2 2010";
 preguntaids[49] = 7965


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[50]= new Array();
 choices[50][0] = "Unity Application Block,";
 choices[50][1] = "Logging Application Block.";
 choices[50][2] = "Ajax Control Toolkit";
 choices[50][3] = "Cached XML Data Mapper";
 answers[50] = 0;
 units[50] = ['63', '124'];
 blocks[50] = ['B2', 'B4'];
 comments[50] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[50] = 7996


//  Id pregunta: 7987 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[51]= new Array();
 choices[51][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[51][1] = "Evitar datos redundantes.";
 choices[51][2] = "Proteger la integridad de los datos.";
 choices[51][3] = "Facilitar el uso al usuano final.";
 answers[51] = 0;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 7987. Examen TIC A2 2010";
 preguntaids[51] = 7987


//  Id pregunta: 7957 Año de creación de pregunta: 2011
 questions[52]= "53)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[52]= new Array();
 choices[52][0] = "IANA.";
 choices[52][1] = "NIST.";
 choices[52][2] = "ICANN.";
 choices[52][3] = "IETF.";
 answers[52] = 2;
 units[52] = ['103'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7957. Examen TIC A2 2010";
 preguntaids[52] = 7957


//  Id pregunta: 7999 Año de creación de pregunta: 2011
 questions[53]= "54)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[53]= new Array();
 choices[53][0] = "App_Data.";
 choices[53][1] = "Bin.";
 choices[53][2] = "App_WebReferences";
 choices[53][3] = "Compilation";
 answers[53] = 1;
 units[53] = ['63', '124'];
 blocks[53] = ['B2', 'B4'];
 comments[53] = "Id Pregunta: 7999. Examen TIC A2 2010";
 preguntaids[53] = 7999


//  Id pregunta: 7998 Año de creación de pregunta: 2011
 questions[54]= "55)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[54]= new Array();
 choices[54][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[54][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[54][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[54][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[54] = 0;
 units[54] = ['63', '124'];
 blocks[54] = ['B2', 'B4'];
 comments[54] = "Id Pregunta: 7998. Examen TIC A2 2010";
 preguntaids[54] = 7998


//  Id pregunta: 7969 Año de creación de pregunta: 2011
 questions[55]= "56)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[55]= new Array();
 choices[55][0] = "15";
 choices[55][1] = "105";
 choices[55][2] = "210";
 choices[55][3] = "30.";
 answers[55] = 1;
 units[55] = ['76'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7969. Examen TIC A2 2010";
 preguntaids[55] = 7969


//  Id pregunta: 7984 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[56]= new Array();
 choices[56][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[56][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[56][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[56][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[56] = 3;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 7984. Examen TIC A2 2010";
 preguntaids[56] = 7984


//  Id pregunta: 7933 Año de creación de pregunta: 2011
 questions[57]= "58)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica?";
 choices[57]= new Array();
 choices[57][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[57][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[57][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[57][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n.";
 answers[57] = 1;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7933. Examen TIC A2 2010";
 preguntaids[57] = 7933


//  Id pregunta: 8007 Año de creación de pregunta: 2011
 questions[58]= "59)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)?";
 choices[58]= new Array();
 choices[58][0] = "Redes neuronales artificiales.";
 choices[58][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[58][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[58][3] = "Regla de Inducci&oacute;n.";
 answers[58] = 2;
 units[58] = ['72'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8007. Examen TIC A2 2010";
 preguntaids[58] = 8007


//  Id pregunta: 7946 Año de creación de pregunta: 2011
 questions[59]= "60)  Una direcci&oacute;n IP identifica:";
 choices[59]= new Array();
 choices[59][0] = "Una conexi&oacute;n.";
 choices[59][1] = "Una interfaz de tarjeta de red.";
 choices[59][2] = "Un ordenador.";
 choices[59][3] = "Una aplicaci&oacute;n interactiva.";
 answers[59] = 1;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7946. Examen TIC A2 2010";
 preguntaids[59] = 7946


//  Id pregunta: 8003 Año de creación de pregunta: 2011
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3):";
 choices[60]= new Array();
 choices[60][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[60][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[60][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[60][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[60] = 1;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 8003. Examen TIC A2 2010";
 preguntaids[60] = 8003


//  Id pregunta: 7962 Año de creación de pregunta: 2011
 questions[61]= "62)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[61]= new Array();
 choices[61][0] = "H.261.";
 choices[61][1] = "H.320.";
 choices[61][2] = "H.221.";
 choices[61][3] = "H.323.";
 answers[61] = 3;
 units[61] = ['107'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7962. Examen TIC A2 2010";
 preguntaids[61] = 7962


//  Id pregunta: 7953 Año de creación de pregunta: 2011
 questions[62]= "63)  EI ataque conocido como &quot;ARP Spoofing&quot;:";
 choices[62]= new Array();
 choices[62][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[62][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs.";
 choices[62][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo.";
 choices[62][3] = "Puede impedirse mediante DHCP snooping.";
 answers[62] = 3;
 units[62] = ['119'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7953. Examen TIC A2 2010";
 preguntaids[62] = 7953


//  Id pregunta: 7951 Año de creación de pregunta: 2011
 questions[63]= "64)  En los sistemas criptogr&aacute;ficos h&iacute;bridos:";
 choices[63]= new Array();
 choices[63][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[63][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico";
 choices[63][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[63][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[63] = 2;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7951. Examen TIC A2 2010";
 preguntaids[63] = 7951


//  Id pregunta: 7991 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[64]= new Array();
 choices[64][0] = "Pruebas unitarias.";
 choices[64][1] = "Pruebas del Sistema.";
 choices[64][2] = "Pruebas de Implantaci&oacute;n.";
 choices[64][3] = "Pruebas de Regresi&oacute;n.";
 answers[64] = 3;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7991. Examen TIC A2 2010";
 preguntaids[64] = 7991


//  Id pregunta: 8002 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor?";
 choices[65]= new Array();
 choices[65][0] = "JavaScript";
 choices[65][1] = "Applets";
 choices[65][2] = "JSP";
 choices[65][3] = "VisualScript";
 answers[65] = 2;
 units[65] = ['62'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8002. Examen TIC A2 2010";
 preguntaids[65] = 8002


//  Id pregunta: 7948 Año de creación de pregunta: 2011
 questions[66]= "67)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener:";
 choices[66]= new Array();
 choices[66][0] = "Retardo constante y tasa de bit variable.";
 choices[66][1] = "Retardo variable y tasa de bit constante.";
 choices[66][2] = "Retardo variable y tasa de bit variable.";
 choices[66][3] = "Retardo constante y tasa de bit constante.";
 answers[66] = 0;
 units[66] = ['107'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7948. Examen TIC A2 2010";
 preguntaids[66] = 7948


//  Id pregunta: 8000 Año de creación de pregunta: 2011
 questions[67]= "68)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[67]= new Array();
 choices[67][0] = "Sun Microsystems.";
 choices[67][1] = "Microsoft.";
 choices[67][2] = "Google.";
 choices[67][3] = "IBM.";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8000. Examen TIC A2 2010";
 preguntaids[67] = 8000


//  Id pregunta: 7954 Año de creación de pregunta: 2011
 questions[68]= "69)  Un documento firmado digitalmente incluye la huella digital:";
 choices[68]= new Array();
 choices[68][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[68][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[68][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[68][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[68] = 2;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7954. Examen TIC A2 2010";
 preguntaids[68] = 7954


//  Id pregunta: 7968 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo?";
 choices[69]= new Array();
 choices[69][0] = "//";
 choices[69][1] = "// JOB";
 choices[69][2] = "//*";
 choices[69][3] = "// DD";
 answers[69] = 0;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7968. Examen TIC A2 2010";
 preguntaids[69] = 7968


//  Id pregunta: 7950 Año de creación de pregunta: 2011
 questions[70]= "71)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[70]= new Array();
 choices[70][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[70][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[70][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[70][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[70] = 2;
 units[70] = ['119'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7950. Examen TIC A2 2010";
 preguntaids[70] = 7950


//  Id pregunta: 7977 Año de creación de pregunta: 2011
 questions[71]= "72)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[71]= new Array();
 choices[71][0] = "Upper CASE (U-CASE)";
 choices[71][1] = "MetaCASE";
 choices[71][2] = "CAST (Computer-Aided Software Testing)";
 choices[71][3] = "IPSE (Integrated Programming Support Environment)";
 answers[71] = 1;
 units[71] = ['97'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7977. Examen TIC A2 2010";
 preguntaids[71] = 7977


//  Id pregunta: 7935 Año de creación de pregunta: 2011
 questions[72]= "73)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto:";
 choices[72]= new Array();
 choices[72][0] = "162";
 choices[72][1] = "126";
 choices[72][2] = "161";
 choices[72][3] = "25";
 answers[72] = 0;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7935. Examen TIC A2 2010";
 preguntaids[72] = 7935


//  Id pregunta: 7960 Año de creación de pregunta: 2011
 questions[73]= "74)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz?";
 choices[73]= new Array();
 choices[73][0] = "G.711.";
 choices[73][1] = "G.726.";
 choices[73][2] = "G.728.";
 choices[73][3] = "G.729.";
 answers[73] = 1;
 units[73] = ['122'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7960. Examen TIC A2 2010";
 preguntaids[73] = 7960


//  Id pregunta: 7936 Año de creación de pregunta: 2011
 questions[74]= "75)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[74]= new Array();
 choices[74][0] = "Dispositivos administrados.";
 choices[74][1] = "Agentes.";
 choices[74][2] = "Sistemas administradores de red (NMS).";
 choices[74][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[74] = 3;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7936. Examen TIC A2 2010";
 preguntaids[74] = 7936


