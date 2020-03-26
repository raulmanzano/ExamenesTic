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
//  Id pregunta: 1627 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de las siguientes caracter&iacute;sticas est&aacute; disponible en SNMP v3, y NO lo estaba en las versiones previas:";
 choices[0]= new Array();
 choices[0][0] = "Mensajes GetBulkRequest";
 choices[0][1] = "Sentencias username para auntenticaci&oacute;n";
 choices[0][2] = "Mensajes GetNextRequest";
 choices[0][3] = "Saludo de tres v&iacute;as y reconocimiento para la transferencia de mensajes";
 answers[0] = 1;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1627. ";
 preguntaids[0] = 1627


//  Id pregunta: 1629 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;les son los principales protocolos que operan en la capa de transporte en el modelo TCP/IP?";
 choices[1]= new Array();
 choices[1][0] = "IPX y FTP";
 choices[1][1] = "UDP y TCP";
 choices[1][2] = "IP y TCP";
 choices[1][3] = "UDP y IP";
 answers[1] = 1;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1629. ";
 preguntaids[1] = 1629


//  Id pregunta: 1593 Año de creación de pregunta: 2016
 questions[2]= "3)  En un modelo de datos Entidad / Relaci&oacute;n, &iquest;qu&eacute; se entiende por &ldquo;entidad d&eacute;bil&rdquo;?";
 choices[2]= new Array();
 choices[2][0] = "Una entidad que no se encuentra relacionada con otra.";
 choices[2][1] = "Una entidad que hereda todos sus atributos de otra.";
 choices[2][2] = "Una entidad cuya existencia depende de la existencia de otra.";
 choices[2][3] = "Ninguna de las respuestas anteriores definen una entidad d&eacute;bil.";
 answers[2] = 2;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1593. ";
 preguntaids[2] = 1593


//  Id pregunta: 1620 Año de creación de pregunta: 2016
 questions[3]= "4)  Dentro de las topolog&iacute;as SAN, se&ntilde;ale cu&aacute;l es la que permite conectar hasta 126 dispositivos:";
 choices[3]= new Array();
 choices[3][0] = "Punto a punto";
 choices[3][1] = "Fibre Channel Arbitred loop";
 choices[3][2] = "Switched fabric";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 1;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1620. ";
 preguntaids[3] = 1620


//  Id pregunta: 1640 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un requisito indispensable para una comunicaci&oacute;n segura?";
 choices[4]= new Array();
 choices[4][0] = "Auditor&iacute;a";
 choices[4][1] = "Confidencialidad";
 choices[4][2] = "Integridad";
 choices[4][3] = "Disponibilidad";
 answers[4] = 0;
 units[4] = ['120'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1640. ";
 preguntaids[4] = 1640


//  Id pregunta: 1621 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA en relaci&oacute;n con los sistemas de discos m&uacute;ltiples RAID (Redundant Array of Independent Disks)?";
 choices[5]= new Array();
 choices[5][0] = "Un RAID 1 crea una copia exacta (o espejo) de un conjunto de datos en dos o m&aacute;s discos.";
 choices[5][1] = "Un RAID 1 resulta &uacute;til cuando el rendimiento en lectura es m&aacute;s importante que la capacidad.";
 choices[5][2] = "Un RAID 2 divide los datos a nivel de bits en lugar de a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[5][3] = "Un RAID o (tambi&eacute;n llamado conjunto dividido o volumen dividido) distribuye los datos equitativamente entre dos o m&aacute;s discos con informaci&oacute;n de paridad para proporcionar redundancia.";
 answers[5] = 3;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1621. ";
 preguntaids[5] = 1621


//  Id pregunta: 1613 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Puede el administrador de la Base de Datos Relacional autorizar a un usuario para que pueda a&ntilde;adir columnas en una tabla permitiendo que este usuario pueda autorizar a otros este mismo privilegio?";
 choices[6]= new Array();
 choices[6][0] = "A&ntilde;adir columnas en una tabla es tarea exclusiva del administrador de la Base de Datos y no puede delegarla";
 choices[6][1] = "A&ntilde;adir columnas en una tabla no requiere la autorizaci&oacute;n del administrador de la Base de Datos";
 choices[6][2] = "S&iacute;, puede autorizar a que un usuario a&ntilde;ada columnas en una tabla, pero no puede autorizar para que un usuario pueda a su vez conceder este privilegio";
 choices[6][3] = "S&iacute; puede autorizar ambas cosas";
 answers[6] = 3;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1613. ";
 preguntaids[6] = 1613


//  Id pregunta: 1589 Año de creación de pregunta: 2016
 questions[7]= "8)  En el modelo relacional, se denomina Grado de una tabla relacional al n&uacute;mero de:";
 choices[7]= new Array();
 choices[7][0] = "Tuplas que la forman.";
 choices[7][1] = "Filas que la forman.";
 choices[7][2] = "Claves alternativas que contiene.";
 choices[7][3] = "Atributos que la forman.";
 answers[7] = 3;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1589. ";
 preguntaids[7] = 1589


//  Id pregunta: 1622 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;ntas unidades de disco se necesitan como m&iacute;nimo para implementar una soluci&oacute;n RAID 5?";
 choices[8]= new Array();
 choices[8][0] = "1";
 choices[8][1] = "2";
 choices[8][2] = "3";
 choices[8][3] = "4";
 answers[8] = 2;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1622. ";
 preguntaids[8] = 1622


//  Id pregunta: 1618 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta. Los procedimientos de control de cambios ayudan a mantener la integridad de la informaci&oacute;n del sistema asegurando que:";
 choices[9]= new Array();
 choices[9][0] = "El c&oacute;digo pasado a producci&oacute;n est&aacute; autorizado.";
 choices[9][1] = "El c&oacute;digo de producci&oacute;n est&aacute; libre de errores.";
 choices[9][2] = "Los datos activos son peri&oacute;dicamente auditados.";
 choices[9][3] = "Los datos activos son actualizados peri&oacute;dicamente.";
 answers[9] = 0;
 units[9] = ['96'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1618. ";
 preguntaids[9] = 1618


//  Id pregunta: 1647 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar de transmisi&oacute;n de datos sobre sistemas de televisi&oacute;n por cable (CATV)?";
 choices[10]= new Array();
 choices[10][0] = "Data Over Cable Service Interface Specifications (DOCSIS)";
 choices[10][1] = "National Television System Committee (NTSC)";
 choices[10][2] = "ATP";
 choices[10][3] = "Xtream";
 answers[10] = 0;
 units[10] = ['115'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1647. ";
 preguntaids[10] = 1647


//  Id pregunta: 1605 Año de creación de pregunta: 2016
 questions[11]= "12)  En el &aacute;mbito de las plataformas .NET, se&ntilde;ale cual de las siguientes afirmaciones es FALSA:";
 choices[11]= new Array();
 choices[11][0] = "En ADO.NET los comandos de datos se usan para empaquetar las instrucciones SQL o los procedimientos almacenados.";
 choices[11][1] = "En ADO.NET no se utiliza XML directamente cuando se trabaja con metadatos.";
 choices[11][2] = "En las aplicaciones Web ASP.NET, los componentes est&aacute;n desconectados entre s&iacute; inherentemente.";
 choices[11][3] = "En ADO.NET, el formato de transferencia de datos es XML.";
 answers[11] = 1;
 units[11] = ['63'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1605. ";
 preguntaids[11] = 1605


//  Id pregunta: 1601 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[12]= new Array();
 choices[12][0] = "El mantenimiento correctivo se realiza exclusivamente antes de la recepci&oacute;n";
 choices[12][1] = "Una vez entregado el sistema s&oacute;lo se debe realizar un mantenimiento evolutivo de aqu&eacute;l.";
 choices[12][2] = "La metodolog&iacute;a M&eacute;trica no contempla el mantenimiento de los S.I. una vez aceptados.";
 choices[12][3] = "Un S.I. debe ser planificado con recursos dedicados a su mantenimiento durante toda su vida &uacute;til";
 answers[12] = 3;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 1601. ";
 preguntaids[12] = 1601


//  Id pregunta: 1645 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; servicio xDSL permite disponer de circuitos sim&eacute;tricos de 2 Mbps orientados a fines profesionales o de negocios?";
 choices[13]= new Array();
 choices[13][0] = "HDSL";
 choices[13][1] = "RADSL";
 choices[13][2] = "ADSL";
 choices[13][3] = "ZDSL";
 answers[13] = 0;
 units[13] = ['106'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1645. ";
 preguntaids[13] = 1645


//  Id pregunta: 1591 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es elemento de un Diagrama de Flujo de Datos (DFD)?:";
 choices[14]= new Array();
 choices[14][0] = "Proceso.";
 choices[14][1] = "Entidad Externa.";
 choices[14][2] = "Entidad Interna.";
 choices[14][3] = "Almac&eacute;n de datos.";
 answers[14] = 2;
 units[14] = ['86'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1591. ";
 preguntaids[14] = 1591


//  Id pregunta: 1617 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;les de las siguientes tareas podr&iacute;an ser llevadas a cabo por la misma persona dentro de un departamento de sistemas de informaci&oacute;n sin repercusiones negativas para el control y la seguridad?";
 choices[15]= new Array();
 choices[15][0] = "Administraci&oacute;n de seguridad y gesti&oacute;n de cambios.";
 choices[15][1] = "Operaciones de producci&oacute;n y desarrollo de sistemas.";
 choices[15][2] = "Desarrollo de sistemas y gesti&oacute;n de cambios.";
 choices[15][3] = "Desarrollo de sistemas y mantenimiento de sistemas.";
 answers[15] = 3;
 units[15] = ['43'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 1617. ";
 preguntaids[15] = 1617


//  Id pregunta: 1636 Año de creación de pregunta: 2016
 questions[16]= "17)  ATM (modo de transferencia as&iacute;ncrono)es un protocolo de nivel 2 utilizado en las redes de operadores sobre el que se encapsulan protocolos de niveles superiores en celdas de 53 octetos. Indique cu&aacute;l de las siguientes capas es la encargada de a&ntilde;adir los &uacute;ltimos 5 bytes de overhead &oacute; sobrecarga de protocolo a los 48 bytes rest&aacute;ntes para completar la celda ATM.";
 choices[16]= new Array();
 choices[16][0] = "Capa AAL1";
 choices[16][1] = "Capa CBR";
 choices[16][2] = "Capa AAL5";
 choices[16][3] = "Capa ATM";
 answers[16] = 3;
 units[16] = ['107'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1636. ";
 preguntaids[16] = 1636


//  Id pregunta: 1579 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al modelo de desarrollo en espiral:";
 choices[17]= new Array();
 choices[17][0] = "Fue propuesto por Mills en 1980.";
 choices[17][1] = "Cada ciclo de desarrollo se divide en 4 fases: &quot;definici&oacute;n de objetivos&quot;, &quot;evaluaci&oacute;n y reducci&oacute;n de riesgos&quot;, &quot;desarrollo y validaci&oacute;n&quot; y &quot;planificaci&oacute;n&quot;.";
 choices[17][2] = "El radio de la espiral representa el incremento del riesgo a lo largo del proyecto.";
 choices[17][3] = "El ciclo de vida completo se inicia con la fase de &quot;planificaci&oacute;n&quot;.";
 answers[17] = 1;
 units[17] = ['82'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 1579. ";
 preguntaids[17] = 1579


//  Id pregunta: 1628 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta. TCP es:";
 choices[18]= new Array();
 choices[18][0] = "Un protocolo de la capa de transporte orientado a conexi&oacute;n.";
 choices[18][1] = "Un protocolo de la capa de transporte no orientado a conexi&oacute;n.";
 choices[18][2] = "Un protocolo de las capas de enlace y red que puede detectar y compensar paquetes perdidos o datos alterados.";
 choices[18][3] = "Un protocolo de la capa de transporte orientado fundamentalmente a regular el flujo de transmisi&oacute;n para no saturar a los receptores m&aacute;s lentos.";
 answers[18] = 0;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1628. ";
 preguntaids[18] = 1628


//  Id pregunta: 1610 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde a una SAN (Storage &Aacute;rea Network) pero NO a una NAS (Network Attached Storage)?";
 choices[19]= new Array();
 choices[19][0] = "El dispositivo de almacenamiento no corresponde a un &uacute;nico servidor, pudiendo ser compartido por varios servidores.";
 choices[19][1] = "Las conexiones f&iacute;sicas desde los servidores hacia la plataforma son de uso espec&iacute;fico para el almacenamiento, no siendo utilizadas para otros fines";
 choices[19][2] = "Las peticiones de datos al sistema se hacen de forma remota a trav&eacute;s del protocolo CIFS";
 choices[19][3] = "Se comparte la misma infraestructura de red para los servidores y para el almacenamiento";
 answers[19] = 1;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1610. ";
 preguntaids[19] = 1610


//  Id pregunta: 1576 Año de creación de pregunta: 2016
 questions[20]= "21)  Se presentan a continuaci&oacute;n tres niveles de la torre de protocolos TCP/IP y tres protocolos: 1) Nivel 1 (F&iacute;sico) 2) Nivel 2 (Enlace de datos) 3) Nivel 5 (Aplicaci&oacute;n) I) GPRS (General Packet Radio Service). II) PLC (Power Line Communications). III) TLS/SSL (Transport Layer Security/Secure Sockets Layer) Se&ntilde;ale cu&aacute;l es el emparejamiento correcto de nivel/protocolo:";
 choices[20]= new Array();
 choices[20][0] = "1/I, 2/II, 3/III.";
 choices[20][1] = "1/II, 2/I, 3/III.";
 choices[20][2] = "1/III, 2/I, 3/II.";
 choices[20][3] = "1/II, 2/III, 3/I.";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1576. ";
 preguntaids[20] = 1576


//  Id pregunta: 1580 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;En cu&aacute;l de los siguientes modelos de ciclo de vida hay una o varias fases de an&aacute;lisis de riesgos?";
 choices[21]= new Array();
 choices[21][0] = "Cascada";
 choices[21][1] = "Prototipado incremental";
 choices[21][2] = "Por etapas";
 choices[21][3] = "En espiral";
 answers[21] = 3;
 units[21] = ['82'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 1580. ";
 preguntaids[21] = 1580


//  Id pregunta: 1604 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un componente de la arquitectura J2EE?";
 choices[22]= new Array();
 choices[22][0] = "SAAJ";
 choices[22][1] = "JAX-RPC";
 choices[22][2] = "JTA";
 choices[22][3] = "MJS";
 answers[22] = 3;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1604. ";
 preguntaids[22] = 1604


//  Id pregunta: 1594 Año de creación de pregunta: 2016
 questions[23]= "24)  En el sistema relacional de datos, los conceptos b&aacute;sicos son relaci&oacute;n, tupla, clave primaria y dominio. En este &aacute;mbito, se&ntilde;ale qu&eacute; es un dominio:";
 choices[23]= new Array();
 choices[23][0] = "El identificador &uacute;nico para la tabla";
 choices[23][1] = "Una colecci&oacute;n de valores, de los cuales uno o m&aacute;s atributos (columnas) obtienen sus valores reales";
 choices[23][2] = "Una colecci&oacute;n de valores, de los cuales una o m&aacute;s tuplas obtienen sus relaciones";
 choices[23][3] = "El n&uacute;mero de tuplas que contiene una relaci&oacute;n. Tambi&eacute;n es conocido por cardinalidad";
 answers[23] = 1;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1594. ";
 preguntaids[23] = 1594


//  Id pregunta: 1608 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la iniciativa de accesibilidad web (WAI), se&ntilde;ale qu&eacute; significa el nivel de conformidad 'Doble A':";
 choices[24]= new Array();
 choices[24][0] = "Que se cumple el punto de verificaci&oacute;n 2.";
 choices[24][1] = "Que no tiene gr&aacute;ficos que no sean visibles a corta distancia.";
 choices[24][2] = "Que se cumplen los puntos de verificaci&oacute;n 1 y 2.";
 choices[24][3] = "Significa que el contenido puede leerse utilizando un 'pluggin' de lectura.";
 answers[24] = 2;
 units[24] = ['42'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 1608. ";
 preguntaids[24] = 1608


//  Id pregunta: 1637 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes clases de servicio proporcionadas por el protocolo ATM (Asynchronous Transfer Mode) deber&iacute;amos utilizar para la transmisi&oacute;n de video MPEG?";
 choices[25]= new Array();
 choices[25][0] = "ABR";
 choices[25][1] = "VBR-RT";
 choices[25][2] = "VBR-NRT";
 choices[25][3] = "UBR";
 answers[25] = 1;
 units[25] = ['107'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1637. ";
 preguntaids[25] = 1637


//  Id pregunta: 1614 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale qu&eacute; lenguaje es el que incluye las operaciones de creaci&oacute;n, modificaci&oacute;n y eliminaci&oacute;n de las estructuras de la base:";
 choices[26]= new Array();
 choices[26][0] = "DDL";
 choices[26][1] = "DML";
 choices[26][2] = "DLC";
 choices[26][3] = "TCL";
 answers[26] = 0;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1614. ";
 preguntaids[26] = 1614


//  Id pregunta: 1611 Año de creación de pregunta: 2016
 questions[27]= "28)  Visualizando el contenido de uno de los siguientes archivos podemos saber los usuarios que hay dados de alta en un sistema Unix, se&ntilde;ale cu&aacute;l es:";
 choices[27]= new Array();
 choices[27][0] = "/etc/hosts";
 choices[27][1] = "/etc/passwd";
 choices[27][2] = "/usr/lst";
 choices[27][3] = "/adm/userbd";
 answers[27] = 1;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1611. ";
 preguntaids[27] = 1611


//  Id pregunta: 1596 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes tipos de anomal&iacute;a, NO se soluciona o mitiga mediante la normalizaci&oacute;n de tablas y relaciones?";
 choices[28]= new Array();
 choices[28][0] = "Anomal&iacute;a de inserci&oacute;n.";
 choices[28][1] = "Anomal&iacute;a de eliminaci&oacute;n.";
 choices[28][2] = "Anomal&iacute;a estructural.";
 choices[28][3] = "Anomal&iacute;a de actualizaci&oacute;n.";
 answers[28] = 2;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1596. ";
 preguntaids[28] = 1596


//  Id pregunta: 1599 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta. En la actividad &quot;Elaboraci&oacute;n de los Manuales de Usuario&quot; de M&eacute;trica v3:";
 choices[29]= new Array();
 choices[29][0] = "Se genera la documentaci&oacute;n de usuario final conforme a los requisitos definidos en el proceso Estudio de Viabilidad del Sistema";
 choices[29][1] = "Se especifican todas las interfaces entre el sistema y el usuario, tales como formatos de pantallas, di&aacute;logos, formatos de informes y formularios de entrada";
 choices[29][2] = "Se especifica la formaci&oacute;n necesaria para que los usuarios finales sean capaces de utilizar el sistema de forma satisfactoria";
 choices[29][3] = "Se genera la documentaci&oacute;n de usuario final o explotaci&oacute;n conforme a los requisitos definidos en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[29] = 3;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 1599. ";
 preguntaids[29] = 1599


//  Id pregunta: 1578 Año de creación de pregunta: 2016
 questions[30]= "31)  El modelo de ciclo de vida cluster (o de agrupamiento) es un subtipo que se engloba dentro de los modelos de ciclo de vida:";
 choices[30]= new Array();
 choices[30][0] = "Incremental.";
 choices[30][1] = "Para Desarrollo Orientado a Objetos.";
 choices[30][2] = "De Prototipos.";
 choices[30][3] = "En Espiral.";
 answers[30] = 1;
 units[30] = ['82'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1578. ";
 preguntaids[30] = 1578


//  Id pregunta: 1602 Año de creación de pregunta: 2016
 questions[31]= "32)  En el modelado f&iacute;sico de un sistema Orientado a Objetos, los componentes y los nodos tienen semejanzas. Entre las semejanzas NO se encuentra que:";
 choices[31]= new Array();
 choices[31][0] = "Ambos pueden participar en relaciones de dependencia, generalizaci&oacute;n y asociaci&oacute;n.";
 choices[31][1] = "Ambos representan el empaquetamiento f&iacute;sico de los elementos l&oacute;gicos.";
 choices[31][2] = "Ambos pueden tener instancias.";
 choices[31][3] = "Ambos pueden participar en interacciones.";
 answers[31] = 1;
 units[31] = ['84'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1602. ";
 preguntaids[31] = 1602


//  Id pregunta: 1626 Año de creación de pregunta: 2016
 questions[32]= "33)  En la herramienta de monitorizaci&oacute;n remota -RMON-, se&ntilde;ale qu&eacute; elemento genera la informaci&oacute;n estad&iacute;stica de los nodos:";
 choices[32]= new Array();
 choices[32][0] = "El cliente";
 choices[32][1] = "El servidor";
 choices[32][2] = "Los dos anteriores";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = 1;
 units[32] = ['114'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1626. ";
 preguntaids[32] = 1626


//  Id pregunta: 1583 Año de creación de pregunta: 2016
 questions[33]= "34)  La metodolog&iacute;a M&eacute;trica:";
 choices[33]= new Array();
 choices[33][0] = "Es una metodolog&iacute;a de uso privativo en las Administraciones P&uacute;blicas";
 choices[33][1] = "Sirve para la planificaci&oacute;n, desarrollo y mantenimiento de sistemas de informaci&oacute;n";
 choices[33][2] = "Aplica a todas las actividades de un proyecto software excepto la planificaci&oacute;n";
 choices[33][3] = "Se utiliza de forma predominante en el an&aacute;lisis de riesgos de los S.I.";
 answers[33] = 1;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 1583. ";
 preguntaids[33] = 1583


//  Id pregunta: 1619 Año de creación de pregunta: 2016
 questions[34]= "35)  El objetivo clave en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es asegurar que:";
 choices[34]= new Array();
 choices[34][0] = "Los recursos disponibles son plenamente empleados.";
 choices[34][1] = "Se a&ntilde;adir&aacute;n nuevos recursos para las nuevas aplicaciones de manera puntual.";
 choices[34][2] = "Los recursos existentes se emplean de manera eficaz y eficiente.";
 choices[34][3] = "La utilizaci&oacute;n de recursos no baja del 85%.";
 answers[34] = 2;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1619. ";
 preguntaids[34] = 1619


//  Id pregunta: 1648 Año de creación de pregunta: 2016
 questions[35]= "36)  En voz sobre IP, integraci&oacute;n de voz y datos, se&ntilde;ale cu&aacute;l es el protocolo que se encarga de los mensajes de control (participantes, medidas de calidad, etc.):";
 choices[35]= new Array();
 choices[35][0] = "UDP";
 choices[35][1] = "RTTP";
 choices[35][2] = "G729";
 choices[35][3] = "RTCP";
 answers[35] = 3;
 units[35] = ['110'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1648. ";
 preguntaids[35] = 1648


//  Id pregunta: 1630 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale c&oacute;mo se denomina la unidad de datos usada en la capa de transporte:";
 choices[36]= new Array();
 choices[36][0] = "Paquete";
 choices[36][1] = "Segmento";
 choices[36][2] = "Trama";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 1;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1630. ";
 preguntaids[36] = 1630


//  Id pregunta: 1597 Año de creación de pregunta: 2016
 questions[37]= "38)  En el &aacute;mbito del dise&ntilde;o estructurado, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[37]= new Array();
 choices[37][0] = "El acoplamiento com&uacute;n constituye un nivel de acoplamiento mejor que el de datos.";
 choices[37][1] = "La cohesi&oacute;n procedimental presenta mayor cohesi&oacute;n que la secuencial.";
 choices[37][2] = "El acoplamiento com&uacute;n se presenta cuando un m&oacute;dulo hace referencia a la parte interior de otro.";
 choices[37][3] = "La cohesi&oacute;n funcional implica que todos los elementos que componen el m&oacute;dulo est&aacute;n relacionados en el desarrollo de una &uacute;nica funci&oacute;n.";
 answers[37] = 3;
 units[37] = ['89'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1597. ";
 preguntaids[37] = 1597


//  Id pregunta: 1643 Año de creación de pregunta: 2016
 questions[38]= "39)  Uno de los grupos de tecnolog&iacute;as consideradas en el &aacute;mbito de la Web 2.0 es AJAX (Asynchronous JavaScript And XML). Indique cu&aacute;l de las siguientes afirmaciones NO se corresponde con este grupo de tecnolog&iacute;as.";
 choices[38]= new Array();
 choices[38][0] = "Es una t&eacute;cnica de desarrollo web para crear aplicaciones interactivas o RIA (Rich Internet Applications)";
 choices[38][1] = "Estas aplicaciones se ejecutan en el servidor y mantiene comunicaci&oacute;n as&iacute;ncrona con el cliente en segundo plano.";
 choices[38][2] = "En los entornos RIA no se producen recargas de p&aacute;gina, ya que desde el principio se carga toda la aplicaci&oacute;n y s&oacute;lo se produce comunicaci&oacute;n con el servidor cuando se necesitan datos externos como los de una Base de Datos o de otros ficheros externos.";
 choices[38][3] = "Lleva consigo la utilizaci&oacute;n de XHTML (o HTML) y hojas de estilos en cascada (CSS) para el dise&ntilde;o que acompa&ntilde;a a la informaci&oacute;n.";
 answers[38] = 1;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1643. ";
 preguntaids[38] = 1643


//  Id pregunta: 1624 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con la transmisi&oacute;n por fibra &oacute;ptica:";
 choices[39]= new Array();
 choices[39][0] = "La velocidad de propagaci&oacute;n de la luz a trav&eacute;s de una fibra &oacute;ptica monomodo es de 300.000 Kms/seg.";
 choices[39][1] = "La fibra &oacute;ptica monomodo tiene una atenuaci&oacute;n menor que el cable coaxial.";
 choices[39][2] = "A la fibra &oacute;ptica monomodo tambi&eacute;n se la conoce como de &iacute;ndice gradual.";
 choices[39][3] = "La fibra &oacute;ptica multimodo es la que presenta menores p&eacute;rdidas de la se&ntilde;al.";
 answers[39] = 1;
 units[39] = ['104'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 1624. ";
 preguntaids[39] = 1624


//  Id pregunta: 1609 Año de creación de pregunta: 2016
 questions[40]= "41)  En el mundo del sistema operativo Unix existe una interface para que un proceso de usuario pueda comunicarse con el hardware. Se&ntilde;ale c&oacute;mo se llaman dichas interfaces:";
 choices[40]= new Array();
 choices[40][0] = "Sysraw";
 choices[40][1] = "ISC";
 choices[40][2] = "Call";
 choices[40][3] = "Sys";
 answers[40] = 1;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1609. ";
 preguntaids[40] = 1609


//  Id pregunta: 1649 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes es un est&aacute;ndar, cada vez m&aacute;s utilizado en telefon&iacute;a IP, para la conexi&oacute;n de los terminales a la infraestructura de red del edificio donde se pretende implantar?";
 choices[41]= new Array();
 choices[41][0] = "PCM";
 choices[41][1] = "IEEE 802.3af";
 choices[41][2] = "G.730";
 choices[41][3] = "IEEE 802.11b";
 answers[41] = 1;
 units[41] = ['110'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1649. ";
 preguntaids[41] = 1649


//  Id pregunta: 1588 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale c&oacute;mo se denomina, en el modelo entidad/relaci&oacute;n extendido, la relaci&oacute;n por la que un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo, adem&aacute;s de tener los suyos propios:";
 choices[42]= new Array();
 choices[42][0] = "Generalizaci&oacute;n.";
 choices[42][1] = "Asociaci&oacute;n.";
 choices[42][2] = "Especializaci&oacute;n.";
 choices[42][3] = "Agregaci&oacute;n";
 answers[42] = 2;
 units[42] = ['61'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1588. ";
 preguntaids[42] = 1588


//  Id pregunta: 1631 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Es posible que en una misma sesi&oacute;n/aplicaci&oacute;n sobre Internet se utilicen simult&aacute;neamente los protocolos de seguridad IPSec y SSL?";
 choices[43]= new Array();
 choices[43][0] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues trabajan en el mismo nivel.";
 choices[43][1] = "No, se debe elegir en la implementaci&oacute;n de la aplicaci&oacute;n una de las dos, pues son incompatibles a nivel de socket.";
 choices[43][2] = "S&iacute;, no debe presentar especiales problemas.";
 choices[43][3] = "S&iacute;, pero necesita una adaptaci&oacute;n especial para que no se produzca una transposici&oacute;n de claves.";
 answers[43] = 2;
 units[43] = ['120'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1631. ";
 preguntaids[43] = 1631


//  Id pregunta: 1635 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de los siguientes NO es un protocolo de encaminamiento IGP (Interior Gateway Protocol)";
 choices[44]= new Array();
 choices[44][0] = "RIP";
 choices[44][1] = "BGP";
 choices[44][2] = "OSPF";
 choices[44][3] = "IGRP";
 answers[44] = 1;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1635. ";
 preguntaids[44] = 1635


//  Id pregunta: 1615 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de los siguientes controles es el m&aacute;s cr&iacute;tico sobre las actividades de administraci&oacute;n de bases de datos:";
 choices[45]= new Array();
 choices[45][0] = "Aprobaci&oacute;n de las actividades de Administrador de bases de datos";
 choices[45][1] = "Segregaci&oacute;n de tareas";
 choices[45][2] = "Revisi&oacute;n de logs de acceso y actividades";
 choices[45][3] = "Revisi&oacute;n del uso de las herramientas del Sistema Gestor de Base de Datos (SGBD)";
 answers[45] = 1;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1615. ";
 preguntaids[45] = 1615


//  Id pregunta: 1642 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta FALSA:";
 choices[46]= new Array();
 choices[46][0] = "HTTPS es la versi&oacute;n segura del protocolo HTTP.";
 choices[46][1] = "Utiliza cifrado basado en SSL.";
 choices[46][2] = "El puerto est&aacute;ndar es el 443.";
 choices[46][3] = "Basta con que la direcci&oacute;n web empiece por https para que sea una p&aacute;gina segura.";
 answers[46] = 3;
 units[46] = ['120'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1642. ";
 preguntaids[46] = 1642


//  Id pregunta: 1582 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme con la metodolog&iacute;a METRICA 3, constituye una t&eacute;cnica de estimaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Diagrama de Gantt";
 choices[47][1] = "Estructura de descomposici&oacute;n del Trabajo (WBS- Work Breakdonw Structure)";
 choices[47][2] = "M&eacute;todo MARK II";
 choices[47][3] = "Diagrama de extrapolaci&oacute;n";
 answers[47] = 2;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 1582. ";
 preguntaids[47] = 1582


//  Id pregunta: 1590 Año de creación de pregunta: 2016
 questions[48]= "49)  El modelo entidad/relaci&oacute;n est&aacute; formado por:";
 choices[48]= new Array();
 choices[48][0] = "Clases, objetos e instancias.";
 choices[48][1] = "Variables y m&eacute;todos.";
 choices[48][2] = "Entidades, atributos y relaciones.";
 choices[48][3] = "Entidades. Objetos y clases.";
 answers[48] = 2;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1590. ";
 preguntaids[48] = 1590


//  Id pregunta: 1586 Año de creación de pregunta: 2016
 questions[49]= "50)  En un DFD (Diagrama de Flujos de Datos), los flujos de datos que comunican procesos con almacenes pueden ser de diversos tipos. Entre ellos se encuentran los flujos de datos:";
 choices[49]= new Array();
 choices[49][0] = "De iteracci&oacute;n";
 choices[49][1] = "De di&aacute;logo";
 choices[49][2] = "De sincronizaci&oacute;n.";
 choices[49][3] = "De interrelaci&oacute;n.";
 answers[49] = 1;
 units[49] = ['86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 1586. ";
 preguntaids[49] = 1586


//  Id pregunta: 1632 Año de creación de pregunta: 2016
 questions[50]= "51)  Para evaluar el comportamiento de un sistema es necesario disponer de una serie de medidas cuantitativas. La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado, se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Productividad.";
 choices[50][1] = "Capacidad.";
 choices[50][2] = "Overhead.";
 choices[50][3] = "Tiempo de respuesta.";
 answers[50] = 0;
 units[50] = ['39'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 1632. ";
 preguntaids[50] = 1632


//  Id pregunta: 1606 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Es posible incluir c&oacute;digo JavaScript en un script ASP?";
 choices[51]= new Array();
 choices[51][0] = "No, es imposible pues ASP es de Microsoft y JavaScript es un est&aacute;ndar abierto.";
 choices[51][1] = "S&iacute;, comenzando el documento con una sentencia &lt;%@ language=&quot;javascript&quot; %&gt;.";
 choices[51][2] = "S&iacute;, comenzando el documento con una sentencia &lt;% language=&quot;javascript&quot; %&gt;.";
 choices[51][3] = "S&iacute;, comenzando el documento con una sentencia &lt;% language=&quot;javascript&quot; %&gt;, y finaliz&aacute;ndolo con &lt;%/ language=&quot;javascript&quot; %&gt;.";
 answers[51] = 1;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1606. ";
 preguntaids[51] = 1606


//  Id pregunta: 1616 Año de creación de pregunta: 2016
 questions[52]= "53)  En sistemas windows, se&ntilde;ale cu&aacute;l es la herramienta que permite realizar tareas de inventario, distribuci&oacute;n de software y control remoto:";
 choices[52]= new Array();
 choices[52][0] = "SMS, system management service.";
 choices[52][1] = "SAK, system admistration kit.";
 choices[52][2] = "AMK, administration and management kit.";
 choices[52][3] = "RSM, remote server manager.";
 answers[52] = 0;
 units[52] = ['58'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1616. ";
 preguntaids[52] = 1616


//  Id pregunta: 1598 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n M&eacute;trica 3, en la construcci&oacute;n de un sistema de informaci&oacute;n (CSI), un &quot;analista&quot; participa, entre otras, en las actividades de:";
 choices[53]= new Array();
 choices[53][0] = "CSI1 (Preparaci&oacute;n del entorno de generaci&oacute;n y construcci&oacute;n).";
 choices[53][1] = "CSI2 (Generaci&oacute;n del c&oacute;digo de los componentes y procedimientos).";
 choices[53][2] = "CSI3 (Ejecuci&oacute;n de las pruebas unitarias).";
 choices[53][3] = "CSI5 (Ejecuci&oacute;n de las pruebas del sistema).";
 answers[53] = 3;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 1598. ";
 preguntaids[53] = 1598


//  Id pregunta: 1641 Año de creación de pregunta: 2016
 questions[54]= "55)  Las funciones &quot;hash&quot; en los procesos de firma electr&oacute;nica se emplean para:";
 choices[54]= new Array();
 choices[54][0] = "Garantizar la integridad de lo firmado.";
 choices[54][1] = "Asegurar la confidencialidad de lo firmado.";
 choices[54][2] = "Autenticar al firmante.";
 choices[54][3] = "Asegurar el no repudio del firmante.";
 answers[54] = 0;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1641. ";
 preguntaids[54] = 1641


//  Id pregunta: 1607 Año de creación de pregunta: 2016
 questions[55]= "56)  En M&eacute;trica 3, entre las actividades y tareas de Aseguramiento de la Calidad contempladas en el proceso ASI (An&aacute;lisis del Sistema de Informaci&oacute;n), se encuentra:";
 choices[55]= new Array();
 choices[55][0] = "Establecimiento del Plan de Aseguramiento de la calidad.";
 choices[55][1] = "Revisi&oacute;n del cat&aacute;logo de requisitos y la consistencia entre productos.";
 choices[55][2] = "Registro de la aceptaci&oacute;n de la arquitectura del sistema.";
 choices[55][3] = "Revisi&oacute;n del c&oacute;digo de componentes y procedimientos.";
 answers[55] = 1;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1607. ";
 preguntaids[55] = 1607


//  Id pregunta: 1639 Año de creación de pregunta: 2016
 questions[56]= "57)  Las redes ATM se caracterizan por:";
 choices[56]= new Array();
 choices[56][0] = "Las c&eacute;lulas se transmiten a intervalos regulares.";
 choices[56][1] = "Se realiza control de errores en el campo de datos.";
 choices[56][2] = "No se garantiza que las c&eacute;lulas llegan a su destino en el mismo orden en el que fueron transmitidas.";
 choices[56][3] = "Se realiza control de flujo en la red ATM.";
 answers[56] = 0;
 units[56] = ['107'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1639. ";
 preguntaids[56] = 1639


//  Id pregunta: 1575 Año de creación de pregunta: 2016
 questions[57]= "58)  En el &aacute;mbito del modelo TCP/IP, se&ntilde;ale cu&aacute;l de las siguientes siglas identifica un algoritmo de encaminamiento:";
 choices[57]= new Array();
 choices[57][0] = "NTP (Network Time Protocol)";
 choices[57][1] = "RIP (Routing Information Protocol)";
 choices[57][2] = "RPC (Remote Procedure Call)";
 choices[57][3] = "FTP (File Transfer Protocol)";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1575. ";
 preguntaids[57] = 1575


//  Id pregunta: 1585 Año de creación de pregunta: 2016
 questions[58]= "59)  La t&eacute;cnica de Desarrollo Conjunto de Aplicaciones (JAD, Joint Application Development):";
 choices[58]= new Array();
 choices[58][0] = "Se aplica para identificar requisitos en el campo de los sistemas de informaci&oacute;n.";
 choices[58][1] = "Implica m&aacute;s a los ingenieros de requisitos y menos a los usuarios y clientes.";
 choices[58][2] = "Requiere m&aacute;s tiempo para contrastar las opiniones con los clientes.";
 choices[58][3] = "Implica la realizaci&oacute;n de entrevistas individuales para su posterior puesta en com&uacute;n.";
 answers[58] = 0;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1585. ";
 preguntaids[58] = 1585


//  Id pregunta: 1581 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique la afirmaci&oacute;n correcta referida al Modelo Incremental de desarrollo de software:";
 choices[59]= new Array();
 choices[59][0] = "Es una adaptaci&oacute;n a &ldquo;alta velocidad&rdquo; del modelo lineal secuencial en el que se logra el desarrollo r&aacute;pido utilizando una construcci&oacute;n basada en componentes.";
 choices[59][1] = "A diferencia de la construcci&oacute;n de prototipos, el modelo incremental se centra en la entrega de un producto parcialmente operativo con cada incremento.";
 choices[59][2] = "Combina elementos del modelo en espiral con la filosof&iacute;a interactiva de construcci&oacute;n de prototipos.";
 choices[59][3] = "Los primeros incrementos son ya versiones completas del producto final, proporcionan al usuario la funcionalidad que precisa y tambi&eacute;n una plataforma para la evaluaci&oacute;n.";
 answers[59] = 1;
 units[59] = ['82'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1581. ";
 preguntaids[59] = 1581


//  Id pregunta: 1577 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique cu&aacute;l de las siguientes respuestas NO constituye una actividad del modelo de ciclo de vida de sistemas de informaci&oacute;n en espiral:";
 choices[60]= new Array();
 choices[60][0] = "Planificaci&oacute;n";
 choices[60][1] = "An&aacute;lisis de Riesgos";
 choices[60][2] = "Evaluaci&oacute;n";
 choices[60][3] = "Adquisici&oacute;n";
 answers[60] = 3;
 units[60] = ['82'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1577. ";
 preguntaids[60] = 1577


//  Id pregunta: 1625 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;ntos elementos conductores diferenciados tiene un cable coaxial?";
 choices[61]= new Array();
 choices[61][0] = "4";
 choices[61][1] = "3";
 choices[61][2] = "2";
 choices[61][3] = "1";
 answers[61] = 2;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1625. ";
 preguntaids[61] = 1625


//  Id pregunta: 1592 Año de creación de pregunta: 2016
 questions[62]= "63)  En un diagrama de flujo de datos";
 choices[62]= new Array();
 choices[62][0] = "El proceso nunca es el origen ni el final de los datos.";
 choices[62][1] = "Se representan las relaciones entre las entidades externas.";
 choices[62][2] = "Los almacenes pueden estar comunicados entre s&iacute;.";
 choices[62][3] = "No es necesario reflejar todos los flujos de datos en el diagrama que detalla a un proceso.";
 answers[62] = 0;
 units[62] = ['86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 1592. ";
 preguntaids[62] = 1592


//  Id pregunta: 1633 Año de creación de pregunta: 2016
 questions[63]= "64)  Dentro de la arquitectura MPLS -Multiple Protocol Label Switching-, tecnolog&iacute;a de conmutaci&oacute;n para circuitos virtuales, &iquest;c&oacute;mo se denomina al tr&aacute;fico que se encamina bajo una etiqueta?";
 choices[63]= new Array();
 choices[63][0] = "FER";
 choices[63][1] = "LSB";
 choices[63][2] = "FEC";
 choices[63][3] = "LSR";
 answers[63] = 2;
 units[63] = ['107'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1633. ";
 preguntaids[63] = 1633


//  Id pregunta: 1644 Año de creación de pregunta: 2016
 questions[64]= "65)  Interprete el funcionamiento de aplicar la m&aacute;scara de subred 255.255.240.0 a la direcci&oacute;n IP 132.90.132.5:";
 choices[64]= new Array();
 choices[64][0] = "Host 5 de la subred 132.90.132.0";
 choices[64][1] = "Host 4.1 de la subred 132.90.128.4";
 choices[64][2] = "Host 4 de la subred 132.90.128.5";
 choices[64][3] = "Host 4.5 de la subred 132.90.128.0";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 1644. ";
 preguntaids[64] = 1644


//  Id pregunta: 1600 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de estas estrategias NO es t&iacute;pica de las pruebas de caja negra?";
 choices[65]= new Array();
 choices[65][0] = "El cubrimiento l&oacute;gico";
 choices[65][1] = "La partici&oacute;n en clases de equivalencia";
 choices[65][2] = "El an&aacute;lisis de valores l&iacute;mite";
 choices[65][3] = "La comparaci&oacute;n de versiones";
 answers[65] = 0;
 units[65] = ['92'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 1600. ";
 preguntaids[65] = 1600


//  Id pregunta: 1638 Año de creación de pregunta: 2016
 questions[66]= "67)  En relaci&oacute;n con el protocolo MPLS (Multiprotocol Label Switching), indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[66]= new Array();
 choices[66][0] = "En MPLS el camino que el tr&aacute;fico sigue por los nodos est&aacute; prefijado desde el origen.";
 choices[66][1] = "En MPLS se puede ofrecer un conjunto mayor y m&aacute;s flexible de servicios sobre las redes de operador, si bien, el mecanismo de conmutaci&oacute;n de etiquetas es algo m&aacute;s lento que el mecanismo de encaminamiento IP.";
 choices[66][2] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 3 con protocolo IP";
 choices[66][3] = "Sobre MPLS se pueden establecer Redes Privadas Virtuales de nivel 2 con VPLS";
 answers[66] = 1;
 units[66] = ['107'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1638. ";
 preguntaids[66] = 1638


//  Id pregunta: 1646 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es la velocidad m&aacute;xima de bajada con el est&aacute;ndar G.992.5, conocido como ADSL2+?";
 choices[67]= new Array();
 choices[67][0] = "10 Mbps";
 choices[67][1] = "12 Mbps";
 choices[67][2] = "2 Mbps";
 choices[67][3] = "24 Mbps";
 answers[67] = 3;
 units[67] = ['106'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1646. ";
 preguntaids[67] = 1646


//  Id pregunta: 1623 Año de creación de pregunta: 2016
 questions[68]= "69)  En las redes Ethernet las especificaciones del medio son variadas. Para la especificaci&oacute;n 1000Base-T, indique qu&eacute; cable se utiliza:";
 choices[68]= new Array();
 choices[68][0] = "FTP";
 choices[68][1] = "Coaxial fino";
 choices[68][2] = "UTP-5";
 choices[68][3] = "UTP-3";
 answers[68] = 2;
 units[68] = ['104'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1623. ";
 preguntaids[68] = 1623


//  Id pregunta: 1587 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes enunciados NO es un objetivo en la elaboraci&oacute;n del modelo conceptual de datos?";
 choices[69]= new Array();
 choices[69][0] = "Identificar y definir las entidades que quedan dentro del &aacute;mbito del sistema.";
 choices[69][1] = "Identificar y definir los m&eacute;todos asociados a cada una de las entidades del sistema.";
 choices[69][2] = "Identificar y definir los atributos de cada entidad y sus dominios correspondientes.";
 choices[69][3] = "Identificar y definir las relaciones existentes entre las entidades.";
 answers[69] = 1;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1587. ";
 preguntaids[69] = 1587


//  Id pregunta: 1584 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con la metodolog&iacute;a METRICA v3, se&ntilde;ale cu&aacute;l es el perfil que realiza la estimaci&oacute;n del esfuerzo necesario para llevar a cabo el proyecto, selecciona la estrategia de desarrollo, determina la estructura del mismo seleccionando los procesos principales que lo integran, fija el calendario de hitos y entregas, y establece la planificaci&oacute;n del proyecto:";
 choices[70]= new Array();
 choices[70][0] = "Consultor de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[70][1] = "Director de Sistemas de Informaci&oacute;n.";
 choices[70][2] = "Alto directivo usuario.";
 choices[70][3] = "Jefe de Proyecto.";
 answers[70] = 3;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 1584. ";
 preguntaids[70] = 1584


//  Id pregunta: 1634 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de los siguientes NO es un paquete que se curse en el nivel 3 del protocolo X.25 en la fase de establecimiento de la conexi&oacute;n";
 choices[71]= new Array();
 choices[71][0] = "CALL REQUEST";
 choices[71][1] = "INCOMING CALL";
 choices[71][2] = "CLEAR INDICATION";
 choices[71][3] = "CALL CONECTED";
 answers[71] = 2;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1634. ";
 preguntaids[71] = 1634


//  Id pregunta: 1595 Año de creación de pregunta: 2016
 questions[72]= "73)  El modelo de datos se compone de tres piezas de informaci&oacute;n interrelacionadas: el objeto de datos, los atributos y la relaci&oacute;n que conecta objetos de datos entre s&iacute;. Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al objeto de datos:";
 choices[72]= new Array();
 choices[72][0] = "Solamente encapsula datos, no hay referencia dentro de un objeto de datos a operaciones que act&uacute;an en el dato.";
 choices[72][1] = "Se usa para nombrar una ocurrencia de un atributo.";
 choices[72][2] = "Proporciona una indicaci&oacute;n de c&oacute;mo se transforman los datos a medida que se avanza en el sistema.";
 choices[72][3] = "Nunca puede ser una entidad externa.";
 answers[72] = 0;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1595. ";
 preguntaids[72] = 1595


//  Id pregunta: 1603 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; diagramas de los empleados en UML (Unified Modeling Language) describen el comportamiento din&aacute;mico del sistema mediante el paso de mensajes entre los objetos del mismo?";
 choices[73]= new Array();
 choices[73][0] = "Diagramas de interacci&oacute;n.";
 choices[73][1] = "Diagramas de flujo de datos.";
 choices[73][2] = "Diagramas de casos de uso.";
 choices[73][3] = "Diagramas de estados.";
 answers[73] = 0;
 units[73] = ['86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1603. ";
 preguntaids[73] = 1603


//  Id pregunta: 1612 Año de creación de pregunta: 2016
 questions[74]= "75)  En la gesti&oacute;n del espacio de un disco, en un sistema operativo de tipo UNIX, se&ntilde;ale qu&eacute; proporciona el comando &quot;du&quot;:";
 choices[74]= new Array();
 choices[74][0] = "El espacio disponible.";
 choices[74][1] = "El tipo de archivos.";
 choices[74][2] = "El tipo de datos.";
 choices[74][3] = "El espacio que ocupa un directorio y sus archivos.";
 answers[74] = 3;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1612. ";
 preguntaids[74] = 1612


