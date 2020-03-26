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
//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[0]= "1)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[0]= new Array();
 choices[0][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[0][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[0][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[0][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[0] = 2;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 1062. ";
 preguntaids[0] = 1062


//  Id pregunta: 7201 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[1]= new Array();
 choices[1][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[1][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[1][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[1][3] = "Es un servicio punto a punto";
 answers[1] = 2;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7201. Castilla La Mancha 2009";
 preguntaids[1] = 7201


//  Id pregunta: 3077 Año de creación de pregunta: 2002
 questions[2]= "3)  Un procesador superescalar es aqu&eacute;l que:";
 choices[2]= new Array();
 choices[2][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[2][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[2][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = 0;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3077. ";
 preguntaids[2] = 3077


//  Id pregunta: 6218 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[3]= new Array();
 choices[3][0] = "Interrelaciones";
 choices[3][1] = "Sometimiento";
 choices[3][2] = "Generalizaci&oacute;n";
 choices[3][3] = "Agregaci&oacute;n";
 answers[3] = 1;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 6218. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6218


//  Id pregunta: 8583 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[4]= new Array();
 choices[4][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[4][1] = "Sistemas distribuidos en tiempo real";
 choices[4][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[4][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[4] = 3;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8583. ";
 preguntaids[4] = 8583


//  Id pregunta: 9089 Año de creación de pregunta: 2014
 questions[5]= "6)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[5]= new Array();
 choices[5][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[5][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[5][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[5][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[5] = 0;
 units[5] = ['114'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9089. Examen TIC-A1 2013";
 preguntaids[5] = 9089


//  Id pregunta: 1954 Año de creación de pregunta: 2016
 questions[6]= "7)  En un diagrama de flujo de datos:";
 choices[6]= new Array();
 choices[6][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia otro almac&eacute;n como hacia un proceso.";
 choices[6][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto hacia una entidad interna como hacia un proceso.";
 choices[6][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos hacia un proceso.";
 choices[6][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos hacia un almac&eacute;n.";
 answers[6] = 2;
 units[6] = ['86'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1954. ";
 preguntaids[6] = 1954


//  Id pregunta: 3516 Año de creación de pregunta: 2006
 questions[7]= "8)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[7]= new Array();
 choices[7][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[7][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[7][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[7][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[7] = 2;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 3516. Ley 59/2003, art&iacute;culo 7";
 preguntaids[7] = 3516


//  Id pregunta: 3780 Año de creación de pregunta: 2002
 questions[8]= "9)  El flujo de datos de un DFD:";
 choices[8]= new Array();
 choices[8][0] = "Tiene siempre flechas";
 choices[8][1] = "No tiene por qu&eacute; existir";
 choices[8][2] = "S&oacute;lo conecta procesos";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = 3;
 units[8] = ['85', '86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3780. ";
 preguntaids[8] = 3780


//  Id pregunta: 3245 Año de creación de pregunta: 2004
 questions[9]= "10)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[9]= new Array();
 choices[9][0] = "Polarizaci&oacute;n de la luz";
 choices[9][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[9][2] = "Ultrasonidos";
 choices[9][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[9] = 0;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3245. ";
 preguntaids[9] = 3245


//  Id pregunta: 8310 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[10]= new Array();
 choices[10][0] = "ISO 8879";
 choices[10][1] = "RFC 8879";
 choices[10][2] = "IEEE 8879";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = 0;
 units[10] = ['74'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8310. Examen UPM A2 2011";
 preguntaids[10] = 8310


//  Id pregunta: 10849 Año de creación de pregunta: 2015
 questions[11]= "12)  El incumplimiento por los operadores, o por los propietarios de los correspondientes recursos asociados, de las obligaciones establecidas para la utilizaci&oacute;n compartida de los tramos finales de las redes de acceso, se recoge en la Ley 9/2014, General de Telecomunicaciones como una infracci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Leve";
 choices[11][1] = "Grave";
 choices[11][2] = "Muy grave";
 choices[11][3] = "Dicha infracci&oacute;n no se encuentra recogida en la Ley 9/2014.";
 answers[11] = 1;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10849. ";
 preguntaids[11] = 10849


//  Id pregunta: 1213 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;les son las direcciones IP de red y de broadcast para la siguiente subred 132.27.43.25/27:";
 choices[12]= new Array();
 choices[12][0] = "Red: 132.27.43.31/27 y broadcast: 132.27.43.0";
 choices[12][1] = "red: 132.27.43.20/27 y broadcast: 132.27.43.1";
 choices[12][2] = "red: 132.27.43.0/27 y broadcast: 132.27.43.1";
 choices[12][3] = "red: 132.27.43.0/27 y broadcast: 132.27.43.31";
 answers[12] = 3;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1213. ";
 preguntaids[12] = 1213


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[13]= "14)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[13]= new Array();
 choices[13][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[13][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[13][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[13][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[13] = 2;
 units[13] = ['7'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 226. Ley 39/2015";
 preguntaids[13] = 226


//  Id pregunta: 3748 Año de creación de pregunta: 2002
 questions[14]= "15)  CODE-AND-FIX:";
 choices[14]= new Array();
 choices[14][0] = "Es un modelo en cascada";
 choices[14][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[14][2] = "Es equivalente a METRICA";
 choices[14][3] = "No resulta muy pr&aacute;ctico";
 answers[14] = 3;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3748. ";
 preguntaids[14] = 3748


//  Id pregunta: 10463 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[15]= new Array();
 choices[15][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[15][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[15][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[15][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[15] = 1;
 units[15] = ['101'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10463. ";
 preguntaids[15] = 10463


//  Id pregunta: 5110 Año de creación de pregunta: 2004
 questions[16]= "17)  El protocolo SMTP";
 choices[16]= new Array();
 choices[16][0] = "Define el formato de los mensajes";
 choices[16][1] = "Define la transferencia de mensajes";
 choices[16][2] = "Pone limitaciones al formato del mensaje";
 choices[16][3] = "b y c son ciertas";
 answers[16] = 3;
 units[16] = ['116'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5110. ";
 preguntaids[16] = 5110


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[17]= "18)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Muy grave";
 choices[17][1] = "Grave";
 choices[17][2] = "Leve";
 choices[17][3] = "No est&aacute; tipificado tal importe";
 answers[17] = 1;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[17] = 6167


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[18]= new Array();
 choices[18][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[18][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[18][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[18][3] = "El Instituto de la Mujer de Extremadura.";
 answers[18] = 3;
 units[18] = ['14'];
 blocks[18] = ['A3'];
 comments[18] = "Id Pregunta: 360. Junta de Extremadura A1 2015";
 preguntaids[18] = 360


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[19]= new Array();
 choices[19][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[19][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[19][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[19][3] = "ninguna es correcta";
 answers[19] = 1;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[19] = 997


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[20]= new Array();
 choices[20][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[20][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[20][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[20][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[20] = 0;
 units[20] = ['5'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 139. Uni&oacute;n Europea";
 preguntaids[20] = 139


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[21]= "22)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[21]= new Array();
 choices[21][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[21][1] = "el Consejo de Estado";
 choices[21][2] = "el Congreso";
 choices[21][3] = "las Cortes Generales";
 answers[21] = 0;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[21] = 981


//  Id pregunta: 3091 Año de creación de pregunta: 2002
 questions[22]= "23)  Un sistema SUN:";
 choices[22]= new Array();
 choices[22][0] = "Puede utilizar procesadores Sparc";
 choices[22][1] = "Puede utilizar procesadores MIPS";
 choices[22][2] = "Puede utilizar procesadores Intel";
 choices[22][3] = "A y C son ciertas";
 answers[22] = 3;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3091. ";
 preguntaids[22] = 3091


//  Id pregunta: 10666 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la Ley 9/2014, indique la respuesta CORRECTA:";
 choices[23]= new Array();
 choices[23][0] = "El Ministerio de Energia, Turismo y Agenda Digital aprobar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[23][1] = "El otorgamiento de derechos se har&aacute; en 3 semanas m&aacute;ximo en cualquier caso.";
 choices[23][2] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; modificar mediante Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[23][3] = "La CNMC podr&aacute; fijar mediante circular las caracter&iacute;sticas de conservaci&oacute;n de numeraci&oacute;n.";
 answers[23] = 3;
 units[23] = ['121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10666. ";
 preguntaids[23] = 10666


//  Id pregunta: 4558 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[24]= new Array();
 choices[24][0] = "Transferencia de ficheros FTAM";
 choices[24][1] = "Correo electr&oacute;nico X.400";
 choices[24][2] = "Servicios de Directorio X.500";
 choices[24][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[24] = 3;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4558. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";
 preguntaids[24] = 4558


//  Id pregunta: 9419 Año de creación de pregunta: 2014
 questions[25]= "26)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[25]= new Array();
 choices[25][0] = "salida-mecanismo";
 choices[25][1] = "salida-realimentaci&oacute;n";
 choices[25][2] = "control-realimentaci&oacute;n";
 choices[25][3] = "entrada-realimentaci&oacute;n";
 answers[25] = 1;
 units[25] = ['86'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9419. Existen cinco tipos de interconexiones entre actividades, que son las siguientes: (1)  Control; (2)  Entrada; (3)   Control &ndash; Realimentaci&oacute;n; (4)  Entrada &ndash; Realimentaci&oacute;n; (5)  Salida &ndash; Mecanismo.";
 preguntaids[25] = 9419


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[26]= "27)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[26]= new Array();
 choices[26][0] = "La Ley General Tributaria.";
 choices[26][1] = "La Ley Presupuestaria.";
 choices[26][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[26][3] = "Ninguna de las respuestas es correcta.";
 answers[26] = 0;
 units[26] = ['11'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[26] = 304


//  Id pregunta: 5296 Año de creación de pregunta: 2006
 questions[27]= "28)  Internet 2:";
 choices[27]= new Array();
 choices[27][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[27][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[27][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[27][3] = "Ninguna respuesta es correcta";
 answers[27] = 2;
 units[27] = ['103'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5296. ";
 preguntaids[27] = 5296


//  Id pregunta: 2839 Año de creación de pregunta: 2002
 questions[28]= "29)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[28]= new Array();
 choices[28][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[28][1] = "Se emplea la microprogramaci&oacute;n";
 choices[28][2] = "No se emplea la microprogramaci&oacute;n";
 choices[28][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[28] = 2;
 units[28] = ['50'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2839. ";
 preguntaids[28] = 2839


//  Id pregunta: 3208 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Qu&eacute; es NUMA?";
 choices[29]= new Array();
 choices[29][0] = "Non-Uniform Memory Access";
 choices[29][1] = "Un nuevo procesador RISC";
 choices[29][2] = "Un nuevo procesador CISC";
 choices[29][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[29] = 0;
 units[29] = ['49'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3208. ";
 preguntaids[29] = 3208


//  Id pregunta: 5984 Año de creación de pregunta: 2007
 questions[30]= "31)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[30]= new Array();
 choices[30][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[30][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[30][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[30][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[30] = 3;
 units[30] = ['107'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5984. ";
 preguntaids[30] = 5984


//  Id pregunta: 1774 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el art. 149.3 de la Constituci&oacute;n Espa&ntilde;ola, el derecho estatal ser&aacute; supletorio del derecho de las Comunidades Aut&oacute;nomas:";
 choices[31]= new Array();
 choices[31][0] = "En lo no asumido por &eacute;stas.";
 choices[31][1] = "En todo caso.";
 choices[31][2] = "En lo no atribuido a &eacute;stas de modo expreso.";
 choices[31][3] = "Seg&uacute;n lo dispongan sus respectivos Estatutos.";
 answers[31] = 1;
 units[31] = ['3'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 1774. ";
 preguntaids[31] = 1774


//  Id pregunta: 4834 Año de creación de pregunta: 2002
 questions[32]= "33)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[32]= new Array();
 choices[32][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[32][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[32][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[32][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[32] = 3;
 units[32] = ['121'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4834. ";
 preguntaids[32] = 4834


//  Id pregunta: 9262 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[33]= new Array();
 choices[33][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[33][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[33][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[33][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[33] = 2;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9262. ";
 preguntaids[33] = 9262


//  Id pregunta: 2296 Año de creación de pregunta: 2002
 questions[34]= "35)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[34]= new Array();
 choices[34][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[34][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[34][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[34][3] = "ninguna de las anteriores respuestas es correcta";
 answers[34] = 2;
 units[34] = ['35'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2296. ";
 preguntaids[34] = 2296


//  Id pregunta: 1506 Año de creación de pregunta: 2016
 questions[35]= "36)  La WAI define tres tipos de prioridades para diversos puntos de verificaci&oacute;n &iquest;Qu&eacute; prioridad tiene el siguiente: &quot;Proveer un texto equivalente para cada elemento no textual&quot;?";
 choices[35]= new Array();
 choices[35][0] = "Prioridad 1.";
 choices[35][1] = "Prioridad 2.";
 choices[35][2] = "Prioridad 3.";
 choices[35][3] = "No lo contempla.";
 answers[35] = 0;
 units[35] = ['42'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 1506. ";
 preguntaids[35] = 1506


//  Id pregunta: 1660 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con l a Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD) se&ntilde;ale, de las siguientes opciones, el tipo de fichero que se incluye en el alcance de la Ley:";
 choices[36]= new Array();
 choices[36][0] = "Ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[36][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[36][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada.";
 choices[36][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente.";
 answers[36] = 3;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 1660. ";
 preguntaids[36] = 1660


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[37]= "38)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[37]= new Array();
 choices[37][0] = "Acciones de discriminaci&oacute;n.";
 choices[37][1] = "Acciones positivas.";
 choices[37][2] = "Acciones negativas.";
 choices[37][3] = "Acciones neutras.";
 answers[37] = 1;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 379. Pol&iacute;ticas de igualdad";
 preguntaids[37] = 379


//  Id pregunta: 1714 Año de creación de pregunta: 2016
 questions[38]= "39)  En un entorno JAVA, la conexi&oacute;n entre m&oacute;dulos que componen una aplicaci&oacute;n se verifica en:";
 choices[38]= new Array();
 choices[38][0] = "Tiempo de compilaci&oacute;n.";
 choices[38][1] = "Tiempo de ejecuci&oacute;n.";
 choices[38][2] = "Tiempo de verificaci&oacute;n.";
 choices[38][3] = "Tiempo de ensamblaje.";
 answers[38] = 1;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1714. ";
 preguntaids[38] = 1714


//  Id pregunta: 6174 Año de creación de pregunta: 2003
 questions[39]= "40)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "Nivel 1";
 choices[39][1] = "Nivel 2";
 choices[39][2] = "Nivel 3";
 choices[39][3] = "Nivel 4";
 answers[39] = 2;
 units[39] = ['33'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 6174. Examen TIC A Castilla La Mancha 2007";
 preguntaids[39] = 6174


//  Id pregunta: 8377 Año de creación de pregunta: 2011
 questions[40]= "41)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[40]= new Array();
 choices[40][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[40][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[40][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[40][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[40] = 1;
 units[40] = ['60', '61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8377. Examen UPM A2 2011";
 preguntaids[40] = 8377


//  Id pregunta: 9019 Año de creación de pregunta: 2014
 questions[41]= "42)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[41]= new Array();
 choices[41][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[41][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[41][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[41][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[41] = 2;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9019. Examen TIC A1 2013";
 preguntaids[41] = 9019


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[42]= "43)  El Colegio de Comisarios se re&uacute;ne:";
 choices[42]= new Array();
 choices[42][0] = "Una vez por semana.";
 choices[42][1] = "Una vez al mes.";
 choices[42][2] = "Dos veces en semana.";
 choices[42][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[42] = 0;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 135. Uni&oacute;n Europea";
 preguntaids[42] = 135


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[43]= "44)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[43]= new Array();
 choices[43][0] = "Los cr&eacute;ditos";
 choices[43][1] = "Las partidas presupuestarias";
 choices[43][2] = "Los derechos";
 choices[43][3] = "Las obligaciones";
 answers[43] = 3;
 units[43] = ['11'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[43] = 270


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[44]= new Array();
 choices[44][0] = "De los interesados en el procedimiento";
 choices[44][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[44][2] = "Disposiciones generales";
 choices[44][3] = "De los actos administrativos";
 answers[44] = 2;
 units[44] = ['7'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[44] = 220


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[45]= new Array();
 choices[45][0] = "El 2 de Octubre de 2015";
 choices[45][1] = "El 15 de Septiembre de 2015";
 choices[45][2] = "El 1 de Octubre de 2015";
 choices[45][3] = "El 5 de Octubre de 2015";
 answers[45] = 0;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 455. Estrategia TIC";
 preguntaids[45] = 455


//  Id pregunta: 4121 Año de creación de pregunta: 2003
 questions[46]= "47)  La copia de seguridad intermedia se utiliza:";
 choices[46]= new Array();
 choices[46][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[46][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[46][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[46][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[46] = 1;
 units[46] = ['100'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 4121. ";
 preguntaids[46] = 4121


//  Id pregunta: 4148 Año de creación de pregunta: 2004
 questions[47]= "48)  Indique la afirmaci&oacute;n FALSA sobre webDAV";
 choices[47]= new Array();
 choices[47][0] = "Sus siglas son: Web Data Authoring and Versioning";
 choices[47][1] = "Se le conoce tambi&eacute;n como Web folders";
 choices[47][2] = "Es un protocolo que permite a los usuarios gestionar y editar ficheros de forma colaborativa en servidores remotos";
 choices[47][3] = "Es una extensi&oacute;n del protocolo http";
 answers[47] = 0;
 units[47] = ['99'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4148. ";
 preguntaids[47] = 4148


//  Id pregunta: 5206 Año de creación de pregunta: 2006
 questions[48]= "49)  Sobre FDDI:";
 choices[48]= new Array();
 choices[48][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[48][1] = "Se conoce como X3T9.3";
 choices[48][2] = "Su equivalente en cobre es CDDI";
 choices[48][3] = "Todas son verdaderas";
 answers[48] = 2;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5206. ";
 preguntaids[48] = 5206


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[49]= "50)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[49]= new Array();
 choices[49][0] = "La Ley Org&aacute;nica 2/2011";
 choices[49][1] = "La Ley Org&aacute;nica 2/2012";
 choices[49][2] = "La Ley Org&aacute;nica 3/2012";
 choices[49][3] = "La Ley Org&aacute;nica 2/2002";
 answers[49] = 1;
 units[49] = ['12'];
 blocks[49] = ['A3'];
 comments[49] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[49] = 336


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[50]= "51)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[50]= new Array();
 choices[50][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[50][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[50][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[50][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[50] = 1;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 9456. ";
 preguntaids[50] = 9456


//  Id pregunta: 8349 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[51]= new Array();
 choices[51][0] = "EDGE";
 choices[51][1] = "HSDPA";
 choices[51][2] = "UMTS/3G";
 choices[51][3] = "GPRS";
 answers[51] = 1;
 units[51] = ['117'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8349. Examen UC3M 2010";
 preguntaids[51] = 8349


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[52]= "53)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[52]= new Array();
 choices[52][0] = "Las respuestas a) y b) son correctas.";
 choices[52][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[52][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[52][3] = "Las respuestas a) y b) no son correctas.";
 answers[52] = 0;
 units[52] = ['11'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 314. Presupuestos generales";
 preguntaids[52] = 314


//  Id pregunta: 3825 Año de creación de pregunta: 2002
 questions[53]= "54)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[53]= new Array();
 choices[53][0] = "Uno-a-muchos";
 choices[53][1] = "Binaria";
 choices[53][2] = "Muchos-a-muchos";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 0;
 units[53] = ['60', '61', '85'];
 blocks[53] = ['B2', 'B3'];
 comments[53] = "Id Pregunta: 3825. ";
 preguntaids[53] = 3825


//  Id pregunta: 2049 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Qu&eacute; se entiende por 'throughput'?:";
 choices[54]= new Array();
 choices[54][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[54][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[54][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[54][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[54] = 0;
 units[54] = ['39'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2049. ";
 preguntaids[54] = 2049


//  Id pregunta: 7696 Año de creación de pregunta: 2010
 questions[55]= "56)  Seg&uacute;n la Ley 39/2015, con respecto a las notificaciones telem&aacute;ticas, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido en un plazo de:";
 choices[55]= new Array();
 choices[55][0] = "10 d&iacute;as naturales.";
 choices[55][1] = "10 d&iacute;as h&aacute;biles.";
 choices[55][2] = "20 d&iacute;as naturales.";
 choices[55][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido.";
 answers[55] = 0;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 7696. Map 2007";
 preguntaids[55] = 7696


//  Id pregunta: 6344 Año de creación de pregunta: 2003
 questions[56]= "57)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[56]= new Array();
 choices[56][0] = "Interface Definition Language";
 choices[56][1] = "Common Type System";
 choices[56][2] = "Base Class Library";
 choices[56][3] = "Common Language Runtime";
 answers[56] = 0;
 units[56] = ['115'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6344. ";
 preguntaids[56] = 6344


//  Id pregunta: 4399 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[57][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[57][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[57][3] = "Adem&aacute;s de evitar los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n";
 answers[57] = 1;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4399. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";
 preguntaids[57] = 4399


//  Id pregunta: 6665 Año de creación de pregunta: 2009
 questions[58]= "59)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[58]= new Array();
 choices[58][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[58][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[58][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[58][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[58] = 1;
 units[58] = ['110'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 6665. MAP 2008 A1";
 preguntaids[58] = 6665


//  Id pregunta: 8116 Año de creación de pregunta: 2011
 questions[59]= "60)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo?";
 choices[59]= new Array();
 choices[59][0] = "0-15";
 choices[59][1] = "0-255";
 choices[59][2] = "0-5";
 choices[59][3] = "0-127";
 answers[59] = 1;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8116. Examen TIC A2 2010";
 preguntaids[59] = 8116


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[60]= new Array();
 choices[60][0] = "Por reembolso de pr&eacute;stamos.";
 choices[60][1] = "Por la venta de bienes.";
 choices[60][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[60][3] = "Por prestaci&oacute;n de servicios.";
 answers[60] = 2;
 units[60] = ['11'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 312. Presupuestos generales";
 preguntaids[60] = 312


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[61]= new Array();
 choices[61][0] = "Art. 13, L.O.3/2007.";
 choices[61][1] = "Art. 14, L.O.3/2007.";
 choices[61][2] = "Art. 11, L.O.3/2007.";
 choices[61][3] = "Ninguna es correcta.";
 answers[61] = 2;
 units[61] = ['14'];
 blocks[61] = ['A3'];
 comments[61] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[61] = 378


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[62]= "63)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[62]= new Array();
 choices[62][0] = "Firma electr&oacute;nica avanzada";
 choices[62][1] = "Firma electr&oacute;nica reconocida";
 choices[62][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[62] = 2483


//  Id pregunta: 2896 Año de creación de pregunta: 2002
 questions[63]= "64)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[63]= new Array();
 choices[63][0] = "Permanencia";
 choices[63][1] = "Facilidad de reproducci&oacute;n";
 choices[63][2] = "Funcionamiento uniforme";
 choices[63][3] = "Eficiencia";
 answers[63] = 3;
 units[63] = ['68'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2896. ";
 preguntaids[63] = 2896


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[64]= new Array();
 choices[64][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[64][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[64][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[64][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[64] = 1;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[64] = 8490


//  Id pregunta: 4009 Año de creación de pregunta: 2002
 questions[65]= "66)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[65]= new Array();
 choices[65][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[65][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[65][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[65][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[65] = 1;
 units[65] = ['100'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4009. ";
 preguntaids[65] = 4009


//  Id pregunta: 10408 Año de creación de pregunta: 2015
 questions[66]= "67)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[66]= new Array();
 choices[66][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[66][1] = "JRE no incluye la JVM.";
 choices[66][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[66][3] = "La JVM es propiedad de Oracle.";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10408. ";
 preguntaids[66] = 10408


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[67]= new Array();
 choices[67][0] = "Veinte.";
 choices[67][1] = "Quince.";
 choices[67][2] = "Diez.";
 choices[67][3] = "Doce.";
 answers[67] = 0;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 91. Constituci&oacute;n de 1978";
 preguntaids[67] = 91


//  Id pregunta: 10167 Año de creación de pregunta: 2015
 questions[68]= "69)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[68]= new Array();
 choices[68][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[68][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[68][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[68][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[68] = 1;
 units[68] = ['43'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 10167. Examen TIC A1 2014";
 preguntaids[68] = 10167


//  Id pregunta: 1207 Año de creación de pregunta: 2016
 questions[69]= "70)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[69]= new Array();
 choices[69][0] = "Jitter.";
 choices[69][1] = "Delay.";
 choices[69][2] = "Round Trip delay Time.";
 choices[69][3] = "Latencia.";
 answers[69] = 2;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 1207. ";
 preguntaids[69] = 1207


//  Id pregunta: 1455 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la LOPD. &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca del documento de seguridad?";
 choices[70]= new Array();
 choices[70][0] = "El responsable de los ficheros con datos personales, elaborar&aacute; un &uacute;nico documento de seguridad que cubra todos los ficheros de los que es responsable.";
 choices[70][1] = "Entre los aspectos optativos a incluir dentro del documento se encuentra la descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan.";
 choices[70][2] = "Deber&aacute; incluir siempre las medidas que es necesario adoptar para el transporte de soportes y documentos.";
 choices[70][3] = "Ser&aacute; obligatorio incluir en todo caso la identificaci&oacute;n del responsable o responsables de seguridad.";
 answers[70] = 2;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 1455. ";
 preguntaids[70] = 1455


//  Id pregunta: 5792 Año de creación de pregunta: 2007
 questions[71]= "72)  &iquest;De qu&eacute; canales y en qu&eacute; numero esta compuesto un enlace primario RDSI si lo contratamos en Europa?:";
 choices[71]= new Array();
 choices[71][0] = "2B+D";
 choices[71][1] = "30B+2D (el D a 64 Kbps)";
 choices[71][2] = "30B+D (el D a 16 Kbps)";
 choices[71][3] = "30B+D (el D a 64 Kbps)";
 answers[71] = 3;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5792. ";
 preguntaids[71] = 5792


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[72]= "73)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[72]= new Array();
 choices[72][0] = "TPDU.";
 choices[72][1] = "Paquete.";
 choices[72][2] = "Trama.";
 choices[72][3] = "TCDU.";
 answers[72] = 0;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1129. ";
 preguntaids[72] = 1129


//  Id pregunta: 6090 Año de creación de pregunta: 2003
 questions[73]= "74)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[73]= new Array();
 choices[73][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[73][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[73][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[73][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[73] = 3;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 6090. Examen TIC A1 MAP 2007";
 preguntaids[73] = 6090


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[74][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[74][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[74][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[74] = 0;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 29. Constituci&oacute;n de 1978";
 preguntaids[74] = 29


