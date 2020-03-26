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
//  Id pregunta: 6069 Año de creación de pregunta: 2003
 questions[0]= "1)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[0][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[0][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[0][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[0] = 3;
 units[0] = ['119', '120'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 6069. Examen TIC A1 MAP 2007";
 preguntaids[0] = 6069


//  Id pregunta: 5913 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[1]= new Array();
 choices[1][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[1][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[1][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[1][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[1] = 2;
 units[1] = ['106'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5913. ";
 preguntaids[1] = 5913


//  Id pregunta: 6087 Año de creación de pregunta: 2003
 questions[2]= "3)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[2]= new Array();
 choices[2][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[2][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[2][2] = "Las dos anteriores son ciertas";
 choices[2][3] = "Todas las anteriores son falsas";
 answers[2] = 2;
 units[2] = ['121'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6087. Examen TIC A1 MAP 2007";
 preguntaids[2] = 6087


//  Id pregunta: 6106 Año de creación de pregunta: 2003
 questions[3]= "4)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de envio) que utiliza el protocolo TCP para el control deflujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[3]= new Array();
 choices[3][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datostransmitido";
 choices[3][1] = "El tama&ntilde;o del b&uacute;fer de esta ventanas est&aacute; limitado a 4096 bytes";
 choices[3][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out";
 choices[3][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[3] = 0;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6106. Examen TIC A1 MAP 2007";
 preguntaids[3] = 6106


//  Id pregunta: 6063 Año de creación de pregunta: 2003
 questions[4]= "5)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[4]= new Array();
 choices[4][0] = "8 muestras/segundo.";
 choices[4][1] = "8000 muestras/segundo.";
 choices[4][2] = "16 muestras/segundo.";
 choices[4][3] = "4000 muestras/segundo.";
 answers[4] = 1;
 units[4] = ['117'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 6063. TIC B 2007";
 preguntaids[4] = 6063


//  Id pregunta: 5804 Año de creación de pregunta: 2009
 questions[5]= "6)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[5]= new Array();
 choices[5][0] = "4QAM y QPSK";
 choices[5][1] = "8QAM y QPSK";
 choices[5][2] = "16 QAM y QPSK";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 2;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5804. ";
 preguntaids[5] = 5804


//  Id pregunta: 5894 Año de creación de pregunta: 2007
 questions[6]= "7)  En que lenguaje esta especificada La MIB de SNMPv2";
 choices[6]= new Array();
 choices[6][0] = "XML";
 choices[6][1] = "HTML";
 choices[6][2] = "ASN1";
 choices[6][3] = "Java";
 answers[6] = 2;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5894. ";
 preguntaids[6] = 5894


//  Id pregunta: 5914 Año de creación de pregunta: 2007
 questions[7]= "8)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[7][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[7][2] = "SNA (System Network Architecture), de IBM";
 choices[7][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[7] = 3;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5914. ";
 preguntaids[7] = 5914


//  Id pregunta: 6089 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[8]= new Array();
 choices[8][0] = "PGR";
 choices[8][1] = "SMTP";
 choices[8][2] = "ICMP";
 choices[8][3] = "SNMP";
 answers[8] = 3;
 units[8] = ['114'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6089. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6089


//  Id pregunta: 6098 Año de creación de pregunta: 2003
 questions[9]= "10)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[9]= new Array();
 choices[9][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[9][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[9][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[9][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[9] = 1;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6098. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6098


//  Id pregunta: 5834 Año de creación de pregunta: 2007
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[10]= new Array();
 choices[10][0] = "Cookies.";
 choices[10][1] = "Spam.";
 choices[10][2] = "Netnannies.";
 choices[10][3] = "Brownies.";
 answers[10] = 3;
 units[10] = ['103'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5834. Examen 2006 JCYL";
 preguntaids[10] = 5834


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[11]= "12)  Los registros glue de una zona DNS son aquellos que:";
 choices[11]= new Array();
 choices[11][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[11][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[11][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[11][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[11] = 1;
 units[11] = ['103'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[11] = 5849


//  Id pregunta: 5973 Año de creación de pregunta: 2007
 questions[12]= "13)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[12]= new Array();
 choices[12][0] = "La preferencia local";
 choices[12][1] = "El agregado at&oacute;mico";
 choices[12][2] = "El pr&oacute;ximo salto";
 choices[12][3] = "El agregador";
 answers[12] = 2;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5973. ";
 preguntaids[12] = 5973


//  Id pregunta: 5944 Año de creación de pregunta: 2007
 questions[13]= "14)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[13]= new Array();
 choices[13][0] = "ARP (Address Resolution Protocol)";
 choices[13][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[13][2] = "BOOTP (Bootstrap Protocol)";
 choices[13][3] = "IGMP (Internet Group Management Protocol)";
 answers[13] = 2;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5944. ";
 preguntaids[13] = 5944


//  Id pregunta: 5805 Año de creación de pregunta: 2007
 questions[14]= "15)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[14]= new Array();
 choices[14][0] = "4G";
 choices[14][1] = "3.5G";
 choices[14][2] = "5G";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 1;
 units[14] = ['117'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5805. ";
 preguntaids[14] = 5805


//  Id pregunta: 5882 Año de creación de pregunta: 2007
 questions[15]= "16)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[15]= new Array();
 choices[15][0] = "Al Secretario de Estado  para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[15][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[15][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[15][3] = "Todas tienen competencia sancionadora";
 answers[15] = 2;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5882. ";
 preguntaids[15] = 5882


//  Id pregunta: 5822 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[16]= new Array();
 choices[16][0] = "802.1";
 choices[16][1] = "802.3";
 choices[16][2] = "802.11b";
 choices[16][3] = "802.3u";
 answers[16] = 2;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5822. Examen 2006 JCYL";
 preguntaids[16] = 5822


//  Id pregunta: 5885 Año de creación de pregunta: 2007
 questions[17]= "18)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, la gesti&oacute;n y control de los planes nacionales de numeraci&oacute;n corresponde a";
 choices[17]= new Array();
 choices[17][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[17][1] = "El Ministerio de Energia, Turismo y Agenda Digital";
 choices[17][2] = "El Gobierno";
 choices[17][3] = "La Agencia Estatal de Radiocomunicaciones";
 answers[17] = 1;
 units[17] = ['121'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5885. Nuevo Real Decreto 424/2016 (de estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales), asume las funciones del antiguo MINETUR";
 preguntaids[17] = 5885


//  Id pregunta: 5841 Año de creación de pregunta: 2009
 questions[18]= "19)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[18]= new Array();
 choices[18][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[18][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[18][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[18][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[18] = 3;
 units[18] = ['57', '119'];
 blocks[18] = ['B2', 'B4'];
 comments[18] = "Id Pregunta: 5841. Examen 2006 JCYL";
 preguntaids[18] = 5841


//  Id pregunta: 5918 Año de creación de pregunta: 2007
 questions[19]= "20)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[19]= new Array();
 choices[19][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[19][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[19][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[19][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5918. ";
 preguntaids[19] = 5918


//  Id pregunta: 5934 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[20]= new Array();
 choices[20][0] = "32";
 choices[20][1] = "64";
 choices[20][2] = "128";
 choices[20][3] = "256";
 answers[20] = 0;
 units[20] = ['105', '109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5934. ";
 preguntaids[20] = 5934


//  Id pregunta: 6057 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[21]= new Array();
 choices[21][0] = "DHCP.";
 choices[21][1] = "RARP.";
 choices[21][2] = "DNS.";
 choices[21][3] = "WINS.";
 answers[21] = 0;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6057. TIC B 2007";
 preguntaids[21] = 6057


//  Id pregunta: 5981 Año de creación de pregunta: 2007
 questions[22]= "23)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[22]= new Array();
 choices[22][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[22][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[22][2] = "Interconecta edificios en el entorno de un campus";
 choices[22][3] = "Interconecta a todo el cableado de un edificio";
 answers[22] = 1;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5981. ";
 preguntaids[22] = 5981


//  Id pregunta: 5886 Año de creación de pregunta: 2007
 questions[23]= "24)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, el espectro radioel&eacute;ctrico es un bien de dominio p&uacute;blico, cuya titularidad y administraci&oacute;n corresponden a";
 choices[23]= new Array();
 choices[23][0] = "El Gobierno";
 choices[23][1] = "La Agencia Estatal de Radiocomunicaciones";
 choices[23][2] = "El Estado";
 choices[23][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[23] = 2;
 units[23] = ['121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5886. ";
 preguntaids[23] = 5886


//  Id pregunta: 5835 Año de creación de pregunta: 2007
 questions[24]= "25)  El hipertexto es:";
 choices[24]= new Array();
 choices[24][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[24][1] = "Un documento HTML.";
 choices[24][2] = "Un documento HTML, XML o SGML.";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 0;
 units[24] = ['103'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5835. Examen 2006 JCYL";
 preguntaids[24] = 5835


//  Id pregunta: 5806 Año de creación de pregunta: 2009
 questions[25]= "26)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[25]= new Array();
 choices[25][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[25][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[25][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[25][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[25] = 3;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 5806. ";
 preguntaids[25] = 5806


//  Id pregunta: 6055 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[26]= new Array();
 choices[26][0] = "MIB (Management Information Base).";
 choices[26][1] = "PDU (Packet Data Unit).";
 choices[26][2] = "CMIS (Common Management Information Services).";
 choices[26][3] = "SMI (Structure of Management Information).";
 answers[26] = 3;
 units[26] = ['114'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6055. TIC B 2007";
 preguntaids[26] = 6055


//  Id pregunta: 5963 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[27][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[27][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[27][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[27] = 2;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5963. ";
 preguntaids[27] = 5963


//  Id pregunta: 6079 Año de creación de pregunta: 2003
 questions[28]= "29)  El protocolo DHCP (&quot;Dynamic Host Configuration Protocol&quot;) permite:";
 choices[28]= new Array();
 choices[28][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[28][1] = "Eliminar paquetes TCP (Transmission Control Protocol)";
 choices[28][2] = "Asignar din&aacute;micamente direcciones IP";
 choices[28][3] = "Enrutar paquetes IP";
 answers[28] = 2;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6079. Examen TIC A1 MAP 2007";
 preguntaids[28] = 6079


//  Id pregunta: 5945 Año de creación de pregunta: 2007
 questions[29]= "30)  La Ley Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a suprestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[29]= new Array();
 choices[29][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad delterritorio nacional";
 choices[29][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado";
 choices[29][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, con sujeci&oacute;n a los principios de eficiencia, objetividad, transparencia y no discriminaci&oacute;n sin excluir a priori la designaci&oacute;n de ninguna empresa. En todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[29][3] = "La primera designaci&oacute;n de operador responsable de la prestaci&oacute;n del servicio universal se realiz&oacute; la citadaLey, y recay&oacute; en Telef&oacute;nica de Espa&ntilde;a, hasta el 31 de diciembre de 2005, en su condici&oacute;n de operadordominante en la prestaci&oacute;n del servicio telef&oacute;nico fijo";
 answers[29] = 2;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5945. ";
 preguntaids[29] = 5945


//  Id pregunta: 6061 Año de creación de pregunta: 2003
 questions[30]= "31)  Cu&aacute;l de las siguientes tecnolog&iacute;as xDSL proporciona mayor velocidad m&aacute;xima te&oacute;rica para la descarga deinformaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "ADSL2+.";
 choices[30][1] = "VDSL.";
 choices[30][2] = "SDSL.";
 choices[30][3] = "HDSL.";
 answers[30] = 1;
 units[30] = ['108'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6061. TIC B 2007";
 preguntaids[30] = 6061


//  Id pregunta: 5820 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[31]= new Array();
 choices[31][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[31][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[31][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[31][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[31] = 1;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5820. Examen 2006 JCYL";
 preguntaids[31] = 5820


//  Id pregunta: 5862 Año de creación de pregunta: 2009
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;&oacute; para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[32]= new Array();
 choices[32][0] = "GSM 900";
 choices[32][1] = "TACS";
 choices[32][2] = "DECT";
 choices[32][3] = "PAS";
 answers[32] = 2;
 units[32] = ['117'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5862. ";
 preguntaids[32] = 5862


//  Id pregunta: 5919 Año de creación de pregunta: 2007
 questions[33]= "34)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[33]= new Array();
 choices[33][0] = "La gesti&oacute;n de la movilidad";
 choices[33][1] = "El cifrado y autenticaci&oacute;n";
 choices[33][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[33][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[33] = 3;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5919. ";
 preguntaids[33] = 5919


//  Id pregunta: 6005 Año de creación de pregunta: 2003
 questions[34]= "35)  Entre los objetos utilizados por ADO.NET, no se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "DataSet.";
 choices[34][1] = "DataReader.";
 choices[34][2] = "DataRequest.";
 choices[34][3] = "DataAdapter.";
 answers[34] = 2;
 units[34] = ['115'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6005. TIC B 2007";
 preguntaids[34] = 6005


//  Id pregunta: 5819 Año de creación de pregunta: 2007
 questions[35]= "36)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[35]= new Array();
 choices[35][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[35][1] = "Tiene m&aacute;s ancho de banda";
 choices[35][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[35][3] = "Tiene mayor atenuaci&oacute;n";
 answers[35] = 1;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5819. Examen 2006 JCYL";
 preguntaids[35] = 5819


//  Id pregunta: 5953 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[36]= new Array();
 choices[36][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[36][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[36][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[36][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5953. ";
 preguntaids[36] = 5953


//  Id pregunta: 6101 Año de creación de pregunta: 2003
 questions[37]= "38)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[37]= new Array();
 choices[37][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[37][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz";
 choices[37][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[37][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz";
 answers[37] = 2;
 units[37] = ['108'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6101. Examen TIC A1 MAP 2007";
 preguntaids[37] = 6101


//  Id pregunta: 5863 Año de creación de pregunta: 2007
 questions[38]= "39)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[38]= new Array();
 choices[38][0] = "Iu";
 choices[38][1] = "Iub";
 choices[38][2] = "Gi";
 choices[38][3] = "Gb";
 answers[38] = 0;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5863. ";
 preguntaids[38] = 5863


//  Id pregunta: 6044 Año de creación de pregunta: 2003
 questions[39]= "40)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[39]= new Array();
 choices[39][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[39][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[39][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[39][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[39] = 2;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6044. TIC B 2007";
 preguntaids[39] = 6044


//  Id pregunta: 5878 Año de creación de pregunta: 2007
 questions[40]= "41)  En el marco de las redes telem&aacute;ticas transeruopeas, la red s-TESTA";
 choices[40]= new Array();
 choices[40][0] = "Es la red Transversal Espa&ntilde;ola de Servicios Telem&aacute;ticos entre Administraciones, encargada de interconectar las distintas administraciones auton&oacute;micas";
 choices[40][1] = "Es una red IP aislada de Internet que interconecta las redes administrativas de los Estados miembros y de las Agencias e Instituciones europeas";
 choices[40][2] = "Es una red basada en tecnolog&iacute;a inal&aacute;mbrica, que pretende dar cobertura para el aacceso libre a Internet a todos los ciudadanos de la Uni&oacute;n Europea";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 1;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5878. ";
 preguntaids[40] = 5878


//  Id pregunta: 6082 Año de creación de pregunta: 2003
 questions[41]= "42)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[41]= new Array();
 choices[41][0] = "ET 301-192";
 choices[41][1] = "ET 202-125";
 choices[41][2] = "ET 125-100";
 choices[41][3] = "ET 100-200";
 answers[41] = 0;
 units[41] = ['107', '108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6082. Examen TIC A1 MAP 2007";
 preguntaids[41] = 6082


//  Id pregunta: 5838 Año de creación de pregunta: 2007
 questions[42]= "43)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[42]= new Array();
 choices[42][0] = "Internic.es";
 choices[42][1] = "Red.es";
 choices[42][2] = "Mityc.es";
 choices[42][3] = "Netsol.es";
 answers[42] = 1;
 units[42] = ['103'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5838. Examen 2006 JCYL";
 preguntaids[42] = 5838


//  Id pregunta: 5982 Año de creación de pregunta: 2007
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[43]= new Array();
 choices[43][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[43][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[43][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[43][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[43] = 0;
 units[43] = ['114'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5982. ";
 preguntaids[43] = 5982


//  Id pregunta: 6056 Año de creación de pregunta: 2003
 questions[44]= "45)  Elena es una funcionaria que gracias a las nuevas medidas de conciliaci&oacute;n de la vida familiar y laboral trabajadesde su casa (teletrabajo) acudiendo al Ministerio puntualmente. Elena se conecta diariamente por Internet alhost ministerial, cuya direcci&oacute;n IP es 60.47.112.6. El ordenador cliente de Elena ayer ten&iacute;a la direcci&oacute;n IP192.168.0.3. Hoy se ha conectado de nuevo, y sin embargo su direcci&oacute;n IP es 192.168.0.2. Esto ocurre porque:";
 choices[44]= new Array();
 choices[44][0] = "El proveedor de acceso a Internet que utiliza Elena tiene un servidor DHCP (Dinamic Host ConfigurationProtocol) que asigna a Elena una direcci&oacute;n temporal en cada sesi&oacute;n.";
 choices[44][1] = "El proveedor de acceso a Internet que utiliza Elena utiliza un protocolo UTP que disminuye la direcci&oacute;n de losclientes en un octeto cada vez.";
 choices[44][2] = "Elena ha cambiado su tarjeta de acceso Ethernet de una con direcci&oacute;n A1-BD-33-6E-C7-BB a otra con direcci&oacute;nA1-BD-33-6E-C7-BA.";
 choices[44][3] = "Elena est&aacute; utilizando una conexi&oacute;n Wifi.";
 answers[44] = 0;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6056. TIC B 2007";
 preguntaids[44] = 6056


//  Id pregunta: 5902 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[45]= new Array();
 choices[45][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[45][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[45][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[45][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[45] = 3;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5902. ";
 preguntaids[45] = 5902


//  Id pregunta: 6096 Año de creación de pregunta: 2003
 questions[46]= "47)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[46]= new Array();
 choices[46][0] = "El puerto 20";
 choices[46][1] = "El puerto 21";
 choices[46][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[46][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[46] = 3;
 units[46] = ['103'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6096. Examen TIC A1 MAP 2007";
 preguntaids[46] = 6096


//  Id pregunta: 6107 Año de creación de pregunta: 2003
 questions[47]= "48)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[47]= new Array();
 choices[47][0] = "1522 bytes";
 choices[47][1] = "1500 bytes";
 choices[47][2] = "1496 bytes";
 choices[47][3] = "1518 bytes";
 answers[47] = 0;
 units[47] = ['106'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6107. Examen TIC A1 MAP 2007";
 preguntaids[47] = 6107


//  Id pregunta: 5911 Año de creación de pregunta: 2007
 questions[48]= "49)  El protocolo IPv6 (Internet Protocol version 6):";
 choices[48]= new Array();
 choices[48][0] = "Tiene direcciones de red de 64 bits de longitud";
 choices[48][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento(routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header)";
 choices[48][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menoscampos. Esto hace que, por lo general, los routersrealicen menos procesamiento sobre losdatagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente";
 choices[48][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5911. ";
 preguntaids[48] = 5911


//  Id pregunta: 5924 Año de creación de pregunta: 2007
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[49]= new Array();
 choices[49][0] = "10.172.13.65";
 choices[49][1] = "172.16.223.125";
 choices[49][2] = "172.64.12.29";
 choices[49][3] = "192.168.23.252";
 answers[49] = 2;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5924. ";
 preguntaids[49] = 5924


//  Id pregunta: 5984 Año de creación de pregunta: 2007
 questions[50]= "51)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[50]= new Array();
 choices[50][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[50][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[50][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[50][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[50] = 3;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5984. ";
 preguntaids[50] = 5984


//  Id pregunta: 6054 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[51]= new Array();
 choices[51][0] = "802.6.";
 choices[51][1] = "802.3.";
 choices[51][2] = "802.4.";
 choices[51][3] = "802.5.";
 answers[51] = 1;
 units[51] = ['112'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6054. TIC B 2007";
 preguntaids[51] = 6054


//  Id pregunta: 5875 Año de creación de pregunta: 2007
 questions[52]= "53)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo 1ue el par trenzado apantallado (STP) debido a que";
 choices[52]= new Array();
 choices[52][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[52][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, resulta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[52][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos fiables que los de STP (RJ 11)";
 choices[52][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[52] = 0;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5875. ";
 preguntaids[52] = 5875


//  Id pregunta: 5864 Año de creación de pregunta: 2009
 questions[53]= "54)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[53]= new Array();
 choices[53][0] = "Frame Relay";
 choices[53][1] = "ATM";
 choices[53][2] = "VPLS";
 choices[53][3] = "Cualquiera";
 answers[53] = 1;
 units[53] = ['117'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5864. ";
 preguntaids[53] = 5864


//  Id pregunta: 5881 Año de creación de pregunta: 2007
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[54]= new Array();
 choices[54][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[54][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[54][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[54][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[54] = 0;
 units[54] = ['121'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5881. ";
 preguntaids[54] = 5881


//  Id pregunta: 5935 Año de creación de pregunta: 2007
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[55]= new Array();
 choices[55][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[55][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y video";
 choices[55][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[55][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[55] = 0;
 units[55] = ['109', '122'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5935. ";
 preguntaids[55] = 5935


//  Id pregunta: 6058 Año de creación de pregunta: 2003
 questions[56]= "57)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con SMTP (Simple Mail Transfer Protocol), definido en la RFC821:";
 choices[56]= new Array();
 choices[56][0] = "Puede transmitir ficheros ejecutables y objetos binarios en general.";
 choices[56][1] = "Se crea para superar las deficiencias de MIME (Multipurpose Internet Mail Extensi&oacute;n).";
 choices[56][2] = "Se limita a caracteres ASCII de 7 bits.";
 choices[56][3] = "Es un protocolo de nivel de Presentaci&oacute;n del modelo OSI.";
 answers[56] = 2;
 units[56] = ['116'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6058. TIC B 2007";
 preguntaids[56] = 6058


//  Id pregunta: 5954 Año de creación de pregunta: 2007
 questions[57]= "58)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[57]= new Array();
 choices[57][0] = "Es una infracci&oacute;n muy grave";
 choices[57][1] = "Es una infracci&oacute;n grave";
 choices[57][2] = "Es una infracci&oacute;n leve";
 choices[57][3] = "No es una infracci&oacute;n";
 answers[57] = 0;
 units[57] = ['121'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5954. ";
 preguntaids[57] = 5954


//  Id pregunta: 6073 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[58]= new Array();
 choices[58][0] = "ADSL";
 choices[58][1] = "Grupos noticias (news)";
 choices[58][2] = "FTP";
 choices[58][3] = "IRC";
 answers[58] = 0;
 units[58] = ['103'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 6073. Examen TIC A1 MAP 2007";
 preguntaids[58] = 6073


//  Id pregunta: 5964 Año de creación de pregunta: 2007
 questions[59]= "60)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NOgarantiza:";
 choices[59]= new Array();
 choices[59][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadoresregistrados a nivel nacional";
 choices[59][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;nfija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[59][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general den&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[59][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfagarazonablemente las necesidades de los usuarios finales";
 answers[59] = 0;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5964. ";
 preguntaids[59] = 5964


//  Id pregunta: 6067 Año de creación de pregunta: 2003
 questions[60]= "61)  Seg&uacute;n la ley 9/2014, General de Telecomunicaciones, la competencia de control e inspecci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico corresponde a:";
 choices[60]= new Array();
 choices[60][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[60][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[60][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[60][3] = "La Sociedad Estatal de Control e Inspecci&oacute;n Radioel&eacute;ctrica.";
 answers[60] = 0;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6067. TIC B 2007";
 preguntaids[60] = 6067


//  Id pregunta: 6066 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave, seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[61]= new Array();
 choices[61][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[61][1] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[61][2] = "Carecer de los preceptivos cuadros de tarifas o de precios exigidos por la normativa vigente.";
 choices[61][3] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 answers[61] = 0;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6066. TIC B 2007";
 preguntaids[61] = 6066


//  Id pregunta: 5925 Año de creación de pregunta: 2007
 questions[62]= "63)  Una red ATM (Asynchronous Transfer Mode):";
 choices[62]= new Array();
 choices[62][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[62][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[62][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[62][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[62] = 2;
 units[62] = ['107'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5925. ";
 preguntaids[62] = 5925


//  Id pregunta: 5821 Año de creación de pregunta: 2007
 questions[63]= "64)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[63]= new Array();
 choices[63][0] = "las frecuencias usadas";
 choices[63][1] = "los adaptadores usados";
 choices[63][2] = "la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = 2;
 units[63] = ['104'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5821. Examen 2006 JCYL";
 preguntaids[63] = 5821


//  Id pregunta: 5876 Año de creación de pregunta: 2007
 questions[64]= "65)  La diferencia esencial entre TCP y UDP es";
 choices[64]= new Array();
 choices[64][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[64][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[64][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[64][3] = "Todas las anteriores son ciertas";
 answers[64] = 0;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5876. ";
 preguntaids[64] = 5876


//  Id pregunta: 5912 Año de creación de pregunta: 2007
 questions[65]= "66)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[65]= new Array();
 choices[65][0] = "802.11e";
 choices[65][1] = "802.11f";
 choices[65][2] = "802.11h";
 choices[65][3] = "802.11i";
 answers[65] = 1;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 5912. ";
 preguntaids[65] = 5912


//  Id pregunta: 5848 Año de creación de pregunta: 2007
 questions[66]= "67)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[66]= new Array();
 choices[66][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[66][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[66][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[66][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[66] = 2;
 units[66] = ['103'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5848. Examen 2006 JCYL";
 preguntaids[66] = 5848


//  Id pregunta: 6052 Año de creación de pregunta: 2003
 questions[67]= "68)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[67]= new Array();
 choices[67][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[67][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[67][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[67][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[67] = 1;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6052. TIC B 2007";
 preguntaids[67] = 6052


//  Id pregunta: 6053 Año de creación de pregunta: 2003
 questions[68]= "69)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Repetidores.";
 choices[68][1] = "Routers.";
 choices[68][2] = "Bridges.";
 choices[68][3] = "Gateways.";
 answers[68] = 3;
 units[68] = ['102'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6053. TIC B 2007";
 preguntaids[68] = 6053


//  Id pregunta: 5823 Año de creación de pregunta: 2007
 questions[69]= "70)  En la tecnolog&iacute;a de comunicaciones RDSI, los canales se dividen en";
 choices[69]= new Array();
 choices[69][0] = "A, B y C";
 choices[69][1] = "I, II y III";
 choices[69][2] = "B1, B2 y B3";
 choices[69][3] = "B, D y H";
 answers[69] = 3;
 units[69] = ['108'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5823. Examen 2006 JCYL";
 preguntaids[69] = 5823


//  Id pregunta: 6092 Año de creación de pregunta: 2003
 questions[70]= "71)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[70]= new Array();
 choices[70][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[70][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[70][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[70][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[70] = 1;
 units[70] = ['107'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6092. Examen TIC A1 MAP 2007";
 preguntaids[70] = 6092


//  Id pregunta: 5903 Año de creación de pregunta: 2007
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and ElectronicsEngineers) 802.11 es cierta?";
 choices[71]= new Array();
 choices[71][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-sequence Spread Spectrum)";
 choices[71][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-hopping spread spectrum)";
 choices[71][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal Frequency-divisionMultiplexing)";
 choices[71][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing)";
 answers[71] = 0;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5903. ";
 preguntaids[71] = 5903


//  Id pregunta: 5877 Año de creación de pregunta: 2007
 questions[72]= "73)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[72]= new Array();
 choices[72][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[72][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[72][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[72][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[72] = 1;
 units[72] = ['107'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5877. ";
 preguntaids[72] = 5877


//  Id pregunta: 6062 Año de creación de pregunta: 2003
 questions[73]= "74)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[73]= new Array();
 choices[73][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[73][1] = "La presencia de derivaciones puenteadas.";
 choices[73][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[73][3] = "La interferencia de acoplamientos cruzados.";
 answers[73] = 2;
 units[73] = ['108'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6062. TIC B 2007";
 preguntaids[73] = 6062


//  Id pregunta: 6064 Año de creación de pregunta: 2003
 questions[74]= "75)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[74]= new Array();
 choices[74][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[74][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[74][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[74][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[74] = 0;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 6064. TIC B 2007";
 preguntaids[74] = 6064


