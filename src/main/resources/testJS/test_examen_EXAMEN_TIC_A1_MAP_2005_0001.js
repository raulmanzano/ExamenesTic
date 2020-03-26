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
//  Id pregunta: 7491 Año de creación de pregunta: 2010
 questions[0]= "1)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[0]= new Array();
 choices[0][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[0][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[0][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[0][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[0] = 2;
 units[0] = ['77'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7491. Map 2005";
 preguntaids[0] = 7491


//  Id pregunta: 7515 Año de creación de pregunta: 2010
 questions[1]= "2)  En el dise&ntilde;o estructurado se utiliza el concepto de acoplamiento entre m&oacute;dulos de software. Indique de entre los siguientes tipos de acoplamiento el que corresponde al caso en que la informaci&oacute;n se transmite entre m&oacute;dulos como estructura de datos:";
 choices[1]= new Array();
 choices[1][0] = "Acoplamiento de datos simple.";
 choices[1][1] = "Acoplamiento por estampado.";
 choices[1][2] = "Acoplamiento de control.";
 choices[1][3] = "Acoplamiento externo.";
 answers[1] = 1;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7515. Map 2005";
 preguntaids[1] = 7515


//  Id pregunta: 7512 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[2]= new Array();
 choices[2][0] = "X/OPEN.";
 choices[2][1] = "ACE.";
 choices[2][2] = "OSF.";
 choices[2][3] = "IEEE.";
 answers[2] = 3;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7512. Map 2005";
 preguntaids[2] = 7512


//  Id pregunta: 7546 Año de creación de pregunta: 2010
 questions[3]= "4)  Sean en una comunicaci&oacute;n: m = mensaje a transmitir. y = h(m) el c&oacute;digo hash del mensaje m calculado en origen. m&rsquo; = mensaje recibido. y&rsquo; = h(m&rsquo;) el c&oacute;digo hash del mensaje m&rsquo; recibido, calculado en destino. Se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[3]= new Array();
 choices[3][0] = "Si y = y&rsquo; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&rsquo;.";
 choices[3][1] = "Si y ? y&rsquo; entonces se puede afirmar que la clave privada ha sido alterada.";
 choices[3][2] = "Si m = m&rsquo; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&rsquo;.";
 choices[3][3] = "Si y = y&rsquo; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&rsquo;.";
 answers[3] = 0;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7546. Map 2005";
 preguntaids[3] = 7546


//  Id pregunta: 7489 Año de creación de pregunta: 2010
 questions[4]= "5)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS:";
 choices[4]= new Array();
 choices[4][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n.";
 choices[4][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros.";
 choices[4][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros.";
 choices[4][3] = "Proporciona transparencia de la replicaci&oacute;n.";
 answers[4] = 1;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7489. Map 2005";
 preguntaids[4] = 7489


//  Id pregunta: 7518 Año de creación de pregunta: 2010
 questions[5]= "6)  En el lenguaje SQL, un valor NULL:";
 choices[5]= new Array();
 choices[5][0] = "Significa blancos o ceros.";
 choices[5][1] = "Puede ser utilizado en una instrucci&oacute;n SELECT.";
 choices[5][2] = "Se utiliza para referirse a la informaci&oacute;n que es incompleta o de la que no se dispone.";
 choices[5][3] = "Ha de ser igual a cualquier otro valor NULL en cualquier sistema.";
 answers[5] = 2;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7518. Map 2005";
 preguntaids[5] = 7518


//  Id pregunta: 7500 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[6]= new Array();
 choices[6][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[6][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[6][2] = "Los ficheros con este formato son independientes de la plataforma.";
 choices[6][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[6] = 3;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7500. Map 2005";
 preguntaids[6] = 7500


//  Id pregunta: 7508 Año de creación de pregunta: 2010
 questions[7]= "8)  El entorno Microsoft, WebDAV:";
 choices[7]= new Array();
 choices[7][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio.";
 choices[7][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e Intranets.";
 choices[7][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red.";
 choices[7][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos.";
 answers[7] = 1;
 units[7] = ['63'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7508. Map 2005";
 preguntaids[7] = 7508


//  Id pregunta: 7483 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[8]= new Array();
 choices[8][0] = "Impide la descarga de contenido protegido.";
 choices[8][1] = "Impide la copia de contenido protegido.";
 choices[8][2] = "Garantiza la no modificaci&oacute;n del contenido protegido.";
 choices[8][3] = "Garantiza el proceso de pago entre comprador y vendedor.";
 answers[8] = 0;
 units[8] = ['41'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 7483. Map 2005";
 preguntaids[8] = 7483


//  Id pregunta: 7479 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes apartados no forma parte del &laquo;Sistema de Gesti&oacute;n de la Calidad&raquo; de la norma ISO 9004:2000?";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de sistemas y procesos.";
 choices[9][1] = "Documentaci&oacute;n.";
 choices[9][2] = "Planificaci&oacute;n";
 choices[9][3] = "Uso de los principios de gesti&oacute;n de la calidad.";
 answers[9] = 2;
 units[9] = ['87'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7479. Map 2005";
 preguntaids[9] = 7479


//  Id pregunta: 7539 Año de creación de pregunta: 2010
 questions[10]= "11)  El est&aacute;ndar de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es:";
 choices[10]= new Array();
 choices[10][0] = "X.600.";
 choices[10][1] = "Open LDAP.";
 choices[10][2] = "X.400.";
 choices[10][3] = "X.500.";
 answers[10] = 3;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7539. Map 2005";
 preguntaids[10] = 7539


//  Id pregunta: 7550 Año de creación de pregunta: 2010
 questions[11]= "12)  En la matriz de puntuaci&oacute;n REDER, que es el m&eacute;todo de evaluaci&oacute;n utilizado para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[11]= new Array();
 choices[11][0] = "10%.";
 choices[11][1] = "15%.";
 choices[11][2] = "20%.";
 choices[11][3] = "25%.";
 answers[11] = 3;
 units[11] = ['98'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 7550. Map 2005";
 preguntaids[11] = 7550


//  Id pregunta: 7507 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[12]= new Array();
 choices[12][0] = "Planificaci&oacute;n.";
 choices[12][1] = "Gesti&oacute;n de proyectos.";
 choices[12][2] = "Aseguramiento de la calidad.";
 choices[12][3] = "Seguridad.";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7507. Map 2005";
 preguntaids[12] = 7507


//  Id pregunta: 7548 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[13]= new Array();
 choices[13][0] = "ISO (International Standards Organization).";
 choices[13][1] = "IEEE (Institute of Electrical Engineers).";
 choices[13][2] = "ETSI (European Telecommunications Standards Institute).";
 choices[13][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[13] = 2;
 units[13] = ['106'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7548. Map 2005";
 preguntaids[13] = 7548


//  Id pregunta: 7493 Año de creación de pregunta: 2010
 questions[14]= "15)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[14]= new Array();
 choices[14][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos.";
 choices[14][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[14][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[14][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos.";
 answers[14] = 2;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7493. Map 2005";
 preguntaids[14] = 7493


//  Id pregunta: 7511 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?";
 choices[15]= new Array();
 choices[15][0] = "Los derivados del Registro Civil.";
 choices[15][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada.";
 choices[15][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras.";
 choices[15][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos.";
 answers[15] = 0;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7511. Map 2005";
 preguntaids[15] = 7511


//  Id pregunta: 7530 Año de creación de pregunta: 2010
 questions[16]= "17)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos, el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[16]= new Array();
 choices[16][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[16][1] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[16][2] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[16][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 answers[16] = 2;
 units[16] = ['38'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7530. Map 2005";
 preguntaids[16] = 7530


//  Id pregunta: 7485 Año de creación de pregunta: 2010
 questions[17]= "18)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[17]= new Array();
 choices[17][0] = "jpeg, tiff y spp.";
 choices[17][1] = "jpeg, spp y psd.";
 choices[17][2] = "jpeg, spp y tiff.";
 choices[17][3] = "jpeg, gif y png.";
 answers[17] = 3;
 units[17] = ['80'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7485. Map 2005";
 preguntaids[17] = 7485


//  Id pregunta: 7478 Año de creación de pregunta: 2010
 questions[18]= "19)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Reusabilidad";
 choices[18][1] = "Encapsulaci&oacute;n.";
 choices[18][2] = "Abstracci&oacute;n";
 choices[18][3] = "Persistencia";
 answers[18] = 3;
 units[18] = ['82'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7478. Map 2005";
 preguntaids[18] = 7478


//  Id pregunta: 7538 Año de creación de pregunta: 2010
 questions[19]= "20)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[19]= new Array();
 choices[19][0] = "De 50 a 550 MHz.";
 choices[19][1] = "De 5 a 50 MHz.";
 choices[19][2] = "De 550 a 860 MHz.";
 choices[19][3] = "De 5 a 860 MHz.";
 answers[19] = 1;
 units[19] = ['115'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7538. Map 2005";
 preguntaids[19] = 7538


//  Id pregunta: 7498 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programaci&oacute;n orientado a objetos?";
 choices[20]= new Array();
 choices[20][0] = "Encapsulaci&oacute;n.";
 choices[20][1] = "Herencia.";
 choices[20][2] = "Polimorfismo.";
 choices[20][3] = "Historicismo.";
 answers[20] = 3;
 units[20] = ['89'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7498. Map 2005";
 preguntaids[20] = 7498


//  Id pregunta: 7527 Año de creación de pregunta: 2010
 questions[21]= "22)  En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[21]= new Array();
 choices[21][0] = "Driver Tipo 1.";
 choices[21][1] = "Driver Tipo 2.";
 choices[21][2] = "Driver Tipo 3.";
 choices[21][3] = "Driver Tipo 4.";
 answers[21] = 0;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7527. Map 2005";
 preguntaids[21] = 7527


//  Id pregunta: 7547 Año de creación de pregunta: 2010
 questions[22]= "23)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[22]= new Array();
 choices[22][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g la de 2,4 GHz.";
 choices[22][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps.";
 choices[22][2] = "802.11i se refiere a mejoras de seguridad.";
 choices[22][3] = "802.11e se refiere a calidad de servicio.";
 answers[22] = 1;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7547. Map 2005";
 preguntaids[22] = 7547


//  Id pregunta: 7528 Año de creación de pregunta: 2010
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta:";
 choices[23]= new Array();
 choices[23][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado.";
 choices[23][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido.";
 choices[23][2] = "En OWL DL, una clase no puede ser instancia de otra clase.";
 choices[23][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud.";
 answers[23] = 2;
 units[23] = ['68'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7528. Map 2005";
 preguntaids[23] = 7528


//  Id pregunta: 5462 Año de creación de pregunta: 2007
 questions[24]= "25)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[24]= new Array();
 choices[24][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[24][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[24][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[24][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[24] = 0;
 units[24] = ['33'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 5462. Map 2005";
 preguntaids[24] = 5462


//  Id pregunta: 7542 Año de creación de pregunta: 2010
 questions[25]= "26)  En el entrono de desarrollo .NET, el t&eacute;rmino CLR se refiere a:";
 choices[25]= new Array();
 choices[25][0] = "Un entorno en tiempo de ejecuci&oacute;n que ejecuta el c&oacute;digo y proporciona servicios proporcionado por .NET framework.";
 choices[25][1] = "La biblioteca de clases del entorno .NET Framework.";
 choices[25][2] = "Un modelo de programaci&oacute;n para la creaci&oacute;n de aplicaciones Web.";
 choices[25][3] = "Un controlador para eventos de nivel de aplicaci&oacute;n.";
 answers[25] = 0;
 units[25] = ['63'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7542. Map 2005.  http://www.insht.es/InshtWeb/Contenidos/Normativa/GuiasTecnicas/Ficheros/pantallas.pdf";
 preguntaids[25] = 7542


//  Id pregunta: 7499 Año de creación de pregunta: 2010
 questions[26]= "27)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta:";
 choices[26]= new Array();
 choices[26][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina.";
 choices[26][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso.";
 choices[26][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador.";
 choices[26][3] = "Los fallos de p&aacute;gina son tratados por el hardware.";
 answers[26] = 2;
 units[26] = ['58'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7499. Map 2005";
 preguntaids[26] = 7499


//  Id pregunta: 7492 Año de creación de pregunta: 2010
 questions[27]= "28)  Seg&uacute;n establece el REAL DECRETO 488/1997, de 14 de abril, sobre disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyen pantallas de visualizaci&oacute;n, &iquest;cu&aacute;l es el n&uacute;mero de horas m&iacute;nimo que debe pasar un trabajador delante de la pantalla para que se le considere &laquo;trabajador usuario de PVD&raquo;?";
 choices[27]= new Array();
 choices[27][0] = "4 horas diarias o 25 semanales.";
 choices[27][1] = "3 horas diarias o 20 semanales.";
 choices[27][2] = "4 horas diarias o 20 semanales.";
 choices[27][3] = "3 horas diarias o 25 semanales.";
 answers[27] = 2;
 units[27] = ['39'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 7492. Map 2005.  http://www.insht.es/InshtWeb/Contenidos/Normativa/GuiasTecnicas/Ficheros/pantallas.pdf";
 preguntaids[27] = 7492


//  Id pregunta: 7488 Año de creación de pregunta: 2010
 questions[28]= "29)  La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[28]= new Array();
 choices[28][0] = "Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[28][1] = "Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[28][2] = "Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[28][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[28] = 2;
 units[28] = ['63'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7488. Map 2005";
 preguntaids[28] = 7488


//  Id pregunta: 7537 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[29]= new Array();
 choices[29][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras.";
 choices[29][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir.";
 choices[29][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones.";
 choices[29][3] = "ICMP garantiza la entrega fiable de un paquete IP.";
 answers[29] = 1;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7537. Map 2005";
 preguntaids[29] = 7537


//  Id pregunta: 7501 Año de creación de pregunta: 2010
 questions[30]= "31)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objetos de acuerdo a su funcionalidad:";
 choices[30]= new Array();
 choices[30][0] = "Auxiliar, Estructural, Simplificada, Alias.";
 choices[30][1] = "Estructural, Simplificada, Auxiliar, Alias.";
 choices[30][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias.";
 choices[30][3] = "Abstracta, Estructural, Auxiliar, Alias.";
 answers[30] = 3;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7501. Map 2005";
 preguntaids[30] = 7501


//  Id pregunta: 7524 Año de creación de pregunta: 2010
 questions[31]= "32)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software:";
 choices[31]= new Array();
 choices[31][0] = "Entradas externas.";
 choices[31][1] = "Ficheros l&oacute;gicos internos.";
 choices[31][2] = "Atributos del producto.";
 choices[31][3] = "Consultas.";
 answers[31] = 2;
 units[31] = ['94'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7524. Map 2005";
 preguntaids[31] = 7524


//  Id pregunta: 7484 Año de creación de pregunta: 2010
 questions[32]= "33)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[32]= new Array();
 choices[32][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[32][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[32][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[32][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[32] = 2;
 units[32] = ['47'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 7484. Map 2005";
 preguntaids[32] = 7484


//  Id pregunta: 7495 Año de creación de pregunta: 2010
 questions[33]= "34)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[33]= new Array();
 choices[33][0] = "100.255.255.255.";
 choices[33][1] = "0.0.0.255.";
 choices[33][2] = "100.0.0.0.";
 choices[33][3] = "100.254.254.255.";
 answers[33] = 0;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7495. Map 2005";
 preguntaids[33] = 7495


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[34]= "35)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[34]= new Array();
 choices[34][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[34][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[34][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[34][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[34] = 2;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7526. Map 2005";
 preguntaids[34] = 7526


//  Id pregunta: 7519 Año de creación de pregunta: 2010
 questions[35]= "36)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones:";
 choices[35]= new Array();
 choices[35][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &laquo;abstract person&raquo;.";
 choices[35][1] = "Learning Design puede ser integrado dentro de la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;.";
 choices[35][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI.";
 choices[35][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS e IEEE metadata.";
 answers[35] = 0;
 units[35] = ['70'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7519. Map 2005";
 preguntaids[35] = 7519


//  Id pregunta: 7490 Año de creación de pregunta: 2010
 questions[36]= "37)  El t&eacute;rmino JigSaw se refiere a:";
 choices[36]= new Array();
 choices[36][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor.";
 choices[36][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos.";
 choices[36][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse.";
 choices[36][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos.";
 answers[36] = 0;
 units[36] = ['39'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 7490. Map 2005";
 preguntaids[36] = 7490


//  Id pregunta: 7513 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "NFS.";
 choices[37][1] = "SMTP.";
 choices[37][2] = "RPC.";
 choices[37][3] = "UDP.";
 answers[37] = 3;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 7513. Map 2005";
 preguntaids[37] = 7513


//  Id pregunta: 7522 Año de creación de pregunta: 2010
 questions[38]= "39)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera seg&uacute;n el modelo OSI en el nivel de:";
 choices[38]= new Array();
 choices[38][0] = "Transporte.";
 choices[38][1] = "Red.";
 choices[38][2] = "F&iacute;sico.";
 choices[38][3] = "Enlace.";
 answers[38] = 1;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7522. Map 2005";
 preguntaids[38] = 7522


//  Id pregunta: 7477 Año de creación de pregunta: 2010
 questions[39]= "40)  Indique cu&aacute;l de las siguientes alternativas corresponde a las gu&iacute;as o manuales que componen la publicaci&oacute;n oficial de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3:";
 choices[39]= new Array();
 choices[39][0] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Procedimientos y Herramientas.";
 choices[39][1] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Gu&iacute;a de Procedimientos y Mecanismos.";
 choices[39][2] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Interfaces, T&eacute;cnicas y Pr&aacute;cticas.";
 choices[39][3] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, la Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[39] = 2;
 units[39] = ['86'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7477. Map 2005";
 preguntaids[39] = 7477


//  Id pregunta: 7532 Año de creación de pregunta: 2010
 questions[40]= "41)  Las SDU (Service Data Unit) son unidades de datos:";
 choices[40]= new Array();
 choices[40][0] = "Que se intercambian entre entidades hom&oacute;logas.";
 choices[40][1] = "Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[40][2] = "Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[40][3] = "Que deben ser tratados por el nivel superior N+1 de forma transparente.";
 answers[40] = 3;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7532. Map 2005";
 preguntaids[40] = 7532


//  Id pregunta: 7536 Año de creación de pregunta: 2010
 questions[41]= "42)  Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo:";
 choices[41]= new Array();
 choices[41][0] = "70 a&ntilde;os.";
 choices[41][1] = "60 a&ntilde;os.";
 choices[41][2] = "100 a&ntilde;os.";
 choices[41][3] = "50 a&ntilde;os.";
 answers[41] = 0;
 units[41] = ['41'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 7536. Map 2005";
 preguntaids[41] = 7536


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[42]= new Array();
 choices[42][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[42][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[42][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[42][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[42] = 1;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7541. Map 2005";
 preguntaids[42] = 7541


//  Id pregunta: 7521 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;A qu&eacute; nivel pertenecen las medidas de seguridad que, de acuerdo con el RD 1720/2007, deben ser adoptadas en los ficheros correspondientes a los servicios financieros, gestionados por Entidades Financieras?";
 choices[43]= new Array();
 choices[43][0] = "Nivel b&aacute;sico.";
 choices[43][1] = "Nivel alto.";
 choices[43][2] = "Nivel medio.";
 choices[43][3] = "Nivel superior.";
 answers[43] = 2;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 7521. Similar a Map 2005";
 preguntaids[43] = 7521


//  Id pregunta: 7494 Año de creación de pregunta: 2010
 questions[44]= "45)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo .NET:";
 choices[44]= new Array();
 choices[44][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios.";
 choices[44][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes.";
 choices[44][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos.";
 choices[44][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos.";
 answers[44] = 1;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7494. Map 2005";
 preguntaids[44] = 7494


//  Id pregunta: 7540 Año de creación de pregunta: 2010
 questions[45]= "46)  Utilizando la Metodolog&iacute;a M&eacute;trica para la elaboraci&oacute;n de un Plan de Sistemas, dentro de qu&eacute; actividad englobar&iacute;a la tarea de &laquo;Dise&ntilde;o de la Jerarqu&iacute;a de Funciones&raquo;:";
 choices[45]= new Array();
 choices[45][0] = "Actividad 5: Revisi&oacute;n de la situaci&oacute;n actual de los Sistemas de Informaci&oacute;n.";
 choices[45][1] = "Actividad 6: Especificaci&oacute;n de los nuevos sistemas.";
 choices[45][2] = "Actividad 4: Arquitectura de la Informaci&oacute;n.";
 choices[45][3] = "Actividad 2: Identificaci&oacute;n de las necesidades de Informaci&oacute;n de las &aacute;reas afectadas.";
 answers[45] = 2;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7540. Map 2005";
 preguntaids[45] = 7540


//  Id pregunta: 7523 Año de creación de pregunta: 2010
 questions[46]= "47)  Especifique de las siguientes normas aquella que pertenezca al nivel f&iacute;sico del modelo OSI:";
 choices[46]= new Array();
 choices[46][0] = "X.214-ISO 8072.";
 choices[46][1] = "RS-449.";
 choices[46][2] = "X.215-ISO 8072.";
 choices[46][3] = "802.3.";
 answers[46] = 1;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7523. Map 2005";
 preguntaids[46] = 7523


//  Id pregunta: 7480 Año de creación de pregunta: 2010
 questions[47]= "48)  El entorno de escritorio KDE:";
 choices[47]= new Array();
 choices[47][0] = "Utiliza como gestor de ventanas uno propio.";
 choices[47][1] = "No posee gestor de ventanas propio.";
 choices[47][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA.";
 choices[47][3] = "No proporciona distintas configuraciones para distintos idiomas.";
 answers[47] = 0;
 units[47] = ['62'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7480. Map 2005";
 preguntaids[47] = 7480


//  Id pregunta: 7509 Año de creación de pregunta: 2010
 questions[48]= "49)  En el entorno de escritorio KDE, Karbon es:";
 choices[48]= new Array();
 choices[48][0] = "El navegador del escritorio.";
 choices[48][1] = "Un generador de informes para la empresa.";
 choices[48][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas.";
 choices[48][3] = "Un programa de dibujo vectorial.";
 answers[48] = 3;
 units[48] = ['66'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7509. Similar a Map 2005";
 preguntaids[48] = 7509


//  Id pregunta: 7525 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia en M&Eacute;TRICA versi&oacute;n 3?";
 choices[49]= new Array();
 choices[49][0] = "ISO/IEC TR 16.502/SPICE.";
 choices[49][1] = "ISO 12.207.";
 choices[49][2] = "IEEE 600.11990.";
 choices[49][3] = "UNE-EN-ISO 9001:2000.";
 answers[49] = 1;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7525. Map 2005";
 preguntaids[49] = 7525


//  Id pregunta: 7531 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[50]= new Array();
 choices[50][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX o SOH al comienzo de la trama y un car&aacute;cter ETX o ETB al final de la trama.";
 choices[50][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control.";
 choices[50][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack.";
 choices[50][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras.";
 answers[50] = 2;
 units[50] = ['102'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7531. Map 2005";
 preguntaids[50] = 7531


//  Id pregunta: 7502 Año de creación de pregunta: 2010
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de las siguientes normas se debe tener en cuenta en el &Aacute;rea de Seguridad de una organizaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "ISO 19799.";
 choices[51][1] = "ISO 14508 sobre perfiles de protecci&oacute;n.";
 choices[51][2] = "ISO 14848.";
 choices[51][3] = "ISO 27002.";
 answers[51] = 3;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7502. Similar a Map 2005";
 preguntaids[51] = 7502


//  Id pregunta: 7496 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[52]= new Array();
 choices[52][0] = "Modelo en cascada.";
 choices[52][1] = "Modelo de prototipado.";
 choices[52][2] = "Modelo de transformaci&oacute;n.";
 choices[52][3] = "Modelo en espiral.";
 answers[52] = 3;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7496. Map 2005";
 preguntaids[52] = 7496


//  Id pregunta: 7506 Año de creación de pregunta: 2010
 questions[53]= "54)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n, &iquest;qu&eacute; se entiende como grado de una tabla?";
 choices[53]= new Array();
 choices[53][0] = "El n&uacute;mero de filas de la tabla.";
 choices[53][1] = "El n&uacute;mero de columnas de la tabla.";
 choices[53][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n.";
 choices[53][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas.";
 answers[53] = 1;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7506. Map 2005";
 preguntaids[53] = 7506


//  Id pregunta: 7545 Año de creación de pregunta: 2010
 questions[54]= "55)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;cu&aacute;les son?";
 choices[54]= new Array();
 choices[54][0] = "DTD y XML Schema.";
 choices[54][1] = "DTL y HTML.";
 choices[54][2] = "HTML y API.";
 choices[54][3] = "DTD y SGML.";
 answers[54] = 0;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7545. Map 2005";
 preguntaids[54] = 7545


//  Id pregunta: 7543 Año de creación de pregunta: 2010
 questions[55]= "56)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[55]= new Array();
 choices[55][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento.";
 choices[55][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos.";
 choices[55][2] = "Un lenguaje para establecer restricciones en los documentos XML.";
 choices[55][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n.";
 answers[55] = 0;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7543. Map 2005";
 preguntaids[55] = 7543


//  Id pregunta: 7520 Año de creación de pregunta: 2010
 questions[56]= "57)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[56]= new Array();
 choices[56][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo.";
 choices[56][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo.";
 choices[56][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante.";
 choices[56][3] = "Confieren, por s&iacute; mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita.";
 answers[56] = 1;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7520. Similar a Map 2005";
 preguntaids[56] = 7520


//  Id pregunta: 7482 Año de creación de pregunta: 2010
 questions[57]= "58)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[57]= new Array();
 choices[57][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[57][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[57][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[57][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[57] = 2;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7482. Map 2005";
 preguntaids[57] = 7482


//  Id pregunta: 7504 Año de creación de pregunta: 2010
 questions[58]= "59)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[58]= new Array();
 choices[58][0] = "JavaMicro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java.";
 choices[58][1] = "Los Java Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java.";
 choices[58][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http.";
 choices[58][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet.";
 answers[58] = 2;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7504. Similar a Map 2005";
 preguntaids[58] = 7504


//  Id pregunta: 7534 Año de creación de pregunta: 2010
 questions[59]= "60)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[59]= new Array();
 choices[59][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios.";
 choices[59][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n.";
 choices[59][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows.";
 choices[59][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0.";
 answers[59] = 1;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7534. Map 2005";
 preguntaids[59] = 7534


//  Id pregunta: 7514 Año de creación de pregunta: 2010
 questions[60]= "61)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE:";
 choices[60]= new Array();
 choices[60][0] = "802.9.";
 choices[60][1] = "802.10.";
 choices[60][2] = "802.11.";
 choices[60][3] = "802.12.";
 answers[60] = 0;
 units[60] = ['110'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7514. Map 2005";
 preguntaids[60] = 7514


//  Id pregunta: 7533 Año de creación de pregunta: 2010
 questions[61]= "62)  Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[61]= new Array();
 choices[61][0] = "Controla la ejecuci&oacute;n de procesos.";
 choices[61][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[61][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[61][3] = "Se encarga de las interrupciones.";
 answers[61] = 3;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7533. Map 2005";
 preguntaids[61] = 7533


//  Id pregunta: 7486 Año de creación de pregunta: 2010
 questions[62]= "63)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[62]= new Array();
 choices[62][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[62][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[62][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[62][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[62] = 0;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7486. Map 2005";
 preguntaids[62] = 7486


//  Id pregunta: 7487 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[63]= new Array();
 choices[63][0] = "MoReq.";
 choices[63][1] = "IDABC.";
 choices[63][2] = "ISAD(G).";
 choices[63][3] = "EDMS.";
 answers[63] = 0;
 units[63] = ['99'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 7487. Map 2005";
 preguntaids[63] = 7487


//  Id pregunta: 7517 Año de creación de pregunta: 2010
 questions[64]= "65)  IEEE 1394 es:";
 choices[64]= new Array();
 choices[64][0] = "Un formato de CD.";
 choices[64][1] = "Un proyecto de formato DVD-Audio.";
 choices[64][2] = "Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[64][3] = "Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[64] = 2;
 units[64] = ['51'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7517. Similar a Map 2005";
 preguntaids[64] = 7517


//  Id pregunta: 7510 Año de creación de pregunta: 2010
 questions[65]= "66)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "ISO 7816-1.";
 choices[65][1] = "ISO 7816-2.";
 choices[65][2] = "ISO 7816-3.";
 choices[65][3] = "ISO 7816-4.";
 answers[65] = 2;
 units[65] = ['78'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7510. Map 2005";
 preguntaids[65] = 7510


//  Id pregunta: 7497 Año de creación de pregunta: 2010
 questions[66]= "67)  En el formato gr&aacute;fico JPEG, &iquest;cu&aacute;l de estas opciones no es verdadera?";
 choices[66]= new Array();
 choices[66][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n.";
 choices[66][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP.";
 choices[66][2] = "Su nombre oficial es ISO/IEC IS 10918.";
 choices[66][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000.";
 answers[66] = 1;
 units[66] = ['80'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7497. Map 2005";
 preguntaids[66] = 7497


//  Id pregunta: 7549 Año de creación de pregunta: 2010
 questions[67]= "68)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Modelo Entidad/Relaci&oacute;n.";
 choices[67][1] = "Diagrama de Flujo de Datos.";
 choices[67][2] = "Diagrama de Contexto.";
 choices[67][3] = "Modelo de Datos.";
 answers[67] = 0;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 7549. Map 2005";
 preguntaids[67] = 7549


//  Id pregunta: 7481 Año de creación de pregunta: 2010
 questions[68]= "69)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[68]= new Array();
 choices[68][0] = "Una extensi&oacute;n de Swing.";
 choices[68][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[68][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[68][3] = "Una familia de fuentes de caracteres.";
 answers[68] = 1;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7481. Map 2005";
 preguntaids[68] = 7481


//  Id pregunta: 7535 Año de creación de pregunta: 2010
 questions[69]= "70)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[69]= new Array();
 choices[69][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML.";
 choices[69][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web.";
 choices[69][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos.";
 choices[69][3] = "CSS y XSL no pueden usarse en paralelo.";
 answers[69] = 1;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7535. Map 2005";
 preguntaids[69] = 7535


//  Id pregunta: 7503 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[70]= new Array();
 choices[70][0] = "XPG4 Base.";
 choices[70][1] = "XPG4 Commands and Utilities.";
 choices[70][2] = "XPG4 Language.";
 choices[70][3] = "XPG4 Internationalised System Calls and Libraries.";
 answers[70] = 2;
 units[70] = ['56'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7503. Map 2005";
 preguntaids[70] = 7503


//  Id pregunta: 7516 Año de creación de pregunta: 2010
 questions[71]= "72)  El &laquo;Desarrollo de Sistemas de Informaci&oacute;n&raquo; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen:";
 choices[71]= new Array();
 choices[71][0] = "Tres procesos.";
 choices[71][1] = "Cuatro procesos.";
 choices[71][2] = "Cinco procesos.";
 choices[71][3] = "Seis procesos.";
 answers[71] = 2;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7516. Map 2005";
 preguntaids[71] = 7516


//  Id pregunta: 7529 Año de creación de pregunta: 2010
 questions[72]= "73)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[72]= new Array();
 choices[72][0] = "Multa de 30.001 a 150.000 euros.";
 choices[72][1] = "Multa por importe m&aacute;ximo de 50.000 euros.";
 choices[72][2] = "Multa de 150.001 a 600.000 euros.";
 choices[72][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo.";
 answers[72] = 0;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7529. Map 2005";
 preguntaids[72] = 7529


//  Id pregunta: 7505 Año de creación de pregunta: 2010
 questions[73]= "74)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "El campo SYN del primer segmento TCP es igual a 0.";
 choices[73][1] = "El campo SYN del primer segmento TCP es igual a 1.";
 choices[73][2] = "El campo RST del primer segmento TCP es igual a 1.";
 choices[73][3] = "El campo PSH del primer segmento TCP es igual a 1.";
 answers[73] = 1;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7505. Map 2005";
 preguntaids[73] = 7505


//  Id pregunta: 7544 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&laquo;Thick&raquo;)?";
 choices[74]= new Array();
 choices[74][0] = "BNC.";
 choices[74][1] = "N-series.";
 choices[74][2] = "TNC.";
 choices[74][3] = "SMA-series.";
 answers[74] = 1;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7544. Map 2005";
 preguntaids[74] = 7544


