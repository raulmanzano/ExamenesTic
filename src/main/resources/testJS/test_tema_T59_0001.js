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
//  Id pregunta: 8681 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[0]= new Array();
 choices[0][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[0][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[0][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[0][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[0] = 0;
 units[0] = ['59'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8681. ";
 preguntaids[0] = 8681


//  Id pregunta: 8680 Año de creación de pregunta: 2013
 questions[1]= "2)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[1]= new Array();
 choices[1][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[1][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[1][2] = "Una versi&oacute;n de Android.";
 choices[1][3] = "No existe.";
 answers[1] = 2;
 units[1] = ['59'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8680. ";
 preguntaids[1] = 8680


//  Id pregunta: 3213 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[2][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[2][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[2][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[2] = 3;
 units[2] = ['59'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3213. ";
 preguntaids[2] = 3213


//  Id pregunta: 10000 Año de creación de pregunta: 2015
 questions[3]= "4)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[3]= new Array();
 choices[3][0] = "NSLog";
 choices[3][1] = "WRLog";
 choices[3][2] = "Writeln";
 choices[3][3] = "Printline";
 answers[3] = 0;
 units[3] = ['59'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10000. Examen TIC A2 2014";
 preguntaids[3] = 10000


//  Id pregunta: 8605 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Qu&eacute; era Meego?";
 choices[4]= new Array();
 choices[4][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[4][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[4][2] = "Una competencia al Android de Google.";
 choices[4][3] = "La B) y la C) son correctas.";
 answers[4] = 3;
 units[4] = ['59'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8605. ";
 preguntaids[4] = 8605


//  Id pregunta: 1552 Año de creación de pregunta: 2016
 questions[5]= "6)  Cocoa es el conjunto de frameworks orientados a objetos que permiten el desarrollo de aplicaciones nativas para Mac OS X. &iquest;C&oacute;mo se llama la versi&oacute;n para iOS?";
 choices[5]= new Array();
 choices[5][0] = "Cocoa Touch.";
 choices[5][1] = "MiniCocoa.";
 choices[5][2] = "Cocoa iOS.";
 choices[5][3] = "iTunes.";
 answers[5] = 0;
 units[5] = ['59'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1552. ";
 preguntaids[5] = 1552


//  Id pregunta: 1307 Año de creación de pregunta: 2016
 questions[6]= "7)  Para desarrollar software en el sistema operativo Android, su propietario proporciona Android SDK y para desarrollar nativamente NDK, &iquest;qu&eacute; lenguajes soportan cada uno?";
 choices[6]= new Array();
 choices[6][0] = "Android SDK: ObjectiveC con Cocoa y NDK: desarrollo nativo en C/C++.";
 choices[6][1] = "Android SDK: Java y NDK: ObjectiveC con GNUstep como API de facto.";
 choices[6][2] = "Android SDK: Java con Java ME como API principal y NDK: ObjectiveC con GNUstep como API de facto.";
 choices[6][3] = "Android SDK: Java con una API propia y NDK: desarrollo nativo en C/C++ ..";
 answers[6] = 3;
 units[6] = ['59'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1307. ";
 preguntaids[6] = 1307


//  Id pregunta: 1471 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&oacute;mo se llama la tecnolog&iacute;a de E/S incorporada en 2011 por Apple a sus nuevos iMac o MacBook Pro y que tiene una velocidad superior a FireWire 800 y USB 2.0?";
 choices[7]= new Array();
 choices[7][0] = "Thunderbolt.";
 choices[7][1] = "Lightningbolt.";
 choices[7][2] = "Applebolt.";
 choices[7][3] = "Strikingbolt.";
 answers[7] = 0;
 units[7] = ['59'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1471. ";
 preguntaids[7] = 1471


//  Id pregunta: 1302 Año de creación de pregunta: 2016
 questions[8]= "9)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[8]= new Array();
 choices[8][0] = "Java";
 choices[8][1] = "Python";
 choices[8][2] = ".Net";
 choices[8][3] = "nesC";
 answers[8] = 3;
 units[8] = ['59'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1302. ";
 preguntaids[8] = 1302


//  Id pregunta: 8463 Año de creación de pregunta: 2011
 questions[9]= "10)  Respecto al sistema operativo Android:";
 choices[9]= new Array();
 choices[9][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[9][1] = "No dispone de una m&aacute;quina virtual java";
 choices[9][2] = "Las respuestas a) y b) son ciertas";
 choices[9][3] = "Las respuestas a) y b) son falsas";
 answers[9] = 2;
 units[9] = ['59'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8463. ";
 preguntaids[9] = 8463


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[10]= "11)  Dentro de los Sistemas Operativos M&oacute;viles NO se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Ubuntu Touch";
 choices[10][1] = "iOS";
 choices[10][2] = "MVP";
 choices[10][3] = "Tizen";
 answers[10] = 2;
 units[10] = ['59'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 679. AGE A2 2015";
 preguntaids[10] = 679


//  Id pregunta: 1298 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una version del sistema operativo Android?";
 choices[11]= new Array();
 choices[11][0] = "Kit Kat.";
 choices[11][1] = "Ice Cream Sandwich.";
 choices[11][2] = "Donut.";
 choices[11][3] = "Candy Marzipan.";
 answers[11] = 3;
 units[11] = ['59'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1298. ";
 preguntaids[11] = 1298


//  Id pregunta: 1115 Año de creación de pregunta: 2016
 questions[12]= "13)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "ART.";
 choices[12][1] = "Dalvik.";
 choices[12][2] = "Java VM.";
 choices[12][3] = "APK.";
 answers[12] = 1;
 units[12] = ['59'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1115. ";
 preguntaids[12] = 1115


//  Id pregunta: 1467 Año de creación de pregunta: 2016
 questions[13]= "14)  Android es un sistema operativo basado en:";
 choices[13]= new Array();
 choices[13][0] = "UNIX.";
 choices[13][1] = "Palm OS.";
 choices[13][2] = "Google.";
 choices[13][3] = "Linux.";
 answers[13] = 3;
 units[13] = ['59'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1467. ";
 preguntaids[13] = 1467


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[14]= "15)  El formato de archivos utilizado por el sistema operativo iOS para las aplicaciones en dispositivos m&oacute;viles Apple:";
 choices[14]= new Array();
 choices[14][0] = ".ipa";
 choices[14][1] = ".app";
 choices[14][2] = ".apk";
 choices[14][3] = ".ark";
 answers[14] = 0;
 units[14] = ['59'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 680. AGE A2 2015";
 preguntaids[14] = 680


//  Id pregunta: 3068 Año de creación de pregunta: 2002
 questions[15]= "16)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[15]= new Array();
 choices[15][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[15][1] = "Es un componente del servicio de paquetes";
 choices[15][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[15][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[15] = 3;
 units[15] = ['58', '59'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3068. ";
 preguntaids[15] = 3068


//  Id pregunta: 9991 Año de creación de pregunta: 2015
 questions[16]= "17)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[16]= new Array();
 choices[16][0] = "ART.";
 choices[16][1] = "Dalvik.";
 choices[16][2] = "Java VM.";
 choices[16][3] = "APK.";
 answers[16] = 1;
 units[16] = ['59'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9991. Examen TIC A2 2014";
 preguntaids[16] = 9991


//  Id pregunta: 9046 Año de creación de pregunta: 2014
 questions[17]= "18)  El sistema operativo OS X de Apple se llama:";
 choices[17]= new Array();
 choices[17][0] = "Maverick";
 choices[17][1] = "Mavericks";
 choices[17][2] = "Cocoa";
 choices[17][3] = "Kit Kat";
 answers[17] = 1;
 units[17] = ['59'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9046. Maverick es el framework de java para desarrollo web";
 preguntaids[17] = 9046


//  Id pregunta: 10793 Año de creación de pregunta: 2015
 questions[18]= "19)  La versi&oacute;n de Android 6.0 recibe el nombre de:";
 choices[18]= new Array();
 choices[18][0] = "Lollipop";
 choices[18][1] = "Marshmallow";
 choices[18][2] = "McFlurry";
 choices[18][3] = "Cupcake";
 answers[18] = 1;
 units[18] = ['59'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10793. ";
 preguntaids[18] = 10793


//  Id pregunta: 8707 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[19]= new Array();
 choices[19][0] = "Meego.";
 choices[19][1] = "Android.";
 choices[19][2] = "Chrome OS.";
 choices[19][3] = "Symbian OS.";
 answers[19] = 0;
 units[19] = ['59'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8707. ";
 preguntaids[19] = 8707


//  Id pregunta: 3071 Año de creación de pregunta: 2002
 questions[20]= "21)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[20]= new Array();
 choices[20][0] = "M&oacute;dulo";
 choices[20][1] = "M&oacute;dulo reentrante";
 choices[20][2] = "Transacci&oacute;n";
 choices[20][3] = "Actualizaci&oacute;n";
 answers[20] = 2;
 units[20] = ['58', '59', '60'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3071. ";
 preguntaids[20] = 3071


//  Id pregunta: 9835 Año de creación de pregunta: 2015
 questions[21]= "22)  El sistema operativo Android:";
 choices[21]= new Array();
 choices[21][0] = "Est&aacute; basado en el kernel de Linux.";
 choices[21][1] = "Est&aacute; basado en la distribuci&oacute;n &ldquo;Ubuntu Touch&rdquo;.";
 choices[21][2] = "Es una distribuci&oacute;n de Linux.";
 choices[21][3] = "Es el resultado de la combinaci&oacute;n de Linux y Firefox OS.";
 answers[21] = 0;
 units[21] = ['59'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9835. ";
 preguntaids[21] = 9835


//  Id pregunta: 3148 Año de creación de pregunta: 2002
 questions[22]= "23)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[22]= new Array();
 choices[22][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[22][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[22][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[22][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[22] = 2;
 units[22] = ['59'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3148. ";
 preguntaids[22] = 3148


//  Id pregunta: 1096 Año de creación de pregunta: 2016
 questions[23]= "24)  Elija la frase correcta.";
 choices[23]= new Array();
 choices[23][0] = "Un Iphone de uso personal se conecta siempre al servidor de Internet de iOS, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[23][1] = "Un Samsung Galaxy de uso personal se conecta siempre al servidor de Internet de Android, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[23][2] = "Un Nokia 500 de uso personal se conecta siempre al servidor de Internet de Symbian, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[23][3] = "Una Blackberry de uso personal se conecta siempre al servidor de Internet de Blackberry, que act&uacute;a como un proveedor de acceso a Internet.";
 answers[23] = 3;
 units[23] = ['59'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1096. ";
 preguntaids[23] = 1096


//  Id pregunta: 9185 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[24]= new Array();
 choices[24][0] = "Kit Kat.";
 choices[24][1] = "Ice Cream Sandwich.";
 choices[24][2] = "Donut.";
 choices[24][3] = "Candy Marzipan.";
 answers[24] = 3;
 units[24] = ['59'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9185. Examen TIC A2 2013";
 preguntaids[24] = 9185


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[25]= "26)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[25]= new Array();
 choices[25][0] = "SMB3";
 choices[25][1] = "AFP";
 choices[25][2] = "NFS";
 choices[25][3] = "FTP";
 answers[25] = 0;
 units[25] = ['59'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 676. AGE A1 2015";
 preguntaids[25] = 676


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[26]= "27)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[26]= new Array();
 choices[26][0] = "Windows Phone";
 choices[26][1] = "Blackberry";
 choices[26][2] = "iOS";
 choices[26][3] = "Android";
 answers[26] = 3;
 units[26] = ['59'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 678. AGE A1 2015";
 preguntaids[26] = 678


//  Id pregunta: 8274 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[27]= new Array();
 choices[27][0] = "Android.";
 choices[27][1] = "SymbianOS.";
 choices[27][2] = "HTC Mobile.";
 choices[27][3] = "RIM BlackBerry.";
 answers[27] = 2;
 units[27] = ['59'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8274. Examen TIC A2 2010 interna";
 preguntaids[27] = 8274


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Lollipop";
 choices[28][1] = "Jelly Bean";
 choices[28][2] = "Marshmallow";
 choices[28][3] = "KitKat";
 answers[28] = 2;
 units[28] = ['59'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 677. AGE A1 2015";
 preguntaids[28] = 677


//  Id pregunta: 9997 Año de creación de pregunta: 2015
 questions[29]= "30)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[29]= new Array();
 choices[29][0] = "yum";
 choices[29][1] = "apk";
 choices[29][2] = "ipa";
 choices[29][3] = "gpm";
 answers[29] = 1;
 units[29] = ['59'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9997. Examen TIC A2 2014";
 preguntaids[29] = 9997


//  Id pregunta: 1120 Año de creación de pregunta: 2016
 questions[30]= "31)  El sistema operativo iOS presente en dispositivos Apple, cuenta con cuatro capas de abstracci&oacute;n, entre las que NO se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Capa n&uacute;cleo (Core OS).";
 choices[30][1] = "Capa de servicios principales.";
 choices[30][2] = "Capa Cocoa Touch.";
 choices[30][3] = "Capa de servicios de red.";
 answers[30] = 3;
 units[30] = ['59'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1120. ";
 preguntaids[30] = 1120


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la versi&oacute;n de Android INCORRECTA:";
 choices[31]= new Array();
 choices[31][0] = "Android 3.0 Honeycomb.";
 choices[31][1] = "Android 4.0 Jelly Bean.";
 choices[31][2] = "Android 5.0 Lollipop.";
 choices[31][3] = "Android 6.0 Marshmallow.";
 answers[31] = 1;
 units[31] = ['59'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 681. AGE A2 2015";
 preguntaids[31] = 681


//  Id pregunta: 9010 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[32]= new Array();
 choices[32][0] = "Safari";
 choices[32][1] = "Lion";
 choices[32][2] = "Aqua";
 choices[32][3] = "Terra";
 answers[32] = 2;
 units[32] = ['59'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9010. ";
 preguntaids[32] = 9010


