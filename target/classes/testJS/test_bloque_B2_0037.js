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
//  Id pregunta: 8685 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[0]= new Array();
 choices[0][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[0][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[0][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[0][3] = "Todas las anteriores son correctas.";
 answers[0] = 0;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8685. ";
 preguntaids[0] = 8685


//  Id pregunta: 8677 Año de creación de pregunta: 2013
 questions[1]= "2)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[1]= new Array();
 choices[1][0] = "Tanenbaum";
 choices[1][1] = "Sloman &amp; Kramer.";
 choices[1][2] = "Shanon";
 choices[1][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[1] = 0;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8677. ";
 preguntaids[1] = 8677


//  Id pregunta: 8631 Año de creación de pregunta: 2013
 questions[2]= "3)  En procesamiento de im&aacute;genes, la transformada de Hough se utiliza para:";
 choices[2]= new Array();
 choices[2][0] = "Detectar figuras en im&aacute;genes";
 choices[2][1] = "Detectar los falsos bordes que se hayan encontrado mediante el Algoritmo de Marr-Hildred";
 choices[2][2] = "Dividir una imagen en varias regiones";
 choices[2][3] = "Crear histogramas de las im&aacute;genes precargadas";
 answers[2] = 0;
 units[2] = ['80'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8631. ";
 preguntaids[2] = 8631


//  Id pregunta: 8679 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[3]= new Array();
 choices[3][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[3][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[3][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[3][3] = "Ninguna es correcta.";
 answers[3] = 2;
 units[3] = ['49', '56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8679. ";
 preguntaids[3] = 8679


//  Id pregunta: 8667 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Qu&eacute; es LUN Masking?";
 choices[4]= new Array();
 choices[4][0] = "La cabina presenta una LUN a un servidor y &eacute;ste puede acceder.";
 choices[4][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[4][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSI.";
 choices[4][3] = "Todos son v&aacute;lidas";
 answers[4] = 3;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8667. ";
 preguntaids[4] = 8667


//  Id pregunta: 8686 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[5]= new Array();
 choices[5][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[5][1] = "Se publicita como &ldquo;iptables&quot; hecho f&aacute;cil";
 choices[5][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[5][3] = "Todas las anteriores son correctas.";
 answers[5] = 3;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8686. ";
 preguntaids[5] = 8686


//  Id pregunta: 8659 Año de creación de pregunta: 2013
 questions[6]= "7)  &iquest;Cu&aacute;les son posibles topolog&iacute;as SAN de fibra &oacute;ptica?";
 choices[6]= new Array();
 choices[6][0] = "Punto a punto";
 choices[6][1] = "Bucle arbitrado";
 choices[6][2] = "Estructura Conmutada";
 choices[6][3] = "Todas son v&aacute;lidas";
 answers[6] = 3;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8659. ";
 preguntaids[6] = 8659


//  Id pregunta: 8671 Año de creación de pregunta: 2013
 questions[7]= "8)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[7]= new Array();
 choices[7][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[7][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[7][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso, es equivalente a replicaci&oacute;n discreta.";
 choices[7][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[7] = 3;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8671. Examen TIC A1 2011";
 preguntaids[7] = 8671


//  Id pregunta: 8701 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[8]= new Array();
 choices[8][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[8][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[8][2] = "No se gestiona.";
 choices[8][3] = "Ninguna es correcta.";
 answers[8] = 1;
 units[8] = ['58'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8701. ";
 preguntaids[8] = 8701


//  Id pregunta: 8669 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[9]= new Array();
 choices[9][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[9][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric (red SAN).";
 choices[9][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[9][3] = "Todas son correctas.";
 answers[9] = 3;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8669. ";
 preguntaids[9] = 8669


//  Id pregunta: 8676 Año de creación de pregunta: 2013
 questions[10]= "11)  En la primitiva send-receive, &iquest;qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[10]= new Array();
 choices[10][0] = "Send es bloqueante y Receive es no bloqueante.";
 choices[10][1] = "Ambas son bloqueantes.";
 choices[10][2] = "Ambas son no bloqueantes.";
 choices[10][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[10] = 3;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8676. ";
 preguntaids[10] = 8676


//  Id pregunta: 8660 Año de creación de pregunta: 2013
 questions[11]= "12)  Con relaci&oacute;n a las topolog&iacute;as SAN de fibra &oacute;ptica bucle arbitrado y estructura conmutada es cierto que&hellip;";
 choices[11]= new Array();
 choices[11][0] = "Mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[11][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[11][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[11][3] = "Bucle arbitrado y red conmutada no son topolog&iacute;as v&aacute;lidas.";
 answers[11] = 2;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8660. ";
 preguntaids[11] = 8660


//  Id pregunta: 8684 Año de creación de pregunta: 2013
 questions[12]= "13)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[12]= new Array();
 choices[12][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[12][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[12][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[12][3] = "Todas son correctas.";
 answers[12] = 3;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8684. ";
 preguntaids[12] = 8684


//  Id pregunta: 8662 Año de creación de pregunta: 2013
 questions[13]= "14)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[13]= new Array();
 choices[13][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[13][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[13][2] = "Login";
 choices[13][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[13] = 0;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8662. ";
 preguntaids[13] = 8662


//  Id pregunta: 8681 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[14]= new Array();
 choices[14][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[14][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[14][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[14][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[14] = 0;
 units[14] = ['59'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8681. ";
 preguntaids[14] = 8681


//  Id pregunta: 8665 Año de creación de pregunta: 2013
 questions[15]= "16)  &iquest;Qu&eacute; es iSCSI (Internet SCSI)?";
 choices[15]= new Array();
 choices[15][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[15][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[15][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[15][3] = "Ninguna es correcta.";
 answers[15] = 2;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8665. ";
 preguntaids[15] = 8665


//  Id pregunta: 8693 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[16]= new Array();
 choices[16][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[16][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[16][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[16][3] = "Todas son correctas.";
 answers[16] = 3;
 units[16] = ['58'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8693. ";
 preguntaids[16] = 8693


//  Id pregunta: 8696 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[17]= new Array();
 choices[17][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[17][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[17][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = 3;
 units[17] = ['57', '58'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8696. ";
 preguntaids[17] = 8696


//  Id pregunta: 8708 Año de creación de pregunta: 2013
 questions[18]= "19)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y, adem&aacute;s, puede acceder a las memorias de otros procesadores se conoce como:";
 choices[18]= new Array();
 choices[18][0] = "SMP";
 choices[18][1] = "Grid";
 choices[18][2] = "NUMA";
 choices[18][3] = "Cluster";
 answers[18] = 2;
 units[18] = ['49'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8708. Examen TICA2-2011";
 preguntaids[18] = 8708


//  Id pregunta: 8695 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[19]= new Array();
 choices[19][0] = "OS/2";
 choices[19][1] = "POSIX";
 choices[19][2] = "OS/2, POSIX y Win32.";
 choices[19][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[19] = 2;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8695. ";
 preguntaids[19] = 8695


//  Id pregunta: 8629 Año de creación de pregunta: 2013
 questions[20]= "21)  Indique la afirmaci&oacute;n FALSA:";
 choices[20]= new Array();
 choices[20][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[20][1] = "En el modelo de color CYMK, los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios";
 choices[20][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[20][3] = "La intensidad luminosa se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[20] = 1;
 units[20] = ['80'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8629. ";
 preguntaids[20] = 8629


//  Id pregunta: 8632 Año de creación de pregunta: 2013
 questions[21]= "22)  La transformaci&oacute;n hit or miss (o a&ntilde;adir o eliminar) aplicada al procesamiento de im&aacute;genes se utiliza para:";
 choices[21]= new Array();
 choices[21][0] = "Dividir una imagen en regiones a partir de diferencias crom&aacute;ticas";
 choices[21][1] = "Detectar regiones con una forma espec&iacute;fica";
 choices[21][2] = "Calcular la apertura y clausura del contorno de un objeto";
 choices[21][3] = "No es posible aplicar hit or miss al procesamiento de im&aacute;genes";
 answers[21] = 1;
 units[21] = ['80'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8632. ";
 preguntaids[21] = 8632


//  Id pregunta: 8673 Año de creación de pregunta: 2013
 questions[22]= "23)  Un conjunto de procesadores interconectados por redes que ocultan dicha caracter&iacute;stica mostrando una visi&oacute;n al usuario de &ldquo;uniprocesador virtual&rdquo; es:";
 choices[22]= new Array();
 choices[22][0] = "S. O. Distribuido";
 choices[22][1] = "S.O. Cooperativos o basados en Middlewares";
 choices[22][2] = "S. O. En Red";
 choices[22][3] = "S.O. Centralizados";
 answers[22] = 0;
 units[22] = ['55'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8673. ";
 preguntaids[22] = 8673


//  Id pregunta: 8691 Año de creación de pregunta: 2013
 questions[23]= "24)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[23]= new Array();
 choices[23][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[23][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[23][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[23][3] = "Son programas comerciales.";
 answers[23] = 0;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8691. ";
 preguntaids[23] = 8691


//  Id pregunta: 8705 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Qu&eacute; incluye Windows 8?";
 choices[24]= new Array();
 choices[24][0] = "Una nueva pantalla de Inicio.";
 choices[24][1] = "Una nueva tienda de aplicaciones.";
 choices[24][2] = "Su intefaz de usuario se ha modificado para hacerlo m&aacute;s adecuado para pantallas t&aacute;ctiles.";
 choices[24][3] = "Todas son correctas.";
 answers[24] = 3;
 units[24] = ['58'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8705. ";
 preguntaids[24] = 8705


//  Id pregunta: 8690 Año de creación de pregunta: 2013
 questions[25]= "26)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu tv?";
 choices[25]= new Array();
 choices[25][0] = "No existe.";
 choices[25][1] = "Usa una versi&oacute;n adaptada de la interfaz Unity.";
 choices[25][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[25][3] = "Ninguna es correcta.";
 answers[25] = 1;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8690. ";
 preguntaids[25] = 8690


//  Id pregunta: 8626 Año de creación de pregunta: 2013
 questions[26]= "27)  Es un formato de imagen en mapa de bits";
 choices[26]= new Array();
 choices[26][0] = "ODG";
 choices[26][1] = "DXF";
 choices[26][2] = "XCF";
 choices[26][3] = "DWG";
 answers[26] = 2;
 units[26] = ['80'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8626. ";
 preguntaids[26] = 8626


//  Id pregunta: 8663 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;C&oacute;mo es SAN iSCSI (Internet SCSI) respecto a FC?";
 choices[27]= new Array();
 choices[27][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[27][1] = "Igual";
 choices[27][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[27][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[27] = 2;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8663. ";
 preguntaids[27] = 8663


//  Id pregunta: 8698 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales en Windows?";
 choices[28]= new Array();
 choices[28][0] = "En el DA de Microsoft.";
 choices[28][1] = "En la SAM (Security Access Manager)";
 choices[28][2] = "En una archivo de texto del sistema cifrado.";
 choices[28][3] = "En la COM (Component Object Model)";
 answers[28] = 1;
 units[28] = ['58'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8698. ";
 preguntaids[28] = 8698


//  Id pregunta: 8670 Año de creación de pregunta: 2013
 questions[29]= "30)  Identificar que protocolo NO est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[29]= new Array();
 choices[29][0] = "iFTP";
 choices[29][1] = "iSCSCI";
 choices[29][2] = "FCIP";
 choices[29][3] = "iFCP";
 answers[29] = 0;
 units[29] = ['53'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8670. ";
 preguntaids[29] = 8670


//  Id pregunta: 8608 Año de creación de pregunta: 2013
 questions[30]= "31)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[30]= new Array();
 choices[30][0] = "Ganesha";
 choices[30][1] = "OpenSCORM";
 choices[30][2] = "Blackboard";
 choices[30][3] = "Desire2Learn";
 answers[30] = 0;
 units[30] = ['70'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8608. ";
 preguntaids[30] = 8608


//  Id pregunta: 8704 Año de creación de pregunta: 2013
 questions[31]= "32)  &iquest;Qu&eacute; mejora Windows Server 2008?";
 choices[31]= new Array();
 choices[31][0] = "Nuevo proceso de reparaci&oacute;n de sistemas NTFS.";
 choices[31][1] = "Creaci&oacute;n de sesiones de usuario secuenciales.";
 choices[31][2] = "Sistema de archivo FAT";
 choices[31][3] = "ASLR, protecci&oacute;n contra malware en la carga de controladores en disco.";
 answers[31] = 0;
 units[31] = ['58'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8704. ";
 preguntaids[31] = 8704


//  Id pregunta: 8610 Año de creación de pregunta: 2013
 questions[32]= "33)  No es una forma de presentar contenidos en un LMS:";
 choices[32]= new Array();
 choices[32][0] = "Estructura lineal";
 choices[32][1] = "Estructura matricial";
 choices[32][2] = "Estructura jer&aacute;rquica";
 choices[32][3] = "Estructura en red";
 answers[32] = 1;
 units[32] = ['70'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8610. ";
 preguntaids[32] = 8610


//  Id pregunta: 8694 Año de creación de pregunta: 2013
 questions[33]= "34)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[33]= new Array();
 choices[33][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[33][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[33][2] = "Es el programa en modo Kernel NTOS (Windows NT Operating System Kernel)";
 choices[33][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[33] = 2;
 units[33] = ['58'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8694. ";
 preguntaids[33] = 8694


//  Id pregunta: 8617 Año de creación de pregunta: 2013
 questions[34]= "35)  Entre los elementos que propone la ISO 19113, no se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "Compleci&oacute;n";
 choices[34][1] = "Consistencia topol&oacute;gica";
 choices[34][2] = "Calidad temporal";
 choices[34][3] = "Exactitud posicional";
 answers[34] = 1;
 units[34] = ['71'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8617. ";
 preguntaids[34] = 8617


//  Id pregunta: 8627 Año de creación de pregunta: 2013
 questions[35]= "36)  Es un formato de imagen vectorial:";
 choices[35]= new Array();
 choices[35][0] = "VML";
 choices[35][1] = "JPG";
 choices[35][2] = "XCF";
 choices[35][3] = "GIF";
 answers[35] = 0;
 units[35] = ['80'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8627. ";
 preguntaids[35] = 8627


//  Id pregunta: 8623 Año de creación de pregunta: 2013
 questions[36]= "37)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[36]= new Array();
 choices[36][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[36][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[36][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[36][3] = "Todas son verdaderas";
 answers[36] = 0;
 units[36] = ['75'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8623. ";
 preguntaids[36] = 8623


//  Id pregunta: 8609 Año de creación de pregunta: 2013
 questions[37]= "38)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[37]= new Array();
 choices[37][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[37][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[37][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[37][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[37] = 3;
 units[37] = ['70'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8609. ";
 preguntaids[37] = 8609


//  Id pregunta: 8680 Año de creación de pregunta: 2013
 questions[38]= "39)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[38]= new Array();
 choices[38][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[38][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[38][2] = "Una versi&oacute;n de Android.";
 choices[38][3] = "No existe.";
 answers[38] = 2;
 units[38] = ['59'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8680. ";
 preguntaids[38] = 8680


//  Id pregunta: 8707 Año de creación de pregunta: 2013
 questions[39]= "40)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[39]= new Array();
 choices[39][0] = "Meego.";
 choices[39][1] = "Android.";
 choices[39][2] = "Chrome OS.";
 choices[39][3] = "Symbian OS.";
 answers[39] = 0;
 units[39] = ['59'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8707. ";
 preguntaids[39] = 8707


//  Id pregunta: 8683 Año de creación de pregunta: 2013
 questions[40]= "41)  &iquest;Qu&eacute; es DJL?";
 choices[40]= new Array();
 choices[40][0] = "Un administrador de juegos escrito en Python que permite instalar juegos en Linux.";
 choices[40][1] = "Gestor de juegos que sirve tanto para lanzar los juegos instalados como para instalar juegos desde la red.";
 choices[40][2] = "No existe";
 choices[40][3] = "A) y B) son correctas.";
 answers[40] = 3;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8683. ";
 preguntaids[40] = 8683


//  Id pregunta: 8709 Año de creación de pregunta: 2013
 questions[41]= "42)  Las siglas SSI (Single System Image) corresponden a:";
 choices[41]= new Array();
 choices[41][0] = "Una interfaz &uacute;nica de acceso al sistema para un cluster de servidores.";
 choices[41][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[41][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema.";
 choices[41][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET.";
 answers[41] = 0;
 units[41] = ['49', '55'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8709. Examen TICA2-2011";
 preguntaids[41] = 8709


//  Id pregunta: 8628 Año de creación de pregunta: 2013
 questions[42]= "43)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[42]= new Array();
 choices[42][0] = "PAM";
 choices[42][1] = "PBM";
 choices[42][2] = "PGM";
 choices[42][3] = "PPM";
 answers[42] = 0;
 units[42] = ['80'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8628. ";
 preguntaids[42] = 8628


//  Id pregunta: 8612 Año de creación de pregunta: 2013
 questions[43]= "44)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[43]= new Array();
 choices[43][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[43][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[43][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[43][3] = "Ninguna de las anteriores es correcta";
 answers[43] = 0;
 units[43] = ['71'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8612. ";
 preguntaids[43] = 8612


//  Id pregunta: 8697 Año de creación de pregunta: 2013
 questions[44]= "45)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[44]= new Array();
 choices[44][0] = "Grupos de archivos";
 choices[44][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[44][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[44][3] = "Todas son correctas.";
 answers[44] = 0;
 units[44] = ['58'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8697. ";
 preguntaids[44] = 8697


//  Id pregunta: 8700 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[45]= new Array();
 choices[45][0] = "Los trabajos contienen procesos.";
 choices[45][1] = "Los procesos contienen hilos.";
 choices[45][2] = "Los hilos contienen fibras.";
 choices[45][3] = "Todas son correctas.";
 answers[45] = 3;
 units[45] = ['58'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8700. ";
 preguntaids[45] = 8700


//  Id pregunta: 8611 Año de creación de pregunta: 2013
 questions[46]= "47)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[46]= new Array();
 choices[46][0] = "Run Length Encoding (RLE)";
 choices[46][1] = "Quadtrees";
 choices[46][2] = "Tiff";
 choices[46][3] = "Wavelets";
 answers[46] = 2;
 units[46] = ['71'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8611. ";
 preguntaids[46] = 8611


//  Id pregunta: 8699 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Qu&eacute; es UMS?";
 choices[47]= new Array();
 choices[47][0] = "Una tecnolog&iacute;a m&oacute;vil";
 choices[47][1] = "User Mode Scheduling.";
 choices[47][2] = "Permite separar en dos partes el hilo de usuario entre la parte del proceso que se ejecuta en modo usuario y el hilo que se ejecuta en modo kernel.";
 choices[47][3] = "La B) y la C) son correctas.";
 answers[47] = 3;
 units[47] = ['58'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8699. ";
 preguntaids[47] = 8699


//  Id pregunta: 8616 Año de creación de pregunta: 2013
 questions[48]= "49)  Es un estandar en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica referente a los metadatos";
 choices[48]= new Array();
 choices[48][0] = "ISO 19110";
 choices[48][1] = "ISO 19125";
 choices[48][2] = "ISO 19115";
 choices[48][3] = "ISO 19122";
 answers[48] = 2;
 units[48] = ['71'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8616. ";
 preguntaids[48] = 8616


//  Id pregunta: 8658 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[49]= new Array();
 choices[49][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[49][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[49][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[49][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[49] = 3;
 units[49] = ['53'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8658. ";
 preguntaids[49] = 8658


//  Id pregunta: 8674 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[50]= new Array();
 choices[50][0] = "Cliente/Servidor";
 choices[50][1] = "Proxy/Cach&eacute;";
 choices[50][2] = "Modelo Peer to Peer";
 choices[50][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[50] = 3;
 units[50] = ['55'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8674. ";
 preguntaids[50] = 8674


//  Id pregunta: 8624 Año de creación de pregunta: 2013
 questions[51]= "52)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[51]= new Array();
 choices[51][0] = "Fue desarrollado por OASIS";
 choices[51][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas";
 choices[51][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[51][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[51] = 1;
 units[51] = ['75'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8624. ";
 preguntaids[51] = 8624


//  Id pregunta: 8622 Año de creación de pregunta: 2013
 questions[52]= "53)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[52]= new Array();
 choices[52][0] = "Orden PRE/2971/2007";
 choices[52][1] = "Real Decreto 1496/2003";
 choices[52][2] = "Real Decreto 1619/2012";
 choices[52][3] = "Real Decreto 1783/2012";
 answers[52] = 2;
 units[52] = ['75'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8622. ";
 preguntaids[52] = 8622


//  Id pregunta: 8613 Año de creación de pregunta: 2013
 questions[53]= "54)  La norma ISO referida a la calidad en la informaci&oacute;n geogr&aacute;fica es:";
 choices[53]= new Array();
 choices[53][0] = "ISO 19110";
 choices[53][1] = "ISO 19113";
 choices[53][2] = "ISO 19119";
 choices[53][3] = "ISO 19139";
 answers[53] = 1;
 units[53] = ['71'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8613. ";
 preguntaids[53] = 8613


//  Id pregunta: 8687 Año de creación de pregunta: 2013
 questions[54]= "55)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[54]= new Array();
 choices[54][0] = "Instala Ubuntu sobre Windows.";
 choices[54][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[54][2] = "Inicia la interfaz de red eth0.";
 choices[54][3] = "Detiene las interfaces de red.";
 answers[54] = 1;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8687. ";
 preguntaids[54] = 8687


//  Id pregunta: 8672 Año de creación de pregunta: 2013
 questions[55]= "56)  &iquest;En qu&eacute; se parece CICS (Customer Information Control System) e IMS (Information Management System)?";
 choices[55]= new Array();
 choices[55][0] = "Ambos son sistemas transaccionales";
 choices[55][1] = "No tienen nada que ver";
 choices[55][2] = "Son protocolos de acceso a ficheros";
 choices[55][3] = "Son correctas A) y C)";
 answers[55] = 0;
 units[55] = ['54'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8672. Examen TIC A1 2011";
 preguntaids[55] = 8672


//  Id pregunta: 8678 Año de creación de pregunta: 2013
 questions[56]= "57)  Desde el punto de vista interno, el sistema operativo puede concebirse como:";
 choices[56]= new Array();
 choices[56][0] = "Un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[56][1] = "Gestor de recursos.";
 choices[56][2] = "Coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[56][3] = "B) y C) son correctas.";
 answers[56] = 3;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8678. ";
 preguntaids[56] = 8678


//  Id pregunta: 8630 Año de creación de pregunta: 2013
 questions[57]= "58)  No es un espacio de color:";
 choices[57]= new Array();
 choices[57][0] = "RGB";
 choices[57][1] = "CMYK";
 choices[57][2] = "HSM";
 choices[57][3] = "HSV";
 answers[57] = 2;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8630. ";
 preguntaids[57] = 8630


//  Id pregunta: 8692 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[58]= new Array();
 choices[58][0] = "En secciones llamadas componentes.";
 choices[58][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[58][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[58][3] = "Todas son correctas.";
 answers[58] = 3;
 units[58] = ['57'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8692. ";
 preguntaids[58] = 8692


//  Id pregunta: 8703 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Qu&eacute; es BitLocker?";
 choices[59]= new Array();
 choices[59][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[59][1] = "Se proporciona desde Windows Vista.";
 choices[59][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[59][3] = "Todas son correctas";
 answers[59] = 3;
 units[59] = ['58'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8703. ";
 preguntaids[59] = 8703


//  Id pregunta: 8668 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Qu&eacute; es Zoning?";
 choices[60]= new Array();
 choices[60][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[60][1] = "Cada zona se comporta como si en la red SAN s&oacute;lo existieran los dispositivos que forman parte de ella.";
 choices[60][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[60][3] = "Todas son v&aacute;lidas";
 answers[60] = 3;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8668. ";
 preguntaids[60] = 8668


//  Id pregunta: 8689 Año de creación de pregunta: 2013
 questions[61]= "62)  &iquest;Qu&eacute; es Nemo?";
 choices[61]= new Array();
 choices[61][0] = "Un gestor de archivos.";
 choices[61][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[61][2] = "Una suite de ofim&aacute;tica.";
 choices[61][3] = "Un editor de texto.";
 answers[61] = 0;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8689. ";
 preguntaids[61] = 8689


//  Id pregunta: 8702 Año de creación de pregunta: 2013
 questions[62]= "63)  &iquest;Qu&eacute; es VAD?";
 choices[62]= new Array();
 choices[62][0] = "Virtual Address Descriptors";
 choices[62][1] = "Virtual Allocator Devices";
 choices[62][2] = "Descriptor de direcciones asignadas.";
 choices[62][3] = "No existe.";
 answers[62] = 0;
 units[62] = ['58'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8702. ";
 preguntaids[62] = 8702


//  Id pregunta: 8664 Año de creación de pregunta: 2013
 questions[63]= "64)  Para extender las redes SAN, &iquest;qu&eacute; tipo de interconexiones se suelen utilizar?:";
 choices[63]= new Array();
 choices[63][0] = "Sonet/SDH, WDM, ATM";
 choices[63][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[63][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[63][3] = "Sonet/SDH, WDM, ATM, iSCSI";
 answers[63] = 1;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8664. ";
 preguntaids[63] = 8664


//  Id pregunta: 8657 Año de creación de pregunta: 2013
 questions[64]= "65)  &iquest;Qu&eacute; es CAS?";
 choices[64]= new Array();
 choices[64][0] = "Content Address Storage";
 choices[64][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[64][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = 3;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8657. ";
 preguntaids[64] = 8657


//  Id pregunta: 8656 Año de creación de pregunta: 2013
 questions[65]= "66)  &iquest;Desde el punto de vista de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[65]= new Array();
 choices[65][0] = "La cinta est&aacute; orientada al almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[65][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[65][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[65][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[65] = 1;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8656. ";
 preguntaids[65] = 8656


//  Id pregunta: 8666 Año de creación de pregunta: 2013
 questions[66]= "67)  &iquest;Qu&eacute; es WAFS?";
 choices[66]= new Array();
 choices[66][0] = "Wide Area File Services";
 choices[66][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[66][2] = "Un tipo de File System";
 choices[66][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[66] = 0;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8666. ";
 preguntaids[66] = 8666


//  Id pregunta: 8688 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[67]= new Array();
 choices[67][0] = "Se orienta al usuario novel y promedio.";
 choices[67][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[67][2] = "Su patrocinador es Canonical.";
 choices[67][3] = "Todas son correctas.";
 answers[67] = 3;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8688. ";
 preguntaids[67] = 8688


//  Id pregunta: 8621 Año de creación de pregunta: 2013
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[68]= new Array();
 choices[68][0] = "Datos del emisor";
 choices[68][1] = "Detalle de la factura";
 choices[68][2] = "Importe de la factura";
 choices[68][3] = "Datos de la firma electr&oacute;nica";
 answers[68] = 2;
 units[68] = ['75'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8621. Examen TIC A2 2011";
 preguntaids[68] = 8621


//  Id pregunta: 8706 Año de creación de pregunta: 2013
 questions[69]= "70)  &iquest;Qu&eacute; requisitos m&iacute;nimos de hardware tiene Windows 8?";
 choices[69]= new Array();
 choices[69][0] = "2 GB de RAM para versi&oacute;n de 64 bits y 1 GB para versi&oacute;n de 32 bits.";
 choices[69][1] = "1 GB para versi&oacute;n de 64 bits y 2 para versi&oacute;n de 32 bits.";
 choices[69][2] = "16 GB de espacio libre para versi&oacute;n de 64 bits.";
 choices[69][3] = "Ninguna es correcta.";
 answers[69] = 0;
 units[69] = ['58'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8706. ";
 preguntaids[69] = 8706


//  Id pregunta: 8661 Año de creación de pregunta: 2013
 questions[70]= "71)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[70]= new Array();
 choices[70][0] = "Mediante la MAC";
 choices[70][1] = "Mediante su WWN (World Wide Name)";
 choices[70][2] = "Mediante una url";
 choices[70][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[70] = 1;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8661. ";
 preguntaids[70] = 8661


//  Id pregunta: 8675 Año de creación de pregunta: 2013
 questions[71]= "72)  &iquest;C&oacute;mo es por lo general el paso de mensajes mediante la primitiva send-receive?";
 choices[71]= new Array();
 choices[71][0] = "S&iacute;ncrona";
 choices[71][1] = "As&iacute;ncrona";
 choices[71][2] = "Se realiza una llamada desde un cliente a una funci&oacute;n o procedimiento de un servidor.";
 choices[71][3] = "Se instancia un objeto del servidor.";
 answers[71] = 1;
 units[71] = ['55'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8675. ";
 preguntaids[71] = 8675


//  Id pregunta: 8614 Año de creación de pregunta: 2013
 questions[72]= "73)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[72]= new Array();
 choices[72][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[72][1] = "Contiene 34 temas espaciales";
 choices[72][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[72][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[72] = 2;
 units[72] = ['71'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8614. ";
 preguntaids[72] = 8614


//  Id pregunta: 8615 Año de creación de pregunta: 2013
 questions[73]= "74)  Entre los servicios m&iacute;nimos que toda IDE debe respetar seg&uacute;n el OGC no se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "El servicio de coberturas en web (WCS)";
 choices[73][1] = "El servicio de cat&aacute;logos de datos (CSW)";
 choices[73][2] = "El servicio de procesamientos (WPS)";
 choices[73][3] = "El servicio de conversi&oacute;n de coordenadas";
 answers[73] = 3;
 units[73] = ['71'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8615. ";
 preguntaids[73] = 8615


//  Id pregunta: 8682 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Qu&eacute; es IPL (Initial Program Load)?";
 choices[74]= new Array();
 choices[74][0] = "Es el equivalente al Boot en z/OS";
 choices[74][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[74][2] = "Carga de programa en modo batch en z/OS.";
 choices[74][3] = "Ninguna es correcta.";
 answers[74] = 0;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8682. ";
 preguntaids[74] = 8682


