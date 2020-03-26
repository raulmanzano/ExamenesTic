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
//  Id pregunta: 6793 Año de creación de pregunta: 2010
 questions[0]= "1)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[0]= new Array();
 choices[0][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[0][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[0][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[0][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[0] = 3;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6793. TIC A 2009";
 preguntaids[0] = 6793


//  Id pregunta: 6858 Año de creación de pregunta: 2010
 questions[1]= "2)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[1]= new Array();
 choices[1][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[1][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[1][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[1][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[1] = 3;
 units[1] = ['47'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 6858. TIC A 2009";
 preguntaids[1] = 6858


//  Id pregunta: 6880 Año de creación de pregunta: 2010
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[2]= new Array();
 choices[2][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[2][1] = "Son sistemas homog&eacute;neos.";
 choices[2][2] = "Los nodos no tienen que estar dedicados.";
 choices[2][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[2] = 1;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6880. TIC A 2009";
 preguntaids[2] = 6880


//  Id pregunta: 6810 Año de creación de pregunta: 2010
 questions[3]= "4)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[3]= new Array();
 choices[3][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[3][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[3][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[3][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[3] = 1;
 units[3] = ['113'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6810. TIC A 2009";
 preguntaids[3] = 6810


//  Id pregunta: 6802 Año de creación de pregunta: 2010
 questions[4]= "5)  NO corresponde a los principios que deben regir un CAU:";
 choices[4]= new Array();
 choices[4][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[4][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[4][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[4][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[4] = 2;
 units[4] = ['30'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 6802. TIC A 2009";
 preguntaids[4] = 6802


//  Id pregunta: 6835 Año de creación de pregunta: 2010
 questions[5]= "6)  HTML est&aacute; estandarizado por:";
 choices[5]= new Array();
 choices[5][0] = "World Wide Web Consortium - W3C.";
 choices[5][1] = "Internet Engineering Task Force - IETF.";
 choices[5][2] = "Institute os Management Accountants - IMA.";
 choices[5][3] = "International Accounting Standard Board - IASB.";
 answers[5] = 0;
 units[5] = ['74'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6835. TIC A 2009";
 preguntaids[5] = 6835


//  Id pregunta: 6833 Año de creación de pregunta: 2010
 questions[6]= "7)  Los servicios web son:";
 choices[6]= new Array();
 choices[6][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[6][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[6][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[6][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[6] = 3;
 units[6] = ['55', '74'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6833. TIC A 2009";
 preguntaids[6] = 6833


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[7]= "8)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[7]= new Array();
 choices[7][0] = "Todos.";
 choices[7][1] = "Ninguno.";
 choices[7][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[7][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[7] = 2;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[7] = 6888


//  Id pregunta: 6859 Año de creación de pregunta: 2010
 questions[8]= "9)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[8]= new Array();
 choices[8][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[8][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[8][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[8][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[8] = 3;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6859. TIC A 2009";
 preguntaids[8] = 6859


//  Id pregunta: 6811 Año de creación de pregunta: 2010
 questions[9]= "10)  El proceso de kerning en un texto impreso:";
 choices[9]= new Array();
 choices[9][0] = "Es el proceso por el cual se van subdividiendo los elementos que componen una p&aacute;gina en otros menores hasta llegar a los elementos m&iacute;nimos, que son los caracteres.";
 choices[9][1] = "Es el proceso por el cual se elimina el espacio excesivo entre las letras.";
 choices[9][2] = "Es el proceso por el cual se corrige la inclinaci&oacute;n de la p&aacute;gina.";
 choices[9][3] = "Es el proceso que consiste en la divisi&oacute;n de un p&aacute;rrafo de texto en las diferentes l&iacute;neas que lo componen.";
 answers[9] = 1;
 units[9] = ['81'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6811. TIC A 2009";
 preguntaids[9] = 6811


//  Id pregunta: 6797 Año de creación de pregunta: 2010
 questions[10]= "11)  La arquitectura ANSI/SPARC para sistemas de bases de datos se divide en los siguientes niveles:";
 choices[10]= new Array();
 choices[10][0] = "L&oacute;gico, de usuario y f&iacute;sico.";
 choices[10][1] = "Externo, intermedio e interno.";
 choices[10][2] = "Externo, conceptual e interno.";
 choices[10][3] = "De usuario, de administrador y f&iacute;sico.";
 answers[10] = 2;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6797. TIC A 2009";
 preguntaids[10] = 6797


//  Id pregunta: 6800 Año de creación de pregunta: 2010
 questions[11]= "12)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[11]= new Array();
 choices[11][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[11][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[11][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[11][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[11] = 2;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 6800. TIC A 2009";
 preguntaids[11] = 6800


//  Id pregunta: 6790 Año de creación de pregunta: 2010
 questions[12]= "13)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[12]= new Array();
 choices[12][0] = "OSPF.";
 choices[12][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[12][2] = "RIP.";
 choices[12][3] = "BGP-4.";
 answers[12] = 3;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6790. TIC A 2009";
 preguntaids[12] = 6790


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[13]= "14)  Acerca de las Autoridades de sellado de tiempo:";
 choices[13]= new Array();
 choices[13][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[13][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[13][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[13][3] = "Ninguna de las anteriores es correcta.";
 answers[13] = 1;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[13] = 6868


//  Id pregunta: 6883 Año de creación de pregunta: 2010
 questions[14]= "15)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[14]= new Array();
 choices[14][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[14][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[14][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[14][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[14] = 1;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6883. TIC A 2009";
 preguntaids[14] = 6883


//  Id pregunta: 6832 Año de creación de pregunta: 2010
 questions[15]= "16)  Qu&eacute; asociaci&oacute;n entre organismos internacionales y europeos es la correcta?";
 choices[15]= new Array();
 choices[15][0] = "IEC-CENELEC, UIT-ETSI, ISO-CEN.";
 choices[15][1] = "IEC-CEN, ISO-CENELEC, ITU-ETSI.";
 choices[15][2] = "ISO-CEN, IEEE-IEC, ETSI-CENELEC.";
 choices[15][3] = "IEC-CENELEC, IEEE-ETSI, ISO-CEN.";
 answers[15] = 0;
 units[15] = ['48'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 6832. TIC A 2009";
 preguntaids[15] = 6832


//  Id pregunta: 6836 Año de creación de pregunta: 2010
 questions[16]= "17)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[16]= new Array();
 choices[16][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[16][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[16][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[16][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[16] = 3;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6836. TIC A 2009";
 preguntaids[16] = 6836


//  Id pregunta: 6839 Año de creación de pregunta: 2010
 questions[17]= "18)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[17]= new Array();
 choices[17][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[17][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[17][2] = "La necesidad de controles de acceso.";
 choices[17][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[17] = 0;
 units[17] = ['87'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6839. TIC A 2009";
 preguntaids[17] = 6839


//  Id pregunta: 6877 Año de creación de pregunta: 2010
 questions[18]= "19)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[18]= new Array();
 choices[18][0] = "Controlar el flujo extremo a extremo.";
 choices[18][1] = "Eliminar paquetes duplicados.";
 choices[18][2] = "Multiplexar y demultiplexar.";
 choices[18][3] = "Reordenar paquetes.";
 answers[18] = 2;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6877. TIC A 2009";
 preguntaids[18] = 6877


//  Id pregunta: 6869 Año de creación de pregunta: 2010
 questions[19]= "20)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[19]= new Array();
 choices[19][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[19][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[19][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[19][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[19] = 1;
 units[19] = ['37'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 6869. TIC A 2009";
 preguntaids[19] = 6869


//  Id pregunta: 6806 Año de creación de pregunta: 2010
 questions[20]= "21)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[20]= new Array();
 choices[20][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[20][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[20][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[20][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[20] = 2;
 units[20] = ['101'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6806. TIC A 2009";
 preguntaids[20] = 6806


//  Id pregunta: 6861 Año de creación de pregunta: 2010
 questions[21]= "22)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[21]= new Array();
 choices[21][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[21][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[21][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[21][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[21] = 1;
 units[21] = ['98'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6861. TIC A 2009";
 preguntaids[21] = 6861


//  Id pregunta: 6799 Año de creación de pregunta: 2010
 questions[22]= "23)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[22]= new Array();
 choices[22][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[22][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[22][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[22][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[22] = 2;
 units[22] = ['41'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 6799. TIC A 2009";
 preguntaids[22] = 6799


//  Id pregunta: 6864 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[23]= new Array();
 choices[23][0] = "SIDI.";
 choices[23][1] = "SDSP.";
 choices[23][2] = "SIMD.";
 choices[23][3] = "MIMP.";
 answers[23] = 2;
 units[23] = ['50'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6864. TIC A 2009";
 preguntaids[23] = 6864


//  Id pregunta: 6837 Año de creación de pregunta: 2010
 questions[24]= "25)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[24]= new Array();
 choices[24][0] = "COCOMO II.";
 choices[24][1] = "FPA.";
 choices[24][2] = "ESTIM.";
 choices[24][3] = "SLIM.";
 answers[24] = 2;
 units[24] = ['94'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6837. TIC A 2009";
 preguntaids[24] = 6837


//  Id pregunta: 6788 Año de creación de pregunta: 2010
 questions[25]= "26)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[25]= new Array();
 choices[25][0] = "128.000.";
 choices[25][1] = "32.000.";
 choices[25][2] = "16.000.";
 choices[25][3] = "4.000.";
 answers[25] = 2;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6788. TIC A 2009";
 preguntaids[25] = 6788


//  Id pregunta: 6887 Año de creación de pregunta: 2010
 questions[26]= "27)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[26]= new Array();
 choices[26][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[26][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[26][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[26][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[26] = 1;
 units[26] = ['103'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6887. TIC A 2009";
 preguntaids[26] = 6887


//  Id pregunta: 6828 Año de creación de pregunta: 2010
 questions[27]= "28)  El CCITT ha pasado a denominarse:";
 choices[27]= new Array();
 choices[27][0] = "UIT-T o ITU-T.";
 choices[27][1] = "CEPT.";
 choices[27][2] = "IEEE.";
 choices[27][3] = "ETSI.";
 answers[27] = 0;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6828. TIC A 2009";
 preguntaids[27] = 6828


//  Id pregunta: 6865 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[28]= new Array();
 choices[28][0] = "Distribuci&oacute;n.";
 choices[28][1] = "Abstracci&oacute;n.";
 choices[28][2] = "Encapsulaci&oacute;n.";
 choices[28][3] = "Modularidad.";
 answers[28] = 0;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6865. TIC A 2009";
 preguntaids[28] = 6865


//  Id pregunta: 6860 Año de creación de pregunta: 2010
 questions[29]= "30)  En relaci&oacute;n con las metodolog&iacute;as &aacute;giles de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[29]= new Array();
 choices[29][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[29][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[29][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a &aacute;gil.";
 choices[29][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a &aacute;gil.";
 answers[29] = 0;
 units[29] = ['84'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6860. TIC A 2009";
 preguntaids[29] = 6860


//  Id pregunta: 6807 Año de creación de pregunta: 2010
 questions[30]= "31)  El derecho moral sobre un programa de ordenador implica que:";
 choices[30]= new Array();
 choices[30][0] = "El que tiene este derecho lo puede ceder o transmitir, con o sin contraprestaci&oacute;n econ&oacute;mica.";
 choices[30][1] = "El que tiene este derecho tambi&eacute;n posee el derecho de explotaci&oacute;n, reproducci&oacute;n, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica ytransformaci&oacute;n.";
 choices[30][2] = "El que tiene este derecho no lo puede ceder, ni transmitir, ni siquiera renunciar a &eacute;l.";
 choices[30][3] = "El que tiene este derecho puede exigir el derecho de remuneraci&oacute;n por copia privada.";
 answers[30] = 2;
 units[30] = ['41'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 6807. TIC A 2009";
 preguntaids[30] = 6807


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[31]= "32)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[31]= new Array();
 choices[31][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[31][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[31][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[31][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[31] = 0;
 units[31] = ['121'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[31] = 6881


//  Id pregunta: 6798 Año de creación de pregunta: 2010
 questions[32]= "33)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[32]= new Array();
 choices[32][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[32][1] = "Se integran en sistemas SGDBR";
 choices[32][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[32][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[32] = 3;
 units[32] = ['55'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6798. TIC A 2009";
 preguntaids[32] = 6798


//  Id pregunta: 6801 Año de creación de pregunta: 2010
 questions[33]= "34)  Un servidor de telnet permite:";
 choices[33]= new Array();
 choices[33][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[33][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[33][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[33][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[33] = 0;
 units[33] = ['103'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6801. TIC A 2009";
 preguntaids[33] = 6801


//  Id pregunta: 6834 Año de creación de pregunta: 2010
 questions[34]= "35)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[34]= new Array();
 choices[34][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[34][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[34][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[34][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[34] = 0;
 units[34] = ['98'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6834. TIC A 2009";
 preguntaids[34] = 6834


//  Id pregunta: 6796 Año de creación de pregunta: 2010
 questions[35]= "36)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[35]= new Array();
 choices[35][0] = "De acceso discrecional (DAC)";
 choices[35][1] = "De acceso obligatorio (MAC)";
 choices[35][2] = "Basado en roles (RBAC)";
 choices[35][3] = "De confidencialidad.";
 answers[35] = 1;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6796. TIC A 2009";
 preguntaids[35] = 6796


//  Id pregunta: 6794 Año de creación de pregunta: 2010
 questions[36]= "37)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[36]= new Array();
 choices[36][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[36][1] = "Realizar el transporte de flujos multimedia.";
 choices[36][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[36][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[36] = 3;
 units[36] = ['122'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 6794. TIC A 2009";
 preguntaids[36] = 6794


//  Id pregunta: 6808 Año de creación de pregunta: 2010
 questions[37]= "38)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[37]= new Array();
 choices[37][0] = "La Subsecretar&iacute;a.";
 choices[37][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Digital.";
 choices[37][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[37][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[37] = 1;
 units[37] = ['83'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6808. TIC A 2009";
 preguntaids[37] = 6808


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[38]= "39)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[38]= new Array();
 choices[38][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[38][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[38][2] = "Quejas y reclamaciones.";
 choices[38][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[38] = 1;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[38] = 6829


//  Id pregunta: 6827 Año de creación de pregunta: 2010
 questions[39]= "40)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[39]= new Array();
 choices[39][0] = "Planificaci&oacute;n del alcance.";
 choices[39][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[39][2] = "Definici&oacute;n del alcance.";
 choices[39][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[39] = 3;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6827. TIC A 2009";
 preguntaids[39] = 6827


//  Id pregunta: 6826 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[40]= new Array();
 choices[40][0] = "SAML";
 choices[40][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[40][2] = "CASE (Computer-Aided Software Engineering)";
 choices[40][3] = "ESB (Enterprise Service Bus)";
 answers[40] = 3;
 units[40] = ['55'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6826. TIC A 2009";
 preguntaids[40] = 6826


//  Id pregunta: 6786 Año de creación de pregunta: 2010
 questions[41]= "42)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[41]= new Array();
 choices[41][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[41][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[41][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[41][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[41] = 2;
 units[41] = ['97'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6786. TIC A 2009";
 preguntaids[41] = 6786


//  Id pregunta: 6862 Año de creación de pregunta: 2010
 questions[42]= "43)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[42]= new Array();
 choices[42][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[42][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[42][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[42][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[42] = 3;
 units[42] = ['91'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6862. TIC A 2009";
 preguntaids[42] = 6862


//  Id pregunta: 6809 Año de creación de pregunta: 2010
 questions[43]= "44)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[43][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[43][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[43][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[43] = 1;
 units[43] = ['36'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 6809. TIC A 2009";
 preguntaids[43] = 6809


//  Id pregunta: 6838 Año de creación de pregunta: 2010
 questions[44]= "45)  El creador de la t&eacute;cnica de modelado de objetos (OMT) fue:";
 choices[44]= new Array();
 choices[44][0] = "Pressman.";
 choices[44][1] = "Rumbaugh.";
 choices[44][2] = "Grady Booch.";
 choices[44][3] = "Kent Beck.";
 answers[44] = 1;
 units[44] = ['84'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6838. TIC A 2009";
 preguntaids[44] = 6838


//  Id pregunta: 6814 Año de creación de pregunta: 2010
 questions[45]= "46)  La accesibilidad universal:";
 choices[45]= new Array();
 choices[45][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[45][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[45][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[45][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[45] = 0;
 units[45] = ['42'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 6814. TIC A 2009";
 preguntaids[45] = 6814


//  Id pregunta: 6871 Año de creación de pregunta: 2010
 questions[46]= "47)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[46]= new Array();
 choices[46][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[46][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[46][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[46][3] = "No tiene memoria propia.";
 answers[46] = 0;
 units[46] = ['50'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6871. TIC A 2009";
 preguntaids[46] = 6871


//  Id pregunta: 6882 Año de creación de pregunta: 2010
 questions[47]= "48)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[47]= new Array();
 choices[47][0] = "Activas.";
 choices[47][1] = "Pasivas.";
 choices[47][2] = "Hiperactivas.";
 choices[47][3] = "Semipasivas.";
 answers[47] = 2;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6882. TIC A 2009";
 preguntaids[47] = 6882


//  Id pregunta: 6813 Año de creación de pregunta: 2010
 questions[48]= "49)  La redocumentaci&oacute;n es:";
 choices[48]= new Array();
 choices[48][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[48][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[48][2] = "Es el mismo concepto que humanware.";
 choices[48][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[48] = 0;
 units[48] = ['97'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6813. TIC A 2009";
 preguntaids[48] = 6813


//  Id pregunta: 6795 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[49]= new Array();
 choices[49][0] = "Manifiestos (XSF).";
 choices[49][1] = "Vistas (XLS).";
 choices[49][2] = "Esquemas (XSD).";
 choices[49][3] = "Datos (XML).";
 answers[49] = 2;
 units[49] = ['74'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6795. TIC A 2009";
 preguntaids[49] = 6795


//  Id pregunta: 6866 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad vigente?";
 choices[50]= new Array();
 choices[50][0] = "Legal, organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[50][1] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[50][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[50][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[50] = 0;
 units[50] = ['43'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 6866. TIC A 2009";
 preguntaids[50] = 6866


//  Id pregunta: 6789 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[51]= new Array();
 choices[51][0] = "Internet Information Server.";
 choices[51][1] = "Weblogic.";
 choices[51][2] = "Websphere.";
 choices[51][3] = "Apache.";
 answers[51] = 3;
 units[51] = ['113'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6789. TIC A 2009";
 preguntaids[51] = 6789


//  Id pregunta: 6876 Año de creación de pregunta: 2010
 questions[52]= "53)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[52][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[52][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[52][3] = "Red.es.";
 answers[52] = 0;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6876. TIC A 2009";
 preguntaids[52] = 6876


//  Id pregunta: 6791 Año de creación de pregunta: 2010
 questions[53]= "54)  La banda de 26 GHz se utiliza para:";
 choices[53]= new Array();
 choices[53][0] = "UMTS.";
 choices[53][1] = "LMDS.";
 choices[53][2] = "WiFi.";
 choices[53][3] = "Bluetooth.";
 answers[53] = 1;
 units[53] = ['108'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 6791. TIC A 2009";
 preguntaids[53] = 6791


//  Id pregunta: 6870 Año de creación de pregunta: 2010
 questions[54]= "55)  El lenguaje SQL92:";
 choices[54]= new Array();
 choices[54][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[54][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[54][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[54][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[54] = 0;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6870. TIC A 2009";
 preguntaids[54] = 6870


//  Id pregunta: 6831 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[55]= new Array();
 choices[55][0] = "Thunderbird.";
 choices[55][1] = "Adobe Reader.";
 choices[55][2] = "OpenOffice.";
 choices[55][3] = "Firefox.";
 answers[55] = 1;
 units[55] = ['66'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6831. TIC A 2009";
 preguntaids[55] = 6831


//  Id pregunta: 6812 Año de creación de pregunta: 2010
 questions[56]= "57)  El est&aacute;ndar WSDL:";
 choices[56]= new Array();
 choices[56][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[56][1] = "Describe la interfaz de servicio";
 choices[56][2] = "Es el registro p&uacute;blico de servicios.";
 choices[56][3] = "Es el protocolo de transporte.";
 answers[56] = 1;
 units[56] = ['74'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6812. TIC A 2009";
 preguntaids[56] = 6812


//  Id pregunta: 6867 Año de creación de pregunta: 2010
 questions[57]= "58)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[57]= new Array();
 choices[57][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[57][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[57][2] = "No tiene l&iacute;mite alguno.";
 choices[57][3] = "No puede ser superior al ancho de banda.";
 answers[57] = 1;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6867. TIC A 2009";
 preguntaids[57] = 6867


//  Id pregunta: 6879 Año de creación de pregunta: 2010
 questions[58]= "59)  Un diagrama de transici&oacute;n de estados:";
 choices[58]= new Array();
 choices[58][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[58][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[58][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[58][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[58] = 3;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6879. TIC A 2009";
 preguntaids[58] = 6879


//  Id pregunta: 6872 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de confianza?";
 choices[59]= new Array();
 choices[59][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[59][1] = "Listas de certificados revocados.";
 choices[59][2] = "LDAP.";
 choices[59][3] = "OCSP.";
 answers[59] = 0;
 units[59] = ['78'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6872. TIC A 2009";
 preguntaids[59] = 6872


//  Id pregunta: 6873 Año de creación de pregunta: 2010
 questions[60]= "61)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[60]= new Array();
 choices[60][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[60][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[60][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[60][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[60] = 1;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6873. TIC A 2009";
 preguntaids[60] = 6873


//  Id pregunta: 6863 Año de creación de pregunta: 2010
 questions[61]= "62)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "Mantenimiento adaptativo.";
 choices[61][1] = "Mantenimiento preventivo.";
 choices[61][2] = "Mantenimiento evolutivo.";
 choices[61][3] = "Mantenimiento correctivo.";
 answers[61] = 1;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6863. TIC A 2009";
 preguntaids[61] = 6863


//  Id pregunta: 6815 Año de creación de pregunta: 2010
 questions[62]= "63)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[62]= new Array();
 choices[62][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[62][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[62][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[62][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[62] = 1;
 units[62] = ['84'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6815. TIC A 2009";
 preguntaids[62] = 6815


//  Id pregunta: 6805 Año de creación de pregunta: 2010
 questions[63]= "64)  NO es un m&eacute;todo din&aacute;mico de estudio de la rentabilidad de inversi&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "La tasa de rentabilidad media.";
 choices[63][1] = "La tasa de valor actual.";
 choices[63][2] = "La tasa interna de rentabilidad.";
 choices[63][3] = "El &iacute;ndice de rentabilidad.";
 answers[63] = 0;
 units[63] = ['40'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 6805. TIC A 2009";
 preguntaids[63] = 6805


//  Id pregunta: 6840 Año de creación de pregunta: 2010
 questions[64]= "65)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[64]= new Array();
 choices[64][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[64][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[64][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[64][3] = "La direcci&oacute;n MAC del router.";
 answers[64] = 3;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6840. TIC A 2009";
 preguntaids[64] = 6840


//  Id pregunta: 6804 Año de creación de pregunta: 2010
 questions[65]= "66)  En el encaminamiento por vector distancia:";
 choices[65]= new Array();
 choices[65][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[65][1] = "Emplea como m&eacute;trica el retardo y el ancho de banda";
 choices[65][2] = "Se produce el problema de cuenta a infinito.";
 choices[65][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[65] = 2;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 6804. TIC A 2009";
 preguntaids[65] = 6804


//  Id pregunta: 6890 Año de creación de pregunta: 2010
 questions[66]= "67)  El acr&oacute;nimo RSS responde a:";
 choices[66]= new Array();
 choices[66][0] = "Rich Site Summary.";
 choices[66][1] = "RDF Site Summary.";
 choices[66][2] = "Really Simple Syndication.";
 choices[66][3] = "Todos los anteriores.";
 answers[66] = 3;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6890. TIC A 2009";
 preguntaids[66] = 6890


//  Id pregunta: 6889 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[67]= new Array();
 choices[67][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[67][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[67][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[67][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros.";
 answers[67] = 3;
 units[67] = ['120'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6889. TIC A 2009";
 preguntaids[67] = 6889


//  Id pregunta: 6787 Año de creación de pregunta: 2010
 questions[68]= "69)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[68]= new Array();
 choices[68][0] = "{a,b,c}.";
 choices[68][1] = "{ax,az,bz,cx}.";
 choices[68][2] = "{ay,by,cy}.";
 choices[68][3] = "{a}.";
 answers[68] = 3;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6787. TIC A 2009";
 preguntaids[68] = 6787


//  Id pregunta: 6792 Año de creación de pregunta: 2010
 questions[69]= "70)  El Organismo de Normalizaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[69][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[69][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[69][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[69] = 0;
 units[69] = ['48'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 6792. TIC A 2009";
 preguntaids[69] = 6792


//  Id pregunta: 6875 Año de creación de pregunta: 2010
 questions[70]= "71)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[70]= new Array();
 choices[70][0] = "Brainstorming.";
 choices[70][1] = "Casos de uso.";
 choices[70][2] = "M&eacute;todo Albrecht.";
 choices[70][3] = "Prototipado.";
 answers[70] = 2;
 units[70] = ['84'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6875. TIC A 2009";
 preguntaids[70] = 6875


//  Id pregunta: 6830 Año de creación de pregunta: 2010
 questions[71]= "72)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[71]= new Array();
 choices[71][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[71][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[71][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[71][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[71] = 3;
 units[71] = ['48'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 6830. TIC A 2009";
 preguntaids[71] = 6830


//  Id pregunta: 6874 Año de creación de pregunta: 2010
 questions[72]= "73)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v3:";
 choices[72]= new Array();
 choices[72][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos derivados del uso de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones (TIC).";
 choices[72][1] = "Ayudar a descubrir y planificar el tratamiento oportuno para mantener los riesgos bajo control.";
 choices[72][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[72][3] = "Preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n, seg&uacute;n corresponda en cada caso.";
 answers[72] = 2;
 units[72] = ['45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 6874. TIC A 2009";
 preguntaids[72] = 6874


//  Id pregunta: 6885 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[73]= new Array();
 choices[73][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[73][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia.";
 choices[73][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[73][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[73] = 3;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 6885. TIC A 2009";
 preguntaids[73] = 6885


//  Id pregunta: 6803 Año de creación de pregunta: 2010
 questions[74]= "75)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[74]= new Array();
 choices[74][0] = "Delete table.";
 choices[74][1] = "rm table.";
 choices[74][2] = "Delete table now.";
 choices[74][3] = "DROP TABLE.";
 answers[74] = 3;
 units[74] = ['61'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6803. TIC A 2009";
 preguntaids[74] = 6803


