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
//  Id pregunta: 3753 Año de creación de pregunta: 2002
 questions[0]= "1)  Del modelo de ciclo de vida en cascada se puede decir:";
 choices[0]= new Array();
 choices[0][0] = "Es un modelo que evoluciona en funci&oacute;n del grado de terminaci&oacute;n del proceso";
 choices[0][1] = "Es un modelo te&oacute;rico, dif&iacute;cil de cumplir porque necesita terminar una fase antes de comenzar la siguiente";
 choices[0][2] = "Es una particularizaci&oacute;n del ciclo de vida en espiral";
 choices[0][3] = "Normalmente va ligado al uso de prototipos";
 answers[0] = 1;
 units[0] = ['82'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3753. ";
 preguntaids[0] = 3753


//  Id pregunta: 3764 Año de creación de pregunta: 2002
 questions[1]= "2)  Despu&eacute;s de analizar un problema para el dise&ntilde;o de un sistema de informaci&oacute;n, se debe conocer:";
 choices[1]= new Array();
 choices[1][0] = "La estructura que tendr&aacute; el sistema inform&aacute;tico";
 choices[1][1] = "La informaci&oacute;n de salida deseada, los tratamientos a realizar y el dise&ntilde;o que tendr&aacute;n las tablas";
 choices[1][2] = "Los datos de que se dispone y las salidas que se desean obtener";
 choices[1][3] = "La informaci&oacute;n de salida deseada, los datos de entrada y los tratamientos a realizar con los datos";
 answers[1] = 3;
 units[1] = ['84'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3764. ";
 preguntaids[1] = 3764


//  Id pregunta: 3751 Año de creación de pregunta: 2002
 questions[2]= "3)  De acuerdo con el proceso de descomposici&oacute;n o explosi&oacute;n por niveles de los DFD's (Diagramas de Flujo de Datos) el primer nivel es el denominado:";
 choices[2]= new Array();
 choices[2][0] = "Diagrama del sistema";
 choices[2][1] = "Diagrama de contexto";
 choices[2][2] = "Diagrama de procesos primitivos";
 choices[2][3] = "Diagrama de top-down";
 answers[2] = 1;
 units[2] = ['85', '86'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3751. ";
 preguntaids[2] = 3751


//  Id pregunta: 3768 Año de creación de pregunta: 2002
 questions[3]= "4)  El acoplamiento es una medida:";
 choices[3]= new Array();
 choices[3][0] = "Interna.";
 choices[3][1] = "Externa.";
 choices[3][2] = "Intermedia.";
 choices[3][3] = "No es ninguna medida.";
 answers[3] = 1;
 units[3] = ['89'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3768. ";
 preguntaids[3] = 3768


//  Id pregunta: 3801 Año de creación de pregunta: 2002
 questions[4]= "5)  En an&aacute;lisis estructurado, el principal objetivo de un DFD es:";
 choices[4]= new Array();
 choices[4][0] = "Construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[4][1] = "Representar gr&aacute;ficamente las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[4][2] = "Describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[4][3] = "Establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[4] = 0;
 units[4] = ['85', '86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3801. ";
 preguntaids[4] = 3801


//  Id pregunta: 3762 Año de creación de pregunta: 2002
 questions[5]= "6)  Dentro del Plan de Sistemas se encuentra el dise&ntilde;o del sistema de informaci&oacute;n en el que se encuadran una serie de actividades. Indicar qu&eacute; actividad de las que a continuaci&oacute;n se relacionan debe excluirse de este contexto:";
 choices[5]= new Array();
 choices[5][0] = "Determinaci&oacute;n de la estructura de la organizaci&oacute;n inform&aacute;tica";
 choices[5][1] = "Determinaci&oacute;n de la carga de procesos batch";
 choices[5][2] = "Determinaci&oacute;n de la metodolog&iacute;a a emplear en el desarrollo de las aplicaciones";
 choices[5][3] = "Determinaci&oacute;n de los propietarios de los diferentes conjuntos de datos";
 answers[5] = 0;
 units[5] = ['83'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3762. ";
 preguntaids[5] = 3762


//  Id pregunta: 3796 Año de creación de pregunta: 2002
 questions[6]= "7)  El modo org&aacute;nico de aplicar los modelos de COCOMO considera:";
 choices[6]= new Array();
 choices[6][0] = "Proyectos peque&ntilde;os";
 choices[6][1] = "Proyectos de complejidad media";
 choices[6][2] = "Proyectos de complejidad alta";
 choices[6][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[6] = 0;
 units[6] = ['94'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3796. ";
 preguntaids[6] = 3796


//  Id pregunta: 3794 Año de creación de pregunta: 2002
 questions[7]= "8)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[7]= new Array();
 choices[7][0] = "Una t&eacute;cnica para la modelizaci&oacute;n de datos";
 choices[7][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[7][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[7][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[7] = 0;
 units[7] = ['85'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3794. ";
 preguntaids[7] = 3794


//  Id pregunta: 3740 Año de creación de pregunta: 2002
 questions[8]= "9)  Al esfuerzo requerido para localizar y delimitar un error en un programa en explotaci&oacute;n se llama:";
 choices[8]= new Array();
 choices[8][0] = "Usabilidad";
 choices[8][1] = "Mantenibilidad";
 choices[8][2] = "Verificabilidad";
 choices[8][3] = "Flexibilidad";
 answers[8] = 1;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3740. ";
 preguntaids[8] = 3740


//  Id pregunta: 3785 Año de creación de pregunta: 2002
 questions[9]= "10)  El modelo de cascada&hellip;:";
 choices[9]= new Array();
 choices[9][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[9][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[9][2] = "Es similar al iterativo";
 choices[9][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[9] = 0;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3785. ";
 preguntaids[9] = 3785


//  Id pregunta: 3763 Año de creación de pregunta: 2002
 questions[10]= "11)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[10]= new Array();
 choices[10][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[10][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[10][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[10][3] = "Bloque l&oacute;gico y Bloque instrumental";
 answers[10] = 1;
 units[10] = ['98'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3763. ";
 preguntaids[10] = 3763


//  Id pregunta: 3752 Año de creación de pregunta: 2002
 questions[11]= "12)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[11]= new Array();
 choices[11][0] = "El usuario valida el resultado de cada una de las fases";
 choices[11][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[11][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[11][3] = "Est&aacute; dirigido por el riesgo";
 answers[11] = 2;
 units[11] = ['82'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3752. ";
 preguntaids[11] = 3752


//  Id pregunta: 3757 Año de creación de pregunta: 2002
 questions[12]= "13)  Dentro de los modelos que permiten estimar el coste de un proyecto, la jerarqu&iacute;a COCOMO (Constructive Cost Model) de Boehm en su nivel 1 o b&aacute;sico calcula el esfuerzo y el coste de desarrollo del &quot;software&quot; en funci&oacute;n de:";
 choices[12]= new Array();
 choices[12][0] = "El n&uacute;mero de personas que participan en el proyecto";
 choices[12][1] = "La experiencia y formaci&oacute;n de los analistas y programadores";
 choices[12][2] = "El tama&ntilde;o del programa expresado en l&iacute;neas estimadas de c&oacute;digo";
 choices[12][3] = "Las pruebas que hay que realizar para asegurar que el software est&eacute; libre de errores";
 answers[12] = 2;
 units[12] = ['93'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3757. ";
 preguntaids[12] = 3757


//  Id pregunta: 3742 Año de creación de pregunta: 2002
 questions[13]= "14)  Al esfuerzo requerido para probar o testear un programa asegurando que cumple la funci&oacute;n pretendida se llama:";
 choices[13]= new Array();
 choices[13][0] = "Usabilidad";
 choices[13][1] = "Mantenibilidad";
 choices[13][2] = "Verificabilidad";
 choices[13][3] = "Flexibilidad";
 answers[13] = 2;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3742. ";
 preguntaids[13] = 3742


//  Id pregunta: 3779 Año de creación de pregunta: 2002
 questions[14]= "15)  El esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos del Plan General de Garant&iacute;a de Calidad implica la realizaci&oacute;n secuencial de una serie de cuatro procesos:";
 choices[14]= new Array();
 choices[14][0] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, perfil de riesgos potenciales, plan de contingencia y focos de riesgo";
 choices[14][1] = "Modelo de referencia b&aacute;sico, modelo de referencia detallado, perfil de riesgos potenciales y puntos de especial atenci&oacute;n";
 choices[14][2] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, modelo de referencia para el desarrollo, perfil de riesgos potenciales y focos de inter&eacute;s";
 choices[14][3] = "Objetivos del proyecto, plan de implantaci&oacute;n, inventario de recursos y perfil de riesgos potenciales";
 answers[14] = 2;
 units[14] = ['93'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3779. ";
 preguntaids[14] = 3779


//  Id pregunta: 3759 Año de creación de pregunta: 2002
 questions[15]= "16)  Dentro de un diagrama de flujos de datos, a los procesos que no necesitan descomponerse se les denomina:";
 choices[15]= new Array();
 choices[15][0] = "Procesos primitivos";
 choices[15][1] = "Procesos finales";
 choices[15][2] = "Procesos at&oacute;micos";
 choices[15][3] = "Procesos elementales";
 answers[15] = 0;
 units[15] = ['85', '86'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3759. ";
 preguntaids[15] = 3759


//  Id pregunta: 3803 Año de creación de pregunta: 2002
 questions[16]= "17)  En el &aacute;mbito de las estructuras de datos, una relaci&oacute;n n:m es de tipo:";
 choices[16]= new Array();
 choices[16][0] = "Unitario";
 choices[16][1] = "Binario";
 choices[16][2] = "Ternario";
 choices[16][3] = "n-ario";
 answers[16] = 1;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3803. ";
 preguntaids[16] = 3803


//  Id pregunta: 3795 Año de creación de pregunta: 2002
 questions[17]= "18)  El modo empotrado de aplicar los modelos de COCOMO considera:";
 choices[17]= new Array();
 choices[17][0] = "Proyectos peque&ntilde;os";
 choices[17][1] = "Proyectos de complejidad media";
 choices[17][2] = "Proyectos de complejidad alta";
 choices[17][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[17] = 3;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3795. ";
 preguntaids[17] = 3795


//  Id pregunta: 3770 Año de creación de pregunta: 2002
 questions[18]= "19)  El contenido de un plan de sistemas se puede estructurar en un conjunto de proyectos entre los que podemos destacar como fundamentales:";
 choices[18]= new Array();
 choices[18][0] = "Sistemas f&iacute;sicos, l&oacute;gicos, de comunicaciones y de seguridad";
 choices[18][1] = "Estudio, racionalizaci&oacute;n y dise&ntilde;o de la organizaci&oacute;n, instalaciones, dise&ntilde;o del sistema de informaci&oacute;n y presupuesto";
 choices[18][2] = "Organizaci&oacute;n y personal, formaci&oacute;n, implantaci&oacute;n y explotaci&oacute;n, calendario";
 choices[18][3] = "Todas las anteriores respuestas son correctas";
 answers[18] = 3;
 units[18] = ['83'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3770. ";
 preguntaids[18] = 3770


//  Id pregunta: 3783 Año de creación de pregunta: 2002
 questions[19]= "20)  El m&eacute;todo de los puntos de funci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Es dependiente del lenguaje de programaci&oacute;n que se use";
 choices[19][1] = "S&oacute;lo se aplica a proyectos en los que no se pueda usar COCOMO";
 choices[19][2] = "Se basa en el uso de una relaci&oacute;n emp&iacute;rica";
 choices[19][3] = "No es subjetivo, es muy objetivo";
 answers[19] = 2;
 units[19] = ['94'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3783. ";
 preguntaids[19] = 3783


//  Id pregunta: 3814 Año de creación de pregunta: 2002
 questions[20]= "21)  En la gesti&oacute;n de riesgos del modelo en espiral del ciclo de vida de una aplicaci&oacute;n, entre los riesgos m&aacute;s importantes que se contemplan tenemos:";
 choices[20]= new Array();
 choices[20][0] = "Escasez de personal";
 choices[20][1] = "Presupuestos y calendarios no realistas";
 choices[20][2] = "Las 2 anteriores";
 choices[20][3] = "Ninguna de las anteriores, pues este tema de riesgos es indiferente para el modelo en espiral";
 answers[20] = 2;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3814. ";
 preguntaids[20] = 3814


//  Id pregunta: 3804 Año de creación de pregunta: 2002
 questions[21]= "22)  En el diccionario de datos (lista organizada de todos los datos pertinentes al sistema, con un conjunto de definiciones precisas para que tanto el analista como el usuario se entiendan), la iteraci&oacute;n de elementos se representa con:";
 choices[21]= new Array();
 choices[21][0] = "&quot;[&quot; y &quot;]&quot;";
 choices[21][1] = "&quot;(&quot; y &quot;)&quot;";
 choices[21][2] = "&quot;{&quot; y &quot;}&quot;";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 2;
 units[21] = ['85', '86'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3804. ";
 preguntaids[21] = 3804


//  Id pregunta: 3789 Año de creación de pregunta: 2002
 questions[22]= "23)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[22]= new Array();
 choices[22][0] = "modelo de casos de uso";
 choices[22][1] = "modelo de despliegue";
 choices[22][2] = "modelo de interacci&oacute;n";
 choices[22][3] = "modelo de realizaci&oacute;n";
 answers[22] = 0;
 units[22] = ['89'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3789. ";
 preguntaids[22] = 3789


//  Id pregunta: 3765 Año de creación de pregunta: 2002
 questions[23]= "24)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[23]= new Array();
 choices[23][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[23][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[23][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[23][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[23] = 2;
 units[23] = ['85', '86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3765. ";
 preguntaids[23] = 3765


//  Id pregunta: 3748 Año de creación de pregunta: 2002
 questions[24]= "25)  CODE-AND-FIX:";
 choices[24]= new Array();
 choices[24][0] = "Es un modelo en cascada";
 choices[24][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[24][2] = "Es equivalente a METRICA";
 choices[24][3] = "No resulta muy pr&aacute;ctico";
 answers[24] = 3;
 units[24] = ['82'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3748. ";
 preguntaids[24] = 3748


//  Id pregunta: 3792 Año de creación de pregunta: 2002
 questions[25]= "26)  El modelo en espiral del ciclo de vida presenta alguna dificultades como son:";
 choices[25]= new Array();
 choices[25][0] = "Depender en exceso de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[25][1] = "Ajustar su aplicabilidad para el caso del software contratado";
 choices[25][2] = "Necesidad de una elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[25][3] = "Todas las anteriores son dificultades del modelo en espiral";
 answers[25] = 3;
 units[25] = ['82'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3792. ";
 preguntaids[25] = 3792


//  Id pregunta: 3782 Año de creación de pregunta: 2002
 questions[26]= "27)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[26]= new Array();
 choices[26][0] = "Es de tipo perfectivo";
 choices[26][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[26][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[26][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[26] = 3;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3782. ";
 preguntaids[26] = 3782


//  Id pregunta: 3760 Año de creación de pregunta: 2002
 questions[27]= "28)  Dentro del ciclo de vida cl&aacute;sico, &iquest;qu&eacute; es falso?:";
 choices[27]= new Array();
 choices[27][0] = "Es una visi&oacute;n del problema top-down";
 choices[27][1] = "Se basa en sucesivas subidas y bajadas del nivel de abstracci&oacute;n";
 choices[27][2] = "Se basa en una secuencia estricta de las fases del ciclo de vida";
 choices[27][3] = "Necesita especificaciones consistentes";
 answers[27] = 1;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3760. ";
 preguntaids[27] = 3760


//  Id pregunta: 3812 Año de creación de pregunta: 2002
 questions[28]= "29)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[28]= new Array();
 choices[28][0] = "Los datos";
 choices[28][1] = "Las relaciones";
 choices[28][2] = "Los atributos";
 choices[28][3] = "Otras entidades";
 answers[28] = 2;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3812. ";
 preguntaids[28] = 3812


//  Id pregunta: 3810 Año de creación de pregunta: 2002
 questions[29]= "30)  En el modelo en espiral o iterativo del ciclo de vida, cada ciclo en espiral empieza con la identificaci&oacute;n de:";
 choices[29]= new Array();
 choices[29][0] = "Los objetivos de la parte del producto que va a ser elaborada";
 choices[29][1] = "Los medios alternativos para implementar esta parte de producto (dise&ntilde;o A, dise&ntilde;o B, productos software, etc ...)";
 choices[29][2] = "Las restricciones impuestas : costes, calendario, interfaces, etc";
 choices[29][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[29] = 3;
 units[29] = ['82'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3810. ";
 preguntaids[29] = 3810


//  Id pregunta: 3744 Año de creación de pregunta: 2002
 questions[30]= "31)  Benchmarking es un concepto que indica:";
 choices[30]= new Array();
 choices[30][0] = "Un mecanismo para determinar reducciones de recursos";
 choices[30][1] = "Un sin&oacute;nimo de auditor&iacute;a";
 choices[30][2] = "Un proceso sistem&aacute;tico y continuo mediante el cual las organizaciones comparan su rendimiento con indicadores de referencia relevantes para comprender sus fortalezas y &aacute;reas de mejora";
 choices[30][3] = "Un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[30] = 2;
 units[30] = ['98'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3744. ";
 preguntaids[30] = 3744


//  Id pregunta: 3778 Año de creación de pregunta: 2002
 questions[31]= "32)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[31]= new Array();
 choices[31][0] = "Modelo de referencia";
 choices[31][1] = "Perfil de riesgos";
 choices[31][2] = "Foco de inter&eacute;s";
 choices[31][3] = "Establecimiento de la tipolog&iacute;a";
 answers[31] = 3;
 units[31] = ['93'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3778. ";
 preguntaids[31] = 3778


//  Id pregunta: 3754 Año de creación de pregunta: 2002
 questions[32]= "33)  Del modelo de ciclo de vida en espiral se puede decir:";
 choices[32]= new Array();
 choices[32][0] = "Es un modelo orientado a la gesti&oacute;n de riesgos y permite el prototipado r&aacute;pido";
 choices[32][1] = "No es un modelo orientado a la gesti&oacute;n de riesgos, pero permite el prototipado r&aacute;pido";
 choices[32][2] = "Es un modelo orientado a la gesti&oacute;n de riesgos, pero no permite el prototipado";
 choices[32][3] = "No es un modelo orientado a la gesti&oacute;n de riesgos y no permite el prototipado r&aacute;pido";
 answers[32] = 0;
 units[32] = ['82'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3754. ";
 preguntaids[32] = 3754


//  Id pregunta: 3811 Año de creación de pregunta: 2002
 questions[33]= "34)  En el modelo entidad/relaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "una relaci&oacute;n o interrelaci&oacute;n expresa una correspondencia o asociaci&oacute;n entre 2 &oacute; m&aacute;s entidades";
 choices[33][1] = "una relaci&oacute;n no puede tener atributos, ya que esto s&oacute;lo corresponde a las entidades";
 choices[33][2] = "la cardinalidad se refiere al m&iacute;nimo y m&aacute;ximo n&uacute;mero de entidades que puede haber en el sistema";
 choices[33][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[33] = 0;
 units[33] = ['85'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3811. ";
 preguntaids[33] = 3811


//  Id pregunta: 3773 Año de creación de pregunta: 2002
 questions[34]= "35)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de:";
 choices[34]= new Array();
 choices[34][0] = "La planificaci&oacute;n operativa";
 choices[34][1] = "El control anal&iacute;tico del gasto";
 choices[34][2] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[34][3] = "La previsi&oacute;n de beneficios";
 answers[34] = 0;
 units[34] = ['83'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3773. ";
 preguntaids[34] = 3773


//  Id pregunta: 3786 Año de creación de pregunta: 2002
 questions[35]= "36)  El modelo de ciclo de vida en cascada:";
 choices[35]= new Array();
 choices[35][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[35][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[35][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[35][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[35] = 3;
 units[35] = ['82'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3786. ";
 preguntaids[35] = 3786


//  Id pregunta: 3802 Año de creación de pregunta: 2002
 questions[36]= "37)  En an&aacute;lisis estructurado, una definici&oacute;n de Historia de la Vida de las Entidades (HVE) es:";
 choices[36]= new Array();
 choices[36][0] = "Su principal objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[36][1] = "Su principal objetivo es la representaci&oacute;n gr&aacute;fica de las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[36][2] = "Su principal objetivo es describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[36][3] = "Su principal objetivo consiste en establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[36] = 2;
 units[36] = ['85', '86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3802. ";
 preguntaids[36] = 3802


//  Id pregunta: 3739 Año de creación de pregunta: 2002
 questions[37]= "38)  Al esfuerzo requerido para ense&ntilde;ar, explotar, preparar las entradas e interpretar las salidas de un programa se llama:";
 choices[37]= new Array();
 choices[37][0] = "Usabilidad";
 choices[37][1] = "Mantenibilidad";
 choices[37][2] = "Verificabilidad";
 choices[37][3] = "Flexibilidad";
 answers[37] = 0;
 units[37] = ['93'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3739. ";
 preguntaids[37] = 3739


//  Id pregunta: 3806 Año de creación de pregunta: 2002
 questions[38]= "39)  En el modelo de ciclo de vida en espiral, cada ciclo de la espiral comienza con la etapa de:";
 choices[38]= new Array();
 choices[38][0] = "Planificaci&oacute;n";
 choices[38][1] = "An&aacute;lisis de riesgos";
 choices[38][2] = "Desarrollo del prototipo";
 choices[38][3] = "Evaluaci&oacute;n";
 answers[38] = 0;
 units[38] = ['82'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3806. ";
 preguntaids[38] = 3806


//  Id pregunta: 3813 Año de creación de pregunta: 2002
 questions[39]= "40)  En la fase 'Planificaci&oacute;n' de un modelo en cascada, es necesario fijar:";
 choices[39]= new Array();
 choices[39][0] = "&Aacute;mbito de trabajo a realizar";
 choices[39][1] = "Tareas a realizar";
 choices[39][2] = "Referencias a tener en cuenta";
 choices[39][3] = "Todas las anteriores respuestas son correctas";
 answers[39] = 3;
 units[39] = ['82'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3813. ";
 preguntaids[39] = 3813


//  Id pregunta: 3805 Año de creación de pregunta: 2002
 questions[40]= "41)  En el dise&ntilde;o orientado a objetos una de las caracter&iacute;sticas m&aacute;s deseables en cualquier proceso de dise&ntilde;o es:";
 choices[40]= new Array();
 choices[40][0] = "Cohesi&oacute;n fuerte.";
 choices[40][1] = "Reusabilidad.";
 choices[40][2] = "Abstracci&oacute;n.";
 choices[40][3] = "Todas las respuestas anteriores son ciertas.";
 answers[40] = 3;
 units[40] = ['89'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3805. ";
 preguntaids[40] = 3805


//  Id pregunta: 3790 Año de creación de pregunta: 2002
 questions[41]= "42)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[41]= new Array();
 choices[41][0] = "Certificaci&oacute;n de producto";
 choices[41][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[41][2] = "Total Quality Management";
 choices[41][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[41] = 2;
 units[41] = ['98'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3790. ";
 preguntaids[41] = 3790


//  Id pregunta: 3743 Año de creación de pregunta: 2002
 questions[42]= "43)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[42]= new Array();
 choices[42][0] = "Dise&ntilde;o detallado";
 choices[42][1] = "Codificaci&oacute;n";
 choices[42][2] = "Requisitos del sistema software";
 choices[42][3] = "Dise&ntilde;o preliminar";
 answers[42] = 1;
 units[42] = ['82'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3743. ";
 preguntaids[42] = 3743


//  Id pregunta: 3793 Año de creación de pregunta: 2002
 questions[43]= "44)  El modelo en espiral:";
 choices[43]= new Array();
 choices[43][0] = "Tiene como n&uacute;cleo la evaluaci&oacute;n de riesgos";
 choices[43][1] = "Es un refinamiento del modelo de prototipos";
 choices[43][2] = "Tiene como idea fundamental la evaluaci&oacute;n de costes, calendario&hellip;";
 choices[43][3] = "No tiene fin, un sistema siempre es mejorable";
 answers[43] = 0;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3793. ";
 preguntaids[43] = 3793


//  Id pregunta: 3750 Año de creación de pregunta: 2002
 questions[44]= "45)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[44]= new Array();
 choices[44][0] = "Se crean objetos cuando se necesitan.";
 choices[44][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[44][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[44][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[44] = 3;
 units[44] = ['85', '89'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3750. ";
 preguntaids[44] = 3750


//  Id pregunta: 3745 Año de creación de pregunta: 2002
 questions[45]= "46)  Booch, Jacobson y Rumbaugh:";
 choices[45]= new Array();
 choices[45][0] = "crearon C++";
 choices[45][1] = "crearon los diagramas E/R";
 choices[45][2] = "dise&ntilde;aron el primer ordenador que usaba procesamiento real en paralelo";
 choices[45][3] = "crearon UML";
 answers[45] = 3;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3745. ";
 preguntaids[45] = 3745


//  Id pregunta: 3808 Año de creación de pregunta: 2002
 questions[46]= "47)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[46]= new Array();
 choices[46][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[46][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[46][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[46][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[46] = 3;
 units[46] = ['82'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3808. ";
 preguntaids[46] = 3808


//  Id pregunta: 3788 Año de creación de pregunta: 2002
 questions[47]= "48)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[47]= new Array();
 choices[47][0] = "Calidad";
 choices[47][1] = "Tiempo de desarrollo";
 choices[47][2] = "Tama&ntilde;o";
 choices[47][3] = "Resultados";
 answers[47] = 2;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3788. ";
 preguntaids[47] = 3788


//  Id pregunta: 3755 Año de creación de pregunta: 2002
 questions[48]= "49)  Dentro de la m&eacute;trica de los factores de calidad, indicar la afirmaci&oacute;n falsa:";
 choices[48]= new Array();
 choices[48][0] = "Las m&eacute;tricas, son medidas cuantitativas del grado que tiene el software de un atributo dado";
 choices[48][1] = "Los criterios, son aquellos elementos internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[48][2] = "Los factores, son aqu&eacute;llos elementos externos o del usuario, relativos al comportamiento actual del software, su facilidad de cambio, y a su facilidad de conversi&oacute;n";
 choices[48][3] = "La relaci&oacute;n existente entre los tres grupos es: una vez definidos los criterios a medir, los factores sirven para cuantificar dichos criterios, y posteriormente la valoraci&oacute;n cuantitativa de los factores se lleva a cabo mediante la utilizaci&oacute;n de m&eacute;tricas";
 answers[48] = 3;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3755. ";
 preguntaids[48] = 3755


//  Id pregunta: 3761 Año de creación de pregunta: 2002
 questions[49]= "50)  Dentro del control de calidad, &iquest;qu&eacute; se entiende por revisi&oacute;n por pares o &quot;peer review&quot;?";
 choices[49]= new Array();
 choices[49][0] = "Generar un conjunto de pruebas para examinar autom&aacute;ticamente el objeto que se acaba de desarrollar";
 choices[49][1] = "Analizar el objeto en tiempo de ejecuci&oacute;n";
 choices[49][2] = "Revisar del c&oacute;digo de un programador por otros programadores";
 choices[49][3] = "Elaborar un informe de resultados";
 answers[49] = 2;
 units[49] = ['98'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3761. ";
 preguntaids[49] = 3761


//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[50]= "51)  El Diccionario de Datos es utilizado por:";
 choices[50]= new Array();
 choices[50][0] = "El administrador de la base de datos y los programadores";
 choices[50][1] = "Los analistas y los programadores";
 choices[50][2] = "Los usuarios finales de las aplicaciones";
 choices[50][3] = "Los usuarios remotos";
 answers[50] = 0;
 units[50] = ['60', '85', '86'];
 blocks[50] = ['B2', 'B3'];
 comments[50] = "Id Pregunta: 3777. ";
 preguntaids[50] = 3777


//  Id pregunta: 3771 Año de creación de pregunta: 2002
 questions[51]= "52)  El coste de la no calidad viene dado por:";
 choices[51]= new Array();
 choices[51][0] = "Evaluaci&oacute;n del producto final";
 choices[51][1] = "Fallos internos";
 choices[51][2] = "Fallos internos y externos";
 choices[51][3] = "Fallos externos con responsabilidad propia";
 answers[51] = 2;
 units[51] = ['93'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3771. ";
 preguntaids[51] = 3771


//  Id pregunta: 3756 Año de creación de pregunta: 2002
 questions[52]= "53)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[52]= new Array();
 choices[52][0] = "Program Evaluation &amp; Review Technique";
 choices[52][1] = "Diagramas de Gantt";
 choices[52][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[52][3] = "Diagrama de Regresi&oacute;n";
 answers[52] = 3;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3756. ";
 preguntaids[52] = 3756


//  Id pregunta: 3746 Año de creación de pregunta: 2002
 questions[53]= "54)  Cada ocurrencia de un tipo de entidad o interrelaci&oacute;n toma valores a partir de la observaci&oacute;n del mundo real. Al conjunto de posibles valores que puede tomar una cierta caracter&iacute;stica se llama:";
 choices[53]= new Array();
 choices[53][0] = "Atributo";
 choices[53][1] = "Dominio";
 choices[53][2] = "Relaci&oacute;n";
 choices[53][3] = "Restricci&oacute;n";
 answers[53] = 1;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3746. ";
 preguntaids[53] = 3746


//  Id pregunta: 3787 Año de creación de pregunta: 2002
 questions[54]= "55)  El modelo de ciclo de vida en espiral:";
 choices[54]= new Array();
 choices[54][0] = "No permite detectar errores en las primeras fases";
 choices[54][1] = "Se adapta bien a las metodolog&iacute;as orientadas a objetos";
 choices[54][2] = "Implica procedimientos separados para el desarrollo de los programas y su mantenimiento";
 choices[54][3] = "Tiende a pasar por alto los factores de riesgo";
 answers[54] = 1;
 units[54] = ['82'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3787. ";
 preguntaids[54] = 3787


//  Id pregunta: 3797 Año de creación de pregunta: 2002
 questions[55]= "56)  El modo semiacoplado de aplicar los modelos de COCOMO considera:";
 choices[55]= new Array();
 choices[55][0] = "Proyectos peque&ntilde;os";
 choices[55][1] = "Proyectos de complejidad media";
 choices[55][2] = "Proyectos de complejidad alta";
 choices[55][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[55] = 1;
 units[55] = ['94'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3797. ";
 preguntaids[55] = 3797


//  Id pregunta: 3780 Año de creación de pregunta: 2002
 questions[56]= "57)  El flujo de datos de un DFD:";
 choices[56]= new Array();
 choices[56][0] = "Tiene siempre flechas";
 choices[56][1] = "No tiene por qu&eacute; existir";
 choices[56][2] = "S&oacute;lo conecta procesos";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 3;
 units[56] = ['85', '86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3780. ";
 preguntaids[56] = 3780


//  Id pregunta: 3772 Año de creación de pregunta: 2002
 questions[57]= "58)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[57]= new Array();
 choices[57][0] = "Las alianzas y los recursos";
 choices[57][1] = "Los procesos";
 choices[57][2] = "Los resultados en la sociedad";
 choices[57][3] = "Los resultados en los clientes";
 answers[57] = 3;
 units[57] = ['98'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3772. ";
 preguntaids[57] = 3772


//  Id pregunta: 3776 Año de creación de pregunta: 2002
 questions[58]= "59)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[58]= new Array();
 choices[58][0] = "componentes";
 choices[58][1] = "despliegue";
 choices[58][2] = "interacci&oacute;n";
 choices[58][3] = "colaboraci&oacute;n";
 answers[58] = 0;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3776. ";
 preguntaids[58] = 3776


//  Id pregunta: 3800 Año de creación de pregunta: 2002
 questions[59]= "60)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[59]= new Array();
 choices[59][0] = "Funcionalidad requerida";
 choices[59][1] = "Fiabilidad";
 choices[59][2] = "Tiempo de  respuesta";
 choices[59][3] = "Son ciertas todas las anteriores respuestas";
 answers[59] = 3;
 units[59] = ['94'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3800. ";
 preguntaids[59] = 3800


//  Id pregunta: 3807 Año de creación de pregunta: 2002
 questions[60]= "61)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[60]= new Array();
 choices[60][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[60][1] = "La de declaraci&oacute;n de datos";
 choices[60][2] = "Las instrucciones de formateo de pantallas";
 choices[60][3] = "Se incluyen todas las anteriores";
 answers[60] = 3;
 units[60] = ['94'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3807. ";
 preguntaids[60] = 3807


//  Id pregunta: 3784 Año de creación de pregunta: 2002
 questions[61]= "62)  El modelo COCOMO de estimaci&oacute;n de recursos y esfuerzo en el desarrollo de un sistema de software, define un tipo de m&eacute;trica:";
 choices[61]= new Array();
 choices[61][0] = "De productividad";
 choices[61][1] = "De complejidad";
 choices[61][2] = "De calidad";
 choices[61][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[61] = 0;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3784. ";
 preguntaids[61] = 3784


//  Id pregunta: 3747 Año de creación de pregunta: 2002
 questions[62]= "63)  CODE-AND-FIX:";
 choices[62]= new Array();
 choices[62][0] = "Es un m&eacute;todo de an&aacute;lisis";
 choices[62][1] = "Es un m&eacute;todo de dise&ntilde;o";
 choices[62][2] = "Es una forma de resolver los errores originados por otros programadores";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 3;
 units[62] = ['82'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3747. ";
 preguntaids[62] = 3747


//  Id pregunta: 3741 Año de creación de pregunta: 2002
 questions[63]= "64)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[63]= new Array();
 choices[63][0] = "Usabilidad";
 choices[63][1] = "Mantenibilidad";
 choices[63][2] = "Verificabilidad";
 choices[63][3] = "Flexibilidad";
 answers[63] = 1;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3741. ";
 preguntaids[63] = 3741


//  Id pregunta: 3769 Año de creación de pregunta: 2002
 questions[64]= "65)  El ciclo de vida es una herramienta &uacute;til para:";
 choices[64]= new Array();
 choices[64][0] = "Establecer los puntos de control para la gesti&oacute;n del proyecto";
 choices[64][1] = "Para definir las actividades a realizar y en qu&eacute; orden, &uacute;nicamente";
 choices[64][2] = "Para poder generar la documentaci&oacute;n asociada al sistema de una forma eficaz";
 choices[64][3] = "El ciclo de vida no es la herramienta, lo es la metodolog&iacute;a asociada";
 answers[64] = 0;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3769. ";
 preguntaids[64] = 3769


//  Id pregunta: 3799 Año de creación de pregunta: 2002
 questions[65]= "66)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[65]= new Array();
 choices[65][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[65][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[65][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[65][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[65] = 2;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3799. ";
 preguntaids[65] = 3799


//  Id pregunta: 3791 Año de creación de pregunta: 2002
 questions[66]= "67)  El modelo en cascada, si hablamos de una fase en la que es necesario, aparte de otras labores, el analizar, entender y documentar el problema que el usuario trata de resolver con el sistema de informaci&oacute;n o aplicaci&oacute;n, nos estamos refiriendo a la fase de:";
 choices[66]= new Array();
 choices[66][0] = "Planificaci&oacute;n";
 choices[66][1] = "An&aacute;lisis";
 choices[66][2] = "Dise&ntilde;o";
 choices[66][3] = "Codificaci&oacute;n";
 answers[66] = 1;
 units[66] = ['82'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3791. ";
 preguntaids[66] = 3791


//  Id pregunta: 3798 Año de creación de pregunta: 2002
 questions[67]= "68)  El objetivo del modelo conceptual es:";
 choices[67]= new Array();
 choices[67][0] = "Establecer una visi&oacute;n global de los datos";
 choices[67][1] = "Establecer el detalle de las propiedades";
 choices[67][2] = "Definir las propiedades de cada entidad";
 choices[67][3] = "Definir el flujo de informaci&oacute;n";
 answers[67] = 0;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3798. ";
 preguntaids[67] = 3798


//  Id pregunta: 3738 Año de creación de pregunta: 2002
 questions[68]= "69)  Al esfuerzo requerido para conectar un sistema con otro se llama:";
 choices[68]= new Array();
 choices[68][0] = "Portabilidad";
 choices[68][1] = "Reusabilidad";
 choices[68][2] = "Interoperatividad";
 choices[68][3] = "Mantenibilidad";
 answers[68] = 2;
 units[68] = ['93'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3738. ";
 preguntaids[68] = 3738


//  Id pregunta: 3775 Año de creación de pregunta: 2002
 questions[69]= "70)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[69]= new Array();
 choices[69][0] = "componentes";
 choices[69][1] = "despliegue";
 choices[69][2] = "actividades";
 choices[69][3] = "ninguno de los anteriores";
 answers[69] = 1;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3775. ";
 preguntaids[69] = 3775


//  Id pregunta: 3758 Año de creación de pregunta: 2002
 questions[70]= "71)  Dentro de METRICA V3, &iquest;cu&aacute;l de los siguientes procesos no forma parte de la fase de desarrollo?:";
 choices[70]= new Array();
 choices[70][0] = "EVS";
 choices[70][1] = "IAS";
 choices[70][2] = "PSI";
 choices[70][3] = "ASI";
 answers[70] = 2;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3758. ";
 preguntaids[70] = 3758


//  Id pregunta: 3767 Año de creación de pregunta: 2002
 questions[71]= "72)  El acoplamiento es un concepto fundamental del dise&ntilde;o estructurado. &iquest;Cu&aacute;l de los siguientes tipos define el nivel de acoplamiento ordenados de mayor a menor?";
 choices[71]= new Array();
 choices[71][0] = "Por contenido, com&uacute;n, externo, de control, por estampado, de datos, normal.";
 choices[71][1] = "Externo, com&uacute;n, por contenido, por estampado, de control, directo y normal.";
 choices[71][2] = "Externo, por contenido, com&uacute;n, de control, por estampado, de datos y normal.";
 choices[71][3] = "Por contenido, externo, com&uacute;n, de control, de datos, por estampado y normal.";
 answers[71] = 0;
 units[71] = ['89'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3767. ";
 preguntaids[71] = 3767


//  Id pregunta: 3749 Año de creación de pregunta: 2002
 questions[72]= "73)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[72]= new Array();
 choices[72][0] = "Correctivo";
 choices[72][1] = "Perfectivo";
 choices[72][2] = "Evolutivo";
 choices[72][3] = "Adaptativo";
 answers[72] = 2;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 3749. ";
 preguntaids[72] = 3749


//  Id pregunta: 3774 Año de creación de pregunta: 2002
 questions[73]= "74)  El diagrama de contexto de un DFD contiene:";
 choices[73]= new Array();
 choices[73][0] = "Un &uacute;nico proceso";
 choices[73][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[73][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[73][3] = "Un &uacute;nico fichero de datos";
 answers[73] = 0;
 units[73] = ['85', '86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3774. ";
 preguntaids[73] = 3774


//  Id pregunta: 3809 Año de creación de pregunta: 2002
 questions[74]= "75)  En el modelo en cascada puede decirse que:";
 choices[74]= new Array();
 choices[74][0] = "Est&aacute; dise&ntilde;ado para la utilizaci&oacute;n de herramientas CASE";
 choices[74][1] = "El usuario es el principal protagonista";
 choices[74][2] = "La introducci&oacute;n de una fase de dise&ntilde;o r&aacute;pido servir&iacute;a para validar las especificaciones";
 choices[74][3] = "Todas las respuestas anteriores son ciertas";
 answers[74] = 2;
 units[74] = ['82'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3809. ";
 preguntaids[74] = 3809


