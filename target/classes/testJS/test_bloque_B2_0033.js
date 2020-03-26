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
//  Id pregunta: 8017 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[0]= new Array();
 choices[0][0] = "Read Commited (lectura confirmada).";
 choices[0][1] = "Serializable.";
 choices[0][2] = "Read uncornmited (lectura no confirmada),";
 choices[0][3] = "Repeatable read (lectura repetible).";
 answers[0] = 3;
 units[0] = ['60', '61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8017. Examen TIC A2 2010";
 preguntaids[0] = 8017


//  Id pregunta: 7920 Año de creación de pregunta: 2011
 questions[1]= "2)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[1]= new Array();
 choices[1][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[1][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[1][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[1][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[1] = 0;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7920. Examen TIC A1 2010";
 preguntaids[1] = 7920


//  Id pregunta: 7823 Año de creación de pregunta: 2010
 questions[2]= "3)  Los cifrados de clave p&uacute;blica:";
 choices[2]= new Array();
 choices[2][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos.";
 choices[2][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular.";
 choices[2][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora.";
 choices[2][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves.";
 answers[2] = 0;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7823. ";
 preguntaids[2] = 7823


//  Id pregunta: 7843 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[3]= new Array();
 choices[3][0] = "Ilimitada.";
 choices[3][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[3][2] = "30 meses.";
 choices[3][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[3] = 1;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7843. Examen TIC A1 2010";
 preguntaids[3] = 7843


//  Id pregunta: 7922 Año de creación de pregunta: 2011
 questions[4]= "5)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[4]= new Array();
 choices[4][0] = "syslog, wtmp, lastlog, sulog.";
 choices[4][1] = "syslogd, utmpx, faillog, loginlog.";
 choices[4][2] = "syslog, debug, sulog, loginlog.";
 choices[4][3] = "syslog, btmp, lastlog, loginlog.";
 answers[4] = 2;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7922. Examen TIC A1 2010";
 preguntaids[4] = 7922


//  Id pregunta: 7814 Año de creación de pregunta: 2010
 questions[5]= "6)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[5]= new Array();
 choices[5][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden.";
 choices[5][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime.";
 choices[5][2] = ".NET Framework 4.6 ya est&aacute; disponible en la Web de Microsoft.";
 choices[5][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes.";
 answers[5] = 1;
 units[5] = ['63'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7814. ";
 preguntaids[5] = 7814


//  Id pregunta: 7827 Año de creación de pregunta: 2010
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[6]= new Array();
 choices[6][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes.";
 choices[6][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos.";
 choices[6][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original.";
 choices[6][3] = "Las funciones hash requieren el uso de claves de cifrado.";
 answers[6] = 1;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7827. ";
 preguntaids[6] = 7827


//  Id pregunta: 8011 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[7]= new Array();
 choices[7][0] = "1992";
 choices[7][1] = "2008";
 choices[7][2] = "2011";
 choices[7][3] = "2012";
 answers[7] = 2;
 units[7] = ['60'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8011. Examen TIC A2 2010";
 preguntaids[7] = 8011


//  Id pregunta: 7909 Año de creación de pregunta: 2011
 questions[8]= "9)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[8]= new Array();
 choices[8][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[8][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[8][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[8][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[8] = 1;
 units[8] = ['67'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7909. Examen TIC A1 2010";
 preguntaids[8] = 7909


//  Id pregunta: 7877 Año de creación de pregunta: 2011
 questions[9]= "10)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[9]= new Array();
 choices[9][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[9][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[9][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[9][3] = "Permite actualizaciones en cascada.";
 answers[9] = 2;
 units[9] = ['60'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7877. Examen TIC A1 2010";
 preguntaids[9] = 7877


//  Id pregunta: 7881 Año de creación de pregunta: 2011
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[10]= new Array();
 choices[10][0] = "Intercambian tramas SCSI sobre FC.";
 choices[10][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[10][2] = "No permite implementar iSCSI en software.";
 choices[10][3] = "Puede usar TCP/IP como transporte.";
 answers[10] = 3;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7881. Examen TIC A1 2010";
 preguntaids[10] = 7881


//  Id pregunta: 7873 Año de creación de pregunta: 2011
 questions[11]= "12)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que:";
 choices[11]= new Array();
 choices[11][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente.";
 choices[11][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form.";
 choices[11][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n.";
 choices[11][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[11] = 0;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7873. Examen TIC A1 2010";
 preguntaids[11] = 7873


//  Id pregunta: 8015 Año de creación de pregunta: 2011
 questions[12]= "13)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[12]= new Array();
 choices[12][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[12][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[12][2] = "Facilitar, al menos, un navegador.";
 choices[12][3] = "Crear la interfaz del hardware con el usuario.";
 answers[12] = 3;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8015. Examen TIC A2 2010";
 preguntaids[12] = 8015


//  Id pregunta: 7879 Año de creación de pregunta: 2011
 questions[13]= "14)  En una tabla de una base de datos relacional:";
 choices[13]= new Array();
 choices[13][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[13][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[13][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[13][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder a la tabla.";
 answers[13] = 3;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7879. Examen TIC A1 2010";
 preguntaids[13] = 7879


//  Id pregunta: 7994 Año de creación de pregunta: 2011
 questions[14]= "15)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[14]= new Array();
 choices[14][0] = "IIS (Internet Information Services)";
 choices[14][1] = "Apache";
 choices[14][2] = "Joomla";
 choices[14][3] = "Microsoft Web Server";
 answers[14] = 0;
 units[14] = ['63'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7994. Examen TIC A2 2010";
 preguntaids[14] = 7994


//  Id pregunta: 7846 Año de creación de pregunta: 2010
 questions[15]= "16)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[15][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[15][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[15][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[15] = 0;
 units[15] = ['77'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7846. Examen TIC A1 2010";
 preguntaids[15] = 7846


//  Id pregunta: 7851 Año de creación de pregunta: 2011
 questions[16]= "17)  En los sistemas MIMD:";
 choices[16]= new Array();
 choices[16][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[16][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[16][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[16][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[16] = 3;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7851. Examen TIC A1 2010";
 preguntaids[16] = 7851


//  Id pregunta: 7831 Año de creación de pregunta: 2010
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[17]= new Array();
 choices[17][0] = "Los nodos tienen que estar dedicados.";
 choices[17][1] = "Todos los sistemas deben ser homog&eacute;neos.";
 choices[17][2] = "La escalabilidad es parametrizable.";
 choices[17][3] = "Los recursos no se localizan din&aacute;micamente.";
 answers[17] = 2;
 units[17] = ['49'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7831. ";
 preguntaids[17] = 7831


//  Id pregunta: 7995 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Para que sirve la palabra clave &quot;static&quot; en Java?";
 choices[18]= new Array();
 choices[18][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[18][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[18][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[18][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[18] = 1;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7995. Examen TIC A2 2010";
 preguntaids[18] = 7995


//  Id pregunta: 8019 Año de creación de pregunta: 2011
 questions[19]= "20)  Dentro de las arquitecturas de almacenamiento, las siglas inglesas SSA responden a:";
 choices[19]= new Array();
 choices[19][0] = "Serialized Storage Area.";
 choices[19][1] = "Serial Storage Area.";
 choices[19][2] = "Serial Storage Architecture.";
 choices[19][3] = "Serialized Storage Architecture.";
 answers[19] = 2;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8019. Examen TIC A2 2010";
 preguntaids[19] = 8019


//  Id pregunta: 8024 Año de creación de pregunta: 2011
 questions[20]= "21)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[20]= new Array();
 choices[20][0] = "54 Mbits/s.";
 choices[20][1] = "4,5 MBytes/s.";
 choices[20][2] = "36 MBytes/s.";
 choices[20][3] = "9 MBytes/s.";
 answers[20] = 1;
 units[20] = ['53'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8024. Examen TIC A2 2010";
 preguntaids[20] = 8024


//  Id pregunta: 8000 Año de creación de pregunta: 2011
 questions[21]= "22)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[21]= new Array();
 choices[21][0] = "Sun Microsystems.";
 choices[21][1] = "Microsoft.";
 choices[21][2] = "Google.";
 choices[21][3] = "IBM.";
 answers[21] = 0;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8000. Examen TIC A2 2010";
 preguntaids[21] = 8000


//  Id pregunta: 7825 Año de creación de pregunta: 2010
 questions[22]= "23)  En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[22]= new Array();
 choices[22][0] = "Suponer falso todo lo que no est&aacute; almacenado en la base de hechos.";
 choices[22][1] = "Suponer cierto todo lo que est&aacute; almacenado en la base de hechos.";
 choices[22][2] = "Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos.";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = 0;
 units[22] = ['67'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7825. ";
 preguntaids[22] = 7825


//  Id pregunta: 7954 Año de creación de pregunta: 2011
 questions[23]= "24)  Un documento firmado digitalmente incluye la huella digital:";
 choices[23]= new Array();
 choices[23][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[23][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[23][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[23][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7954. Examen TIC A2 2010";
 preguntaids[23] = 7954


//  Id pregunta: 7875 Año de creación de pregunta: 2011
 questions[24]= "25)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net:";
 choices[24]= new Array();
 choices[24][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos.";
 choices[24][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n.";
 choices[24][2] = "No dispone de clases para la gesti&oacute;n de la seguridad.";
 choices[24][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador.";
 answers[24] = 2;
 units[24] = ['63'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7875. Examen TIC A1 2010";
 preguntaids[24] = 7875


//  Id pregunta: 7906 Año de creación de pregunta: 2011
 questions[25]= "26)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[25]= new Array();
 choices[25][0] = "RAID 3.";
 choices[25][1] = "RAID 4.";
 choices[25][2] = "RAID 5.";
 choices[25][3] = "RAID 6.";
 answers[25] = 0;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7906. Examen TIC A1 2010";
 preguntaids[25] = 7906


//  Id pregunta: 7916 Año de creación de pregunta: 2011
 questions[26]= "27)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[26]= new Array();
 choices[26][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[26][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[26][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[26][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[26] = 0;
 units[26] = ['54'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7916. Examen TIC A1 2010";
 preguntaids[26] = 7916


//  Id pregunta: 7905 Año de creación de pregunta: 2011
 questions[27]= "28)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[27][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[27][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[27][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[27] = 0;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7905. Examen TIC A1 2010";
 preguntaids[27] = 7905


//  Id pregunta: 7918 Año de creación de pregunta: 2011
 questions[28]= "29)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[28]= new Array();
 choices[28][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[28][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[28][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[28][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[28] = 0;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7918. Examen TIC A1 2010";
 preguntaids[28] = 7918


//  Id pregunta: 7828 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[29]= new Array();
 choices[29][0] = "Software de gesti&oacute;n de incidencias.";
 choices[29][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente.";
 choices[29][2] = "Datawarehouse.";
 choices[29][3] = "Call-center: software de visi&oacute;n unificada de clientes.";
 answers[29] = 2;
 units[29] = ['69'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7828. ";
 preguntaids[29] = 7828


//  Id pregunta: 8002 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor?";
 choices[30]= new Array();
 choices[30][0] = "JavaScript";
 choices[30][1] = "Applets";
 choices[30][2] = "JSP";
 choices[30][3] = "VisualScript";
 answers[30] = 2;
 units[30] = ['62'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8002. Examen TIC A2 2010";
 preguntaids[30] = 8002


//  Id pregunta: 7833 Año de creación de pregunta: 2010
 questions[31]= "32)  El sistema de redundancia que calcula dos bloques de paridad independientes por cada escritura, enviando cada uno de los bloques de paridad a un disco diferente y permite recuperarse del fallo simult&aacute;neo de dos discos es:";
 choices[31]= new Array();
 choices[31][0] = "RAID 0.";
 choices[31][1] = "RAID 6.";
 choices[31][2] = "RAID 5.";
 choices[31][3] = "RAID 3.";
 answers[31] = 1;
 units[31] = ['53'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7833. ";
 preguntaids[31] = 7833


//  Id pregunta: 8008 Año de creación de pregunta: 2011
 questions[32]= "33)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos?";
 choices[32]= new Array();
 choices[32][0] = "Redes de Shelman.";
 choices[32][1] = "Redes de Coperfield.";
 choices[32][2] = "Redes ART.";
 choices[32][3] = "M&aacute;quina de Gauss.";
 answers[32] = 2;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8008. Examen TIC A2 2010";
 preguntaids[32] = 8008


//  Id pregunta: 7968 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo?";
 choices[33]= new Array();
 choices[33][0] = "//";
 choices[33][1] = "// JOB";
 choices[33][2] = "//*";
 choices[33][3] = "// DD";
 answers[33] = 0;
 units[33] = ['55'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7968. Examen TIC A2 2010";
 preguntaids[33] = 7968


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "SOAP envelope.";
 choices[34][1] = "SOAP binding framework";
 choices[34][2] = "SOAP encoding rules.";
 choices[34][3] = "SOAP  RPC representation.";
 answers[34] = 2;
 units[34] = ['55'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[34] = 7997


//  Id pregunta: 7910 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[35]= new Array();
 choices[35][0] = "doPut";
 choices[35][1] = "doTrace.";
 choices[35][2] = "doErrorC";
 choices[35][3] = "doOptions.";
 answers[35] = 2;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7910. Examen TIC A1 2010";
 preguntaids[35] = 7910


//  Id pregunta: 7866 Año de creación de pregunta: 2011
 questions[36]= "37)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[36]= new Array();
 choices[36][0] = "AdvFS";
 choices[36][1] = "MFS";
 choices[36][2] = "JFS2";
 choices[36][3] = "XFS";
 answers[36] = 1;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7866. Examen TIC A1 2010";
 preguntaids[36] = 7866


//  Id pregunta: 7870 Año de creación de pregunta: 2011
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica):";
 choices[37]= new Array();
 choices[37][0] = "Metadatos de explotaci&oacute;n.";
 choices[37][1] = "Metadatos de descubrimiento.";
 choices[37][2] = "Metadatos de exploraci&oacute;n.";
 choices[37][3] = "Metadatos de representaci&oacute;n.";
 answers[37] = 3;
 units[37] = ['71'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7870. Examen TIC A1 2010";
 preguntaids[37] = 7870


//  Id pregunta: 7921 Año de creación de pregunta: 2011
 questions[38]= "39)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[38]= new Array();
 choices[38][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[38][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[38][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[38][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[38] = 3;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7921. Examen TIC A1 2010";
 preguntaids[38] = 7921


//  Id pregunta: 7999 Año de creación de pregunta: 2011
 questions[39]= "40)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[39]= new Array();
 choices[39][0] = "App_Data.";
 choices[39][1] = "Bin.";
 choices[39][2] = "App_WebReferences";
 choices[39][3] = "Compilation";
 answers[39] = 1;
 units[39] = ['63', '124'];
 blocks[39] = ['B2', 'B4'];
 comments[39] = "Id Pregunta: 7999. Examen TIC A2 2010";
 preguntaids[39] = 7999


//  Id pregunta: 7844 Año de creación de pregunta: 2011
 questions[40]= "41)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[40]= new Array();
 choices[40][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[40][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[40][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[40][3] = "El gestor de archivos oficial de GNOME.";
 answers[40] = 1;
 units[40] = ['66'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7844. Examen TIC A1 2010";
 preguntaids[40] = 7844


//  Id pregunta: 7969 Año de creación de pregunta: 2011
 questions[41]= "42)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[41]= new Array();
 choices[41][0] = "15";
 choices[41][1] = "105";
 choices[41][2] = "210";
 choices[41][3] = "30.";
 answers[41] = 1;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7969. Examen TIC A2 2010";
 preguntaids[41] = 7969


//  Id pregunta: 7887 Año de creación de pregunta: 2011
 questions[42]= "43)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[42][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[42][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[42][3] = "FACE s&oacute;lo permite el env&iacute;o de facturas electr&oacute;nicas mediante servicios web";
 answers[42] = 1;
 units[42] = ['70'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7887. Examen TIC A1 2010";
 preguntaids[42] = 7887


//  Id pregunta: 7932 Año de creación de pregunta: 2011
 questions[43]= "44)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[43]= new Array();
 choices[43][0] = "El fichero manifest.mf.";
 choices[43][1] = "Un fichero .class por cada clase compilada.";
 choices[43][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[43][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[43] = 3;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7932. Examen TIC A1 2010";
 preguntaids[43] = 7932


//  Id pregunta: 7998 Año de creación de pregunta: 2011
 questions[44]= "45)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[44]= new Array();
 choices[44][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[44][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[44][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[44][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[44] = 0;
 units[44] = ['63', '124'];
 blocks[44] = ['B2', 'B4'];
 comments[44] = "Id Pregunta: 7998. Examen TIC A2 2010";
 preguntaids[44] = 7998


//  Id pregunta: 7817 Año de creación de pregunta: 2010
 questions[45]= "46)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &laquo;applets de Java&raquo;?";
 choices[45]= new Array();
 choices[45][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente.";
 choices[45][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &laquo;Sandbox&raquo;.";
 choices[45][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnolog&iacute;a &laquo;authenticode&raquo;.";
 choices[45][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas.";
 answers[45] = 1;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7817. ";
 preguntaids[45] = 7817


//  Id pregunta: 7871 Año de creación de pregunta: 2011
 questions[46]= "47)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF:";
 choices[46]= new Array();
 choices[46][0] = "0x100000001.";
 choices[46][1] = "0xFFFFFFFF.";
 choices[46][2] = "0xFFFE0001.";
 choices[46][3] = "0xFFFE0002";
 answers[46] = 2;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7871. Examen TIC A1 2010";
 preguntaids[46] = 7871


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[47]= new Array();
 choices[47][0] = "Unity Application Block,";
 choices[47][1] = "Logging Application Block.";
 choices[47][2] = "Ajax Control Toolkit";
 choices[47][3] = "Cached XML Data Mapper";
 answers[47] = 0;
 units[47] = ['63', '124'];
 blocks[47] = ['B2', 'B4'];
 comments[47] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[47] = 7996


//  Id pregunta: 7815 Año de creación de pregunta: 2010
 questions[48]= "49)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript:";
 choices[48]= new Array();
 choices[48][0] = "Microsoft.";
 choices[48][1] = "SUN.";
 choices[48][2] = "Netscape.";
 choices[48][3] = "W3C.";
 answers[48] = 2;
 units[48] = ['62'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7815. ";
 preguntaids[48] = 7815


//  Id pregunta: 7952 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[49]= new Array();
 choices[49][0] = "XAdES-X.";
 choices[49][1] = "XAdES-X-L.";
 choices[49][2] = "XAdES-C.";
 choices[49][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[49] = 1;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7952. Examen TIC A2 2010";
 preguntaids[49] = 7952


//  Id pregunta: 7834 Año de creación de pregunta: 2010
 questions[50]= "51)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[50]= new Array();
 choices[50][0] = "Es una especificaci&oacute;n desarrollada por la W3C.";
 choices[50][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar.";
 choices[50][2] = "P3P est&aacute; basado en CCXML.";
 choices[50][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P.";
 answers[50] = 2;
 units[50] = ['74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7834. ";
 preguntaids[50] = 7834


//  Id pregunta: 7849 Año de creación de pregunta: 2011
 questions[51]= "52)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[51]= new Array();
 choices[51][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[51][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[51][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[51][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[51] = 3;
 units[51] = ['69'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7849. Examen TIC A1 2010";
 preguntaids[51] = 7849


//  Id pregunta: 7862 Año de creación de pregunta: 2011
 questions[52]= "53)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[52]= new Array();
 choices[52][0] = "Exclusivamente el sistema ETRS89.";
 choices[52][1] = "Los sistemas ED50 y ETRS89.";
 choices[52][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[52][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[52] = 2;
 units[52] = ['71'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7862. Examen TIC A1 2010";
 preguntaids[52] = 7862


//  Id pregunta: 7990 Año de creación de pregunta: 2011
 questions[53]= "54)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[53]= new Array();
 choices[53][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[53][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[53][2] = "No contiene ciclos.";
 choices[53][3] = "Es conexo y contiene un ciclo.";
 answers[53] = 1;
 units[53] = ['68'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7990. Examen TIC A2 2010";
 preguntaids[53] = 7990


//  Id pregunta: 8009 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[54]= new Array();
 choices[54][0] = "Predicci&oacute;n.";
 choices[54][1] = "Categorizaci&oacute;n.";
 choices[54][2] = "Clustering.";
 choices[54][3] = "Estad&iacute;sticas.";
 answers[54] = 2;
 units[54] = ['72'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8009. Examen TIC A2 2010";
 preguntaids[54] = 8009


//  Id pregunta: 7810 Año de creación de pregunta: 2010
 questions[55]= "56)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[55]= new Array();
 choices[55][0] = "Radiocomunicaciones (ITU-R).";
 choices[55][1] = "Estandarizaci&oacute;n (ITU-T).";
 choices[55][2] = "Seguridad (ITU-S).";
 choices[55][3] = "Desarrollo (ITU-D).";
 answers[55] = 2;
 units[55] = ['49'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7810. ";
 preguntaids[55] = 7810


//  Id pregunta: 7933 Año de creación de pregunta: 2011
 questions[56]= "57)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica?";
 choices[56]= new Array();
 choices[56][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[56][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[56][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[56][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n.";
 answers[56] = 1;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7933. Examen TIC A2 2010";
 preguntaids[56] = 7933


//  Id pregunta: 7832 Año de creación de pregunta: 2010
 questions[57]= "58)  Se desea representar usando el formalismo de marcos que &laquo;El cuerpo humano se divide en cabeza, tronco y extremidades&raquo;. La etiqueta a utilizar en las relaciones que parten del marco &laquo;cuerpo humano&raquo; y van a los marcos &laquo;cabeza&raquo;, &laquo;tronco&raquo; y &laquo;extremidadeses&raquo; es:";
 choices[57]= new Array();
 choices[57][0] = "Subclase de.";
 choices[57][1] = "Superclase de.";
 choices[57][2] = "Compuesto de.";
 choices[57][3] = "Parte de.";
 answers[57] = 2;
 units[57] = ['68'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7832. ";
 preguntaids[57] = 7832


//  Id pregunta: 7888 Año de creación de pregunta: 2011
 questions[58]= "59)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[58]= new Array();
 choices[58][0] = "1";
 choices[58][1] = "2";
 choices[58][2] = "3";
 choices[58][3] = "4";
 answers[58] = 0;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7888. Examen TIC A1 2010";
 preguntaids[58] = 7888


//  Id pregunta: 7867 Año de creación de pregunta: 2011
 questions[59]= "60)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico:";
 choices[59]= new Array();
 choices[59][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de  Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[59][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[59][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[59][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits.";
 answers[59] = 1;
 units[59] = ['78'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7867. Examen TIC A1 2010";
 preguntaids[59] = 7867


//  Id pregunta: 7931 Año de creación de pregunta: 2011
 questions[60]= "61)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[60]= new Array();
 choices[60][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[60][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[60][2] = "B&uacute;squeda con adversario.";
 choices[60][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[60] = 1;
 units[60] = ['67'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7931. Examen TIC A1 2010";
 preguntaids[60] = 7931


//  Id pregunta: 7808 Año de creación de pregunta: 2010
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes paquetes software se usa para construir grids?";
 choices[61]= new Array();
 choices[61][0] = "Globus Toolkit.";
 choices[61][1] = "Grid Squema Toolkit.";
 choices[61][2] = "EYEE Toolkit.";
 choices[61][3] = "WS-DAI.";
 answers[61] = 0;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7808. ";
 preguntaids[61] = 7808


//  Id pregunta: 7841 Año de creación de pregunta: 2010
 questions[62]= "63)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[62]= new Array();
 choices[62][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning.";
 choices[62][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento.";
 choices[62][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP.";
 choices[62][3] = "S&oacute;lo funciona con el sistema operativo Linux.";
 answers[62] = 3;
 units[62] = ['70'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7841. ";
 preguntaids[62] = 7841


//  Id pregunta: 7860 Año de creación de pregunta: 2011
 questions[63]= "64)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[63]= new Array();
 choices[63][0] = "No est&aacute; en primera forma normal.";
 choices[63][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[63][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[63][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[63] = 2;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7860. Examen TIC A1 2010";
 preguntaids[63] = 7860


//  Id pregunta: 8010 Año de creación de pregunta: 2011
 questions[64]= "65)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[64]= new Array();
 choices[64][0] = "Drill-Down.";
 choices[64][1] = "Slice &amp; Dice.";
 choices[64][2] = "Roll-Up,";
 choices[64][3] = "Drill-Through.";
 answers[64] = 0;
 units[64] = ['72'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8010. Examen TIC A2 2010";
 preguntaids[64] = 8010


//  Id pregunta: 7975 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[65]= new Array();
 choices[65][0] = "ISO 14000-1";
 choices[65][1] = "ISO 18001";
 choices[65][2] = "ISO 19005-1";
 choices[65][3] = "ISO 690";
 answers[65] = 2;
 units[65] = ['80'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7975. Examen TIC A2 2010";
 preguntaids[65] = 7975


//  Id pregunta: 7919 Año de creación de pregunta: 2011
 questions[66]= "67)  La familia de WINDOWS SERVER 2003 soporta clusters de servidor de hasta:";
 choices[66]= new Array();
 choices[66][0] = "16 nodos.";
 choices[66][1] = "4 nodos.";
 choices[66][2] = "8 nodos.";
 choices[66][3] = "32 nodos.";
 answers[66] = 2;
 units[66] = ['58'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7919. Examen TIC A1 2010";
 preguntaids[66] = 7919


//  Id pregunta: 7989 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "&Aacute;rbol Binario.";
 choices[67][1] = "Lista.";
 choices[67][2] = "Lista enlazada.";
 choices[67][3] = "&Aacute;rbol-B.";
 answers[67] = 3;
 units[67] = ['68'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7989. Examen TIC A2 2010";
 preguntaids[67] = 7989


//  Id pregunta: 8021 Año de creación de pregunta: 2011
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[68]= new Array();
 choices[68][0] = "Es un est&aacute;ndar de la IETF.";
 choices[68][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[68][2] = "Necesita una arquitectura de cableado independiente.";
 choices[68][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[68] = 2;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8021. Examen TIC A2 2010";
 preguntaids[68] = 8021


//  Id pregunta: 7951 Año de creación de pregunta: 2011
 questions[69]= "70)  En los sistemas criptogr&aacute;ficos h&iacute;bridos:";
 choices[69]= new Array();
 choices[69][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[69][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico";
 choices[69][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[69][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[69] = 2;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7951. Examen TIC A2 2010";
 preguntaids[69] = 7951


//  Id pregunta: 7890 Año de creación de pregunta: 2011
 questions[70]= "71)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[70]= new Array();
 choices[70][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[70][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[70][2] = "Cliente - IDL Stub - Servidor.";
 choices[70][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[70] = 0;
 units[70] = ['55'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7890. Examen TIC A1 2010";
 preguntaids[70] = 7890


//  Id pregunta: 7907 Año de creación de pregunta: 2011
 questions[71]= "72)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[71]= new Array();
 choices[71][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[71][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[71][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[71][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[71] = 0;
 units[71] = ['68'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7907. Examen TIC A1 2010";
 preguntaids[71] = 7907


//  Id pregunta: 8007 Año de creación de pregunta: 2011
 questions[72]= "73)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)?";
 choices[72]= new Array();
 choices[72][0] = "Redes neuronales artificiales.";
 choices[72][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[72][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[72][3] = "Regla de Inducci&oacute;n.";
 answers[72] = 2;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8007. Examen TIC A2 2010";
 preguntaids[72] = 8007


//  Id pregunta: 7949 Año de creación de pregunta: 2011
 questions[73]= "74)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[73]= new Array();
 choices[73][0] = "El est&aacute;ndar criptogr&aacute;fico RSA.";
 choices[73][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[73][2] = "El intercambio de claves Diffie-Hellman.";
 choices[73][3] = "La sintaxis del mensaje criptogr&aacute;fico.";
 answers[73] = 2;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7949. Examen TIC A2 2010";
 preguntaids[73] = 7949


//  Id pregunta: 7818 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes apartados NO es uno de los componentes base de la arquitectura .NET?";
 choices[74]= new Array();
 choices[74][0] = "Windows Forms.";
 choices[74][1] = "ASP.NET.";
 choices[74][2] = "ADO.NET.";
 choices[74][3] = "ACY.NET.";
 answers[74] = 3;
 units[74] = ['63'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7818. ";
 preguntaids[74] = 7818


