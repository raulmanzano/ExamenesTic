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
//  Id pregunta: 4144 Año de creación de pregunta: 2003
 questions[0]= "1)  Un sistema de gesti&oacute;n de contenidos intenta mejorar una situaci&oacute;n previa en la que:";
 choices[0]= new Array();
 choices[0][0] = "Hay un buscador no eficiente. Los &iacute;ndices no est&aacute;n suficientemente actualizados y en algunos servidores ni siquiera se dispone de la posibilidad de b&uacute;squeda.";
 choices[0][1] = "Aunque escasean los expertos inform&aacute;ticos los procesos de edici&oacute;n, validaci&oacute;n y actualizaci&oacute;n son &aacute;giles.";
 choices[0][2] = "Varios servidores web integrados dentro del portal corporativo est&aacute;n en la misma m&aacute;quina pero con URL diferentes.";
 choices[0][3] = "Contenidos personalizados en funci&oacute;n de distintos perfiles o intereses de los usuarios.";
 answers[0] = 0;
 units[0] = ['99'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 4144. ";
 preguntaids[0] = 4144


//  Id pregunta: 4088 Año de creación de pregunta: 2003
 questions[1]= "2)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[1]= new Array();
 choices[1][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[1][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[1][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[1][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[1] = 2;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4088. ";
 preguntaids[1] = 4088


//  Id pregunta: 4164 Año de creación de pregunta: 2006
 questions[2]= "3)  Un buen analista debe exhibir los siguientes rasgos de car&aacute;cter";
 choices[2]= new Array();
 choices[2][0] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[2][1] = "Capacidad de s&iacute;ntesis de los problemas";
 choices[2][2] = "Capacidad de comprensi&oacute;n de conceptos abstractos, reorganizaci&oacute;n en apartados l&oacute;gicos y s&iacute;ntesis de soluciones para cada apartado";
 choices[2][3] = "Todas las anteriores";
 answers[2] = 3;
 units[2] = ['84'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 4164. ";
 preguntaids[2] = 4164


//  Id pregunta: 4162 Año de creación de pregunta: 2006
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "M&eacute;trica";
 choices[3][1] = "Racines";
 choices[3][2] = "Method 1";
 choices[3][3] = "Eclipse";
 answers[3] = 3;
 units[3] = ['83'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 4162. ";
 preguntaids[3] = 4162


//  Id pregunta: 4094 Año de creación de pregunta: 2003
 questions[4]= "5)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[4]= new Array();
 choices[4][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[4][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[4][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario";
 choices[4][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[4] = 0;
 units[4] = ['94'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4094. ";
 preguntaids[4] = 4094


//  Id pregunta: 4169 Año de creación de pregunta: 2006
 questions[5]= "6)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[5]= new Array();
 choices[5][0] = "Caja blanca";
 choices[5][1] = "Caja negra";
 choices[5][2] = "Integraci&oacute;n";
 choices[5][3] = "Aceptaci&oacute;n";
 answers[5] = 0;
 units[5] = ['85', '86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 4169. ";
 preguntaids[5] = 4169


//  Id pregunta: 4084 Año de creación de pregunta: 2003
 questions[6]= "7)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML";
 choices[6]= new Array();
 choices[6][0] = "Diagrama de estructura din&aacute;mica";
 choices[6][1] = "Diagrama de Casos de Uso";
 choices[6][2] = "Diagrama de Secuencia";
 choices[6][3] = "Diagrama de colaboraci&oacute;n";
 answers[6] = 0;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 4084. ";
 preguntaids[6] = 4084


//  Id pregunta: 4143 Año de creación de pregunta: 2003
 questions[7]= "8)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la forma de proceder si el disco 2 cae";
 choices[7]= new Array();
 choices[7][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[7][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[7][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = 0;
 units[7] = ['100'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 4143. ";
 preguntaids[7] = 4143


//  Id pregunta: 4158 Año de creación de pregunta: 2006
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[8]= new Array();
 choices[8][0] = "El mercado";
 choices[8][1] = "La misi&oacute;n";
 choices[8][2] = "Metas y objetivos";
 choices[8][3] = "Subvenciones";
 answers[8] = 3;
 units[8] = ['83'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 4158. ";
 preguntaids[8] = 4158


//  Id pregunta: 4137 Año de creación de pregunta: 2004
 questions[9]= "10)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[9]= new Array();
 choices[9][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[9][1] = "El modelo esencial de compone de modelo ambiental y modelo de comportamiento";
 choices[9][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[9][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[9] = 3;
 units[9] = ['85', '86'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4137. ";
 preguntaids[9] = 4137


//  Id pregunta: 4175 Año de creación de pregunta: 2006
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[10]= new Array();
 choices[10][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[10][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[10][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[10][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[10] = 0;
 units[10] = ['85', '86'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4175. ";
 preguntaids[10] = 4175


//  Id pregunta: 4155 Año de creación de pregunta: 2006
 questions[11]= "12)  En cuanto al modelo en espiral:";
 choices[11]= new Array();
 choices[11][0] = "La dimensi&oacute;n radial da cuenta del coste acumulativo";
 choices[11][1] = "La dimensi&oacute;n angular da idea del avance realizado en cada ciclo";
 choices[11][2] = "Las dos anteriores son correctas";
 choices[11][3] = "las dos primeras son falsas";
 answers[11] = 2;
 units[11] = ['82'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4155. ";
 preguntaids[11] = 4155


//  Id pregunta: 4151 Año de creación de pregunta: 2006
 questions[12]= "13)  En el modelo de ciclo de vida en espiral:";
 choices[12]= new Array();
 choices[12][0] = "La dimensi&oacute;n radial indica los costes y la angular el progreso";
 choices[12][1] = "La dimensi&oacute;n angular indica los costes y la radial el progreso";
 choices[12][2] = "La dimensi&oacute;n lineal indica los costes y la angular el progreso";
 choices[12][3] = "La dimensi&oacute;n radial indica los costes y la angular el riesgo";
 answers[12] = 0;
 units[12] = ['82'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4151. ";
 preguntaids[12] = 4151


//  Id pregunta: 4173 Año de creación de pregunta: 2006
 questions[13]= "14)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Identificar las necesidades del cliente";
 choices[13][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[13][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[13][3] = "Todas las anteriores";
 answers[13] = 3;
 units[13] = ['85'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4173. ";
 preguntaids[13] = 4173


//  Id pregunta: 4146 Año de creación de pregunta: 2003
 questions[14]= "15)  Una de las principales caracter&iacute;sticas de un sistema gestor de contenidos es:";
 choices[14]= new Array();
 choices[14][0] = "Desaconseja el uso de metadatos.";
 choices[14][1] = "No hay roles en el proceso.";
 choices[14][2] = "Se separa el contenido de su presentaci&oacute;n.";
 choices[14][3] = "Las p&aacute;ginas se construyen de manera no din&aacute;mica.";
 answers[14] = 2;
 units[14] = ['99'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 4146. ";
 preguntaids[14] = 4146


//  Id pregunta: 4150 Año de creación de pregunta: 2006
 questions[15]= "16)  Uno de los pasos del modelo de ciclo de vida aplicado al desarrollo de software basado en componentes (DSBC) consiste en seleccionar los componentes seg&uacute;n su granularidad. &iquest;Qu&eacute; factores definen la granularidad de un componente?";
 choices[15]= new Array();
 choices[15][0] = "El tama&ntilde;o del componente.";
 choices[15][1] = "El tama&ntilde;o, la complejidad y la capacidad funcional del componente.";
 choices[15][2] = "La capacidad funcional del componente y su estructura de datos.";
 choices[15][3] = "El tama&ntilde;o, la fiabilidad, la complejidad y la mantenibilidad del componente.";
 answers[15] = 1;
 units[15] = ['82'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 4150. ";
 preguntaids[15] = 4150


//  Id pregunta: 4174 Año de creación de pregunta: 2006
 questions[16]= "17)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[16]= new Array();
 choices[16][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[16][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[16][2] = "An&aacute;lisis de flujo";
 choices[16][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[16] = 0;
 units[16] = ['85', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 4174. ";
 preguntaids[16] = 4174


//  Id pregunta: 4161 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del Plan de Sistemas de Informaci&oacute;n en una organizaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "Establecer pol&iacute;ticas y objetivos coherentes";
 choices[17][1] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[17][2] = "Seleccionar los suministradores de las distintos elementos";
 choices[17][3] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento y los resultados esperados";
 answers[17] = 2;
 units[17] = ['83'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 4161. ";
 preguntaids[17] = 4161


//  Id pregunta: 4085 Año de creación de pregunta: 2003
 questions[18]= "19)  En dise&ntilde;o estructurado &iquest;c&uacute;al de los siguientes niveles tiene menor Cohesi&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "L&oacute;gica.";
 choices[18][1] = "Procedimental.";
 choices[18][2] = "Funcional.";
 choices[18][3] = "Coincidental.";
 answers[18] = 3;
 units[18] = ['89'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 4085. ";
 preguntaids[18] = 4085


//  Id pregunta: 4153 Año de creación de pregunta: 2006
 questions[19]= "20)  Seg&uacute;n Martins, el modelo de construcci&oacute;n de prototipos no est&aacute; recomendado:";
 choices[19]= new Array();
 choices[19][0] = "En proyectos muy grandes y a largo plazo (de duraci&oacute;n mayor a un a&ntilde;o) porque los requisitos ser&aacute; dif&iacute;cil mantenerlos congelados tanto tiempo";
 choices[19][1] = "En proyectos peque&ntilde;os (de duraci&oacute;n inferior a un mes) porque es dif&iacute;cil que los requisitos sean tan complejos como para no conocerlos";
 choices[19][2] = "S&iacute; est&aacute; recomendado para proyectos de tama&ntilde;o medio cuyo desarrollo va entre 3 y 5 meses";
 choices[19][3] = "Todas las anteriores respuestas son correctas";
 answers[19] = 3;
 units[19] = ['82'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 4153. ";
 preguntaids[19] = 4153


//  Id pregunta: 4091 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique cu&aacute;l no es un resultado del modelo EFQM";
 choices[20]= new Array();
 choices[20][0] = "Satisfacci&oacute;n del cliente";
 choices[20][1] = "Impacto en la sociedad";
 choices[20][2] = "Obtenci&oacute;n de la estrategia";
 choices[20][3] = "Satisfacci&oacute;n del personal";
 answers[20] = 2;
 units[20] = ['98'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 4091. ";
 preguntaids[20] = 4091


//  Id pregunta: 4093 Año de creación de pregunta: 2003
 questions[21]= "22)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[21]= new Array();
 choices[21][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[21][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[21][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[21][3] = "No existe la versi&oacute;n II de cocomo";
 answers[21] = 1;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 4093. ";
 preguntaids[21] = 4093


//  Id pregunta: 4176 Año de creación de pregunta: 2006
 questions[22]= "23)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[22]= new Array();
 choices[22][0] = "De consulta";
 choices[22][1] = "De actualizaci&oacute;n";
 choices[22][2] = "De di&aacute;logo";
 choices[22][3] = "Todas las anteriores";
 answers[22] = 3;
 units[22] = ['85', '86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 4176. ";
 preguntaids[22] = 4176


//  Id pregunta: 4099 Año de creación de pregunta: 2003
 questions[23]= "24)  Cu&aacute;l de los siguientes no es un m&eacute;todos o t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Lenguajes recuperativos.";
 choices[23][1] = "Retroalimentaci&oacute;n.";
 choices[23][2] = "Modelos vectoriales y probabil&iacute;sticos.";
 choices[23][3] = "Sistemas booleanos.";
 answers[23] = 0;
 units[23] = ['100'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 4099. ";
 preguntaids[23] = 4099


//  Id pregunta: 4172 Año de creación de pregunta: 2006
 questions[24]= "25)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[24]= new Array();
 choices[24][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[24][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[24][2] = "El n&uacute;mero de columnas de una tabla";
 choices[24][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[24] = 0;
 units[24] = ['85'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 4172. ";
 preguntaids[24] = 4172


//  Id pregunta: 4112 Año de creación de pregunta: 2003
 questions[25]= "26)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[25]= new Array();
 choices[25][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[25][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[25][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[25][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes";
 answers[25] = 0;
 units[25] = ['100'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 4112. ";
 preguntaids[25] = 4112


//  Id pregunta: 4130 Año de creación de pregunta: 2003
 questions[26]= "27)  Los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n consistente en r&aacute;pidas ojeadas de selecci&oacute;n buscando referencias en textos sin an&aacute;lisis con profundidad de los contenidos, auxili&aacute;ndose de se&ntilde;aladores impl&iacute;citos y expl&iacute;citos:";
 choices[26]= new Array();
 choices[26][0] = "Se denominan hojeo-ojeo.";
 choices[26][1] = "Son relativamente poco complejos.";
 choices[26][2] = "Todas las anteriores.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = 2;
 units[26] = ['100'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4130. ";
 preguntaids[26] = 4130


//  Id pregunta: 4098 Año de creación de pregunta: 2003
 questions[27]= "28)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[27]= new Array();
 choices[27][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[27][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[27][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[27][3] = "Todas los correctas";
 answers[27] = 2;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 4098. ";
 preguntaids[27] = 4098


//  Id pregunta: 4165 Año de creación de pregunta: 2006
 questions[28]= "29)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[28]= new Array();
 choices[28][0] = "Pueden ser permanentes o temporales";
 choices[28][1] = "No crean informaci&oacute;n";
 choices[28][2] = "Son accesibles desde entidades externas.";
 choices[28][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[28] = 2;
 units[28] = ['85', '86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 4165. ";
 preguntaids[28] = 4165


//  Id pregunta: 4134 Año de creación de pregunta: 2003
 questions[29]= "30)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[29][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[29][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[29][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[29] = 1;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4134. ";
 preguntaids[29] = 4134


//  Id pregunta: 4177 Año de creación de pregunta: 2006
 questions[30]= "31)  En un DFD (Diagrama de Flujos de Datos) el diagrama que se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[30]= new Array();
 choices[30][0] = "Diagrama de bloques";
 choices[30][1] = "Diagrama de contexto";
 choices[30][2] = "Diagrama de primer nivel";
 choices[30][3] = "Diagrama b&aacute;sico";
 answers[30] = 1;
 units[30] = ['85', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 4177. ";
 preguntaids[30] = 4177


//  Id pregunta: 4124 Año de creación de pregunta: 2004
 questions[31]= "32)  En METRICA v3, la actividad de &quot;Estudio de alternativas de soluci&oacute;n&quot; pertenece al proceso ...";
 choices[31]= new Array();
 choices[31][0] = "PSI (Planificaci&oacute;n de Sistemas de Informaci&oacute;n)";
 choices[31][1] = "EVS (Estudio de Viabilidad del Sistema)";
 choices[31][2] = "ASI (An&aacute;lisis del Sistema de Informaci&oacute;n)";
 choices[31][3] = "DSI (Dise&ntilde;o del Sistema de Informaci&oacute;n)";
 answers[31] = 1;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 4124. ";
 preguntaids[31] = 4124


//  Id pregunta: 4142 Año de creación de pregunta: 2003
 questions[32]= "33)  Suponiendo la existencia de un sistema de copias de seguridad, para restaurar la informaci&oacute;n perdida se puede:";
 choices[32]= new Array();
 choices[32][0] = "S&oacute;lo se necesita la copia normal m&aacute;s reciente m&aacute;s la &uacute;ltima copia de seguridad diaria";
 choices[32][1] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y todas las copias de seguridad diferencial";
 choices[32][2] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y la &uacute;ltima copia de seguridad incremental";
 choices[32][3] = "Todas las respuestas anteriores son incorrectas";
 answers[32] = 3;
 units[32] = ['100'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4142. ";
 preguntaids[32] = 4142


//  Id pregunta: 4115 Año de creación de pregunta: 2003
 questions[33]= "34)  En un Sistema de Gesti&oacute;n Documental:";
 choices[33]= new Array();
 choices[33][0] = "El escaneado produce una imagen del documento que se almacena en el sistema.";
 choices[33][1] = "Ficheros originariamente en formatos de procesador de texto u hoja de c&aacute;lculo se convierten a imagen, generando una imagen inalterable del documento electr&oacute;nico original.";
 choices[33][2] = "Ficheros gr&aacute;ficos, de audio o video pueden ser tambi&eacute;n importados aun sistema de gesti&oacute;n documental. En estos casos, se mantienen en su formato nativo y para abrirlos se necesita un programa compatible con ese formato.";
 choices[33][3] = "Todas las anteriores son ciertas.";
 answers[33] = 3;
 units[33] = ['99'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4115. ";
 preguntaids[33] = 4115


//  Id pregunta: 4118 Año de creación de pregunta: 2003
 questions[34]= "35)  Indique la afirmaci&oacute;n falsa para un Sistema de Gesti&oacute;n de Contenidos:";
 choices[34]= new Array();
 choices[34][0] = "A lo largo de todo el proceso resulta vital contar con el apoyo de la Direcci&oacute;n.";
 choices[34][1] = "Nunca existe una parte p&uacute;blica, de posible acceso mediante registro.";
 choices[34][2] = "Alg&uacute;n grupo de trabajo t&eacute;cnicos se deber&iacute;a orientar hacia la elaboraci&oacute;n de herramientas que faciliten la migraci&oacute;n de contenidos desde el sistema antiguo hacia el sistema nuevo.";
 choices[34][3] = "El dise&ntilde;o de un buen sistema de categorizaci&oacute;n de contenidos resulta una actividad central en la creaci&oacute;n de un SGC.";
 answers[34] = 1;
 units[34] = ['99'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 4118. ";
 preguntaids[34] = 4118


//  Id pregunta: 4117 Año de creación de pregunta: 2003
 questions[35]= "36)  Gesti&oacute;n de documentos y gesti&oacute;n de contenidos:";
 choices[35]= new Array();
 choices[35][0] = "Son la misma cosa.";
 choices[35][1] = "S&oacute;lo se diferencian en la tecnolog&iacute;a utilizada.";
 choices[35][2] = "En la gesti&oacute;n de documentos se suele presentar el documento en su formato original, mientras que en la gesti&oacute;n de contenidos se orienta hacia la creaci&oacute;n y edici&oacute;n din&aacute;mica de p&aacute;ginas.";
 choices[35][3] = "La gesti&oacute;n de contenidos es m&aacute;s reciente y suele estar enfocada hacia flujos de trabajo.";
 answers[35] = 2;
 units[35] = ['99'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 4117. ";
 preguntaids[35] = 4117


//  Id pregunta: 4095 Año de creación de pregunta: 2003
 questions[36]= "37)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[36]= new Array();
 choices[36][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[36][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[36][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[36][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[36] = 0;
 units[36] = ['89'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 4095. ";
 preguntaids[36] = 4095


//  Id pregunta: 4087 Año de creación de pregunta: 2003
 questions[37]= "38)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[37]= new Array();
 choices[37][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[37][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[37][2] = "Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[37][3] = "Una entidad que tiene atributos derivados.";
 answers[37] = 0;
 units[37] = ['85'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 4087. ";
 preguntaids[37] = 4087


//  Id pregunta: 4113 Año de creación de pregunta: 2003
 questions[38]= "39)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[38]= new Array();
 choices[38][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[38][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[38][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[38][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[38] = 0;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4113. ";
 preguntaids[38] = 4113


//  Id pregunta: 4083 Año de creación de pregunta: 2003
 questions[39]= "40)  El plan de sistemas de informaci&oacute;n de M&eacute;trica v3";
 choices[39]= new Array();
 choices[39][0] = "debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[39][1] = "incluye actividades tales como 'generaci&oacute;n de especificaciones de construcci&oacute;n', 'dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema',y 'especificaci&oacute;n t&eacute;cnica del plan de pruebas'";
 choices[39][2] = "tiene una perspectiva estrat&eacute;gica y opertaiva, pero no tecnol&oacute;gica";
 choices[39][3] = "no requeire la participaci&oacute;n del responasble de mantenimiento";
 answers[39] = 2;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4083. EXAMEN CASTILLA LA MANCHA";
 preguntaids[39] = 4083


//  Id pregunta: 4126 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[40]= new Array();
 choices[40][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[40][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[40][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['92', '93'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4126. ";
 preguntaids[40] = 4126


//  Id pregunta: 4096 Año de creación de pregunta: 2003
 questions[41]= "42)  Relativo a las clases en Orientaci&oacute;n a Objetos, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[41]= new Array();
 choices[41][0] = "Asociaci&oacute;n";
 choices[41][1] = "Agrupaci&oacute;n";
 choices[41][2] = "Agregaci&oacute;n";
 choices[41][3] = "Generalizaci&oacute;n";
 answers[41] = 3;
 units[41] = ['85'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 4096. ";
 preguntaids[41] = 4096


//  Id pregunta: 4148 Año de creación de pregunta: 2004
 questions[42]= "43)  Indique la afirmaci&oacute;n FALSA sobre webDAV";
 choices[42]= new Array();
 choices[42][0] = "Sus siglas son: Web Data Authoring and Versioning";
 choices[42][1] = "Se le conoce tambi&eacute;n como Web folders";
 choices[42][2] = "Es un protocolo que permite a los usuarios gestionar y editar ficheros de forma colaborativa en servidores remotos";
 choices[42][3] = "Es una extensi&oacute;n del protocolo http";
 answers[42] = 0;
 units[42] = ['99'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4148. ";
 preguntaids[42] = 4148


//  Id pregunta: 4141 Año de creación de pregunta: 2003
 questions[43]= "44)  Son roles en un sistema gestor de contenidos:";
 choices[43]= new Array();
 choices[43][0] = "Autores.";
 choices[43][1] = "Publicador.";
 choices[43][2] = "Todas las anteriores.";
 choices[43][3] = "Ninguna de las anteriores.";
 answers[43] = 2;
 units[43] = ['99'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 4141. ";
 preguntaids[43] = 4141


//  Id pregunta: 4133 Año de creación de pregunta: 2003
 questions[44]= "45)  M&eacute;todo de interpolaci&oacute;n en la correcci&oacute;n geom&eacute;trica:";
 choices[44]= new Array();
 choices[44][0] = "Vecino m&aacute;s pr&oacute;ximo.";
 choices[44][1] = "Bilineal.";
 choices[44][2] = "Bic&uacute;bica.";
 choices[44][3] = "Todos los anteriores.";
 answers[44] = 3;
 units[44] = ['100'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 4133. ";
 preguntaids[44] = 4133


//  Id pregunta: 4114 Año de creación de pregunta: 2003
 questions[45]= "46)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[45]= new Array();
 choices[45][0] = "Palabras clave.";
 choices[45][1] = "Texto completo.";
 choices[45][2] = "&Iacute;ndices.";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['100'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 4114. ";
 preguntaids[45] = 4114


//  Id pregunta: 4116 Año de creación de pregunta: 2003
 questions[46]= "47)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[46]= new Array();
 choices[46][0] = "HTTP.";
 choices[46][1] = "CCS.";
 choices[46][2] = "Excel.";
 choices[46][3] = "XML.";
 answers[46] = 3;
 units[46] = ['99'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 4116. ";
 preguntaids[46] = 4116


//  Id pregunta: 4121 Año de creación de pregunta: 2003
 questions[47]= "48)  La copia de seguridad intermedia se utiliza:";
 choices[47]= new Array();
 choices[47][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[47][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[47][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[47][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[47] = 1;
 units[47] = ['100'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4121. ";
 preguntaids[47] = 4121


//  Id pregunta: 4163 Año de creación de pregunta: 2006
 questions[48]= "49)  El an&aacute;lisis de requerimientos es:";
 choices[48]= new Array();
 choices[48][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[48][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[48][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = 0;
 units[48] = ['84'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 4163. ";
 preguntaids[48] = 4163


//  Id pregunta: 4129 Año de creación de pregunta: 2003
 questions[49]= "50)  Los sistemas de reconocimiento &oacute;ptico de caracteres:";
 choices[49]= new Array();
 choices[49][0] = "Son caros y dif&iacute;ciles de configurar.";
 choices[49][1] = "Pueden necesitar un entrenamiento para su mejor funcionamiento.";
 choices[49][2] = "Extienden las capacidades del c&aacute;lculo diferencial hacia la resoluci&oacute;n de problemas de parametrizaci&oacute;n polim&eacute;trica.";
 choices[49][3] = "Suponen un gasto necesario para aumentar el n&uacute;mero de documentos almacenados en papel en el paradigma de la oficina sin papeles.";
 answers[49] = 1;
 units[49] = ['100'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 4129. ";
 preguntaids[49] = 4129


//  Id pregunta: 4106 Año de creación de pregunta: 2003
 questions[50]= "51)  En gesti&oacute;n de contenidos se entiende por contenido:";
 choices[50]= new Array();
 choices[50][0] = "El conjunto de datos o informaci&oacute;n que se crean, archivan y publican en formato digital.";
 choices[50][1] = "El conjunto de datos o informaci&oacute;n que se archivan en formato digital como copia de respaldo.";
 choices[50][2] = "Informaci&oacute;n almacenada en dispositivos masivos de r&aacute;pido acceso.";
 choices[50][3] = "Conjunto de discos &oacute;pticos de gran capacidad y m&iacute;nimos tiempos de acceso.";
 answers[50] = 0;
 units[50] = ['99'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 4106. ";
 preguntaids[50] = 4106


//  Id pregunta: 4100 Año de creación de pregunta: 2003
 questions[51]= "52)  Cu&aacute;l de los siguientes no es un m&eacute;todo o t&eacute;cnica de recuperaci&oacute;n de informaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Sistemas de hojeo-ojeo.";
 choices[51][1] = "Sistemas de fila incierta.";
 choices[51][2] = "Sistemas de normal.";
 choices[51][3] = "Sistemas expertos.";
 answers[51] = 1;
 units[51] = ['100'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 4100. ";
 preguntaids[51] = 4100


//  Id pregunta: 4090 Año de creación de pregunta: 2003
 questions[52]= "53)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[52]= new Array();
 choices[52][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[52][1] = "Se pueden representar relaciones entre entidades externas";
 choices[52][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[52][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[52] = 1;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 4090. ";
 preguntaids[52] = 4090


//  Id pregunta: 4086 Año de creación de pregunta: 2003
 questions[53]= "54)  En el dise&ntilde;o Orientado a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[53]= new Array();
 choices[53][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[53][1] = "Las clases se representan mediante diagramas.";
 choices[53][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[53][3] = "Una clase especifica la estructura de datos de los objetos y las operaciones que se utilizan para tener acceso a los objetos.";
 answers[53] = 0;
 units[53] = ['89'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 4086. ";
 preguntaids[53] = 4086


//  Id pregunta: 4160 Año de creación de pregunta: 2006
 questions[54]= "55)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[54]= new Array();
 choices[54][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[54][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[54][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[54][3] = "Reducir el n&uacute;mero de empleados";
 answers[54] = 0;
 units[54] = ['83'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4160. ";
 preguntaids[54] = 4160


//  Id pregunta: 4140 Año de creación de pregunta: 2003
 questions[55]= "56)  Si por cada t&eacute;rmino, bien sea palabra clave, frase especial o &iacute;tem del tesauro, existe una lista de todos los documentos en los que aparece, a la que se suele a&ntilde;adir la longitud de esa lista (n&uacute;mero de referencias contenidas), estamos hablando de un siste";
 choices[55]= new Array();
 choices[55][0] = "De &iacute;ndices m&uacute;ltiples.";
 choices[55][1] = "De &iacute;ndices";
 choices[55][2] = "De listas.";
 choices[55][3] = "De &iacute;ndices invertidos.";
 answers[55] = 3;
 units[55] = ['99', '1'];
 blocks[55] = ['B3', 'A1'];
 comments[55] = "Id Pregunta: 4140. ";
 preguntaids[55] = 4140


//  Id pregunta: 4149 Año de creación de pregunta: 2004
 questions[56]= "57)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[56]= new Array();
 choices[56][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[56][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[56][2] = "Java es interpretado y C++ es compilado";
 choices[56][3] = "Java no tiene herencia multiple y C++ si";
 answers[56] = 0;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4149. ";
 preguntaids[56] = 4149


//  Id pregunta: 4178 Año de creación de pregunta: 2006
 questions[57]= "58)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos:";
 choices[57]= new Array();
 choices[57][0] = "SA/SD";
 choices[57][1] = "OMT";
 choices[57][2] = "Proceso Unificado de modelado";
 choices[57][3] = "Tarjetas de clase";
 answers[57] = 0;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 4178. ";
 preguntaids[57] = 4178


//  Id pregunta: 4089 Año de creación de pregunta: 2003
 questions[58]= "59)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[58]= new Array();
 choices[58][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[58][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[58][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[58][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[58] = 1;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4089. ";
 preguntaids[58] = 4089


//  Id pregunta: 4127 Año de creación de pregunta: 2003
 questions[59]= "60)  Los servicios de informaci&oacute;n electr&oacute;nica denominados &quot;Servicios referenciales&quot; pueden ser:";
 choices[59]= new Array();
 choices[59][0] = "Num&eacute;ricos y textuales.";
 choices[59][1] = "Num&eacute;ricos, textuales o ic&oacute;nicos.";
 choices[59][2] = "Bibliogr&aacute;ficos o directorios.";
 choices[59][3] = "Bibliogr&aacute;ficos, directorios y agendas.";
 answers[59] = 2;
 units[59] = ['100'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 4127. ";
 preguntaids[59] = 4127


//  Id pregunta: 4101 Año de creación de pregunta: 2003
 questions[60]= "61)  De acuerdo con la informaci&oacute;n contenida los servicios de informaci&oacute;n electr&oacute;nica pueden clasificarse en:";
 choices[60]= new Array();
 choices[60][0] = "Servicios referenciales y servicios fuente.";
 choices[60][1] = "Servicios num&eacute;ricos y servicios textuales.";
 choices[60][2] = "Servicios de banda ancha y servicios de banda estrecha.";
 choices[60][3] = "Servicios portadores y servicios de valor a&ntilde;adido.";
 answers[60] = 0;
 units[60] = ['100'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 4101. ";
 preguntaids[60] = 4101


//  Id pregunta: 4157 Año de creación de pregunta: 2006
 questions[61]= "62)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar una Planificaci&oacute;n Estrat&eacute;gica? :";
 choices[61]= new Array();
 choices[61][0] = "La misi&oacute;n del negocio.";
 choices[61][1] = "La situaci&oacute;n de los competidores.";
 choices[61][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[61][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[61] = 3;
 units[61] = ['83'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4157. ";
 preguntaids[61] = 4157


//  Id pregunta: 4154 Año de creación de pregunta: 2006
 questions[62]= "63)  En cuanto al modelo en cascada:";
 choices[62]= new Array();
 choices[62][0] = "Es un modelo lineal que no considera la realimentaci&oacute;n";
 choices[62][1] = "Es tambi&eacute;n conocido como modelo en espiral";
 choices[62][2] = "No hace &eacute;nfasis en la documentaci&oacute;n";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 3;
 units[62] = ['82'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4154. ";
 preguntaids[62] = 4154


//  Id pregunta: 4168 Año de creación de pregunta: 2006
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[63]= new Array();
 choices[63][0] = "Entidades externas al sistema";
 choices[63][1] = "Bucles";
 choices[63][2] = "Almac&eacute;n de datos";
 choices[63][3] = "Procesos";
 answers[63] = 1;
 units[63] = ['85', '86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4168. ";
 preguntaids[63] = 4168


//  Id pregunta: 4111 Año de creación de pregunta: 2003
 questions[64]= "65)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la l&oacute;gica borrosa permite:";
 choices[64]= new Array();
 choices[64][0] = "Indexar parcialmente un documento mediante dos o m&aacute;s t&eacute;rminos.";
 choices[64][1] = "Clasificar los textos con arreglo a su relevancia estimada.";
 choices[64][2] = "T&eacute;cnicas de muestreo de la cuantificaci&oacute;n del grado de relevancia de las claves.";
 choices[64][3] = "Generar varias claves sin tener en cuenta el Tesauro.";
 answers[64] = 1;
 units[64] = ['100'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4111. ";
 preguntaids[64] = 4111


//  Id pregunta: 4152 Año de creación de pregunta: 2006
 questions[65]= "66)  Indicar la afirmaci&oacute;n incorrecta relacionada con los modelos de ciclo de vida:";
 choices[65]= new Array();
 choices[65][0] = "El modelo en cascada supone que los requisitos son inamovibles a lo largo del desarrollo";
 choices[65][1] = "El modelo de prototipado permite definir los requisitos de desarrollo a medida que se va desarrollando";
 choices[65][2] = "El modelo en espiral se centra en la identificaci&oacute;n de los riesgos y en la manera de resolverlos";
 choices[65][3] = "Los modelos de transformaci&oacute;n se aplican en la actualidad con lenguaje 4G (generaci&oacute;n autom&aacute;tica de c&oacute;digo) especialmente indicado para proyectos grandes";
 answers[65] = 3;
 units[65] = ['82'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4152. ";
 preguntaids[65] = 4152


//  Id pregunta: 4145 Año de creación de pregunta: 2003
 questions[66]= "67)  Una de estas no es una propiedad de un Sistema de Gesti&oacute;n Documental:";
 choices[66]= new Array();
 choices[66][0] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos interna o externamente a la organizaci&oacute;n.";
 choices[66][1] = "Recoger documentaci&oacute;n de otros profesionales o colaboradores.";
 choices[66][2] = "El env&iacute;o de documentos por fax o e-mail de forma directa.";
 choices[66][3] = "Gestionar millones de registros y recuperarlos en pocos segundos.";
 answers[66] = 1;
 units[66] = ['99'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 4145. ";
 preguntaids[66] = 4145


//  Id pregunta: 4097 Año de creación de pregunta: 2003
 questions[67]= "68)  Un diagrama de contexto, utilizado como mecanismo de an&aacute;lisis estructurado, debe contener s&oacute;lo dos tipos de componentes siguientes";
 choices[67]= new Array();
 choices[67][0] = "Entidad externa y almacenes de datos";
 choices[67][1] = "Almac&eacute;n de datos y burbujas de proceso";
 choices[67][2] = "Burbujas de proceso y entidades externas";
 choices[67][3] = "Burbuja de proceso y almacenes de datos";
 answers[67] = 2;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4097. ";
 preguntaids[67] = 4097


//  Id pregunta: 4159 Año de creación de pregunta: 2006
 questions[68]= "69)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[68]= new Array();
 choices[68][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[68][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[68][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[68][3] = "Realizar estudios espec&iacute;ficos";
 answers[68] = 1;
 units[68] = ['83'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 4159. ";
 preguntaids[68] = 4159


//  Id pregunta: 4092 Año de creación de pregunta: 2003
 questions[69]= "70)  La actividad DSI-CAL2 se denomina";
 choices[69]= new Array();
 choices[69][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[69][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[69][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[69][3] = "ninguna es cirrecta";
 answers[69] = 0;
 units[69] = ['92', '93'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 4092. ";
 preguntaids[69] = 4092


//  Id pregunta: 4179 Año de creación de pregunta: 2006
 questions[70]= "71)  &iquest;Qu&eacute; tres modelos utiliza OMT?";
 choices[70]= new Array();
 choices[70][0] = "Modelo de objetos , din&aacute;mico y funcional";
 choices[70][1] = "Modelo est&aacute;tico , din&aacute;mico y funcional";
 choices[70][2] = "Modelo de objetos , din&aacute;mico y transaccional";
 choices[70][3] = "Modelo de objetos, est&aacute;tico y de clases";
 answers[70] = 0;
 units[70] = ['85'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4179. ";
 preguntaids[70] = 4179


//  Id pregunta: 4170 Año de creación de pregunta: 2006
 questions[71]= "72)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[71]= new Array();
 choices[71][0] = "El n&uacute;mero de tablas";
 choices[71][1] = "El n&uacute;mero de elementos del modelo";
 choices[71][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[71][3] = "El n&uacute;mero de relaciones unitarias";
 answers[71] = 2;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4170. ";
 preguntaids[71] = 4170


//  Id pregunta: 4125 Año de creación de pregunta: 2004
 questions[72]= "73)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[72]= new Array();
 choices[72][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[72][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[72][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = 2;
 units[72] = ['92', '93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4125. ";
 preguntaids[72] = 4125


//  Id pregunta: 4110 Año de creación de pregunta: 2003
 questions[73]= "74)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Retroalimentaci&oacute;n.";
 choices[73][1] = "Modelo booleano.";
 choices[73][2] = "lenguaje natural.";
 choices[73][3] = "L&oacute;gica borrosa.";
 answers[73] = 0;
 units[73] = ['100'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4110. ";
 preguntaids[73] = 4110


//  Id pregunta: 4156 Año de creación de pregunta: 2006
 questions[74]= "75)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[74]= new Array();
 choices[74][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[74][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalones intermedios.";
 choices[74][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de los objetivos concretos que se hayan fijado.";
 choices[74][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[74] = 0;
 units[74] = ['83'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4156. ";
 preguntaids[74] = 4156


