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
//  Id pregunta: 5196 Año de creación de pregunta: 2006
 questions[0]= "1)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[0]= new Array();
 choices[0][0] = "Utiliza un conector BNC.";
 choices[0][1] = "Su impedancia es de 50 Ohm";
 choices[0][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[0][3] = "Todas son falsas";
 answers[0] = 0;
 units[0] = ['104'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5196. ";
 preguntaids[0] = 5196


//  Id pregunta: 8025 Año de creación de pregunta: 2011
 questions[1]= "2)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[1]= new Array();
 choices[1][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[1][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[1][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[1][3] = "Puede usar conectores MIC.";
 answers[1] = 3;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8025. Examen TIC A2 2010";
 preguntaids[1] = 8025


//  Id pregunta: 8027 Año de creación de pregunta: 2011
 questions[2]= "3)  El cable UTP (Unshielded Twisted Pair):";
 choices[2]= new Array();
 choices[2][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair).";
 choices[2][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[2][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[2][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[2] = 1;
 units[2] = ['104'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8027. Examen TIC A2 2010";
 preguntaids[2] = 8027


//  Id pregunta: 9718 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[3]= new Array();
 choices[3][0] = "ISO/IEC 11801";
 choices[3][1] = "EN 50173";
 choices[3][2] = "ISO/IEC 18101";
 choices[3][3] = "EN 50137";
 answers[3] = 0;
 units[3] = ['104'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9718. ";
 preguntaids[3] = 9718


//  Id pregunta: 5194 Año de creación de pregunta: 2006
 questions[4]= "5)  La Directiva Europea sobre compatibilidad electro magnetica EMC es:";
 choices[4]= new Array();
 choices[4][0] = "89/336/EEC";
 choices[4][1] = "87/306/EEC";
 choices[4][2] = "87/95/EEC";
 choices[4][3] = "79/335/EEC";
 answers[4] = 0;
 units[4] = ['104'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5194. ";
 preguntaids[4] = 5194


//  Id pregunta: 8781 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[5]= new Array();
 choices[5][0] = "UTP - Unshielded Twisted Pair.";
 choices[5][1] = "STP - Shielded Twisted Pair.";
 choices[5][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[5][3] = "FTP - Foiled Twisted Pair.";
 answers[5] = 2;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8781. ";
 preguntaids[5] = 8781


//  Id pregunta: 8783 Año de creación de pregunta: 2013
 questions[6]= "7)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[6]= new Array();
 choices[6][0] = "EIA/TIA 586";
 choices[6][1] = "SO/EIS DIS 11108";
 choices[6][2] = "EIA/TIA 568";
 choices[6][3] = "ISO/EIS DIS 11801";
 answers[6] = 3;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8783. Examen TIC A2 2011";
 preguntaids[6] = 8783


//  Id pregunta: 7761 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[7]= new Array();
 choices[7][0] = "Hub.";
 choices[7][1] = "Puente.";
 choices[7][2] = "NIC (Network Interface Card).";
 choices[7][3] = "Router.";
 answers[7] = 3;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7761. ";
 preguntaids[7] = 7761


//  Id pregunta: 5498 Año de creación de pregunta: 2007
 questions[8]= "9)  La topolog&iacute;a de una LAN puede ser:";
 choices[8]= new Array();
 choices[8][0] = "BUS, Anillo, Estrella y Mixta.";
 choices[8][1] = "&Aacute;rbol, Anillo y Estrella";
 choices[8][2] = "BUS, Anillo, Estrella, Completa, &Aacute;rbol o Mixta.";
 choices[8][3] = "BUS, Anillo, Estrella, &Aacute;rbol y Mixta.";
 answers[8] = 2;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5498. ";
 preguntaids[8] = 5498


//  Id pregunta: 7633 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[9]= new Array();
 choices[9][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[9][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[9][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[9][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[9] = 2;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 7633. Map 2006";
 preguntaids[9] = 7633


//  Id pregunta: 8782 Año de creación de pregunta: 2013
 questions[10]= "11)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[10]= new Array();
 choices[10][0] = "Subsistema campus";
 choices[10][1] = "Subsistema horizontal";
 choices[10][2] = "Subsistema intermodal";
 choices[10][3] = "Subsistema troncal";
 answers[10] = 3;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8782. Examen TIC A1 AGE 2011";
 preguntaids[10] = 8782


//  Id pregunta: 6788 Año de creación de pregunta: 2010
 questions[11]= "12)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[11]= new Array();
 choices[11][0] = "128.000.";
 choices[11][1] = "32.000.";
 choices[11][2] = "16.000.";
 choices[11][3] = "4.000.";
 answers[11] = 2;
 units[11] = ['104'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6788. TIC A 2009";
 preguntaids[11] = 6788


//  Id pregunta: 8776 Año de creación de pregunta: 2013
 questions[12]= "13)  El cable BS/UTP:";
 choices[12]= new Array();
 choices[12][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubri&eacute;ndolo";
 choices[12][1] = "Es un cable coaxial";
 choices[12][2] = "Presenta apantallamiento dos a dos";
 choices[12][3] = "No presenta apantallamiento global";
 answers[12] = 0;
 units[12] = ['104'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8776. ";
 preguntaids[12] = 8776


//  Id pregunta: 9871 Año de creación de pregunta: 2015
 questions[13]= "14)  El teorema de Nyquist establece que:";
 choices[13]= new Array();
 choices[13][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[13][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[13][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[13][3] = "Ninguna de las anteriores.";
 answers[13] = 0;
 units[13] = ['104', '106'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9871. ";
 preguntaids[13] = 9871


//  Id pregunta: 6424 Año de creación de pregunta: 2003
 questions[14]= "15)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[14]= new Array();
 choices[14][0] = "Mediante un cable cruzado";
 choices[14][1] = "Mediante un cable sin cruzar o cable plano";
 choices[14][2] = "Mediante un dado de interconexi&oacute;n";
 choices[14][3] = "Mediante cualquiera de las tres opciones indicadas";
 answers[14] = 0;
 units[14] = ['104'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6424. ";
 preguntaids[14] = 6424


//  Id pregunta: 5195 Año de creación de pregunta: 2006
 questions[15]= "16)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[15]= new Array();
 choices[15][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[15][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[15][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[15][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[15] = 1;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5195. ";
 preguntaids[15] = 5195


//  Id pregunta: 8194 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Reverberaci&oacute;n.";
 choices[16][1] = "Ruido blanco";
 choices[16][2] = "Afon&iacute;a";
 choices[16][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[16] = 1;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8194. Examen TIC A2 2010 interna";
 preguntaids[16] = 8194


//  Id pregunta: 5499 Año de creación de pregunta: 2007
 questions[17]= "18)  Se&ntilde;ale cu&aacute;les de los siguientes son problemas de la transmisi&oacute;n de se&ntilde;ales el&eacute;ctricas sobre un medio que afectan a la calidad de las comunicaciones: I) Atenuaci&oacute;n II) Propagaci&oacute;n III)  distorsi&oacute;n.";
 choices[17]= new Array();
 choices[17][0] = "I y II.";
 choices[17][1] = "II y III.";
 choices[17][2] = "I y III.";
 choices[17][3] = "I, II y III.";
 answers[17] = 2;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5499. ";
 preguntaids[17] = 5499


//  Id pregunta: 5819 Año de creación de pregunta: 2007
 questions[18]= "19)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[18]= new Array();
 choices[18][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[18][1] = "Tiene m&aacute;s ancho de banda";
 choices[18][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[18][3] = "Tiene mayor atenuaci&oacute;n";
 answers[18] = 1;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5819. Examen 2006 JCYL";
 preguntaids[18] = 5819


//  Id pregunta: 9720 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[19]= new Array();
 choices[19][0] = "RJ-12";
 choices[19][1] = "RJ-45";
 choices[19][2] = "RJ-25";
 choices[19][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[19] = 3;
 units[19] = ['104'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9720. ";
 preguntaids[19] = 9720


//  Id pregunta: 5501 Año de creación de pregunta: 2007
 questions[20]= "21)  Ana es responsable de comunicaciones en una entidad p&uacute;blica. La entidad dispone de una LAN con conmutadores (switch) 100Base-TX, con varios puertos libres (no usados) cada uno. El pr&oacute;ximo despliegue de una nueva aplicaci&oacute;n va a incrementar considerablemente el tr&aacute;fico, superando con mucho la capacidad de la infraestructura actual. La soluci&oacute;n m&aacute;s eficiente para cubrir las demandas de la nueva aplicaci&oacute;n, de entre las que se citan a continuaci&oacute;n, ser&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 1Gb 1000Base-SX.";
 choices[20][1] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 10Gb 10Gbase-SR/SW.";
 choices[20][2] = "Implantar una red WiFi 802.11.";
 choices[20][3] = "Tender nuevas l&iacute;neas 100Base-TX entre los puertos libres de los conmutadores.";
 answers[20] = 3;
 units[20] = ['104'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5501. ";
 preguntaids[20] = 5501


//  Id pregunta: 10927 Año de creación de pregunta: 2015
 questions[21]= "22)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[21]= new Array();
 choices[21][0] = "Segmentaci&oacute;n de la LAN";
 choices[21][1] = "Cambio de forma de conexi&oacute;n";
 choices[21][2] = "Cambio de troncal";
 choices[21][3] = "Cambio de Sistema de cableado estructurado";
 answers[21] = 0;
 units[21] = ['104'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10927. ";
 preguntaids[21] = 10927


//  Id pregunta: 8775 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;C&uacute;al de los siguientes aspectos NO se recoge en las cl&aacute;sulas sobre contrataci&oacute;n p&uacute;blica de SCE del manual EPHOS-2?";
 choices[22]= new Array();
 choices[22][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la ISO 80211";
 choices[22][1] = "El cableado deber&aacute; estar de acuerdo con los requisitos del nivel f&iacute;sico de la ISO 802.x";
 choices[22][2] = "Se debe detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[22][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos o rosetas del cableado horizontal";
 answers[22] = 0;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8775. ";
 preguntaids[22] = 8775


//  Id pregunta: 10913 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP?";
 choices[23]= new Array();
 choices[23][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos";
 choices[23][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[23][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[23][3] = "Aumentando el espesor de los hilos de cobre";
 answers[23] = 0;
 units[23] = ['104'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10913. ";
 preguntaids[23] = 10913


//  Id pregunta: 10942 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[24]= new Array();
 choices[24][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[24][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[24][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[24][3] = "Ninguna es correcta";
 answers[24] = 2;
 units[24] = ['104'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10942. ";
 preguntaids[24] = 10942


//  Id pregunta: 10495 Año de creación de pregunta: 2015
 questions[25]= "26)  De las siguientes opciones se&ntilde;ale la que no corresponde a una caracter&iacute;stica de las redes de banda ancha";
 choices[25]= new Array();
 choices[25][0] = "Se cambia la informaci&oacute;n de impulsos digitales por ondas moduladas.";
 choices[25][1] = "Conexion permanente, permitiendo a su vez la utilizacion de otra banda diferente del medio para otros fines";
 choices[25][2] = "Las se&ntilde;ales digitales pueden ser transmitidas directamente sin actuar sobre ellas";
 choices[25][3] = "Se utilizan dos o m&aacute;s canales de datos simult&aacute;neos en una &uacute;nica conexi&oacute;n";
 answers[25] = 2;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10495. Es una caracter&iacute;stica de la banda base";
 preguntaids[25] = 10495


//  Id pregunta: 9719 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[26]= new Array();
 choices[26][0] = "120 Ohmios";
 choices[26][1] = "150 Ohmios";
 choices[26][2] = "100 Ohmios";
 choices[26][3] = "Todos los anteriores";
 answers[26] = 2;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 9719. ";
 preguntaids[26] = 9719


//  Id pregunta: 8224 Año de creación de pregunta: 2011
 questions[27]= "28)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[27]= new Array();
 choices[27][0] = "Firma digital";
 choices[27][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[27][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[27][3] = "Seguridad Wi-Fi";
 answers[27] = 1;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8224. Examen UPM A2 2011";
 preguntaids[27] = 8224


//  Id pregunta: 8401 Año de creación de pregunta: 2011
 questions[28]= "29)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[28]= new Array();
 choices[28][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[28][1] = "UTP Categor&iacute;a 3.";
 choices[28][2] = "UTP Categor&iacute;a 5 o 6";
 choices[28][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[28] = 2;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8401. Operador Ayto. Madrid 2010";
 preguntaids[28] = 8401


//  Id pregunta: 5367 Año de creación de pregunta: 2006
 questions[29]= "30)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[29]= new Array();
 choices[29][0] = "RJ11 de 6 contactos";
 choices[29][1] = "RJ45 de 6 contactos";
 choices[29][2] = "RJ45 de 8 contactos";
 choices[29][3] = "RJ49 para cables STP";
 answers[29] = 2;
 units[29] = ['104'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5367. ";
 preguntaids[29] = 5367


//  Id pregunta: 5981 Año de creación de pregunta: 2007
 questions[30]= "31)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[30]= new Array();
 choices[30][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[30][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[30][2] = "Interconecta edificios en el entorno de un campus";
 choices[30][3] = "Interconecta a todo el cableado de un edificio";
 answers[30] = 1;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5981. ";
 preguntaids[30] = 5981


//  Id pregunta: 7382 Año de creación de pregunta: 2010
 questions[31]= "32)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[31]= new Array();
 choices[31][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[31][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[31][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[31][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[31] = 1;
 units[31] = ['104'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7382. Examen TIC B 2009";
 preguntaids[31] = 7382


//  Id pregunta: 8502 Año de creación de pregunta: 2011
 questions[32]= "33)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[32]= new Array();
 choices[32][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[32][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[32][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 1;
 units[32] = ['104'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8502. Teleco Ayto. Madrid 2010";
 preguntaids[32] = 8502


//  Id pregunta: 5647 Año de creación de pregunta: 2007
 questions[33]= "34)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[33]= new Array();
 choices[33][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[33][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[33][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[33][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[33] = 1;
 units[33] = ['104'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5647. ";
 preguntaids[33] = 5647


//  Id pregunta: 5582 Año de creación de pregunta: 2007
 questions[34]= "35)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[34]= new Array();
 choices[34][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[34][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[34][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[34][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[34] = 1;
 units[34] = ['104'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5582. ";
 preguntaids[34] = 5582


//  Id pregunta: 10941 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes tipos de cables no presenta apantallamiento?";
 choices[35]= new Array();
 choices[35][0] = "STP";
 choices[35][1] = "S/STP";
 choices[35][2] = "FTP";
 choices[35][3] = "UTP";
 answers[35] = 3;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10941. ";
 preguntaids[35] = 10941


//  Id pregunta: 10874 Año de creación de pregunta: 2015
 questions[36]= "37)  Al conectar un PC a un switch se debe usar;";
 choices[36]= new Array();
 choices[36][0] = "Straight-through cable";
 choices[36][1] = "Consola";
 choices[36][2] = "Crossover cable";
 choices[36][3] = "RJ 11";
 answers[36] = 0;
 units[36] = ['104'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10874. ";
 preguntaids[36] = 10874


//  Id pregunta: 6052 Año de creación de pregunta: 2003
 questions[37]= "38)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[37]= new Array();
 choices[37][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[37][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[37][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[37][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[37] = 1;
 units[37] = ['104'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6052. TIC B 2007";
 preguntaids[37] = 6052


//  Id pregunta: 10877 Año de creación de pregunta: 2015
 questions[38]= "39)  Un cable RJ-45 cruzado se forma:";
 choices[38]= new Array();
 choices[38][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[38][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[38][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[38][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[38] = 0;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10877. ";
 preguntaids[38] = 10877


//  Id pregunta: 8102 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[39]= new Array();
 choices[39][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[39][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[39][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[39][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[39] = 1;
 units[39] = ['104'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8102. Examen TIC A2 2010 interna";
 preguntaids[39] = 8102


//  Id pregunta: 5875 Año de creación de pregunta: 2007
 questions[40]= "41)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo 1ue el par trenzado apantallado (STP) debido a que";
 choices[40]= new Array();
 choices[40][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[40][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, resulta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[40][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos fiables que los de STP (RJ 11)";
 choices[40][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[40] = 0;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5875. ";
 preguntaids[40] = 5875


//  Id pregunta: 10116 Año de creación de pregunta: 2015
 questions[41]= "42)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[41]= new Array();
 choices[41][0] = "OM2";
 choices[41][1] = "OM3";
 choices[41][2] = "OM4";
 choices[41][3] = "OM5";
 answers[41] = 2;
 units[41] = ['104'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10116. Examen TIC A2 2014";
 preguntaids[41] = 10116


//  Id pregunta: 5409 Año de creación de pregunta: 2006
 questions[42]= "43)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[42]= new Array();
 choices[42][0] = "BNC";
 choices[42][1] = "N-series";
 choices[42][2] = "TNC";
 choices[42][3] = "SMA-series";
 answers[42] = 1;
 units[42] = ['104'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5409. ";
 preguntaids[42] = 5409


//  Id pregunta: 5368 Año de creación de pregunta: 2006
 questions[43]= "44)  Utilizando los 4 pares de un cable categor&iacute;a 5 puedo transmitir";
 choices[43]= new Array();
 choices[43][0] = "Gigabit ethernet";
 choices[43][1] = "2 transmisiones Fast Ethernet simultaneas";
 choices[43][2] = "Fast Ethernet";
 choices[43][3] = "todas las anteriores";
 answers[43] = 3;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5368. ";
 preguntaids[43] = 5368


//  Id pregunta: 5408 Año de creación de pregunta: 2006
 questions[44]= "45)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[44]= new Array();
 choices[44][0] = "De 50 a 550 Mhz";
 choices[44][1] = "De 5 a 50 MHz";
 choices[44][2] = "De 550 a 860 MHz";
 choices[44][3] = "De 5 a 860 MHz";
 answers[44] = 1;
 units[44] = ['104'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5408. ";
 preguntaids[44] = 5408


//  Id pregunta: 5197 Año de creación de pregunta: 2006
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[45]= new Array();
 choices[45][0] = "Cable de Categor&iacute;a 4 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 2 Mbit/s con distancias de 100 metros.";
 choices[45][1] = "Cable de Categor&iacute;a 5 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 10 Mbit/s con distancias de 100 metros.";
 choices[45][2] = "Las especificaciones de la EIA/TIA-569 y las del SYSTIMAX IBS establecen la necesidad de al menos dos armarios de distribuci&oacute;n por planta para hasta 1000 metros cuadrados.";
 choices[45][3] = "El cableado horizontal debe emplear una topolog&iacute;a en estrella con una longitud m&aacute;xima de 90 metros (entre armario y roseta).";
 answers[45] = 3;
 units[45] = ['104'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5197. ";
 preguntaids[45] = 5197


//  Id pregunta: 5193 Año de creación de pregunta: 2006
 questions[46]= "47)  El est&aacute;ndar EIA/TIA 568, aprobado en Julio de 1991,esta en conformidad con lo dispuesto por:";
 choices[46]= new Array();
 choices[46][0] = "CEN";
 choices[46][1] = "ISO";
 choices[46][2] = "ITU-T";
 choices[46][3] = "ANSI";
 answers[46] = 3;
 units[46] = ['104'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5193. ";
 preguntaids[46] = 5193


//  Id pregunta: 5589 Año de creación de pregunta: 2007
 questions[47]= "48)  La codificaci&oacute;n Manchester se caracteriza por:";
 choices[47]= new Array();
 choices[47][0] = "Usar 1 V para el valor &ldquo;1&rdquo; y -1 V para el valor &ldquo;0&rdquo;";
 choices[47][1] = "Dividir cada bit en dos intervalos iguales de 1 V y &ndash;1 V comenzando en el valor positivo para el &ldquo;1&rdquo; y en el valor negativo para el &ldquo;0&rdquo;";
 choices[47][2] = "Indicar el valor &ldquo;1&rdquo; con ausencia de tr&aacute;nsito en la tensi&oacute;n el&eacute;ctrica y el &ldquo;0&rdquo; con una transici&oacute;n";
 choices[47][3] = "La opci&oacute;n anterior, suprimiendo una de cada dos transiciones";
 answers[47] = 1;
 units[47] = ['104'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5589. ";
 preguntaids[47] = 5589


//  Id pregunta: 5743 Año de creación de pregunta: 2007
 questions[48]= "49)  En los equipos CISCO con sistema operativo IOS, ,&iquest;como puede verse la configuraci&oacute;n actual del equipo?";
 choices[48]= new Array();
 choices[48][0] = "a trav&eacute;s del comando show running-config";
 choices[48][1] = "a trav&eacute;s del comando show router-stat";
 choices[48][2] = "a trav&eacute;s del comando show ios-config";
 choices[48][3] = "a trav&eacute;s del comando show ip interfaces";
 answers[48] = 0;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5743. ";
 preguntaids[48] = 5743


//  Id pregunta: 8774 Año de creación de pregunta: 2013
 questions[49]= "50)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[49]= new Array();
 choices[49][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagn&eacute;tica al ambiente.";
 choices[49][1] = "La variaci&oacute;n de la velocidad de propagaci&oacute;n de la se&ntilde;al en funcion de la frecuencia";
 choices[49][2] = "La interferencia electromagn&eacute;tica producida entre se&ntilde;ales que discurren simult&aacute;neamente entre pares paralelos.";
 choices[49][3] = "Es la distorsi&oacute;n de la se&ntilde;al por la influencia de se&ntilde;ales espurias del ambiente.";
 answers[49] = 2;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8774. ";
 preguntaids[49] = 8774


//  Id pregunta: 8777 Año de creación de pregunta: 2013
 questions[50]= "51)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI:";
 choices[50]= new Array();
 choices[50][0] = "Equivale al cable clase E de ISO";
 choices[50][1] = "Es el cable adecuado para transmisiones de 100 Mbps";
 choices[50][2] = "Su rango de funcionamiento alcanza los 100 Mhz";
 choices[50][3] = "Se trata de una categor&iacute;a obsoleta";
 answers[50] = 0;
 units[50] = ['104'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8777. ";
 preguntaids[50] = 8777


//  Id pregunta: 6113 Año de creación de pregunta: 2003
 questions[51]= "52)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[51]= new Array();
 choices[51][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[51][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[51][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[51][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[51] = 3;
 units[51] = ['48', '104'];
 blocks[51] = ['B1', 'B4'];
 comments[51] = "Id Pregunta: 6113. Examen TIC A1 MAP 2007";
 preguntaids[51] = 6113


//  Id pregunta: 5742 Año de creación de pregunta: 2007
 questions[52]= "53)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[52]= new Array();
 choices[52][0] = "enlace de datos";
 choices[52][1] = "red";
 choices[52][2] = "transporte";
 choices[52][3] = "ninguna de las anteriores";
 answers[52] = 0;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5742. ";
 preguntaids[52] = 5742


//  Id pregunta: 5821 Año de creación de pregunta: 2007
 questions[53]= "54)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[53]= new Array();
 choices[53][0] = "las frecuencias usadas";
 choices[53][1] = "los adaptadores usados";
 choices[53][2] = "la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 2;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5821. Examen 2006 JCYL";
 preguntaids[53] = 5821


//  Id pregunta: 8780 Año de creación de pregunta: 2013
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transici&oacute;n (PT)";
 choices[54][1] = "El subsistema horizontal parte de los cuadros de distribuci&oacute;n de planta y llega a las rosetas de conexi&oacute;n.";
 choices[54][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[54][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[54] = 1;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8780. ";
 preguntaids[54] = 8780


//  Id pregunta: 9579 Año de creación de pregunta: 2010
 questions[55]= "56)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[55]= new Array();
 choices[55][0] = "scp";
 choices[55][1] = "htp";
 choices[55][2] = "ftp";
 choices[55][3] = "ssh";
 answers[55] = 2;
 units[55] = ['104'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9579. TIC A2 2013 libre";
 preguntaids[55] = 9579


//  Id pregunta: 8501 Año de creación de pregunta: 2011
 questions[56]= "57)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[56]= new Array();
 choices[56][0] = "1 CSS.";
 choices[56][1] = "100 CSS.";
 choices[56][2] = "36 CSS.";
 choices[56][3] = "10 CSS";
 answers[56] = 2;
 units[56] = ['104'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8501. Teleco Ayto. Madrid 2010";
 preguntaids[56] = 8501


//  Id pregunta: 5581 Año de creación de pregunta: 2007
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[57]= new Array();
 choices[57][0] = "Diafon&iacute;a.";
 choices[57][1] = "Ruido t&eacute;rmico.";
 choices[57][2] = "Ruido de intermodulaci&oacute;n.";
 choices[57][3] = "Atenuaci&oacute;n";
 answers[57] = 0;
 units[57] = ['104'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5581. ";
 preguntaids[57] = 5581


//  Id pregunta: 10838 Año de creación de pregunta: 2015
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[58]= new Array();
 choices[58][0] = "FC";
 choices[58][1] = "LC";
 choices[58][2] = "SC";
 choices[58][3] = "NC";
 answers[58] = 3;
 units[58] = ['104'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10838. ";
 preguntaids[58] = 10838


//  Id pregunta: 10083 Año de creación de pregunta: 2015
 questions[59]= "60)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[59]= new Array();
 choices[59][0] = "0,81 ms";
 choices[59][1] = "8,19 ms";
 choices[59][2] = "819 ms";
 choices[59][3] = "81,9 ms";
 answers[59] = 2;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10083. Examen TIC A2 2014";
 preguntaids[59] = 10083


//  Id pregunta: 7855 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[60]= new Array();
 choices[60][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[60][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[60][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[60][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[60] = 2;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7855. Examen TIC A1 2010";
 preguntaids[60] = 7855


//  Id pregunta: 7659 Año de creación de pregunta: 2010
 questions[61]= "62)  Dentro de un sistema de cableado estructurado el denominado &laquo;subsistema horizontal&raquo; es aquel que:";
 choices[61]= new Array();
 choices[61][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta.";
 choices[61][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta.";
 choices[61][2] = "Interconecta edificios en el entorno de un campus.";
 choices[61][3] = "Interconecta a todo el cableado de un edificio.";
 answers[61] = 1;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7659. Map 2006";
 preguntaids[61] = 7659


//  Id pregunta: 10875 Año de creación de pregunta: 2015
 questions[62]= "63)  Al conectar un PC y un HUB se debe usar:";
 choices[62]= new Array();
 choices[62][0] = "Straight-through cable";
 choices[62][1] = "Consola";
 choices[62][2] = "Crossover cable";
 choices[62][3] = "RJ 11";
 answers[62] = 0;
 units[62] = ['104'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10875. ";
 preguntaids[62] = 10875


//  Id pregunta: 10753 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Qu&eacute; es XFP?";
 choices[63]= new Array();
 choices[63][0] = "Puerto de conexi&oacute;n de alta velocidad con par trenzado.";
 choices[63][1] = "Puerto de conexi&oacute;n de alta velocidad de fibra &oacute;ptica.";
 choices[63][2] = "Puerto de conexi&oacute;n de alta velocidad de cable coaxial.";
 choices[63][3] = "Puerto de conexi&oacute;n de alta velocidad con capacidad para emplear distintos medios de transmisi&oacute;n.";
 answers[63] = 1;
 units[63] = ['104'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 10753. ";
 preguntaids[63] = 10753


//  Id pregunta: 9599 Año de creación de pregunta: 2014
 questions[64]= "65)  Los conectores LC son:";
 choices[64]= new Array();
 choices[64][0] = "Conectores para PCI.";
 choices[64][1] = "Conectores de par trenzado.";
 choices[64][2] = "Conectores exclusivos para Mainframe.";
 choices[64][3] = "Conectores de fibra &oacute;ptica.";
 answers[64] = 3;
 units[64] = ['104'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9599. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[64] = 9599


//  Id pregunta: 7200 Año de creación de pregunta: 2010
 questions[65]= "66)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[65]= new Array();
 choices[65][0] = "Reflexi&oacute;n";
 choices[65][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[65][2] = "Difracci&oacute;n";
 choices[65][3] = "Absorci&oacute;n";
 answers[65] = 1;
 units[65] = ['104'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7200. Castilla La Mancha 2009";
 preguntaids[65] = 7200


//  Id pregunta: 5580 Año de creación de pregunta: 2007
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre transmisi&oacute;n de datos no es correcta?";
 choices[66]= new Array();
 choices[66][0] = "En el caso de medios de transmisi&oacute;n guiados, es el medio en s&iacute; mismo lo que m&aacute;s limitaciones impone a la transmisi&oacute;n.";
 choices[66][1] = "En los medios no guiados, las caracter&iacute;sticas de la transmisi&oacute;n est&aacute;n en gran medida determinadas por la frecuencia de la portadora.";
 choices[66][2] = "En general, a frecuencias bajas las antenas son direccionales, concentr&aacute;ndose toda la energ&iacute;a en un haz.";
 choices[66][3] = "Si todos los dem&aacute;s factores permanecen constantes, al aumentar el ancho de banda de la se&ntilde;al se puede incrementar la velocidad de transmisi&oacute;n.";
 answers[66] = 2;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5580. ";
 preguntaids[66] = 5580


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[67]= "68)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[67]= new Array();
 choices[67][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[67][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[67][2] = "Se produce en ambos tipos de fibra.";
 choices[67][3] = "No se produce en la fibra &oacute;ptica";
 answers[67] = 1;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[67] = 8499


//  Id pregunta: 8773 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[68]= new Array();
 choices[68][0] = "Clase D";
 choices[68][1] = "Clase F";
 choices[68][2] = "Clase E";
 choices[68][3] = "b) y c) son correctas.";
 answers[68] = 3;
 units[68] = ['104'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8773. ";
 preguntaids[68] = 8773


//  Id pregunta: 6551 Año de creación de pregunta: 2003
 questions[69]= "70)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[69]= new Array();
 choices[69][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[69][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[69][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[69][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[69] = 2;
 units[69] = ['104'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 6551. ";
 preguntaids[69] = 6551


//  Id pregunta: 9598 Año de creación de pregunta: 2014
 questions[70]= "71)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[70]= new Array();
 choices[70][0] = "Fibra &oacute;ptica.";
 choices[70][1] = "Mainframes.";
 choices[70][2] = "Buses PCI.";
 choices[70][3] = "Buses PCI.";
 answers[70] = 0;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9598. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[70] = 9598


//  Id pregunta: 10121 Año de creación de pregunta: 2015
 questions[71]= "72)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[71][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[71][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[71][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[71] = 2;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 10121. Examen TIC A1 2014";
 preguntaids[71] = 10121


//  Id pregunta: 8772 Año de creación de pregunta: 2013
 questions[72]= "73)  &iquest;Qu&eacute; norma define el cableado estructurado?";
 choices[72]= new Array();
 choices[72][0] = "ISO 50173";
 choices[72][1] = "ISO 11801";
 choices[72][2] = "ISO 18765";
 choices[72][3] = "ISO 80211";
 answers[72] = 1;
 units[72] = ['104'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8772. ";
 preguntaids[72] = 8772


//  Id pregunta: 7544 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&laquo;Thick&raquo;)?";
 choices[73]= new Array();
 choices[73][0] = "BNC.";
 choices[73][1] = "N-series.";
 choices[73][2] = "TNC.";
 choices[73][3] = "SMA-series.";
 answers[73] = 1;
 units[73] = ['104'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7544. Map 2005";
 preguntaids[73] = 7544


//  Id pregunta: 9367 Año de creación de pregunta: 2014
 questions[74]= "75)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[74]= new Array();
 choices[74][0] = "Tier 5";
 choices[74][1] = "Tier 4";
 choices[74][2] = "Tier 3";
 choices[74][3] = "Tier 0";
 answers[74] = 1;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9367. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[74] = 9367


