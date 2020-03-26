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
//  Id pregunta: 6083 Año de creación de pregunta: 2003
 questions[0]= "1)  En el proceso RUP (&quot;Rational Unified Process&quot;):";
 choices[0]= new Array();
 choices[0][0] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfilesde trabajo o roles y flujos de trabajo";
 choices[0][1] = "La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[0][2] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[0][3] = "En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n,construcci&oacute;n y transici&oacute;n)";
 answers[0] = 2;
 units[0] = ['82'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6083. Examen TIC A1 MAP 2007";
 preguntaids[0] = 6083


//  Id pregunta: 8893 Año de creación de pregunta: 2013
 questions[1]= "2)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[1]= new Array();
 choices[1][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[1][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[1][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[1][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[1] = 3;
 units[1] = ['82'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8893. Examen AGE TIC A1 2011";
 preguntaids[1] = 8893


//  Id pregunta: 6292 Año de creación de pregunta: 2003
 questions[2]= "3)  No es cierto respecto al prototipado evolutivo:";
 choices[2]= new Array();
 choices[2][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[2][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[2][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[2][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[2] = 1;
 units[2] = ['82'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6292. ";
 preguntaids[2] = 6292


//  Id pregunta: 5557 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, cuando estamos hablando del mantenimiento del software?";
 choices[3]= new Array();
 choices[3][0] = "Un sistema de informaci&oacute;n debe concebirse como algo est&aacute;tico, que permanece invariable desde que se crea hasta su extinci&oacute;n, pues de otro modo, nunca se pueden estabilizar los requisitos funcionales de dicho sistema.";
 choices[3][1] = "Los productos software requieren una evoluci&oacute;n continua durante todo su ciclo de vida para irse adaptando a las nuevas necesidades.";
 choices[3][2] = "La evoluci&oacute;n del sistema de informaci&oacute;n tiene como finalidad &uacute;ltima su adecuaci&oacute;n al entorno, de forma que se adapte para realizar nuevas funciones, trabajar m&aacute;s efectivamente o m&aacute;s correctamente.";
 choices[3][3] = "La necesidad de evoluci&oacute;n de los sistemas de informaci&oacute;n hace muy recomendable utilizar una metodolog&iacute;a fiable que permita gestionar los cambios y evaluar el correcto funcionamiento del sistema una vez realizados los cambios necesarios.";
 answers[3] = 0;
 units[3] = ['82'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 5557. ";
 preguntaids[3] = 5557


//  Id pregunta: 10203 Año de creación de pregunta: 2015
 questions[4]= "5)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (RAD) para el desarrollo de nuevas aplicaciones:";
 choices[4]= new Array();
 choices[4][0] = "El RAD no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[4][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para RAD no ser&aacute; problem&aacute;tico.";
 choices[4][2] = "El RAD no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[4][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[4] = 0;
 units[4] = ['82'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10203. Examen TIC A1 2014";
 preguntaids[4] = 10203


//  Id pregunta: 9646 Año de creación de pregunta: 2014
 questions[5]= "6)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta.";
 choices[5]= new Array();
 choices[5][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[5][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[5][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[5][3] = "Las anteriores a) b) y c) son correctas.";
 answers[5] = 3;
 units[5] = ['82'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9646. Examen TIC A1 2013";
 preguntaids[5] = 9646


//  Id pregunta: 6299 Año de creación de pregunta: 2003
 questions[6]= "7)  Se&ntilde;ale la opci&oacute;n incorrecta en relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[6]= new Array();
 choices[6][0] = "Entre las ventajas del DSBC no se encuentra la reducci&oacute;n de tiempos y costes de desarrollo";
 choices[6][1] = "Su enfoque consiste en configurar y especializar componentes de software ya existentes.";
 choices[6][2] = "Estos componentes son los conocidos COTS (Commercial off-the-self)";
 choices[6][3] = "Los productos COTS presentan problemas espec&iacute;ficos como incompatibilidad,falta de fuentes, cambio de versiones o esfuerzo de aprendizaje";
 answers[6] = 0;
 units[6] = ['82'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6299. ";
 preguntaids[6] = 6299


//  Id pregunta: 7017 Año de creación de pregunta: 2010
 questions[7]= "8)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[7]= new Array();
 choices[7][0] = "ISO-12207";
 choices[7][1] = "ISO-9800";
 choices[7][2] = "ISO-17702";
 choices[7][3] = "ISO-11200";
 answers[7] = 0;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7017. ";
 preguntaids[7] = 7017


//  Id pregunta: 8314 Año de creación de pregunta: 2011
 questions[8]= "9)  Respecto al modelo en espiral es falso que:";
 choices[8]= new Array();
 choices[8][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[8][1] = "Se compone de ciclos.";
 choices[8][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[8][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[8] = 2;
 units[8] = ['82'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8314. Examen UPM A2 2011";
 preguntaids[8] = 8314


//  Id pregunta: 5757 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;En cual de las siguientes fases del modelo de ciclo de vida de un proyecto de tecnolog&iacute;as de Ia informaci&oacute;n se asignan los recursos materiales para cada una de las funciones?";
 choices[9]= new Array();
 choices[9][0] = "fase de definici&oacute;n";
 choices[9][1] = "fase de dise&ntilde;o";
 choices[9][2] = "fase de construccion";
 choices[9][3] = "fase de operaci&oacute;n";
 answers[9] = 1;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 5757. ";
 preguntaids[9] = 5757


//  Id pregunta: 7021 Año de creación de pregunta: 2010
 questions[10]= "11)  No es una ventaja de los modelos de ciclo de vida basada en prototipos:";
 choices[10]= new Array();
 choices[10][0] = "Los sistemas se desarrollan con m&aacute;s rapidez";
 choices[10][1] = "El prototipo coincide exactamente con el producto final";
 choices[10][2] = "Se facilita la comunicaci&oacute;n con los usuarios";
 choices[10][3] = "Los requisitos de usuario son m&aacute;s f&aacute;ciles de determinar";
 answers[10] = 1;
 units[10] = ['82'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 7021. ";
 preguntaids[10] = 7021


//  Id pregunta: 10349 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[11]= new Array();
 choices[11][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[11][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[11][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[11][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[11] = 2;
 units[11] = ['82'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10349. ";
 preguntaids[11] = 10349


//  Id pregunta: 9236 Año de creación de pregunta: 2014
 questions[12]= "13)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[12]= new Array();
 choices[12][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[12][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[12][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[12][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[12] = 3;
 units[12] = ['82'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9236. Examen TIC A1 2013";
 preguntaids[12] = 9236


//  Id pregunta: 6288 Año de creación de pregunta: 2003
 questions[13]= "14)  En relaci&oacute;n al modelo de ciclo de vida de un sistema de informaci&oacute;n NO se puede afirmar:";
 choices[13]= new Array();
 choices[13][0] = "Es el conjunto etapas por las que atraviesa el sistema desde su concepci&oacute;n hasta su retirada del servicio";
 choices[13][1] = "Los modelos de ciclo de vida tradicionales, entre los que se engloban el modelo en cascada y los basados en prototipos, son los de m&aacute;s amplia utilizaci&oacute;n";
 choices[13][2] = "Los modelos de ciclo vida basados en transformaciones se adaptan bien a cualquier proyecto.";
 choices[13][3] = "En la pr&aacute;ctica no se suelen seguir modelos en forma pura, sino los que de acuerdo a las peculiaridades del sistema y la experiencia del jefe proyecto se pueden incorporar aspectos de otros modelos.";
 answers[13] = 2;
 units[13] = ['82'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6288. ";
 preguntaids[13] = 6288


//  Id pregunta: 8370 Año de creación de pregunta: 2011
 questions[14]= "15)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[14]= new Array();
 choices[14][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[14][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[14][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[14][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[14] = 0;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8370. Analista Ayto. Madrid 2010";
 preguntaids[14] = 8370


//  Id pregunta: 7018 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientesa no es un objetivo b&aacute;sico que debe cubrir un ciclo de vida?";
 choices[15]= new Array();
 choices[15][0] = "Asegurar la consistencia con el resto de los sistemas de informaci&oacute;n de la organizaci&oacute;n";
 choices[15][1] = "Garantizar la satisfacci&oacute;n del cliente";
 choices[15][2] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto (calendario y presupuesto)";
 choices[15][3] = "Definir las actividades a realizar y en qu&eacute; orden";
 answers[15] = 1;
 units[15] = ['82'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7018. ";
 preguntaids[15] = 7018


//  Id pregunta: 9850 Año de creación de pregunta: 2015
 questions[16]= "17)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[16]= new Array();
 choices[16][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[16][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[16][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[16][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[16] = 0;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 9850. ";
 preguntaids[16] = 9850


//  Id pregunta: 5535 Año de creación de pregunta: 2007
 questions[17]= "18)  El Ciclo de Vida del software es:";
 choices[17]= new Array();
 choices[17][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[17][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[17][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[17][3] = "Un esquema para integrar el sistema completo.";
 answers[17] = 1;
 units[17] = ['82'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 5535. ";
 preguntaids[17] = 5535


//  Id pregunta: 6203 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[18]= new Array();
 choices[18][0] = "Modelo incremental.";
 choices[18][1] = "Modelo en espiral.";
 choices[18][2] = "Modelo en cascada.";
 choices[18][3] = "Modelo fuente.";
 answers[18] = 1;
 units[18] = ['82'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6203. Examen TIC A Castilla La Mancha 2007";
 preguntaids[18] = 6203


//  Id pregunta: 6291 Año de creación de pregunta: 2003
 questions[19]= "20)  Respecto al prototipado r&aacute;pido es incorrecto:";
 choices[19]= new Array();
 choices[19][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[19][1] = "Tambi&eacute;n denominados de usar y tirar, ya que una vez aceptado el prototipo se desecha y se comienza el desarrollo desde cero.";
 choices[19][2] = "Se deben poder construir con facilidad para evaluarlos en una fase temprana del desarrollo";
 choices[19][3] = "Deben ser desarrollados en poco tiempo";
 answers[19] = 0;
 units[19] = ['82'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6291. ";
 preguntaids[19] = 6291


//  Id pregunta: 9284 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[20]= new Array();
 choices[20][0] = "ISO/IEC 12207:2008";
 choices[20][1] = "ISO 9001:2008";
 choices[20][2] = "ISO 29393:2009";
 choices[20][3] = "ISO 31000:2009";
 answers[20] = 0;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 9284. Examen TIC A2 2013. Promocion interna";
 preguntaids[20] = 9284


//  Id pregunta: 9405 Año de creación de pregunta: 2014
 questions[21]= "22)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[21]= new Array();
 choices[21][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[21][1] = "Gesti&oacute;n";
 choices[21][2] = "Entorno de desarrollo";
 choices[21][3] = "Pruebas";
 answers[21] = 3;
 units[21] = ['82'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 9405. ";
 preguntaids[21] = 9405


//  Id pregunta: 7019 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[22]= new Array();
 choices[22][0] = "Modelo de prototipado evolutivo";
 choices[22][1] = "Modelo de desarrollo incremental";
 choices[22][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[22][3] = "Modelo basado en transformaciones";
 answers[22] = 3;
 units[22] = ['82'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7019. ";
 preguntaids[22] = 7019


//  Id pregunta: 6298 Año de creación de pregunta: 2003
 questions[23]= "24)  En relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[23]= new Array();
 choices[23][0] = "Tambi&eacute;n llamado &quot;con reutilizaci&oacute;n&quot;, se ensambla el desarrollo con componentes software ya existentes";
 choices[23][1] = "Es adecuado a tecnolog&iacute;as orientadas a objetos";
 choices[23][2] = "El inconveniente es la excesiva dependencia de la calidad, robustez y flexibilidad de las librer&iacute;as de componentes.";
 choices[23][3] = "Todas las anteriores son correctas";
 answers[23] = 3;
 units[23] = ['82'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6298. ";
 preguntaids[23] = 6298


//  Id pregunta: 9108 Año de creación de pregunta: 2014
 questions[24]= "25)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[24]= new Array();
 choices[24][0] = "ISO/IEC 26514";
 choices[24][1] = "ISO 7816.";
 choices[24][2] = "ISO/IEC 12207.";
 choices[24][3] = "ISO 8859.";
 answers[24] = 0;
 units[24] = ['82'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9108. Examen TIC A2 2013";
 preguntaids[24] = 9108


//  Id pregunta: 8200 Año de creación de pregunta: 2011
 questions[25]= "26)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[25]= new Array();
 choices[25][0] = "An&aacute;lisis del riesgo.";
 choices[25][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[25][2] = "Desarrollar, verificar y validar (probar).";
 choices[25][3] = "Planificar.";
 answers[25] = 3;
 units[25] = ['82'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 8200. Examen TIC A2 2010 interna";
 preguntaids[25] = 8200


//  Id pregunta: 6289 Año de creación de pregunta: 2003
 questions[26]= "27)  El modelo Code and Fix:";
 choices[26]= new Array();
 choices[26][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[26][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[26][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[26][3] = "Todas las anteriores son correctas";
 answers[26] = 3;
 units[26] = ['82'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6289. ";
 preguntaids[26] = 6289


//  Id pregunta: 10019 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[27]= new Array();
 choices[27][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[27][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[27][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[27][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[27] = 2;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10019. Examen TIC A2 2014";
 preguntaids[27] = 10019


//  Id pregunta: 10018 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[28]= new Array();
 choices[28][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[28][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[28][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[28][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[28] = 1;
 units[28] = ['82'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10018. Examen TIC A2 2014";
 preguntaids[28] = 10018


//  Id pregunta: 7478 Año de creación de pregunta: 2010
 questions[29]= "30)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Reusabilidad";
 choices[29][1] = "Encapsulaci&oacute;n.";
 choices[29][2] = "Abstracci&oacute;n";
 choices[29][3] = "Persistencia";
 answers[29] = 3;
 units[29] = ['82'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7478. Map 2005";
 preguntaids[29] = 7478


//  Id pregunta: 6296 Año de creación de pregunta: 2003
 questions[30]= "31)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al proceso unificado desarrollo de software (PUDS):";
 choices[30]= new Array();
 choices[30][0] = "Plantea un modelo de ciclo de vida iterativo e incremental, centrado en una arquitectura que gu&iacute;a el desarrollo del sistema.";
 choices[30][1] = "PUDS impulsa un control de calidad y una gesti&oacute;n de riesgos objetivos y continua.";
 choices[30][2] = "PUDS se compone de fases, iteraciones y ciclos";
 choices[30][3] = "Todas las anteriores son correctas";
 answers[30] = 3;
 units[30] = ['82'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6296. ";
 preguntaids[30] = 6296


//  Id pregunta: 6297 Año de creación de pregunta: 2003
 questions[31]= "32)  Indicar la opci&oacute;n incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "El Proceso Unificado Desarrollo Software (PUDS) se compone de fases, iteraciones y ciclos.";
 choices[31][1] = "Las fases del PUDS son iniciaci&oacute;n, elaboraci&oacute;n, construcci&oacute;n y decisi&oacute;n";
 choices[31][2] = "En cada fase hay varias iteraciones. La iteraci&oacute;n produce una versi&oacute;n de un producto entregable que se ir&aacute; incrementando en cada iteraci&oacute;n hasta convertirse producto final";
 choices[31][3] = "El paso a trav&eacute;s de las cuatro fases constituye un ciclo de desarrollo";
 answers[31] = 1;
 units[31] = ['82'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6297. ";
 preguntaids[31] = 6297


//  Id pregunta: 8128 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[32]= new Array();
 choices[32][0] = "Extreme Programming.";
 choices[32][1] = "Modelo de ciclo de vida en cascada";
 choices[32][2] = "El modelo de ciclo de vida en V";
 choices[32][3] = "Modelo de ciclo de vida en espiral";
 answers[32] = 3;
 units[32] = ['82'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 8128. Examen TIC A2 2010 interna";
 preguntaids[32] = 8128


//  Id pregunta: 7735 Año de creación de pregunta: 2010
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[33]= new Array();
 choices[33][0] = "Cascada.";
 choices[33][1] = "Espiral.";
 choices[33][2] = "Prototipado.";
 choices[33][3] = "Escalera.";
 answers[33] = 3;
 units[33] = ['82'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7735. ";
 preguntaids[33] = 7735


//  Id pregunta: 5635 Año de creación de pregunta: 2007
 questions[34]= "35)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[34]= new Array();
 choices[34][0] = "Metodolog&iacute;a.";
 choices[34][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[34][2] = "Ingenier&iacute;a Inversa.";
 choices[34][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['82'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 5635. ";
 preguntaids[34] = 5635


//  Id pregunta: 9404 Año de creación de pregunta: 2014
 questions[35]= "36)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[35]= new Array();
 choices[35][0] = "Entorno de desarrollo";
 choices[35][1] = "Modelado de negocio";
 choices[35][2] = "Pruebas";
 choices[35][3] = "Despliegue";
 answers[35] = 0;
 units[35] = ['82'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9404. ";
 preguntaids[35] = 9404


//  Id pregunta: 9235 Año de creación de pregunta: 2014
 questions[36]= "37)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[36]= new Array();
 choices[36][0] = "En cascada.";
 choices[36][1] = "Basado en prototipos.";
 choices[36][2] = "En espiral WINWIN.";
 choices[36][3] = "RAD.";
 answers[36] = 2;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9235. Examen TIC A1 2013";
 preguntaids[36] = 9235


//  Id pregunta: 6955 Año de creación de pregunta: 2010
 questions[37]= "38)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[37]= new Array();
 choices[37][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[37][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[37][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[37][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n de bucles iterativos, probar el producto, reajustar especificacones";
 answers[37] = 0;
 units[37] = ['82'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6955. TIC-B 2009 bloque desarrollo";
 preguntaids[37] = 6955


//  Id pregunta: 5455 Año de creación de pregunta: 2007
 questions[38]= "39)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[38]= new Array();
 choices[38][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[38][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[38][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[38][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[38] = 1;
 units[38] = ['82'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 5455. ";
 preguntaids[38] = 5455


//  Id pregunta: 7006 Año de creación de pregunta: 2010
 questions[39]= "40)  De qu&eacute; modelo de ciclo de vida del software orientado a objetos son propios los conceptos amplitud, profundidad, madurez, alternativas y alcance";
 choices[39]= new Array();
 choices[39][0] = "Modelo de agrupamiento";
 choices[39][1] = "Modelo fuente";
 choices[39][2] = "Modelo remolino";
 choices[39][3] = "Modelo pinball";
 answers[39] = 2;
 units[39] = ['82'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7006. TIC-B 2009 bloque desarrollo";
 preguntaids[39] = 7006


//  Id pregunta: 5632 Año de creación de pregunta: 2007
 questions[40]= "41)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[40]= new Array();
 choices[40][0] = "Modelo de agrupamiento.";
 choices[40][1] = "Modelo en cascada.";
 choices[40][2] = "Modelo remolino.";
 choices[40][3] = "Modelo pinball.";
 answers[40] = 1;
 units[40] = ['82'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 5632. ";
 preguntaids[40] = 5632


//  Id pregunta: 9403 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[41]= new Array();
 choices[41][0] = "Adquisici&oacute;n";
 choices[41][1] = "Desarrollo";
 choices[41][2] = "Suministro";
 choices[41][3] = "Gesti&oacute;n";
 answers[41] = 3;
 units[41] = ['82'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 9403. Procesos principales: Adquisici&oacute;n, Suministro, Desarrollo, Operaci&oacute;n, Mantenimiento";
 preguntaids[41] = 9403


//  Id pregunta: 6202 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida no permite aprovechar las ventajas de la tecnolog&iacute;a de objetos?";
 choices[42]= new Array();
 choices[42][0] = "Modelo de agrupamiento.";
 choices[42][1] = "Modelo de cascada";
 choices[42][2] = "Modelo fuente";
 choices[42][3] = "Modelo remolino.";
 answers[42] = 1;
 units[42] = ['82'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6202. Examen TIC A Castilla La Mancha 2007";
 preguntaids[42] = 6202


//  Id pregunta: 6968 Año de creación de pregunta: 2010
 questions[43]= "44)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[43]= new Array();
 choices[43][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[43][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[43][2] = "Proyectos donde sea importante el factor riesgo";
 choices[43][3] = "El producto a desarrollar no es novedoso";
 answers[43] = 2;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6968. TIC-B 2009 bloque desarrollo";
 preguntaids[43] = 6968


//  Id pregunta: 6355 Año de creación de pregunta: 2003
 questions[44]= "45)  La propiedad de un objeto denominada persistencia consiste en";
 choices[44]= new Array();
 choices[44][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[44][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[44][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[44][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[44] = 0;
 units[44] = ['82'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6355. Examen 2006 JCYL";
 preguntaids[44] = 6355


//  Id pregunta: 6287 Año de creación de pregunta: 2003
 questions[45]= "46)  Todo ciclo de vida debe cubrir unos objetivos b&aacute;sicos. Indicar la FALSA:";
 choices[45]= new Array();
 choices[45][0] = "Definir las actividades a realizar y el orden";
 choices[45][1] = "Definir las t&eacute;cnicas a utilizar para la realizaci&oacute;n de las actividades";
 choices[45][2] = "Asegurar la consistencia con el resto de sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 choices[45][3] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto.";
 answers[45] = 1;
 units[45] = ['82'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6287. ";
 preguntaids[45] = 6287


//  Id pregunta: 6293 Año de creación de pregunta: 2003
 questions[46]= "47)  El modelo de ciclo de vida en espiral:";
 choices[46]= new Array();
 choices[46][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[46][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[46][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[46][3] = "Todas las anteriores son correctas";
 answers[46] = 1;
 units[46] = ['82'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6293. ";
 preguntaids[46] = 6293


//  Id pregunta: 7022 Año de creación de pregunta: 2010
 questions[47]= "48)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[47]= new Array();
 choices[47][0] = "Dificultad a la hora de definir requisitos";
 choices[47][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[47][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[47][3] = "Adaptar su aplicabilidad al software contratado";
 answers[47] = 0;
 units[47] = ['82'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7022. ";
 preguntaids[47] = 7022


//  Id pregunta: 5892 Año de creación de pregunta: 2007
 questions[48]= "49)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[48]= new Array();
 choices[48][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[48][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[48][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[48][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[48] = 3;
 units[48] = ['82'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 5892. ";
 preguntaids[48] = 5892


//  Id pregunta: 10064 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[49]= new Array();
 choices[49][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[49][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[49][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[49][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[49] = 1;
 units[49] = ['82', '84'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10064. Examen TIC A2 2014";
 preguntaids[49] = 10064


//  Id pregunta: 9347 Año de creación de pregunta: 2014
 questions[50]= "51)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[50]= new Array();
 choices[50][0] = "Es Iterativo e Incremental.";
 choices[50][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[50][2] = "Est&aacute; enfocado en los riesgos.";
 choices[50][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[50] = 3;
 units[50] = ['82'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 9347. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[50] = 9347


//  Id pregunta: 6295 Año de creación de pregunta: 2003
 questions[51]= "52)  Indicar la opci&oacute;n incorrecta en relaci&oacute;n a los modelos basados en transformaciones:";
 choices[51]= new Array();
 choices[51][0] = "El modelo de transformaci&oacute;n asume la posibilidad de convertir autom&aacute;ticamente una especificaci&oacute;n formal de un producto software en un programa que satisface las especificaciones.";
 choices[51][1] = "Dentro de este tipo de modelos se encuentran los basados en t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) y los basados en modelos de transformaci&oacute;n (Carma McClure)";
 choices[51][2] = "Los que usan t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) se basan en herramientas Case.";
 choices[51][3] = "Las posibilidades de transformaci&oacute;n autom&aacute;ticas s&oacute;lo disponible para productos peque&ntilde;os aplicados a &aacute;reas limitadas";
 answers[51] = 2;
 units[51] = ['82'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6295. ";
 preguntaids[51] = 6295


//  Id pregunta: 5679 Año de creación de pregunta: 2007
 questions[52]= "53)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si la revisi&oacute;n del paso a la siguiente etapa del proyecto no es satisfactoria?";
 choices[52]= new Array();
 choices[52][0] = "Se continua con la etapa siguiente.";
 choices[52][1] = "Se retrocede a la etapa anterior.";
 choices[52][2] = "Se permanece en la etapa actual hasta que est&eacute; preparada.";
 choices[52][3] = "Se comienza otra vez con la primera etapa.";
 answers[52] = 2;
 units[52] = ['82'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 5679. ";
 preguntaids[52] = 5679


//  Id pregunta: 9277 Año de creación de pregunta: 2014
 questions[53]= "54)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[53]= new Array();
 choices[53][0] = "Codd";
 choices[53][1] = "Boehm";
 choices[53][2] = "Chen";
 choices[53][3] = "James Marti";
 answers[53] = 3;
 units[53] = ['82'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9277. Examen TIC A2 2013. Promocion interna";
 preguntaids[53] = 9277


//  Id pregunta: 6401 Año de creación de pregunta: 2003
 questions[54]= "55)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo software en espiral, indicar qu&eacute; es lo que representa la dimensi&oacute;n radial";
 choices[54]= new Array();
 choices[54][0] = "El progreso hecho en completar cada ciclo de la espiral";
 choices[54][1] = "Coste acumulativo en el que se ha incurrido en las etapas realizadas hasta el momento actual";
 choices[54][2] = "El an&aacute;lisis de riesgos";
 choices[54][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[54] = 1;
 units[54] = ['82'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6401. Examen 2006 JCYL";
 preguntaids[54] = 6401


//  Id pregunta: 6300 Año de creación de pregunta: 2003
 questions[55]= "56)  Sobre la Programaci&oacute;n Extrema:";
 choices[55]= new Array();
 choices[55][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[55][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[55][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[55][3] = "Todas las anteriores son correctas";
 answers[55] = 3;
 units[55] = ['82'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6300. ";
 preguntaids[55] = 6300


//  Id pregunta: 8456 Año de creación de pregunta: 2011
 questions[56]= "57)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[56]= new Array();
 choices[56][0] = "Hirsch";
 choices[56][1] = "Royce";
 choices[56][2] = "Jackson";
 choices[56][3] = "Bohem";
 answers[56] = 2;
 units[56] = ['82'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8456. ";
 preguntaids[56] = 8456


//  Id pregunta: 6294 Año de creación de pregunta: 2003
 questions[57]= "58)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al modelo de ciclo de vida en espiral:";
 choices[57]= new Array();
 choices[57][0] = "Fue propuesto por Boehm para solventar los principales problemas de los modelos tradicionales";
 choices[57][1] = "Considera diferentes alternativas para alcanzar los objetivos del proyecto";
 choices[57][2] = "La dimensi&oacute;n radial indica los costes de desarrollo acumulativo";
 choices[57][3] = "Todas las anteriores son correctas";
 answers[57] = 3;
 units[57] = ['82'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6294. ";
 preguntaids[57] = 6294


//  Id pregunta: 6290 Año de creación de pregunta: 2003
 questions[58]= "59)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[58]= new Array();
 choices[58][0] = "5";
 choices[58][1] = "7";
 choices[58][2] = "9";
 choices[58][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[58] = 3;
 units[58] = ['82'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6290. ";
 preguntaids[58] = 6290


//  Id pregunta: 7020 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[59]= new Array();
 choices[59][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[59][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[59][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[59][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[59] = 2;
 units[59] = ['82'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7020. ";
 preguntaids[59] = 7020


//  Id pregunta: 7901 Año de creación de pregunta: 2011
 questions[60]= "61)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[60]= new Array();
 choices[60][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[60][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[60][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[60][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[60] = 0;
 units[60] = ['82'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7901. Examen TIC A1 2010";
 preguntaids[60] = 7901


//  Id pregunta: 5536 Año de creación de pregunta: 2007
 questions[61]= "62)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[61]= new Array();
 choices[61][0] = "Codificaci&oacute;n.";
 choices[61][1] = "Mantenimiento";
 choices[61][2] = "An&aacute;lisis de riesgo.";
 choices[61][3] = "Dise&ntilde;o.";
 answers[61] = 2;
 units[61] = ['82'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 5536. ";
 preguntaids[61] = 5536


//  Id pregunta: 6138 Año de creación de pregunta: 2003
 questions[62]= "63)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[62]= new Array();
 choices[62][0] = "Cascada";
 choices[62][1] = "Espiral";
 choices[62][2] = "Prototipado";
 choices[62][3] = "Escalera";
 answers[62] = 3;
 units[62] = ['82'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6138. Examen TIC A1 MAP 2007";
 preguntaids[62] = 6138


//  Id pregunta: 5660 Año de creación de pregunta: 2007
 questions[63]= "64)  El conjunto de procedimientos administrativos y t&eacute;cnicos que garantizan que todos los participantes del desarrollo de un sistema disponen de la versi&oacute;n adecuada de los productos que manejan, recibe el nombre de:";
 choices[63]= new Array();
 choices[63][0] = "Metodolog&iacute;a de desarrollo.";
 choices[63][1] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[63][2] = "An&aacute;lisis de versiones.";
 choices[63][3] = "Diagrama de estructura de la informaci&oacute;n.";
 answers[63] = 1;
 units[63] = ['82'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 5660. ";
 preguntaids[63] = 5660


//  Id pregunta: 7178 Año de creación de pregunta: 2010
 questions[64]= "65)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[64]= new Array();
 choices[64][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[64][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[64][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[64][3] = "La gesti&oacute;n de riesgos";
 answers[64] = 1;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7178. Castilla La Mancha 2009";
 preguntaids[64] = 7178


