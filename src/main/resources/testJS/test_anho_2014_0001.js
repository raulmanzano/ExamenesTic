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
//  Id pregunta: 9019 Año de creación de pregunta: 2014
 questions[0]= "1)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[0]= new Array();
 choices[0][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[0][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[0][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[0][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[0] = 2;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9019. Examen TIC A1 2013";
 preguntaids[0] = 9019


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[1]= "2)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[1]= new Array();
 choices[1][0] = "Tribunal Central de Recursos Especiales";
 choices[1][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[1][2] = "Tribunal Administrativo Tributario";
 choices[1][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[1] = 1;
 units[1] = ['10'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[1] = 9038


//  Id pregunta: 9039 Año de creación de pregunta: 2014
 questions[2]= "3)  Una licencia RISP debe reflejar:";
 choices[2]= new Array();
 choices[2][0] = "Finalidad concreta";
 choices[2][1] = "Duraci&oacute;n de la licencia";
 choices[2][2] = "Modalidades financieras";
 choices[2][3] = "Todas las anteriores";
 answers[2] = 3;
 units[2] = ['27'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9039. Debe reflejar: finalidad concreta (comercial o no comercial), duraci&oacute;n, obligaciones del beneficiario y del organismo cedente, responsabilidades de uso, modalidades financieras (gratuito, tasa o precio p&uacute;blico)";
 preguntaids[2] = 9039


//  Id pregunta: 9036 Año de creación de pregunta: 2014
 questions[3]= "4)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Mesas de contrataci&oacute;n";
 choices[3][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[3][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[3][3] = "Todos los anteriores";
 answers[3] = 0;
 units[3] = ['10'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 9036. Art. 324, Art. 325 RD Legislativo 3/2011";
 preguntaids[3] = 9036


//  Id pregunta: 9013 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[4]= new Array();
 choices[4][0] = "Ejecutivo";
 choices[4][1] = "Microkernel";
 choices[4][2] = "HAL";
 choices[4][3] = "Drivers";
 answers[4] = 1;
 units[4] = ['58'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9013. ";
 preguntaids[4] = 9013


//  Id pregunta: 9049 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[5]= new Array();
 choices[5][0] = "CMMI";
 choices[5][1] = "ISO 9001";
 choices[5][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[5][3] = "Todos los anteriores";
 answers[5] = 2;
 units[5] = ['92'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9049. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";
 preguntaids[5] = 9049


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[6]= new Array();
 choices[6][0] = "a) Publicidad y transparencia";
 choices[6][1] = "b) Salvaguarda de la libre competencia";
 choices[6][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[6][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[6] = 3;
 units[6] = ['10'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[6] = 9033


//  Id pregunta: 9026 Año de creación de pregunta: 2014
 questions[7]= "8)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[7]= new Array();
 choices[7][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[7][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[7][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[7][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[7] = 2;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9026. Examen TIC A1 2013";
 preguntaids[7] = 9026


//  Id pregunta: 9057 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[8]= new Array();
 choices[8][0] = "MISD y SISD";
 choices[8][1] = "SIMD y SISD";
 choices[8][2] = "MIMD y MISD";
 choices[8][3] = "SISD y MISD";
 answers[8] = 1;
 units[8] = ['49'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9057. ";
 preguntaids[8] = 9057


//  Id pregunta: 9059 Año de creación de pregunta: 2014
 questions[9]= "10)  La gesti&oacute;n NUMA:";
 choices[9]= new Array();
 choices[9][0] = "Significa Not Uniform Memory Access.";
 choices[9][1] = "Significa Not Unit of Memory Available.";
 choices[9][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[9][3] = "La a) y la c)";
 answers[9] = 3;
 units[9] = ['49'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9059. ";
 preguntaids[9] = 9059


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[10]= new Array();
 choices[10][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[10][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[10][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[10][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[10] = 3;
 units[10] = ['10'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[10] = 9037


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[11]= new Array();
 choices[11][0] = "Metacity de GNOME";
 choices[11][1] = "KWIN de KDE";
 choices[11][2] = "GTK de CDE";
 choices[11][3] = "Enlightenment de GNOME";
 answers[11] = 2;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[11] = 9025


//  Id pregunta: 9058 Año de creación de pregunta: 2014
 questions[12]= "13)  La ley de Amdahl demuestra que:";
 choices[12]= new Array();
 choices[12][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[12][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[12][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[12][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[12] = 1;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9058. ";
 preguntaids[12] = 9058


//  Id pregunta: 9034 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[13]= new Array();
 choices[13][0] = "Comp@rte";
 choices[13][1] = "Racionaliz@";
 choices[13][2] = "Compartir";
 choices[13][3] = "Educ@";
 answers[13] = 2;
 units[13] = ['70'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9034. ";
 preguntaids[13] = 9034


//  Id pregunta: 9005 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[14]= new Array();
 choices[14][0] = "SQL 2000";
 choices[14][1] = "SQL-2003";
 choices[14][2] = "SQL-2006";
 choices[14][3] = "SQL-2008";
 answers[14] = 2;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9005. ";
 preguntaids[14] = 9005


//  Id pregunta: 9050 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[15]= new Array();
 choices[15][0] = "CMM";
 choices[15][1] = "CMMI Escalonado";
 choices[15][2] = "CMMI Continuo";
 choices[15][3] = "Ninguno de los anteriores";
 answers[15] = 0;
 units[15] = ['92'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 9050. ";
 preguntaids[15] = 9050


//  Id pregunta: 9018 Año de creación de pregunta: 2014
 questions[16]= "17)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[16]= new Array();
 choices[16][0] = "Bussiness";
 choices[16][1] = "Essentials";
 choices[16][2] = "Foundation";
 choices[16][3] = "Standard";
 answers[16] = 0;
 units[16] = ['58'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9018. Examen TIC A1 2013";
 preguntaids[16] = 9018


//  Id pregunta: 9008 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[17]= new Array();
 choices[17][0] = "Vistas indexadas";
 choices[17][1] = "Vistas normalizadas";
 choices[17][2] = "Vistas f&iacute;sicas";
 choices[17][3] = "No existen alternativas";
 answers[17] = 0;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9008. En SQL Server se llaman vistas indexadas";
 preguntaids[17] = 9008


//  Id pregunta: 8996 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[18]= new Array();
 choices[18][0] = "Las interrupciones";
 choices[18][1] = "El scheduler";
 choices[18][2] = "Los drivers de los dispositivos";
 choices[18][3] = "a) y c) son correctas";
 answers[18] = 3;
 units[18] = ['57'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8996. ";
 preguntaids[18] = 8996


//  Id pregunta: 9016 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[19]= new Array();
 choices[19][0] = "En actualizar la tabla de p&aacute;ginas, se pide una p&aacute;gina que ya est&aacute; en memoria";
 choices[19][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[19][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[19][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[19] = 0;
 units[19] = ['56'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9016. ";
 preguntaids[19] = 9016


//  Id pregunta: 9053 Año de creación de pregunta: 2014
 questions[20]= "21)  Los sistemas multiprocesador:";
 choices[20]= new Array();
 choices[20][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[20][1] = "Sus procesadores no dependen unos de otros.";
 choices[20][2] = "Son sistemas fuertemente acoplados.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = 2;
 units[20] = ['49'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9053. ";
 preguntaids[20] = 9053


//  Id pregunta: 9001 Año de creación de pregunta: 2014
 questions[21]= "22)  En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[21]= new Array();
 choices[21][0] = "Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[21][1] = "Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[21][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[21][3] = "Todas las anteriores";
 answers[21] = 3;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9001. ";
 preguntaids[21] = 9001


//  Id pregunta: 9024 Año de creación de pregunta: 2014
 questions[22]= "23)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[22]= new Array();
 choices[22][0] = "chmod u+s /directorio/fichero";
 choices[22][1] = "chmog g+s /directorio";
 choices[22][2] = "chmod 177 /directorio";
 choices[22][3] = "chmod +t /directorio";
 answers[22] = 3;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9024. Examen TIC A1 2013";
 preguntaids[22] = 9024


//  Id pregunta: 9023 Año de creación de pregunta: 2014
 questions[23]= "24)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[23]= new Array();
 choices[23][0] = "find -type f | xwygs grep 'libro'";
 choices[23][1] = "find -type f | xaygs grep 'libro'";
 choices[23][2] = "find -type f | xargs grep 'libro'";
 choices[23][3] = "find -type f | xargp grep 'libro'";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9023. Examen TIC A1 2013";
 preguntaids[23] = 9023


//  Id pregunta: 9067 Año de creación de pregunta: 2014
 questions[24]= "25)  Se&ntilde;ale la respuesta correcta:";
 choices[24]= new Array();
 choices[24][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[24][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[24][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[24][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[24] = 3;
 units[24] = ['71'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9067. ";
 preguntaids[24] = 9067


//  Id pregunta: 9021 Año de creación de pregunta: 2014
 questions[25]= "26)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[25]= new Array();
 choices[25][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[25][1] = "Siempre es de corta duraci&oacute;n";
 choices[25][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[25][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[25] = 0;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9021. Examen TIC A1 2013";
 preguntaids[25] = 9021


//  Id pregunta: 9048 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "C";
 choices[26][1] = "Ensamblador";
 choices[26][2] = "Cobol";
 choices[26][3] = "Pascal";
 answers[26] = 1;
 units[26] = ['94'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9048. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";
 preguntaids[26] = 9048


//  Id pregunta: 9004 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[27]= new Array();
 choices[27][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[27][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[27][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[27][3] = "Todas las respuestas son incorrectas.";
 answers[27] = 1;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9004. ";
 preguntaids[27] = 9004


//  Id pregunta: 9047 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[28]= new Array();
 choices[28][0] = "Ser un curso";
 choices[28][1] = "Tener car&aacute;cter masivo";
 choices[28][2] = "Online";
 choices[28][3] = "Todas las anteriores";
 answers[28] = 3;
 units[28] = ['70'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9047. ";
 preguntaids[28] = 9047


//  Id pregunta: 9012 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[29]= new Array();
 choices[29][0] = "9";
 choices[29][1] = "11";
 choices[29][2] = "13";
 choices[29][3] = "15";
 answers[29] = 2;
 units[29] = ['58'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9012. ";
 preguntaids[29] = 9012


//  Id pregunta: 9007 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Qu&eacute; es una vista materializada?";
 choices[30]= new Array();
 choices[30][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[30][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[30][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[30][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[30] = 1;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9007. ";
 preguntaids[30] = 9007


//  Id pregunta: 8999 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[31]= new Array();
 choices[31][0] = "Relacional";
 choices[31][1] = "En red";
 choices[31][2] = "Jer&aacute;rquico";
 choices[31][3] = "Multidimensional";
 answers[31] = 2;
 units[31] = ['60'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8999. ";
 preguntaids[31] = 8999


//  Id pregunta: 9044 Año de creación de pregunta: 2014
 questions[32]= "33)  El modelo de calidad ISO 9126 tiene:";
 choices[32]= new Array();
 choices[32][0] = "27 caracter&iacute;sticas y 6 subcaracter&iacute;sticas";
 choices[32][1] = "6 caracter&iacute;sticas y 28 subcaracter&iacute;sticas";
 choices[32][2] = "7 caracter&iacute;sticas y 26 subcaracter&iacute;sticas";
 choices[32][3] = "6 caracter&iacute;sticas y 27 subcaracter&iacute;sticas";
 answers[32] = 3;
 units[32] = ['92'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 9044. ";
 preguntaids[32] = 9044


//  Id pregunta: 9054 Año de creación de pregunta: 2014
 questions[33]= "34)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[33]= new Array();
 choices[33][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[33][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[33][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[33][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[33] = 3;
 units[33] = ['49'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9054. ";
 preguntaids[33] = 9054


//  Id pregunta: 9032 Año de creación de pregunta: 2014
 questions[34]= "35)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[34]= new Array();
 choices[34][0] = "HAP/2028/2013";
 choices[34][1] = "HAP/2834/2015";
 choices[34][2] = "RD 695/2013";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = 1;
 units[34] = ['37'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9032. Orden HAP 2028/2013 derogada por HAP 2834/2015";
 preguntaids[34] = 9032


//  Id pregunta: 9046 Año de creación de pregunta: 2014
 questions[35]= "36)  El sistema operativo OS X de Apple se llama:";
 choices[35]= new Array();
 choices[35][0] = "Maverick";
 choices[35][1] = "Mavericks";
 choices[35][2] = "Cocoa";
 choices[35][3] = "Kit Kat";
 answers[35] = 1;
 units[35] = ['59'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9046. Maverick es el framework de java para desarrollo web";
 preguntaids[35] = 9046


//  Id pregunta: 9051 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[36]= new Array();
 choices[36][0] = "BOOTSTRAP";
 choices[36][1] = "TRILLIUM";
 choices[36][2] = "MOSCA";
 choices[36][3] = "Todos los anterires";
 answers[36] = 3;
 units[36] = ['92'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9051. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";
 preguntaids[36] = 9051


//  Id pregunta: 8997 Año de creación de pregunta: 2014
 questions[37]= "38)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[37]= new Array();
 choices[37][0] = "Pipes";
 choices[37][1] = "Signals";
 choices[37][2] = "Events";
 choices[37][3] = "Sem&aacute;foros";
 answers[37] = 0;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8997. ";
 preguntaids[37] = 8997


//  Id pregunta: 9041 Año de creación de pregunta: 2014
 questions[38]= "39)  FAN-OUT es una medida de:";
 choices[38]= new Array();
 choices[38][0] = "Complejidad";
 choices[38][1] = "Reutilizaci&oacute;n";
 choices[38][2] = "Mantenibilidad";
 choices[38][3] = "Ninguna de las anteriores.";
 answers[38] = 0;
 units[38] = ['94'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 9041. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";
 preguntaids[38] = 9041


//  Id pregunta: 9043 Año de creación de pregunta: 2014
 questions[39]= "40)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[39]= new Array();
 choices[39][0] = "Funcionalidad";
 choices[39][1] = "Fiabilidad";
 choices[39][2] = "Portabilidad";
 choices[39][3] = "Todas las anteriores";
 answers[39] = 3;
 units[39] = ['92'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 9043. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";
 preguntaids[39] = 9043


//  Id pregunta: 9022 Año de creación de pregunta: 2014
 questions[40]= "41)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[40]= new Array();
 choices[40][0] = "ReFS";
 choices[40][1] = "NTFS";
 choices[40][2] = "HPFS";
 choices[40][3] = "CSFS";
 answers[40] = 0;
 units[40] = ['58'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9022. Examen TIC A1 2013";
 preguntaids[40] = 9022


//  Id pregunta: 9042 Año de creación de pregunta: 2014
 questions[41]= "42)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[41]= new Array();
 choices[41][0] = "MSIL";
 choices[41][1] = "CIL";
 choices[41][2] = "CLS";
 choices[41][3] = "Bytecode";
 answers[41] = 1;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9042. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";
 preguntaids[41] = 9042


//  Id pregunta: 9028 Año de creación de pregunta: 2014
 questions[42]= "43)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[42]= new Array();
 choices[42][0] = "IP Address Management";
 choices[42][1] = "Internet Proccess Advanced Management";
 choices[42][2] = "IP Access Management";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['58'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9028. ";
 preguntaids[42] = 9028


//  Id pregunta: 9009 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[43]= new Array();
 choices[43][0] = "Vistas materializadas.";
 choices[43][1] = "Esquemas de copo de nieve.";
 choices[43][2] = "Cubos OLAP.";
 choices[43][3] = "Todos los anteriores.";
 answers[43] = 3;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9009. ";
 preguntaids[43] = 9009


//  Id pregunta: 9029 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[44]= new Array();
 choices[44][0] = "256";
 choices[44][1] = "512";
 choices[44][2] = "1024";
 choices[44][3] = "2048";
 answers[44] = 2;
 units[44] = ['58'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9029. ";
 preguntaids[44] = 9029


//  Id pregunta: 9055 Año de creación de pregunta: 2014
 questions[45]= "46)  La taxonom&iacute;a de Flynn:";
 choices[45]= new Array();
 choices[45][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[45][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[45][2] = "Se divide en cuatro categor&iacute;as.";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9055. ";
 preguntaids[45] = 9055


//  Id pregunta: 8527 Año de creación de pregunta: 2014
 questions[46]= "47)  Con respecto a las siguientes siglas:";
 choices[46]= new Array();
 choices[46][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[46][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[46][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[46][3] = "Todas las anteriores";
 answers[46] = 3;
 units[46] = ['108'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8527. ";
 preguntaids[46] = 8527


//  Id pregunta: 8998 Año de creación de pregunta: 2014
 questions[47]= "48)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[47]= new Array();
 choices[47][0] = "MariaBD";
 choices[47][1] = "Apache Cassandra";
 choices[47][2] = "Heidi";
 choices[47][3] = "Ingres";
 answers[47] = 1;
 units[47] = ['73'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8998. ";
 preguntaids[47] = 8998


//  Id pregunta: 9003 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[48]= new Array();
 choices[48][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[48][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[48][2] = "Utilizan estructuras flexibles";
 choices[48][3] = "Todas las anteriores lo son";
 answers[48] = 3;
 units[48] = ['73'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9003. ";
 preguntaids[48] = 9003


//  Id pregunta: 9063 Año de creación de pregunta: 2014
 questions[49]= "50)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[49]= new Array();
 choices[49][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[49][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[49][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[49][3] = "Ninguna de las anteriores.";
 answers[49] = 1;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9063. ";
 preguntaids[49] = 9063


//  Id pregunta: 9065 Año de creación de pregunta: 2014
 questions[50]= "51)  Son servicios de una IDE:";
 choices[50]= new Array();
 choices[50][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[50][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[50][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[50][3] = "a, b y c son correctas.";
 answers[50] = 3;
 units[50] = ['71'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9065. ";
 preguntaids[50] = 9065


//  Id pregunta: 9064 Año de creación de pregunta: 2014
 questions[51]= "52)  El serviceware permite:";
 choices[51]= new Array();
 choices[51][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[51][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[51][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[51][3] = "Controlar la red de comunicaciones del Grid.";
 answers[51] = 1;
 units[51] = ['49'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9064. ";
 preguntaids[51] = 9064


//  Id pregunta: 8994 Año de creación de pregunta: 2014
 questions[52]= "53)  La arquitectura original de Linux es de tipo:";
 choices[52]= new Array();
 choices[52][0] = "Microkernel";
 choices[52][1] = "Monol&iacute;tica";
 choices[52][2] = "Modular";
 choices[52][3] = "H&iacute;brida";
 answers[52] = 1;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8994. ";
 preguntaids[52] = 8994


//  Id pregunta: 9020 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[53]= new Array();
 choices[53][0] = "Kexi.";
 choices[53][1] = "Kivio.";
 choices[53][2] = "Konqueror.";
 choices[53][3] = "Kugar.";
 answers[53] = 3;
 units[53] = ['66'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9020. Examen TIC A1 2013";
 preguntaids[53] = 9020


//  Id pregunta: 9030 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[54]= new Array();
 choices[54][0] = "No puede";
 choices[54][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[54][2] = "Con un programa de emulaci&oacute;n";
 choices[54][3] = "Con una m&aacute;quina virtual";
 answers[54] = 0;
 units[54] = ['58'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9030. ";
 preguntaids[54] = 9030


//  Id pregunta: 9027 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;C&uacute;al es la interfaz gr&aacute;fica de usuario en una instalaci&oacute;n de Windows 2012 Server core?";
 choices[55]= new Array();
 choices[55][0] = "MetroUI";
 choices[55][1] = "Metacity";
 choices[55][2] = "KDE";
 choices[55][3] = "Ninguna";
 answers[55] = 3;
 units[55] = ['58'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9027. ";
 preguntaids[55] = 9027


//  Id pregunta: 9011 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[56]= new Array();
 choices[56][0] = "Windows XP";
 choices[56][1] = "Windows Vista";
 choices[56][2] = "Windows 7";
 choices[56][3] = "Windows 8";
 answers[56] = 2;
 units[56] = ['58'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9011. ";
 preguntaids[56] = 9011


//  Id pregunta: 8995 Año de creación de pregunta: 2014
 questions[57]= "58)  Marcar la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[57][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[57][2] = "El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[57][3] = "Todas las anteriores son incorrectas";
 answers[57] = 1;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8995. ";
 preguntaids[57] = 8995


//  Id pregunta: 9000 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[58]= new Array();
 choices[58][0] = "Oracle";
 choices[58][1] = "MongoDB";
 choices[58][2] = "eXist";
 choices[58][3] = "Redis";
 answers[58] = 2;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9000. ";
 preguntaids[58] = 9000


//  Id pregunta: 9002 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[59]= new Array();
 choices[59][0] = "Soportan operaciones JOIN";
 choices[59][1] = "Garantizan completamente ACID";
 choices[59][2] = "Requieren estructuras fijas, como tablas";
 choices[59][3] = "Escalan bien horizontalmente";
 answers[59] = 3;
 units[59] = ['73'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9002. ";
 preguntaids[59] = 9002


//  Id pregunta: 9066 Año de creación de pregunta: 2014
 questions[60]= "61)  Son est&aacute;ndares GIS:";
 choices[60]= new Array();
 choices[60][0] = "Para metadatos: FGDC Data Content Standard, ISO 19115 Metadatos, OpenGIS Catalog Service.";
 choices[60][1] = "Para servicio de entidades vectoriales: GML, Geography Markup Language (perfil de XML).";
 choices[60][2] = "Para Web Mapping: Open GIS Web Feature Service, ISO 19125 Simple Feature Access.";
 choices[60][3] = "Para protocolos de almacenamiento y transporte de informaci&oacute;n geogr&aacute;fica: OpenGIS Web Map Service (WMS).";
 answers[60] = 0;
 units[60] = ['71'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9066. ";
 preguntaids[60] = 9066


//  Id pregunta: 9017 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[61]= new Array();
 choices[61][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[61][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[61][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[61][3] = "Ninguno de los anteriores";
 answers[61] = 3;
 units[61] = ['58'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9017. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";
 preguntaids[61] = 9017


//  Id pregunta: 9010 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[62]= new Array();
 choices[62][0] = "Safari";
 choices[62][1] = "Lion";
 choices[62][2] = "Aqua";
 choices[62][3] = "Terra";
 answers[62] = 2;
 units[62] = ['59'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9010. ";
 preguntaids[62] = 9010


//  Id pregunta: 9061 Año de creación de pregunta: 2014
 questions[63]= "64)  En un cl&uacute;ster:";
 choices[63]= new Array();
 choices[63][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[63][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[63][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[63][3] = "Los nodos comparten una memoria central.";
 answers[63] = 1;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9061. ";
 preguntaids[63] = 9061


//  Id pregunta: 9031 Año de creación de pregunta: 2014
 questions[64]= "65)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[64]= new Array();
 choices[64][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[64][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador";
 choices[64][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[64][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[64] = 3;
 units[64] = ['58'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9031. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";
 preguntaids[64] = 9031


//  Id pregunta: 9006 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Qu&eacute; es el FSQL?";
 choices[65]= new Array();
 choices[65][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[65][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[65][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[65][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[65] = 1;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9006. ";
 preguntaids[65] = 9006


//  Id pregunta: 9056 Año de creación de pregunta: 2014
 questions[66]= "67)  La segmentaci&oacute;n o pipelining:";
 choices[66]= new Array();
 choices[66][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[66][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[66][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[66][3] = "Todas  las anteriores.";
 answers[66] = 0;
 units[66] = ['49'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9056. ";
 preguntaids[66] = 9056


//  Id pregunta: 9052 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[67]= new Array();
 choices[67][0] = "Preparaci&oacute;n";
 choices[67][1] = "Generaci&oacute;n";
 choices[67][2] = "Consolidaci&oacute;n";
 choices[67][3] = "Todas las anteriores";
 answers[67] = 3;
 units[67] = ['84'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 9052. ";
 preguntaids[67] = 9052


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[68]= "69)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "Jurados de concursos";
 choices[68][1] = "Mesas de contrataci&oacute;n";
 choices[68][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[68][3] = "Ninguno de los anteriores";
 answers[68] = 2;
 units[68] = ['10'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[68] = 9035


//  Id pregunta: 9040 Año de creación de pregunta: 2014
 questions[69]= "70)  FAN-IN es una medida de:";
 choices[69]= new Array();
 choices[69][0] = "Complejidad";
 choices[69][1] = "Reutilizaci&oacute;n";
 choices[69][2] = "Mantenibilidad";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 1;
 units[69] = ['94'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 9040. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";
 preguntaids[69] = 9040


//  Id pregunta: 9015 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[70]= new Array();
 choices[70][0] = "Signals";
 choices[70][1] = "Mutex";
 choices[70][2] = "Sockets";
 choices[70][3] = "RPCs";
 answers[70] = 1;
 units[70] = ['58'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9015. ";
 preguntaids[70] = 9015


//  Id pregunta: 9062 Año de creación de pregunta: 2014
 questions[71]= "72)  En Grid Computing:";
 choices[71]= new Array();
 choices[71][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[71][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[71][2] = "Son sistemas heterog&eacute;neos.";
 choices[71][3] = "Todas las anteriores.";
 answers[71] = 3;
 units[71] = ['49'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9062. ";
 preguntaids[71] = 9062


//  Id pregunta: 9014 Año de creación de pregunta: 2014
 questions[72]= "73)  Las fibras (threads) en el SO Windows...";
 choices[72]= new Array();
 choices[72][0] = "Se ejecutan en modo usuario";
 choices[72][1] = "Usan multitarea preemptiva";
 choices[72][2] = "Usan multitarea colaborativa";
 choices[72][3] = "a) y c) son ciertas";
 answers[72] = 3;
 units[72] = ['58'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9014. ";
 preguntaids[72] = 9014


//  Id pregunta: 9045 Año de creación de pregunta: 2014
 questions[73]= "74)  El framework de JAVA para desarrollo web se llama:";
 choices[73]= new Array();
 choices[73][0] = "Maverick";
 choices[73][1] = "Mavericks";
 choices[73][2] = "Cocoa";
 choices[73][3] = "Kit Kat";
 answers[73] = 0;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9045. Mavericks es el sistema operativo OS X de Apple";
 preguntaids[73] = 9045


//  Id pregunta: 9060 Año de creación de pregunta: 2014
 questions[74]= "75)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[74]= new Array();
 choices[74][0] = "SISD, SIMD, MISD y MIMD.";
 choices[74][1] = "UMA y NUMA.";
 choices[74][2] = "MMC y MMD.";
 choices[74][3] = "Ninguna de las anteriores.";
 answers[74] = 3;
 units[74] = ['49'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9060. ";
 preguntaids[74] = 9060


