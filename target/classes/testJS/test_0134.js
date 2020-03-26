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
//  Id pregunta: 9902 Año de creación de pregunta: 2015
 questions[0]= "1)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[0]= new Array();
 choices[0][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[0][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[0][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[0][3] = "Todas las anteriores.";
 answers[0] = 3;
 units[0] = ['7', '19'];
 blocks[0] = ['A2', 'A4'];
 comments[0] = "Id Pregunta: 9902. ";
 preguntaids[0] = 9902


//  Id pregunta: 5422 Año de creación de pregunta: 2007
 questions[1]= "2)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[1]= new Array();
 choices[1][0] = "Iniciaci&oacute;n";
 choices[1][1] = "Finalizaci&oacute;n";
 choices[1][2] = "Transici&oacute;n";
 choices[1][3] = "Elaboraci&oacute;n";
 answers[1] = 1;
 units[1] = ['84'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5422. ";
 preguntaids[1] = 5422


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[2]= new Array();
 choices[2][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[2][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[2][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[2][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[2] = 2;
 units[2] = ['74'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7599. Map 2006";
 preguntaids[2] = 7599


//  Id pregunta: 5067 Año de creación de pregunta: 2002
 questions[3]= "4)  S-HTTP:";
 choices[3]= new Array();
 choices[3][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[3][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[3][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[3][3] = "Es un protocolo del nivel de transporte";
 answers[3] = 1;
 units[3] = ['120'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5067. ";
 preguntaids[3] = 5067


//  Id pregunta: 3590 Año de creación de pregunta: 2002
 questions[4]= "5)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[4]= new Array();
 choices[4][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[4][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[4][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[4][3] = "Todas son falsas";
 answers[4] = 3;
 units[4] = ['84', '86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3590. ";
 preguntaids[4] = 3590


//  Id pregunta: 7573 Año de creación de pregunta: 2010
 questions[5]= "6)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad/Relaci&oacute;n), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[5]= new Array();
 choices[5][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos.";
 choices[5][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo.";
 choices[5][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo.";
 choices[5][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece.";
 answers[5] = 2;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7573. Map 2006";
 preguntaids[5] = 7573


//  Id pregunta: 7299 Año de creación de pregunta: 2010
 questions[6]= "7)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[6]= new Array();
 choices[6][0] = "En todos los datos personales";
 choices[6][1] = "En los datos personales a los que aplican las medidas de seguridad de nivel b&aacute;sico";
 choices[6][2] = "En los datos personales a los que aplican las medidas de seguridad de nivel medio";
 choices[6][3] = "En los datos personales a los que aplican las medidas de seguridad de nivel alto";
 answers[6] = 3;
 units[6] = ['79'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7299. ";
 preguntaids[6] = 7299


//  Id pregunta: 9100 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[7]= new Array();
 choices[7][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[7][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[7][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[7][3] = "Todas las respuestas anteriores son ciertas.";
 answers[7] = 3;
 units[7] = ['52'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9100. Examen TIC-A1 2013";
 preguntaids[7] = 9100


//  Id pregunta: 6158 Año de creación de pregunta: 2001
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[8]= new Array();
 choices[8][0] = "el algoritmo RIPEMD-160";
 choices[8][1] = "los algoritmos RSA y RW";
 choices[8][2] = "los algoritmos DHE y DSAE";
 choices[8][3] = "el algoritmo Rijndael";
 answers[8] = 1;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6158. ";
 preguntaids[8] = 6158


//  Id pregunta: 6240 Año de creación de pregunta: 2003
 questions[9]= "10)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[9]= new Array();
 choices[9][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[9][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[9][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Energia, Turismo y Agenda Digital.";
 choices[9][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[9] = 1;
 units[9] = ['48'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 6240. Examen TIC A Castilla La Mancha 2007";
 preguntaids[9] = 6240


//  Id pregunta: 6290 Año de creación de pregunta: 2003
 questions[10]= "11)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[10]= new Array();
 choices[10][0] = "5";
 choices[10][1] = "7";
 choices[10][2] = "9";
 choices[10][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[10] = 3;
 units[10] = ['82'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6290. ";
 preguntaids[10] = 6290


//  Id pregunta: 3301 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[11]= new Array();
 choices[11][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[11][1] = "Cada procesador tiene su propia memoria local";
 choices[11][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[11][3] = "Todas las anteriores son ciertas";
 answers[11] = 3;
 units[11] = ['49'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3301. ";
 preguntaids[11] = 3301


//  Id pregunta: 9050 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[12]= new Array();
 choices[12][0] = "CMM";
 choices[12][1] = "CMMI Escalonado";
 choices[12][2] = "CMMI Continuo";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 0;
 units[12] = ['92'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9050. ";
 preguntaids[12] = 9050


//  Id pregunta: 3331 Año de creación de pregunta: 2004
 questions[13]= "14)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[13]= new Array();
 choices[13][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[13][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[13][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[13][3] = "Todas son ciertas";
 answers[13] = 3;
 units[13] = ['63'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3331. ";
 preguntaids[13] = 3331


//  Id pregunta: 8920 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[14]= new Array();
 choices[14][0] = "Autoridad limitada para la toma de decisiones";
 choices[14][1] = "Presupuestos plurianuales en todos los casos";
 choices[14][2] = "M&uacute;ltiples actores involucrados";
 choices[14][3] = "Coordinaci&oacute;n entre organismos";
 answers[14] = 1;
 units[14] = ['40'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 8920. ";
 preguntaids[14] = 8920


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[15]= "16)  La sede del Parlamento Europeo se encuentra en:";
 choices[15]= new Array();
 choices[15][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[15][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[15][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[15][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[15] = 1;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 171. Uni&oacute;n Europea";
 preguntaids[15] = 171


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[16]= new Array();
 choices[16][0] = "Tribunal Central de Recursos Especiales";
 choices[16][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[16][2] = "Tribunal Administrativo Tributario";
 choices[16][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[16] = 1;
 units[16] = ['10'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[16] = 9038


//  Id pregunta: 2078 Año de creación de pregunta: 2002
 questions[17]= "18)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[17]= new Array();
 choices[17][0] = "CEN";
 choices[17][1] = "CENELEC";
 choices[17][2] = "ETSI";
 choices[17][3] = "ECMA";
 answers[17] = 2;
 units[17] = ['48'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2078. ";
 preguntaids[17] = 2078


//  Id pregunta: 4696 Año de creación de pregunta: 2002
 questions[18]= "19)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[18]= new Array();
 choices[18][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[18][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[18][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[18][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[18] = 2;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4696. ";
 preguntaids[18] = 4696


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[19]= "20)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[19]= new Array();
 choices[19][0] = "la Administraci&oacute;n General del Estado";
 choices[19][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[19][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[19][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[19] = 3;
 units[19] = ['7'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 217. Ley 39/2015";
 preguntaids[19] = 217


//  Id pregunta: 2136 Año de creación de pregunta: 2004
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[20]= new Array();
 choices[20][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[20][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[20][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[20][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[20] = 2;
 units[20] = ['33'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2136. Examen TIC MAP B 2004";
 preguntaids[20] = 2136


//  Id pregunta: 10449 Año de creación de pregunta: 2015
 questions[21]= "22)  En relaci&oacute;n con los modos de operaci&oacute;n fundamentales de los algoritmos hash:";
 choices[21]= new Array();
 choices[21][0] = "El modo de operaci&oacute;n MDC sirve para la verificaci&oacute;n de integridad de mensajes";
 choices[21][1] = "MAC permite comprobar tanto la integridad como la autenticidad del origen de un mensaje a trav&eacute;s de una clave compartida.";
 choices[21][2] = "HMAC de IPSec es un ejemplo de implementaci&oacute;n de MAC.";
 choices[21][3] = "Todas las respuestas son verdaderas";
 answers[21] = 3;
 units[21] = ['76'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10449. ";
 preguntaids[21] = 10449


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[22]= "23)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[22]= new Array();
 choices[22][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[22][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[22][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[22][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[22] = 1;
 units[22] = ['14'];
 blocks[22] = ['A3'];
 comments[22] = "Id Pregunta: 353. Estado del Bienestar";
 preguntaids[22] = 353


//  Id pregunta: 3298 Año de creación de pregunta: 2004
 questions[23]= "24)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[23]= new Array();
 choices[23][0] = "Leer ficheros locales";
 choices[23][1] = "Cargar librer&iacute;as nativas";
 choices[23][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[23][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[23] = 2;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3298. ";
 preguntaids[23] = 3298


//  Id pregunta: 9041 Año de creación de pregunta: 2014
 questions[24]= "25)  FAN-OUT es una medida de:";
 choices[24]= new Array();
 choices[24][0] = "Complejidad";
 choices[24][1] = "Reutilizaci&oacute;n";
 choices[24][2] = "Mantenibilidad";
 choices[24][3] = "Ninguna de las anteriores.";
 answers[24] = 0;
 units[24] = ['94'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9041. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";
 preguntaids[24] = 9041


//  Id pregunta: 8046 Año de creación de pregunta: 2011
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma:";
 choices[25]= new Array();
 choices[25][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[25][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[25][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[25][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado.";
 answers[25] = 2;
 units[25] = ['47'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8046. Examen TIC A2 2010";
 preguntaids[25] = 8046


//  Id pregunta: 2946 Año de creación de pregunta: 2002
 questions[26]= "27)  La multiprogramaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Se basa en el concepto de tiempo compartido";
 choices[26][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[26][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[26][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[26] = 1;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2946. ";
 preguntaids[26] = 2946


//  Id pregunta: 2991 Año de creación de pregunta: 2002
 questions[27]= "28)  MPI:";
 choices[27]= new Array();
 choices[27][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[27][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[27][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[27][3] = "Todas son falsas";
 answers[27] = 0;
 units[27] = ['55'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2991. ";
 preguntaids[27] = 2991


//  Id pregunta: 9215 Año de creación de pregunta: 2014
 questions[28]= "29)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[28]= new Array();
 choices[28][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[28][1] = "solo puede haber un estado final.";
 choices[28][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[28][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[28] = 0;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9215. Examen TIC A1 2013";
 preguntaids[28] = 9215


//  Id pregunta: 10887 Año de creación de pregunta: 2015
 questions[29]= "30)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[29]= new Array();
 choices[29][0] = "Punto a punto";
 choices[29][1] = "Broadcast multi-acceso";
 choices[29][2] = "No broadcast multi-acceso";
 choices[29][3] = "Broadcast punto a multipunto";
 answers[29] = 2;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10887. ";
 preguntaids[29] = 10887


//  Id pregunta: 7041 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[30]= new Array();
 choices[30][0] = "Ente";
 choices[30][1] = "Participaci&oacute;n";
 choices[30][2] = "Instancia";
 choices[30][3] = "Abstracci&oacute;n";
 answers[30] = 2;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7041. ";
 preguntaids[30] = 7041


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[31]= "32)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[31]= new Array();
 choices[31][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[31][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[31][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[31][3] = "las respuestas 'a' y 'b' son correctas";
 answers[31] = 0;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 2474. ";
 preguntaids[31] = 2474


//  Id pregunta: 9581 Año de creación de pregunta: 2014
 questions[32]= "33)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha por contienda?";
 choices[32]= new Array();
 choices[32][0] = "Paso de testigo en anillo.";
 choices[32][1] = "CSMA no persistente.";
 choices[32][2] = "ALOHA ranurado.";
 choices[32][3] = "Contenci&oacute;n.";
 answers[32] = 1;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9581. TIC A2 2013 libre";
 preguntaids[32] = 9581


//  Id pregunta: 2185 Año de creación de pregunta: 2002
 questions[33]= "34)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[33][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[33][2] = "La a) y la b) son correctas";
 choices[33][3] = "La a) y la b) son incorrectas";
 answers[33] = 2;
 units[33] = ['36', '45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2185. ";
 preguntaids[33] = 2185


//  Id pregunta: 1730 Año de creación de pregunta: 2016
 questions[34]= "35)  En un Sistema de Gesti&oacute;n de Base de Datos (SGBD) debe garantizarse la total satisfacci&oacute;n la CONSISTENCIA, es decir que:";
 choices[34]= new Array();
 choices[34][0] = "Varios accesos simult&aacute;neos a cada Base de Datos sin conflictos.";
 choices[34][1] = "En todo momento, los valores de los datos no presenten contradicciones.";
 choices[34][2] = "Los valores de los datos sean aut&eacute;nticos, conforme a las reglas sem&aacute;nticas establecidas por dise&ntilde;o.";
 choices[34][3] = "En caso de fallo (hardware, alimentaci&oacute;n, etc) la Base de Datos vuelva a un estado &iacute;ntegro anterior al fallo.";
 answers[34] = 1;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1730. ";
 preguntaids[34] = 1730


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[35]= new Array();
 choices[35][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[35][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[35][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[35][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[35] = 3;
 units[35] = ['11'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 326. Presupuestos generales";
 preguntaids[35] = 326


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[36]= "37)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[36]= new Array();
 choices[36][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[36][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[36][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[36][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[36] = 2;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 242. Ley 39/2015";
 preguntaids[36] = 242


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ala la correcta:";
 choices[37]= new Array();
 choices[37][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[37][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[37][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[37][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[37] = 1;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 240. Ley 39/2015";
 preguntaids[37] = 240


//  Id pregunta: 6744 Año de creación de pregunta: 2009
 questions[38]= "39)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[38]= new Array();
 choices[38][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[38][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[38][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[38][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[38] = 0;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6744. MAP 2008 A1";
 preguntaids[38] = 6744


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os.";
 choices[39][1] = "Dos a&ntilde;os y medio.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Seis a&ntilde;os.";
 answers[39] = 2;
 units[39] = ['5'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 111. Uni&oacute;n Europea";
 preguntaids[39] = 111


//  Id pregunta: 920 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un ataque que se caracteriza porque el fraude est&aacute; dirigido principalmente a ejecutivos de alto nivel con objeto de obtener todo tipo de informaci&oacute;n confidencial para el acceso y control de los sistemas de informaci&oacute;n de la empresa?";
 choices[40]= new Array();
 choices[40][0] = "Hunting";
 choices[40][1] = "Stalking";
 choices[40][2] = "Whaling";
 choices[40][3] = "Trusting";
 answers[40] = 2;
 units[40] = ['120'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 920. AGE A2 2015";
 preguntaids[40] = 920


//  Id pregunta: 5378 Año de creación de pregunta: 2006
 questions[41]= "42)  No es cierto que la herramienta Nagios";
 choices[41]= new Array();
 choices[41][0] = "Puede monitorizar servicios TCP";
 choices[41][1] = "Es una alternativa a Bigbrother";
 choices[41][2] = "Puede utilizar agentes distintos a SNMP";
 choices[41][3] = "Puede ser instalada en Windows";
 answers[41] = 3;
 units[41] = ['114'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5378. ";
 preguntaids[41] = 5378


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[42]= new Array();
 choices[42][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[42][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[42][2] = "c) Todas las respuestas son correctas.";
 choices[42][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[42] = 1;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 177. Uni&oacute;n Europea";
 preguntaids[42] = 177


//  Id pregunta: 7198 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[43]= new Array();
 choices[43][0] = "S&iacute;";
 choices[43][1] = "No";
 choices[43][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[43][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[43] = 0;
 units[43] = ['108'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7198. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";
 preguntaids[43] = 7198


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[44]= new Array();
 choices[44][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[44][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[44][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[44][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[44] = 0;
 units[44] = ['1'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 26. Constituci&oacute;n de 1978";
 preguntaids[44] = 26


//  Id pregunta: 6665 Año de creación de pregunta: 2009
 questions[45]= "46)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[45]= new Array();
 choices[45][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[45][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[45][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[45][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[45] = 1;
 units[45] = ['110'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6665. MAP 2008 A1";
 preguntaids[45] = 6665


//  Id pregunta: 10904 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana?";
 choices[46]= new Array();
 choices[46][0] = "la cantidad de datos que el destino puede procesar a la vez";
 choices[46][1] = "el n&uacute;mero de servicios incluidos en el segmento TCP";
 choices[46][2] = "la cantidad de datos que la fuente es capaz de enviar de una sola vez";
 choices[46][3] = "la cantidad de datos a transmitir";
 answers[46] = 0;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10904. ";
 preguntaids[46] = 10904


//  Id pregunta: 1039 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[47]= new Array();
 choices[47][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[47][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[47][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[47][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[47] = 2;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1039. Ley 40/2015";
 preguntaids[47] = 1039


//  Id pregunta: 10868 Año de creación de pregunta: 2015
 questions[48]= "49)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[48]= new Array();
 choices[48][0] = "Su UID es el 0.";
 choices[48][1] = "Recibe el nombre de superusuario.";
 choices[48][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[48][3] = "Puede fijar prioridades a los procesos.";
 answers[48] = 2;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10868. ";
 preguntaids[48] = 10868


//  Id pregunta: 4836 Año de creación de pregunta: 2002
 questions[49]= "50)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[49]= new Array();
 choices[49][0] = "Multimedia application Protocol";
 choices[49][1] = "Mediagateway Advanced Protocol";
 choices[49][2] = "Medium Access Protocol";
 choices[49][3] = "Mobile Application Part";
 answers[49] = 3;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4836. ";
 preguntaids[49] = 4836


//  Id pregunta: 3899 Año de creación de pregunta: 2002
 questions[50]= "51)  El tesauro es un diccionario din&aacute;mico de descriptores que pasa las relaciones entre sus t&eacute;rminos:";
 choices[50]= new Array();
 choices[50][0] = "En operadores de jerarqu&iacute;a";
 choices[50][1] = "En operaciones asociativos";
 choices[50][2] = "En operadores sem&aacute;nticos y preferenciales";
 choices[50][3] = "Son correctas todas las respuestas anteriores";
 answers[50] = 3;
 units[50] = ['100'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3899. ";
 preguntaids[50] = 3899


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[51]= new Array();
 choices[51][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[51][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[51][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[51][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[51] = 993


//  Id pregunta: 5162 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Qu&eacute; mensajes son necesarios para establecer una conexi&oacute;n TCP?:";
 choices[52]= new Array();
 choices[52][0] = "SYN y ACK";
 choices[52][1] = "SYN, SYN-ACK y ACK";
 choices[52][2] = "SYN, SYN-ACK, ACK y NSI";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = 1;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5162. ";
 preguntaids[52] = 5162


//  Id pregunta: 3292 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[53]= new Array();
 choices[53][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[53][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[53][2] = "Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[53][3] = "Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[53] = 1;
 units[53] = ['86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3292. ";
 preguntaids[53] = 3292


//  Id pregunta: 10298 Año de creación de pregunta: 2015
 questions[54]= "55)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[54]= new Array();
 choices[54][0] = "200 p&iacute;xeles por pulgada";
 choices[54][1] = "125 p&iacute;xeles por pulgada";
 choices[54][2] = "256 p&iacute;xeles por pulgada";
 choices[54][3] = "80 p&iacute;xeles por pulgada";
 answers[54] = 0;
 units[54] = ['43'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 10298. ";
 preguntaids[54] = 10298


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[55]= new Array();
 choices[55][0] = "Siempre en formato electr&oacute;nico.";
 choices[55][1] = "Siempre en formato papel.";
 choices[55][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[55][3] = "La ley no regula el formato del expediente.";
 answers[55] = 0;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[55] = 205


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Reglamentos no se caracterizan por:";
 choices[56]= new Array();
 choices[56][0] = "No poseer alcance general.";
 choices[56][1] = "Ser obligatorios.";
 choices[56][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[56][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[56] = 0;
 units[56] = ['5'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 185. Uni&oacute;n Europea";
 preguntaids[56] = 185


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[57]= new Array();
 choices[57][0] = "Publicidad.";
 choices[57][1] = "Constituci&oacute;n.";
 choices[57][2] = "Legalidad.";
 choices[57][3] = "Creaci&oacute;n.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[57] = 42


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[58]= "59)  El Parlamento Europeo celebrar&aacute;:";
 choices[58]= new Array();
 choices[58][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[58][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[58][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[58][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[58] = 0;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[58] = 112


//  Id pregunta: 7882 Año de creación de pregunta: 2011
 questions[59]= "60)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "M&eacute;todo Delphi.";
 choices[59][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[59][2] = "M&eacute;todo de Saaty.";
 choices[59][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[59] = 3;
 units[59] = ['38'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 7882. Examen TIC A1 2010";
 preguntaids[59] = 7882


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[60]= "61)  El Tribunal de Justicia se cre&oacute; en:";
 choices[60]= new Array();
 choices[60][0] = "El Tratado de la CECA.";
 choices[60][1] = "El Tratado de Niza.";
 choices[60][2] = "El Tratado de &Aacute;msterdam.";
 choices[60][3] = "El Tratado de Lisboa.";
 answers[60] = 0;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 129. Uni&oacute;n Europea";
 preguntaids[60] = 129


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[61]= new Array();
 choices[61][0] = "La CETIC";
 choices[61][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[61][2] = "La DTIC";
 choices[61][3] = "El MHFP";
 answers[61] = 0;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 468. Estrategia TIC";
 preguntaids[61] = 468


//  Id pregunta: 4747 Año de creación de pregunta: 2002
 questions[62]= "63)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[62]= new Array();
 choices[62][0] = "793";
 choices[62][1] = "791";
 choices[62][2] = "768";
 choices[62][3] = "821";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4747. ";
 preguntaids[62] = 4747


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[63]= new Array();
 choices[63][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[63][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[63][2] = "el Ministerio del Interior";
 choices[63][3] = "la Administraci&oacute;n General del Estado";
 answers[63] = 0;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[63] = 1010


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[64]= "65)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[64]= new Array();
 choices[64][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[64][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[64][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[64][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[64] = 0;
 units[64] = ['45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9777. ";
 preguntaids[64] = 9777


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[65]= "66)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[65]= new Array();
 choices[65][0] = "Es siempre cero.";
 choices[65][1] = "Es igual a su tiempo early.";
 choices[65][2] = "Es mayor que su tiempo early.";
 choices[65][3] = "Es menor que su tiempo early.";
 answers[65] = 1;
 units[65] = ['31'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[65] = 10024


//  Id pregunta: 6191 Año de creación de pregunta: 2003
 questions[66]= "67)  Una obra bajo licencia Creative Commons:";
 choices[66]= new Array();
 choices[66][0] = "No tiene copyright";
 choices[66][1] = "Otorga todos los derechos a terceras personas";
 choices[66][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[66][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[66] = 2;
 units[66] = ['41'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 6191. Examen TIC A Castilla La Mancha 2007";
 preguntaids[66] = 6191


//  Id pregunta: 9380 Año de creación de pregunta: 2014
 questions[67]= "68)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[67]= new Array();
 choices[67][0] = "128 bits";
 choices[67][1] = "160 bits";
 choices[67][2] = "224 bits";
 choices[67][3] = "256 bits";
 answers[67] = 1;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9380. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[67] = 9380


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[68][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[68][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[68][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[68] = 1;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 210. Ley 39/2015";
 preguntaids[68] = 210


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[69]= new Array();
 choices[69][0] = "Anual";
 choices[69][1] = "Mensual";
 choices[69][2] = "Semestral";
 choices[69][3] = "Trimestral";
 answers[69] = 3;
 units[69] = ['15'];
 blocks[69] = ['A3'];
 comments[69] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[69] = 424


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[70]= "71)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[70]= new Array();
 choices[70][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[70][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[70][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[70][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[70] = 0;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 56. Constituci&oacute;n de 1978";
 preguntaids[70] = 56


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[71]= new Array();
 choices[71][0] = "las personas jur&iacute;dicas";
 choices[71][1] = "las entidades con personalidad jur&iacute;dica";
 choices[71][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[71][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[71] = 1;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 245. Ley 39/2015";
 preguntaids[71] = 245


//  Id pregunta: 6539 Año de creación de pregunta: 2003
 questions[72]= "73)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[72]= new Array();
 choices[72][0] = "Aquellos de los que sean responsables Administraciones tributaria y se relacionen con el ejercicio de sus potestades";
 choices[72][1] = "Los relativos a la comision de infracciones administrativas o penales";
 choices[72][2] = "Aquellos que contengan datos derivados de la violencia de g&eacute;nero";
 choices[72][3] = "La a) y la b) son correctas";
 answers[72] = 3;
 units[72] = ['35'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 6539. ";
 preguntaids[72] = 6539


//  Id pregunta: 10928 Año de creación de pregunta: 2015
 questions[73]= "74)  En UNIX, un archivo se compone de:";
 choices[73]= new Array();
 choices[73][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos.";
 choices[73][1] = "Una secuencia de bytes.";
 choices[73][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos.";
 choices[73][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento.";
 answers[73] = 2;
 units[73] = ['57'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 10928. ";
 preguntaids[73] = 10928


//  Id pregunta: 4445 Año de creación de pregunta: 2002
 questions[74]= "75)  Respecto a los buscadores de internet:";
 choices[74]= new Array();
 choices[74][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[74][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[74][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[74][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[74] = 1;
 units[74] = ['103'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4445. ";
 preguntaids[74] = 4445


