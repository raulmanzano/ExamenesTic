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
//  Id pregunta: 1514 Año de creación de pregunta: 2016
 questions[0]= "1)  En relaci&oacute;n al software criptogr&aacute;fico GPG, es cierto que:";
 choices[0]= new Array();
 choices[0][0] = "Son las siglas de Great Privacy Group.";
 choices[0][1] = "Es una versi&oacute;n propietaria de PGP.";
 choices[0][2] = "Cifra los mensajes usando pares de claves individuales asim&eacute;tricas generadas por los usuarios.";
 choices[0][3] = "Usa tres algoritmos: IDEA, AES y 3DES.";
 answers[0] = 2;
 units[0] = ['77'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1514. ";
 preguntaids[0] = 1514


//  Id pregunta: 2489 Año de creación de pregunta: 2004
 questions[1]= "2)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Certificados";
 choices[1][1] = "Single Sign On";
 choices[1][2] = "Kerberos";
 choices[1][3] = "NetBios";
 answers[1] = 3;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2489. Similar a examen TIC SS A 2004";
 preguntaids[1] = 2489


//  Id pregunta: 2763 Año de creación de pregunta: 2002
 questions[2]= "3)  Entrust:";
 choices[2]= new Array();
 choices[2][0] = "Un algoritmo criptogr&aacute;fico";
 choices[2][1] = "Un mecanismo de intercambio de claves";
 choices[2][2] = "Una infraestructura de clave p&uacute;blica (PKI)";
 choices[2][3] = "Una funcion resumen";
 answers[2] = 2;
 units[2] = ['77'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2763. ";
 preguntaids[2] = 2763


//  Id pregunta: 2539 Año de creación de pregunta: 2004
 questions[3]= "4)  Con respecto a la seguridad:";
 choices[3]= new Array();
 choices[3][0] = "PGP basa su modelo en la existencia de una entidad de certificacion";
 choices[3][1] = "Si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[3][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 3;
 units[3] = ['77'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2539. ";
 preguntaids[3] = 2539


//  Id pregunta: 1882 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[4]= new Array();
 choices[4][0] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita en relaci&oacute;n con los datos consignados en papel.";
 choices[4][1] = "Tienen una validez de 6 anos como m&aacute;ximo";
 choices[4][2] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[4][3] = "Solo son validos para las personas jur&iacute;dicas.";
 answers[4] = 2;
 units[4] = ['77'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1882. ";
 preguntaids[4] = 1882


//  Id pregunta: 3157 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[5]= new Array();
 choices[5][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[5][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[5][2] = "La velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave";
 choices[5][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[5] = 1;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3157. ";
 preguntaids[5] = 3157


//  Id pregunta: 1794 Año de creación de pregunta: 2016
 questions[6]= "7)  El proyecto STORK es un:";
 choices[6]= new Array();
 choices[6][0] = "Proyecto para conseguir el reconocimiento paneuropeo de las identidades electr&oacute;nicas y, en concreto, la aceptaci&oacute;n del DNI electr&oacute;nico e identificadores similares en Servicios de Administraci&oacute;n Electr&oacute;nica de otras administraciones europeas.";
 choices[6][1] = "Proyecto para conseguir la interoperabilidad del documento de identificaci&oacute;n nacional entre los estados de la Uni&oacute;n Europea.";
 choices[6][2] = "Proyecto para conseguir la interconexi&oacute;n de las redes administrativas europeas.";
 choices[6][3] = "Proyecto para conseguir el reconocimiento paneuropeo de la definici&oacute;n y metadatos requeridos del documento electr&oacute;nico, con el fin &uacute;ltimo de la interconexi&oacute;n de registros administrativos.";
 answers[6] = 0;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1794. ";
 preguntaids[6] = 1794


//  Id pregunta: 2669 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[7]= new Array();
 choices[7][0] = "Agente de usuario del directorio (DUA)";
 choices[7][1] = "Agentes del sistema de directorio (DSA)";
 choices[7][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[7][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[7] = 3;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2669. ";
 preguntaids[7] = 2669


//  Id pregunta: 1797 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique cu&aacute;l de las siguientes afirmaciones con respecto al sellado de tiempo es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que los datos suministrados han existido y no han sido alterados desde un instante espec&iacute;fico en el tiempo";
 choices[8][1] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que un documento electr&oacute;nico ha sido firmado en un momento en el tiempo concreto.";
 choices[8][2] = "Es una firma electr&oacute;nica realizada por una TSA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 choices[8][3] = "Es una firma electr&oacute;nica sincronizada con el ROA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 answers[8] = 0;
 units[8] = ['77'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1797. ";
 preguntaids[8] = 1797


//  Id pregunta: 1884 Año de creación de pregunta: 2016
 questions[9]= "10)  Cuando se dispone de una tarjeta criptogr&aacute;fica para almacenar la clave privada, &iquest;Cu&aacute;l es el procedimiento m&aacute;s usual para firmar un documento?:";
 choices[9]= new Array();
 choices[9][0] = "Se transfiere a la tarjeta un &quot;hash&quot; del documento a firmar y esta devuelve la firma";
 choices[9][1] = "Se transfiere a la tarjeta el documento a firmar y esta devuelve la firma";
 choices[9][2] = "EI explorador de Internet calcula un &quot;hash&quot; del documento a firmar, obtiene la clave privada de la tarjeta y cifra el &quot;hash&quot; con ella.";
 choices[9][3] = "EI explorador de Internet obtiene la clave privada de la tarjeta, y firma el documento directamente.";
 answers[9] = 0;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1884. ";
 preguntaids[9] = 1884


//  Id pregunta: 2618 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[10]= new Array();
 choices[10][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[10][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[10][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diversos organismos";
 choices[10][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[10] = 0;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2618. ";
 preguntaids[10] = 2618


//  Id pregunta: 1094 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL):";
 choices[11]= new Array();
 choices[11][0] = "Permiten conocer el estado de un certificado en el instante de la consulta.";
 choices[11][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[11][2] = "Deben ser expedidas por las mismas Autoridades que emiten los certificados revocados.";
 choices[11][3] = "Pueden contener s&oacute;lo certificados revocados desde la expedici&oacute;n de una CRL b&aacute;sica, en cuyo caso se denominan delta CRL.";
 answers[11] = 3;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1094. ";
 preguntaids[11] = 1094


//  Id pregunta: 5512 Año de creación de pregunta: 2007
 questions[12]= "13)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[12]= new Array();
 choices[12][0] = "IPSec (IP Security).";
 choices[12][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[12][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[12][3] = "WEP (Wired Equivalent Privacy).";
 answers[12] = 1;
 units[12] = ['77'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5512. ";
 preguntaids[12] = 5512


//  Id pregunta: 3067 Año de creación de pregunta: 2002
 questions[13]= "14)  TTP:";
 choices[13]= new Array();
 choices[13][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[13][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[13][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[13][3] = "Todas son falsas";
 answers[13] = 2;
 units[13] = ['77', '78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3067. ";
 preguntaids[13] = 3067


//  Id pregunta: 1403 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la recomendaci&oacute;n XMLDsig de W3C, la firma digital de tipo enveloped signature cumple que:";
 choices[14]= new Array();
 choices[14][0] = "La firma y el documento firmado son dos ficheros diferentes.";
 choices[14][1] = "EI documento firmado va dentro de la firma.";
 choices[14][2] = "La firma va al final del documento firmado como un elemento adiciona!.";
 choices[14][3] = "La firma se inserta en el primer elemento XML del documento.";
 answers[14] = 2;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1403. ";
 preguntaids[14] = 1403


//  Id pregunta: 3227 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[15]= new Array();
 choices[15][0] = "La clave p&uacute;blica del titular.";
 choices[15][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[15][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[15][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[15] = 2;
 units[15] = ['77'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3227. Junta Andaluc&iacute;a";
 preguntaids[15] = 3227


//  Id pregunta: 2627 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[16]= new Array();
 choices[16][0] = "MIME";
 choices[16][1] = "LDAP";
 choices[16][2] = "SMNP";
 choices[16][3] = "BGP";
 answers[16] = 1;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2627. ";
 preguntaids[16] = 2627


//  Id pregunta: 1880 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, en relaci&oacute;n con las Listas de Certificados Revocados (CRL), &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[17]= new Array();
 choices[17][0] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[17][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[17][2] = "Deben actualizarse al menos una vez a la semana.";
 choices[17][3] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 answers[17] = 0;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1880. ";
 preguntaids[17] = 1880


//  Id pregunta: 3202 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[18]= new Array();
 choices[18][0] = "DIT";
 choices[18][1] = "WMI";
 choices[18][2] = "DN";
 choices[18][3] = "RDN";
 answers[18] = 1;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3202. ";
 preguntaids[18] = 3202


//  Id pregunta: 2693 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; servicio proporciona a los usuarios el servicio de directorio X.500?:";
 choices[19]= new Array();
 choices[19][0] = "Dar facilidades para consultar informaci&oacute;n acerca de objetos accesibles en una red";
 choices[19][1] = "Facilitar direcciones y nombre de usuarios accesibles en una red";
 choices[19][2] = "Realizar las funciones de direccionamiento y nomenclatura de usuarios de un sistema de tratamiento de mensajes seg&uacute;n la norma X.400";
 choices[19][3] = "Controlar las peticiones de registro de usuario por medio de agentes de sistema (DSA) y mantenimiento de la base de informaci&oacute;n de directorio (DIB)";
 answers[19] = 0;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2693. ";
 preguntaids[19] = 2693


//  Id pregunta: 2931 Año de creación de pregunta: 2002
 questions[20]= "21)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[20]= new Array();
 choices[20][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[20][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[20][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[20][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[20] = 2;
 units[20] = ['77', '78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2931. ";
 preguntaids[20] = 2931


//  Id pregunta: 3215 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[21]= new Array();
 choices[21][0] = "RPC.";
 choices[21][1] = "X-500.";
 choices[21][2] = "ORB.";
 choices[21][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[21] = 1;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3215. ";
 preguntaids[21] = 3215


//  Id pregunta: 2840 Año de creación de pregunta: 2002
 questions[22]= "23)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[22]= new Array();
 choices[22][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[22][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[22][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[22][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[22] = 1;
 units[22] = ['77'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2840. ";
 preguntaids[22] = 2840


//  Id pregunta: 1881 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la recomendaci&oacute;n X.509 v3:";
 choices[23]= new Array();
 choices[23][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[23][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[23][2] = "Para su validez, los certificados de atributos deben contener un certificado de clave p&uacute;blica.";
 choices[23][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1881. ";
 preguntaids[23] = 1881


//  Id pregunta: 2734 Año de creación de pregunta: 2002
 questions[24]= "25)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[24]= new Array();
 choices[24][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[24][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[24][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[24][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[24] = 2;
 units[24] = ['77'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2734. ";
 preguntaids[24] = 2734


//  Id pregunta: 3230 Año de creación de pregunta: 2003
 questions[25]= "26)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[25]= new Array();
 choices[25][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[25][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[25][2] = "Dos mensajes parecidos producen huellas digitales diferentes";
 choices[25][3] = "La funci&oacute;n hash es reversible";
 answers[25] = 3;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3230. ";
 preguntaids[25] = 3230


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[26]= new Array();
 choices[26][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[26][1] = "Haber sido creada utilizando un dispositivo avanzado de creaci&oacute;n de firmas electr&oacute;nicas";
 choices[26][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[26][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificaci&oacute;n ulterior de los mismos sea detectable";
 answers[26] = 1;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 788. Reglamento 910/2014";
 preguntaids[26] = 788


//  Id pregunta: 1276 Año de creación de pregunta: 2016
 questions[27]= "28)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda.";
 choices[27][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros.";
 choices[27][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[27][3] = "Es una competencia auton&oacute;mica,";
 answers[27] = 2;
 units[27] = ['77'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1276. ";
 preguntaids[27] = 1276


//  Id pregunta: 2542 Año de creación de pregunta: 2009
 questions[28]= "29)  En los servicios de directorio";
 choices[28]= new Array();
 choices[28][0] = "varias entradas pueden compartir un DN";
 choices[28][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[28][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[28][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[28] = 2;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2542. ";
 preguntaids[28] = 2542


//  Id pregunta: 1101 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique la afirmaci&oacute;n correcta respecto a XAdES-T:";
 choices[29]= new Array();
 choices[29][0] = "Contiene la forma b&aacute;sica de firma que cumple los requisitos legales de la Directiva para firma electr&oacute;nica avanzada, informaci&oacute;n sobre la pol&iacute;tica de firma (opcional) y a&ntilde;ade un campo de sellado de tiempo para proteger contra el repudio.";
 choices[29][1] = "Es la forma b&aacute;sica de firma a la que se la ha a&ntilde;adido informaci&oacute;n sobre la pol&iacute;tica de firma.";
 choices[29][2] = "A&ntilde;ade a la forma b&aacute;sica de firma la posibilidad de timestamping peri&oacute;dico de documentos archivados para prevenir que puedan ser comprometidos debido a la debilidad de la firma durante un periodo largo de almacenamiento.";
 choices[29][3] = "A&ntilde;ade sellos de tiempo a las referencias introducidas por XAdES-C para evitar que pueda verse comprometida en el futuro una cadena de certificados.";
 answers[29] = 0;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1101. ";
 preguntaids[29] = 1101


//  Id pregunta: 1070 Año de creación de pregunta: 2016
 questions[30]= "31)  En el entorno de la firma electr&oacute;nica y la identidad electr&oacute;nica, STORK identifica:";
 choices[30]= new Array();
 choices[30][0] = "Un proyecto financiado por la Comisi&oacute;n Europea para establecer la interoperabilidad de las identidades electr&oacute;nicas de los Estados Miembros.";
 choices[30][1] = "A la PKI desplegada por la Comisi&oacute;n Europea para la futura carta de identidad electr&oacute;nica europea.";
 choices[30][2] = "La implementaci&oacute;n opensource realizada por la Comisi&oacute;n Europea de un cliente de firma electr&oacute;nica.";
 choices[30][3] = "El consorcio de fabricantes e industria Europea relacionado con la firma electr&oacute;nica e identidad electr&oacute;nica.";
 answers[30] = 0;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1070. ";
 preguntaids[30] = 1070


//  Id pregunta: 2974 Año de creación de pregunta: 2002
 questions[31]= "32)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[31]= new Array();
 choices[31][0] = "RSA Public Key Structure";
 choices[31][1] = "X.509v3 de ITU";
 choices[31][2] = "RFC 1661 de IAB";
 choices[31][3] = "Verisign doc 1992/21";
 answers[31] = 1;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2974. ";
 preguntaids[31] = 2974


//  Id pregunta: 3468 Año de creación de pregunta: 2006
 questions[32]= "33)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[32]= new Array();
 choices[32][0] = "Aplicaci&oacute;n";
 choices[32][1] = "Transporte";
 choices[32][2] = "Red";
 choices[32][3] = "Sesi&oacute;n";
 answers[32] = 0;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3468. ";
 preguntaids[32] = 3468


//  Id pregunta: 5433 Año de creación de pregunta: 2007
 questions[33]= "34)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[33]= new Array();
 choices[33][0] = "READ";
 choices[33][1] = "COMPARE";
 choices[33][2] = "ADD";
 choices[33][3] = "ABANDON";
 answers[33] = 0;
 units[33] = ['77'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5433. ";
 preguntaids[33] = 5433


//  Id pregunta: 2936 Año de creación de pregunta: 2005
 questions[34]= "35)  Los DN, en LDAP, se representan en:";
 choices[34]= new Array();
 choices[34][0] = "XML";
 choices[34][1] = "HTML";
 choices[34][2] = "Texto plano";
 choices[34][3] = "ASN.1";
 answers[34] = 2;
 units[34] = ['77', '78'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2936. RFC 4514";
 preguntaids[34] = 2936


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[35]= new Array();
 choices[35][0] = "Directiva 95/46/CE";
 choices[35][1] = "Directiva 1999/93/CE";
 choices[35][2] = "Directiva 2000/31/CE";
 choices[35][3] = "Directiva 2003/98/CE";
 answers[35] = 1;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 790. Reglamento 910/2014";
 preguntaids[35] = 790


//  Id pregunta: 5471 Año de creación de pregunta: 2007
 questions[36]= "37)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[36][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[36][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[36][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[36] = 0;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5471. ";
 preguntaids[36] = 5471


//  Id pregunta: 2590 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[37]= new Array();
 choices[37][0] = "Compresi&oacute;n de datos";
 choices[37][1] = "Directorio electr&oacute;nico";
 choices[37][2] = "Certificados de clave p&uacute;blica";
 choices[37][3] = "Protocolo de transporte OSI";
 answers[37] = 1;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2590. ";
 preguntaids[37] = 2590


//  Id pregunta: 3462 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[38]= new Array();
 choices[38][0] = "Agente de usuario del directorio (DUA)";
 choices[38][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[38][2] = "Dominio de nombres de directorio (DND)";
 choices[38][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[38] = 2;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3462. ";
 preguntaids[38] = 3462


//  Id pregunta: 1091 Año de creación de pregunta: 2016
 questions[39]= "40)  Los certificados digitales:";
 choices[39]= new Array();
 choices[39][0] = "Basados en la recomendaci&oacute;n X.509 v.2 admiten extensiones, que pueden llevar una bandera de criticidad.";
 choices[39][1] = "Definidos en el programa PGP (Pretty Good Privacy) son compatibles con los X.509 v.3.";
 choices[39][2] = "De atributos vinculan al titular con su clave p&uacute;blica y sus atributos.";
 choices[39][3] = "Basados en la recomendaci&oacute;n X.509 v.3 pueden incorporar como extensiones los atributos que constan en un certificado de atributos.";
 answers[39] = 3;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1091. ";
 preguntaids[39] = 1091


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[40]= new Array();
 choices[40][0] = "El nombre del firmante o un seudo?nimo";
 choices[40][1] = "Los datos de validacio?n de la firma electro?nica";
 choices[40][2] = "La firma electro?nica cualificada o el sello electro?nico cualificado del prestador de servicios de confianza expedidor";
 choices[40][3] = "La localizacio?n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[40] = 2;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 784. Reglamento 910/2014";
 preguntaids[40] = 784


//  Id pregunta: 2716 Año de creación de pregunta: 2005
 questions[41]= "42)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[41]= new Array();
 choices[41][0] = "El navegador de internet";
 choices[41][1] = "El proveedor de servicios";
 choices[41][2] = "Un servidor de certificados";
 choices[41][3] = "La Autoridad de Certificaci&oacute;n";
 answers[41] = 0;
 units[41] = ['77'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2716. ";
 preguntaids[41] = 2716


//  Id pregunta: 2783 Año de creación de pregunta: 2002
 questions[42]= "43)  El protocolo de acceso al directorio en X.500 es:";
 choices[42]= new Array();
 choices[42][0] = "TCP/IP";
 choices[42][1] = "LDAP";
 choices[42][2] = "IMAP";
 choices[42][3] = "DAP";
 answers[42] = 3;
 units[42] = ['77'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2783. ";
 preguntaids[42] = 2783


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[43]= new Array();
 choices[43][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[43][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[43][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[43][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[43] = 1;
 units[43] = ['77'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 793. Sociedad de la informaci&oacute;n";
 preguntaids[43] = 793


//  Id pregunta: 3465 Año de creación de pregunta: 2006
 questions[44]= "45)  Se&ntilde;ale la correcta:";
 choices[44]= new Array();
 choices[44][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[44][1] = "El est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[44][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 1;
 units[44] = ['77'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3465. ";
 preguntaids[44] = 3465


//  Id pregunta: 1663 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale c&oacute;mo se denomina el proceso que administra el almacenamiento en un sistema de directorio electr&oacute;nico:";
 choices[45]= new Array();
 choices[45][0] = "DSA";
 choices[45][1] = "UPN";
 choices[45][2] = "DSE";
 choices[45][3] = "DAP";
 answers[45] = 0;
 units[45] = ['77'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1663. ";
 preguntaids[45] = 1663


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[46]= new Array();
 choices[46][0] = "Al menos cada 12 meses";
 choices[46][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[46][2] = "Al menos cada 18 meses";
 choices[46][3] = "Al menos cada 24 meses";
 answers[46] = 3;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 786. Reglamento 910/2014";
 preguntaids[46] = 786


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[47]= new Array();
 choices[47][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[47][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[47][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[47][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[47] = 0;
 units[47] = ['77'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 785. Reglamento 910/2014";
 preguntaids[47] = 785


//  Id pregunta: 3502 Año de creación de pregunta: 2006
 questions[48]= "49)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[48]= new Array();
 choices[48][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[48][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[48][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[48][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[48] = 2;
 units[48] = ['77'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3502. ";
 preguntaids[48] = 3502


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[49]= new Array();
 choices[49][0] = "B&aacute;sico, medio y alto";
 choices[49][1] = "D&eacute;bil y fuerte";
 choices[49][2] = "Bajo, medio y alto";
 choices[49][3] = "Bajo, sustancial y alto";
 answers[49] = 3;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 783. Reglamento 910/2014";
 preguntaids[49] = 783


//  Id pregunta: 2906 Año de creación de pregunta: 2002
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[50]= new Array();
 choices[50][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[50][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[50][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[50][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[50] = 2;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2906. ";
 preguntaids[50] = 2906


//  Id pregunta: 2706 Año de creación de pregunta: 2005
 questions[51]= "52)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names";
 choices[51][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[51][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[51][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[51] = 3;
 units[51] = ['77'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2706. ";
 preguntaids[51] = 2706


//  Id pregunta: 1835 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes campos NO se encuentra en un certificado electr&oacute;nico que siga el est&aacute;ndar X.509?";
 choices[52]= new Array();
 choices[52][0] = "Nombre del certificador.";
 choices[52][1] = "Periodo de validez.";
 choices[52][2] = "Clave privada del sujeto.";
 choices[52][3] = "Clave p&uacute;blica del sujeto.";
 answers[52] = 2;
 units[52] = ['77'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1835. ";
 preguntaids[52] = 1835


//  Id pregunta: 3082 Año de creación de pregunta: 2002
 questions[53]= "54)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[53]= new Array();
 choices[53][0] = "Al servidor DNS principal";
 choices[53][1] = "Al servidor web asociado al dominio";
 choices[53][2] = "Al servidor de correo asociado al dominio";
 choices[53][3] = "Al servidor seguro asociado al dominio";
 answers[53] = 2;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3082. ";
 preguntaids[53] = 3082


//  Id pregunta: 1278 Año de creación de pregunta: 2016
 questions[54]= "55)  Conforme a la Ley 59/2003, de Firma electr&oacute;nica, el prestador de servicios de certificaci&oacute;n que vaya a cesar en su actividad deber&aacute; comunicarlo a los firmantes que utilicen los certificados electr&oacute;nicos que haya expedido as&iacute; como a los solicitantes de certificados expedidos a favor de personas jur&iacute;dicas, con una antelaci&oacute;n al cese efectivo de la actividad, como m&iacute;nimo de:";
 choices[54]= new Array();
 choices[54][0] = "AI menos seis meses.";
 choices[54][1] = "Un a&ntilde;o natural.";
 choices[54][2] = "AI menos dos meses.";
 choices[54][3] = "AI menos dos semanas.";
 answers[54] = 2;
 units[54] = ['77'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1278. ";
 preguntaids[54] = 1278


//  Id pregunta: 2471 Año de creación de pregunta: 2005
 questions[55]= "56)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[55]= new Array();
 choices[55][0] = "Es completamente cierto";
 choices[55][1] = "Es cierto para certificados servidor";
 choices[55][2] = "Es completamente falso";
 choices[55][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[55] = 2;
 units[55] = ['77'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2471. ";
 preguntaids[55] = 2471


//  Id pregunta: 5506 Año de creación de pregunta: 2007
 questions[56]= "57)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[56]= new Array();
 choices[56][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[56][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[56][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[56][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[56] = 3;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5506. Ley 59/2003, art&iacute;culo 24";
 preguntaids[56] = 5506


//  Id pregunta: 5507 Año de creación de pregunta: 2007
 questions[57]= "58)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[57]= new Array();
 choices[57][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[57][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[57][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[57][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[57] = 1;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5507. ";
 preguntaids[57] = 5507


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[58]= "59)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[58]= new Array();
 choices[58][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio?n Europea (DOUE)";
 choices[58][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[58][2] = "A partir del 1 de enero de 2015";
 choices[58][3] = "A partir del 1 de julio de 2016";
 answers[58] = 1;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 792. Reglamento 910/2014";
 preguntaids[58] = 792


//  Id pregunta: 3205 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[59]= new Array();
 choices[59][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[59][1] = "Seguridad";
 choices[59][2] = "Correo Electr&oacute;nico";
 choices[59][3] = "Transmisi&oacute;n de ficheros";
 answers[59] = 3;
 units[59] = ['77'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3205. ";
 preguntaids[59] = 3205


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[60]= "61)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[60]= new Array();
 choices[60][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[60][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[60][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[60][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[60] = 3;
 units[60] = ['77'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 782. AGE A1 2015";
 preguntaids[60] = 782


//  Id pregunta: 3024 Año de creación de pregunta: 2002
 questions[61]= "62)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[61]= new Array();
 choices[61][0] = "Los usuarios";
 choices[61][1] = "Los datos";
 choices[61][2] = "Los documentos";
 choices[61][3] = "Los mensajes";
 answers[61] = 0;
 units[61] = ['77', '78'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3024. ";
 preguntaids[61] = 3024


//  Id pregunta: 3000 Año de creación de pregunta: 2002
 questions[62]= "63)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[62]= new Array();
 choices[62][0] = "DNS";
 choices[62][1] = "SSL";
 choices[62][2] = "XAdES-A";
 choices[62][3] = "WML";
 answers[62] = 1;
 units[62] = ['77'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3000. ";
 preguntaids[62] = 3000


//  Id pregunta: 3461 Año de creación de pregunta: 2006
 questions[63]= "64)  En relaci&oacute;n a los certificados X.509:";
 choices[63]= new Array();
 choices[63][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[63][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[63][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[63][3] = "Todas las anteriores son ciertas";
 answers[63] = 3;
 units[63] = ['77'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3461. ";
 preguntaids[63] = 3461


//  Id pregunta: 1209 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;alar cu&aacute;l de las siguientes NO es una ventaja del uso de directorios LDAP para la autenticaci&oacute;n de usuarios:";
 choices[64]= new Array();
 choices[64][0] = "La mayor&iacute;a de aplicaciones comerciales permiten su integraci&oacute;n f&aacute;cilmente.";
 choices[64][1] = "Est&aacute;n optimizados para las b&uacute;squedas, que es la operaci&oacute;n m&aacute;s repetida a la hora de gestionar los usuarios.";
 choices[64][2] = "Permiten implantar sin ning&uacute;n mecanismo adicional Single Sign On, ya que todas las aplicaciones pueden tener la autenticaci&oacute;n a trav&eacute;s del LDAP.";
 choices[64][3] = "La replicaci&oacute;n con los directorios /etc/passwd est&aacute; automatizada, y por tanto la integraci&oacute;n con las aplicaciones comerciales.";
 answers[64] = 3;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1209. ";
 preguntaids[64] = 1209


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro?nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[65]= new Array();
 choices[65][0] = "Ser prestados por uno o ma?s prestadores cualificados de servicios de confianza";
 choices[65][1] = "Garantizar la identificacio?n del destinatario antes de la entrega de los datos";
 choices[65][2] = "Indicar mediante un sello cualificado de tiempo electro?nico la fecha y hora de envi?o, recepcio?n y eventual modificacio?n de los datos";
 choices[65][3] = "Proteger el envi?o y la recepcio?n de datos por una firma electro?nica cualificada o un sello electro?nico cualificado de un prestador cualificado de servicios de confianza";
 answers[65] = 2;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 789. Reglamento 910/2014";
 preguntaids[65] = 789


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[66]= new Array();
 choices[66][0] = "Las firmas electro?nicas cualificadas tendr&aacute;n un efecto juri?dico equivalente al de una firma manuscrita";
 choices[66][1] = "Una firma electro?nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera? reconocida como firma electro?nica cualificada en los dema?s Estados miembros";
 choices[66][2] = "No se denegara?n efectos juri?dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro?nica por el mero hecho de ser una firma electro?nica";
 choices[66][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[66] = 3;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 787. Reglamento 910/2014";
 preguntaids[66] = 787


//  Id pregunta: 2741 Año de creación de pregunta: 2002
 questions[67]= "68)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[67]= new Array();
 choices[67][0] = "Ltree";
 choices[67][1] = "LDS";
 choices[67][2] = "DIT";
 choices[67][3] = "Todas son falsas";
 answers[67] = 2;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2741. ";
 preguntaids[67] = 2741


//  Id pregunta: 1100 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;En qu&eacute; zona del chip del DNI electr&oacute;nico se encuentra el certificado x509 de componente?";
 choices[68]= new Array();
 choices[68][0] = "Zona de seguridad.";
 choices[68][1] = "Zona aut&oacute;noma.";
 choices[68][2] = "Zona privada.";
 choices[68][3] = "Zona p&uacute;blica.";
 answers[68] = 3;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1100. ";
 preguntaids[68] = 1100


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[69]= "70)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[69]= new Array();
 choices[69][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio?n Europea (DOUE)";
 choices[69][1] = "1 de enero de 2015";
 choices[69][2] = "1 de enero de 2016";
 choices[69][3] = "1 de julio de 2016";
 answers[69] = 3;
 units[69] = ['77'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 791. Reglamento 910/2014";
 preguntaids[69] = 791


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


//  Id pregunta: 1399 Año de creación de pregunta: 2016
 questions[71]= "72)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[71]= new Array();
 choices[71][0] = "Contiene la clave privada.";
 choices[71][1] = "Cumple la sintaxis PKCS #21.";
 choices[71][2] = "Esta codificado en un Formato no binario.";
 choices[71][3] = "No se puede convertir a Formato .PEM.";
 answers[71] = 0;
 units[71] = ['77'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1399. ";
 preguntaids[71] = 1399


//  Id pregunta: 2719 Año de creación de pregunta: 2002
 questions[72]= "73)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[72]= new Array();
 choices[72][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[72][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[72][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[72][3] = "Incorpora un microprocesador con memoria";
 answers[72] = 2;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2719. ";
 preguntaids[72] = 2719


//  Id pregunta: 1275 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[73]= new Array();
 choices[73][0] = "5 a&ntilde;os.";
 choices[73][1] = "10 a&ntilde;os.";
 choices[73][2] = "Permanentemente.";
 choices[73][3] = "15 a&ntilde;os,";
 answers[73] = 3;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1275. ";
 preguntaids[73] = 1275


//  Id pregunta: 1785 Año de creación de pregunta: 2016
 questions[74]= "75)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, otorga la equivalencia funcional con la firma manuscrita respecto de los datos consignados en forma electr&oacute;nica a:";
 choices[74]= new Array();
 choices[74][0] = "La firma electr&oacute;nica general.";
 choices[74][1] = "La firma electr&oacute;nica avanzada.";
 choices[74][2] = "La firma electr&oacute;nica reconocida";
 choices[74][3] = "La firma electr&oacute;nica autenticada.";
 answers[74] = 2;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1785. ";
 preguntaids[74] = 1785


