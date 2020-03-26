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
//  Id pregunta: 5128 Año de creación de pregunta: 2003
 questions[0]= "1)  La Interfaz Aire de la norma IEEE 802.11g es:";
 choices[0]= new Array();
 choices[0][0] = "FHSS/DSSS";
 choices[0][1] = "DSSS";
 choices[0][2] = "OFDM";
 choices[0][3] = "DSSS/OFDM";
 answers[0] = 3;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5128. ";
 preguntaids[0] = 5128


//  Id pregunta: 5116 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[1]= new Array();
 choices[1][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[1][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[1][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[1][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[1] = 0;
 units[1] = ['113'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5116. ";
 preguntaids[1] = 5116


//  Id pregunta: 5109 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[2]= new Array();
 choices[2][0] = "POTS";
 choices[2][1] = "RSVP";
 choices[2][2] = "DTMF";
 choices[2][3] = "SIP";
 answers[2] = 3;
 units[2] = ['107'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5109. ";
 preguntaids[2] = 5109


//  Id pregunta: 5056 Año de creación de pregunta: 2002
 questions[3]= "4)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[3]= new Array();
 choices[3][0] = "TCP";
 choices[3][1] = "DNS";
 choices[3][2] = "WINS";
 choices[3][3] = "DHCP";
 answers[3] = 3;
 units[3] = ['113'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5056. ";
 preguntaids[3] = 5056


//  Id pregunta: 5150 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[4]= new Array();
 choices[4][0] = "802.4";
 choices[4][1] = "802.3";
 choices[4][2] = "802.5";
 choices[4][3] = "802.6";
 answers[4] = 1;
 units[4] = ['107'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5150. ";
 preguntaids[4] = 5150


//  Id pregunta: 5122 Año de creación de pregunta: 2003
 questions[5]= "6)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[5]= new Array();
 choices[5][0] = "ICMP";
 choices[5][1] = "SNMP.";
 choices[5][2] = "SMTP.";
 choices[5][3] = "MIME.";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5122. Junta Andaluc&iacute;a";
 preguntaids[5] = 5122


//  Id pregunta: 5066 Año de creación de pregunta: 2002
 questions[6]= "7)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[6]= new Array();
 choices[6][0] = "de los m&oacute;dems de cable";
 choices[6][1] = "de los dispositivos WAP";
 choices[6][2] = "de xDSL";
 choices[6][3] = "de LMDS";
 answers[6] = 2;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5066. ";
 preguntaids[6] = 5066


//  Id pregunta: 5070 Año de creación de pregunta: 2002
 questions[7]= "8)  Siguiendo la terminolog&iacute;a OSI, se&ntilde;alar qu&eacute; respuesta no se refiere a una de las categor&iacute;as en las que se puede dividir los procesos de aplicaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Procesos de gesti&oacute;n del sistema";
 choices[7][1] = "Procesos de gesti&oacute;n de las aplicaciones";
 choices[7][2] = "Procesos de gesti&oacute;n del control de flujo";
 choices[7][3] = "Procesos de usuario";
 answers[7] = 2;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5070. ";
 preguntaids[7] = 5070


//  Id pregunta: 5090 Año de creación de pregunta: 2003
 questions[8]= "9)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[8]= new Array();
 choices[8][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[8][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[8][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[8][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[8] = 1;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5090. ";
 preguntaids[8] = 5090


//  Id pregunta: 5099 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Qu&eacute; son los IDS?";
 choices[9]= new Array();
 choices[9][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[9][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[9][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 1;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5099. ";
 preguntaids[9] = 5099


//  Id pregunta: 5133 Año de creación de pregunta: 2003
 questions[10]= "11)  Sobre el est&aacute;ndar IEEE 802.20 se puede afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "No existe a&uacute;n ese est&aacute;ndar";
 choices[10][1] = "Es el est&aacute;ndar relativo a redes inal&aacute;mbricas metropolitanas de banda ancha";
 choices[10][2] = "Es el est&aacute;ndar de acceso inal&aacute;mbrico m&oacute;vil de banda ancha";
 choices[10][3] = "Nada de lo anterior es cierto";
 answers[10] = 2;
 units[10] = ['108'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5133. ";
 preguntaids[10] = 5133


//  Id pregunta: 5107 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[11]= new Array();
 choices[11][0] = "Utiliza el protocolo TCP";
 choices[11][1] = "Utiliza servicios de DNS";
 choices[11][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[11][3] = "A y C son ciertas";
 answers[11] = 3;
 units[11] = ['116'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5107. ";
 preguntaids[11] = 5107


//  Id pregunta: 5097 Año de creación de pregunta: 2004
 questions[12]= "13)  Qu&eacute; servicio no ofrece DNS security";
 choices[12]= new Array();
 choices[12][0] = "Prueba del origen de datos";
 choices[12][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[12][2] = "Secreto del mensaje";
 choices[12][3] = "Autenticaci&oacute;n";
 answers[12] = 2;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5097. ";
 preguntaids[12] = 5097


//  Id pregunta: 5113 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[13]= new Array();
 choices[13][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[13][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[13][2] = "Especificaci&oacute;n de medio 10BASE-T.";
 choices[13][3] = "Especificaci&oacute;n de medio 10BROAD36.";
 answers[13] = 0;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5113. Junta Andaluc&iacute;a";
 preguntaids[13] = 5113


//  Id pregunta: 5074 Año de creación de pregunta: 2002
 questions[14]= "15)  SOAP es:";
 choices[14]= new Array();
 choices[14][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[14][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[14][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[14][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[14] = 2;
 units[14] = ['113'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5074. ";
 preguntaids[14] = 5074


//  Id pregunta: 5125 Año de creación de pregunta: 2003
 questions[15]= "16)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:";
 choices[15]= new Array();
 choices[15][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[15][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente";
 choices[15][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[15][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[15] = 2;
 units[15] = ['107'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5125. ";
 preguntaids[15] = 5125


//  Id pregunta: 5064 Año de creación de pregunta: 2002
 questions[16]= "17)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[16]= new Array();
 choices[16][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[16][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[16][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[16][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[16] = 2;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5064. ";
 preguntaids[16] = 5064


//  Id pregunta: 5055 Año de creación de pregunta: 2002
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l de los siguientes elementos NO es utilizado en las redes de fibra &oacute;ptica:";
 choices[17]= new Array();
 choices[17][0] = "Transceptor";
 choices[17][1] = "Repetidor";
 choices[17][2] = "Fibras &oacute;pticas";
 choices[17][3] = "Interfaces de RF";
 answers[17] = 3;
 units[17] = ['106'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5055. ";
 preguntaids[17] = 5055


//  Id pregunta: 5092 Año de creación de pregunta: 2003
 questions[18]= "19)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[18]= new Array();
 choices[18][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[18][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[18][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[18][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[18] = 2;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5092. ";
 preguntaids[18] = 5092


//  Id pregunta: 5126 Año de creación de pregunta: 2003
 questions[19]= "20)  Seg&uacute;n la ley 9/2014, entre las atribuciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia NO se encuentran:";
 choices[19]= new Array();
 choices[19][0] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas.";
 choices[19][1] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[19][2] = "Gestionar el Registro de Operadores";
 choices[19][3] = "Fijar las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros en aplicaci&oacute;n de los aspectos t&eacute;cnicos y administrativos que mediante RD se establezcan para que &eacute;sta se lleve a cabo.";
 answers[19] = 2;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5126. ";
 preguntaids[19] = 5126


//  Id pregunta: 5132 Año de creación de pregunta: 2003
 questions[20]= "21)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[20]= new Array();
 choices[20][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[20][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[20][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[20][3] = "Ninguna de las opciones anteriores es correcta";
 answers[20] = 1;
 units[20] = ['117'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5132. ";
 preguntaids[20] = 5132


//  Id pregunta: 5137 Año de creación de pregunta: 2003
 questions[21]= "22)  Al ajuste hacia niveles predeterminados de los valores troceados de una se&ntilde;al anal&oacute;gica se le denomina:";
 choices[21]= new Array();
 choices[21][0] = "Cuantificaci&oacute;n.";
 choices[21][1] = "Digitalizaci&oacute;n.";
 choices[21][2] = "Discretizaci&oacute;n.";
 choices[21][3] = "Codificaci&oacute;n.";
 answers[21] = 0;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5137. ";
 preguntaids[21] = 5137


//  Id pregunta: 5076 Año de creación de pregunta: 2002
 questions[22]= "23)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[22]= new Array();
 choices[22][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[22][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[22][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red";
 choices[22][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[22] = 0;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5076. ";
 preguntaids[22] = 5076


//  Id pregunta: 5104 Año de creación de pregunta: 2004
 questions[23]= "24)  HTML";
 choices[23]= new Array();
 choices[23][0] = "Define reglas para el intercambio de mensajes";
 choices[23][1] = "Permite incorporar plantillas XSL";
 choices[23][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[23][3] = "Todas son ciertas";
 answers[23] = 2;
 units[23] = ['113'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5104. ";
 preguntaids[23] = 5104


//  Id pregunta: 5103 Año de creación de pregunta: 2004
 questions[24]= "25)  Qu&eacute; es falso respecto a XHTML";
 choices[24]= new Array();
 choices[24][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[24][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[24][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[24][3] = "Cada documento tiene que especificar su tipo";
 answers[24] = 1;
 units[24] = ['113'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5103. ";
 preguntaids[24] = 5103


//  Id pregunta: 5057 Año de creación de pregunta: 2002
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l es el mecanismo que utiliza el protocolo IP para gesti&oacute;n de flujo:";
 choices[25]= new Array();
 choices[25][0] = "Frenado brusco con trama de control &quot;rmr&quot;";
 choices[25][1] = "Frenado brusco con trama de control &quot;wack&quot;";
 choices[25][2] = "Ventana de cr&eacute;dito de tama&ntilde;o variable";
 choices[25][3] = "El protocolo IP no realiza control de flujo";
 answers[25] = 3;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5057. ";
 preguntaids[25] = 5057


//  Id pregunta: 5077 Año de creación de pregunta: 2002
 questions[26]= "27)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[26]= new Array();
 choices[26][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[26][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[26][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[26][3] = "Da igual la longitud de clave";
 answers[26] = 1;
 units[26] = ['120'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5077. ";
 preguntaids[26] = 5077


//  Id pregunta: 5119 Año de creación de pregunta: 2003
 questions[27]= "28)  En el Modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI), indicar cu&aacute;l de los siguientes niveles no soporta la funci&oacute;n o servicio de correcci&oacute;n de errores:";
 choices[27]= new Array();
 choices[27][0] = "F&iacute;sico";
 choices[27][1] = "Enlace";
 choices[27][2] = "Red";
 choices[27][3] = "Aplicaci&oacute;n";
 answers[27] = 0;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5119. ";
 preguntaids[27] = 5119


//  Id pregunta: 5068 Año de creación de pregunta: 2002
 questions[28]= "29)  Si alguien habla de &quot;la arquitectura DNA&quot; se est&aacute; refiriendo a:";
 choices[28]= new Array();
 choices[28][0] = "Un modelo de inteligencia artificial basado en algoritmos gen&eacute;ticos";
 choices[28][1] = "Una determinada arquitectura de red registrada por una compa&ntilde;&iacute;a privada";
 choices[28][2] = "Una determinada arquitectura de red normalizada por ISO";
 choices[28][3] = "Un tipo de procesador RISC";
 answers[28] = 1;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5068. ";
 preguntaids[28] = 5068


//  Id pregunta: 5080 Año de creación de pregunta: 2002
 questions[29]= "30)  STP proporciona:";
 choices[29]= new Array();
 choices[29][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[29][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[29][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[29][3] = "Nada de lo anterior es cierto";
 answers[29] = 1;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5080. ";
 preguntaids[29] = 5080


//  Id pregunta: 5060 Año de creación de pregunta: 2002
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[30]= new Array();
 choices[30][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[30][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[30][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[30][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[30] = 2;
 units[30] = ['112'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5060. ";
 preguntaids[30] = 5060


//  Id pregunta: 5124 Año de creación de pregunta: 2003
 questions[31]= "32)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[31]= new Array();
 choices[31][0] = "1,5 metros m&aacute;s.";
 choices[31][1] = "3 metros m&aacute;s.";
 choices[31][2] = "4,5 metros m&aacute;s.";
 choices[31][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[31] = 3;
 units[31] = ['114'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5124. Junta Andaluc&iacute;a";
 preguntaids[31] = 5124


//  Id pregunta: 5094 Año de creación de pregunta: 2003
 questions[32]= "33)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[32]= new Array();
 choices[32][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[32][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[32][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[32][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[32] = 2;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5094. Junta Andaluc&iacute;a";
 preguntaids[32] = 5094


//  Id pregunta: 5083 Año de creación de pregunta: 2002
 questions[33]= "34)  Topolog&iacute;a de una red (indicar la respuesta err&oacute;nea):";
 choices[33]= new Array();
 choices[33][0] = "Se distingue entre topolog&iacute;a f&iacute;sica y topolog&iacute;a l&oacute;gica";
 choices[33][1] = "En una configuraci&oacute;n en estrella se pueden utilizar medios y velocidades de transmisi&oacute;n diferentes a lo largo de la red";
 choices[33][2] = "En una configuraci&oacute;n en Bus, todas las estaciones est&aacute;n conectadas a un &uacute;nico canal de comunicaciones";
 choices[33][3] = "En una configuraci&oacute;n en anillo, la aver&iacute;a de una estaci&oacute;n no afecta al servicio";
 answers[33] = 3;
 units[33] = ['112'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5083. ";
 preguntaids[33] = 5083


//  Id pregunta: 5098 Año de creación de pregunta: 2004
 questions[34]= "35)  El protocolo HTTP";
 choices[34]= new Array();
 choices[34][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[34][1] = "Utiliza el formato MIME para las respuestas";
 choices[34][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[34][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[34] = 1;
 units[34] = ['113'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5098. ";
 preguntaids[34] = 5098


//  Id pregunta: 5102 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el virus Blaster es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Es un gusano que inspecciona la agenda de direcciones y env&iacute;a un mensaje replicado a todas ellas";
 choices[35][1] = "Es un gusano que usa una vulnerabilidad de Windows por la que el atacante puede tener permisos de ejecuci&oacute;n locales";
 choices[35][2] = "Es un gusano que se propaga a trav&eacute;s del correo electr&oacute;nico en un mensaje escrito en ingl&eacute;s de caracter&iacute;sticas variables, as&iacute; como a trav&eacute;s de los programas de intercambio de ficheros punto a punto";
 choices[35][3] = "Es un gusano que busca en todas las unidades de disco direcciones de correo electr&oacute;nico y se autoenv&iacute;a a ellas utilizando su propio motor SMTP";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5102. ";
 preguntaids[35] = 5102


//  Id pregunta: 5134 Año de creación de pregunta: 2003
 questions[36]= "37)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[36]= new Array();
 choices[36][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[36][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[36][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[36][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[36] = 0;
 units[36] = ['120'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5134. Junta Andaluc&iacute;a";
 preguntaids[36] = 5134


//  Id pregunta: 5127 Año de creación de pregunta: 2003
 questions[37]= "38)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[37]= new Array();
 choices[37][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[37][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[37][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[37][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[37] = 1;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5127. ";
 preguntaids[37] = 5127


//  Id pregunta: 5112 Año de creación de pregunta: 2003
 questions[38]= "39)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[38]= new Array();
 choices[38][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[38][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[38][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[38][3] = "Ninguna de las respuestas es cierta";
 answers[38] = 2;
 units[38] = ['113'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5112. ";
 preguntaids[38] = 5112


//  Id pregunta: 5078 Año de creación de pregunta: 2002
 questions[39]= "40)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[39]= new Array();
 choices[39][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[39][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[39][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;).";
 choices[39][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[39] = 1;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5078. ";
 preguntaids[39] = 5078


//  Id pregunta: 5131 Año de creación de pregunta: 2003
 questions[40]= "41)  Sobre ADSL es cierto que:";
 choices[40]= new Array();
 choices[40][0] = "No es compatible con RDSI";
 choices[40][1] = "Las portadoras que usa ADSL se modulan en cuadratura";
 choices[40][2] = "Los organismos de estandarizaci&oacute;n se han decantado por la t&eacute;cnica de modulaci&oacute;n CAP para ADSL";
 choices[40][3] = "ADSL opera en un margen defrecuencias que llega hasta los 20 KHz";
 answers[40] = 1;
 units[40] = ['108'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5131. Compatible con RDSI seg&uacute;n anexo B. CAP utiliza modulaci&oacute;n QAM en canal de bajada.";
 preguntaids[40] = 5131


//  Id pregunta: 5089 Año de creación de pregunta: 2002
 questions[41]= "42)  WTLS:";
 choices[41]= new Array();
 choices[41][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[41][1] = "proporciona mayor seguridad que TLS";
 choices[41][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[41][3] = "ningunas de las anteriores";
 answers[41] = 0;
 units[41] = ['120'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5089. ";
 preguntaids[41] = 5089


//  Id pregunta: 5117 Año de creación de pregunta: 2004
 questions[42]= "43)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[42]= new Array();
 choices[42][0] = "WPA2";
 choices[42][1] = "WPA3";
 choices[42][2] = "TKIP";
 choices[42][3] = "WEP";
 answers[42] = 0;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5117. ";
 preguntaids[42] = 5117


//  Id pregunta: 5075 Año de creación de pregunta: 2002
 questions[43]= "44)  SOAP:";
 choices[43]= new Array();
 choices[43][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[43][1] = "Fue propuesta originalmente por Microsoft";
 choices[43][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[43][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[43] = 3;
 units[43] = ['113'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5075. ";
 preguntaids[43] = 5075


//  Id pregunta: 5069 Año de creación de pregunta: 2002
 questions[44]= "45)  Si un encaminador (router) tiene cuatro interfaces f&iacute;sicas de red y esta encaminando los protocolos AppleTalk, OSI, y TCP/IP, &iquest;cu&aacute;ntas direcciones a nivel de red tendr&aacute; normalmente?:";
 choices[44]= new Array();
 choices[44][0] = "3";
 choices[44][1] = "4";
 choices[44][2] = "12";
 choices[44][3] = "1";
 answers[44] = 2;
 units[44] = ['104'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5069. ";
 preguntaids[44] = 5069


//  Id pregunta: 5141 Año de creación de pregunta: 2004
 questions[45]= "46)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[45]= new Array();
 choices[45][0] = "Uso excesivo de CPU";
 choices[45][1] = "Acceso no autorizado a datos";
 choices[45][2] = "a) y b)";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = 1;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5141. ";
 preguntaids[45] = 5141


//  Id pregunta: 5085 Año de creación de pregunta: 2002
 questions[46]= "47)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[46]= new Array();
 choices[46][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[46][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[46][2] = "Se necesita construir el backbone en una WAN";
 choices[46][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[46] = 2;
 units[46] = ['106'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5085. ";
 preguntaids[46] = 5085


//  Id pregunta: 5084 Año de creación de pregunta: 2002
 questions[47]= "48)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red Token Ring &oacute; IEEE 802.5:";
 choices[47]= new Array();
 choices[47][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[47][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[47][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[47][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[47] = 1;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5084. ";
 preguntaids[47] = 5084


//  Id pregunta: 5110 Año de creación de pregunta: 2004
 questions[48]= "49)  El protocolo SMTP";
 choices[48]= new Array();
 choices[48][0] = "Define el formato de los mensajes";
 choices[48][1] = "Define la transferencia de mensajes";
 choices[48][2] = "Pone limitaciones al formato del mensaje";
 choices[48][3] = "b y c son ciertas";
 answers[48] = 3;
 units[48] = ['116'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5110. ";
 preguntaids[48] = 5110


//  Id pregunta: 5088 Año de creación de pregunta: 2002
 questions[49]= "50)  WLL es:";
 choices[49]= new Array();
 choices[49][0] = "Una DLL para dispositivos wireless";
 choices[49][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[49][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[49][3] = "Nada de lo anterior";
 answers[49] = 2;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5088. ";
 preguntaids[49] = 5088


//  Id pregunta: 5087 Año de creación de pregunta: 2002
 questions[50]= "51)  USSD es:";
 choices[50]= new Array();
 choices[50][0] = "Universal Serial Service Data";
 choices[50][1] = "Universal Synchronous Service Data";
 choices[50][2] = "Unstructured Supplementary Service Data";
 choices[50][3] = "Unsorted Simple Service Data";
 answers[50] = 2;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5087. ";
 preguntaids[50] = 5087


//  Id pregunta: 5145 Año de creación de pregunta: 2004
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[51]= new Array();
 choices[51][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[51][1] = "Usa direcciones de 128 bits";
 choices[51][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[51][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[51] = 0;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5145. ";
 preguntaids[51] = 5145


//  Id pregunta: 5072 Año de creación de pregunta: 2002
 questions[52]= "53)  SIP es:";
 choices[52]= new Array();
 choices[52][0] = "una versi&oacute;n segura del protocolo IP";
 choices[52][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[52][2] = "protocolo para instalaciones de software";
 choices[52][3] = "nada de lo anterior";
 answers[52] = 1;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5072. ";
 preguntaids[52] = 5072


//  Id pregunta: 5065 Año de creación de pregunta: 2002
 questions[53]= "54)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[53]= new Array();
 choices[53][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[53][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[53][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[53][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[53] = 3;
 units[53] = ['114'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5065. ";
 preguntaids[53] = 5065


//  Id pregunta: 5093 Año de creación de pregunta: 2003
 questions[54]= "55)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[54]= new Array();
 choices[54][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[54][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[54][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[54][3] = "No es nada de lo anterior";
 answers[54] = 1;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5093. ";
 preguntaids[54] = 5093


//  Id pregunta: 5111 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[55]= new Array();
 choices[55][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[55][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[55][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[55][3] = "Ninguna de las opciones anteriores es correcta";
 answers[55] = 3;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5111. ";
 preguntaids[55] = 5111


//  Id pregunta: 5095 Año de creación de pregunta: 2004
 questions[56]= "57)  El protocolo ARP";
 choices[56]= new Array();
 choices[56][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[56][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[56][2] = "Se utiliza en routers y bridges";
 choices[56][3] = "A y B son correctas";
 answers[56] = 0;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5095. ";
 preguntaids[56] = 5095


//  Id pregunta: 5123 Año de creación de pregunta: 2003
 questions[57]= "58)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[57]= new Array();
 choices[57][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[57][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[57][2] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[57][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[57] = 0;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5123. Junta Andaluc&iacute;a";
 preguntaids[57] = 5123


//  Id pregunta: 5130 Año de creación de pregunta: 2004
 questions[58]= "59)  Es posible la transmisi&oacute;n de datos entre dispositivos que siguen el estandar 802.11a y dispositivos que siguen el estandar 802.11b";
 choices[58]= new Array();
 choices[58][0] = "S&iacute;, porque ambos son dispositivos inal&aacute;mbricos WiFi";
 choices[58][1] = "No, porque su radio m&aacute;ximo de acci&oacute;n es diferente";
 choices[58][2] = "No";
 choices[58][3] = "Si siempre que utilicen el mismo canal dentro de la banda de frecuencias en que transmiten.";
 answers[58] = 2;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5130. Porque operan en distintas frecuencias.";
 preguntaids[58] = 5130


//  Id pregunta: 5067 Año de creación de pregunta: 2002
 questions[59]= "60)  S-HTTP:";
 choices[59]= new Array();
 choices[59][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[59][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[59][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[59][3] = "Es un protocolo del nivel de transporte";
 answers[59] = 1;
 units[59] = ['120'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5067. ";
 preguntaids[59] = 5067


//  Id pregunta: 5091 Año de creación de pregunta: 2003
 questions[60]= "61)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Datos y TV a altas velocidades";
 choices[60][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[60][2] = "VSAT, video e Internet";
 choices[60][3] = "Datos, voz y video";
 answers[60] = 1;
 units[60] = ['117'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5091. ";
 preguntaids[60] = 5091


//  Id pregunta: 5129 Año de creación de pregunta: 2003
 questions[61]= "62)  La norma llamada WiMAX es:";
 choices[61]= new Array();
 choices[61][0] = "La norma IEEE 802.12";
 choices[61][1] = "Una norma WLAN europea elaborada por el Instituto Europeo de Normas de Telecomunicaciones (ETSI) y es similar a IEEE 802.11a";
 choices[61][2] = "Una norma inal&aacute;mbrica fija en condiciones de transmitir 32-56 km con velocidades m&aacute;ximas de datos cercanas a 70 Mbit/s";
 choices[61][3] = "Ninguna de las anteriores es cierta";
 answers[61] = 2;
 units[61] = ['108'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5129. ";
 preguntaids[61] = 5129


//  Id pregunta: 5062 Año de creación de pregunta: 2002
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[62]= new Array();
 choices[62][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[62][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[62][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[62][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[62] = 3;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5062. ";
 preguntaids[62] = 5062


//  Id pregunta: 5071 Año de creación de pregunta: 2002
 questions[63]= "64)  SIM equivale a:";
 choices[63]= new Array();
 choices[63][0] = "Software for IMSI of Mobiles";
 choices[63][1] = "Secure Identification of Mobile Subscriber";
 choices[63][2] = "Subscriber Identity Module";
 choices[63][3] = "Synchronous Internet Media";
 answers[63] = 2;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5071. ";
 preguntaids[63] = 5071


//  Id pregunta: 5120 Año de creación de pregunta: 2003
 questions[64]= "65)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[64]= new Array();
 choices[64][0] = "HDLC, LAPB y LAPD.";
 choices[64][1] = "SDLC, LAPB e ICMP.";
 choices[64][2] = "LAPB, LAPD y LAPH.";
 choices[64][3] = "HDLC, LAPB e ICMP.";
 answers[64] = 0;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5120. Junta Andaluc&iacute;a";
 preguntaids[64] = 5120


//  Id pregunta: 5105 Año de creación de pregunta: 2003
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[65]= new Array();
 choices[65][0] = "http, https.";
 choices[65][1] = "smtp, pop-3, mime.";
 choices[65][2] = "xml, xsl, xjar.";
 choices[65][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[65] = 2;
 units[65] = ['116'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5105. Junta Andaluc&iacute;a";
 preguntaids[65] = 5105


//  Id pregunta: 5121 Año de creación de pregunta: 2003
 questions[66]= "67)  En el nivel de Enlace del modelo OSI, parada-espera, adelante-atr&aacute;s, y rechazo selectivo, son:";
 choices[66]= new Array();
 choices[66][0] = "M&eacute;todos de detecci&oacute;n de errores.";
 choices[66][1] = "Mecanismos de solicitud de repetici&oacute;n autom&aacute;tica (ARQ).";
 choices[66][2] = "Protocolos de control de enlace de alto nivel.";
 choices[66][3] = "Procedimientos de acceso al enlace.";
 answers[66] = 1;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5121. Junta Andaluc&iacute;a";
 preguntaids[66] = 5121


//  Id pregunta: 5058 Año de creación de pregunta: 2002
 questions[67]= "68)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[67]= new Array();
 choices[67][0] = "Grado de servicio";
 choices[67][1] = "Alerting delay";
 choices[67][2] = "Bit error";
 choices[67][3] = "Todos son par&aacute;metros de calidad";
 answers[67] = 3;
 units[67] = ['114'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5058. ";
 preguntaids[67] = 5058


//  Id pregunta: 5073 Año de creación de pregunta: 2002
 questions[68]= "69)  SIP es:";
 choices[68]= new Array();
 choices[68][0] = "Particularizaci&oacute;n de GOSIP (Government OSI Profile) m&aacute;s ligera";
 choices[68][1] = "Un tipo de mensaje de H.323 para videotelefon&iacute;a";
 choices[68][2] = "Un protocolo de paquetizaci&oacute;n de voz que se ejecuta en los mediagateways";
 choices[68][3] = "Protocolo de voz sobre IP del IETF";
 answers[68] = 3;
 units[68] = ['107'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5073. ";
 preguntaids[68] = 5073


//  Id pregunta: 5081 Año de creación de pregunta: 2002
 questions[69]= "70)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:";
 choices[69]= new Array();
 choices[69][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[69][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[69][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[69][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[69] = 1;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5081. ";
 preguntaids[69] = 5081


//  Id pregunta: 5063 Año de creación de pregunta: 2002
 questions[70]= "71)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[70]= new Array();
 choices[70][0] = "802.1";
 choices[70][1] = "802.2";
 choices[70][2] = "802.3";
 choices[70][3] = "802.4";
 answers[70] = 2;
 units[70] = ['112'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 5063. ";
 preguntaids[70] = 5063


//  Id pregunta: 5059 Año de creación de pregunta: 2002
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "El mantenimiento del anillo se hace de forma centralizada en token ring y distribuida en token bus";
 choices[71][1] = "El mantenimiento del anillo se hace de forma centralizada en token ring y token bus";
 choices[71][2] = "El mantenimiento del anillo se hace de forma distribuida en token ring y token bus";
 choices[71][3] = "El mantenimiento del anillo se hace de forma centralizada en token bus y distribuida en token ring";
 answers[71] = 0;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5059. ";
 preguntaids[71] = 5059


//  Id pregunta: 5096 Año de creación de pregunta: 2004
 questions[72]= "73)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[72]= new Array();
 choices[72][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[72][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[72][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[72][3] = "Elimina el checksum del paquete";
 answers[72] = 2;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5096. ";
 preguntaids[72] = 5096


//  Id pregunta: 5079 Año de creación de pregunta: 2002
 questions[73]= "74)  SSL utiliza, entre otros, el siguiente algoritmo de cifrado sim&eacute;trico:";
 choices[73]= new Array();
 choices[73][0] = "AES";
 choices[73][1] = "LUCIFER";
 choices[73][2] = "2DES";
 choices[73][3] = "Ninguno de las anteriores";
 answers[73] = 0;
 units[73] = ['120'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5079. ";
 preguntaids[73] = 5079


//  Id pregunta: 5061 Año de creación de pregunta: 2002
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n falsa relativa a la t&eacute;cnica de multiplexaci&oacute;n en el &aacute;mbito de las comunicaciones:";
 choices[74]= new Array();
 choices[74][0] = "Mejora la calidad de la se&ntilde;al transmitida";
 choices[74][1] = "Sirve para establecer varias comunicaciones independientes en un solo enlace";
 choices[74][2] = "Se puede realizar utilizando divisi&oacute;n en frecuencia o divisi&oacute;n en el tiempo";
 choices[74][3] = "Permite aprovechar al m&aacute;ximo la capacidad del enlace";
 answers[74] = 0;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5061. ";
 preguntaids[74] = 5061


