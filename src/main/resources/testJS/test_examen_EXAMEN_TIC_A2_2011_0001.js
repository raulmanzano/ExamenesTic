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
//  Id pregunta: 8715 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[0]= new Array();
 choices[0][0] = "Memoria RAM";
 choices[0][1] = "Pantalla t&aacute;ctil.";
 choices[0][2] = "Tarjeta de sonido.";
 choices[0][3] = "Disco duro.";
 answers[0] = 1;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8715. Examen TICA2-2011";
 preguntaids[0] = 8715


//  Id pregunta: 1542 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; indica el campo &quot;Data Offset&quot; en el segmento TCP?";
 choices[1]= new Array();
 choices[1][0] = "Este campo no pertenece a TCP.";
 choices[1][1] = "Indica d&oacute;nde terminan los datos.";
 choices[1][2] = "Indica d&oacute;nde empiezan los datos.";
 choices[1][3] = "Indica el n&uacute;mero de campos de control.";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1542. ";
 preguntaids[1] = 1542


//  Id pregunta: 8710 Año de creación de pregunta: 2013
 questions[2]= "3)  Si se quisiera un middleware para un grid se elegir&iacute;a:";
 choices[2]= new Array();
 choices[2][0] = "Globus Toolkit.";
 choices[2][1] = "Cluster Veritas.";
 choices[2][2] = "Arduino.";
 choices[2][3] = "Data protector.";
 answers[2] = 0;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8710. Examen TICA2-2011";
 preguntaids[2] = 8710


//  Id pregunta: 1544 Año de creación de pregunta: 2016
 questions[3]= "4)  La Especificaci&oacute;n del W3C para optimizar la Transmisi&oacute;n de Mensajes para SOAP es:";
 choices[3]= new Array();
 choices[3][0] = "RRSHB";
 choices[3][1] = "CORBA";
 choices[3][2] = "MTOM";
 choices[3][3] = "SOAP HEADER";
 answers[3] = 2;
 units[3] = ['55'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1544. ";
 preguntaids[3] = 1544


//  Id pregunta: 1546 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; parte de un sistema experto efect&uacute;a el razonamiento a partir de los datos?";
 choices[4]= new Array();
 choices[4][0] = "Base de Conocimiento.";
 choices[4][1] = "Motor de Inferencia.";
 choices[4][2] = "Interfaz de Adquisici&oacute;n.";
 choices[4][3] = "M&oacute;dulo de Inteligencia artificial.";
 answers[4] = 1;
 units[4] = ['68'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1546. ";
 preguntaids[4] = 1546


//  Id pregunta: 1554 Año de creación de pregunta: 2016
 questions[5]= "6)  CMMI es un modelo para la mejora y evaluaci&oacute;n de procesos para el desarrollo, mantenimiento y operaci&oacute;n de sistemas de software. &iquest;Cu&aacute;l de las siguientes NO es un &aacute;rea del modelo CMMI?";
 choices[5]= new Array();
 choices[5][0] = "Desarrollo";
 choices[5][1] = "Servicios";
 choices[5][2] = "Adquisici&oacute;n";
 choices[5][3] = "Pruebas";
 answers[5] = 3;
 units[5] = ['93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1554. ";
 preguntaids[5] = 1554


//  Id pregunta: 1553 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es SQLMetal?";
 choices[6]= new Array();
 choices[6][0] = "Es un lenguaje declarativo de acceso a bases de datos relacionales.";
 choices[6][1] = "Es una herramienta de generaci&oacute;n de c&oacute;digo de LINQ.";
 choices[6][2] = "Es un conjunto de extensiones a ANSI SQL.";
 choices[6][3] = "Es un est&aacute;ndar de acceso a bases de datos.";
 answers[6] = 1;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1553. ";
 preguntaids[6] = 1553


//  Id pregunta: 8717 Año de creación de pregunta: 2013
 questions[7]= "8)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[7]= new Array();
 choices[7][0] = "LUN";
 choices[7][1] = "ESX";
 choices[7][2] = "HBA";
 choices[7][3] = "IDS";
 answers[7] = 2;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8717. Examen TICA2-2011";
 preguntaids[7] = 8717


//  Id pregunta: 8845 Año de creación de pregunta: 2013
 questions[8]= "9)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[8]= new Array();
 choices[8][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n).";
 choices[8][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[8][2] = "Dos (datos estructurados y datos no estructurados).";
 choices[8][3] = "Tres (datos, voz y video).";
 answers[8] = 1;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8845. Examen TIC AGE A2 2011 libre";
 preguntaids[8] = 8845


//  Id pregunta: 8784 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[9]= new Array();
 choices[9][0] = "1000BASE-SX";
 choices[9][1] = "1000BASE-LX";
 choices[9][2] = "1000BASE-TX";
 choices[9][3] = "1000BASE-CX";
 answers[9] = 1;
 units[9] = ['106'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8784. Examen TIC A2 2011";
 preguntaids[9] = 8784


//  Id pregunta: 8840 Año de creación de pregunta: 2013
 questions[10]= "11)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[10]= new Array();
 choices[10][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[10][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[10][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[10][3] = "Ninguna de las respuestas es correcta.";
 answers[10] = 0;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8840. Examen TIC A2 2011";
 preguntaids[10] = 8840


//  Id pregunta: 8725 Año de creación de pregunta: 2013
 questions[11]= "12)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[11]= new Array();
 choices[11][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[11][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[11][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[11][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[11] = 3;
 units[11] = ['50'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8725. Examen TICA2-2011";
 preguntaids[11] = 8725


//  Id pregunta: 1561 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un framework que permita el acceso y manipulaci&oacute;n de datos en una base de datos relacional?";
 choices[12]= new Array();
 choices[12][0] = "Apache Torque.";
 choices[12][1] = "MyBatis.";
 choices[12][2] = "Sun Mapper.";
 choices[12][3] = "NHibernate.";
 answers[12] = 2;
 units[12] = ['60'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1561. ";
 preguntaids[12] = 1561


//  Id pregunta: 8727 Año de creación de pregunta: 2013
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[13]= new Array();
 choices[13][0] = "Alianzas.";
 choices[13][1] = "Compartici&oacute;n de recursos.";
 choices[13][2] = "Subsidiariedad.";
 choices[13][3] = "Ninguno de los anteriores.";
 answers[13] = 2;
 units[13] = ['43'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 8727. Examen TICA2-2011";
 preguntaids[13] = 8727


//  Id pregunta: 1548 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta que se corresponde con un nivel de cohesi&oacute;n definido en M&eacute;trica v3:";
 choices[14]= new Array();
 choices[14][0] = "Comunicaci&oacute;n.";
 choices[14][1] = "Control.";
 choices[14][2] = "Marca.";
 choices[14][3] = "Datos.";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1548. ";
 preguntaids[14] = 1548


//  Id pregunta: 1569 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de entre los protocolos que componen SSL reside al nivel m&aacute;s bajo y proporciona el encapsulado a los protocolos del nivel superior:";
 choices[15]= new Array();
 choices[15][0] = "Record.";
 choices[15][1] = "Handshake.";
 choices[15][2] = "Alert.";
 choices[15][3] = "Change Cipher Spec.";
 answers[15] = 0;
 units[15] = ['120'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1569. ";
 preguntaids[15] = 1569


//  Id pregunta: 8719 Año de creación de pregunta: 2013
 questions[16]= "17)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS?";
 choices[16]= new Array();
 choices[16][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel.";
 choices[16][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas.";
 choices[16][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento.";
 choices[16][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[16] = 2;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8719. Examen TICA2-2011";
 preguntaids[16] = 8719


//  Id pregunta: 8721 Año de creación de pregunta: 2013
 questions[17]= "18)  Indique la frase correcta sobre la gesti&oacute;n de procesos en los sistemas UNIX:";
 choices[17]= new Array();
 choices[17][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits";
 choices[17][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[17][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[17][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[17] = 1;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8721. Examen TICA2-2011";
 preguntaids[17] = 8721


//  Id pregunta: 8988 Año de creación de pregunta: 2013
 questions[18]= "19)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[18]= new Array();
 choices[18][0] = "Interoperabilidad, en general.";
 choices[18][1] = "Interoperabilidad organizativa.";
 choices[18][2] = "Interoperabilidad t&eacute;cnica.";
 choices[18][3] = "Interoperabilidad sem&aacute;ntica.";
 answers[18] = 3;
 units[18] = ['43'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8988. OBSOLETA";
 preguntaids[18] = 8988


//  Id pregunta: 1567 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; se entiende por tiempo de convergencia cuando hablamos de routers?";
 choices[19]= new Array();
 choices[19][0] = "Tiempo que tardan dos datagramas que siguen distinto encaminamiento en llegar al router final.";
 choices[19][1] = "Rapidez con la cual los routers de la red comparten informaci&oacute;n de enrutamiento.";
 choices[19][2] = "Tiempo que tarda un paquete en alcanzar su destino atravesando el m&iacute;nimo n&uacute;mero de routers posible.";
 choices[19][3] = "Tiempo medio que tarda un paquete en alcanzar cualquier nodo de la red, desde un mismo origen.";
 answers[19] = 1;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1567. ";
 preguntaids[19] = 1567


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[20][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[20][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[20][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[20] = 1;
 units[20] = ['14'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 1534. ";
 preguntaids[20] = 1534


//  Id pregunta: 8723 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[21]= new Array();
 choices[21][0] = "ISA";
 choices[21][1] = "HTI";
 choices[21][2] = "PCI";
 choices[21][3] = "AGP";
 answers[21] = 1;
 units[21] = ['51'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8723. Examen TICA2-2011";
 preguntaids[21] = 8723


//  Id pregunta: 1545 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes respuestas NO identifica a un servidor OLAP?";
 choices[22]= new Array();
 choices[22][0] = "icCube.";
 choices[22][1] = "Essbase.";
 choices[22][2] = "Oracle HyperCube.";
 choices[22][3] = "Mondrian OLAP server.";
 answers[22] = 2;
 units[22] = ['72'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1545. ";
 preguntaids[22] = 1545


//  Id pregunta: 1555 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;En cu&aacute;l de los siguientes est&aacute;ndares NO se basa la metodolog&iacute;a M&eacute;trica Versi&oacute;n 3?:";
 choices[23]= new Array();
 choices[23][0] = "ISO 12.207";
 choices[23][1] = "ISO/IEC TR 15.504/SPICE";
 choices[23][2] = "UNE-EN-ISO 9001:2000";
 choices[23][3] = "ISO 17799";
 answers[23] = 3;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1555. ";
 preguntaids[23] = 1555


//  Id pregunta: 1535 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la LOPD, &iquest;qu&eacute; es el Registro General de Protecci&oacute;n de Datos?";
 choices[24]= new Array();
 choices[24][0] = "Se trata de un fichero gen&eacute;rico, presente en cada una de las diferentes Agencias de Protecci&oacute;n de Datos, en el que se inscriben, a su vez, los ficheros de datos personales.";
 choices[24][1] = "Es la denominaci&oacute;n oficial del registro electr&oacute;nico de la Agencia Espa&ntilde;ola de Protecci&oacute;n de datos.";
 choices[24][2] = "Es un &oacute;rgano integrado en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[24][3] = "Es la denominaci&oacute;n oficial del conjunto de buenas pr&aacute;cticas para la protecci&oacute;n de datos personales, establecidas por la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[24] = 2;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 1535. ";
 preguntaids[24] = 1535


//  Id pregunta: 1552 Año de creación de pregunta: 2016
 questions[25]= "26)  Cocoa es el conjunto de frameworks orientados a objetos que permiten el desarrollo de aplicaciones nativas para Mac OS X. &iquest;C&oacute;mo se llama la versi&oacute;n para iOS?";
 choices[25]= new Array();
 choices[25][0] = "Cocoa Touch.";
 choices[25][1] = "MiniCocoa.";
 choices[25][2] = "Cocoa iOS.";
 choices[25][3] = "iTunes.";
 answers[25] = 0;
 units[25] = ['59'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1552. ";
 preguntaids[25] = 1552


//  Id pregunta: 1549 Año de creación de pregunta: 2016
 questions[26]= "27)  LINQ es una extensi&oacute;n al framework de la plataforma .NET. &iquest;Qu&eacute; funcionalidad a&ntilde;ade este componente?";
 choices[26]= new Array();
 choices[26][0] = "A&ntilde;ade una capa de seguridad al runtime, centralizadas en una clase proveedora externa al programa en ejecuci&oacute;n.";
 choices[26][1] = "Permite la encapsulaci&oacute;n autom&aacute;tica de objetos COM a objetos del runtime, permitiendo su manipulaci&oacute;n de manera natural.";
 choices[26][2] = "Hace posible la Programaci&oacute;n Orientada a Aspectos, exponiendo los &quot;concerns&quot; definidos a todas las capas de la aplicaci&oacute;n.";
 choices[26][3] = "Permite efectuar nativamente en el lenguaje de programaci&oacute;n consultas a bases de datos relacionales y otras fuentes.";
 answers[26] = 3;
 units[26] = ['63'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1549. ";
 preguntaids[26] = 1549


//  Id pregunta: 8718 Año de creación de pregunta: 2013
 questions[27]= "28)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[27]= new Array();
 choices[27][0] = "RAID 6+0";
 choices[27][1] = "RAID 5+0";
 choices[27][2] = "RAID 5+1";
 choices[27][3] = "RAID 0+1";
 answers[27] = 3;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8718. Examen TICA2-2011";
 preguntaids[27] = 8718


//  Id pregunta: 1536 Año de creación de pregunta: 2016
 questions[28]= "29)  En el Real Decreto 1720/2007, se establecen las medidas de seguridad que se deben aplicar a los ficheros y tratamientos automatizados. Indica que medida se corresponde con una medida de nivel b&aacute;sico seg&uacute;n se establece en el citado Real Decreto:";
 choices[28]= new Array();
 choices[28][0] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[28][1] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 choices[28][2] = "El responsable del fichero o tratamiento adoptar&aacute; las medidas necesarias para que el personal conozca de una forma comprensible las normas de seguridad que afecten al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[28][3] = "En el documento de seguridad deber&aacute;n designarse uno o varios responsables de seguridad encargados de coordinar y controlar las medidas definidas en el mismo.";
 answers[28] = 2;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 1536. ";
 preguntaids[28] = 1536


//  Id pregunta: 1565 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; tipo de registros DNS recomienda utilizar la RFC 3363 en relaci&oacute;n a IPv6?";
 choices[29]= new Array();
 choices[29][0] = "ALIAS";
 choices[29][1] = "AAAA";
 choices[29][2] = "CNAME";
 choices[29][3] = "HIPV6";
 answers[29] = 1;
 units[29] = ['109'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1565. ";
 preguntaids[29] = 1565


//  Id pregunta: 8724 Año de creación de pregunta: 2013
 questions[30]= "31)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[30]= new Array();
 choices[30][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[30][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[30][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[30][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[30] = 2;
 units[30] = ['54'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8724. Examen TICA2-2011";
 preguntaids[30] = 8724


//  Id pregunta: 1550 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo del objeto XMLHttpRequest de Javascript? Para la respuesta no tenga en cuenta los posibles par&aacute;metros que pueda contener la llamada al mismo.";
 choices[31]= new Array();
 choices[31][0] = "open";
 choices[31][1] = "stop";
 choices[31][2] = "setRequestHeader";
 choices[31][3] = "getAllResponseHeaders";
 answers[31] = 1;
 units[31] = ['74'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1550. ";
 preguntaids[31] = 1550


//  Id pregunta: 1543 Año de creación de pregunta: 2016
 questions[32]= "33)  El modelo de ciclo de vida software orientado a objetos en el que el concepto clave consiste en reunir un conjunto de clases relacionadas entre s&iacute; con un objetivo com&uacute;n es:";
 choices[32]= new Array();
 choices[32][0] = "El modelo fuente.";
 choices[32][1] = "El modelo com&uacute;n.";
 choices[32][2] = "El modelo remolino.";
 choices[32][3] = "El modelo de agrupamiento.";
 answers[32] = 3;
 units[32] = ['82'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1543. ";
 preguntaids[32] = 1543


//  Id pregunta: 1566 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes es una conocida aplicaci&oacute;n de servidor de DNS?";
 choices[33]= new Array();
 choices[33][0] = "BISS";
 choices[33][1] = "DNSOPI";
 choices[33][2] = "DHCP";
 choices[33][3] = "BIND";
 answers[33] = 3;
 units[33] = ['103'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1566. ";
 preguntaids[33] = 1566


//  Id pregunta: 8720 Año de creación de pregunta: 2013
 questions[34]= "35)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es:";
 choices[34]= new Array();
 choices[34][0] = "32MB";
 choices[34][1] = "1GB";
 choices[34][2] = "2GB";
 choices[34][3] = "4GB";
 answers[34] = 3;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8720. Examen TICA2-2011";
 preguntaids[34] = 8720


//  Id pregunta: 8726 Año de creación de pregunta: 2013
 questions[35]= "36)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows:";
 choices[35]= new Array();
 choices[35][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[35][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[35][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[35][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[35] = 3;
 units[35] = ['58'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8726. Examen TICA2-2011";
 preguntaids[35] = 8726


//  Id pregunta: 8785 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[36]= new Array();
 choices[36][0] = "Semiacoplado";
 choices[36][1] = "Empotrado";
 choices[36][2] = "Acoplado";
 choices[36][3] = "Org&aacute;nico";
 answers[36] = 2;
 units[36] = ['94'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8785. Examen TIC A2 2011";
 preguntaids[36] = 8785


//  Id pregunta: 1539 Año de creación de pregunta: 2016
 questions[37]= "38)  Los controles ActiveX pueden ser escritos:";
 choices[37]= new Array();
 choices[37][0] = "&Uacute;nicamente en Microsoft Visual Basic, al ser tecnolog&iacute;a propietaria.";
 choices[37][1] = "&Uacute;nicamente en Java, dada su enfoque el entorno web reusable.";
 choices[37][2] = "&Uacute;nicamente en C++, para proveer neutralidad tecnol&oacute;gica frente a los modelos J2EE y .Net.";
 choices[37][3] = "En casi todos los lenguajes de programaci&oacute;n, incluyendo Java, C++ y Microsoft Visual Basic.";
 answers[37] = 3;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1539. ";
 preguntaids[37] = 1539


//  Id pregunta: 1568 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l es el est&aacute;ndar del IEEE conocido como PoE+ (Power over Ethernet Plus) que aumenta la potencia de entrega respecto a su predecesor?";
 choices[38]= new Array();
 choices[38][0] = "IEEE 802.3af";
 choices[38][1] = "IEEE 802.3ab";
 choices[38][2] = "IEEE 802.3at";
 choices[38][3] = "IEEE 802.1ba";
 answers[38] = 2;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1568. ";
 preguntaids[38] = 1568


//  Id pregunta: 8713 Año de creación de pregunta: 2013
 questions[39]= "40)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[39]= new Array();
 choices[39][0] = "No realiza ninguna acci&oacute;n.";
 choices[39][1] = "Borra la l&iacute;nea anterior.";
 choices[39][2] = "Borra la l&iacute;nea actual";
 choices[39][3] = "Borra la l&iacute;nea posterior.";
 answers[39] = 2;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8713. Examen TICA2-2011";
 preguntaids[39] = 8713


//  Id pregunta: 1562 Año de creación de pregunta: 2016
 questions[40]= "41)  En lenguaje Java, a&ntilde;adir metadatos al c&oacute;digo fuente que est&aacute;n disponibles para la aplicaci&oacute;n en tiempo de ejecuci&oacute;n se consigue con una caracter&iacute;stica denominada:";
 choices[40]= new Array();
 choices[40][0] = "CDATA.";
 choices[40][1] = "Closure.";
 choices[40][2] = "Annotation.";
 choices[40][3] = "Enum.";
 answers[40] = 2;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1562. ";
 preguntaids[40] = 1562


//  Id pregunta: 8621 Año de creación de pregunta: 2013
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[41]= new Array();
 choices[41][0] = "Datos del emisor";
 choices[41][1] = "Detalle de la factura";
 choices[41][2] = "Importe de la factura";
 choices[41][3] = "Datos de la firma electr&oacute;nica";
 answers[41] = 2;
 units[41] = ['75'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8621. Examen TIC A2 2011";
 preguntaids[41] = 8621


//  Id pregunta: 1551 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes herramientas de comprobaci&oacute;n de accesibilidad de paginas Web ha sido desarrollada por el INTECO (Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n, S.A)?";
 choices[42]= new Array();
 choices[42][0] = "TAW";
 choices[42][1] = "HERA";
 choices[42][2] = "INTAV";
 choices[42][3] = "WAI";
 answers[42] = 2;
 units[42] = ['42'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 1551. ";
 preguntaids[42] = 1551


//  Id pregunta: 1563 Año de creación de pregunta: 2016
 questions[43]= "44)  Existen diversos tipos de sistemas gestores de bases de datos (SGBD) en funci&oacute;n del modelo l&oacute;gico en el cual se basan. Indique a que tipo pertenece el SGBD IMS de IBM:";
 choices[43]= new Array();
 choices[43][0] = "Modelo l&oacute;gico relacional.";
 choices[43][1] = "Modelo l&oacute;gico jer&aacute;rquico.";
 choices[43][2] = "Modelo l&oacute;gico en red.";
 choices[43][3] = "Modelo l&oacute;gico orientado a objetos.";
 answers[43] = 1;
 units[43] = ['60'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1563. ";
 preguntaids[43] = 1563


//  Id pregunta: 8716 Año de creación de pregunta: 2013
 questions[44]= "45)  &iquest;C&oacute;mo se llama la conexi&oacute;n de Intel que supera en velocidad a USB 3.0, basada en LightPeak?";
 choices[44]= new Array();
 choices[44][0] = "Thundercat";
 choices[44][1] = "LightFire";
 choices[44][2] = "Thunderbolt";
 choices[44][3] = "USB 4.0";
 answers[44] = 2;
 units[44] = ['53'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8716. Examen TICA2-2011";
 preguntaids[44] = 8716


//  Id pregunta: 8708 Año de creación de pregunta: 2013
 questions[45]= "46)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y, adem&aacute;s, puede acceder a las memorias de otros procesadores se conoce como:";
 choices[45]= new Array();
 choices[45][0] = "SMP";
 choices[45][1] = "Grid";
 choices[45][2] = "NUMA";
 choices[45][3] = "Cluster";
 answers[45] = 2;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8708. Examen TICA2-2011";
 preguntaids[45] = 8708


//  Id pregunta: 1559 Año de creación de pregunta: 2016
 questions[46]= "47)  En UML 2.0 hay 13 tipos diferentes de diagramas. Estos se pueden dividir en: Diagramas de estructura y de Comportamiento. &iquest;Cu&aacute;l de los siguientes es un diagrama de comportamiento?";
 choices[46]= new Array();
 choices[46][0] = "Diagrama de clases.";
 choices[46][1] = "Diagrama de casos de uso.";
 choices[46][2] = "Diagrama de componentes.";
 choices[46][3] = "Diagrama de paquetes.";
 answers[46] = 1;
 units[46] = ['86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 1559. ";
 preguntaids[46] = 1559


//  Id pregunta: 1547 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;C&oacute;mo se denomina a la conversi&oacute;n impl&iacute;cita de cualquier tipo de valor al tipo objeto en el lenguaje C#?";
 choices[47]= new Array();
 choices[47][0] = "Casting.";
 choices[47][1] = "Boxing.";
 choices[47][2] = "Unboxing.";
 choices[47][3] = "Down-casting.";
 answers[47] = 1;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1547. ";
 preguntaids[47] = 1547


//  Id pregunta: 1560 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes plataformas permite la implementaci&oacute;n de aplicaciones ricas de internet (RIA)?";
 choices[48]= new Array();
 choices[48][0] = "Java RIA";
 choices[48][1] = "Java EE";
 choices[48][2] = "Java ME";
 choices[48][3] = "Java FX";
 answers[48] = 3;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1560. ";
 preguntaids[48] = 1560


//  Id pregunta: 1556 Año de creación de pregunta: 2016
 questions[49]= "50)  Cu&aacute;les de los siguientes NO es un modelo de estimaci&oacute;n de proyectos software:";
 choices[49]= new Array();
 choices[49][0] = "COCOMO II.";
 choices[49][1] = "Delphi.";
 choices[49][2] = "PROBE.";
 choices[49][3] = "M&eacute;todo Box-Cox.";
 answers[49] = 3;
 units[49] = ['94'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 1556. ";
 preguntaids[49] = 1556


//  Id pregunta: 8709 Año de creación de pregunta: 2013
 questions[50]= "51)  Las siglas SSI (Single System Image) corresponden a:";
 choices[50]= new Array();
 choices[50][0] = "Una interfaz &uacute;nica de acceso al sistema para un cluster de servidores.";
 choices[50][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[50][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema.";
 choices[50][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET.";
 answers[50] = 0;
 units[50] = ['49', '55'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8709. Examen TICA2-2011";
 preguntaids[50] = 8709


//  Id pregunta: 1533 Año de creación de pregunta: 2016
 questions[51]= "52)  Los certificados de identidad p&uacute;blica que est&aacute;n contenidos en el DNI electr&oacute;nico pueden ser revocados por:";
 choices[51]= new Array();
 choices[51][0] = "Compromiso de la clave p&uacute;blica de la Autoridad de Certificaci&oacute;n de la Direcci&oacute;n General de la Polic&iacute;a.";
 choices[51][1] = "Declaraci&oacute;n de que el ciudadano no tiene capacidad de firma (pr&oacute;digo).";
 choices[51][2] = "Tras la renovaci&oacute;n en todos los casos.";
 choices[51][3] = "Compromiso de la clave p&uacute;blica del ciudadano,";
 answers[51] = 1;
 units[51] = ['78'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1533. ";
 preguntaids[51] = 1533


//  Id pregunta: 8783 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[52]= new Array();
 choices[52][0] = "EIA/TIA 586";
 choices[52][1] = "SO/EIS DIS 11108";
 choices[52][2] = "EIA/TIA 568";
 choices[52][3] = "ISO/EIS DIS 11801";
 answers[52] = 3;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8783. Examen TIC A2 2011";
 preguntaids[52] = 8783


//  Id pregunta: 1538 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[53]= new Array();
 choices[53][0] = "Meego.";
 choices[53][1] = "Android.";
 choices[53][2] = "Chrome OS.";
 choices[53][3] = "Symbian OS.";
 answers[53] = 0;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1538. ";
 preguntaids[53] = 1538


//  Id pregunta: 1557 Año de creación de pregunta: 2016
 questions[54]= "55)  En especificaciones de requisitos, la norma IEEE 830-1998 (Recommended Practice for Software Requirements Specifications) establece las caracter&iacute;sticas de una buena especificaci&oacute;n de requisitos:";
 choices[54]= new Array();
 choices[54][0] = "3 caracter&iacute;sticas: Correcta, completa y consistente.";
 choices[54][1] = "6 caracter&iacute;sticas: Correcta, completa, consistente, verificable, modificable y trazable.";
 choices[54][2] = "8 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificada en rangos de importancia y/o estabilidad, verificable, modificable y trazable.";
 choices[54][3] = "9 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificados en rangos de importancia y/o estabilidad, verificable, modificable, trazable y consensuada con el usuario.";
 answers[54] = 2;
 units[54] = ['84'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 1557. ";
 preguntaids[54] = 1557


//  Id pregunta: 8714 Año de creación de pregunta: 2013
 questions[55]= "56)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[55]= new Array();
 choices[55][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[55][1] = "* 4 * * 0,3 /home/user/script.sh";
 choices[55][2] = "0 */4 wed,sun * * /home/user/script.sh";
 choices[55][3] = "* */4 * * 3-7 /home/user/script.sh";
 answers[55] = 0;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8714. Examen TICA2-2011";
 preguntaids[55] = 8714


//  Id pregunta: 8712 Año de creación de pregunta: 2013
 questions[56]= "57)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[56]= new Array();
 choices[56][0] = "NFS";
 choices[56][1] = "CIFS";
 choices[56][2] = "JFS";
 choices[56][3] = "FAT";
 answers[56] = 2;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8712. Examen TICA2-2011";
 preguntaids[56] = 8712


//  Id pregunta: 8620 Año de creación de pregunta: 2013
 questions[57]= "58)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[57]= new Array();
 choices[57][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[57][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[57][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[57][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[57] = 0;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 8620. Examen TIC A2 2011";
 preguntaids[57] = 8620


//  Id pregunta: 8722 Año de creación de pregunta: 2013
 questions[58]= "59)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido:";
 choices[58]= new Array();
 choices[58][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[58][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[58][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[58][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[58] = 3;
 units[58] = ['56'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8722. Examen TICA2-2011";
 preguntaids[58] = 8722


//  Id pregunta: 1558 Año de creación de pregunta: 2016
 questions[59]= "60)  M&eacute;trica v3 contempla distintos tipos de mantenimiento, &iquest;a qu&eacute; tipo de mantenimiento pertenece un cambio en el software base?";
 choices[59]= new Array();
 choices[59][0] = "Correctivo.";
 choices[59][1] = "Evolutivo.";
 choices[59][2] = "Adaptativo.";
 choices[59][3] = "Perfectivo.";
 answers[59] = 2;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1558. ";
 preguntaids[59] = 1558


//  Id pregunta: 1541 Año de creación de pregunta: 2016
 questions[60]= "61)  La direcci&oacute;n IP 0.0.0.0:";
 choices[60]= new Array();
 choices[60][0] = "Se usa para difusi&oacute;n en una subred local.";
 choices[60][1] = "Se usa para difundir un mensaje a todos los nodos de una red distante.";
 choices[60][2] = "La usa inicialmente un host cuando arranca.";
 choices[60][3] = "Se usa para pruebas de realimentaci&oacute;n.";
 answers[60] = 2;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1541. ";
 preguntaids[60] = 1541


//  Id pregunta: 1537 Año de creación de pregunta: 2016
 questions[61]= "62)  El DNI electr&oacute;nico es una tarjeta que cumple con la normativa Europea CWA-14890-1:2004, concretamente esta normativa define:";
 choices[61]= new Array();
 choices[61][0] = "El formato en el que se almacena el certificado reconocido de autenticaci&oacute;n y de firma.";
 choices[61][1] = "Los ficheros que se generan al realizarse la firma electr&oacute;nica.";
 choices[61][2] = "C&oacute;mo realizar la comunicaci&oacute;n entre una aplicaci&oacute;n y un dispositivo seguro de creaci&oacute;n de firma.";
 choices[61][3] = "La normativa de accesibilidad para la firma electr&oacute;nica para personas con capacidad reducida.";
 answers[61] = 2;
 units[61] = ['78'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1537. ";
 preguntaids[61] = 1537


//  Id pregunta: 8711 Año de creación de pregunta: 2013
 questions[62]= "63)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[62]= new Array();
 choices[62][0] = "Kubuntu.";
 choices[62][1] = "Red Hat";
 choices[62][2] = "Slackware.";
 choices[62][3] = "IRIX.";
 answers[62] = 3;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8711. Examen TICA2-2011";
 preguntaids[62] = 8711


//  Id pregunta: 1564 Año de creación de pregunta: 2016
 questions[63]= "64)  En la t&eacute;cnica de obtenci&oacute;n de requisitos denominan Brainstorming es recomendable que los participantes sean:";
 choices[63]= new Array();
 choices[63][0] = "Del mismo departamento.";
 choices[63][1] = "De diferentes departamentos.";
 choices[63][2] = "Expertos.";
 choices[63][3] = "&Uacute;nicamente desarrolladores.";
 answers[63] = 1;
 units[63] = ['84'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1564. ";
 preguntaids[63] = 1564


//  Id pregunta: 1540 Año de creación de pregunta: 2016
 questions[64]= "65)  El tama&ntilde;o en bits del campo Puerto Destino de un paquete UDP es de:";
 choices[64]= new Array();
 choices[64][0] = "15";
 choices[64][1] = "16";
 choices[64][2] = "14";
 choices[64][3] = "12";
 answers[64] = 1;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1540. ";
 preguntaids[64] = 1540


