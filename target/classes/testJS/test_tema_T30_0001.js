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
//  Id pregunta: 2235 Año de creación de pregunta: 2002
 questions[0]= "1)  Dentro del &aacute;rea de sistemas, la sub&aacute;rea de sistemas operativos, software base y sistemas corporativos NO se responsabiliza de:";
 choices[0]= new Array();
 choices[0][0] = "Servicio de Correo";
 choices[0][1] = "Dise&ntilde;o y dimensionamiento de las bases de datos.";
 choices[0][2] = "Inventario de aplicaciones que corren sobre los sistemas corporativos";
 choices[0][3] = "Creaci&oacute;n de manuales procedimientos para operaci&oacute;n.";
 answers[0] = 1;
 units[0] = ['30'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2235. ";
 preguntaids[0] = 2235


//  Id pregunta: 3487 Año de creación de pregunta: 2006
 questions[1]= "2)  En un centro de llamadas, gestionar las necesidades del usuario la primera vez que llama, evitando la necesidad de una segunda llamada";
 choices[1]= new Array();
 choices[1][0] = "Soporte electr&oacute;nico";
 choices[1][1] = "Solicitud autom&aacute;tica de repetici&oacute;n (ARQ)";
 choices[1][2] = "Calidad de servicio";
 choices[1][3] = "Resoluci&oacute;n de primera llamada";
 answers[1] = 3;
 units[1] = ['30'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 3487. ";
 preguntaids[1] = 3487


//  Id pregunta: 7039 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[2][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[2][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[2][3] = "Ninguna de las anteriores es cierta";
 answers[2] = 1;
 units[2] = ['30'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 7039. ";
 preguntaids[2] = 7039


//  Id pregunta: 2323 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;D&oacute;nde ubicar&iacute;a al Centro de Control y Gesti&oacute;n de Red (Network Management System)?:";
 choices[3]= new Array();
 choices[3][0] = "Dentro del staff del director de sistemas de informaci&oacute;n";
 choices[3][1] = "Dentro del departamento de an&aacute;lisis y programaci&oacute;n";
 choices[3][2] = "En el departamento de explotaci&oacute;n";
 choices[3][3] = "En el departamento de planificaci&oacute;n";
 answers[3] = 2;
 units[3] = ['30'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2323. ";
 preguntaids[3] = 2323


//  Id pregunta: 7349 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[4]= new Array();
 choices[4][0] = "Dos a&ntilde;os";
 choices[4][1] = "Cuatro a&ntilde;os";
 choices[4][2] = "30 meses";
 choices[4][3] = "60 meses";
 answers[4] = 3;
 units[4] = ['30'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 7349. Examen TIC B 2009";
 preguntaids[4] = 7349


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[5]= "6)  El concepto de Green CPD est&aacute; muy avanzado y se est&aacute; convirtiendo en un referente. Una de las t&eacute;cnicas utilizadas es el Free Cooling. &iquest;En qu&eacute; consiste?";
 choices[5]= new Array();
 choices[5][0] = "Utilizar software libre en el control de la climatizaci&oacute;n.";
 choices[5][1] = "Utilizar temperaturas bajo cero para la climatizaci&oacute;n.";
 choices[5][2] = "Se trata del pasillo fr&iacute;o.";
 choices[5][3] = "Utilizar las bajas temperaturas del aire exterior para la climatizaci&oacute;n.";
 answers[5] = 3;
 units[5] = ['30'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 550. AGE A2 2015";
 preguntaids[5] = 550


//  Id pregunta: 8179 Año de creación de pregunta: 2011
 questions[6]= "7)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[6]= new Array();
 choices[6][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[6][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[6][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[6][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[6] = 0;
 units[6] = ['30'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 8179. Examen TIC A2 2010 interna";
 preguntaids[6] = 8179


//  Id pregunta: 2224 Año de creación de pregunta: 2002
 questions[7]= "8)  La estructura organizacional funcional de un &aacute;rea de desarrollo:";
 choices[7]= new Array();
 choices[7][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[7][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[7][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = 0;
 units[7] = ['30'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2224. ";
 preguntaids[7] = 2224


//  Id pregunta: 4850 Año de creación de pregunta: 2002
 questions[8]= "9)  En un sistema en el que todos los usuarios necesitan el mismo servicio:";
 choices[8]= new Array();
 choices[8][0] = "Todos los usuarios esperan el mismo tiempo para ser atendidos.";
 choices[8][1] = "El tiempo total de servicio es el mismo y no depende del patr&oacute;n de llegadas.";
 choices[8][2] = "S&oacute;lo se puede acotar el tiempo m&iacute;nimo de espera.";
 choices[8][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[8] = 3;
 units[8] = ['30'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 4850. ";
 preguntaids[8] = 4850


//  Id pregunta: 5563 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[9]= new Array();
 choices[9][0] = "Mantenimiento correctivo.";
 choices[9][1] = "Mantenimiento preventivo.";
 choices[9][2] = "Mantenimiento perfectivo.";
 choices[9][3] = "Mantenimiento adaptativo.";
 answers[9] = 1;
 units[9] = ['30'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 5563. ";
 preguntaids[9] = 5563


//  Id pregunta: 2108 Año de creación de pregunta: 2002
 questions[10]= "11)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[10]= new Array();
 choices[10][0] = "Centro de control de red";
 choices[10][1] = "Help desk";
 choices[10][2] = "Centro de contingencias";
 choices[10][3] = "Soporte de teleproceso";
 answers[10] = 1;
 units[10] = ['30'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2108. ";
 preguntaids[10] = 2108


//  Id pregunta: 2458 Año de creación de pregunta: 2006
 questions[11]= "12)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[11]= new Array();
 choices[11][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[11][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[11][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[11][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[11] = 0;
 units[11] = ['30'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2458. ";
 preguntaids[11] = 2458


//  Id pregunta: 6900 Año de creación de pregunta: 2010
 questions[12]= "13)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[12]= new Array();
 choices[12][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[12][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[12][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[12][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[12] = 0;
 units[12] = ['30'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 6900. ";
 preguntaids[12] = 6900


//  Id pregunta: 5559 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[13]= new Array();
 choices[13][0] = "Agregar y quitar usuarios.";
 choices[13][1] = "Desarrollo de aplicaciones internas.";
 choices[13][2] = "Realizar copias de seguridad.";
 choices[13][3] = "Monitorizar el sistema.";
 answers[13] = 1;
 units[13] = ['30'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 5559. Examen TIC MAP B 2006";
 preguntaids[13] = 5559


//  Id pregunta: 2516 Año de creación de pregunta: 2004
 questions[14]= "15)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[14]= new Array();
 choices[14][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[14][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[14][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[14][3] = "La FNMT";
 answers[14] = 3;
 units[14] = ['30'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2516. Examen TIC MAP B 2004";
 preguntaids[14] = 2516


//  Id pregunta: 9217 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de mantenimiento NO ha sido definida en la norma ISO/IEC 14764?";
 choices[15]= new Array();
 choices[15][0] = "preventivo.";
 choices[15][1] = "progresivo.";
 choices[15][2] = "adaptativo.";
 choices[15][3] = "perfectivo.";
 answers[15] = 1;
 units[15] = ['30'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 9217. Examen TIC A1 2013";
 preguntaids[15] = 9217


//  Id pregunta: 8409 Año de creación de pregunta: 2011
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[16]= new Array();
 choices[16][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[16][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[16][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[16][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[16] = 0;
 units[16] = ['30'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 8409. ";
 preguntaids[16] = 8409


//  Id pregunta: 2308 Año de creación de pregunta: 2002
 questions[17]= "18)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Funcional";
 choices[17][1] = "Proyecto-staff";
 choices[17][2] = "Proyecto-funcional";
 choices[17][3] = "Por aplicaciones";
 answers[17] = 3;
 units[17] = ['30'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2308. ";
 preguntaids[17] = 2308


//  Id pregunta: 6898 Año de creación de pregunta: 2010
 questions[18]= "19)  En relaci&oacute;n con el funcionamiento de un CAU (Centro de Atenci&oacute;n de Usuarios) no es correcto que:";
 choices[18]= new Array();
 choices[18][0] = "Toda llamada que se reciba en el CAU debe quedar registrada como incidencia";
 choices[18][1] = "En el caso de que el primer nivel del CAU no pueda resolver la incidencia debe escalarla a un segundo nivel, que se corresponde con otras &aacute;reas del centro TIC";
 choices[18][2] = "Si el segundo nivel no puede resolver la incidencia, escalar&aacute; la incidencia al tercer nivel, compuesto en general por proveedores y empresas de mantenimiento";
 choices[18][3] = "Es responsabilidad de cada uno de los niveles documentar la incidencia, cerrarla y comunicarlo al usuario";
 answers[18] = 3;
 units[18] = ['30'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 6898. ";
 preguntaids[18] = 6898


//  Id pregunta: 8856 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n de car&aacute;cter esencialmente estrat&eacute;gico en las organizaciones TIC?";
 choices[19]= new Array();
 choices[19][0] = "Definici&oacute;n de pol&iacute;ticas de seguridad";
 choices[19][1] = "Definici&oacute;n de la arquitectura TIC";
 choices[19][2] = "Definici&oacute;n de la estrategia TIC";
 choices[19][3] = "Oficina de gesti&oacute;n de proyectos";
 answers[19] = 3;
 units[19] = ['30'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8856. ";
 preguntaids[19] = 8856


//  Id pregunta: 2357 Año de creación de pregunta: 2004
 questions[20]= "21)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[20]= new Array();
 choices[20][0] = "Departamento de Inform&aacute;tica";
 choices[20][1] = "Comit&eacute; de Seguridad";
 choices[20][2] = "Administrador de seguridad";
 choices[20][3] = "Alta Direcci&oacute;n";
 answers[20] = 3;
 units[20] = ['30'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2357. ";
 preguntaids[20] = 2357


//  Id pregunta: 2386 Año de creación de pregunta: 2006
 questions[21]= "22)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no se  realiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[21]= new Array();
 choices[21][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[21][1] = "Dise&ntilde;o f&iacute;sico del modelo de datos.";
 choices[21][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[21][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[21] = 1;
 units[21] = ['30'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2386. ";
 preguntaids[21] = 2386


//  Id pregunta: 8852 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;Cu&aacute;l es el modelo de organizaci&oacute;n TIC &oacute;ptimo?";
 choices[22]= new Array();
 choices[22][0] = "La estructura matricial con dise&ntilde;o plano";
 choices[22][1] = "La estructura funcional apuntada";
 choices[22][2] = "La estructura matricial con orientaci&oacute;n a staff";
 choices[22][3] = "Aquel que permita en cada caso conseguir los objetivos del negocio";
 answers[22] = 3;
 units[22] = ['30'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 8852. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[22] = 8852


//  Id pregunta: 5490 Año de creación de pregunta: 2007
 questions[23]= "24)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[23]= new Array();
 choices[23][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[23][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[23][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[23][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[23] = 3;
 units[23] = ['30'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 5490. ";
 preguntaids[23] = 5490


//  Id pregunta: 6327 Año de creación de pregunta: 2003
 questions[24]= "25)  El marco regulador del BOE en formato electr&oacute;nico esta recogido en la siguiente norma";
 choices[24]= new Array();
 choices[24][0] = "RD 181/2008";
 choices[24][1] = "RD 1495/2007";
 choices[24][2] = "a y b";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 0;
 units[24] = ['30'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6327. ";
 preguntaids[24] = 6327


//  Id pregunta: 6802 Año de creación de pregunta: 2010
 questions[25]= "26)  NO corresponde a los principios que deben regir un CAU:";
 choices[25]= new Array();
 choices[25][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[25][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[25][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[25][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[25] = 2;
 units[25] = ['30'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 6802. TIC A 2009";
 preguntaids[25] = 6802


//  Id pregunta: 8184 Año de creación de pregunta: 2011
 questions[26]= "27)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[26]= new Array();
 choices[26][0] = "Administraci&oacute;n de seguridad";
 choices[26][1] = "Programaci&oacute;n de aplicaciones";
 choices[26][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[26][3] = "Aseguramiento de la calidad";
 answers[26] = 1;
 units[26] = ['30'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8184. Examen TIC A2 2010 interna";
 preguntaids[26] = 8184


//  Id pregunta: 2243 Año de creación de pregunta: 2002
 questions[27]= "28)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[27]= new Array();
 choices[27][0] = "Desarrollo";
 choices[27][1] = "Mantenimiento";
 choices[27][2] = "Producci&oacute;n";
 choices[27][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[27] = 2;
 units[27] = ['30'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2243. ";
 preguntaids[27] = 2243


//  Id pregunta: 5570 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes elementos de un centro de contacto acepta la combinaci&oacute;n de la voz humana y pulsaciones en el teclado y provee respuestas en forma de voz?";
 choices[28]= new Array();
 choices[28][0] = "Sistema de respuesta de voz interactiva (IVR).";
 choices[28][1] = "Agente Virtual Inteligente (IVA).";
 choices[28][2] = "Distribuidor Autom&aacute;tico de Llamadas (ASR).";
 choices[28][3] = "Sistema de Reconocimiento Autom&aacute;tico del Lenguaje (ASR).";
 answers[28] = 0;
 units[28] = ['30'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 5570. ";
 preguntaids[28] = 5570


//  Id pregunta: 2388 Año de creación de pregunta: 2006
 questions[29]= "30)  Cual de las siguientes funciones corresponde al &aacute;rea de Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[29]= new Array();
 choices[29][0] = "Control y monitorizaci&oacute;n de la plataforma";
 choices[29][1] = "Optimizaci&oacute;n de la operativa diaria";
 choices[29][2] = "Salvaguarda de datos.";
 choices[29][3] = "Todas ellas";
 answers[29] = 3;
 units[29] = ['30'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2388. ";
 preguntaids[29] = 2388


//  Id pregunta: 3945 Año de creación de pregunta: 2002
 questions[30]= "31)  Para evaluar el comportamiento de un sistema inform&aacute;tico se utilizan diferentes variables. Una de las siguientes no es utilizada para este fin:";
 choices[30]= new Array();
 choices[30][0] = "Factor de cola";
 choices[30][1] = "Overhead";
 choices[30][2] = "Swapping";
 choices[30][3] = "Triggers";
 answers[30] = 3;
 units[30] = ['30'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 3945. ";
 preguntaids[30] = 3945


//  Id pregunta: 2358 Año de creación de pregunta: 2004
 questions[31]= "32)  La propiedad de un proyecto y de los aplicativos resultantes del ciclo de vida del software corresponde a:";
 choices[31]= new Array();
 choices[31][0] = "Departamento de Inform&aacute;tica";
 choices[31][1] = "Direcci&oacute;n del Departamento usuario";
 choices[31][2] = "Comit&eacute; de Direcci&oacute;n del Proyecto";
 choices[31][3] = "Compartido por todos";
 answers[31] = 1;
 units[31] = ['30'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2358. ";
 preguntaids[31] = 2358


//  Id pregunta: 2387 Año de creación de pregunta: 2006
 questions[32]= "33)  Cual de las siguiente subareas no pertenece tradicionalmente a sistemas";
 choices[32]= new Array();
 choices[32][0] = "Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[32][1] = "Microinform&aacute;tica";
 choices[32][2] = "Desarrollo";
 choices[32][3] = "Integraci&oacute;n de Sistemas";
 answers[32] = 2;
 units[32] = ['30'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2387. ";
 preguntaids[32] = 2387


//  Id pregunta: 5569 Año de creación de pregunta: 2007
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Debe ser independiente del departamento de sistemas.";
 choices[33][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[33][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[33][3] = "Centra su actividad en la seguridad en las redes.";
 answers[33] = 3;
 units[33] = ['30'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 5569. ";
 preguntaids[33] = 5569


//  Id pregunta: 6368 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;En que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[34]= new Array();
 choices[34][0] = "En que la segunda ha supuesto un mayor refinamiento en los niveles de seguridad";
 choices[34][1] = "En el tipo de certificado digital implicado";
 choices[34][2] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia del certificado digital";
 choices[34][3] = "En que la segunda es completamente equivalente a la firma manuscrita";
 answers[34] = 2;
 units[34] = ['30'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6368. Examen 2006 JCYL";
 preguntaids[34] = 6368


//  Id pregunta: 2365 Año de creación de pregunta: 2004
 questions[35]= "36)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[35]= new Array();
 choices[35][0] = "Apuntado, plano, basado en la l&iacute;nea.";
 choices[35][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[35][2] = "Apuntado, plano, jer&aacute;rquico y formal";
 choices[35][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[35] = 1;
 units[35] = ['30'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2365. ";
 preguntaids[35] = 2365


//  Id pregunta: 4883 Año de creación de pregunta: 2002
 questions[36]= "37)  La f&oacute;rmula de Little es:";
 choices[36]= new Array();
 choices[36][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[36][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[36][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[36][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[36] = 2;
 units[36] = ['30'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 4883. ";
 preguntaids[36] = 4883


//  Id pregunta: 2176 Año de creación de pregunta: 2002
 questions[37]= "38)  En un Centro de Proceso de Datos el desarrollo de una nueva aplicaci&oacute;n y su puesta en producci&oacute;n es responsabilidad de las &aacute;reas de:";
 choices[37]= new Array();
 choices[37][0] = "Desarrollo exclusivamente";
 choices[37][1] = "Desarrollo y sistemas";
 choices[37][2] = "Sistemas y producci&oacute;n";
 choices[37][3] = "Desarrollo, sistemas y producci&oacute;n";
 answers[37] = 3;
 units[37] = ['30'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2176. ";
 preguntaids[37] = 2176


//  Id pregunta: 2366 Año de creación de pregunta: 2004
 questions[38]= "39)  A la hora de gestionar y resolver una incidencia en un CAU, se establecen los siguientes niveles de gesti&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Tres niveles: nivel 1 (el propio CAU), nivel 2 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 3 (los proveedores externos y/o empresas de mantenimiento)";
 choices[38][1] = "Cuatro niveles: nivel 1 (las herramientas de diagn&oacute;stico y recuperaci&oacute;n del sistema o aplicaci&oacute;n), nivel 2 (el propio CAU), nivel 3 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 4 (los proveedores externos y/o empresas de mantenimiento)";
 choices[38][2] = "a y b son correctas";
 choices[38][3] = "a y b son incorrectas";
 answers[38] = 0;
 units[38] = ['30'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2366. ";
 preguntaids[38] = 2366


//  Id pregunta: 2055 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Qu&eacute; unidad funcional, dentro de las existentes habitualmente en la estructura inform&aacute;tica de un organismo p&uacute;blico, deber&iacute;a ejercer las funciones de control de calidad de los procesos, gesti&oacute;n de red y gesti&oacute;n de seguridad de datos y procesos?:";
 choices[39]= new Array();
 choices[39][0] = "Sistemas";
 choices[39][1] = "Desarrollo";
 choices[39][2] = "Operaciones/explotaci&oacute;n";
 choices[39][3] = "Soporte a usuarios";
 answers[39] = 0;
 units[39] = ['30'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2055. ";
 preguntaids[39] = 2055


//  Id pregunta: 10289 Año de creación de pregunta: 2015
 questions[40]= "41)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[40]= new Array();
 choices[40][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[40][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[40][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[40][3] = "Todas las anteriores son verdaderas";
 answers[40] = 3;
 units[40] = ['30'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 10289. ";
 preguntaids[40] = 10289


//  Id pregunta: 3727 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[41]= new Array();
 choices[41][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[41][1] = "Organizaci&oacute;n funcional";
 choices[41][2] = "Organizaci&oacute;n proyecto-staff";
 choices[41][3] = "Organizaci&oacute;n por aplicaciones";
 answers[41] = 0;
 units[41] = ['30'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 3727. ";
 preguntaids[41] = 3727


//  Id pregunta: 8855 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[42]= new Array();
 choices[42][0] = "El nivel 1 (CAU)";
 choices[42][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[42][2] = "El nivel 3 (proveedores)";
 choices[42][3] = "Aquel nivel que resuelva la incidencia";
 answers[42] = 0;
 units[42] = ['30'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 8855. ";
 preguntaids[42] = 8855


//  Id pregunta: 2390 Año de creación de pregunta: 2006
 questions[43]= "44)  Un principio que debe regir el CAU es:";
 choices[43]= new Array();
 choices[43][0] = "Mejora continua del servicio proporcionado.";
 choices[43][1] = "Proveer tantos puntos de contacto como &aacute;reas";
 choices[43][2] = "Solicitar&aacute; informaci&oacute;n escrita al usuario de la incidencia que cursa";
 choices[43][3] = "Limitar&aacute; el tiempo de atenci&oacute;n al usuario";
 answers[43] = 0;
 units[43] = ['30'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2390. ";
 preguntaids[43] = 2390


//  Id pregunta: 4884 Año de creación de pregunta: 2002
 questions[44]= "45)  La f&oacute;rmula de Little indica:";
 choices[44]= new Array();
 choices[44][0] = "N&uacute;mero medio de servidores esperando a ser requeridos por el usuario";
 choices[44][1] = "N&uacute;mero medio de usuarios esperando";
 choices[44][2] = "N&uacute;mero m&aacute;ximo de usuarios esperando que puede soportar el sistema";
 choices[44][3] = "N&uacute;mero medio de usuarios en el sistema";
 answers[44] = 3;
 units[44] = ['30'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 4884. ";
 preguntaids[44] = 4884


//  Id pregunta: 5576 Año de creación de pregunta: 2007
 questions[45]= "46)  En el campo de la evaluaci&oacute;n de la seguridad de los sistemas de informaci&oacute;n, destacan los criterios TCSEC Indique cu&aacute;l es el nivel de protecci&oacute;n obligatoria conocido como &ldquo;Dominios de Seguridad&rdquo;:";
 choices[45]= new Array();
 choices[45][0] = "D";
 choices[45][1] = "C";
 choices[45][2] = "B1";
 choices[45][3] = "B3";
 answers[45] = 3;
 units[45] = ['30'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 5576. ";
 preguntaids[45] = 5576


//  Id pregunta: 2165 Año de creación de pregunta: 2002
 questions[46]= "47)  En la planificaci&oacute;n f&iacute;sica de un centro de proceso de datos es esencial tener en cuenta el aspecto siguiente:";
 choices[46]= new Array();
 choices[46][0] = "Debe asegurarse el suministro de energ&iacute;a el&eacute;ctrica haciendo un contrato con m&aacute;s de un suministrador o instalando generadores";
 choices[46][1] = "Debe estar situado junto a una v&iacute;a r&aacute;pida de comunicaci&oacute;n";
 choices[46][2] = "El edificio no debe tener m&aacute;s de cuatro plantas";
 choices[46][3] = "En la azotea deben instalarse paneles solares";
 answers[46] = 0;
 units[46] = ['30'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2165. ";
 preguntaids[46] = 2165


//  Id pregunta: 2225 Año de creación de pregunta: 2002
 questions[47]= "48)  La estructura organizacional por aplicaciones de un &aacute;rea de desarrollo:";
 choices[47]= new Array();
 choices[47][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[47][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[47][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 1;
 units[47] = ['30'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2225. ";
 preguntaids[47] = 2225


//  Id pregunta: 7004 Año de creación de pregunta: 2010
 questions[48]= "49)  &iquest;Cu&aacute; de las siguientes afirmaciones referentes a tipos de mantenimiento es falsa?";
 choices[48]= new Array();
 choices[48][0] = "Mantenimiento Correctivo comprende aquellos cambios necesarios para corregir errores del producto software";
 choices[48][1] = "Mantenimiento Evolutivo se refiere a las modificaciones necesarias para adaptar el sistema y el entorno a una nueva versi&oacute;n del producto";
 choices[48][2] = "Mantenimiento Adaptativo engloba las modificaciones que afectan a los entornos en los que el sistema opera: cambios de configuraci&oacute;n del hardware, software de base, gestores de base de datos, comunicaciones, etc.";
 choices[48][3] = "Mantenimiento Perfectivo son acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia";
 answers[48] = 1;
 units[48] = ['30'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 7004. TIC-B 2009 bloque desarrollo";
 preguntaids[48] = 7004


//  Id pregunta: 3473 Año de creación de pregunta: 2006
 questions[49]= "50)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Econom&iacute;a, Industria y Competitividad.";
 choices[49][1] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[49][2] = "El Ministerio de Justicia";
 choices[49][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[49] = 1;
 units[49] = ['30'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 3473. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";
 preguntaids[49] = 3473


//  Id pregunta: 5488 Año de creación de pregunta: 2007
 questions[50]= "51)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[50]= new Array();
 choices[50][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[50][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[50][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[50][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[50] = 0;
 units[50] = ['30'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 5488. ";
 preguntaids[50] = 5488


//  Id pregunta: 2385 Año de creación de pregunta: 2006
 questions[51]= "52)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[51]= new Array();
 choices[51][0] = "prescindir casi  totalmente de los formalismos.";
 choices[51][1] = "Las  comunicaciones son de todos con todos, sobre todo por niveles.";
 choices[51][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas de  acuerdo a normas estrictas.";
 choices[51][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[51] = 1;
 units[51] = ['30'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2385. ";
 preguntaids[51] = 2385


//  Id pregunta: 8857 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes siguientes afirmaciones relativas a las organizaciones TIC es incorrecta?";
 choices[52]= new Array();
 choices[52][0] = "El &aacute;rea de log&iacute;stica no siempre pertenece a la organizaci&oacute;n TIC";
 choices[52][1] = "Existe una tendencia en el &aacute;rea de desarrollo y mantenimiento hacia el modelo de organizaci&oacute;n proyecto-funcional";
 choices[52][2] = "El sistema de funcionamiento formal se caracteriza por un elevado n&uacute;mero de niveles jer&aacute;rquicos";
 choices[52][3] = "El CAU suministra informaci&oacute;n a los usuarios para resolver incidencias";
 answers[52] = 2;
 units[52] = ['30'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 8857. ";
 preguntaids[52] = 8857


//  Id pregunta: 2389 Año de creación de pregunta: 2006
 questions[53]= "54)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[53]= new Array();
 choices[53][0] = "En entorno de microinform&aacute;tica";
 choices[53][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[53][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[53][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[53] = 2;
 units[53] = ['30'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2389. ";
 preguntaids[53] = 2389


//  Id pregunta: 2226 Año de creación de pregunta: 2002
 questions[54]= "55)  La estructura sectorial de una organizaci&oacute;n NO se caracteriza por:";
 choices[54]= new Array();
 choices[54][0] = "Alta especializaci&oacute;n del personal al trabajar siempre en la misma aplicaci&oacute;n.";
 choices[54][1] = "Riesgo de contar con pocos especialistas que conozcan una determinada aplicaci&oacute;n";
 choices[54][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[54][3] = "No se necesita una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente.";
 answers[54] = 2;
 units[54] = ['30'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2226. ";
 preguntaids[54] = 2226


//  Id pregunta: 5491 Año de creación de pregunta: 2007
 questions[55]= "56)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[55]= new Array();
 choices[55][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[55][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[55][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[55][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[55] = 1;
 units[55] = ['30'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 5491. ";
 preguntaids[55] = 5491


//  Id pregunta: 8853 Año de creación de pregunta: 2013
 questions[56]= "57)  &iquest;Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)?";
 choices[56]= new Array();
 choices[56][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[56][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[56][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[56][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[56] = 2;
 units[56] = ['30'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 8853. ";
 preguntaids[56] = 8853


//  Id pregunta: 2384 Año de creación de pregunta: 2006
 questions[57]= "58)  Cual de las siguientes afirmaciones NO es una ventaja de una organizaci&oacute;n estructurada de forma funcional";
 choices[57]= new Array();
 choices[57][0] = "Se aprovechan mucho mejor los recursos humanos al no estar adjudicados a un &uacute;nico proyecto.";
 choices[57][1] = "Se conoce mejor la organizaci&oacute;n desde arriba";
 choices[57][2] = "Alta especializaci&oacute;n de los empleados en comparaci&oacute;n con la estructura sectorial";
 choices[57][3] = "Se evita el riesgo de la dependencia excesiva de unos pocos expertos";
 answers[57] = 2;
 units[57] = ['30'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2384. ";
 preguntaids[57] = 2384


//  Id pregunta: 8854 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[58]= new Array();
 choices[58][0] = "Sistemas";
 choices[58][1] = "Log&iacute;stica";
 choices[58][2] = "Comunicaciones";
 choices[58][3] = "Seguridad";
 answers[58] = 0;
 units[58] = ['30'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 8854. ";
 preguntaids[58] = 8854


