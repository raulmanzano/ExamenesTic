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
//  Id pregunta: 3954 Año de creación de pregunta: 2002
 questions[0]= "1)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[0]= new Array();
 choices[0][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[0][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[0][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[0][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[0] = 3;
 units[0] = ['92', '93'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3954. ";
 preguntaids[0] = 3954


//  Id pregunta: 1186 Año de creación de pregunta: 2016
 questions[1]= "2)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[1]= new Array();
 choices[1][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[1][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[1][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[1][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[1] = 1;
 units[1] = ['93'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 1186. ";
 preguntaids[1] = 1186


//  Id pregunta: 3594 Año de creación de pregunta: 2004
 questions[2]= "3)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[2]= new Array();
 choices[2][0] = "M&eacute;tricas de productividad";
 choices[2][1] = "M&eacute;tricas de fiabilidad";
 choices[2][2] = "M&eacute;tricas de rendimiento";
 choices[2][3] = "M&eacute;tricas de Complejidad";
 answers[2] = 2;
 units[2] = ['93'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3594. ";
 preguntaids[2] = 3594


//  Id pregunta: 1314 Año de creación de pregunta: 2016
 questions[3]= "4)  EI &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[3]= new Array();
 choices[3][0] = "Proceso poco documentado.";
 choices[3][1] = "Proceso de desarrollo por definir.";
 choices[3][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[3][3] = "Control cuantitativo de productos.";
 answers[3] = 2;
 units[3] = ['93'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 1314. ";
 preguntaids[3] = 1314


//  Id pregunta: 3935 Año de creación de pregunta: 2002
 questions[4]= "5)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[4]= new Array();
 choices[4][0] = "Fiabilidad";
 choices[4][1] = "Reusabilidad";
 choices[4][2] = "Flexibilidad";
 choices[4][3] = "Facilidad de prueba";
 answers[4] = 2;
 units[4] = ['92', '93'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3935. ";
 preguntaids[4] = 3935


//  Id pregunta: 1554 Año de creación de pregunta: 2016
 questions[5]= "6)  CMMI es un modelo para la mejora y evaluaci&oacute;n de procesos para el desarrollo, mantenimiento y operaci&oacute;n de sistemas de software. &iquest;Cu&aacute;l de las siguientes NO es un &aacute;rea del modelo CMMI?";
 choices[5]= new Array();
 choices[5][0] = "Desarrollo";
 choices[5][1] = "Servicios";
 choices[5][2] = "Adquisici&oacute;n";
 choices[5][3] = "Pruebas";
 answers[5] = 3;
 units[5] = ['93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1554. ";
 preguntaids[5] = 1554


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[6]= new Array();
 choices[6][0] = "Estructuraci&oacute;n.";
 choices[6][1] = "Coste.";
 choices[6][2] = "Modularidad.";
 choices[6][3] = "Acoplamiento.";
 answers[6] = 2;
 units[6] = ['93'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1051. ";
 preguntaids[6] = 1051


//  Id pregunta: 3740 Año de creación de pregunta: 2002
 questions[7]= "8)  Al esfuerzo requerido para localizar y delimitar un error en un programa en explotaci&oacute;n se llama:";
 choices[7]= new Array();
 choices[7][0] = "Usabilidad";
 choices[7][1] = "Mantenibilidad";
 choices[7][2] = "Verificabilidad";
 choices[7][3] = "Flexibilidad";
 answers[7] = 1;
 units[7] = ['93'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3740. ";
 preguntaids[7] = 3740


//  Id pregunta: 3864 Año de creación de pregunta: 2002
 questions[8]= "9)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de revisi&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Correcci&oacute;n";
 choices[8][1] = "Mantenibilidad";
 choices[8][2] = "Verificabilidad";
 choices[8][3] = "Flexibilidad";
 answers[8] = 0;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3864. ";
 preguntaids[8] = 3864


//  Id pregunta: 4034 Año de creación de pregunta: 2004
 questions[9]= "10)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[9]= new Array();
 choices[9][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[9][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[9][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[9][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[9] = 2;
 units[9] = ['92', '93'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4034. ";
 preguntaids[9] = 4034


//  Id pregunta: 3729 Año de creación de pregunta: 2002
 questions[10]= "11)  La capacidad de un programa de ejecutarse usando la cantidad estrictamente necesaria de recursos de computaci&oacute;n es denominada:";
 choices[10]= new Array();
 choices[10][0] = "Correcci&oacute;n";
 choices[10][1] = "Fiabilidad";
 choices[10][2] = "Eficiencia";
 choices[10][3] = "Integridad";
 answers[10] = 2;
 units[10] = ['93'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3729. ";
 preguntaids[10] = 3729


//  Id pregunta: 1829 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l es la opci&oacute;n correcta que representa a uno de los procesos que es necesario tener implantado para alcanzar el nivel 2 de CMMI (Capability Maturity Model Integration), en el que los proyectos est&aacute;n siendo gestionados y controlados durante su desarrollo";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de riesgos";
 choices[11][1] = "Gesti&oacute;n de proveedores";
 choices[11][2] = "Gesti&oacute;n cuantitativa de proyectos";
 choices[11][3] = "Innovaci&oacute;n organizacional";
 answers[11] = 1;
 units[11] = ['93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1829. ";
 preguntaids[11] = 1829


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


//  Id pregunta: 3712 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[13]= new Array();
 choices[13][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[13][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[13][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[13][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[13] = 3;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3712. ";
 preguntaids[13] = 3712


//  Id pregunta: 3577 Año de creación de pregunta: 2004
 questions[14]= "15)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[14][1] = "Auditor&iacute;a de Calidad";
 choices[14][2] = "Inspecci&oacute;n Detallada";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 2;
 units[14] = ['93'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3577. ";
 preguntaids[14] = 3577


//  Id pregunta: 3565 Año de creación de pregunta: 2004
 questions[15]= "16)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[15]= new Array();
 choices[15][0] = "caja negra";
 choices[15][1] = "caja blanca";
 choices[15][2] = "caja roja";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 0;
 units[15] = ['91', '93'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3565. Similar a examen TIC SS A 2003";
 preguntaids[15] = 3565


//  Id pregunta: 3739 Año de creación de pregunta: 2002
 questions[16]= "17)  Al esfuerzo requerido para ense&ntilde;ar, explotar, preparar las entradas e interpretar las salidas de un programa se llama:";
 choices[16]= new Array();
 choices[16][0] = "Usabilidad";
 choices[16][1] = "Mantenibilidad";
 choices[16][2] = "Verificabilidad";
 choices[16][3] = "Flexibilidad";
 answers[16] = 0;
 units[16] = ['93'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3739. ";
 preguntaids[16] = 3739


//  Id pregunta: 3788 Año de creación de pregunta: 2002
 questions[17]= "18)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[17]= new Array();
 choices[17][0] = "Calidad";
 choices[17][1] = "Tiempo de desarrollo";
 choices[17][2] = "Tama&ntilde;o";
 choices[17][3] = "Resultados";
 answers[17] = 2;
 units[17] = ['93'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3788. ";
 preguntaids[17] = 3788


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta FALSA relativa a SQuaRE (Software Product Quality Requirements and Evaluation):";
 choices[18]= new Array();
 choices[18][0] = "Permite la evaluaci&oacute;n de la calidad del software.";
 choices[18][1] = "Su certificaci&oacute;n es complementaria a ISO/IEC 15504-SPICE.";
 choices[18][2] = "As&iacute; se conoce a las normas de la familia ISO/IEC 25000.";
 choices[18][3] = "Es un framework de programaci&oacute;n de requisitos software.";
 answers[18] = 3;
 units[18] = ['93'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 850. AGE A2 2015";
 preguntaids[18] = 850


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[19]= "20)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[19]= new Array();
 choices[19][0] = "ISO/IEC 25000";
 choices[19][1] = "ISO/IEC 27000";
 choices[19][2] = "ISO 9000";
 choices[19][3] = "ISO 9001";
 answers[19] = 0;
 units[19] = ['93'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 848. AGE A1 2015";
 preguntaids[19] = 848


//  Id pregunta: 3575 Año de creación de pregunta: 2004
 questions[20]= "21)  Los tipos de riesgos potenciales de un proyecto que considera el PGGC (Plan General de Garant&iacute;a de Calidad) son:";
 choices[20]= new Array();
 choices[20][0] = "Cinco";
 choices[20][1] = "Siete";
 choices[20][2] = "Tres";
 choices[20][3] = "Seis";
 answers[20] = 1;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3575. ";
 preguntaids[20] = 3575


//  Id pregunta: 3738 Año de creación de pregunta: 2002
 questions[21]= "22)  Al esfuerzo requerido para conectar un sistema con otro se llama:";
 choices[21]= new Array();
 choices[21][0] = "Portabilidad";
 choices[21][1] = "Reusabilidad";
 choices[21][2] = "Interoperatividad";
 choices[21][3] = "Mantenibilidad";
 answers[21] = 2;
 units[21] = ['93'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3738. ";
 preguntaids[21] = 3738


//  Id pregunta: 1721 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l es el est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad y mejora continua de procesos de ingenier&iacute;a del software:";
 choices[22]= new Array();
 choices[22][0] = "ISO/IEC 12207";
 choices[22][1] = "ISO/IEC 27002";
 choices[22][2] = "ISO/IEC 15504";
 choices[22][3] = "ISO/IEC 17799";
 answers[22] = 2;
 units[22] = ['93'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1721. ";
 preguntaids[22] = 1721


//  Id pregunta: 3771 Año de creación de pregunta: 2002
 questions[23]= "24)  El coste de la no calidad viene dado por:";
 choices[23]= new Array();
 choices[23][0] = "Evaluaci&oacute;n del producto final";
 choices[23][1] = "Fallos internos";
 choices[23][2] = "Fallos internos y externos";
 choices[23][3] = "Fallos externos con responsabilidad propia";
 answers[23] = 2;
 units[23] = ['93'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3771. ";
 preguntaids[23] = 3771


//  Id pregunta: 3683 Año de creación de pregunta: 2002
 questions[24]= "25)  Indicar la afirmaci&oacute;n falsa acerca del coste de la calidad:";
 choices[24]= new Array();
 choices[24][0] = "El coste total se descompone en: coste de la calidad, coste de la no calidad y costes fijos";
 choices[24][1] = "El coste de la calidad viene dado por el sumatorio de lo que se invierte en prevenci&oacute;n, verificaci&oacute;n y validaci&oacute;n";
 choices[24][2] = "El coste de la no calidad viene dado por el sumatorio de lo que se invierte en fallos internos y fallos externos";
 choices[24][3] = "Como f&oacute;rmula general que determine el inter&eacute;s de la inversi&oacute;n se debe controlar el cumplimiento constante de: gastos en calidad &lt; gastos de la no calidad";
 answers[24] = 0;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3683. ";
 preguntaids[24] = 3683


//  Id pregunta: 1489 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n con los modelos para la gesti&oacute;n de la calidad del software, se&ntilde;ale la opci&oacute;n verdadera:";
 choices[25]= new Array();
 choices[25][0] = "El SEI public&oacute; en el a&ntilde;o 2010 la versi&oacute;n 1.3 de CMMI que contiene cambios, especialmente en lo que se refiere a alta madurez (niveles 4 y 5).";
 choices[25][1] = "Las pruebas en el modelo CMMI DEV est&aacute;n tratadas en las &aacute;reas de proceso &quot;Administraci&oacute;n Cuantitativa del Proyecto&quot; y &quot;Validaci&oacute;n&quot;.";
 choices[25][2] = "El nivel de Madurez 3 de modelo CMMI es el nivel &quot;Optimizado&quot;, se caracteriza porque las organizaciones disponen de un conjunto de m&eacute;tricas significativas de calidad y productividad, que se usan de modo sistem&aacute;tico para la toma de decisiones y la gesti&oacute;n de riesgos.";
 choices[25][3] = "En su cuarta edici&oacute;n, COBIT tiene 4 objetivos de alto nivel que cubren 21 objetivos de control (espec&iacute;ficos o detallados) clasificados en cuatro dominios.";
 answers[25] = 0;
 units[25] = ['93'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1489. ";
 preguntaids[25] = 1489


//  Id pregunta: 4026 Año de creación de pregunta: 2004
 questions[26]= "27)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[26]= new Array();
 choices[26][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[26][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[26][2] = "Todas son correctas";
 choices[26][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[26] = 0;
 units[26] = ['92', '93', '98'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4026. ";
 preguntaids[26] = 4026


//  Id pregunta: 3919 Año de creación de pregunta: 2002
 questions[27]= "28)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[27]= new Array();
 choices[27][0] = "M&eacute;tricas de productividad";
 choices[27][1] = "M&eacute;tricas de los factores de calidad";
 choices[27][2] = "M&eacute;tricas de complejidad";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 1;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3919. ";
 preguntaids[27] = 3919


//  Id pregunta: 3926 Año de creación de pregunta: 2002
 questions[28]= "29)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[28]= new Array();
 choices[28][0] = "Modularidad, Independencia de los entornos";
 choices[28][1] = "Coherencia, concisi&oacute;n";
 choices[28][2] = "Trazabilidad, integridad, coherencia";
 choices[28][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[28] = 2;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3926. ";
 preguntaids[28] = 3926


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[29]= "30)  El modelo CMMI v1.3 en su representaci&oacute;n por etapas establece:";
 choices[29]= new Array();
 choices[29][0] = "4 niveles de capacidad que son: Incompleto, Realizado, Gestionado y Definido.";
 choices[29][1] = "4 niveles de madurez que son: Inicial, Realizado, Gestionado cualitativamente y en optimizaci&oacute;n.";
 choices[29][2] = "5 niveles de madurez que son: Inicial, Gestionado, Definido, Gestionado cualitatlvamente y en opllmizad&oacute;n.";
 choices[29][3] = "5 niveles de capacidad que son: Incompleto, Realizado, Definido, Gestionado cualitativamente y en optimizaci&oacute;n.";
 answers[29] = 0;
 units[29] = ['93'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 851. AGE A2 2015";
 preguntaids[29] = 851


//  Id pregunta: 3856 Año de creación de pregunta: 2002
 questions[30]= "31)  Es una m&eacute;trica de complejidad:";
 choices[30]= new Array();
 choices[30][0] = "Halstead";
 choices[30][1] = "McCavendish";
 choices[30][2] = "McCall";
 choices[30][3] = "Dominique";
 answers[30] = 0;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3856. ";
 preguntaids[30] = 3856


//  Id pregunta: 1961 Año de creación de pregunta: 2016
 questions[31]= "32)  EI modelo CMMI (Capability Maturity Model Integration) es:";
 choices[31]= new Array();
 choices[31][0] = "Un modelo para la mejora en la obtenci&oacute;n de datos internos de la organizaci&oacute;n.";
 choices[31][1] = "Un modelo para la mejora y evaluaci&oacute;n de procesos para el desarrollo, mantenimiento y operaci&oacute;n de sistemas de software.";
 choices[31][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[31][3] = "Un modelo para la mejora de la consistencia de los datos de la organizaci&oacute;n.";
 answers[31] = 1;
 units[31] = ['93'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1961. ";
 preguntaids[31] = 1961


//  Id pregunta: 3601 Año de creación de pregunta: 2004
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[32]= new Array();
 choices[32][0] = "Integridad";
 choices[32][1] = "Sencillez";
 choices[32][2] = "Mantenibilidad";
 choices[32][3] = "Portabilidad";
 answers[32] = 1;
 units[32] = ['93'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3601. ";
 preguntaids[32] = 3601


//  Id pregunta: 3778 Año de creación de pregunta: 2002
 questions[33]= "34)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[33]= new Array();
 choices[33][0] = "Modelo de referencia";
 choices[33][1] = "Perfil de riesgos";
 choices[33][2] = "Foco de inter&eacute;s";
 choices[33][3] = "Establecimiento de la tipolog&iacute;a";
 answers[33] = 3;
 units[33] = ['93'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3778. ";
 preguntaids[33] = 3778


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[34]= "35)  Recientemente se ha publicado la norma de calidad ISO 9000:2015. Al igual que la ISO 9000:2008 se basa en principios. Indique de los siguientes cu&aacute;l NO es un principio de la ISO 9000:2015:";
 choices[34]= new Array();
 choices[34][0] = "Enfoque al cliente.";
 choices[34][1] = "Liderazgo.";
 choices[34][2] = "Gesti&oacute;n de las relaciones.";
 choices[34][3] = "Enfoque al beneficio.";
 answers[34] = 3;
 units[34] = ['93'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 849. AGE A2 2015";
 preguntaids[34] = 849


//  Id pregunta: 3714 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[35]= new Array();
 choices[35][0] = "El coste es constante e independiente de la calidad del producto";
 choices[35][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[35][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[35][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[35] = 0;
 units[35] = ['93'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3714. ";
 preguntaids[35] = 3714


//  Id pregunta: 1962 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad seg&uacute;n el modelo de McCall?";
 choices[36]= new Array();
 choices[36][0] = "Integridad.";
 choices[36][1] = "Relaci&oacute;n coste-beneficio.";
 choices[36][2] = "Fiabilidad.";
 choices[36][3] = "Facilidad de mantenimiento";
 answers[36] = 1;
 units[36] = ['93'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 1962. ";
 preguntaids[36] = 1962


//  Id pregunta: 4031 Año de creación de pregunta: 2003
 questions[37]= "38)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[37]= new Array();
 choices[37][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de niveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[37][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[37][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[37][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[37] = 1;
 units[37] = ['92', '93', '98'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 4031. ";
 preguntaids[37] = 4031


//  Id pregunta: 4027 Año de creación de pregunta: 2004
 questions[38]= "39)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[38]= new Array();
 choices[38][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[38][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[38][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[38][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[38] = 3;
 units[38] = ['92', '93', '98'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4027. Pregunta Junta Andalucia - A";
 preguntaids[38] = 4027


//  Id pregunta: 3865 Año de creación de pregunta: 2002
 questions[39]= "40)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de transici&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Reusabilidad";
 choices[39][1] = "Flexibilidad";
 choices[39][2] = "Portabilidad";
 choices[39][3] = "Interoperabilidad";
 answers[39] = 1;
 units[39] = ['93'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3865. ";
 preguntaids[39] = 3865


//  Id pregunta: 3779 Año de creación de pregunta: 2002
 questions[40]= "41)  El esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos del Plan General de Garant&iacute;a de Calidad implica la realizaci&oacute;n secuencial de una serie de cuatro procesos:";
 choices[40]= new Array();
 choices[40][0] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, perfil de riesgos potenciales, plan de contingencia y focos de riesgo";
 choices[40][1] = "Modelo de referencia b&aacute;sico, modelo de referencia detallado, perfil de riesgos potenciales y puntos de especial atenci&oacute;n";
 choices[40][2] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, modelo de referencia para el desarrollo, perfil de riesgos potenciales y focos de inter&eacute;s";
 choices[40][3] = "Objetivos del proyecto, plan de implantaci&oacute;n, inventario de recursos y perfil de riesgos potenciales";
 answers[40] = 2;
 units[40] = ['93'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3779. ";
 preguntaids[40] = 3779


//  Id pregunta: 3731 Año de creación de pregunta: 2002
 questions[41]= "42)  Seg&uacute;n McCall, la capacidad de un programa de responder ante situaciones no previstas se llama:";
 choices[41]= new Array();
 choices[41][0] = "Correcci&oacute;n";
 choices[41][1] = "Fiabilidad";
 choices[41][2] = "Eficiencia";
 choices[41][3] = "Integridad";
 answers[41] = 1;
 units[41] = ['93'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3731. ";
 preguntaids[41] = 3731


//  Id pregunta: 3742 Año de creación de pregunta: 2002
 questions[42]= "43)  Al esfuerzo requerido para probar o testear un programa asegurando que cumple la funci&oacute;n pretendida se llama:";
 choices[42]= new Array();
 choices[42][0] = "Usabilidad";
 choices[42][1] = "Mantenibilidad";
 choices[42][2] = "Verificabilidad";
 choices[42][3] = "Flexibilidad";
 answers[42] = 2;
 units[42] = ['93'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3742. ";
 preguntaids[42] = 3742


//  Id pregunta: 3637 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[43]= new Array();
 choices[43][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[43][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[43][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[43][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[43] = 1;
 units[43] = ['93'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3637. ";
 preguntaids[43] = 3637


//  Id pregunta: 3676 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[44]= new Array();
 choices[44][0] = "Revisiones t&eacute;cnicas formales";
 choices[44][1] = "Guiones de recomendaciones";
 choices[44][2] = "Listas de control";
 choices[44][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[44] = 0;
 units[44] = ['93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3676. ";
 preguntaids[44] = 3676


//  Id pregunta: 3847 Año de creación de pregunta: 2002
 questions[45]= "46)  Entre los factores de calidad del software que McCall identific&oacute; para la fase de explotaci&oacute;n podemos destacar:";
 choices[45]= new Array();
 choices[45][0] = "Fiabilidad, correcci&oacute;n, integridad, eficiencia y usabilidad";
 choices[45][1] = "Fiabilidad, flexibilidad y portabilidad";
 choices[45][2] = "Mantenibilidad, seguridad, flexibilidad y eficiencia";
 choices[45][3] = "Todos los anteriores";
 answers[45] = 0;
 units[45] = ['92', '93'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3847. ";
 preguntaids[45] = 3847


//  Id pregunta: 3741 Año de creación de pregunta: 2002
 questions[46]= "47)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[46]= new Array();
 choices[46][0] = "Usabilidad";
 choices[46][1] = "Mantenibilidad";
 choices[46][2] = "Verificabilidad";
 choices[46][3] = "Flexibilidad";
 answers[46] = 1;
 units[46] = ['93'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3741. ";
 preguntaids[46] = 3741


//  Id pregunta: 3841 Año de creación de pregunta: 2002
 questions[47]= "48)  Entre las m&eacute;tricas que miden la complejidad tenemos:";
 choices[47]= new Array();
 choices[47][0] = "T&eacute;cnica de McCabe y T&eacute;cnica de Halstead";
 choices[47][1] = "M&eacute;todos de los puntos de funci&oacute;n";
 choices[47][2] = "T&eacute;cnicas de McCall sobre la estructura de la calidad del software";
 choices[47][3] = "Todas las respuestas anteriores son ciertas";
 answers[47] = 0;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3841. ";
 preguntaids[47] = 3841


//  Id pregunta: 3526 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes respuestas no es un procedimiento para el control de calidad del software seg&uacute;n el PGGC?:";
 choices[48]= new Array();
 choices[48][0] = "Revisiones de aceptaci&oacute;n";
 choices[48][1] = "Auditor&iacute;as";
 choices[48][2] = "Revisiones t&eacute;cnicas formales";
 choices[48][3] = "Evaluaci&oacute;n de prototipos";
 answers[48] = 0;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3526. Procedimientos de Control de Calidad: Revisiones T&eacute;cnicas Formales, Pruebas, Procedimientos extraordinarios (auditor&iacute;a) y Procedimientos particulares (Evaluaci&oacute;n de Prototipos)";
 preguntaids[48] = 3526


//  Id pregunta: 3755 Año de creación de pregunta: 2002
 questions[49]= "50)  Dentro de la m&eacute;trica de los factores de calidad, indicar la afirmaci&oacute;n falsa:";
 choices[49]= new Array();
 choices[49][0] = "Las m&eacute;tricas, son medidas cuantitativas del grado que tiene el software de un atributo dado";
 choices[49][1] = "Los criterios, son aquellos elementos internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[49][2] = "Los factores, son aqu&eacute;llos elementos externos o del usuario, relativos al comportamiento actual del software, su facilidad de cambio, y a su facilidad de conversi&oacute;n";
 choices[49][3] = "La relaci&oacute;n existente entre los tres grupos es: una vez definidos los criterios a medir, los factores sirven para cuantificar dichos criterios, y posteriormente la valoraci&oacute;n cuantitativa de los factores se lleva a cabo mediante la utilizaci&oacute;n de m&eacute;tricas";
 answers[49] = 3;
 units[49] = ['93'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3755. ";
 preguntaids[49] = 3755


//  Id pregunta: 3860 Año de creación de pregunta: 2002
 questions[50]= "51)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[50]= new Array();
 choices[50][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[50][1] = "Certificaci&oacute;n y prueba del software";
 choices[50][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[50][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[50] = 2;
 units[50] = ['92', '93'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3860. ";
 preguntaids[50] = 3860


//  Id pregunta: 3815 Año de creación de pregunta: 2002
 questions[51]= "52)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[51]= new Array();
 choices[51][0] = "La cantidad de software producido por unidad de tiempo";
 choices[51][1] = "La reutilizaci&oacute;n del software producido";
 choices[51][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[51][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[51] = 1;
 units[51] = ['93'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3815. ";
 preguntaids[51] = 3815


//  Id pregunta: 3547 Año de creación de pregunta: 2004
 questions[52]= "53)  La complejidad  ciclom&aacute;tica de un grafo con 5 nodos y 7 aristas es:";
 choices[52]= new Array();
 choices[52][0] = "3";
 choices[52][1] = "4";
 choices[52][2] = "5";
 choices[52][3] = "6";
 answers[52] = 1;
 units[52] = ['93'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3547. Similar a examen TIC SS A 2004. Complejidad McCabe = aristas - nodos + 2";
 preguntaids[52] = 3547


//  Id pregunta: 1184 Año de creación de pregunta: 2016
 questions[53]= "54)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[53]= new Array();
 choices[53][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[53][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[53][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[53][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[53] = 1;
 units[53] = ['93'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 1184. ";
 preguntaids[53] = 1184


//  Id pregunta: 3822 Año de creación de pregunta: 2002
 questions[54]= "55)  En la t&eacute;cnica de medida de la complejidad de Halstead se mide la complejidad por:";
 choices[54]= new Array();
 choices[54][0] = "El n&uacute;mero de operadores diferentes";
 choices[54][1] = "El n&uacute;mero de operandos diferentes";
 choices[54][2] = "Por su volumen que es el logaritmo en base 2 del producto del numero de  los operadores diferentes por el n&uacute;mero de operandos diferentes";
 choices[54][3] = "Por su longitud que es una funci&oacute;n de los operandos diferentes y de los operadores diferentes y que es una buena aproximaci&oacute;n a la suma del n&uacute;mero total de operadores y del numero total de operandos";
 answers[54] = 3;
 units[54] = ['93'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3822. ";
 preguntaids[54] = 3822


//  Id pregunta: 3656 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto a las m&eacute;tricas de calidad del software?:";
 choices[55]= new Array();
 choices[55][0] = "COCOMO es un modelo de estimaci&oacute;n del software que se basa en el n&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[55][1] = "La m&eacute;trica de complejidad del software conocida como de los puntos de funci&oacute;n se obtiene utilizando una relaci&oacute;n emp&iacute;rica basada en medidas del dominio de informaci&oacute;n y en valoraciones subjetivas";
 choices[55][2] = "La t&eacute;cnica de Halstead sirve para medir la complejidad de un desarrollo bas&aacute;ndose en su 'longitud', su 'vocabulario' y su 'volumen', que se obtienen mediante ciertas ecuaciones que utilizan el n&uacute;mero de operadores y operandos del desarrollo";
 choices[55][3] = "Son ciertas todas las anteriores";
 answers[55] = 3;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3656. ";
 preguntaids[55] = 3656


//  Id pregunta: 3713 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;En qu&eacute; consiste la teor&iacute;a del Modelo Compuesto aplicada a la implantaci&oacute;n de la Calidad propuesto por Lawler?";
 choices[56]= new Array();
 choices[56][0] = "El coste aumenta primero linealmente y luego exponencialmente";
 choices[56][1] = "En el primer tramo, el coste aumenta con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad.";
 choices[56][2] = "Se usa aritm&eacute;tica compuesta para su c&aacute;lculo, aunque la curva sale convexa siempre que se sigue este modelo.";
 choices[56][3] = "En el primer tramo, el coste disminuye con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad. En el tercer tramo el coste se incrementa con la calidad.";
 answers[56] = 3;
 units[56] = ['93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3713. ";
 preguntaids[56] = 3713


//  Id pregunta: 3730 Año de creación de pregunta: 2002
 questions[57]= "58)  A la extensi&oacute;n por la cual el acceso a software o datos por personas no autorizadas puede ser controlado se llama:";
 choices[57]= new Array();
 choices[57][0] = "Correcci&oacute;n";
 choices[57][1] = "Fiabilidad";
 choices[57][2] = "Eficiencia";
 choices[57][3] = "Integridad";
 answers[57] = 3;
 units[57] = ['93'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3730. ";
 preguntaids[57] = 3730


//  Id pregunta: 1185 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la familia de normas que tiene por objetivo la creaci&oacute;n de un marco de trabajo com&uacute;n para evaluar la calidad del producto software:";
 choices[58]= new Array();
 choices[58][0] = "ISO 25000";
 choices[58][1] = "ISO/IEC 20000-1";
 choices[58][2] = "ISO/IEC 27001";
 choices[58][3] = "IEC 15504 e ISO/IEC 12207";
 answers[58] = 0;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1185. ";
 preguntaids[58] = 1185


//  Id pregunta: 4020 Año de creación de pregunta: 2004
 questions[59]= "60)  &iquest;Cu&aacute;ntos niveles tiene el CMMi en su representaci&oacute;n por etapas?:";
 choices[59]= new Array();
 choices[59][0] = "3";
 choices[59][1] = "4";
 choices[59][2] = "5";
 choices[59][3] = "6";
 answers[59] = 2;
 units[59] = ['93'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 4020. ";
 preguntaids[59] = 4020


//  Id pregunta: 1183 Año de creación de pregunta: 2016
 questions[60]= "61)  El nivel m&aacute;ximo de madurez en CMMI es el nivel 5, o nivel:";
 choices[60]= new Array();
 choices[60][0] = "Optimizado.";
 choices[60][1] = "Administrado cuantitativamente.";
 choices[60][2] = "Definido.";
 choices[60][3] = "Productivo.";
 answers[60] = 0;
 units[60] = ['93'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1183. ";
 preguntaids[60] = 1183


//  Id pregunta: 3693 Año de creación de pregunta: 2002
 questions[61]= "62)  La complejidad ciclom&aacute;tica tiene que ver con la t&eacute;cnica de:";
 choices[61]= new Array();
 choices[61][0] = "McCall";
 choices[61][1] = "McCabe";
 choices[61][2] = "Hasltead";
 choices[61][3] = "COCOMO";
 answers[61] = 1;
 units[61] = ['93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3693. ";
 preguntaids[61] = 3693


//  Id pregunta: 3733 Año de creación de pregunta: 2002
 questions[62]= "63)  A la extensi&oacute;n por la cual un programa satisface sus especificaciones y cumple con los requerimientos del usuario se le llama:";
 choices[62]= new Array();
 choices[62][0] = "Correcci&oacute;n";
 choices[62][1] = "Fiabilidad";
 choices[62][2] = "Eficiencia";
 choices[62][3] = "Integridad";
 answers[62] = 0;
 units[62] = ['93'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3733. ";
 preguntaids[62] = 3733


//  Id pregunta: 3949 Año de creación de pregunta: 2002
 questions[63]= "64)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[63]= new Array();
 choices[63][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[63][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[63][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[63][3] = "Los criterios para calificar al software";
 answers[63] = 1;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3949. ";
 preguntaids[63] = 3949


//  Id pregunta: 3960 Año de creación de pregunta: 2002
 questions[64]= "65)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[64]= new Array();
 choices[64][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[64][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[64][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[64][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[64] = 0;
 units[64] = ['93'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3960. ";
 preguntaids[64] = 3960


//  Id pregunta: 3967 Año de creación de pregunta: 2002
 questions[65]= "66)  Si se usa la t&eacute;cnica McCabe se puede valorar:";
 choices[65]= new Array();
 choices[65][0] = "Las aristas de un grafo";
 choices[65][1] = "El n&uacute;mero de regiones cerradas de un grafo";
 choices[65][2] = "Los nodos desconectados de un grafo";
 choices[65][3] = "No tiene ninguna relaci&oacute;n con grafos";
 answers[65] = 1;
 units[65] = ['93'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3967. ";
 preguntaids[65] = 3967


//  Id pregunta: 3863 Año de creación de pregunta: 2002
 questions[66]= "67)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de explotaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Usabilidad";
 choices[66][1] = "Eficiencia";
 choices[66][2] = "Correcci&oacute;n";
 choices[66][3] = "Mantenibilidad";
 answers[66] = 3;
 units[66] = ['93'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3863. ";
 preguntaids[66] = 3863


//  Id pregunta: 3668 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes elementos forma parte del 'bloque instrumental' del PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI?:";
 choices[67]= new Array();
 choices[67][0] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de garant&iacute;a de calidad";
 choices[67][1] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[67][2] = "Procedimiento de control de calidad";
 choices[67][3] = "Todos los elementos anteriores son v&aacute;lidos";
 answers[67] = 2;
 units[67] = ['93'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3668. ";
 preguntaids[67] = 3668


//  Id pregunta: 3911 Año de creación de pregunta: 2002
 questions[68]= "69)  La t&eacute;cnica Halstead usa:";
 choices[68]= new Array();
 choices[68][0] = "El n&uacute;mero de operandos distintos de un programa";
 choices[68][1] = "La longitud de un programa";
 choices[68][2] = "El tiempo de ejecuci&oacute;n &oacute;ptimo";
 choices[68][3] = "No existe";
 answers[68] = 0;
 units[68] = ['93'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3911. ";
 preguntaids[68] = 3911


//  Id pregunta: 3930 Año de creación de pregunta: 2002
 questions[69]= "70)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[69]= new Array();
 choices[69][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[69][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[69][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[69][3] = "Todos los anteriores";
 answers[69] = 3;
 units[69] = ['92', '93'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3930. ";
 preguntaids[69] = 3930


//  Id pregunta: 3732 Año de creación de pregunta: 2002
 questions[70]= "71)  A la extensi&oacute;n por la cual un programa puede ser usado en otras aplicaciones se llama:";
 choices[70]= new Array();
 choices[70][0] = "Portabilidad";
 choices[70][1] = "Reusabilidad";
 choices[70][2] = "Interoperatividad";
 choices[70][3] = "Mantenibilidad";
 answers[70] = 1;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3732. ";
 preguntaids[70] = 3732


//  Id pregunta: 3662 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[71]= new Array();
 choices[71][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[71][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[71][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[71][3] = "Todas las anteriores respuestas son correctas";
 answers[71] = 1;
 units[71] = ['93'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3662. ";
 preguntaids[71] = 3662


//  Id pregunta: 4019 Año de creación de pregunta: 2004
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[72]= new Array();
 choices[72][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[72][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[72][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[72][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[72] = 2;
 units[72] = ['92', '93', '98'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4019. Pregunta Junta Andalucia - A";
 preguntaids[72] = 4019


//  Id pregunta: 1266 Año de creación de pregunta: 2016
 questions[73]= "74)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[73]= new Array();
 choices[73][0] = "Optimizado";
 choices[73][1] = "Definido";
 choices[73][2] = "Gestionado";
 choices[73][3] = "Inicial";
 answers[73] = 1;
 units[73] = ['93'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1266. ";
 preguntaids[73] = 1266


//  Id pregunta: 3566 Año de creación de pregunta: 2004
 questions[74]= "75)  Cu&aacute;l de los siguientes no es un factor de calidad de McCall:";
 choices[74]= new Array();
 choices[74][0] = "Fiabilidad";
 choices[74][1] = "Usabilidad";
 choices[74][2] = "Facilidad de mantenimiento";
 choices[74][3] = "Bajo coste";
 answers[74] = 3;
 units[74] = ['93'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3566. Similar a examen TIC SS A 2003";
 preguntaids[74] = 3566


