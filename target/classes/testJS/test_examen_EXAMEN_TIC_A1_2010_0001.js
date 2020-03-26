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
//  Id pregunta: 7888 Año de creación de pregunta: 2011
 questions[0]= "1)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[0]= new Array();
 choices[0][0] = "1";
 choices[0][1] = "2";
 choices[0][2] = "3";
 choices[0][3] = "4";
 answers[0] = 0;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7888. Examen TIC A1 2010";
 preguntaids[0] = 7888


//  Id pregunta: 7872 Año de creación de pregunta: 2011
 questions[1]= "2)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[1]= new Array();
 choices[1][0] = "Gesti&oacute;n financiera.";
 choices[1][1] = "Gesti&oacute;n del portfolio de servicios.";
 choices[1][2] = "Gesti&oacute;n de la demanda.";
 choices[1][3] = "Gesti&oacute;n del cat&aacute;logo de servicios.";
 answers[1] = 3;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7872. Examen TIC A1 2010";
 preguntaids[1] = 7872


//  Id pregunta: 7906 Año de creación de pregunta: 2011
 questions[2]= "3)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[2]= new Array();
 choices[2][0] = "RAID 3.";
 choices[2][1] = "RAID 4.";
 choices[2][2] = "RAID 5.";
 choices[2][3] = "RAID 6.";
 answers[2] = 0;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7906. Examen TIC A1 2010";
 preguntaids[2] = 7906


//  Id pregunta: 7871 Año de creación de pregunta: 2011
 questions[3]= "4)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF:";
 choices[3]= new Array();
 choices[3][0] = "0x100000001.";
 choices[3][1] = "0xFFFFFFFF.";
 choices[3][2] = "0xFFFE0001.";
 choices[3][3] = "0xFFFE0002";
 answers[3] = 2;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7871. Examen TIC A1 2010";
 preguntaids[3] = 7871


//  Id pregunta: 7867 Año de creación de pregunta: 2011
 questions[4]= "5)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico:";
 choices[4]= new Array();
 choices[4][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de  Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[4][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[4][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[4][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits.";
 answers[4] = 1;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7867. Examen TIC A1 2010";
 preguntaids[4] = 7867


//  Id pregunta: 7862 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[5]= new Array();
 choices[5][0] = "Exclusivamente el sistema ETRS89.";
 choices[5][1] = "Los sistemas ED50 y ETRS89.";
 choices[5][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[5][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[5] = 2;
 units[5] = ['71'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7862. Examen TIC A1 2010";
 preguntaids[5] = 7862


//  Id pregunta: 7898 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[6]= new Array();
 choices[6][0] = "Seguridad.";
 choices[6][1] = "Subsidiariedad.";
 choices[6][2] = "Compatibilidad del hardware.";
 choices[6][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[6] = 2;
 units[6] = ['43'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 7898. Examen TIC A1 2010";
 preguntaids[6] = 7898


//  Id pregunta: 7855 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[7]= new Array();
 choices[7][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[7][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[7][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[7][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[7] = 2;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7855. Examen TIC A1 2010";
 preguntaids[7] = 7855


//  Id pregunta: 7859 Año de creación de pregunta: 2011
 questions[8]= "9)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[8]= new Array();
 choices[8][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[8][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[8][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[8][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[8] = 0;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7859. Examen TIC A1 2010";
 preguntaids[8] = 7859


//  Id pregunta: 7879 Año de creación de pregunta: 2011
 questions[9]= "10)  En una tabla de una base de datos relacional:";
 choices[9]= new Array();
 choices[9][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[9][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[9][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[9][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder a la tabla.";
 answers[9] = 3;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7879. Examen TIC A1 2010";
 preguntaids[9] = 7879


//  Id pregunta: 7915 Año de creación de pregunta: 2011
 questions[10]= "11)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[10]= new Array();
 choices[10][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[10][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[10][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[10][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[10] = 3;
 units[10] = ['122'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7915. Examen TIC A1 2010";
 preguntaids[10] = 7915


//  Id pregunta: 7883 Año de creación de pregunta: 2011
 questions[11]= "12)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[11]= new Array();
 choices[11][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[11][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[11][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[11][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[11] = 1;
 units[11] = ['108'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 7883. Examen TIC A1 2010";
 preguntaids[11] = 7883


//  Id pregunta: 7916 Año de creación de pregunta: 2011
 questions[12]= "13)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[12]= new Array();
 choices[12][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[12][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[12][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[12][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[12] = 0;
 units[12] = ['54'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7916. Examen TIC A1 2010";
 preguntaids[12] = 7916


//  Id pregunta: 7863 Año de creación de pregunta: 2011
 questions[13]= "14)  Los &quot;mashups&quot; en Web 2.0:";
 choices[13]= new Array();
 choices[13][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[13][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[13][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[13][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[13] = 2;
 units[13] = ['125'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7863. Examen TIC A1 2010";
 preguntaids[13] = 7863


//  Id pregunta: 7866 Año de creación de pregunta: 2011
 questions[14]= "15)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[14]= new Array();
 choices[14][0] = "AdvFS";
 choices[14][1] = "MFS";
 choices[14][2] = "JFS2";
 choices[14][3] = "XFS";
 answers[14] = 1;
 units[14] = ['56'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7866. Examen TIC A1 2010";
 preguntaids[14] = 7866


//  Id pregunta: 7908 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[15]= new Array();
 choices[15][0] = "Funci&oacute;n diferenciada.";
 choices[15][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[15][2] = "L&iacute;neas de defensa.";
 choices[15][3] = "Continuidad de la actividad.";
 answers[15] = 3;
 units[15] = ['46'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7908. Examen TIC A1 2010";
 preguntaids[15] = 7908


//  Id pregunta: 7870 Año de creación de pregunta: 2011
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica):";
 choices[16]= new Array();
 choices[16][0] = "Metadatos de explotaci&oacute;n.";
 choices[16][1] = "Metadatos de descubrimiento.";
 choices[16][2] = "Metadatos de exploraci&oacute;n.";
 choices[16][3] = "Metadatos de representaci&oacute;n.";
 answers[16] = 3;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7870. Examen TIC A1 2010";
 preguntaids[16] = 7870


//  Id pregunta: 7843 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[17]= new Array();
 choices[17][0] = "Ilimitada.";
 choices[17][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[17][2] = "30 meses.";
 choices[17][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[17] = 1;
 units[17] = ['78'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7843. Examen TIC A1 2010";
 preguntaids[17] = 7843


//  Id pregunta: 7910 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[18]= new Array();
 choices[18][0] = "doPut";
 choices[18][1] = "doTrace.";
 choices[18][2] = "doErrorC";
 choices[18][3] = "doOptions.";
 answers[18] = 2;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7910. Examen TIC A1 2010";
 preguntaids[18] = 7910


//  Id pregunta: 7885 Año de creación de pregunta: 2011
 questions[19]= "20)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[19]= new Array();
 choices[19][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[19][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[19][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[19][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[19] = 0;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 7885. Examen TIC A1 2010";
 preguntaids[19] = 7885


//  Id pregunta: 7845 Año de creación de pregunta: 2011
 questions[20]= "21)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "Emplea &quot;push parsing&quot;.";
 choices[20][1] = "Permite vistas XML de datos no XML.";
 choices[20][2] = "Es un API unidireccional.";
 choices[20][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[20] = 1;
 units[20] = ['122'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 7845. Examen TIC A1 2010";
 preguntaids[20] = 7845


//  Id pregunta: 7860 Año de creación de pregunta: 2011
 questions[21]= "22)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[21]= new Array();
 choices[21][0] = "No est&aacute; en primera forma normal.";
 choices[21][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[21][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[21][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[21] = 2;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7860. Examen TIC A1 2010";
 preguntaids[21] = 7860


//  Id pregunta: 7893 Año de creación de pregunta: 2011
 questions[22]= "23)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[22]= new Array();
 choices[22][0] = "Una Secretar&iacute;a de Estado.";
 choices[22][1] = "Una Subsecretar&iacute;a.";
 choices[22][2] = "Una Subdirecci&oacute;n General.";
 choices[22][3] = "Una Direcci&oacute;n General.";
 answers[22] = 3;
 units[22] = ['47'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 7893. Examen TIC A1 2010";
 preguntaids[22] = 7893


//  Id pregunta: 7856 Año de creación de pregunta: 2011
 questions[23]= "24)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[23]= new Array();
 choices[23][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[23][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[23][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[23][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[23] = 2;
 units[23] = ['86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7856. Examen TIC A1 2010";
 preguntaids[23] = 7856


//  Id pregunta: 7868 Año de creación de pregunta: 2011
 questions[24]= "25)  seg&uacute;n el CMMI v1.2 (Capability Maturity Model Integration, en espa&ntilde;ol Modelo Integrado de Capacidad y Madurez), una organizaci&oacute;n en la que en la que los procesos est&aacute;n definidos y son gestionados cuantitativamente, y en la que se establecen m&eacute;tricas de calidad para la gesti&oacute;n y rendimiento de dichos procesos, se encuentra en el nivel de capacidad:";
 choices[24]= new Array();
 choices[24][0] = "Nivel 1.";
 choices[24][1] = "Nivel 2.";
 choices[24][2] = "Nivel 3.";
 choices[24][3] = "Nivel 4.";
 answers[24] = 3;
 units[24] = ['92'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 7868. Examen TIC A1 2010";
 preguntaids[24] = 7868


//  Id pregunta: 7907 Año de creación de pregunta: 2011
 questions[25]= "26)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[25]= new Array();
 choices[25][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[25][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[25][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[25][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[25] = 0;
 units[25] = ['68'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7907. Examen TIC A1 2010";
 preguntaids[25] = 7907


//  Id pregunta: 7873 Año de creación de pregunta: 2011
 questions[26]= "27)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente.";
 choices[26][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form.";
 choices[26][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n.";
 choices[26][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[26] = 0;
 units[26] = ['62'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7873. Examen TIC A1 2010";
 preguntaids[26] = 7873


//  Id pregunta: 7914 Año de creación de pregunta: 2011
 questions[27]= "28)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[27]= new Array();
 choices[27][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[27][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[27][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[27][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[27] = 0;
 units[27] = ['40'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 7914. Examen TIC A1 2010";
 preguntaids[27] = 7914


//  Id pregunta: 7911 Año de creación de pregunta: 2011
 questions[28]= "29)  M&eacute;trica v3 establece cuatro tipos de mantenimiento, &iquest;cu&aacute;l de los siguientes NO es uno de &eacute;llos?";
 choices[28]= new Array();
 choices[28][0] = "Mantenimiento preventivo.";
 choices[28][1] = "Mantenimiento perfectivo.";
 choices[28][2] = "Mantenimiento adaptativo.";
 choices[28][3] = "Mantenimiento correctivo.";
 answers[28] = 0;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7911. Examen TIC A1 2010";
 preguntaids[28] = 7911


//  Id pregunta: 7891 Año de creación de pregunta: 2011
 questions[29]= "30)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[29]= new Array();
 choices[29][0] = "IS0 9000.";
 choices[29][1] = "ISO 20000.";
 choices[29][2] = "ISO 27001.";
 choices[29][3] = "ISO 27000.";
 answers[29] = 1;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7891. Examen TIC A1 2010";
 preguntaids[29] = 7891


//  Id pregunta: 7876 Año de creación de pregunta: 2011
 questions[30]= "31)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es:";
 choices[30]= new Array();
 choices[30][0] = "Una reuni&oacute;n.";
 choices[30][1] = "Un producto del desarrollo.";
 choices[30][2] = "Un documento.";
 choices[30][3] = "La aceptaci&oacute;n del sistema.";
 answers[30] = 0;
 units[30] = ['84'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7876. Examen TIC A1 2010";
 preguntaids[30] = 7876


//  Id pregunta: 7849 Año de creación de pregunta: 2011
 questions[31]= "32)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[31]= new Array();
 choices[31][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[31][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[31][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[31][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[31] = 3;
 units[31] = ['69'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7849. Examen TIC A1 2010";
 preguntaids[31] = 7849


//  Id pregunta: 7889 Año de creación de pregunta: 2011
 questions[32]= "33)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[32]= new Array();
 choices[32][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[32][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[32][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[32][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[32] = 1;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7889. Examen TIC A1 2010";
 preguntaids[32] = 7889


//  Id pregunta: 7886 Año de creación de pregunta: 2011
 questions[33]= "34)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[33]= new Array();
 choices[33][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[33][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[33][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[33][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[33] = 1;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7886. Examen TIC A1 2010";
 preguntaids[33] = 7886


//  Id pregunta: 7890 Año de creación de pregunta: 2011
 questions[34]= "35)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[34]= new Array();
 choices[34][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[34][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[34][2] = "Cliente - IDL Stub - Servidor.";
 choices[34][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[34] = 0;
 units[34] = ['55'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7890. Examen TIC A1 2010";
 preguntaids[34] = 7890


//  Id pregunta: 7895 Año de creación de pregunta: 2011
 questions[35]= "36)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[35]= new Array();
 choices[35][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[35][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[35][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[35][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[35] = 1;
 units[35] = ['98'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7895. Examen TIC A1 2010";
 preguntaids[35] = 7895


//  Id pregunta: 7846 Año de creación de pregunta: 2010
 questions[36]= "37)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[36][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[36][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[36][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[36] = 0;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7846. Examen TIC A1 2010";
 preguntaids[36] = 7846


//  Id pregunta: 7844 Año de creación de pregunta: 2011
 questions[37]= "38)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[37]= new Array();
 choices[37][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[37][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[37][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[37][3] = "El gestor de archivos oficial de GNOME.";
 answers[37] = 1;
 units[37] = ['66'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7844. Examen TIC A1 2010";
 preguntaids[37] = 7844


//  Id pregunta: 7877 Año de creación de pregunta: 2011
 questions[38]= "39)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[38]= new Array();
 choices[38][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[38][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[38][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[38][3] = "Permite actualizaciones en cascada.";
 answers[38] = 2;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7877. Examen TIC A1 2010";
 preguntaids[38] = 7877


//  Id pregunta: 7847 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[39]= new Array();
 choices[39][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[39][1] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[39][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[39][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[39] = 1;
 units[39] = ['121'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7847. Examen TIC A1 2010";
 preguntaids[39] = 7847


//  Id pregunta: 7894 Año de creación de pregunta: 2011
 questions[40]= "41)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Infracci&oacute;n leve.";
 choices[40][1] = "Infracci&oacute;n notable.";
 choices[40][2] = "Infracci&oacute;n grave.";
 choices[40][3] = "Infracci&oacute;n muy grave.";
 answers[40] = 2;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 7894. Examen TIC A1 2010";
 preguntaids[40] = 7894


//  Id pregunta: 7875 Año de creación de pregunta: 2011
 questions[41]= "42)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net:";
 choices[41]= new Array();
 choices[41][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos.";
 choices[41][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n.";
 choices[41][2] = "No dispone de clases para la gesti&oacute;n de la seguridad.";
 choices[41][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador.";
 answers[41] = 2;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7875. Examen TIC A1 2010";
 preguntaids[41] = 7875


//  Id pregunta: 7878 Año de creación de pregunta: 2011
 questions[42]= "43)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[42][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[42][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[42][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[42] = 0;
 units[42] = ['91'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7878. Examen TIC A1 2010";
 preguntaids[42] = 7878


//  Id pregunta: 7854 Año de creación de pregunta: 2011
 questions[43]= "44)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[43]= new Array();
 choices[43][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[43][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[43][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[43][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[43] = 0;
 units[43] = ['100'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7854. Examen TIC A1 2010";
 preguntaids[43] = 7854


//  Id pregunta: 7909 Año de creación de pregunta: 2011
 questions[44]= "45)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[44]= new Array();
 choices[44][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[44][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[44][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[44][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[44] = 1;
 units[44] = ['67'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7909. Examen TIC A1 2010";
 preguntaids[44] = 7909


//  Id pregunta: 7892 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[45]= new Array();
 choices[45][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[45][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2012.";
 choices[45][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[45][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[45] = 1;
 units[45] = ['42'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 7892. Examen TIC A1 2010";
 preguntaids[45] = 7892


//  Id pregunta: 7896 Año de creación de pregunta: 2011
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[46]= new Array();
 choices[46][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[46][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[46][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[46][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[46] = 1;
 units[46] = ['47'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 7896. Examen TIC A1 2010";
 preguntaids[46] = 7896


//  Id pregunta: 7857 Año de creación de pregunta: 2011
 questions[47]= "48)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[47]= new Array();
 choices[47][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[47][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[47][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[47][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[47] = 0;
 units[47] = ['84'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7857. Examen TIC A1 2010";
 preguntaids[47] = 7857


//  Id pregunta: 7903 Año de creación de pregunta: 2011
 questions[48]= "49)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[48]= new Array();
 choices[48][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[48][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[48][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[48][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[48] = 2;
 units[48] = ['124'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7903. Examen TIC A1 2010";
 preguntaids[48] = 7903


//  Id pregunta: 7897 Año de creación de pregunta: 2011
 questions[49]= "50)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[49]= new Array();
 choices[49][0] = "Herencia.";
 choices[49][1] = "Extensibilidad.";
 choices[49][2] = "Sobrecarga.";
 choices[49][3] = "Polimorfismo.";
 answers[49] = 3;
 units[49] = ['85'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7897. Examen TIC A1 2010";
 preguntaids[49] = 7897


//  Id pregunta: 7852 Año de creación de pregunta: 2011
 questions[50]= "51)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[50]= new Array();
 choices[50][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[50][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[50][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[50][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[50] = 1;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7852. Examen TIC A1 2010";
 preguntaids[50] = 7852


//  Id pregunta: 7874 Año de creación de pregunta: 2011
 questions[51]= "52)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[51]= new Array();
 choices[51][0] = "0,5 ; 0,7 ; 1";
 choices[51][1] = "0,227 ; 0,318 ; 0,454";
 choices[51][2] = "0; 0,4; 1";
 choices[51][3] = "1 ; 1,4 ; 2";
 answers[51] = 2;
 units[51] = ['38'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7874. Examen TIC A1 2010";
 preguntaids[51] = 7874


//  Id pregunta: 7861 Año de creación de pregunta: 2011
 questions[52]= "53)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticas generales del sistema) valen respectivamente 100 y 65:";
 choices[52]= new Array();
 choices[52][0] = "165";
 choices[52][1] = "120";
 choices[52][2] = "SVA no puede tener un valor superior a 50.";
 choices[52][3] = "130";
 answers[52] = 3;
 units[52] = ['94'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7861. Examen TIC A1 2010";
 preguntaids[52] = 7861


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[53]= new Array();
 choices[53][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[53][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[53][2] = "Nativos digitales.";
 choices[53][3] = "Inclusi&oacute;n digital.";
 answers[53] = 2;
 units[53] = ['16'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[53] = 7865


//  Id pregunta: 7851 Año de creación de pregunta: 2011
 questions[54]= "55)  En los sistemas MIMD:";
 choices[54]= new Array();
 choices[54][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[54][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[54][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[54][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[54] = 3;
 units[54] = ['49'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7851. Examen TIC A1 2010";
 preguntaids[54] = 7851


//  Id pregunta: 7850 Año de creación de pregunta: 2011
 questions[55]= "56)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[55][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[55][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[55][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[55] = 1;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 7850. Examen TIC A1 2010";
 preguntaids[55] = 7850


//  Id pregunta: 7902 Año de creación de pregunta: 2011
 questions[56]= "57)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[56][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[56][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[56][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[56] = 3;
 units[56] = ['41'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 7902. Examen TIC A1 2010";
 preguntaids[56] = 7902


//  Id pregunta: 7869 Año de creación de pregunta: 2011
 questions[57]= "58)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[57]= new Array();
 choices[57][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[57][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor.";
 choices[57][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n.";
 choices[57][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra.";
 answers[57] = 2;
 units[57] = ['121'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7869. Examen TIC A1 2010";
 preguntaids[57] = 7869


//  Id pregunta: 7853 Año de creación de pregunta: 2011
 questions[58]= "59)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos: - Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW. - Un amplificador con ganancia G1 = 1000. - Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m. - Un amplificador con ganancia G2 = 100. - Un receptor.";
 choices[58]= new Array();
 choices[58][0] = "-63 dBW.";
 choices[58][1] = "33 dBm.";
 choices[58][2] = "1exp-6 W.";
 choices[58][3] = "-53 dBm.";
 answers[58] = 0;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7853. Examen TIC A1 2010";
 preguntaids[58] = 7853


//  Id pregunta: 7882 Año de creación de pregunta: 2011
 questions[59]= "60)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "M&eacute;todo Delphi.";
 choices[59][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[59][2] = "M&eacute;todo de Saaty.";
 choices[59][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[59] = 3;
 units[59] = ['38'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 7882. Examen TIC A1 2010";
 preguntaids[59] = 7882


//  Id pregunta: 7842 Año de creación de pregunta: 2011
 questions[60]= "61)  En el marco de los servicios de Directorio, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[60]= new Array();
 choices[60][0] = "El est&aacute;ndar X.500 define cuatro clases de objetos que pueden ser representados en el directorio y que se codifican utilizando la notaci&oacute;n ASN.1.";
 choices[60][1] = "El protocolo LDAP, para el acceso a directorios X.500, es una evoluci&oacute;n de DAP, que soporta OSI y TCP/IP.";
 choices[60][2] = "En su versi&oacute;n 2, LDAP incorpora la posibilidad de acceso an&oacute;nimo y la de acceso cifrado.";
 choices[60][3] = "La operaci&oacute;n de a&ntilde;adir una entrada a un directorio, s&oacute;lo requiere que el nombre distinguido (DN) de la entrada a a&ntilde;adir,no exista previamente en &eacute;l.";
 answers[60] = 0;
 units[60] = ['116'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7842. Examen TIC A1 2010";
 preguntaids[60] = 7842


//  Id pregunta: 7887 Año de creación de pregunta: 2011
 questions[61]= "62)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[61][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[61][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[61][3] = "FACE s&oacute;lo permite el env&iacute;o de facturas electr&oacute;nicas mediante servicios web";
 answers[61] = 1;
 units[61] = ['70'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7887. Examen TIC A1 2010";
 preguntaids[61] = 7887


//  Id pregunta: 7858 Año de creación de pregunta: 2011
 questions[62]= "63)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[62]= new Array();
 choices[62][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[62][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[62][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[62][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[62] = 2;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7858. Examen TIC A1 2010";
 preguntaids[62] = 7858


//  Id pregunta: 7918 Año de creación de pregunta: 2011
 questions[63]= "64)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[63]= new Array();
 choices[63][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[63][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[63][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[63][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[63] = 0;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7918. Examen TIC A1 2010";
 preguntaids[63] = 7918


//  Id pregunta: 7901 Año de creación de pregunta: 2011
 questions[64]= "65)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[64]= new Array();
 choices[64][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[64][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[64][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[64][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[64] = 0;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7901. Examen TIC A1 2010";
 preguntaids[64] = 7901


//  Id pregunta: 7904 Año de creación de pregunta: 2011
 questions[65]= "66)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[65][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[65][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[65][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[65] = 0;
 units[65] = ['84'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7904. Examen TIC A1 2010";
 preguntaids[65] = 7904


//  Id pregunta: 7884 Año de creación de pregunta: 2011
 questions[66]= "67)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[66]= new Array();
 choices[66][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[66][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[66][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[66][3] = "Los certificados de sede electr&oacute;nica.";
 answers[66] = 3;
 units[66] = ['47'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 7884. Examen TIC A1 2010";
 preguntaids[66] = 7884


//  Id pregunta: 7864 Año de creación de pregunta: 2011
 questions[67]= "68)  Las certificaciones ITIL:";
 choices[67]= new Array();
 choices[67][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[67][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[67][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[67][3] = "No existen certificaciones ITIL.";
 answers[67] = 2;
 units[67] = ['101'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 7864. Examen TIC A1 2010";
 preguntaids[67] = 7864


//  Id pregunta: 7905 Año de creación de pregunta: 2011
 questions[68]= "69)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[68]= new Array();
 choices[68][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[68][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[68][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[68][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[68] = 0;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7905. Examen TIC A1 2010";
 preguntaids[68] = 7905


//  Id pregunta: 7880 Año de creación de pregunta: 2011
 questions[69]= "70)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[69]= new Array();
 choices[69][0] = "El Plan AVANZA.";
 choices[69][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[69][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[69][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[69] = 1;
 units[69] = ['47'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 7880. Examen TIC A1 2010";
 preguntaids[69] = 7880


//  Id pregunta: 7848 Año de creación de pregunta: 2011
 questions[70]= "71)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "YAWL.";
 choices[70][1] = "ETL.";
 choices[70][2] = "XPDL.";
 choices[70][3] = "BPEL.";
 answers[70] = 1;
 units[70] = ['86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7848. Examen TIC A1 2010";
 preguntaids[70] = 7848


//  Id pregunta: 7912 Año de creación de pregunta: 2011
 questions[71]= "72)  La red SARA permite la comunicaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "S&oacute;lo entre organismos y ministerios de la Administraci&oacute;n General del Estado (AGE).";
 choices[71][1] = "S&oacute;lo entre la AGE y la Uni&oacute;n Europea.";
 choices[71][2] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea eu-SARA.";
 choices[71][3] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea sTESTA.";
 answers[71] = 3;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 7912. Examen TIC A1 2010";
 preguntaids[71] = 7912


//  Id pregunta: 7913 Año de creación de pregunta: 2011
 questions[72]= "73)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[72]= new Array();
 choices[72][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[72][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[72][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[72][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[72] = 3;
 units[72] = ['41'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 7913. Examen TIC A1 2010";
 preguntaids[72] = 7913


//  Id pregunta: 7881 Año de creación de pregunta: 2011
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[73]= new Array();
 choices[73][0] = "Intercambian tramas SCSI sobre FC.";
 choices[73][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[73][2] = "No permite implementar iSCSI en software.";
 choices[73][3] = "Puede usar TCP/IP como transporte.";
 answers[73] = 3;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7881. Examen TIC A1 2010";
 preguntaids[73] = 7881


//  Id pregunta: 7917 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[74]= new Array();
 choices[74][0] = "BSA ( Business Software Alliance).";
 choices[74][1] = "GSC ( General Software Committee).";
 choices[74][2] = "DRG (Digital Right Group).";
 choices[74][3] = "SSC (Secure Software Commission).";
 answers[74] = 0;
 units[74] = ['41'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 7917. Examen TIC A1 2010";
 preguntaids[74] = 7917


