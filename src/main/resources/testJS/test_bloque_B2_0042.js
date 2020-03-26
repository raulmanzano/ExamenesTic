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
//  Id pregunta: 9676 Año de creación de pregunta: 2014
 questions[0]= "1)  &iquest;Cu&aacute;l no es una novedad de HTML 5?";
 choices[0]= new Array();
 choices[0][0] = "Application Cache";
 choices[0][1] = "Elementos sem&aacute;nticos.";
 choices[0][2] = "Web workers";
 choices[0][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[0] = 3;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9676. ";
 preguntaids[0] = 9676


//  Id pregunta: 9691 Año de creación de pregunta: 2014
 questions[1]= "2)  Una CRL completa:";
 choices[1]= new Array();
 choices[1][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[1][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[1][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[1][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[1] = 3;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9691. ";
 preguntaids[1] = 9691


//  Id pregunta: 9712 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[2]= new Array();
 choices[2][0] = "eDirectory";
 choices[2][1] = "iPlanet";
 choices[2][2] = "Active Directory";
 choices[2][3] = "Todos lo son";
 answers[2] = 3;
 units[2] = ['77'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9712. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";
 preguntaids[2] = 9712


//  Id pregunta: 9682 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[3]= new Array();
 choices[3][0] = "&lt;svg&gt;";
 choices[3][1] = "&lt;canvas&gt;";
 choices[3][2] = "&lt;output&gt;";
 choices[3][3] = "&lt;source&gt;";
 answers[3] = 1;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9682. ";
 preguntaids[3] = 9682


//  Id pregunta: 9697 Año de creación de pregunta: 2014
 questions[4]= "5)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[4]= new Array();
 choices[4][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[4][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[4][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[4][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[4] = 3;
 units[4] = ['77'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9697. ";
 preguntaids[4] = 9697


//  Id pregunta: 9593 Año de creación de pregunta: 2014
 questions[5]= "6)  Una sentencia JCL comienza con:";
 choices[5]= new Array();
 choices[5][0] = "//";
 choices[5][1] = "*+";
 choices[5][2] = "#&gt;";
 choices[5][3] = "$&gt;";
 answers[5] = 0;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9593. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[5] = 9593


//  Id pregunta: 9694 Año de creación de pregunta: 2014
 questions[6]= "7)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[6]= new Array();
 choices[6][0] = "No est&aacute; restringido a redes unix";
 choices[6][1] = "Usa notaci&oacute;n ASN.1";
 choices[6][2] = "No soporta implementaciones de software libre";
 choices[6][3] = "Se usa sobre TCP/IP";
 answers[6] = 0;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9694. ";
 preguntaids[6] = 9694


//  Id pregunta: 9678 Año de creación de pregunta: 2014
 questions[7]= "8)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[7][1] = "Es una alternativa a XML en AJAX.";
 choices[7][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[7][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[7] = 2;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9678. ";
 preguntaids[7] = 9678


//  Id pregunta: 9744 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[8]= new Array();
 choices[8][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[8][1] = "A) m&aacute;s reusabilidad";
 choices[8][2] = "B) m&aacute;s interoperabilidad";
 choices[8][3] = "C) m&aacute;s desacoplamiento";
 answers[8] = 0;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9744. ";
 preguntaids[8] = 9744


//  Id pregunta: 9693 Año de creación de pregunta: 2014
 questions[9]= "10)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[9]= new Array();
 choices[9][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[9][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[9][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[9][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[9] = 2;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9693. ";
 preguntaids[9] = 9693


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[10]= new Array();
 choices[10][0] = "Secure Transport Over bRoad toKens";
 choices[10][1] = "Security idenTity acrOss boRders linKed";
 choices[10][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[10][3] = "Safe noTes stOring encRypted Keys";
 answers[10] = 1;
 units[10] = ['77', '78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9783. ";
 preguntaids[10] = 9783


//  Id pregunta: 9643 Año de creación de pregunta: 2014
 questions[11]= "12)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[11]= new Array();
 choices[11][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[11][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[11][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[11][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[11] = 0;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9643. ";
 preguntaids[11] = 9643


//  Id pregunta: 9738 Año de creación de pregunta: 2014
 questions[12]= "13)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[12]= new Array();
 choices[12][0] = "SISD";
 choices[12][1] = "SIMD";
 choices[12][2] = "MISD";
 choices[12][3] = "MIMD";
 answers[12] = 1;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9738. ";
 preguntaids[12] = 9738


//  Id pregunta: 9608 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[13]= new Array();
 choices[13][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[13][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[13][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[13][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[13] = 3;
 units[13] = ['62'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9608. ";
 preguntaids[13] = 9608


//  Id pregunta: 9592 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[14]= new Array();
 choices[14][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[14][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[14][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[14][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[14] = 1;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9592. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[14] = 9592


//  Id pregunta: 9587 Año de creación de pregunta: 2014
 questions[15]= "16)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[15]= new Array();
 choices[15][0] = "Enlace.";
 choices[15][1] = "Red.";
 choices[15][2] = "Transporte.";
 choices[15][3] = "Aplicaci&oacute;n.";
 answers[15] = 2;
 units[15] = ['53'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9587. TIC A2 2013 libre";
 preguntaids[15] = 9587


//  Id pregunta: 9748 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[16]= new Array();
 choices[16][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[16][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[16][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[16][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[16] = 1;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9748. ";
 preguntaids[16] = 9748


//  Id pregunta: 9688 Año de creación de pregunta: 2014
 questions[17]= "18)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[17][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[17][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[17][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[17] = 3;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9688. ";
 preguntaids[17] = 9688


//  Id pregunta: 9589 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[18]= new Array();
 choices[18][0] = "Los ficheros abiertos.";
 choices[18][1] = "El escritorio.";
 choices[18][2] = "Los procesos.";
 choices[18][3] = "Los puertos TCP/IP.";
 answers[18] = 2;
 units[18] = ['57'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9589. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[18] = 9589


//  Id pregunta: 9743 Año de creación de pregunta: 2014
 questions[19]= "20)  El ancho de banda m&aacute;ximo alcanzado por la familia de est&aacute;ndares USB es:";
 choices[19]= new Array();
 choices[19][0] = "10 Gbit/s full-duplex por USB 3.0";
 choices[19][1] = "10 Gbit/s half-duplex por USB 3.1";
 choices[19][2] = "10 Gbit/s full-duplex por USB 3.2";
 choices[19][3] = "10 Gbit/s full-duplex por USB 3.1";
 answers[19] = 3;
 units[19] = ['49'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9743. ";
 preguntaids[19] = 9743


//  Id pregunta: 9698 Año de creación de pregunta: 2014
 questions[20]= "21)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[20]= new Array();
 choices[20][0] = "Avanzado";
 choices[20][1] = "Reconocido";
 choices[20][2] = "Seguro";
 choices[20][3] = "Exportable";
 answers[20] = 1;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9698. ";
 preguntaids[20] = 9698


//  Id pregunta: 9650 Año de creación de pregunta: 2014
 questions[21]= "22)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[21]= new Array();
 choices[21][0] = "Se hace incompatible el uso de servicios web.";
 choices[21][1] = "Los servicios encapsulan sus funcionalidades.";
 choices[21][2] = "Los servicios mantienen un fuerte acoplamiento.";
 choices[21][3] = "Los servicios dependen fuertemente de la plataforma subyacente.";
 answers[21] = 1;
 units[21] = ['55'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9650. Examen TIC A1 2013";
 preguntaids[21] = 9650


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[22]= "23)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[22]= new Array();
 choices[22][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[22][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[22][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[22][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[22] = 3;
 units[22] = ['7', '77'];
 blocks[22] = ['A2', 'B2'];
 comments[22] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[22] = 9791


//  Id pregunta: 9651 Año de creación de pregunta: 2014
 questions[23]= "24)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[23]= new Array();
 choices[23][0] = "Business";
 choices[23][1] = "Essentials";
 choices[23][2] = "Foundation";
 choices[23][3] = "Standard";
 answers[23] = 0;
 units[23] = ['58'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9651. Examen TIC A1 2013";
 preguntaids[23] = 9651


//  Id pregunta: 9749 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[24]= new Array();
 choices[24][0] = "RAID 0";
 choices[24][1] = "RAID 5";
 choices[24][2] = "RAID 1+0";
 choices[24][3] = "RAID 0+1";
 answers[24] = 0;
 units[24] = ['53'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9749. ";
 preguntaids[24] = 9749


//  Id pregunta: 9574 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[25]= new Array();
 choices[25][0] = "iostat";
 choices[25][1] = "df";
 choices[25][2] = "sar";
 choices[25][3] = "nc";
 answers[25] = 3;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9574. TIC A2 2013 libre";
 preguntaids[25] = 9574


//  Id pregunta: 9596 Año de creación de pregunta: 2014
 questions[26]= "27)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[26]= new Array();
 choices[26][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[26][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[26][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[26][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[26] = 2;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9596. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[26] = 9596


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[27]= new Array();
 choices[27][0] = "&lt;canvas&gt;";
 choices[27][1] = "&lt;applet&gt;";
 choices[27][2] = "&lt;keygen&gt;";
 choices[27][3] = "&lt;audio&gt;";
 answers[27] = 1;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9675. ";
 preguntaids[27] = 9675


//  Id pregunta: 9645 Año de creación de pregunta: 2014
 questions[28]= "29)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[28]= new Array();
 choices[28][0] = "El sistema lo rechaza";
 choices[28][1] = "Las claves generadas se ven alteradas y se descubre el intento de intrusi&oacute;n";
 choices[28][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[28][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[28] = 1;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9645. ";
 preguntaids[28] = 9645


//  Id pregunta: 9686 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[29]= new Array();
 choices[29][0] = "header y footer.";
 choices[29][1] = "nav.";
 choices[29][2] = "sections y articles.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = 3;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9686. ";
 preguntaids[29] = 9686


//  Id pregunta: 9680 Año de creación de pregunta: 2014
 questions[30]= "31)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[30]= new Array();
 choices[30][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[30][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[30][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[30][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[30] = 2;
 units[30] = ['55'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9680. ";
 preguntaids[30] = 9680


//  Id pregunta: 9690 Año de creación de pregunta: 2014
 questions[31]= "32)  Respecto a los certificados X.509 v3:";
 choices[31]= new Array();
 choices[31][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[31][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[31][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[31][3] = "No pueden definirse extensiones para uso privado.";
 answers[31] = 1;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9690. ";
 preguntaids[31] = 9690


//  Id pregunta: 9577 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[32]= new Array();
 choices[32][0] = "5.200 km";
 choices[32][1] = "20.200 km";
 choices[32][2] = "36.200 km";
 choices[32][3] = "45.200 km";
 answers[32] = 1;
 units[32] = ['71'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9577. TIC A2 2013 libre";
 preguntaids[32] = 9577


//  Id pregunta: 9591 Año de creación de pregunta: 2014
 questions[33]= "34)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[33]= new Array();
 choices[33][0] = "Mediante cuotas de disco.";
 choices[33][1] = "Mediante el editor de directivas de grupo.";
 choices[33][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[33][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[33] = 0;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9591. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[33] = 9591


//  Id pregunta: 9609 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Cual no es un lenguaje de scripting?";
 choices[34]= new Array();
 choices[34][0] = "JScript";
 choices[34][1] = "Node.js";
 choices[34][2] = "Groovy";
 choices[34][3] = "Hack";
 answers[34] = 1;
 units[34] = ['62'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9609. Node.js es un entorno de desarrollo, no un lenguaje";
 preguntaids[34] = 9609


//  Id pregunta: 9661 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[35]= new Array();
 choices[35][0] = "Kexi.";
 choices[35][1] = "Kivio.";
 choices[35][2] = "Konqueror.";
 choices[35][3] = "Kugar.";
 answers[35] = 3;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9661. Examen TIC A1 2013";
 preguntaids[35] = 9661


//  Id pregunta: 9740 Año de creación de pregunta: 2014
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[36]= new Array();
 choices[36][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[36][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[36][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[36][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[36] = 0;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9740. ";
 preguntaids[36] = 9740


//  Id pregunta: 9595 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[37]= new Array();
 choices[37][0] = "33%";
 choices[37][1] = "20%";
 choices[37][2] = "50%";
 choices[37][3] = "0%";
 answers[37] = 0;
 units[37] = ['53'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9595. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[37] = 9595


//  Id pregunta: 9642 Año de creación de pregunta: 2014
 questions[38]= "39)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[38]= new Array();
 choices[38][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[38][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[38][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[38][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[38] = 0;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9642. ";
 preguntaids[38] = 9642


//  Id pregunta: 9695 Año de creación de pregunta: 2014
 questions[39]= "40)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[39]= new Array();
 choices[39][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[39][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[39][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[39][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[39] = 2;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9695. ";
 preguntaids[39] = 9695


//  Id pregunta: 9575 Año de creación de pregunta: 2014
 questions[40]= "41)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[40]= new Array();
 choices[40][0] = "Masking";
 choices[40][1] = "Cluning";
 choices[40][2] = "Zoning";
 choices[40][3] = "Port Binding";
 answers[40] = 1;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9575. TIC A2 2013 libre";
 preguntaids[40] = 9575


//  Id pregunta: 9717 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[41]= new Array();
 choices[41][0] = "&lt;head&gt;";
 choices[41][1] = "&lt;video&gt;";
 choices[41][2] = "&lt;music&gt;";
 choices[41][3] = "&lt;background&gt;";
 answers[41] = 1;
 units[41] = ['74'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9717. http://es.wikipedia.org/wiki/HTML5";
 preguntaids[41] = 9717


//  Id pregunta: 9601 Año de creación de pregunta: 2014
 questions[42]= "43)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[42]= new Array();
 choices[42][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[42][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[42][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[42][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[42] = 0;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9601. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[42] = 9601


//  Id pregunta: 9741 Año de creación de pregunta: 2014
 questions[43]= "44)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[43]= new Array();
 choices[43][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[43][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[43][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[43][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[43] = 1;
 units[43] = ['49'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9741. ";
 preguntaids[43] = 9741


//  Id pregunta: 9641 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Qu&eacute; es Kleopatra?";
 choices[44]= new Array();
 choices[44][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[44][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[44][2] = "Un navegador del entorno KDE";
 choices[44][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[44] = 1;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9641. ";
 preguntaids[44] = 9641


//  Id pregunta: 9687 Año de creación de pregunta: 2014
 questions[45]= "46)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[45][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[45][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[45][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[45] = 3;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9687. ";
 preguntaids[45] = 9687


//  Id pregunta: 9681 Año de creación de pregunta: 2014
 questions[46]= "47)  Respecto a REST, indique la respuesta correcta:";
 choices[46]= new Array();
 choices[46][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[46][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[46][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[46][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[46] = 3;
 units[46] = ['55'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9681. ";
 preguntaids[46] = 9681


//  Id pregunta: 9590 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[47]= new Array();
 choices[47][0] = "true &gt; 2013";
 choices[47][1] = "&gt; 2013";
 choices[47][2] = "cat /dev/null &gt; 2013";
 choices[47][3] = "| &gt; 2013";
 answers[47] = 3;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9590. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[47] = 9590


//  Id pregunta: 9737 Año de creación de pregunta: 2014
 questions[48]= "49)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[48]= new Array();
 choices[48][0] = "En NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[48][1] = "En UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[48][2] = "A y B son incorrectas";
 choices[48][3] = "A y B son correctas";
 answers[48] = 3;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9737. ";
 preguntaids[48] = 9737


//  Id pregunta: 9696 Año de creación de pregunta: 2014
 questions[49]= "50)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[49]= new Array();
 choices[49][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[49][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[49][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[49][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[49] = 1;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9696. ";
 preguntaids[49] = 9696


//  Id pregunta: 9679 Año de creación de pregunta: 2014
 questions[50]= "51)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[50]= new Array();
 choices[50][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[50][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[50][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[50][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[50] = 0;
 units[50] = ['55'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9679. ";
 preguntaids[50] = 9679


//  Id pregunta: 9747 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[51]= new Array();
 choices[51][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[51][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[51][2] = "La latencia de acceso a los datos es menor";
 choices[51][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[51] = 3;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9747. ";
 preguntaids[51] = 9747


//  Id pregunta: 9578 Año de creación de pregunta: 2014
 questions[52]= "53)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[52]= new Array();
 choices[52][0] = "Cassegrain";
 choices[52][1] = "Krenwinkel";
 choices[52][2] = "Gregorian";
 choices[52][3] = "Offset";
 answers[52] = 1;
 units[52] = ['71'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9578. TIC A2 2013 libre";
 preguntaids[52] = 9578


//  Id pregunta: 9745 Año de creación de pregunta: 2014
 questions[53]= "54)  Seg&uacute;n el modelo de madurez de Cloud Computing de Forrester, el nivel en el que el proveedor de SaaS ha creado un software espec&iacute;fico para tal prop&oacute;sito y que emplea, entre otras, la tenencia m&uacute;ltiple, es:";
 choices[53]= new Array();
 choices[53][0] = "Nivel 1";
 choices[53][1] = "Nivel 2";
 choices[53][2] = "Nivel 3";
 choices[53][3] = "Nivel 4";
 answers[53] = 2;
 units[53] = ['52'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9745. http://blogs.msdn.com/b/architectsrule/archive/2008/08/18/saas-maturity-model-according-to-forrester.aspx";
 preguntaids[53] = 9745


//  Id pregunta: 9597 Año de creación de pregunta: 2014
 questions[54]= "55)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[54]= new Array();
 choices[54][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[54][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[54][2] = "Ambos operan a nivel de bloque.";
 choices[54][3] = "Ambos operan a nivel de fichero.";
 answers[54] = 0;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9597. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[54] = 9597


//  Id pregunta: 9746 Año de creación de pregunta: 2014
 questions[55]= "56)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[55]= new Array();
 choices[55][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[55][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[55][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[55][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[55] = 2;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9746. ";
 preguntaids[55] = 9746


//  Id pregunta: 9644 Año de creación de pregunta: 2014
 questions[56]= "57)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[56]= new Array();
 choices[56][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[56][1] = "Cifrado C&eacute;sar";
 choices[56][2] = "Criptoan&aacute;lisis";
 choices[56][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[56] = 2;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9644. ";
 preguntaids[56] = 9644


//  Id pregunta: 9709 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[57]= new Array();
 choices[57][0] = "ps -a";
 choices[57][1] = "top";
 choices[57][2] = "fork";
 choices[57][3] = "lsof";
 answers[57] = 3;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9709. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";
 preguntaids[57] = 9709


//  Id pregunta: 9692 Año de creación de pregunta: 2014
 questions[58]= "59)  En el &aacute;mbito de los certificados X.509:";
 choices[58]= new Array();
 choices[58][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[58][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[58][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[58][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[58] = 3;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9692. ";
 preguntaids[58] = 9692


//  Id pregunta: 9689 Año de creación de pregunta: 2014
 questions[59]= "60)  En una PKI:";
 choices[59]= new Array();
 choices[59][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[59][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[59][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado.";
 choices[59][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[59] = 3;
 units[59] = ['77'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9689. ";
 preguntaids[59] = 9689


//  Id pregunta: 9610 Año de creación de pregunta: 2014
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[60]= new Array();
 choices[60][0] = "El servidor puede alojar un interprete de scripting";
 choices[60][1] = "El cliente puede alojar un interprerte de scripting";
 choices[60][2] = "Para usar el driver JDBC se necesita descargar un plug-in proporcionado por cada fabricante";
 choices[60][3] = "Un script del lado del cliente no puede solicitarle al servidor su certificado para establecer un canal autenticado bidireccionalmente";
 answers[60] = 2;
 units[60] = ['62'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9610. ";
 preguntaids[60] = 9610


//  Id pregunta: 9739 Año de creación de pregunta: 2014
 questions[61]= "62)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[61]= new Array();
 choices[61][0] = "El encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[61][1] = "El particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[61][2] = "El acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[61][3] = "No se contempla el concepto de pipelining relacionado con los procesadores";
 answers[61] = 1;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9739. ";
 preguntaids[61] = 9739


//  Id pregunta: 9607 Año de creación de pregunta: 2014
 questions[62]= "63)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[62]= new Array();
 choices[62][0] = "Compartici&oacute;n de objetos";
 choices[62][1] = "Independencia de la arquitectura de almacenamiento";
 choices[62][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[62][3] = "Escalabilidad horizontal";
 answers[62] = 2;
 units[62] = ['62'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9607. ";
 preguntaids[62] = 9607


//  Id pregunta: 9655 Año de creación de pregunta: 2014
 questions[63]= "64)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix";
 choices[63]= new Array();
 choices[63][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz.";
 choices[63][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido  y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[63][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[63][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[63] = 2;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9655. Examen TIC A1 2013";
 preguntaids[63] = 9655


//  Id pregunta: 9780 Año de creación de pregunta: 2014
 questions[64]= "65)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[64]= new Array();
 choices[64][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[64][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[64][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[64][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[64] = 1;
 units[64] = ['79', '36', '35'];
 blocks[64] = ['B2', 'B1'];
 comments[64] = "Id Pregunta: 9780. ";
 preguntaids[64] = 9780


//  Id pregunta: 9811 Año de creación de pregunta: 2015
 questions[65]= "66)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[65]= new Array();
 choices[65][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[65][1] = "Lock-in (cliente cautivo)";
 choices[65][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[65][3] = "Ninguno de los anteriores.";
 answers[65] = 1;
 units[65] = ['52'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9811. ";
 preguntaids[65] = 9811


//  Id pregunta: 9677 Año de creación de pregunta: 2014
 questions[66]= "67)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[66]= new Array();
 choices[66][0] = "XOP XML-binary Optimized Protocol";
 choices[66][1] = "XOP XML-binary Optimized Packaging";
 choices[66][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[66][3] = "REST Represantional State Transfer";
 answers[66] = 2;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9677. ";
 preguntaids[66] = 9677


//  Id pregunta: 9685 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[67]= new Array();
 choices[67][0] = "&lt;!DOCTYPE html&gt;";
 choices[67][1] = "&lt;!DOCTYPE html5&gt;";
 choices[67][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[67][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[67] = 0;
 units[67] = ['74'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9685. ";
 preguntaids[67] = 9685


//  Id pregunta: 9667 Año de creación de pregunta: 2014
 questions[68]= "69)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen";
 choices[68]= new Array();
 choices[68][0] = "TIFF.";
 choices[68][1] = "GIF.";
 choices[68][2] = "PNG.";
 choices[68][3] = "JPEG.";
 answers[68] = 2;
 units[68] = ['80'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9667. Examen TIC A1 2013";
 preguntaids[68] = 9667


//  Id pregunta: 9606 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Pl/sql";
 choices[69][1] = "Queryscript";
 choices[69][2] = "Jquery";
 choices[69][3] = "PyScripter";
 answers[69] = 2;
 units[69] = ['62'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9606. PyScripter es un entorno de desarrollo, no un lenguaje";
 preguntaids[69] = 9606


//  Id pregunta: 9652 Año de creación de pregunta: 2014
 questions[70]= "71)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios?";
 choices[70]= new Array();
 choices[70][0] = "CREATE VIEW.";
 choices[70][1] = "GRANT.";
 choices[70][2] = "CREATE PROFILE.";
 choices[70][3] = "CREATE ROLE.";
 answers[70] = 0;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9652. Examen TIC A1 2013";
 preguntaids[70] = 9652


//  Id pregunta: 9742 Año de creación de pregunta: 2014
 questions[71]= "72)  Seleccione la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "Los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[71][1] = "El bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[71][2] = "Los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[71][3] = "El bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[71] = 2;
 units[71] = ['49'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9742. ";
 preguntaids[71] = 9742


//  Id pregunta: 9684 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[72]= new Array();
 choices[72][0] = "HTML+Javascript";
 choices[72][1] = "HTML+CSS3+Flash";
 choices[72][2] = "HTML+CSS3+Javascript";
 choices[72][3] = "HTML+CSS3";
 answers[72] = 2;
 units[72] = ['74'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9684. ";
 preguntaids[72] = 9684


//  Id pregunta: 9683 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[73]= new Array();
 choices[73][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[73][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[73][2] = "Fuerte soporte multimedia.";
 choices[73][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[73] = 3;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9683. ";
 preguntaids[73] = 9683


//  Id pregunta: 9594 Año de creación de pregunta: 2014
 questions[74]= "75)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[74]= new Array();
 choices[74][0] = "300 MB/s.";
 choices[74][1] = "900 MB/s.";
 choices[74][2] = "600 MB/s.";
 choices[74][3] = "150 MB/s.";
 answers[74] = 2;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9594. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[74] = 9594


