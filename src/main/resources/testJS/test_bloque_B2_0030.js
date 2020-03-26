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
//  Id pregunta: 7360 Año de creación de pregunta: 2010
 questions[0]= "1)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[0][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[0][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[0][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[0] = 3;
 units[0] = ['56'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7360. Examen TIC B 2009";
 preguntaids[0] = 7360


//  Id pregunta: 7362 Año de creación de pregunta: 2010
 questions[1]= "2)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[1]= new Array();
 choices[1][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[1][1] = "loctl es un comando que permite crear un fichero";
 choices[1][2] = "Las normas POSIX definen la forma de organizar la memoria";
 choices[1][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[1] = 3;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7362. Examen TIC B 2009";
 preguntaids[1] = 7362


//  Id pregunta: 7355 Año de creación de pregunta: 2010
 questions[2]= "3)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[2]= new Array();
 choices[2][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[2][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[2][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[2][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[2] = 0;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7355. Examen TIC B 2009";
 preguntaids[2] = 7355


//  Id pregunta: 7356 Año de creación de pregunta: 2010
 questions[3]= "4)  Si 100 personas reciben un correo electr&oacute;nico, destinado a toda la empresa, con un archivo adjunto de 1 MB, y cada destinatario decide guardar el archivo adjunto localmente, a la hora de hacer backup de esos escritorios se precisar&aacute;n 100 MB de espacio de copias de seguridad. &iquest;C&oacute;mo se denomina la tecnolog&iacute;a que permite reducir este espacio a un uno por ciento del espacio original necesario?";
 choices[3]= new Array();
 choices[3][0] = "Compresion LZ";
 choices[3][1] = "Filtrado de Kalman";
 choices[3][2] = "Renderizaci&oacute;n especulativa";
 choices[3][3] = "Deduplicaci&oacute;n";
 answers[3] = 3;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7356. Examen TIC B 2009";
 preguntaids[3] = 7356


//  Id pregunta: 7295 Año de creación de pregunta: 2010
 questions[4]= "5)  La realizaci&oacute;n de la auditor&iacute;a, dentro de las medidas de seguridad de nivel medio, de acuerdo al RD 1720/2007 debe llevarse a cabo:";
 choices[4]= new Array();
 choices[4][0] = "Por personal externo";
 choices[4][1] = "Por personal interno a la organizaci&oacute;n";
 choices[4][2] = "Por profesionales en materia de protecci&oacute;n de datos";
 choices[4][3] = "Todas las respuestas anteriores son incorrectas";
 answers[4] = 2;
 units[4] = ['79'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7295. ";
 preguntaids[4] = 7295


//  Id pregunta: 7211 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[5]= new Array();
 choices[5][0] = "Google Chrome";
 choices[5][1] = "Mozilla Firefox";
 choices[5][2] = "Mosaic";
 choices[5][3] = "Netscape Navigator";
 answers[5] = 1;
 units[5] = ['66'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7211. ";
 preguntaids[5] = 7211


//  Id pregunta: 7224 Año de creación de pregunta: 2010
 questions[6]= "7)  GNOME es el acr&oacute;nimo de:";
 choices[6]= new Array();
 choices[6][0] = "GNU Network Object Model Environment";
 choices[6][1] = "General Network Object Model Environment";
 choices[6][2] = "GIMP Network Object Model Environment";
 choices[6][3] = "GNOME Network Object Model Environment";
 answers[6] = 0;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7224. ";
 preguntaids[6] = 7224


//  Id pregunta: 7217 Año de creación de pregunta: 2010
 questions[7]= "8)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[7]= new Array();
 choices[7][0] = "Interrupciones";
 choices[7][1] = "Ejecuci&oacute;n de procesos";
 choices[7][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[7][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[7] = 0;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7217. ";
 preguntaids[7] = 7217


//  Id pregunta: 7213 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[8]= new Array();
 choices[8][0] = "GNU";
 choices[8][1] = "GPL";
 choices[8][2] = "POSIX";
 choices[8][3] = "Emacs";
 answers[8] = 2;
 units[8] = ['57'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7213. ";
 preguntaids[8] = 7213


//  Id pregunta: 7364 Año de creación de pregunta: 2010
 questions[9]= "10)  La copia de seguridad incremental en Linux:";
 choices[9]= new Array();
 choices[9][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[9][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[9][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[9][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[9] = 0;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7364. Examen TIC B 2009";
 preguntaids[9] = 7364


//  Id pregunta: 7276 Año de creación de pregunta: 2010
 questions[10]= "11)  El certificado X.509 no";
 choices[10]= new Array();
 choices[10][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[10][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[10][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[10][3] = "Todas las respuestas anteriores son ciertas";
 answers[10] = 3;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7276. ";
 preguntaids[10] = 7276


//  Id pregunta: 7376 Año de creación de pregunta: 2010
 questions[11]= "12)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[11]= new Array();
 choices[11][0] = "Autoridad de Registro";
 choices[11][1] = "Autoridad de Certificaci&oacute;n";
 choices[11][2] = "Autoridad de Revocaci&oacute;n";
 choices[11][3] = "Autoridad de Usurpaci&oacute;n";
 answers[11] = 0;
 units[11] = ['78'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7376. Examen TIC B 2009";
 preguntaids[11] = 7376


//  Id pregunta: 7263 Año de creación de pregunta: 2010
 questions[12]= "13)  PKCS#10 define";
 choices[12]= new Array();
 choices[12][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[12][1] = "Sintaxis para las peticiones de certificados";
 choices[12][2] = "El formato del sobre digital";
 choices[12][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[12] = 1;
 units[12] = ['78'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7263. ";
 preguntaids[12] = 7263


//  Id pregunta: 7299 Año de creación de pregunta: 2010
 questions[13]= "14)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[13]= new Array();
 choices[13][0] = "En todos los datos personales";
 choices[13][1] = "En los datos personales a los que aplican las medidas de seguridad de nivel b&aacute;sico";
 choices[13][2] = "En los datos personales a los que aplican las medidas de seguridad de nivel medio";
 choices[13][3] = "En los datos personales a los que aplican las medidas de seguridad de nivel alto";
 answers[13] = 3;
 units[13] = ['79'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7299. ";
 preguntaids[13] = 7299


//  Id pregunta: 7218 Año de creación de pregunta: 2010
 questions[14]= "15)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[14]= new Array();
 choices[14][0] = "Zombies";
 choices[14][1] = "Swaps";
 choices[14][2] = "Pipes";
 choices[14][3] = "Daemons";
 answers[14] = 3;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7218. ";
 preguntaids[14] = 7218


//  Id pregunta: 7193 Año de creación de pregunta: 2010
 questions[15]= "16)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[15]= new Array();
 choices[15][0] = "SYS Y DBA";
 choices[15][1] = "SYS Y SYSTEM";
 choices[15][2] = "SYSTEM Y DBA";
 choices[15][3] = "MANAGER Y DBA";
 answers[15] = 1;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7193. Castilla La Mancha 2009";
 preguntaids[15] = 7193


//  Id pregunta: 7206 Año de creación de pregunta: 2010
 questions[16]= "17)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[16]= new Array();
 choices[16][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[16][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[16][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[16][3] = "Ninguna de las anteriores es correcta";
 answers[16] = 2;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7206. Castilla La Mancha 2009";
 preguntaids[16] = 7206


//  Id pregunta: 7380 Año de creación de pregunta: 2010
 questions[17]= "18)  Revocar un certificado electr&oacute;nico significa:";
 choices[17]= new Array();
 choices[17][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[17][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[17][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[17][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[17] = 1;
 units[17] = ['78'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7380. Examen TIC B 2009";
 preguntaids[17] = 7380


//  Id pregunta: 7262 Año de creación de pregunta: 2010
 questions[18]= "19)  PKCS#12";
 choices[18]= new Array();
 choices[18][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[18][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[18][2] = "El formato del sobre digital";
 choices[18][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[18] = 0;
 units[18] = ['78'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7262. ";
 preguntaids[18] = 7262


//  Id pregunta: 7300 Año de creación de pregunta: 2010
 questions[19]= "20)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[19]= new Array();
 choices[19][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[19][1] = "An&aacute;lisis de los sistemas operativos";
 choices[19][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[19][3] = "Todas las respuestas anteriores son correctas";
 answers[19] = 3;
 units[19] = ['79'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7300. ";
 preguntaids[19] = 7300


//  Id pregunta: 7216 Año de creación de pregunta: 2010
 questions[20]= "21)  El sistema operativo Ubuntu est&aacute; desarrollado por:";
 choices[20]= new Array();
 choices[20][0] = "Red Hat";
 choices[20][1] = "Novell";
 choices[20][2] = "Canonical";
 choices[20][3] = "MIT";
 answers[20] = 2;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7216. ";
 preguntaids[20] = 7216


//  Id pregunta: 7363 Año de creación de pregunta: 2010
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[21]= new Array();
 choices[21][0] = "Ubuntu";
 choices[21][1] = "Knoppix";
 choices[21][2] = "Fedora";
 choices[21][3] = "Guadalinex";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7363. Examen TIC B 2009";
 preguntaids[21] = 7363


//  Id pregunta: 7373 Año de creación de pregunta: 2010
 questions[22]= "23)  Dentro de los est&aacute;ndares XML, aquel  donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[22]= new Array();
 choices[22][0] = "DTD";
 choices[22][1] = "XSL";
 choices[22][2] = "XLL";
 choices[22][3] = "DHTML";
 answers[22] = 2;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7373. Examen TIC B 2009";
 preguntaids[22] = 7373


//  Id pregunta: 7358 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[23]= new Array();
 choices[23][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[23][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[23][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[23][3] = "La mayor&iacute;a de las SAN usan variantes del protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[23] = 1;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7358. Examen TIC B 2009";
 preguntaids[23] = 7358


//  Id pregunta: 7379 Año de creación de pregunta: 2010
 questions[24]= "25)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[24]= new Array();
 choices[24][0] = "Autoridad de Certificaci&oacute;n";
 choices[24][1] = "Autoridad de Registro";
 choices[24][2] = "Centro de Confianza";
 choices[24][3] = "Autoridad de Revocaci&oacute;n";
 answers[24] = 0;
 units[24] = ['78'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7379. Examen TIC B 2009";
 preguntaids[24] = 7379


//  Id pregunta: 7220 Año de creación de pregunta: 2010
 questions[25]= "26)  El superusuario administrador de un sistema UNIX se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "admin";
 choices[25][1] = "root";
 choices[25][2] = "superadmin";
 choices[25][3] = "Ninguno de los anteriores";
 answers[25] = 1;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7220. ";
 preguntaids[25] = 7220


//  Id pregunta: 7221 Año de creación de pregunta: 2010
 questions[26]= "27)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[26]= new Array();
 choices[26][0] = "passwd";
 choices[26][1] = "pass";
 choices[26][2] = "Red Hot";
 choices[26][3] = "chpass";
 answers[26] = 0;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7221. ";
 preguntaids[26] = 7221


//  Id pregunta: 7368 Año de creación de pregunta: 2010
 questions[27]= "28)  En Oracle, un tablespace es:";
 choices[27]= new Array();
 choices[27][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[27][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[27][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[27][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[27] = 3;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7368. Examen TIC B 2009";
 preguntaids[27] = 7368


//  Id pregunta: 7357 Año de creación de pregunta: 2010
 questions[28]= "29)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[28]= new Array();
 choices[28][0] = "Diaria";
 choices[28][1] = "Intermedia";
 choices[28][2] = "Incremental";
 choices[28][3] = "Diferencial";
 answers[28] = 2;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7357. Examen TIC B 2009";
 preguntaids[28] = 7357


//  Id pregunta: 7277 Año de creación de pregunta: 2010
 questions[29]= "30)  El Directorio X.500";
 choices[29]= new Array();
 choices[29][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[29][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[29][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[29][3] = "B y C son ciertas";
 answers[29] = 1;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7277. ";
 preguntaids[29] = 7277


//  Id pregunta: 7296 Año de creación de pregunta: 2010
 questions[30]= "31)  Algunas de las ventajas a la hora de utilizar software general para la realizaci&oacute;n de las auditor&iacute;as son:";
 choices[30]= new Array();
 choices[30][0] = "Economicidad";
 choices[30][1] = "Coste inicial alto";
 choices[30][2] = "No se verifican procesos particulares sino gen&eacute;ricos";
 choices[30][3] = "Todas las respuestas anteriores son incorrectas";
 answers[30] = 0;
 units[30] = ['79'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7296. ";
 preguntaids[30] = 7296


//  Id pregunta: 7212 Año de creación de pregunta: 2010
 questions[31]= "32)  Es una licencia compatible con GPL:";
 choices[31]= new Array();
 choices[31][0] = "NPL";
 choices[31][1] = "MPL";
 choices[31][2] = "BSD Original";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 3;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7212. ";
 preguntaids[31] = 7212


//  Id pregunta: 7265 Año de creación de pregunta: 2010
 questions[32]= "33)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Descarga de CRLs";
 choices[32][1] = "Via OCSP";
 choices[32][2] = "A y B son correctas";
 choices[32][3] = "A y B son incorrectas";
 answers[32] = 2;
 units[32] = ['78'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7265. ";
 preguntaids[32] = 7265


//  Id pregunta: 7226 Año de creación de pregunta: 2010
 questions[33]= "34)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[33]= new Array();
 choices[33][0] = "bytecode";
 choices[33][1] = "class";
 choices[33][2] = "jar";
 choices[33][3] = "applet";
 answers[33] = 0;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7226. ";
 preguntaids[33] = 7226


//  Id pregunta: 7191 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[34]= new Array();
 choices[34][0] = "Un archivo web.xml";
 choices[34][1] = "Un subdirectorio llamado classes";
 choices[34][2] = "Documentos de Microsoft Office";
 choices[34][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[34] = 2;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7191. Castilla La Mancha 2009";
 preguntaids[34] = 7191


//  Id pregunta: 7361 Año de creación de pregunta: 2010
 questions[35]= "36)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[35]= new Array();
 choices[35][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[35][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[35][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[35][3] = "En ejecutar los procesos de forma aleatoria";
 answers[35] = 0;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7361. Examen TIC B 2009";
 preguntaids[35] = 7361


//  Id pregunta: 7278 Año de creación de pregunta: 2010
 questions[36]= "37)  El campo extensions en un certificado X.509";
 choices[36]= new Array();
 choices[36][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[36][1] = "Presentan informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[36][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[36][3] = "Todas las respuestas anteriores son ciertas";
 answers[36] = 3;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7278. ";
 preguntaids[36] = 7278


//  Id pregunta: 7223 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l no es un entorno de escritorio para Linux?";
 choices[37]= new Array();
 choices[37][0] = "KDE";
 choices[37][1] = "GNOME";
 choices[37][2] = "XCFE";
 choices[37][3] = "SUSE";
 answers[37] = 3;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7223. ";
 preguntaids[37] = 7223


//  Id pregunta: 7371 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[38]= new Array();
 choices[38][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[38][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[38][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[38][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[38] = 1;
 units[38] = ['72'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7371. Examen TIC B 2009";
 preguntaids[38] = 7371


//  Id pregunta: 7229 Año de creación de pregunta: 2010
 questions[39]= "40)  NO es un framework de desarrollo en Java";
 choices[39]= new Array();
 choices[39][0] = "JavaServer Faces";
 choices[39][1] = "Spring";
 choices[39][2] = "Ruby on Rails";
 choices[39][3] = "Maverick";
 answers[39] = 2;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7229. ";
 preguntaids[39] = 7229


//  Id pregunta: 7378 Año de creación de pregunta: 2010
 questions[40]= "41)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[40]= new Array();
 choices[40][0] = "4";
 choices[40][1] = "5";
 choices[40][2] = "10";
 choices[40][3] = "7";
 answers[40] = 2;
 units[40] = ['78'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7378. Examen TIC B 2009";
 preguntaids[40] = 7378


//  Id pregunta: 7264 Año de creación de pregunta: 2010
 questions[41]= "42)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[41]= new Array();
 choices[41][0] = "N&uacute;mero de serie del certificado";
 choices[41][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[41][2] = "Firma digital de la autoridad  certificadora";
 choices[41][3] = "Todas las respuestas anteriores son correctas";
 answers[41] = 3;
 units[41] = ['78'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7264. ";
 preguntaids[41] = 7264


//  Id pregunta: 7266 Año de creación de pregunta: 2010
 questions[42]= "43)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[42]= new Array();
 choices[42][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[42][1] = "Servicios de directorio";
 choices[42][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[42][3] = "Todas las respuestas anteriores son correctas";
 answers[42] = 3;
 units[42] = ['78'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7266. ";
 preguntaids[42] = 7266


//  Id pregunta: 7301 Año de creación de pregunta: 2010
 questions[43]= "44)  El documento de seguridad de obligado cumplimiento para el personal con acceso a los ficheros automatizados y no automatizados de car&aacute;cter personal y a los sistemas de informaci&oacute;n, debe incluir:";
 choices[43]= new Array();
 choices[43][0] = "&Aacute;mbito de aplicaci&oacute;n del documento con especificaci&oacute;n detallada de los recursos protegidos";
 choices[43][1] = "Estructura de los ficheros con datos de car&aacute;cter personal y descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan";
 choices[43][2] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante incidencias";
 choices[43][3] = "Todas las respuestas anteriores son correctas";
 answers[43] = 3;
 units[43] = ['79'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7301. ";
 preguntaids[43] = 7301


//  Id pregunta: 7297 Año de creación de pregunta: 2010
 questions[44]= "45)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[44]= new Array();
 choices[44][0] = "MAPILab Reports:";
 choices[44][1] = "Network Inventory Advisor";
 choices[44][2] = "Visual audit. X4";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = 3;
 units[44] = ['79'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7297. ";
 preguntaids[44] = 7297


//  Id pregunta: 7227 Año de creación de pregunta: 2010
 questions[45]= "46)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[45]= new Array();
 choices[45][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[45][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[45][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[45][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[45] = 2;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7227. ";
 preguntaids[45] = 7227


//  Id pregunta: 7372 Año de creación de pregunta: 2010
 questions[46]= "47)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[46]= new Array();
 choices[46][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[46][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[46][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[46][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[46] = 2;
 units[46] = ['72'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7372. Examen TIC B 2009";
 preguntaids[46] = 7372


//  Id pregunta: 7231 Año de creación de pregunta: 2010
 questions[47]= "48)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[47]= new Array();
 choices[47][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[47][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[47][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[47][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[47] = 0;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7231. ";
 preguntaids[47] = 7231


//  Id pregunta: 7219 Año de creación de pregunta: 2010
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[48]= new Array();
 choices[48][0] = "Permisos";
 choices[48][1] = "Propietario";
 choices[48][2] = "Grupo";
 choices[48][3] = "Nombre del fichero";
 answers[48] = 3;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7219. ";
 preguntaids[48] = 7219


//  Id pregunta: 7192 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[49]= new Array();
 choices[49][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[49][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[49][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[49][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[49] = 1;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7192. Castilla La Mancha 2009";
 preguntaids[49] = 7192


//  Id pregunta: 7377 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[50]= new Array();
 choices[50][0] = "ISO-7816-1";
 choices[50][1] = "PCKS#11";
 choices[50][2] = "ISO-17789";
 choices[50][3] = "ISO-7815-1";
 answers[50] = 0;
 units[50] = ['78'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7377. Examen TIC B 2009";
 preguntaids[50] = 7377


//  Id pregunta: 7261 Año de creación de pregunta: 2010
 questions[51]= "52)  PKCS#7 se centra en";
 choices[51]= new Array();
 choices[51][0] = "El formato del sobre digital";
 choices[51][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[51][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[51][3] = "Todas las respuestas anteriores son correctas";
 answers[51] = 0;
 units[51] = ['78'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7261. ";
 preguntaids[51] = 7261


//  Id pregunta: 7232 Año de creación de pregunta: 2010
 questions[52]= "53)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[52]= new Array();
 choices[52][0] = "JAXR";
 choices[52][1] = "JSXA";
 choices[52][2] = "SAAJ";
 choices[52][3] = "SWAJ";
 answers[52] = 2;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7232. ";
 preguntaids[52] = 7232


//  Id pregunta: 7260 Año de creación de pregunta: 2010
 questions[53]= "54)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[53]= new Array();
 choices[53][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[53][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[53][2] = "PKCS#5: Cifrado con clave privada";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = 3;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7260. ";
 preguntaids[53] = 7260


//  Id pregunta: 7210 Año de creación de pregunta: 2010
 questions[54]= "55)  GPL es el acr&oacute;nimo de:";
 choices[54]= new Array();
 choices[54][0] = "GNU Public License";
 choices[54][1] = "Geek Public License";
 choices[54][2] = "General Propietary License";
 choices[54][3] = "General Public License";
 answers[54] = 3;
 units[54] = ['70'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7210. ";
 preguntaids[54] = 7210


//  Id pregunta: 7298 Año de creación de pregunta: 2010
 questions[55]= "56)  En el trabajo de auditor:";
 choices[55]= new Array();
 choices[55][0] = "Se distinguen de forma general tres etapas";
 choices[55][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[55][2] = "A y B son correctas";
 choices[55][3] = "A y B son incorrectas";
 answers[55] = 2;
 units[55] = ['79'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7298. ";
 preguntaids[55] = 7298


//  Id pregunta: 7374 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[56]= new Array();
 choices[56][0] = "Triple DES";
 choices[56][1] = "AES";
 choices[56][2] = "IDEA";
 choices[56][3] = "Blowfish";
 answers[56] = 1;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7374. Examen TIC B 2009";
 preguntaids[56] = 7374


//  Id pregunta: 7214 Año de creación de pregunta: 2010
 questions[57]= "58)  El proyecto POSIX est&aacute; auspiciado por:";
 choices[57]= new Array();
 choices[57][0] = "ISO";
 choices[57][1] = "IEEE";
 choices[57][2] = "GNU";
 choices[57][3] = "Berkley University";
 answers[57] = 1;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7214. ";
 preguntaids[57] = 7214


//  Id pregunta: 7369 Año de creación de pregunta: 2010
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[58]= new Array();
 choices[58][0] = "Sun Community Source License";
 choices[58][1] = "Apache License. Version 2.0";
 choices[58][2] = "Microsoft Public License (MS-OL)";
 choices[58][3] = "GNU Lesser General Public License (LGPL)";
 answers[58] = 3;
 units[58] = ['66'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7369. Examen TIC B 2009";
 preguntaids[58] = 7369


//  Id pregunta: 7215 Año de creación de pregunta: 2010
 questions[59]= "60)  El kernel desarrollado por el proyecto GNU es conocido como:";
 choices[59]= new Array();
 choices[59][0] = "Hurd";
 choices[59][1] = "Linux";
 choices[59][2] = "Emacs";
 choices[59][3] = "Debian";
 answers[59] = 0;
 units[59] = ['57'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7215. ";
 preguntaids[59] = 7215


//  Id pregunta: 7409 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;D&oacute;nde se ejecutan los applets de Java de las p&aacute;ginas web?";
 choices[60]= new Array();
 choices[60][0] = "En el proxy";
 choices[60][1] = "En el servidor de aplicaciones";
 choices[60][2] = "En el servidor web";
 choices[60][3] = "En el navegador del cliente";
 answers[60] = 3;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7409. Examen TIC B 2009";
 preguntaids[60] = 7409


//  Id pregunta: 7225 Año de creación de pregunta: 2010
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[61]= new Array();
 choices[61][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[61][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[61][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases.";
 choices[61][3] = "No se permite herencia m&uacute;ltiple.";
 answers[61] = 2;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7225. ";
 preguntaids[61] = 7225


//  Id pregunta: 7230 Año de creación de pregunta: 2010
 questions[62]= "63)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[62]= new Array();
 choices[62][0] = "Java Mobile Edition";
 choices[62][1] = "Java Micro Edition";
 choices[62][2] = "Java Mobility Edition";
 choices[62][3] = "Java Mobile Enterprise";
 answers[62] = 1;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7230. ";
 preguntaids[62] = 7230


//  Id pregunta: 7228 Año de creación de pregunta: 2010
 questions[63]= "64)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[63]= new Array();
 choices[63][0] = "JDI";
 choices[63][1] = "JCI";
 choices[63][2] = "JTEE";
 choices[63][3] = "JNI";
 answers[63] = 3;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7228. ";
 preguntaids[63] = 7228


//  Id pregunta: 7190 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[64]= new Array();
 choices[64][0] = "Plataforma Java Technique Edition (JTE)";
 choices[64][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[64][2] = "Plataforma Java Standard Edition (JSE)";
 choices[64][3] = "Plataforma Java Micro Edition (JME)";
 answers[64] = 1;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7190. Castilla La Mancha 2009";
 preguntaids[64] = 7190


//  Id pregunta: 7370 Año de creación de pregunta: 2010
 questions[65]= "66)  Los sistemas OLTP se utilizan para:";
 choices[65]= new Array();
 choices[65][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[65][1] = "Generar informes para la direcci&oacute;n.";
 choices[65][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[65][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[65] = 2;
 units[65] = ['72'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7370. Examen TIC B 2009";
 preguntaids[65] = 7370


//  Id pregunta: 7353 Año de creación de pregunta: 2010
 questions[66]= "67)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[66]= new Array();
 choices[66][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[66][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[66][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[66][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[66] = 2;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7353. Examen TIC B 2009";
 preguntaids[66] = 7353


//  Id pregunta: 7365 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[67]= new Array();
 choices[67][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[67][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios";
 choices[67][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[67][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[67] = 1;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7365. Examen TIC B 2009";
 preguntaids[67] = 7365


//  Id pregunta: 7367 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[68]= new Array();
 choices[68][0] = "SELECT";
 choices[68][1] = "DROP";
 choices[68][2] = "INSERT";
 choices[68][3] = "DELETE";
 answers[68] = 1;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7367. Examen TIC B 2009";
 preguntaids[68] = 7367


//  Id pregunta: 7354 Año de creación de pregunta: 2010
 questions[69]= "70)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[69]= new Array();
 choices[69][0] = "La pista";
 choices[69][1] = "El cilindro";
 choices[69][2] = "La cabeza de lectura/escritura";
 choices[69][3] = "El sector";
 answers[69] = 3;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7354. Examen TIC B 2009";
 preguntaids[69] = 7354


//  Id pregunta: 7366 Año de creación de pregunta: 2010
 questions[70]= "71)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[70]= new Array();
 choices[70][0] = "Drivers ODBC";
 choices[70][1] = "La tecnolog&iacute;a COM";
 choices[70][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[70][3] = "El API adecuado";
 answers[70] = 0;
 units[70] = ['58'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7366. Examen TIC B 2009";
 preguntaids[70] = 7366


//  Id pregunta: 7222 Año de creación de pregunta: 2010
 questions[71]= "72)  NO es una distribuci&oacute;n Linux:";
 choices[71]= new Array();
 choices[71][0] = "Knoppix";
 choices[71][1] = "Suse";
 choices[71][2] = "Memphis";
 choices[71][3] = "Fedora";
 answers[71] = 2;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7222. ";
 preguntaids[71] = 7222


//  Id pregunta: 7302 Año de creación de pregunta: 2010
 questions[72]= "73)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[72]= new Array();
 choices[72][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[72][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[72][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[72][3] = "Todas las respuestas anteriores son correctas";
 answers[72] = 1;
 units[72] = ['79'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7302. ";
 preguntaids[72] = 7302


//  Id pregunta: 7359 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de memoria";
 choices[73][1] = "Administraci&oacute;n de procesos";
 choices[73][2] = "Arranque de la m&aacute;quina";
 choices[73][3] = "Administraci&oacute;n del sistema de E/S";
 answers[73] = 2;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7359. Examen TIC B 2009";
 preguntaids[73] = 7359


//  Id pregunta: 7375 Año de creación de pregunta: 2010
 questions[74]= "75)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Ataque por Fuerza Bruta";
 choices[74][1] = "CriptoAn&aacute;lisis";
 choices[74][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[74][3] = "CriptoCifrado";
 answers[74] = 1;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7375. Examen TIC B 2009";
 preguntaids[74] = 7375


