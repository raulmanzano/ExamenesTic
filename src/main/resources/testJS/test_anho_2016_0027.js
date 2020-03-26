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
//  Id pregunta: 1993 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes NO es una topolog&iacute;a f&iacute;sica de las redes de almacenamiento SAN?";
 choices[0]= new Array();
 choices[0][0] = "Estrella.";
 choices[0][1] = "Anillo.";
 choices[0][2] = "Malla.";
 choices[0][3] = "Jer&aacute;rquica";
 answers[0] = 3;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1993. ";
 preguntaids[0] = 1993


//  Id pregunta: 1984 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura de servicios Web NO es correcta?";
 choices[1]= new Array();
 choices[1][0] = "Es un software que soporta interacciones m&aacute;quina a m&aacute;quina de forma interoperable.";
 choices[1][1] = "Tiene una interfaz descrita en un determinado formato SOAP, con la que se interact&uacute;a mediante el intercambio de mensajes.";
 choices[1][2] = "Posee un servicio de registro donde se publican los formatos de los servicios web a consultar.";
 choices[1][3] = "EI organismo W3C no especifica c&oacute;mo se implementan los servicios web, sino que define modelos conceptuales y principales aspectos a considerar en la utilizaci&oacute;n de servicios web.";
 answers[1] = 1;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1984. ";
 preguntaids[1] = 1984


//  Id pregunta: 1968 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la gesti&oacute;n documental es cierta?";
 choices[2]= new Array();
 choices[2][0] = "Gestiona diferentes tipos de datos: textos, sonidos, im&aacute;genes, etc.";
 choices[2][1] = "Todas son ciertas.";
 choices[2][2] = "Fomenta el uso racional de los recursos, la seguridad y la fiabilidad de la informaci&oacute;n.";
 choices[2][3] = "Aumenta de la productividad al organismo que la utiliza.";
 answers[2] = 1;
 units[2] = ['99'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1968. ";
 preguntaids[2] = 1968


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[3]= "4)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[3]= new Array();
 choices[3][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[3][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[3][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[3][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[3] = 1;
 units[3] = ['7'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 1972. ";
 preguntaids[3] = 1972


//  Id pregunta: 1994 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes NO es un formato de cintas magn&eacute;ticas de almacenamiento?";
 choices[4]= new Array();
 choices[4][0] = "DAT";
 choices[4][1] = "DLT.";
 choices[4][2] = "TRACBAN.";
 choices[4][3] = "LTO.";
 answers[4] = 2;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1994. ";
 preguntaids[4] = 1994


//  Id pregunta: 1959 Año de creación de pregunta: 2016
 questions[5]= "6)  En el entorno de las bases de datos relacionales se denomina ACID a:";
 choices[5]= new Array();
 choices[5][0] = "Un conjunto de caracter&iacute;sticas necesarias para que una serie de instrucciones puedan ser consideradas como una transacci&oacute;n.";
 choices[5][1] = "EI m&eacute;todo que determina cuando una transacci&oacute;n finaliza con &eacute;xito.";
 choices[5][2] = "EI m&eacute;todo que determina cuando una transacci&oacute;n no finaliza con &eacute;xito.";
 choices[5][3] = "Ninguna de las anteriores.";
 answers[5] = 0;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1959. ";
 preguntaids[5] = 1959


//  Id pregunta: 1980 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 34/2002 de SSI-CE, los prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a deber&aacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Notificar al Ministerio del Interior los correos electr&oacute;nicos registrados e identificando el nombre y DNI de los usuarios.";
 choices[6][1] = "Comunicar al Ministerio de Ciencia y Tecnolog&iacute;a en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[6][2] = "Comunicar al registro mercantil, en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[6][3] = "Comunicar al Registro de la Propiedad en el plazo de un mes, los nombres de dominio o direcciones de internet que utilicen.";
 answers[6] = 2;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 1980. ";
 preguntaids[6] = 1980


//  Id pregunta: 1985 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro de las arquitecturas orientadas a servicios, &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)?";
 choices[7]= new Array();
 choices[7][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[7][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso.";
 choices[7][2] = "Es el repositorio de datos donde esta almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services.";
 choices[7][3] = "Es el registro y repositorio de los web services.";
 answers[7] = 1;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1985. ";
 preguntaids[7] = 1985


//  Id pregunta: 1956 Año de creación de pregunta: 2016
 questions[8]= "9)  En la orientaci&oacute;n a objetos, la propiedad que permite ocultar detalles de un objeto se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Singularidad.";
 choices[8][1] = "Polimorfismo.";
 choices[8][2] = "Reusabilidad.";
 choices[8][3] = "Encapsulaci&oacute;n.";
 answers[8] = 3;
 units[8] = ['86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 1956. ";
 preguntaids[8] = 1956


//  Id pregunta: 1987 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una de las premisas que tiene que lograr un Sistema Operativo para ejecutar correctamente las secciones cr&iacute;ticas de sus procesos:";
 choices[9]= new Array();
 choices[9][0] = "Exclusi&oacute;n mutua";
 choices[9][1] = "Progreso";
 choices[9][2] = "Espera limitada";
 choices[9][3] = "Inclusi&oacute;n indefinida";
 answers[9] = 3;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1987. ";
 preguntaids[9] = 1987


//  Id pregunta: 1969 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique cual de las siguientes afirmaciones respecto a formatos de imagen NO es correcta.";
 choices[10]= new Array();
 choices[10][0] = "TIFF es un formato muy usado en gesti&oacute;n documental y es multip&aacute;gina.";
 choices[10][1] = "PDF no es un formato gr&aacute;fico a pesar de ser un formato multip&aacute;gina.";
 choices[10][2] = "EI formato PNG no comprime las im&aacute;genes";
 choices[10][3] = "EI formato JPEG 2000 es una evoluci&oacute;n que permite comprimir las im&aacute;genes sin perdidas de calidad.";
 answers[10] = 2;
 units[10] = ['80'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1969. ";
 preguntaids[10] = 1969


//  Id pregunta: 1962 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad seg&uacute;n el modelo de McCall?";
 choices[11]= new Array();
 choices[11][0] = "Integridad.";
 choices[11][1] = "Relaci&oacute;n coste-beneficio.";
 choices[11][2] = "Fiabilidad.";
 choices[11][3] = "Facilidad de mantenimiento";
 answers[11] = 1;
 units[11] = ['93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1962. ";
 preguntaids[11] = 1962


//  Id pregunta: 1981 Año de creación de pregunta: 2016
 questions[12]= "13)  En el procesamiento cooperativo de arquitecturas cliente-servidor, &iquest;Cu&aacute;l de los siguientes NO es propio de dicho procesamiento cooperativo?";
 choices[12]= new Array();
 choices[12][0] = "Multiple Server";
 choices[12][1] = "Cooperaci&oacute;n de procesos paralelos";
 choices[12][2] = "Cooperaci&oacute;n de base de datos";
 choices[12][3] = "Cooperaci&oacute;n de balanceadores";
 answers[12] = 3;
 units[12] = ['55'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1981. ";
 preguntaids[12] = 1981


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[13]= "14)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[13][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[13][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[13][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[13] = 1;
 units[13] = ['7'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 1995. ";
 preguntaids[13] = 1995


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[14]= "15)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[14]= new Array();
 choices[14][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[14][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[14][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[14] = 0;
 units[14] = ['10'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 1976. ";
 preguntaids[14] = 1976


//  Id pregunta: 1991 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los sistemas de almacenamiento basados en iSCSI es FALSA?";
 choices[15]= new Array();
 choices[15][0] = "Funcionan &uacute;nicamente sobre redes Gigabit Ethernet.";
 choices[15][1] = "Son m&aacute;s econ&oacute;micos que las soluciones basadas en Fibre Channel.";
 choices[15][2] = "Actualmente tienen un rendimiento inferior a las soluciones basadas en Fibre Channel.";
 choices[15][3] = "Consisten en el intercambio de tramas SCSI pero sobre TCP/IP, en lugar de sobre FC.";
 answers[15] = 0;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1991. ";
 preguntaids[15] = 1991


//  Id pregunta: 1955 Año de creación de pregunta: 2016
 questions[16]= "17)  Cu&aacute;l de estas afirmaciones sobre orientaci&oacute;n a objetos es FALSA:";
 choices[16]= new Array();
 choices[16][0] = "Una nueva clase toma sus m&eacute;todos y datos de su objeto padre.";
 choices[16][1] = "Una de sus caracter&iacute;sticas es la reusabilidad de software.";
 choices[16][2] = "Un objeto es la instancia de una clase.";
 choices[16][3] = "Las clases se pueden organizar en una jerarqu&iacute;a de herencias.";
 answers[16] = 0;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1955. ";
 preguntaids[16] = 1955


//  Id pregunta: 1983 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de comunicaci&oacute;n para implementar sistemas distribuidos?";
 choices[17]= new Array();
 choices[17][0] = "Llamadas a procedimientos remotos";
 choices[17][1] = "Objetos remotos";
 choices[17][2] = "Paso de mensajes mediante primitivas send/receive";
 choices[17][3] = "Mecanismos de retrollamada";
 answers[17] = 3;
 units[17] = ['55'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1983. ";
 preguntaids[17] = 1983


//  Id pregunta: 1975 Año de creación de pregunta: 2016
 questions[18]= "19)  Son causas de nulidad de los contratos de las Administraciones P&uacute;blicas:";
 choices[18]= new Array();
 choices[18][0] = "La invalidez de alguno de sus actos preparatorios por concurrir en los mismos alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[18][1] = "La nulidad de un acto que no sea preparatorio del contrato.";
 choices[18][2] = "La invalidez de la adjudicaci&oacute;n por concurrir en la misma alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[18][3] = "Las respuestas a) y c) son correctas.";
 answers[18] = 3;
 units[18] = ['10'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 1975. ";
 preguntaids[18] = 1975


//  Id pregunta: 1954 Año de creación de pregunta: 2016
 questions[19]= "20)  En un diagrama de flujo de datos:";
 choices[19]= new Array();
 choices[19][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia otro almac&eacute;n como hacia un proceso.";
 choices[19][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia una entidad interna como hacia un proceso.";
 choices[19][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos hacia un proceso.";
 choices[19][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos hacia un almac&eacute;n.";
 answers[19] = 2;
 units[19] = ['86'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 1954. ";
 preguntaids[19] = 1954


//  Id pregunta: 1964 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto al contenido del informe de auditor&iacute;a, indique cual de las siguientes recomendaciones es correcta:";
 choices[20]= new Array();
 choices[20][0] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada";
 choices[20][1] = "EI informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada";
 choices[20][2] = "EI informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo";
 choices[20][3] = "EI informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada";
 answers[20] = 2;
 units[20] = ['36'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 1964. ";
 preguntaids[20] = 1964


//  Id pregunta: 1989 Año de creación de pregunta: 2016
 questions[21]= "22)  EI controlador DMA o de acceso directo a memoria, se encarga de:";
 choices[21]= new Array();
 choices[21][0] = "Avisar al procesador, por medio de una interrupci&oacute;n, de cuando una operaci&oacute;n de entrada-salida de un proceso ha finalizado.";
 choices[21][1] = "Controlar que bloques de disco utiliza cada proceso";
 choices[21][2] = "Mantener en memoria principal las partes de un proceso que son exclusivamente necesarias para su ejecuci&oacute;n en un momento dado.";
 choices[21][3] = "Dividir la memoria principal en bloques y asign&aacute;rselos a los distintos procesos.";
 answers[21] = 0;
 units[21] = ['51'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1989. ";
 preguntaids[21] = 1989


//  Id pregunta: 1951 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes enunciados NO es un objetivo en la elaboraci&oacute;n del modelo conceptual de datos?";
 choices[22]= new Array();
 choices[22][0] = "Identificar y definir las entidades que quedan dentro del &aacute;mbito del sistema.";
 choices[22][1] = "Identificar y definir los m&eacute;todos asociados a cada una de las entidades del sistema.";
 choices[22][2] = "Identificar y definir los atributos de cada entidad y sus dominios correspondientes.";
 choices[22][3] = "Identificar y definir las relaciones existentes entre las entidades.";
 answers[22] = 1;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1951. ";
 preguntaids[22] = 1951


//  Id pregunta: 1982 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones, relativas a sistemas distribuidos, NO es correcta:";
 choices[23]= new Array();
 choices[23][0] = "En el caso de que un nodo del sistema fallara, los dem&aacute;s podr&iacute;an continuar ejecutando sus acciones";
 choices[23][1] = "Una vez ejecutados distintos trabajos en distintos nodos del sistema, hay que conocer en qu&eacute; orden se han ejecutado estos.";
 choices[23][2] = "Dan una visi&oacute;n al usuario de sistemas aut&oacute;nomos independientes.";
 choices[23][3] = "Tanto las arquitecturas como los sistemas operativos no tienen por qu&eacute; ser iguales";
 answers[23] = 2;
 units[23] = ['55'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1982. ";
 preguntaids[23] = 1982


//  Id pregunta: 1986 Año de creación de pregunta: 2016
 questions[24]= "25)  En el mundo de los Servicios Web (web Services), &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?";
 choices[24]= new Array();
 choices[24][0] = "Los protocolos XML-RPC y SOAP son incompatibles";
 choices[24][1] = "Tanto SOAP como XML-RPC son lenguajes de mensajer&iacute;a basados en XML";
 choices[24][2] = "Con XML-RPC puedes elegir el conjunto de caracteres a utilizar en los servicios Web";
 choices[24][3] = "Se pueden utilizar con http sobre TCP";
 answers[24] = 2;
 units[24] = ['55'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1986. ";
 preguntaids[24] = 1986


//  Id pregunta: 1966 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; es ISACA?";
 choices[25]= new Array();
 choices[25][0] = "Una organizaci&oacute;n global que establece pautas para los profesionales de la auditoria inform&aacute;tica";
 choices[25][1] = "La agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios.";
 choices[25][2] = "EI est&aacute;ndar de calidad m&aacute;s extendido en la realizaci&oacute;n de auditor&iacute;as inform&aacute;ticas.";
 choices[25][3] = "Otro nombre por el que es conocida la norma ISO 17799.";
 answers[25] = 0;
 units[25] = ['101'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1966. ";
 preguntaids[25] = 1966


//  Id pregunta: 1988 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes funciones NO se considera un componente b&aacute;sico de un Sistema Operativo?";
 choices[26]= new Array();
 choices[26][0] = "La Gesti&oacute;n de la memoria principal.";
 choices[26][1] = "El int&eacute;rprete de &oacute;rdenes.";
 choices[26][2] = "EI Sistema de E/S y sistema de archivos.";
 choices[26][3] = "EI registro de presencia en los sistemas de Teletrabajo";
 answers[26] = 3;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1988. ";
 preguntaids[26] = 1988


//  Id pregunta: 1974 Año de creación de pregunta: 2016
 questions[27]= "28)  Si un interesado quiere presentar una solicitud en el plazo previsto en un procedimiento:";
 choices[27]= new Array();
 choices[27][0] = "Podr&aacute; hacerlo, exclusivamente, en la sede del &oacute;rgano administrativo al que se dirija.";
 choices[27][1] = "Podr&aacute; hacerlo en las representaciones diplom&aacute;ticas u oficinas consulares de Espa&ntilde;a en el extranjero.";
 choices[27][2] = "Podr&aacute; hacerlo en las oficinas de correos en la forma que reglamentariamente se establezca.";
 choices[27][3] = "B Y C son verdaderas.";
 answers[27] = 3;
 units[27] = ['7'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 1974. ";
 preguntaids[27] = 1974


//  Id pregunta: 1963 Año de creación de pregunta: 2016
 questions[28]= "29)  Que afirmaci&oacute;n de las siguientes acerca de la auditoria inform&aacute;tica NO es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Debe velar por la eficacia y eficiencia del sistema inform&aacute;tico.";
 choices[28][1] = "Debe verificar la calidad de los sistemas de informaci&oacute;n.";
 choices[28][2] = "Debe supervisar los mecanismos de control interno establecidos en los centros de proceso de datos.";
 choices[28][3] = "Debe ser realizada por una empresa externa.";
 answers[28] = 3;
 units[28] = ['36'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 1963. ";
 preguntaids[28] = 1963


//  Id pregunta: 1978 Año de creación de pregunta: 2016
 questions[29]= "30)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[29][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[29][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[29][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[29] = 0;
 units[29] = ['7'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 1978. ";
 preguntaids[29] = 1978


//  Id pregunta: 1965 Año de creación de pregunta: 2016
 questions[30]= "31)  EI control interno en las organizaciones consiste en un proceso de observaci&oacute;n y medida que puede clasificarse atendiendo a diferentes caracter&iacute;sticas. &iquest;Cu&aacute;l de las siguientes NO pertenece a los controles clasificados por su frecuencia?";
 choices[30]= new Array();
 choices[30][0] = "Continuo.";
 choices[30][1] = "Concurrente o concomitante.";
 choices[30][2] = "Peri&oacute;dico.";
 choices[30][3] = "Espor&aacute;dico.";
 answers[30] = 1;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1965. ";
 preguntaids[30] = 1965


//  Id pregunta: 1961 Año de creación de pregunta: 2016
 questions[31]= "32)  EI modelo CMMI (Capability Maturity Model Integration) es:";
 choices[31]= new Array();
 choices[31][0] = "Un modelo para la mejora en la obtenci&oacute;n de datos internos de la organizaci&oacute;n.";
 choices[31][1] = "Un modelo para la mejora y evaluaci&oacute;n de procesos para el desarrollo, mantenimiento y operaci&oacute;n de sistemas de software.";
 choices[31][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[31][3] = "Un modelo para la mejora de la consistencia de los datos de la organizaci&oacute;n.";
 answers[31] = 1;
 units[31] = ['93'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1961. ";
 preguntaids[31] = 1961


//  Id pregunta: 1957 Año de creación de pregunta: 2016
 questions[32]= "33)  En un lenguaje orientado a objetos, la herencia permite:";
 choices[32]= new Array();
 choices[32][0] = "EI paso de propiedades de una variable a una class.";
 choices[32][1] = "EI paso de valores de una variable a otra.";
 choices[32][2] = "EI paso de propiedades de una clase a una subclase.";
 choices[32][3] = "EI paso de valores de una variable a una class.";
 answers[32] = 2;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1957. ";
 preguntaids[32] = 1957


//  Id pregunta: 1970 Año de creación de pregunta: 2016
 questions[33]= "34)  Se consideran interesados en el procedimiento administrativo:";
 choices[33]= new Array();
 choices[33][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos y aquellos que, sin haber iniciado el procedimiento tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[33][1] = "Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales, en todo caso.";
 choices[33][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento, en todo caso, antes del tr&aacute;mite de audiencia.";
 choices[33][3] = "A Y C son verdaderas";
 answers[33] = 0;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 1970. ";
 preguntaids[33] = 1970


//  Id pregunta: 1950 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n con la metodolog&iacute;a &aacute;gil de desarrollo de software. &iquest;cu&aacute;l de las siguientes afirmaciones NO es correcta?:";
 choices[34]= new Array();
 choices[34][0] = "Prioriza la generaci&oacute;n de documentaci&oacute;n t&eacute;cnica.";
 choices[34][1] = "Se desarrolla software en breves lapsos de tiempo.";
 choices[34][2] = "Promueve iteraciones en el desarrollo.";
 choices[34][3] = "Intenta satisfacer al cliente mediante la entrega temprana y continua de software.";
 answers[34] = 0;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1950. ";
 preguntaids[34] = 1950


//  Id pregunta: 1973 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 34/2002 de SSI-CE, NO ser&aacute; obligaci&oacute;n de los prestadores de Servicios de la Sociedad de la Informaci&oacute;n permitir el acceso por medios electr&oacute;nicos de forma f&aacute;cil directa y gratuita:";
 choices[35]= new Array();
 choices[35][0] = "A su nombre o denominaci&oacute;n social.";
 choices[35][1] = "A el n&uacute;mero de identificaci&oacute;n fiscal que Ie corresponda.";
 choices[35][2] = "A la informaci&oacute;n clara y exacta sobre el precio del producto 6 servicio.";
 choices[35][3] = "AI n&uacute;mero de registro del dominio que identifique al prestador de servicios en internet.";
 answers[35] = 3;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 1973. ";
 preguntaids[35] = 1973


//  Id pregunta: 1992 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta acerca de la protecci&oacute;n jur&iacute;dica del software:";
 choices[36]= new Array();
 choices[36][0] = "La BSA (Business Software Alliance) es el organismo oficial designado por la Union Europea para registrar patentes de software.";
 choices[36][1] = "En la Union Europea el software es patentable como tal.";
 choices[36][2] = "En la Union Europea el software no es patentable como tal. Se permite patentar software en la medida en que forma parte de una invenci&oacute;n.";
 choices[36][3] = "La protecci&oacute;n de los derechos de autor sobre el software tiene una duraci&oacute;n de 5 a&ntilde;os.";
 answers[36] = 2;
 units[36] = ['41'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 1992. ";
 preguntaids[36] = 1992


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[37]= "38)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[37]= new Array();
 choices[37][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[37][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[37][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[37][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[37] = 0;
 units[37] = ['10'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 1977. ";
 preguntaids[37] = 1977


//  Id pregunta: 1953 Año de creación de pregunta: 2016
 questions[38]= "39)  Cu&aacute;l de los siguientes NO es un componente principal de un diagrama de flujo de datos o DFD:";
 choices[38]= new Array();
 choices[38][0] = "Entidad Interna.";
 choices[38][1] = "Flujo.";
 choices[38][2] = "Proceso.";
 choices[38][3] = "Almac&eacute;n de datos.";
 answers[38] = 0;
 units[38] = ['86'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1953. ";
 preguntaids[38] = 1953


//  Id pregunta: 1967 Año de creación de pregunta: 2016
 questions[39]= "40)  Cu&aacute;l de los siguientes niveles de RAID se conoce como 'mirroring':";
 choices[39]= new Array();
 choices[39][0] = "RAID 5.";
 choices[39][1] = "RAID O.";
 choices[39][2] = "RAID 3.";
 choices[39][3] = "RAID 1.";
 answers[39] = 3;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1967. ";
 preguntaids[39] = 1967


//  Id pregunta: 1971 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes NO es un requisito, que debe figurar en la solicitud de iniciaci&oacute;n de un procedimiento administrativo?";
 choices[40]= new Array();
 choices[40][0] = "Hechos, razones y petici&oacute;n en que se concrete con toda claridad la solicitud.";
 choices[40][1] = "&Oacute;rgano, centro o unidad administrativa a la que se dirige.";
 choices[40][2] = "Domicilio profesional a efectos de notificaciones.";
 choices[40][3] = "Firma del solicitante o acreditaci&oacute;n de la autenticidad de su voluntad expresada por cualquier medio.";
 answers[40] = 2;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 1971. ";
 preguntaids[40] = 1971


//  Id pregunta: 1979 Año de creación de pregunta: 2016
 questions[41]= "42)  En la presentaci&oacute;n telem&aacute;tica de documentos, una administraci&oacute;n p&uacute;blica deber&aacute; admitir como v&aacute;lida la acreditaci&oacute;n de la identidad del firmante:";
 choices[41]= new Array();
 choices[41][0] = "Siempre que se real ice con el documento nacional de identidad electr&oacute;nico.";
 choices[41][1] = "Siempre que se realice can el documento nacional de identidad electr&oacute;nico y la administraci&oacute;n tenga convenio con la plataforma @firma.";
 choices[41][2] = "Si la firma se ha realizado can un certificado valido independientemente del prestador de servicios de certificaci&oacute;n.";
 choices[41][3] = "Solo si el certificado pertenece a una persona jur&iacute;dica.";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 1979. ";
 preguntaids[41] = 1979


//  Id pregunta: 1990 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cual de las siguientes respuestas es FALSA. En los sistemas operativos, dentro del &aacute;mbito de las pol&iacute;ticas de planificaci&oacute;n de CPU, se debe mantener un equilibrio para conseguir:";
 choices[42]= new Array();
 choices[42][0] = "Bajo tiempo de respuesta per tarea";
 choices[42][1] = "Alta productividad para tareas que se ejecutan en segundo plano";
 choices[42][2] = "Inanici&oacute;n de los procesos";
 choices[42][3] = "Respetar la prioridad de los procesos.";
 answers[42] = 2;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1990. ";
 preguntaids[42] = 1990


//  Id pregunta: 1952 Año de creación de pregunta: 2016
 questions[43]= "44)  EI diagrama de flujo de datos o DFD:";
 choices[43]= new Array();
 choices[43][0] = "Es una t&eacute;cnica de planificaci&oacute;n y estimaci&oacute;n de proyectos.";
 choices[43][1] = "Es una t&eacute;cnica de modelizaci&oacute;n de datos.";
 choices[43][2] = "Es una t&eacute;cnica de modelizaci&oacute;n de procesos.";
 choices[43][3] = "Es una t&eacute;cnica de seguridad de datos.";
 answers[43] = 2;
 units[43] = ['86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 1952. ";
 preguntaids[43] = 1952


//  Id pregunta: 1958 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones referente a las caracter&iacute;sticas de los sistemas transaccionales es FALSA?";
 choices[44]= new Array();
 choices[44][0] = "No permiten la ejecuci&oacute;n concurrente de transacciones para evitar colisiones y dejar al sistema en un estado estable.";
 choices[44][1] = "Debe mantener la consistencia de los datos almacenados.";
 choices[44][2] = "Si una transacci&oacute;n es terminada con &eacute;xito, debe dejar al sistema en un estado estable.";
 choices[44][3] = "Si una transacci&oacute;n es abortada, debe restituirse el anterior estado valido de los datos.";
 answers[44] = 0;
 units[44] = ['86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1958. ";
 preguntaids[44] = 1958


//  Id pregunta: 1960 Año de creación de pregunta: 2016
 questions[45]= "46)  Cu&aacute;l de las siguientes NO es una interfaz de METRICA v3:";
 choices[45]= new Array();
 choices[45][0] = "Aseguramiento de la calidad.";
 choices[45][1] = "Control de costes.";
 choices[45][2] = "Gesti&oacute;n de proyectos.";
 choices[45][3] = "Seguridad.";
 answers[45] = 1;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 1960. ";
 preguntaids[45] = 1960


