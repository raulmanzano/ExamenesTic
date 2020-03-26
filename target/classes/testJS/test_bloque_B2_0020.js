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
//  Id pregunta: 3512 Año de creación de pregunta: 2006
 questions[0]= "1)  En un sistema de ficheros Unix con un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, con direcciones de bloque de 4 bytes, para representar un fichero de 2 MB";
 choices[0]= new Array();
 choices[0][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[0][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[0][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[0][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[0] = 2;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3512. ";
 preguntaids[0] = 3512


//  Id pregunta: 3490 Año de creación de pregunta: 2006
 questions[1]= "2)  Ejecuci&oacute;n continua y en parte solapada de instrucciones por parte del procesador";
 choices[1]= new Array();
 choices[1][0] = "Flujo de datos";
 choices[1][1] = "Multiplexado";
 choices[1][2] = "Clustering";
 choices[1][3] = "Pipelining";
 answers[1] = 3;
 units[1] = ['50'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3490. ";
 preguntaids[1] = 3490


//  Id pregunta: 3496 Año de creación de pregunta: 2006
 questions[2]= "3)  Respecto de la SSI (Single System Image) de un cluster, es falso que:";
 choices[2]= new Array();
 choices[2][0] = "Es generada por un middleware que se situa entre el entorno de usuario y el sistema operativo.";
 choices[2][1] = "Podemos encontrar SSIs hardware, a nivel de kernel de sistema operativo y de aplicaci&oacute;n.";
 choices[2][2] = "La soluci&oacute;n de SSI m&aacute;s eficiente en cuanto a tiempos de ejecuci&oacute;n es la implementada en el kernel del sistema operativo.";
 choices[2][3] = "Genera una apariencia de recurso unificado a partir de un grupo de computadores interconectados.";
 answers[2] = 2;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3496. ";
 preguntaids[2] = 3496


//  Id pregunta: 3518 Año de creación de pregunta: 2006
 questions[3]= "4)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[3]= new Array();
 choices[3][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[3][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[3][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[3][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[3] = 0;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3518. ";
 preguntaids[3] = 3518


//  Id pregunta: 3491 Año de creación de pregunta: 2006
 questions[4]= "5)  Copia &quot;cercana&quot; de datos que permite un acceso m&aacute;s r&aacute;pido que el almacenamiento habitual";
 choices[4]= new Array();
 choices[4][0] = "Registro";
 choices[4][1] = "Cach&eacute;";
 choices[4][2] = "Buffer";
 choices[4][3] = "Pipelining";
 answers[4] = 1;
 units[4] = ['50'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3491. ";
 preguntaids[4] = 3491


//  Id pregunta: 3561 Año de creación de pregunta: 2004
 questions[5]= "6)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[5]= new Array();
 choices[5][0] = "Graphical Interchange Format (GIF)";
 choices[5][1] = "Windows Metafile Format (WMF)";
 choices[5][2] = "Portable Network Graphics (PNG)";
 choices[5][3] = "Windows Bitmap (BMP)";
 answers[5] = 1;
 units[5] = ['80'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3561. TIC MAP B 2004";
 preguntaids[5] = 3561


//  Id pregunta: 3584 Año de creación de pregunta: 2004
 questions[6]= "7)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Superclave";
 choices[6][1] = "Clave principal";
 choices[6][2] = "Tupla m&uacute;ltiple";
 choices[6][3] = "Clave ajena";
 answers[6] = 3;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3584. Pregunta Junta Andalucia - A";
 preguntaids[6] = 3584


//  Id pregunta: 3885 Año de creación de pregunta: 2002
 questions[7]= "8)  Al nivel b&aacute;sico de comprensi&oacute;n que determina la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Nivel fonol&oacute;gico";
 choices[7][1] = "Nivel l&eacute;xico-sint&aacute;ctico";
 choices[7][2] = "Nivel pros&oacute;dico";
 choices[7][3] = "Nivel sem&aacute;ntico-pragm&aacute;tico";
 answers[7] = 3;
 units[7] = ['81'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3885. ";
 preguntaids[7] = 3885


//  Id pregunta: 3521 Año de creación de pregunta: 2006
 questions[8]= "9)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[8]= new Array();
 choices[8][0] = "Error y Exception";
 choices[8][1] = "Error y Catch";
 choices[8][2] = "Throw y Finally";
 choices[8][3] = "Error y Throw";
 answers[8] = 0;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3521. ";
 preguntaids[8] = 3521


//  Id pregunta: 3627 Año de creación de pregunta: 2002
 questions[9]= "10)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[9][1] = "Cuando acaba la rutina que los actualiza.";
 choices[9][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[9][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[9] = 3;
 units[9] = ['60', '61', '86'];
 blocks[9] = ['B2', 'B3'];
 comments[9] = "Id Pregunta: 3627. ";
 preguntaids[9] = 3627


//  Id pregunta: 3501 Año de creación de pregunta: 2006
 questions[10]= "11)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[10]= new Array();
 choices[10][0] = "Una extensi&oacute;n de Swing";
 choices[10][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[10][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[10][3] = "Una familia de fuentes de caracteres";
 answers[10] = 1;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3501. ";
 preguntaids[10] = 3501


//  Id pregunta: 3484 Año de creación de pregunta: 2006
 questions[11]= "12)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[11]= new Array();
 choices[11][0] = "Seguros";
 choices[11][1] = "Fiables";
 choices[11][2] = "Voluminosos";
 choices[11][3] = "Caros";
 answers[11] = 3;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3484. ";
 preguntaids[11] = 3484


//  Id pregunta: 3495 Año de creación de pregunta: 2006
 questions[12]= "13)  Acerca de los sistemas MPP puede afirmarse:";
 choices[12]= new Array();
 choices[12][0] = "Constituyen una categor&iacute;a de los sistemas MISD donde se incluyen los arrays sist&oacute;licos.";
 choices[12][1] = "Constituyen una categor&iacute;a de los sistemas MIMD con una &uacute;nica memoria compartida.";
 choices[12][2] = "A su vez se dividen en sistemas de gesti&oacute;n UMA y sistemas de gesti&oacute;n NUMA.";
 choices[12][3] = "Categor&iacute;a de los sistemas MIMD con memoria distribuida.";
 answers[12] = 3;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3495. ";
 preguntaids[12] = 3495


//  Id pregunta: 3489 Año de creación de pregunta: 2006
 questions[13]= "14)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[13]= new Array();
 choices[13][0] = "Registro";
 choices[13][1] = "Cach&eacute;";
 choices[13][2] = "Buffer";
 choices[13][3] = "Pipelining";
 answers[13] = 0;
 units[13] = ['50'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3489. ";
 preguntaids[13] = 3489


//  Id pregunta: 3493 Año de creación de pregunta: 2006
 questions[14]= "15)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[14]= new Array();
 choices[14][0] = "El nombre";
 choices[14][1] = "La foto";
 choices[14][2] = "La firma";
 choices[14][3] = "La huella dactilar";
 answers[14] = 0;
 units[14] = ['78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3493. ";
 preguntaids[14] = 3493


//  Id pregunta: 3643 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[15]= new Array();
 choices[15][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[15][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[15][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[15][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[15] = 0;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3643. ";
 preguntaids[15] = 3643


//  Id pregunta: 3498 Año de creación de pregunta: 2006
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[16]= new Array();
 choices[16][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[16][1] = "La obsolescencia deja de ser un problema.";
 choices[16][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[16][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitectura Grid.";
 answers[16] = 3;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3498. ";
 preguntaids[16] = 3498


//  Id pregunta: 3515 Año de creación de pregunta: 2006
 questions[17]= "18)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[17][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[17][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[17][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[17] = 1;
 units[17] = ['63'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3515. ";
 preguntaids[17] = 3515


//  Id pregunta: 3520 Año de creación de pregunta: 2006
 questions[18]= "19)  El protocolo SSL v3";
 choices[18]= new Array();
 choices[18][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[18][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban TLS/SSL ten&iacute;an su exportaci&oacute;n desde EEUU limitada a claves de 128 bits";
 choices[18][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[18][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[18] = 3;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3520. ";
 preguntaids[18] = 3520


//  Id pregunta: 3522 Año de creación de pregunta: 2006
 questions[19]= "20)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[19]= new Array();
 choices[19][0] = "Formato del sobre digital";
 choices[19][1] = "Formato del certificado digital";
 choices[19][2] = "Sintaxis de la clave privada";
 choices[19][3] = "Algoritmo Diffie-Hellman";
 answers[19] = 0;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3522. ";
 preguntaids[19] = 3522


//  Id pregunta: 3881 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Qu&eacute; es postcript?:";
 choices[20]= new Array();
 choices[20][0] = "Un formato de datos para las impresoras";
 choices[20][1] = "Un est&aacute;ndar de comunicaci&oacute;n con perif&eacute;ricos de impresi&oacute;n";
 choices[20][2] = "Un lenguaje de especificaci&oacute;n de documentos";
 choices[20][3] = "Nada de lo anterior";
 answers[20] = 2;
 units[20] = ['80'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3881. ";
 preguntaids[20] = 3881


//  Id pregunta: 3514 Año de creación de pregunta: 2006
 questions[21]= "22)  Dentro del kernel de Unix, el n&uacute;cleo dependiente";
 choices[21]= new Array();
 choices[21][0] = "Controla la ejecuci&oacute;n de procesos";
 choices[21][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n";
 choices[21][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos";
 choices[21][3] = "Se encarga de las interrupciones";
 answers[21] = 3;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3514. ";
 preguntaids[21] = 3514


//  Id pregunta: 3482 Año de creación de pregunta: 2006
 questions[22]= "23)  Datos repartidos en m&uacute;ltiples vol&uacute;menes con los &quot;bits de paridad&quot; en un &uacute;nico disco. Hablamos de:";
 choices[22]= new Array();
 choices[22][0] = "RAID 1";
 choices[22][1] = "RAID 3";
 choices[22][2] = "RAID 0+1";
 choices[22][3] = "RAID 5";
 answers[22] = 1;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3482. ";
 preguntaids[22] = 3482


//  Id pregunta: 3492 Año de creación de pregunta: 2006
 questions[23]= "24)  Espacio intermedio de almacenamiento utilizado hasta obtener una unidad de datos que permita su procesado";
 choices[23]= new Array();
 choices[23][0] = "Registro";
 choices[23][1] = "Cach&eacute;";
 choices[23][2] = "Buffer";
 choices[23][3] = "Pipelining";
 answers[23] = 2;
 units[23] = ['50'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3492. ";
 preguntaids[23] = 3492


//  Id pregunta: 3568 Año de creación de pregunta: 2004
 questions[24]= "25)  Cu&aacute;l de los siguientes no es un formato de imagen:";
 choices[24]= new Array();
 choices[24][0] = "gif";
 choices[24][1] = "jp2";
 choices[24][2] = "drw";
 choices[24][3] = "php";
 answers[24] = 3;
 units[24] = ['80'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3568. Similar a examen TIC SS A 2003";
 preguntaids[24] = 3568


//  Id pregunta: 3510 Año de creación de pregunta: 2006
 questions[25]= "26)  En el entorno de escritorio KDE, Kate es:";
 choices[25]= new Array();
 choices[25][0] = "El navegador del escritorio";
 choices[25][1] = "Un generador de informes para la empresa";
 choices[25][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas";
 choices[25][3] = "Un editor de texto";
 answers[25] = 3;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3510. ";
 preguntaids[25] = 3510


//  Id pregunta: 3994 Año de creación de pregunta: 2002
 questions[26]= "27)  En procesamiento de la voz, el nivel de comprensi&oacute;n en el cu&aacute;l se identifican los objetos sonoros elementales se llama:";
 choices[26]= new Array();
 choices[26][0] = "Nivel ac&uacute;stico";
 choices[26][1] = "Nivel fon&eacute;tico";
 choices[26][2] = "Nivel fonol&oacute;gico";
 choices[26][3] = "Nivel pros&oacute;dico";
 answers[26] = 1;
 units[26] = ['81'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3994. ";
 preguntaids[26] = 3994


//  Id pregunta: 3569 Año de creación de pregunta: 2004
 questions[27]= "28)  Sean: a) ac&uacute;stico, b) fon&eacute;tico, c) fonol&oacute;gico, d) l&eacute;xico-sint&aacute;ctico, e) pros&oacute;dico, f) sem&aacute;ntico-pragm&aacute;tico, &iquest;cu&aacute;l ser&iacute;a la ordenaci&oacute;n correcta en funci&oacute;n de la menor a mayor inteligencia...";
 choices[27]= new Array();
 choices[27][0] = "a c b d e f";
 choices[27][1] = "a b c d e f";
 choices[27][2] = "a c b e d f";
 choices[27][3] = "a b c e d f";
 answers[27] = 1;
 units[27] = ['81'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3569. Similar a examen TIC MAP A 2004. JMRP: Se elimina porque en el temario de 2016 ya no hay reconocimiento de voz";
 preguntaids[27] = 3569


//  Id pregunta: 3508 Año de creación de pregunta: 2006
 questions[28]= "29)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta";
 choices[28]= new Array();
 choices[28][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina";
 choices[28][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso";
 choices[28][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador";
 choices[28][3] = "Los fallos de p&aacute;gina son tratados por el hardware";
 answers[28] = 2;
 units[28] = ['58'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3508. ";
 preguntaids[28] = 3508


//  Id pregunta: 3995 Año de creación de pregunta: 2002
 questions[29]= "30)  En relaci&oacute;n con las tecnolog&iacute;as de tratamiento de im&aacute;genes:";
 choices[29]= new Array();
 choices[29][0] = "En la norma CCITT (ahora UIT-T) grupo 4 se utiliza la t&eacute;cnica de la transformada discreta del coseno";
 choices[29][1] = "En la norma JPEG se emplea la t&eacute;cnica de compresi&oacute;n Huffman para generar la DCT";
 choices[29][2] = "La norma CCITT (ahora UIT-T) grupo 4 realiza una compresi&oacute;n sin perdida de la informaci&oacute;n y, por el contrario, la compresi&oacute;n JPEG produce p&eacute;rdida de informaci&oacute;n";
 choices[29][3] = "JPEG es una norma de compresi&oacute;n y descompresi&oacute;n de im&aacute;genes en movimiento";
 answers[29] = 2;
 units[29] = ['80'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3995. ";
 preguntaids[29] = 3995


//  Id pregunta: 3503 Año de creación de pregunta: 2006
 questions[30]= "31)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[30]= new Array();
 choices[30][0] = "Heredar todos los miembros no privados de la clase base";
 choices[30][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[30][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[30][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[30] = 2;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3503. ";
 preguntaids[30] = 3503


//  Id pregunta: 3898 Año de creación de pregunta: 2002
 questions[31]= "32)  El realce radiom&eacute;trico se emplea para:";
 choices[31]= new Array();
 choices[31][0] = "Efectuar la compresi&oacute;n de una imagen con alto contenido de color negro";
 choices[31][1] = "Mejorar el contraste de una imagen";
 choices[31][2] = "Realizar codificaci&oacute;n de una imagen sin p&eacute;rdidas";
 choices[31][3] = "Realizar una codificaci&oacute;n predictiva";
 answers[31] = 1;
 units[31] = ['80'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3898. ";
 preguntaids[31] = 3898


//  Id pregunta: 3890 Año de creación de pregunta: 2002
 questions[32]= "33)  El algoritmo de Viterbi para reconocimiento de voz es del tipo:";
 choices[32]= new Array();
 choices[32][0] = "Patrones de comparaci&oacute;n (pattern matching)";
 choices[32][1] = "HMM";
 choices[32][2] = "Modelos de Markov ocultos";
 choices[32][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[32] = 3;
 units[32] = ['81'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3890. ";
 preguntaids[32] = 3890


//  Id pregunta: 3990 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Qu&eacute; desventaja tiene el formato de im&aacute;genes JPEG?:";
 choices[33]= new Array();
 choices[33][0] = "La imagen pierde informaci&oacute;n cuando se comprime";
 choices[33][1] = "La magnitud de compresi&oacute;n es peque&ntilde;a y ocupa demasiado espacio de disco";
 choices[33][2] = "Todos los programas que brindan soporte al formato JPEG han de pagar por el uso de la licencia del algoritmo de compresi&oacute;n que utiliza";
 choices[33][3] = "No tiene ninguna desventaja";
 answers[33] = 0;
 units[33] = ['80'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3990. ";
 preguntaids[33] = 3990


//  Id pregunta: 3726 Año de creación de pregunta: 2002
 questions[34]= "35)  En relaci&oacute;n con los Sistemas Operativos, &iquest;Qu&eacute; se entiende por overhead?:";
 choices[34]= new Array();
 choices[34][0] = "Porcentaje de tiempo que transcurre entre  la cabecera (header) del primer paquete y el siguiente";
 choices[34][1] = "Porcentaje de tiempo en el que la CPU est&aacute; atendiendo a tareas del propio sistema";
 choices[34][2] = "Tiempo que tarda la cabeza del disco, una vez posicionada en la pista, en acceder al sector que le interesa";
 choices[34][3] = "Porcentaje de tiempo que la CPU gasta en tratar los datos de entrada";
 answers[34] = 1;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3726. ";
 preguntaids[34] = 3726


//  Id pregunta: 3895 Año de creación de pregunta: 2002
 questions[35]= "36)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[35]= new Array();
 choices[35][0] = "Ac&uacute;stico";
 choices[35][1] = "Fon&eacute;tico";
 choices[35][2] = "Fonol&oacute;gico";
 choices[35][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[35] = 2;
 units[35] = ['81'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3895. ";
 preguntaids[35] = 3895


//  Id pregunta: 3986 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la menos relevante a la hora de especificar un sistema de reconocimiento de voz?:";
 choices[36]= new Array();
 choices[36][0] = "La amplitud del vocabulario soportado";
 choices[36][1] = "La fluidez de la locuci&oacute;n admitida por el sistema";
 choices[36][2] = "La dependencia o independencia del orador";
 choices[36][3] = "La capacidad de interpretar el habla cuando el orador se expresa en tono bajo";
 answers[36] = 3;
 units[36] = ['81'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3986. ";
 preguntaids[36] = 3986


//  Id pregunta: 3502 Año de creación de pregunta: 2006
 questions[37]= "38)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[37]= new Array();
 choices[37][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[37][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[37][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[37][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3502. ";
 preguntaids[37] = 3502


//  Id pregunta: 3781 Año de creación de pregunta: 2002
 questions[38]= "39)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[38]= new Array();
 choices[38][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[38][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[38][2] = "Los dos tipos de propiedades, es indiferente";
 choices[38][3] = "No define propiedades, define comportamientos";
 answers[38] = 1;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3781. ";
 preguntaids[38] = 3781


//  Id pregunta: 3486 Año de creación de pregunta: 2006
 questions[39]= "40)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[39]= new Array();
 choices[39][0] = "Algoritmo de clave secreta";
 choices[39][1] = "Bytecode";
 choices[39][2] = "Esteganograf&iacute;a";
 choices[39][3] = "Dpyware";
 answers[39] = 2;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3486. ";
 preguntaids[39] = 3486


//  Id pregunta: 3888 Año de creación de pregunta: 2002
 questions[40]= "41)  De los siguientes est&aacute;ndares de comprensi&oacute;n de datos, se&ntilde;alar aquel que se basa en la denominada transformaci&oacute;n discreta del coseno:";
 choices[40]= new Array();
 choices[40][0] = "JPEG";
 choices[40][1] = "LZW";
 choices[40][2] = "RLE";
 choices[40][3] = "JPEG 2000";
 answers[40] = 0;
 units[40] = ['80'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3888. ";
 preguntaids[40] = 3888


//  Id pregunta: 3497 Año de creación de pregunta: 2006
 questions[41]= "42)  Respecto de las arquitecturas Grid, es falso afirmar que:";
 choices[41]= new Array();
 choices[41][0] = "El porcentaje de dedicaci&oacute;n de cada m&aacute;quina de la arquitectura es fijo e independiente de la carga de cada una.";
 choices[41][1] = "Su nombre proviene del paradigma de la red el&eacute;ctrica.";
 choices[41][2] = "Los recursos que las componen se encuentran distribuidos geogr&aacute;ficamente.";
 choices[41][3] = "Sus creadores fueron Ian Foster y Carl Kesselman.";
 answers[41] = 0;
 units[41] = ['49'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3497. ";
 preguntaids[41] = 3497


//  Id pregunta: 3825 Año de creación de pregunta: 2002
 questions[42]= "43)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[42]= new Array();
 choices[42][0] = "Uno-a-muchos";
 choices[42][1] = "Binaria";
 choices[42][2] = "Muchos-a-muchos";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['60', '61', '85'];
 blocks[42] = ['B2', 'B3'];
 comments[42] = "Id Pregunta: 3825. ";
 preguntaids[42] = 3825


//  Id pregunta: 3999 Año de creación de pregunta: 2002
 questions[43]= "44)  En una base de datos documental, se denomina '&iacute;ndice de retorno' a:";
 choices[43]= new Array();
 choices[43][0] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes en la base de datos frente a los documentos relevantes recuperados";
 choices[43][1] = "La inversa del &iacute;ndice de precisi&oacute;n";
 choices[43][2] = "La relaci&oacute;n entre el n&uacute;mero de documentos recuperados frente al n&uacute;mero total de documentos recuperados";
 choices[43][3] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados frente a los documentos relevantes en la base de datos";
 answers[43] = 3;
 units[43] = ['81'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3999. ";
 preguntaids[43] = 3999


//  Id pregunta: 3469 Año de creación de pregunta: 2006
 questions[44]= "45)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa:";
 choices[44]= new Array();
 choices[44][0] = "PKCS#3 Protocolo de acuerdo de claves Diffie-Hellman";
 choices[44][1] = "PKCS#11 Cryptoki";
 choices[44][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[44][3] = "Todas son ciertas";
 answers[44] = 3;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3469. ";
 preguntaids[44] = 3469


//  Id pregunta: 3989 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[45]= new Array();
 choices[45][0] = "Comparaci&oacute;n matricial";
 choices[45][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[45][2] = "Reconocimiento de patrones";
 choices[45][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[45] = 3;
 units[45] = ['80'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3989. ";
 preguntaids[45] = 3989


//  Id pregunta: 3987 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes denominaciones no se relaciona con un formato de imagen digital?:";
 choices[46]= new Array();
 choices[46][0] = "MrSID";
 choices[46][1] = "PSD";
 choices[46][2] = "PAL";
 choices[46][3] = "TIFF";
 answers[46] = 2;
 units[46] = ['80'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3987. ";
 preguntaids[46] = 3987


//  Id pregunta: 3891 Año de creación de pregunta: 2002
 questions[47]= "48)  El filtro de Sobel es com&uacute;nmente usado en tratamiento de im&aacute;genes para:";
 choices[47]= new Array();
 choices[47][0] = "Esqueletizaci&oacute;n de figuras";
 choices[47][1] = "Suavizaci&oacute;n de contornos";
 choices[47][2] = "Eliminaci&oacute;n del ruido";
 choices[47][3] = "Detecci&oacute;n de bordes";
 answers[47] = 3;
 units[47] = ['80'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3891. ";
 preguntaids[47] = 3891


//  Id pregunta: 3488 Año de creación de pregunta: 2006
 questions[48]= "49)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[48]= new Array();
 choices[48][0] = "BIOS";
 choices[48][1] = "Chip cluster";
 choices[48][2] = "Chipset";
 choices[48][3] = "Estado s&oacute;lido";
 answers[48] = 2;
 units[48] = ['50'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3488. ";
 preguntaids[48] = 3488


//  Id pregunta: 3824 Año de creación de pregunta: 2002
 questions[49]= "50)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Esquema Conceptual";
 choices[49][1] = "Esquema Externo";
 choices[49][2] = "Esquema Interno";
 choices[49][3] = "Esquema Funcional";
 answers[49] = 1;
 units[49] = ['61', '85', '86'];
 blocks[49] = ['B2', 'B3'];
 comments[49] = "Id Pregunta: 3824. ";
 preguntaids[49] = 3824


//  Id pregunta: 3886 Año de creación de pregunta: 2002
 questions[50]= "51)  Al nivel en el que se determinan los identificadores de la informaci&oacute;n, en an&aacute;lisis documental , se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Nivel de asiento";
 choices[50][1] = "Nivel de descriptor";
 choices[50][2] = "Nivel de resumen";
 choices[50][3] = "Nivel documental";
 answers[50] = 0;
 units[50] = ['81'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3886. ";
 preguntaids[50] = 3886


//  Id pregunta: 3500 Año de creación de pregunta: 2006
 questions[51]= "52)  El entorno de escritorio KDE:";
 choices[51]= new Array();
 choices[51][0] = "Utiliza como gestor de ventanas uno propio";
 choices[51][1] = "No posee gestor de ventanas propio";
 choices[51][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[51][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[51] = 0;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3500. KDE Windows Manager es el gestor de ventanas propio de KDE";
 preguntaids[51] = 3500


//  Id pregunta: 3897 Año de creación de pregunta: 2002
 questions[52]= "53)  El proceso de reconocimiento de la palabra presenta cuatro fases. &iquest;Cu&aacute;l de las siguientes no es una de ellas?:";
 choices[52]= new Array();
 choices[52][0] = "Comparaci&oacute;n";
 choices[52][1] = "Detecci&oacute;n de bordes";
 choices[52][2] = "Reconstrucci&oacute;n";
 choices[52][3] = "Normalizaci&oacute;n en el tiempo";
 answers[52] = 2;
 units[52] = ['81'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3897. ";
 preguntaids[52] = 3897


//  Id pregunta: 3985 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde de forma exclusiva a la tecnolog&iacute;a OCR del tipo &quot;reconocimiento de patrones&quot;?:";
 choices[53]= new Array();
 choices[53][0] = "Almacena la informaci&oacute;n en soporte &oacute;ptico WORM";
 choices[53][1] = "Compara los datos escaneados con una plantilla de caracteres est&aacute;ndar";
 choices[53][2] = "Compara la forma de los caracteres con tablas de formas, examinando la organizaci&oacute;n de los bits";
 choices[53][3] = "Utiliza t&eacute;cnicas de compresi&oacute;n de datos";
 answers[53] = 2;
 units[53] = ['80'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3985. ";
 preguntaids[53] = 3985


//  Id pregunta: 3504 Año de creación de pregunta: 2006
 questions[54]= "55)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS";
 choices[54]= new Array();
 choices[54][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n";
 choices[54][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros";
 choices[54][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros";
 choices[54][3] = "Proporciona transparencia de la replicaci&oacute;n";
 answers[54] = 1;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3504. ";
 preguntaids[54] = 3504


//  Id pregunta: 3978 Año de creación de pregunta: 2002
 questions[55]= "56)  Una relaci&oacute;n que est&eacute; en 3FN:";
 choices[55]= new Array();
 choices[55][0] = "No tiene por qu&eacute; estar en 1FN";
 choices[55][1] = "Tiene dependencias funcionales transitivas";
 choices[55][2] = "Tiene atributos multivaluados";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = 3;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3978. ";
 preguntaids[55] = 3978


//  Id pregunta: 3998 Año de creación de pregunta: 2002
 questions[56]= "57)  En tratamiento digital de im&aacute;genes:";
 choices[56]= new Array();
 choices[56][0] = "El filtro de mediana es un filtro paso alto";
 choices[56][1] = "Un filtro paso bajo suaviza los contornos, provocando difusi&oacute;n en la imagen";
 choices[56][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[56][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[56] = 1;
 units[56] = ['80'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3998. ";
 preguntaids[56] = 3998


//  Id pregunta: 3519 Año de creación de pregunta: 2006
 questions[57]= "58)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[57][1] = "Diagrama de Flujo de Datos";
 choices[57][2] = "Diagrama de Contexto";
 choices[57][3] = "Modelo de Datos";
 answers[57] = 0;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3519. ";
 preguntaids[57] = 3519


//  Id pregunta: 3583 Año de creación de pregunta: 2004
 questions[58]= "59)  En un modelo de datos jer&aacute;rquico";
 choices[58]= new Array();
 choices[58][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[58][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[58][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[58][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[58] = 1;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3583. Pregunta Junta Andalucia - A";
 preguntaids[58] = 3583


//  Id pregunta: 3988 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no se asocia con una forma de codificar im&aacute;genes digitales?:";
 choices[59]= new Array();
 choices[59][0] = "Raster";
 choices[59][1] = "Vectorial";
 choices[59][2] = "Bitmap";
 choices[59][3] = "Multiplex";
 answers[59] = 3;
 units[59] = ['80'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3988. ";
 preguntaids[59] = 3988


//  Id pregunta: 3485 Año de creación de pregunta: 2006
 questions[60]= "61)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[60]= new Array();
 choices[60][0] = "Huella";
 choices[60][1] = "Biom&eacute;trica";
 choices[60][2] = "JBOD";
 choices[60][3] = "Antropomorfismo";
 answers[60] = 1;
 units[60] = ['78'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3485. ";
 preguntaids[60] = 3485


//  Id pregunta: 3894 Año de creación de pregunta: 2002
 questions[61]= "62)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[61]= new Array();
 choices[61][0] = "Nivel fonol&oacute;gico";
 choices[61][1] = "Nivel fon&eacute;tico";
 choices[61][2] = "Nivel ac&uacute;stico";
 choices[61][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[61] = 3;
 units[61] = ['81'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3894. ";
 preguntaids[61] = 3894


//  Id pregunta: 3494 Año de creación de pregunta: 2006
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[62]= new Array();
 choices[62][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[62][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[62][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[62][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[62] = 1;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3494. ";
 preguntaids[62] = 3494


//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[63]= "64)  El Diccionario de Datos es utilizado por:";
 choices[63]= new Array();
 choices[63][0] = "El administrador de la base de datos y los programadores";
 choices[63][1] = "Los analistas y los programadores";
 choices[63][2] = "Los usuarios finales de las aplicaciones";
 choices[63][3] = "Los usuarios remotos";
 answers[63] = 0;
 units[63] = ['60', '85', '86'];
 blocks[63] = ['B2', 'B3'];
 comments[63] = "Id Pregunta: 3777. ";
 preguntaids[63] = 3777


//  Id pregunta: 3887 Año de creación de pregunta: 2002
 questions[64]= "65)  Como valor promedio, se considera habitualmente que un ser humano no puede distinguir m&aacute;s de:";
 choices[64]= new Array();
 choices[64][0] = "2.000.000 colores y 700 grises";
 choices[64][1] = "200 grises y 7.000.000 de colores";
 choices[64][2] = "7.000 colores y 2.000.000 grises";
 choices[64][3] = "2.000.000 de grises y 700.000 colores";
 answers[64] = 1;
 units[64] = ['80'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3887. ";
 preguntaids[64] = 3887


//  Id pregunta: 3880 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Qu&eacute; es EMACS?:";
 choices[65]= new Array();
 choices[65][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[65][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[65][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[65][3] = "Nada de lo anterior es correcto";
 answers[65] = 1;
 units[65] = ['66'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3880. ";
 preguntaids[65] = 3880


//  Id pregunta: 3483 Año de creación de pregunta: 2006
 questions[66]= "67)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[66]= new Array();
 choices[66][0] = "SAN";
 choices[66][1] = "NAS";
 choices[66][2] = "RAID";
 choices[66][3] = "Cabina de discos";
 answers[66] = 1;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3483. ";
 preguntaids[66] = 3483


//  Id pregunta: 3896 Año de creación de pregunta: 2002
 questions[67]= "68)  El nivel que marca la verdadera frontera de la comprensi&oacute;n y utilizaci&oacute;n del lenguaje natural con la inteligencia artificial es:";
 choices[67]= new Array();
 choices[67][0] = "El niv&eacute;l ac&uacute;stico";
 choices[67][1] = "El nivel fonol&oacute;gico";
 choices[67][2] = "El nivel sem&aacute;ntico-pragm&aacute;tico";
 choices[67][3] = "El nivel pros&oacute;dico";
 answers[67] = 2;
 units[67] = ['81'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3896. ";
 preguntaids[67] = 3896


//  Id pregunta: 3984 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de estas t&eacute;cnicas pierde parte de la  informaci&oacute;n al comprimirla?:";
 choices[68]= new Array();
 choices[68][0] = "Huffman";
 choices[68][1] = "JPEG";
 choices[68][2] = "TIFF";
 choices[68][3] = "LZW";
 answers[68] = 1;
 units[68] = ['80'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3984. ";
 preguntaids[68] = 3984


//  Id pregunta: 3509 Año de creación de pregunta: 2006
 questions[69]= "70)  El est&aacute;ndar DMI";
 choices[69]= new Array();
 choices[69][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[69][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[69][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[69][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[69] = 0;
 units[69] = ['50'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3509. ";
 preguntaids[69] = 3509


//  Id pregunta: 3505 Año de creación de pregunta: 2006
 questions[70]= "71)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[70]= new Array();
 choices[70][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[70][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[70][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[70][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[70] = 2;
 units[70] = ['77'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3505. ";
 preguntaids[70] = 3505


//  Id pregunta: 3691 Año de creación de pregunta: 2002
 questions[71]= "72)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[71]= new Array();
 choices[71][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[71][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[71][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[71][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[71] = 0;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3691. ";
 preguntaids[71] = 3691


//  Id pregunta: 3882 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; sistema de parametrizaci&oacute;n utilizado para la s&iacute;ntesis de voz se conoce tambi&eacute;n como s&iacute;ntesis por reglas?:";
 choices[72]= new Array();
 choices[72][0] = "S&iacute;ntesis a partir de fonemas";
 choices[72][1] = "S&iacute;ntesis a partir de difonemas";
 choices[72][2] = "S&iacute;ntesis a partir de semis&iacute;labas";
 choices[72][3] = "S&iacute;ntesis texto-voz";
 answers[72] = 0;
 units[72] = ['81'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3882. ";
 preguntaids[72] = 3882


//  Id pregunta: 3889 Año de creación de pregunta: 2002
 questions[73]= "74)  Dentro de los niveles b&aacute;sicos de compresi&oacute;n y fuentes del conocimiento, el nivel fonol&oacute;gico es aqu&eacute;l que:";
 choices[73]= new Array();
 choices[73][0] = "Analiza las caracter&iacute;sticas de la se&ntilde;al vocal";
 choices[73][1] = "Determina los objetos sonoros elementales";
 choices[73][2] = "Determina el n&uacute;mero preciso de sonidos con valor distinto";
 choices[73][3] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras";
 answers[73] = 2;
 units[73] = ['81'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3889. ";
 preguntaids[73] = 3889


//  Id pregunta: 3517 Año de creación de pregunta: 2006
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux";
 choices[74]= new Array();
 choices[74][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel)";
 choices[74][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal";
 choices[74][2] = "Tiene acceso directo a los dispositivos de E/S";
 choices[74][3] = "Acceden directamente al mapa de memoria de otros procesos";
 answers[74] = 1;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3517. ";
 preguntaids[74] = 3517


