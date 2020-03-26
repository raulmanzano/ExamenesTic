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
//  Id pregunta: 1831 Año de creación de pregunta: 2016
 questions[0]= "1)  El contenido de la norma ISO 27001 se divide en secciones, &iquest;cu&aacute;l de las siguientes NO se corresponde con una secci&oacute;n de la misma?";
 choices[0]= new Array();
 choices[0][0] = "Mejora del SGSI";
 choices[0][1] = "Auditor&iacute;as internas";
 choices[0][2] = "Responsabilidad de la Direcci&oacute;n";
 choices[0][3] = "Plan de seguridad";
 answers[0] = 3;
 units[0] = ['46'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 1831. ";
 preguntaids[0] = 1831


//  Id pregunta: 1849 Año de creación de pregunta: 2016
 questions[1]= "2)  Desde un punto de vista conceptual, indique cu&aacute;l de las siguientes afirmaciones sobre encaminadores (routers) y conmutadores (switches) es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Los encaminadores son para redes ATM y los conmutadores para redes Ethernet.";
 choices[1][1] = "Los encaminadores trabajan en el nivel 3 y los conmutadores en el nivel 2.";
 choices[1][2] = "Ambos trabajan en los niveles 2 y 3, pero los conmutadores realizan tareas de filtrado IP.";
 choices[1][3] = "Son exactamente lo mismo.";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1849. ";
 preguntaids[1] = 1849


//  Id pregunta: 1804 Año de creación de pregunta: 2016
 questions[2]= "3)  El an&aacute;lisis multidimensional se fundamenta en modelar la informaci&oacute;n en dimensiones, hechos y medidas. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[2]= new Array();
 choices[2][0] = "Las dimensiones corresponden a un conjunto de elementos con caracter&iacute;sticas comunes que responden a una pregunta de negocio. Representan diferentes perspectivas de an&aacute;lisis.";
 choices[2][1] = "Los hechos identifican los valores de las medidas de negocio para una combinaci&oacute;n concreta de dimensiones.";
 choices[2][2] = "Se entiende por granularidad de la informaci&oacute;n almacenada en una tabla de hechos, el nivel de detalle de dichos datos.";
 choices[2][3] = "Las dimensiones se organizan en jerarqu&iacute;as. Cada dimensi&oacute;n est&aacute; en una &uacute;nica jerarqu&iacute;a.";
 answers[2] = 3;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1804. ";
 preguntaids[2] = 1804


//  Id pregunta: 1847 Año de creación de pregunta: 2016
 questions[3]= "4)  Dadas las IPs de dos hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0), &iquest;est&aacute;n en la misma subred?";
 choices[3]= new Array();
 choices[3][0] = "S&iacute;";
 choices[3][1] = "No";
 choices[3][2] = "Depende de la direcci&oacute;n de la puerta de enlace";
 choices[3][3] = "Depende de la configuraci&oacute;n del conmutador";
 answers[3] = 0;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1847. ";
 preguntaids[3] = 1847


//  Id pregunta: 1811 Año de creación de pregunta: 2016
 questions[4]= "5)  En una arquitectura de 3 capas existen los componentes intermedios llamados middleware. Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las capas o niveles de comunicaci&oacute;n en los que se estructuran los middleware:";
 choices[4]= new Array();
 choices[4][0] = "Protocolo de transporte";
 choices[4][1] = "Canal de enlace de datos";
 choices[4][2] = "Protocolo de servicio";
 choices[4][3] = "Sistema operativo en red";
 answers[4] = 1;
 units[4] = ['55'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1811. ";
 preguntaids[4] = 1811


//  Id pregunta: 1822 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre las distintas fases de la ingenier&iacute;a de requisitos, indique cu&aacute;l es la opci&oacute;n correcta que refleja la fase en la que se comprueba que los requisitos implementados se corresponden con los que inicialmente se pretend&iacute;an:";
 choices[5]= new Array();
 choices[5][0] = "Implementar requisitos";
 choices[5][1] = "Verificar requisitos";
 choices[5][2] = "Analizar requisitos";
 choices[5][3] = "Validar requisitos";
 answers[5] = 3;
 units[5] = ['84'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1822. ";
 preguntaids[5] = 1822


//  Id pregunta: 1865 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es correcta acerca de los cl&uacute;sters de alto rendimiento (cl&uacute;sters HPC):";
 choices[6]= new Array();
 choices[6][0] = "Se deben programar utilizando librer&iacute;as de paralelizaci&oacute;n como MPI.";
 choices[6][1] = "Funcionan repartiendo la carga entre un gran n&uacute;mero de nodos de forma transparente al usuario.";
 choices[6][2] = "Las comunicaciones entre nodos se realizan siempre a trav&eacute;s de redes Ethernet.";
 choices[6][3] = "Implementan redundancia para garantizar la disponibilidad.";
 answers[6] = 0;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1865. ";
 preguntaids[6] = 1865


//  Id pregunta: 1860 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre Fibre Channel";
 choices[7]= new Array();
 choices[7][0] = "Es una tecnolog&iacute;a utilizada para implementar SANs (Storage &Aacute;rea Networks).";
 choices[7][1] = "Funciona exclusivamente sobre fibra &oacute;ptica.";
 choices[7][2] = "Con Fibre Channel se pueden desplegar topolog&iacute;as punto a punto, en anillo e infraestructura conmutada.";
 choices[7][3] = "Los conmutadores Fibre Channel pueden comenzar a transmitir un frame antes de recibirlo en su totalidad.";
 answers[7] = 1;
 units[7] = ['50'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1860. ";
 preguntaids[7] = 1860


//  Id pregunta: 1858 Año de creación de pregunta: 2016
 questions[8]= "9)  Se denomina hypervisor a:";
 choices[8]= new Array();
 choices[8][0] = "Proceso principal del kernel de un sistema operativo.";
 choices[8][1] = "Aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[8][2] = "Software sobre el que se ejecutan las m&aacute;quinas virtuales.";
 choices[8][3] = "Sistema operativo modificado para ser virtualizado.";
 answers[8] = 2;
 units[8] = ['54'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1858. ";
 preguntaids[8] = 1858


//  Id pregunta: 1840 Año de creación de pregunta: 2016
 questions[9]= "10)  En el contexto de los tipos de redes, indique cu&aacute;l de las siguientes afirmaciones NO es correcta";
 choices[9]= new Array();
 choices[9][0] = "WAN significa Wireless Area Network";
 choices[9][1] = "PAN significa Personal &Aacute;rea Network";
 choices[9][2] = "MAN significa Metropolitan &Aacute;rea Network";
 choices[9][3] = "SAN significa Storage Area Network";
 answers[9] = 0;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1840. ";
 preguntaids[9] = 1840


//  Id pregunta: 1821 Año de creación de pregunta: 2016
 questions[10]= "11)  En ingenier&iacute;a de software el modelo de prototipos pertenece a los modelos de desarrollo evolutivo. Indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[10]= new Array();
 choices[10][0] = "En un modelo prototipo de la fase de construcci&oacute;n se puede volver a la fase de dise&ntilde;o.";
 choices[10][1] = "En un modelo prototipo de la fase de dise&ntilde;o se puede volver a la fase de evaluaci&oacute;n.";
 choices[10][2] = "En un modelo prototipo de la fase de an&aacute;lisis se puede volver a la fase de construcci&oacute;n.";
 choices[10][3] = "Ninguna de las opciones anteriores es correcta.";
 answers[10] = 0;
 units[10] = ['90'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 1821. ";
 preguntaids[10] = 1821


//  Id pregunta: 1833 Año de creación de pregunta: 2016
 questions[11]= "12)  Dentro del &aacute;mbito de Kerberos, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[11]= new Array();
 choices[11][0] = "Es un protocolo de autenticaci&oacute;n de usuarios dentro de una red.";
 choices[11][1] = "Est&aacute; basado en el Protocolo de Needham-Schroeder.";
 choices[11][2] = "Mantiene una base de datos de claves secretas de todos los usuarios.";
 choices[11][3] = "El env&iacute;o de las contrase&ntilde;as desde el Centro de Distribuci&oacute;n de Claves (KDC) y el Servidor de Autenticaci&oacute;n (AS) se hace de manera no encriptada.";
 answers[11] = 3;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 1833. ";
 preguntaids[11] = 1833


//  Id pregunta: 1859 Año de creación de pregunta: 2016
 questions[12]= "13)  La organizaci&oacute;n de discos RAID 4 necesita:";
 choices[12]= new Array();
 choices[12][0] = "4 discos f&iacute;sicos como m&iacute;nimo.";
 choices[12][1] = "3 discos f&iacute;sicos como m&iacute;nimo.";
 choices[12][2] = "2 discos f&iacute;sicos como m&iacute;nimo.";
 choices[12][3] = "No tiene limitaci&oacute;n en el n&uacute;mero m&iacute;nimo de discos f&iacute;sicos.";
 answers[12] = 1;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1859. ";
 preguntaids[12] = 1859


//  Id pregunta: 1850 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; protocolo de acceso al medio utiliza Ethernet?";
 choices[13]= new Array();
 choices[13][0] = "HDLC";
 choices[13][1] = "CSMA/CA";
 choices[13][2] = "CSMA/CD";
 choices[13][3] = "MACA";
 answers[13] = 2;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1850. ";
 preguntaids[13] = 1850


//  Id pregunta: 1820 Año de creación de pregunta: 2016
 questions[14]= "15)  El proceso de desarrollo de software RUP (Rational Unified Process) est&aacute; basado en distintos principios clave. Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerado uno de esos principios:";
 choices[14]= new Array();
 choices[14][0] = "Equilibrio de las prioridades.";
 choices[14][1] = "Colaboraci&oacute;n entre equipos.";
 choices[14][2] = "Desarrollo secuencial.";
 choices[14][3] = "Asegurar la calidad.";
 answers[14] = 2;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1820. ";
 preguntaids[14] = 1820


//  Id pregunta: 1867 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;les son en ITIL los tres subprocesos de la Gesti&oacute;n de Capacidad?";
 choices[15]= new Array();
 choices[15][0] = "Gesti&oacute;n de Capacidad del Negocio, Gesti&oacute;n de Capacidad del Servicio y Gesti&oacute;n de Capacidad de los Componentes";
 choices[15][1] = "Gesti&oacute;n de Capacidad de Suplidores, Gesti&oacute;n de Capacidad de Servicios y Gesti&oacute;n de Capacidad de los Componentes";
 choices[15][2] = "Gesti&oacute;n de Capacidad de Suplidores, Gesti&oacute;n de Capacidad de Servicios y Gesti&oacute;n de Capacidad Tecnol&oacute;gica";
 choices[15][3] = "Gesti&oacute;n de Capacidad del Negocio, Gesti&oacute;n de Capacidad Tecnol&oacute;gica y Gesti&oacute;n de Capacidad de los Componentes";
 answers[15] = 0;
 units[15] = ['101'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 1867. ";
 preguntaids[15] = 1867


//  Id pregunta: 1835 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes campos NO se encuentra en un certificado electr&oacute;nico que siga el est&aacute;ndar X.509?";
 choices[16]= new Array();
 choices[16][0] = "Nombre del certificador.";
 choices[16][1] = "Periodo de validez.";
 choices[16][2] = "Clave privada del sujeto.";
 choices[16][3] = "Clave p&uacute;blica del sujeto.";
 answers[16] = 2;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1835. ";
 preguntaids[16] = 1835


//  Id pregunta: 1815 Año de creación de pregunta: 2016
 questions[17]= "18)  Los patrones de dise&ntilde;o se agrupan en diferentes categor&iacute;as. Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de estas categor&iacute;as:";
 choices[17]= new Array();
 choices[17][0] = "Estructurales";
 choices[17][1] = "De an&aacute;lisis";
 choices[17][2] = "De comportamiento";
 choices[17][3] = "De creaci&oacute;n";
 answers[17] = 1;
 units[17] = ['89'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 1815. ";
 preguntaids[17] = 1815


//  Id pregunta: 1805 Año de creación de pregunta: 2016
 questions[18]= "19)  Los tipos de motores de b&uacute;squeda que centran sus resultados en b&uacute;squedas que realizan sobre otros buscadores, obteniendo inicialmente un conjunto de resultados de otro buscador, y a continuaci&oacute;n refinan esos resultados presentando una selecci&oacute;n propia, se denominan:";
 choices[18]= new Array();
 choices[18][0] = "Metabuscadores.";
 choices[18][1] = "Multibuscadores.";
 choices[18][2] = "Directorios.";
 choices[18][3] = "Spider o crawlers.";
 answers[18] = 0;
 units[18] = ['103'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1805. ";
 preguntaids[18] = 1805


//  Id pregunta: 1839 Año de creación de pregunta: 2016
 questions[19]= "20)  El protocolo IPv6, &iquest;cu&aacute;ntas direcciones de red distintas posibilita?";
 choices[19]= new Array();
 choices[19][0] = "2 elevado a 64";
 choices[19][1] = "2 elevado a 128";
 choices[19][2] = "2 elevado a 32";
 choices[19][3] = "2 elevado a 256";
 answers[19] = 1;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1839. ";
 preguntaids[19] = 1839


//  Id pregunta: 1853 Año de creación de pregunta: 2016
 questions[20]= "21)  Si un archivo de Linux tiene el modo de protecci&oacute;n 640 (en octal), &iquest;qu&eacute; pueden hacer el propietario, el grupo del propietario y los dem&aacute;s?";
 choices[20]= new Array();
 choices[20][0] = "El propietario leer, escribir y ejecutar, el grupo leer y escribir y los dem&aacute;s leer.";
 choices[20][1] = "El propietario leer y escribir, el grupo leer y los dem&aacute;s nada.";
 choices[20][2] = "El propietario leer y escribir, el grupo ejecutar y los dem&aacute;s nada.";
 choices[20][3] = "El propietario leer, escribir y ejecutar, el grupo leer y los dem&aacute;s nada.";
 answers[20] = 1;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1853. ";
 preguntaids[20] = 1853


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[21]= new Array();
 choices[21][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[21][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[21][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[21][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[21] = 2;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1846. ";
 preguntaids[21] = 1846


//  Id pregunta: 1838 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es el tama&ntilde;o de bloque del algoritmo DES?";
 choices[22]= new Array();
 choices[22][0] = "64 bits";
 choices[22][1] = "56 bits";
 choices[22][2] = "128 bits";
 choices[22][3] = "256 bits";
 answers[22] = 0;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1838. ";
 preguntaids[22] = 1838


//  Id pregunta: 1870 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), a un fichero que contenga: nombre, apellidos, direcci&oacute;n electr&oacute;nica laboral y tel&eacute;fono profesional, todo ello referido a varios proveedores de un hospital, se Ie deber&aacute;n aplicar:";
 choices[23]= new Array();
 choices[23][0] = "Las medidas de seguridad de nivel b&aacute;sico.";
 choices[23][1] = "Las medidas de seguridad de nivel medio.";
 choices[23][2] = "Las medidas de seguridad de nivel alto.";
 choices[23][3] = "Ninguna de las anteriores de correcta.";
 answers[23] = 3;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1870. ";
 preguntaids[23] = 1870


//  Id pregunta: 1816 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes definiciones referidas a la t&eacute;cnica AJAX (Asynchronous JavaScript And XML) es correcta";
 choices[24]= new Array();
 choices[24][0] = "AJAX es una plataforma v&aacute;lida s&oacute;lo para plataformas JEE.";
 choices[24][1] = "AJAX no representa una tecnolog&iacute;a en s&iacute; misma, sino que se trata de la combinaci&oacute;n de un grupo de tecnolog&iacute;as ya existentes.";
 choices[24][2] = "AJAX utiliza siempre el formato XML para la transferencia de datos solicitados al servidor.";
 choices[24][3] = "En las aplicaciones desarrolladas con AJAX no es posible realizar cambios sobre las p&aacute;ginas si no se realiza la recarga de p&aacute;gina.";
 answers[24] = 1;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1816. ";
 preguntaids[24] = 1816


//  Id pregunta: 1834 Año de creación de pregunta: 2016
 questions[25]= "26)  Para establecer una comunicaci&oacute;n segura, el protocolo SSL usa:";
 choices[25]= new Array();
 choices[25][0] = "Una clave de sesi&oacute;n y un vector inicial";
 choices[25][1] = "Una clave de sesi&oacute;n";
 choices[25][2] = "Una clave p&uacute;blica y una privada";
 choices[25][3] = "Una clave sim&eacute;trica tipo Diffie-Hellman";
 answers[25] = 0;
 units[25] = ['120'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 1834. ";
 preguntaids[25] = 1834


//  Id pregunta: 1829 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l es la opci&oacute;n correcta que representa a uno de los procesos que es necesario tener implantado para alcanzar el nivel 2 de CMMI (Capability Maturity Model Integration), en el que los proyectos est&aacute;n siendo gestionados y controlados durante su desarrollo";
 choices[26]= new Array();
 choices[26][0] = "Gesti&oacute;n de riesgos";
 choices[26][1] = "Gesti&oacute;n de proveedores";
 choices[26][2] = "Gesti&oacute;n cuantitativa de proyectos";
 choices[26][3] = "Innovaci&oacute;n organizacional";
 answers[26] = 1;
 units[26] = ['93'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 1829. ";
 preguntaids[26] = 1829


//  Id pregunta: 1832 Año de creación de pregunta: 2016
 questions[27]= "28)  Dentro de la familia de est&aacute;ndares ISO 27000, &iquest;qu&eacute; norma se encarga de ayudar a las organizaciones a medir, a informar y, por lo tanto, a mejorar sistem&aacute;ticamente la eficacia de su Sistema de Informaci&oacute;n de Gesti&oacute;n de la Seguridad (SGSI)?";
 choices[27]= new Array();
 choices[27][0] = "ISO 27001";
 choices[27][1] = "ISO 27002";
 choices[27][2] = "ISO 27003";
 choices[27][3] = "ISO 27004";
 answers[27] = 3;
 units[27] = ['46'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 1832. ";
 preguntaids[27] = 1832


//  Id pregunta: 1841 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre el modelo de capas OSI:";
 choices[28]= new Array();
 choices[28][0] = "La capa de enlace se encarga de determinar los enlaces por donde enviar los paquetes.";
 choices[28][1] = "La capa de sesi&oacute;n est&aacute; por encima de la capa de presentaci&oacute;n.";
 choices[28][2] = "El nivel que realiza la funci&oacute;n de obtener la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el nivel 3.";
 choices[28][3] = "La compresi&oacute;n y el cifrado de los datos es una tarea de la capa de aplicaci&oacute;n.";
 answers[28] = 2;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1841. ";
 preguntaids[28] = 1841


//  Id pregunta: 1813 Año de creación de pregunta: 2016
 questions[29]= "30)  En una arquitectura SOA existe una capa en la que se realiza la funci&oacute;n de monitorizaci&oacute;n y control de servicios. Indique cu&aacute;l es la opci&oacute;n correcta que define dicha capa.";
 choices[29]= new Array();
 choices[29][0] = "Capa de control";
 choices[29][1] = "Capa de servicios";
 choices[29][2] = "Capa de SOA Governance";
 choices[29][3] = "Capa de SOA Enterprise Service Bus";
 answers[29] = 2;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1813. ";
 preguntaids[29] = 1813


//  Id pregunta: 1812 Año de creación de pregunta: 2016
 questions[30]= "31)  Uno de los componentes de una granja de servidores son los monitores transaccionales que tienen como funci&oacute;n realizar la gesti&oacute;n de transacciones. Indique cu&aacute;l de las siguientes opciones es correcta como una de las partes que interviene en dicha gesti&oacute;n de transacciones:";
 choices[30]= new Array();
 choices[30][0] = "Gestor de aplicaci&oacute;n";
 choices[30][1] = "Gestor de servicio";
 choices[30][2] = "Gestor de registro";
 choices[30][3] = "Gestor de sesi&oacute;n";
 answers[30] = 2;
 units[30] = ['113'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1812. ";
 preguntaids[30] = 1812


//  Id pregunta: 1807 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;En qu&eacute; consiste el podcasting?";
 choices[31]= new Array();
 choices[31][0] = "Se trata de un formato XML para sindicar o compartir contenido en la web. Se utiliza para difundir informaci&oacute;n actualizada frecuentemente a usuarios que se han suscrito a la fuente de contenidos.";
 choices[31][1] = "Creaci&oacute;n de sitios web cuyas p&aacute;ginas pueden ser editadas por m&uacute;ltiples voluntarios a trav&eacute;s del navegador web. Los usuarios pueden crear, modificar o borrar un mismo texto que comparten.";
 choices[31][2] = "Comunidad cuyos v&iacute;nculos, interacciones y relaciones tienen lugar no en un espacio f&iacute;sico sino en un espacio virtual como Internet.";
 choices[31][3] = "Distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo, que puede incluir texto como subt&iacute;tulos y notas) mediante un sistema de redifusi&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 answers[31] = 3;
 units[31] = ['74'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1807. ";
 preguntaids[31] = 1807


//  Id pregunta: 1818 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como un modelo de desarrollo de software en el &aacute;mbito de Ingenier&iacute;a de software";
 choices[32]= new Array();
 choices[32][0] = "Modelo incremental.";
 choices[32][1] = "Modelo lineal.";
 choices[32][2] = "Modelo espiral.";
 choices[32][3] = "Modelo relacional.";
 answers[32] = 3;
 units[32] = ['84'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1818. ";
 preguntaids[32] = 1818


//  Id pregunta: 1862 Año de creación de pregunta: 2016
 questions[33]= "34)  En t&eacute;rminos de disponibilidad de la informaci&oacute;n, se entiende como Objetivo de Punto de Recuperaci&oacute;n (RPO):";
 choices[33]= new Array();
 choices[33][0] = "La cantidad m&aacute;xima de informaci&oacute;n que puede ser perdida cuando el servicio es restaurado tras una interrupci&oacute;n, sin que suponga repercusiones graves para la organizaci&oacute;n.";
 choices[33][1] = "El tiempo m&aacute;ximo permitido para la recuperaci&oacute;n de un servicio de TI tras una interrupci&oacute;n.";
 choices[33][2] = "La cantidad m&aacute;xima de informaci&oacute;n que se puede recuperar en el tiempo de restauraci&oacute;n del servicio de TI.";
 choices[33][3] = "El tiempo m&iacute;nimo requerido para la recuperaci&oacute;n de un servicio de TI tras una interrupci&oacute;n.";
 answers[33] = 0;
 units[33] = ['50'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1862. ";
 preguntaids[33] = 1862


//  Id pregunta: 1803 Año de creación de pregunta: 2016
 questions[34]= "35)  En el contexto del DCL (Lenguaje de control de datos), indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[34]= new Array();
 choices[34][0] = "La sentencia para controlar el nivel de aislamiento es SET TRANSACTION ISOLATION LEVEL";
 choices[34][1] = "La sentencia GRANT se utiliza para conceder privilegios de seguridad sobre objetos de la base de datos a usuarios espec&iacute;ficos.";
 choices[34][2] = "Los privilegios que se han concedido con la sentencia GRANT pueden ser retirados con la sentencia REMOVE.";
 choices[34][3] = "En la ejecuci&oacute;n de una transacci&oacute;n la sentencia COMMIT [WORK]. Termina la transacci&oacute;n actual grabando permanentemente las modificaciones.";
 answers[34] = 2;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1803. ";
 preguntaids[34] = 1803


//  Id pregunta: 1824 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como uno de los tipos de diagramas que se usan en UML (Lenguaje Unificado de Modelado)";
 choices[35]= new Array();
 choices[35][0] = "Diagrama de colaboraci&oacute;n";
 choices[35][1] = "Diagrama de estados";
 choices[35][2] = "Diagrama de atributos";
 choices[35][3] = "Diagrama de distribuci&oacute;n";
 answers[35] = 2;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 1824. ";
 preguntaids[35] = 1824


//  Id pregunta: 1868 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cu&aacute;l de las siguientes plataformas categorizar&iacute;a como una plataforma tecnol&oacute;gica de tipo LMS (Learning Management System).";
 choices[36]= new Array();
 choices[36][0] = "Joomla";
 choices[36][1] = "Drupal";
 choices[36][2] = "Moodle";
 choices[36][3] = "Todas las anteriores";
 answers[36] = 2;
 units[36] = ['70'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1868. ";
 preguntaids[36] = 1868


//  Id pregunta: 1851 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique cu&aacute;l de las siguientes afirmaciones es correcta. En un rack para albergar servidores, una U se refiere a:";
 choices[37]= new Array();
 choices[37][0] = "Una medida est&aacute;ndar de la anchura de los equipos que se pueden conectar.";
 choices[37][1] = "Una medida est&aacute;ndar del consumo de cada equipo.";
 choices[37][2] = "Una medida est&aacute;ndar de la altura de los equipos que se pueden conectar.";
 choices[37][3] = "Una medida est&aacute;ndar de la longitud de los ra&iacute;les horizontales para fijar los equipos.";
 answers[37] = 2;
 units[37] = ['50'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1851. ";
 preguntaids[37] = 1851


//  Id pregunta: 1848 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento est&aacute; basado en el estado de los enlaces?";
 choices[38]= new Array();
 choices[38][0] = "RIP versi&oacute;n 1";
 choices[38][1] = "OSPF";
 choices[38][2] = "BGP";
 choices[38][3] = "RIP versi&oacute;n 2";
 answers[38] = 1;
 units[38] = ['102'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1848. ";
 preguntaids[38] = 1848


//  Id pregunta: 1861 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes herramientas software para backup NO es de c&oacute;digo abierto?";
 choices[39]= new Array();
 choices[39][0] = "Bacula";
 choices[39][1] = "BackupPC";
 choices[39][2] = "Amanda";
 choices[39][3] = "NetBackup";
 answers[39] = 3;
 units[39] = ['66'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1861. ";
 preguntaids[39] = 1861


//  Id pregunta: 1855 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones sobre el protocolo SMTP es correcta:";
 choices[40]= new Array();
 choices[40][0] = "Ejecutando el comando telnet para acceder al servidor SMTP por el puerto 25 ser&iacute;a posible enviar correos electr&oacute;nicos.";
 choices[40][1] = "Es un protocolo que necesita autenticaci&oacute;n del usuario.";
 choices[40][2] = "El cuerpo de los mensajes debe estar compuesto por caracteres ASCII de 8 bits.";
 choices[40][3] = "El protocolo modificado con las extensiones MIME, que permite ampliar el tipo de archivos que se pueden enviar, se denomina ESMTP.";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1855. ";
 preguntaids[40] = 1855


//  Id pregunta: 1808 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique cu&aacute;l de los siguientes es un modelo de almacenamiento de datos en un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG).";
 choices[41]= new Array();
 choices[41][0] = "Modelo raster";
 choices[41][1] = "Modelo de superposici&oacute;n de mapas";
 choices[41][2] = "Modelo dublincore";
 choices[41][3] = "Modelo geoparser";
 answers[41] = 0;
 units[41] = ['71'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1808. ";
 preguntaids[41] = 1808


//  Id pregunta: 1845 Año de creación de pregunta: 2016
 questions[42]= "43)  Los equipos Bluetooth emplean:";
 choices[42]= new Array();
 choices[42][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[42][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencia.";
 choices[42][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[42][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1845. ";
 preguntaids[42] = 1845


//  Id pregunta: 1864 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP?";
 choices[43]= new Array();
 choices[43][0] = "PGR";
 choices[43][1] = "SMTP";
 choices[43][2] = "ICMP";
 choices[43][3] = "SNMP";
 answers[43] = 3;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1864. ";
 preguntaids[43] = 1864


//  Id pregunta: 1800 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las caracter&iacute;sticas de las Bases de Datos XML nativas";
 choices[44]= new Array();
 choices[44][0] = "Las Bases de Datos XML nativas son bases de datos centradas en documentos";
 choices[44][1] = "Las Bases de Datos XML nativas permiten la creaci&oacute;n de &iacute;ndices";
 choices[44][2] = "Las Bases de Datos XML nativas soportan s&oacute;lo el lenguaje de consulta XML";
 choices[44][3] = "Las Bases de Datos XML nativas no tienen ning&uacute;n modelo de almacenamiento f&iacute;sico subyacente concreto";
 answers[44] = 2;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1800. ";
 preguntaids[44] = 1800


//  Id pregunta: 1842 Año de creación de pregunta: 2016
 questions[45]= "46)  El nombre del est&aacute;ndar WiMAX proviene de:";
 choices[45]= new Array();
 choices[45][0] = "Wireless Media for &Aacute;rea eXtent";
 choices[45][1] = "Worldwide Interoperability for Microwave Access";
 choices[45][2] = "WiFi MAXimun";
 choices[45][3] = "Wireless Model Access eXtensive";
 answers[45] = 1;
 units[45] = ['107'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1842. ";
 preguntaids[45] = 1842


//  Id pregunta: 1826 Año de creación de pregunta: 2016
 questions[46]= "47)  En la programaci&oacute;n orientada a objetos existe el concepto de polimorfismo. Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "El polimorfismo es una caracter&iacute;stica que permite que m&eacute;todos diferentes, asociados a objetos distintos, puedan compartir el mismo nombre.";
 choices[46][1] = "El polimorfismo es una caracter&iacute;stica que permite que atributos diferentes, asociados a m&eacute;todos distintos, puedan compartir el mismo nombre.";
 choices[46][2] = "El polimorfismo es una caracter&iacute;stica que permite que objetos diferentes, asociados a clases distintas, puedan compartir el mismo nombre.";
 choices[46][3] = "Ninguna de las opciones es correcta.";
 answers[46] = 0;
 units[46] = ['86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 1826. ";
 preguntaids[46] = 1826


//  Id pregunta: 1810 Año de creación de pregunta: 2016
 questions[47]= "48)  Entre los diferentes tipos de servidores que existen, indique en cu&aacute;l de ellos es correcto que se realicen las funciones de un servicio de cortafuegos.";
 choices[47]= new Array();
 choices[47][0] = "Servidor de acceso remoto";
 choices[47][1] = "Servidor web";
 choices[47][2] = "Servidor de red";
 choices[47][3] = "Servidor de comunicaciones";
 answers[47] = 2;
 units[47] = ['119'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1810. ";
 preguntaids[47] = 1810


//  Id pregunta: 1844 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre MPLS (Multiprotocol Label Switching)";
 choices[48]= new Array();
 choices[48][0] = "Opera entre la capa de enlace y la capa de red.";
 choices[48][1] = "Opera entre la capa de transporte y la capa de red.";
 choices[48][2] = "Complementa los servicios de TLS/SSL.";
 choices[48][3] = "Requiere una capa f&iacute;sica espec&iacute;fica.";
 answers[48] = 0;
 units[48] = ['107'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1844. ";
 preguntaids[48] = 1844


//  Id pregunta: 1873 Año de creación de pregunta: 2016
 questions[49]= "50)  XML:";
 choices[49]= new Array();
 choices[49][0] = "Es un lenguaje de presentaci&oacute;n similar a HTML, pero m&aacute;s avanzado";
 choices[49][1] = "Es similar a HTML pero con orientaci&oacute;n al mundo del dise&ntilde;o dado que permite realizar p&aacute;ginas web m&aacute;s vistosas y din&aacute;micas.";
 choices[49][2] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos.";
 choices[49][3] = "Es un lenguaje para el intercambio de informaci&oacute;n no estructurada entre diferentes plataformas.";
 answers[49] = 2;
 units[49] = ['74'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1873. ";
 preguntaids[49] = 1873


//  Id pregunta: 1854 Año de creación de pregunta: 2016
 questions[50]= "51)  En la arquitectura de Linux, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[50]= new Array();
 choices[50][0] = "La capa de programas y utilidades trabaja en modo usuario.";
 choices[50][1] = "La biblioteca est&aacute;ndar se sit&uacute;a por encima de la capa de kernel y trabaja en modo kernel.";
 choices[50][2] = "La biblioteca est&aacute;ndar accede a la capa de kernel mediante la interfaz de llamadas al sistema.";
 choices[50][3] = "El kernel se sit&uacute;a por encima de la capa del hardware.";
 answers[50] = 1;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1854. ";
 preguntaids[50] = 1854


//  Id pregunta: 1871 Año de creación de pregunta: 2016
 questions[51]= "52)  Los tipos de documentos seg&uacute;n XML son:";
 choices[51]= new Array();
 choices[51][0] = "Inv&aacute;lido y v&aacute;lido";
 choices[51][1] = "Inv&aacute;lido y bien formado";
 choices[51][2] = "Inv&aacute;lido, bien formado y v&aacute;lido";
 choices[51][3] = "lnv&aacute;lido, bien formado, v&aacute;lido y completo";
 answers[51] = 2;
 units[51] = ['74'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1871. ";
 preguntaids[51] = 1871


//  Id pregunta: 1837 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; protocolo se puede utilizar para encapsular el tr&aacute;fico que atraviesa el t&uacute;nel de VPN?";
 choices[52]= new Array();
 choices[52][0] = "IPX";
 choices[52][1] = "MPLS";
 choices[52][2] = "PPTP";
 choices[52][3] = "ATM";
 answers[52] = 2;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1837. ";
 preguntaids[52] = 1837


//  Id pregunta: 1817 Año de creación de pregunta: 2016
 questions[53]= "54)  Entre las diferentes caracter&iacute;sticas que tienen las aplicaciones de Internet enriquecidas, indique cu&aacute;l de las siguientes opciones NO es correcta";
 choices[53]= new Array();
 choices[53][0] = "Las aplicaciones de Internet enriquecidas utilizan un navegador web estandarizado para ejecutarse.";
 choices[53][1] = "Las aplicaciones de Internet enriquecidas pueden ser usadas desde cualquier ordenador con conexi&oacute;n a Internet pero con dependencia del sistema operativo que &eacute;ste utilice.";
 choices[53][2] = "Las aplicaciones de Internet enriquecidas utilizan una arquitectura cliente/servidor as&iacute;ncrona.";
 choices[53][3] = "Las aplicaciones de Internet enriquecidas surgen como una combinaci&oacute;n de las ventajas que ofrecen las aplicaciones web y las aplicaciones tradicionales.";
 answers[53] = 1;
 units[53] = ['74'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1817. ";
 preguntaids[53] = 1817


//  Id pregunta: 1874 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), cuando el mecanismo de autenticaci&oacute;n de los usuarios autorizados a acceder a la historia cl&iacute;nica se base en la existencia de contrase&ntilde;as exigir&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "Un procedimiento de asignaci&oacute;n, distribuci&oacute;n y almacenamiento que garantice su confidencialidad e integridad.";
 choices[54][1] = "Un procedimiento de asignaci&oacute;n y distribuci&oacute;n que garantice su confidencialidad e integridad.";
 choices[54][2] = "Un procedimiento que auto rice al responsable de seguridad al conocimiento de las contrase&ntilde;as.";
 choices[54][3] = "Un procedimiento que garantice una diligente distribuci&oacute;n y almacenamiento que minimice el tiempo de espera.";
 answers[54] = 0;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1874. ";
 preguntaids[54] = 1874


//  Id pregunta: 1802 Año de creación de pregunta: 2016
 questions[55]= "56)  En SQL, &iquest;cu&aacute;l de las siguientes sentencias es correcta?";
 choices[55]= new Array();
 choices[55][0] = "TRUNCATE TABLE, borra la tabla de la base de datos";
 choices[55][1] = "TRUNCATE TABLE es funcionalmente igual a DELETE TABLE";
 choices[55][2] = "TRUNCATE TABLE debe ser usado con la cl&aacute;usula WHERE";
 choices[55][3] = "Ninguna de las anteriores es correcta";
 answers[55] = 0;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1802. ";
 preguntaids[55] = 1802


//  Id pregunta: 1866 Año de creación de pregunta: 2016
 questions[56]= "57)  En un documento electr&oacute;nico, en el contexto del desarrollo de la administraci&oacute;n electr&oacute;nica, se entiende como metadato cualquier tipo de informaci&oacute;n en forma electr&oacute;nica asociada a los documentos electr&oacute;nicos. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[56]= new Array();
 choices[56][0] = "La norma t&eacute;cnica de interoperabilidad de desarrollo del ENI, relativa al documento electr&oacute;nico, determina los metadatos m&iacute;nimos obligatorios, as&iacute; como la asociaci&oacute;n de los datos o metadatos de firma o de referencia temporal de los mismos.";
 choices[56][1] = "Est&aacute;n destinados al conocimiento inmediato y automatizable de alguna de sus caracter&iacute;sticas, con la finalidad de garantizar la disponibilidad, el acceso, la conservaci&oacute;n y la interoperabilidad del propio documento.";
 choices[56][2] = "Son de car&aacute;cter instrumental y dependientes del contenido del documento.";
 choices[56][3] = "Los documentos electr&oacute;nicos susceptibles de ser integrados en un expediente electr&oacute;nico deber&aacute;n tener asociados metadatos que permitan su contextualizaci&oacute;n en el marco del &oacute;rgano u organismo, la funci&oacute;n y el procedimiento administrativo al que corresponde.";
 answers[56] = 2;
 units[56] = ['44'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 1866. ";
 preguntaids[56] = 1866


//  Id pregunta: 1863 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;aden en el protocolo SNMPv2 con respecto a las de SNMPv1?";
 choices[57]= new Array();
 choices[57][0] = "Trap";
 choices[57][1] = "GetResponse";
 choices[57][2] = "GetBulkRequest";
 choices[57][3] = "GetNextTesponse";
 answers[57] = 2;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1863. ";
 preguntaids[57] = 1863


//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[58]= "59)  Las redes ATM emplean celdas de:";
 choices[58]= new Array();
 choices[58][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[58][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[58][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[58][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[58] = 1;
 units[58] = ['107'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1843. ";
 preguntaids[58] = 1843


//  Id pregunta: 1801 Año de creación de pregunta: 2016
 questions[59]= "60)  Existen diferentes tipos de relaciones para un sistema de gesti&oacute;n de bases de datos relacional. Indique cu&aacute;l es la opci&oacute;n correcta que define a las del tipo instant&aacute;neas.";
 choices[59]= new Array();
 choices[59][0] = "Son relaciones con nombre y derivadas. Son reales: est&aacute;n representadas no s&oacute;lo por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre, sino tambi&eacute;n por sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[59][1] = "Son relaciones con nombre y derivadas. Son virtuales: est&aacute;n representadas por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre y no poseen sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[59][2] = "Son relaciones sin nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 choices[59][3] = "Son relaciones que pueden o no tener nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 answers[59] = 0;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1801. ";
 preguntaids[59] = 1801


//  Id pregunta: 1819 Año de creación de pregunta: 2016
 questions[60]= "61)  La ingenier&iacute;a de software est&aacute; formada por m&eacute;todos, herramientas y procedimientos. Indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[60]= new Array();
 choices[60][0] = "Los m&eacute;todos definen la secuencia en la que se deben aplicar los procedimientos.";
 choices[60][1] = "Los m&eacute;todos proporcionan informaci&oacute;n para conocer c&oacute;mo construir el software.";
 choices[60][2] = "Los procedimientos suministran herramientas para la ejecuci&oacute;n de los m&eacute;todos.";
 choices[60][3] = "Los procedimientos aportan los m&eacute;todos para la definici&oacute;n de las herramientas.";
 answers[60] = 1;
 units[60] = ['84'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1819. ";
 preguntaids[60] = 1819


//  Id pregunta: 1814 Año de creación de pregunta: 2016
 questions[61]= "62)  La arquitectura de una Aplicaci&oacute;n Web H&iacute;brida (Mashup) est&aacute; compuesta por diferentes partes. Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de esas partes.";
 choices[61]= new Array();
 choices[61][0] = "Sitio web";
 choices[61][1] = "Interface de usuario";
 choices[61][2] = "Servidor de aplicaciones";
 choices[61][3] = "Proveedor de contenidos";
 answers[61] = 2;
 units[61] = ['74'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1814. ";
 preguntaids[61] = 1814


//  Id pregunta: 1852 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;A qu&eacute; categor&iacute;a de la taxonom&iacute;a de Flynn pertenecen los microprocesadores multin&uacute;cleo?";
 choices[62]= new Array();
 choices[62][0] = "SISD";
 choices[62][1] = "SIMD";
 choices[62][2] = "MISD";
 choices[62][3] = "MIMD";
 answers[62] = 3;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1852. ";
 preguntaids[62] = 1852


//  Id pregunta: 1830 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; se entiende por IP Spoofing?";
 choices[63]= new Array();
 choices[63][0] = "Es un ataque que se basa en la ejecuci&oacute;n de c&oacute;digo &ldquo;Script&rdquo; arbitrario en un navegador.";
 choices[63][1] = "Es un ataque que pretende provocar un direccionamiento err&oacute;neo en los equipos afectados, mediante la traducci&oacute;n err&oacute;nea de los nombres de dominio a direcciones IP.";
 choices[63][2] = "Es un ataque que consiste en modificar la cabecera de los paquetes enviados a un determinado sistema inform&aacute;tico para simular que proceden de un equipo distinto al que verdaderamente los ha originado.";
 choices[63][3] = "Es un ataque que se compone de un conjunto de actuaciones que persiguen colapsar determinados equipos o redes inform&aacute;ticas, para impedir que puedan ofrecer sus servicios a sus clientes y usuarios.";
 answers[63] = 2;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1830. ";
 preguntaids[63] = 1830


//  Id pregunta: 1828 Año de creación de pregunta: 2016
 questions[64]= "65)  Teniendo en cuenta que las cajas negras son un tipo de prueba de software, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Las cajas negras son un tipo de pruebas de software que se hacen sobre las funciones internas de un m&oacute;dulo.";
 choices[64][1] = "Las cajas negras son un tipo de pruebas de software que dan m&aacute;s importancia al funcionamiento interno que a las entradas y salidas.";
 choices[64][2] = "Las cajas negras son un tipo de pruebas de software que se ocupan de probar si se cumplen los requisitos funcionales de la aplicaci&oacute;n.";
 choices[64][3] = "Ninguna de las opciones es correcta.";
 answers[64] = 2;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 1828. ";
 preguntaids[64] = 1828


//  Id pregunta: 1872 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), se podr&aacute;n realizar pruebas anteriores a la implantaci&oacute;n de un sistema de la informaci&oacute;n con datos reales:";
 choices[65]= new Array();
 choices[65][0] = "Si se tratan datos personales con nivel de seguridad b&aacute;sico.";
 choices[65][1] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado, se anota su realizaci&oacute;n en el documento de seguridad y se ha realizado previamente una copia de seguridad.";
 choices[65][2] = "Si se asegura el nivel de seguridad correspondiente al tratamiento realizado y se ha recibido aprobaci&oacute;n previa del responsable de seguridad.";
 choices[65][3] = "Todas las anteriores son correctas.";
 answers[65] = 1;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 1872. ";
 preguntaids[65] = 1872


//  Id pregunta: 1823 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las t&eacute;cnicas para la obtenci&oacute;n de requisitos en la ingenier&iacute;a de requisitos";
 choices[66]= new Array();
 choices[66][0] = "Estudio de riesgos";
 choices[66][1] = "Observaci&oacute;n";
 choices[66][2] = "Prototipos";
 choices[66][3] = "Entrevistas";
 answers[66] = 0;
 units[66] = ['84'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 1823. ";
 preguntaids[66] = 1823


//  Id pregunta: 1856 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique cu&aacute;l de los siguientes es un servidor web basado en c&oacute;digo abierto:";
 choices[67]= new Array();
 choices[67][0] = "Internet Information Server";
 choices[67][1] = "WebSphere";
 choices[67][2] = "WebLogic";
 choices[67][3] = "Lighttpd";
 answers[67] = 3;
 units[67] = ['66'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1856. ";
 preguntaids[67] = 1856


//  Id pregunta: 1836 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones es la correcta dentro de un sistema de cifrado sim&eacute;trico?";
 choices[68]= new Array();
 choices[68][0] = "Se utiliza un par de claves, una para cifrar y otra para descifrar.";
 choices[68][1] = "Los extremos que se comunican deben conocer la clave privada.";
 choices[68][2] = "Utilizan longitudes de claves mayores que el cifrado asim&eacute;trico.";
 choices[68][3] = "Es m&aacute;s lento que el cifrado asim&eacute;trico.";
 answers[68] = 1;
 units[68] = ['76'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1836. ";
 preguntaids[68] = 1836


//  Id pregunta: 1869 Año de creación de pregunta: 2016
 questions[69]= "70)  En referencia al lenguaje XML, &iquest;Cu&aacute;l de las siguientes opciones considera correcta?";
 choices[69]= new Array();
 choices[69][0] = "Las hojas de estilo CSS no puede ser utilizadas con HTML";
 choices[69][1] = "XSL puede usarse para transformar datos XML a documentos HTMUCSS en un servidor web";
 choices[69][2] = "CSS puede ejecutar cualquier 16gica basada en los datos";
 choices[69][3] = "XML permite m&aacute;s de un elemenio raiz.";
 answers[69] = 1;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1869. ";
 preguntaids[69] = 1869


//  Id pregunta: 1825 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cu&aacute;l es la opci&oacute;n correcta que representa el proceso de M&eacute;trica 3 donde se realiza la actividad de Valoraci&oacute;n de Alternativas";
 choices[70]= new Array();
 choices[70][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[70][1] = "An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[70][2] = "Estudio de la Viabilidad del Sistema";
 choices[70][3] = "Mantenimiento del Sistema";
 answers[70] = 2;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 1825. ";
 preguntaids[70] = 1825


//  Id pregunta: 1857 Año de creación de pregunta: 2016
 questions[71]= "72)  Cuando un CPD (Centro de Proceso de Datos) ofrece 5 nueves, se refiere a su:";
 choices[71]= new Array();
 choices[71][0] = "Seguridad.";
 choices[71][1] = "Redundancia.";
 choices[71][2] = "Capacidad de refrigeraci&oacute;n a pleno rendimiento.";
 choices[71][3] = "Disponibilidad.";
 answers[71] = 3;
 units[71] = ['50'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1857. ";
 preguntaids[71] = 1857


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[72]= new Array();
 choices[72][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[72][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[72][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[72][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[72] = 1;
 units[72] = ['97'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1827. ";
 preguntaids[72] = 1827


//  Id pregunta: 1806 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones sobre RSS NO es correcta";
 choices[73]= new Array();
 choices[73][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web";
 choices[73][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias";
 choices[73][2] = "RSS es parte de la familia de los formatos XML";
 choices[73][3] = "Es un acr&oacute;nimo de Really Simple Syndication";
 answers[73] = 1;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1806. ";
 preguntaids[73] = 1806


//  Id pregunta: 1809 Año de creación de pregunta: 2016
 questions[74]= "75)  Teniendo en cuenta las caracter&iacute;sticas del protocolo XMPP (Extensible Messaging and Presence Protocol), indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[74]= new Array();
 choices[74][0] = "XMPP ha sido formalizado como una tecnolog&iacute;a de mensajer&iacute;a instant&aacute;nea est&aacute;ndar";
 choices[74][1] = "XMPP es totalmente centralizado, para la puesta en marcha de XMPP se requiere obligatoriamente un servidor central";
 choices[74][2] = "XMPP no permite la encriptaci&oacute;n de las comunicaciones";
 choices[74][3] = "XMPP no es extensible, al no permitir crear funcionalidades personalizadas";
 answers[74] = 0;
 units[74] = ['125'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1809. ";
 preguntaids[74] = 1809


