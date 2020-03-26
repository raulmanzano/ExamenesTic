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
//  Id pregunta: 2297 Año de creación de pregunta: 2002
 questions[0]= "1)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son fuentes accesibles al p&uacute;blico:";
 choices[0]= new Array();
 choices[0][0] = "El censo promocional";
 choices[0][1] = "Los repertorios telef&oacute;nicos";
 choices[0][2] = "Los medios de comunicaci&oacute;n";
 choices[0][3] = "Todas las anteriores los son";
 answers[0] = 3;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2297. ";
 preguntaids[0] = 2297


//  Id pregunta: 2293 Año de creación de pregunta: 2002
 questions[1]= "2)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[1]= new Array();
 choices[1][0] = "12 meses";
 choices[1][1] = "6 meses";
 choices[1][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[1][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[1] = 3;
 units[1] = ['35'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2293. ";
 preguntaids[1] = 2293


//  Id pregunta: 2329 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[2]= new Array();
 choices[2][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[2][1] = "Inspecci&oacute;n de Datos";
 choices[2][2] = "Secretar&iacute;a General";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = 2;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2329. Pregunta similar a la del ex&aacute;men de SS del 2003. Real Decreto 428/1993";
 preguntaids[2] = 2329


//  Id pregunta: 2336 Año de creación de pregunta: 2003
 questions[3]= "4)  La LOPD, en su art 5 sobre el Derecho de Informaci&oacute;n en la recogida de datos, indica que los interesados han de estar informados de la posibilidad de ejercitar varios derechos sobre sus datos. Indicar la falsa:";
 choices[3]= new Array();
 choices[3][0] = "Acceso";
 choices[3][1] = "Certificaci&oacute;n";
 choices[3][2] = "Rectificaci&oacute;n";
 choices[3][3] = "Cancelaci&oacute;n";
 answers[3] = 1;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2336. ";
 preguntaids[3] = 2336


//  Id pregunta: 2345 Año de creación de pregunta: 2004
 questions[4]= "5)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute; funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[4]= new Array();
 choices[4][0] = "Programador de aplicaciones";
 choices[4][1] = "Usuario final";
 choices[4][2] = "Administrador de base de datos";
 choices[4][3] = "Aseguramiento de la calidad";
 answers[4] = 0;
 units[4] = ['36'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2345. ";
 preguntaids[4] = 2345


//  Id pregunta: 2308 Año de creación de pregunta: 2002
 questions[5]= "6)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Funcional";
 choices[5][1] = "Proyecto-staff";
 choices[5][2] = "Proyecto-funcional";
 choices[5][3] = "Por aplicaciones";
 answers[5] = 3;
 units[5] = ['30'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2308. ";
 preguntaids[5] = 2308


//  Id pregunta: 2359 Año de creación de pregunta: 2004
 questions[6]= "7)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[6]= new Array();
 choices[6][0] = "Holgura condicionada";
 choices[6][1] = "Holgura independiente";
 choices[6][2] = "Holgura libre";
 choices[6][3] = "Holgura total";
 answers[6] = 0;
 units[6] = ['31'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2359. Holgura total: last(p)-early(m)-Dmp; Holgura libre: early(p)-early(m)-Dmp; Holgura independiente: early(p)-last(m)-Dmp; Holgura condicionada: early(p)- early(m)- Dmp";
 preguntaids[6] = 2359


//  Id pregunta: 2358 Año de creación de pregunta: 2004
 questions[7]= "8)  La propiedad de un proyecto y de los aplicativos resultantes del ciclo de vida del software corresponde a:";
 choices[7]= new Array();
 choices[7][0] = "Departamento de Inform&aacute;tica";
 choices[7][1] = "Direcci&oacute;n del Departamento usuario";
 choices[7][2] = "Comit&eacute; de Direcci&oacute;n del Proyecto";
 choices[7][3] = "Compartido por todos";
 answers[7] = 1;
 units[7] = ['30'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2358. ";
 preguntaids[7] = 2358


//  Id pregunta: 2362 Año de creación de pregunta: 2003
 questions[8]= "9)  WAI se refiere a:";
 choices[8]= new Array();
 choices[8][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[8][1] = "Interfaces para redes de &aacute;rea local.";
 choices[8][2] = "Interfaces para redes metropolitanas.";
 choices[8][3] = "Interfaces de acceso Wi-Fi.";
 answers[8] = 0;
 units[8] = ['42'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2362. ";
 preguntaids[8] = 2362


//  Id pregunta: 2312 Año de creación de pregunta: 2002
 questions[9]= "10)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[9]= new Array();
 choices[9][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[9][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[9][2] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 choices[9][3] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 answers[9] = 3;
 units[9] = ['31'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2312. ";
 preguntaids[9] = 2312


//  Id pregunta: 2327 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[10]= new Array();
 choices[10][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[10][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[10][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[10][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[10] = 3;
 units[10] = ['39'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2327. ";
 preguntaids[10] = 2327


//  Id pregunta: 2356 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;En qu&eacute; fase del ciclo de vida se decide entre desarrollar o adquirir una aplicaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "An&aacute;lisis";
 choices[11][1] = "Dise&ntilde;o";
 choices[11][2] = "Estudio de viabilidad";
 choices[11][3] = "Programaci&oacute;n";
 answers[11] = 2;
 units[11] = ['39'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2356. ";
 preguntaids[11] = 2356


//  Id pregunta: 2330 Año de creación de pregunta: 2003
 questions[12]= "13)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos Personales (LOPD), cu&aacute;l de los siguientes datos es un dato especialmente protegido";
 choices[12]= new Array();
 choices[12][0] = "Sexo";
 choices[12][1] = "Nombre";
 choices[12][2] = "Raza";
 choices[12][3] = "Direcci&oacute;n";
 answers[12] = 2;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2330. ";
 preguntaids[12] = 2330


//  Id pregunta: 2301 Año de creación de pregunta: 2002
 questions[13]= "14)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[13]= new Array();
 choices[13][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[13][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[13][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[13][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[13] = 2;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2301. ";
 preguntaids[13] = 2301


//  Id pregunta: 2322 Año de creación de pregunta: 2002
 questions[14]= "15)  Un plan de contingencia corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "Evitar el riesgo de da&ntilde;os";
 choices[14][1] = "Minimizar los da&ntilde;os producidos";
 choices[14][2] = "Planificar las situaciones de emergencia";
 choices[14][3] = "Establecer medidas de recuperaci&oacute;n";
 answers[14] = 1;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2322. ";
 preguntaids[14] = 2322


//  Id pregunta: 2366 Año de creación de pregunta: 2004
 questions[15]= "16)  A la hora de gestionar y resolver una incidencia en un CAU, se establecen los siguientes niveles de gesti&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Tres niveles: nivel 1 (el propio CAU), nivel 2 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 3 (los proveedores externos y/o empresas de mantenimiento)";
 choices[15][1] = "Cuatro niveles: nivel 1 (las herramientas de diagn&oacute;stico y recuperaci&oacute;n del sistema o aplicaci&oacute;n), nivel 2 (el propio CAU), nivel 3 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 4 (los proveedores externos y/o empresas de mantenimiento)";
 choices[15][2] = "a y b son correctas";
 choices[15][3] = "a y b son incorrectas";
 answers[15] = 0;
 units[15] = ['30'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2366. ";
 preguntaids[15] = 2366


//  Id pregunta: 2350 Año de creación de pregunta: 2004
 questions[16]= "17)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[16]= new Array();
 choices[16][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[16][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[16][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[16][3] = "Todas";
 answers[16] = 3;
 units[16] = ['36'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2350. ";
 preguntaids[16] = 2350


//  Id pregunta: 2332 Año de creación de pregunta: 2003
 questions[17]= "18)  El nivel EAL4 de Criterios Comunes significa";
 choices[17]= new Array();
 choices[17][0] = "Dise&ntilde;ado, probado y revisado met&oacute;dicamente";
 choices[17][1] = "Estructuralmente probado";
 choices[17][2] = "Probado y verificado met&oacute;dicamente";
 choices[17][3] = "Dise&ntilde;o verificado y probado formalmente";
 answers[17] = 0;
 units[17] = ['36'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2332. EAL1 (funcionalidad probada); EAL2 (estructuralmente probado); EAL3 (probado y verificado met&oacute;dicamente); EAL4 (dise&ntilde;ado, probado y revisado met&oacute;dicamente); EAL5 (dise&ntilde;ado y probado semiformalmente); EAL6 (dise&ntilde;o verificado y probado semiformalmente); EAL7 (dise&ntilde;o verificado y probado formalmente)";
 preguntaids[17] = 2332


//  Id pregunta: 2342 Año de creación de pregunta: 2003
 questions[18]= "19)  SSD-AAPP es una herramienta para";
 choices[18]= new Array();
 choices[18][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[18][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[18][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[18][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[18] = 3;
 units[18] = ['38'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2342. ";
 preguntaids[18] = 2342


//  Id pregunta: 2343 Año de creación de pregunta: 2004
 questions[19]= "20)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[19]= new Array();
 choices[19][0] = "Un riesgo";
 choices[19][1] = "Un impacto";
 choices[19][2] = "Ninguna de las anteriores";
 choices[19][3] = "a ) y b)";
 answers[19] = 3;
 units[19] = ['36'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2343. ";
 preguntaids[19] = 2343


//  Id pregunta: 2295 Año de creación de pregunta: 2002
 questions[20]= "21)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[20]= new Array();
 choices[20][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[20][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[20][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[20][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[20] = 0;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2295. ";
 preguntaids[20] = 2295


//  Id pregunta: 2309 Año de creación de pregunta: 2002
 questions[21]= "22)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[21]= new Array();
 choices[21][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[21][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[21][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[21][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[21] = 2;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2309. ";
 preguntaids[21] = 2309


//  Id pregunta: 2325 Año de creación de pregunta: 2002
 questions[22]= "23)  La serie V de estandarizaci&oacute;n de la ITU-T trata sobre:";
 choices[22]= new Array();
 choices[22][0] = "Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[22][1] = "Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[22][2] = "Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[22][3] = "Red digital de servicios integrados";
 answers[22] = 2;
 units[22] = ['48'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2325. A: SERIE X; B: SERIE G; D: SERIE I";
 preguntaids[22] = 2325


//  Id pregunta: 2333 Año de creación de pregunta: 2003
 questions[23]= "24)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[23]= new Array();
 choices[23][0] = "Riesgo";
 choices[23][1] = "Impacto";
 choices[23][2] = "Amenaza";
 choices[23][3] = "Vulnerabilidad";
 answers[23] = 2;
 units[23] = ['36'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2333. ";
 preguntaids[23] = 2333


//  Id pregunta: 2294 Año de creación de pregunta: 2002
 questions[24]= "25)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, los datos que hagan referencia al origen racial, a la salud y a la vida sexual:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley";
 choices[24][1] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando el afectado consienta expresamente";
 choices[24][2] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 choices[24][3] = "No podr&aacute;n ser objeto de tratamiento. Se except&uacute;an los ficheros mantenidos por los partidos pol&iacute;ticos, sindicatos o iglesias.";
 answers[24] = 2;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2294. ";
 preguntaids[24] = 2294


//  Id pregunta: 2315 Año de creación de pregunta: 2002
 questions[25]= "26)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[25]= new Array();
 choices[25][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[25][1] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[25][2] = "Proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[25][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[25] = 3;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2315. ";
 preguntaids[25] = 2315


//  Id pregunta: 2321 Año de creación de pregunta: 2002
 questions[26]= "27)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[26]= new Array();
 choices[26][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[26][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[26][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[26][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[26] = 0;
 units[26] = ['43'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2321. ";
 preguntaids[26] = 2321


//  Id pregunta: 2340 Año de creación de pregunta: 2003
 questions[27]= "28)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "en setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[27][1] = "en sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n";
 choices[27][2] = "en 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[27][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[27] = 0;
 units[27] = ['41'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2340. ";
 preguntaids[27] = 2340


//  Id pregunta: 2337 Año de creación de pregunta: 2003
 questions[28]= "29)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo interesa a directivos";
 choices[28][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[28][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[28][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[28] = 3;
 units[28] = ['36'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2337. ";
 preguntaids[28] = 2337


//  Id pregunta: 2298 Año de creación de pregunta: 2009
 questions[29]= "30)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[29]= new Array();
 choices[29][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[29][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[29][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[29][3] = "Todas las respuestas anteriores son correctas";
 answers[29] = 3;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2298. ";
 preguntaids[29] = 2298


//  Id pregunta: 2324 Año de creación de pregunta: 2002
 questions[30]= "31)  La ITU-T realiza series de recomendaciones sobre diversos temas. La serie que trata sistemas y medios de transmisi&oacute;n, sistemas y redes digitales:";
 choices[30]= new Array();
 choices[30][0] = "Serie V de la ITU-T";
 choices[30][1] = "Serie G de la ITU-T";
 choices[30][2] = "Serie D de la ITU-T";
 choices[30][3] = "Serie M de la ITU-T";
 answers[30] = 1;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2324. ";
 preguntaids[30] = 2324


//  Id pregunta: 2313 Año de creación de pregunta: 2002
 questions[31]= "32)  Un activo es, de acuerdo a MAGERIT:";
 choices[31]= new Array();
 choices[31][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[31][1] = "Resultado de una agresi&oacute;n";
 choices[31][2] = "Evento que desencadena un incidente";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = 3;
 units[31] = ['36'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2313. ";
 preguntaids[31] = 2313


//  Id pregunta: 2365 Año de creación de pregunta: 2004
 questions[32]= "33)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[32]= new Array();
 choices[32][0] = "Apuntado, plano, basado en la l&iacute;nea.";
 choices[32][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[32][2] = "Apuntado, plano, jer&aacute;rquico y formal";
 choices[32][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[32] = 1;
 units[32] = ['30'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2365. ";
 preguntaids[32] = 2365


//  Id pregunta: 2338 Año de creación de pregunta: 2003
 questions[33]= "34)  Se except&uacute;an los derechos de informaci&oacute;n previa, de modo expreso, preciso e inequ&iacute;voco (SE&Ntilde;ALE LA FALSA):";
 choices[33]= new Array();
 choices[33][0] = "Cuando afecte a la defensa nacional";
 choices[33][1] = "A la seguridad p&uacute;blica";
 choices[33][2] = "A la persecuci&oacute;n de infracciones penales o administrativas";
 choices[33][3] = "Cuando no impida ni dificulte el cumplimiento de las funciones de control y verificaci&oacute;n de las Administraciones P&uacute;blicas";
 answers[33] = 3;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2338. ";
 preguntaids[33] = 2338


//  Id pregunta: 2307 Año de creación de pregunta: 2002
 questions[34]= "35)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;: ( Nota ActividadX(tpo_optimista, tpo_m&aacute;sProbable, tpo_pesimista))";
 choices[34]= new Array();
 choices[34][0] = "9";
 choices[34][1] = "5";
 choices[34][2] = "7";
 choices[34][3] = "4";
 answers[34] = 2;
 units[34] = ['31'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2307. DESVIACI&Oacute;N=(tpo_pesimista - tpo_optimista)/6";
 preguntaids[34] = 2307


//  Id pregunta: 2319 Año de creación de pregunta: 2002
 questions[35]= "36)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[35]= new Array();
 choices[35][0] = "12";
 choices[35][1] = "11";
 choices[35][2] = "10";
 choices[35][3] = "9";
 answers[35] = 2;
 units[35] = ['31'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2319. ";
 preguntaids[35] = 2319


//  Id pregunta: 2331 Año de creación de pregunta: 2003
 questions[36]= "37)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[36]= new Array();
 choices[36][0] = "Nada, se ejercen gratuitamente";
 choices[36][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[36][2] = "Se necesita un notario";
 choices[36][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[36] = 0;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2331. ";
 preguntaids[36] = 2331


//  Id pregunta: 2367 Año de creación de pregunta: 2004
 questions[37]= "38)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[37]= new Array();
 choices[37][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[37][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[37][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[37][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[37] = 2;
 units[37] = ['35'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2367. ";
 preguntaids[37] = 2367


//  Id pregunta: 2305 Año de creación de pregunta: 2002
 questions[38]= "39)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[38]= new Array();
 choices[38][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[38][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[38][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[38][3] = "Ninguna es correcta";
 answers[38] = 3;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2305. ";
 preguntaids[38] = 2305


//  Id pregunta: 2306 Año de creación de pregunta: 2002
 questions[39]= "40)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(2,4,6); B( 6,15,30); y C (4,7,16); la duraci&oacute;n prevista del proyecto ser&aacute;:( Nota ActividadX(tpo_optimista, tpo_m&aacute;sProbable, tpo_pesimista))";
 choices[39]= new Array();
 choices[39][0] = "26";
 choices[39][1] = "31";
 choices[39][2] = "28";
 choices[39][3] = "25";
 answers[39] = 2;
 units[39] = ['31'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2306. DURACI&Oacute;N= (tpo_optimista + tpo_pesimista + 4*tpo_probable)/6";
 preguntaids[39] = 2306


//  Id pregunta: 2368 Año de creación de pregunta: 2004
 questions[40]= "41)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se rige, entro otros, por:";
 choices[40]= new Array();
 choices[40][0] = "El T&iacute;tulo VI de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[40][1] = "El T&iacute;tulo V de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[40][2] = "El T&iacute;tulo V de la LOPD y el RD 994/1999 por el que se aprueba su Estatuto.";
 choices[40][3] = "La Disposici&oacute;n Adicional Tercera de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 answers[40] = 0;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2368. ";
 preguntaids[40] = 2368


//  Id pregunta: 2341 Año de creación de pregunta: 2003
 questions[41]= "42)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;toda debilidad que puede ser aprovechada por una amenaza, o m&aacute;s  detalladamente a las debilidades de los activos o de sus medidas de protecci&oacute;n que facilitan el  &eacute;xito de una amenaza potencial&quot;:";
 choices[41]= new Array();
 choices[41][0] = "Salvaguarda";
 choices[41][1] = "Riesgo";
 choices[41][2] = "Impacto";
 choices[41][3] = "Vulnerabilidad";
 answers[41] = 3;
 units[41] = ['36'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2341. ";
 preguntaids[41] = 2341


//  Id pregunta: 2334 Año de creación de pregunta: 2003
 questions[42]= "43)  En la planificaci&oacute;n de un Proyecto lo cierto es";
 choices[42]= new Array();
 choices[42][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[42][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[42][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[42][3] = "El gr&aacute;fico de Gantt se basa en la representaci&oacute;n de restricciones";
 answers[42] = 1;
 units[42] = ['31'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2334. ";
 preguntaids[42] = 2334


//  Id pregunta: 2292 Año de creación de pregunta: 2009
 questions[43]= "44)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[43]= new Array();
 choices[43][0] = "Con consentimiento expreso del afectado";
 choices[43][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[43][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[43][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[43] = 1;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2292. ";
 preguntaids[43] = 2292


//  Id pregunta: 2302 Año de creación de pregunta: 2002
 questions[44]= "45)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[44]= new Array();
 choices[44][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[44][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[44][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[44][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[44] = 1;
 units[44] = ['40'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2302. ";
 preguntaids[44] = 2302


//  Id pregunta: 2348 Año de creación de pregunta: 2004
 questions[45]= "46)  La propiedad de los datos recae normalmente en:";
 choices[45]= new Array();
 choices[45][0] = "Administrador de base de datos";
 choices[45][1] = "Analista de sistemas";
 choices[45][2] = "Operador";
 choices[45][3] = "Usuario final";
 answers[45] = 3;
 units[45] = ['36'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2348. ";
 preguntaids[45] = 2348


//  Id pregunta: 2353 Año de creación de pregunta: 2003
 questions[46]= "47)  Los diagramas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[46]= new Array();
 choices[46][0] = "Gesti&oacute;n de proyectos";
 choices[46][1] = "Programaci&oacute;n orientada a objetos";
 choices[46][2] = "An&aacute;lisis diferencial de aplicaciones";
 choices[46][3] = "Programaci&oacute;n estructurada";
 answers[46] = 0;
 units[46] = ['31'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2353. ";
 preguntaids[46] = 2353


//  Id pregunta: 2347 Año de creación de pregunta: 2004
 questions[47]= "48)  La implantaci&oacute;n de un sistema de single sign-on (SSO) implica que el riesgo de un acceso no autorizado:";
 choices[47]= new Array();
 choices[47][0] = "Tendr&aacute; un mayor impacto";
 choices[47][1] = "Tendr&aacute; un menor impacto";
 choices[47][2] = "Tendr&aacute; una probabilidad mayor";
 choices[47][3] = "Tendr&aacute; una probabilidad menor";
 answers[47] = 0;
 units[47] = ['36'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2347. ";
 preguntaids[47] = 2347


//  Id pregunta: 2361 Año de creación de pregunta: 2004
 questions[48]= "49)  Respecto a las pautas de accesibilidad de la iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[48]= new Array();
 choices[48][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[48][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[48][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[48][3] = "Todas las anteriores afirmaciones son falsas";
 answers[48] = 1;
 units[48] = ['42'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2361. ";
 preguntaids[48] = 2361


//  Id pregunta: 2323 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;D&oacute;nde ubicar&iacute;a al Centro de Control y Gesti&oacute;n de Red (Network Management System)?:";
 choices[49]= new Array();
 choices[49][0] = "Dentro del staff del director de sistemas de informaci&oacute;n";
 choices[49][1] = "Dentro del departamento de an&aacute;lisis y programaci&oacute;n";
 choices[49][2] = "En el departamento de explotaci&oacute;n";
 choices[49][3] = "En el departamento de planificaci&oacute;n";
 answers[49] = 2;
 units[49] = ['30'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2323. ";
 preguntaids[49] = 2323


//  Id pregunta: 2364 Año de creación de pregunta: 2004
 questions[50]= "51)  En referencia a los niveles permitidos para el grupo A, indique la respuesta FALSA:";
 choices[50]= new Array();
 choices[50][0] = "El grupo A abarca el rango de niveles del 20 al 30";
 choices[50][1] = "El grupo A abarca el rango de niveles del 26 al 30";
 choices[50][2] = "El nivel 30 corresponde a Subdirectores Generales y asimilados";
 choices[50][3] = "El nivel 26 corresponde a Jefes de Servicio y asimilados";
 answers[50] = 1;
 units[50] = ['28'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2364. A2: 18-26; A1: 26-30";
 preguntaids[50] = 2364


//  Id pregunta: 2328 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[51]= new Array();
 choices[51][0] = "Siete";
 choices[51][1] = "Son los mismos que los de ITSEC";
 choices[51][2] = "Cinco";
 choices[51][3] = "Seis";
 answers[51] = 0;
 units[51] = ['36'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2328. EAL 1-7";
 preguntaids[51] = 2328


//  Id pregunta: 2339 Año de creación de pregunta: 2003
 questions[52]= "53)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[52]= new Array();
 choices[52][0] = "Los derechos de explotaci&oacute;n";
 choices[52][1] = "Los programas de ordenador";
 choices[52][2] = "La documentaci&oacute;n";
 choices[52][3] = "Las ideas que subyacen en los programas de ordenador";
 answers[52] = 3;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2339. ";
 preguntaids[52] = 2339


//  Id pregunta: 2357 Año de creación de pregunta: 2004
 questions[53]= "54)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[53]= new Array();
 choices[53][0] = "Departamento de Inform&aacute;tica";
 choices[53][1] = "Comit&eacute; de Seguridad";
 choices[53][2] = "Administrador de seguridad";
 choices[53][3] = "Alta Direcci&oacute;n";
 answers[53] = 3;
 units[53] = ['30'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2357. ";
 preguntaids[53] = 2357


//  Id pregunta: 2369 Año de creación de pregunta: 2004
 questions[54]= "55)  El presupuesto de un proyecto inform&aacute;tico nunca se calcula en base a:";
 choices[54]= new Array();
 choices[54][0] = "Aproximaciones lineales de proyectos diferentes";
 choices[54][1] = "Proyectos similares previos abordados por la organizaci&oacute;n";
 choices[54][2] = "Consultas a empresas significativas del mercado";
 choices[54][3] = "Costes separados de inversi&oacute;n en m&aacute;quinas, licencias de software y meses/hombre";
 answers[54] = 0;
 units[54] = ['31'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2369. MAP-B 2003";
 preguntaids[54] = 2369


//  Id pregunta: 2360 Año de creación de pregunta: 2004
 questions[55]= "56)  Respecto a las t&eacute;cnicas de selecci&oacute;n de proyectos alternativos ...";
 choices[55]= new Array();
 choices[55][0] = "3 t&eacute;cnicas usadas de evaluaci&oacute;n de inversiones son las del Pay-back, VAN y TIR";
 choices[55][1] = "El Valor Actual Neto (VAN) compara el desembolso inicial con el valor de los flujos netos de caja originados";
 choices[55][2] = "El pay-back es el periodo de tiempo que tarda en recuperarse el desembolso inicial con los flujos de caja";
 choices[55][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[55] = 3;
 units[55] = ['40'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2360. ";
 preguntaids[55] = 2360


//  Id pregunta: 2326 Año de creación de pregunta: 2002
 questions[56]= "57)  Una de las siguientes organizaciones de estandarizaci&oacute;n no ha desarrollado el est&aacute;ndar mencionado. &iquest;Cu&aacute;l es?:";
 choices[56]= new Array();
 choices[56][0] = "ANSI - FDDI";
 choices[56][1] = "IEEE- TCP/IP";
 choices[56][2] = "ITU-T - X.25";
 choices[56][3] = "EIA - RS-232";
 answers[56] = 1;
 units[56] = ['48'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2326. IETF- TCP/IP";
 preguntaids[56] = 2326


//  Id pregunta: 2310 Año de creación de pregunta: 2002
 questions[57]= "58)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[57]= new Array();
 choices[57][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[57][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[57][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[57][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[57] = 2;
 units[57] = ['31'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2310. ";
 preguntaids[57] = 2310


//  Id pregunta: 2296 Año de creación de pregunta: 2002
 questions[58]= "59)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[58]= new Array();
 choices[58][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[58][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[58][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[58][3] = "ninguna de las anteriores respuestas es correcta";
 answers[58] = 2;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2296. ";
 preguntaids[58] = 2296


//  Id pregunta: 2346 Año de creación de pregunta: 2003
 questions[59]= "60)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[59]= new Array();
 choices[59][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado";
 choices[59][1] = "La identificaci&oacute;n de los soportes se deber&aacute; realizar utilizando sistemas de etiquetado comprensibles y con significado que permitan a los usuarios con acceso autorizado a los citados soportes y documentos identificar su contenido, y que dificulten la identificaci&oacute;n para el resto de personas.";
 choices[59][2] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[59][3] = "Deber&aacute;n establecerse procedimientos de actuaci&oacute;n para la realizaci&oacute;n como m&iacute;nimo semanal de copias de respaldo, salvo que en dicho per&iacute;odo no se hubiera producido ninguna actualizaci&oacute;n de los datos.";
 answers[59] = 2;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2346. ";
 preguntaids[59] = 2346


//  Id pregunta: 2320 Año de creación de pregunta: 2002
 questions[60]= "61)  La capacidad de un sistema es:";
 choices[60]= new Array();
 choices[60][0] = "La cantidad de trabajo &uacute;til por unidad de tiempo";
 choices[60][1] = "La cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinado";
 choices[60][2] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo";
 choices[60][3] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 answers[60] = 3;
 units[60] = ['40'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2320. ";
 preguntaids[60] = 2320


//  Id pregunta: 2299 Año de creación de pregunta: 2002
 questions[61]= "62)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[61]= new Array();
 choices[61][0] = "Las copias en formato electr&oacute;nico de las fuentes de acceso p&uacute;blico que se obtengan telem&aacute;ticamente, tendr&aacute;n validez indefinida";
 choices[61][1] = "En las fuentes accesibles al p&uacute;blico editadas en forma de libro o alg&uacute;n otro soporte f&iacute;sico, tal condici&oacute;n se perder&aacute; cuando se publique en formato electr&oacute;nico";
 choices[61][2] = "La ley 15/99 no regula las fuentes de acceso p&uacute;blico";
 choices[61][3] = "Los datos que figuren en las gu&iacute;as de servicios de telecomunicaciones disponibles al p&uacute;blico se regir&aacute;n por su normativa espec&iacute;fica";
 answers[61] = 3;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2299. ";
 preguntaids[61] = 2299


//  Id pregunta: 2303 Año de creación de pregunta: 2002
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[62]= new Array();
 choices[62][0] = "Aprobar la Memoria trimestral de la Agencia.";
 choices[62][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[62][2] = "Iniciar, impulsar la instrucci&oacute;n y resolver los expedientes sancionadores referentes a los responsables de los ficheros privados.";
 choices[62][3] = "Adoptar las medidas cautelares y provisionales que requiera el ejercicio de la potestad sancionadora de la Agencia con relaci&oacute;n a los responsables de los ficheros privados.";
 answers[62] = 0;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2303. Real Decreto 428/1993: La memoria es anual";
 preguntaids[62] = 2303


//  Id pregunta: 2363 Año de creación de pregunta: 2004
 questions[63]= "64)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[63]= new Array();
 choices[63][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[63][1] = "Si, pero no como copia leg&iacute;tima";
 choices[63][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[63][3] = "No";
 answers[63] = 0;
 units[63] = ['41'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2363. LPI de 1996; articulo 31";
 preguntaids[63] = 2363


//  Id pregunta: 2344 Año de creación de pregunta: 2004
 questions[64]= "65)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[64]= new Array();
 choices[64][0] = "Dise&ntilde;o";
 choices[64][1] = "An&aacute;lisis";
 choices[64][2] = "Construcci&oacute;n";
 choices[64][3] = "Pruebas de aceptaci&oacute;n";
 answers[64] = 1;
 units[64] = ['36'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2344. ";
 preguntaids[64] = 2344


//  Id pregunta: 2311 Año de creación de pregunta: 2002
 questions[65]= "66)  No son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[65]= new Array();
 choices[65][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[65][1] = "El censo promocional";
 choices[65][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[65][3] = "Revistas cient&iacute;ficas y de difusi&oacute;n";
 answers[65] = 3;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2311. ";
 preguntaids[65] = 2311


//  Id pregunta: 2300 Año de creación de pregunta: 2002
 questions[66]= "67)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[66]= new Array();
 choices[66][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[66][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[66][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[66][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[66] = 1;
 units[66] = ['31'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2300. ";
 preguntaids[66] = 2300


//  Id pregunta: 2318 Año de creación de pregunta: 2002
 questions[67]= "68)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[67]= new Array();
 choices[67][0] = "Elton Mayo";
 choices[67][1] = "Peter Drucker";
 choices[67][2] = "Lynda Applegate";
 choices[67][3] = "Pigrogine";
 answers[67] = 1;
 units[67] = ['25'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2318. ";
 preguntaids[67] = 2318


//  Id pregunta: 2349 Año de creación de pregunta: 2004
 questions[68]= "69)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[68]= new Array();
 choices[68][0] = "Etiquetado de soportes en cinta";
 choices[68][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[68][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[68][3] = "Todas";
 answers[68] = 1;
 units[68] = ['36'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2349. ";
 preguntaids[68] = 2349


//  Id pregunta: 2351 Año de creación de pregunta: 2004
 questions[69]= "70)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[69]= new Array();
 choices[69][0] = "Hot site";
 choices[69][1] = "Warm site";
 choices[69][2] = "Instant site";
 choices[69][3] = "Cold site";
 answers[69] = 0;
 units[69] = ['36'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2351. ";
 preguntaids[69] = 2351


//  Id pregunta: 2314 Año de creación de pregunta: 2002
 questions[70]= "71)  Un ejemplo de infracci&oacute;n grave es:";
 choices[70]= new Array();
 choices[70][0] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos sean recabados del propio interesado.";
 choices[70][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[70][2] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[70][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un requerimiento previo del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[70] = 1;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2314. A: Leve; C y D: Muy graves";
 preguntaids[70] = 2314


//  Id pregunta: 2335 Año de creación de pregunta: 2003
 questions[71]= "72)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[71]= new Array();
 choices[71][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[71][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[71][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[71][3] = "Cuando lo autorice un juez";
 answers[71] = 2;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2335. ";
 preguntaids[71] = 2335


//  Id pregunta: 2355 Año de creación de pregunta: 2004
 questions[72]= "73)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[72]= new Array();
 choices[72][0] = "riesgo";
 choices[72][1] = "coste";
 choices[72][2] = "impacto";
 choices[72][3] = "tiempo";
 answers[72] = 3;
 units[72] = ['31'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2355. ";
 preguntaids[72] = 2355


//  Id pregunta: 2304 Año de creación de pregunta: 2002
 questions[73]= "74)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes. La Agencia de Protecci&oacute;n de Datos es:";
 choices[73]= new Array();
 choices[73][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[73][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[73][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[73][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[73] = 1;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2304. ";
 preguntaids[73] = 2304


//  Id pregunta: 2316 Año de creación de pregunta: 2002
 questions[74]= "75)  Una amenaza es, de acuerdo a MAGERIT:";
 choices[74]= new Array();
 choices[74][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[74][1] = "Resultado de una agresi&oacute;n";
 choices[74][2] = "Evento que puede desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales";
 choices[74][3] = "Posibilidad de ocurrencia de un incidente";
 answers[74] = 2;
 units[74] = ['36'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2316. ";
 preguntaids[74] = 2316


