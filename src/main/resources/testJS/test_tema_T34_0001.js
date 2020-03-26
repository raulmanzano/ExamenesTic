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
//  Id pregunta: 953 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[0]= new Array();
 choices[0][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[0][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[0][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[0][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[0] = 1;
 units[0] = ['34', '84'];
 blocks[0] = ['B1', 'B3'];
 comments[0] = "Id Pregunta: 953. Metodologias &aacute;giles";
 preguntaids[0] = 953


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[1]= new Array();
 choices[1][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[1][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[1][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[1][3] = "El software funcionando es la medida principal del progreso.";
 answers[1] = 2;
 units[1] = ['34'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 552. AGE A1 2015";
 preguntaids[1] = 552


//  Id pregunta: 10253 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[2]= new Array();
 choices[2][0] = "ScrumMaster";
 choices[2][1] = "Product Owner";
 choices[2][2] = "ScrumTeam";
 choices[2][3] = "Stakeholders";
 answers[2] = 3;
 units[2] = ['34'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 10253. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'. Resumiendo la f&aacute;bula, el cerdo pone m&aacute;s &quot;carne&quot; en el asador, mientras q la gallina s&oacute;lo rompe los huevos para hacer un desayuno.";
 preguntaids[2] = 10253


//  Id pregunta: 951 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[3]= new Array();
 choices[3][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[3][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[3][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[3][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[3] = 3;
 units[3] = ['34', '84'];
 blocks[3] = ['B1', 'B3'];
 comments[3] = "Id Pregunta: 951. Metodologias &aacute;giles";
 preguntaids[3] = 951


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[4]= new Array();
 choices[4][0] = "Flexibilidad para variar el servicio o producto";
 choices[4][1] = "Eliminar desperdicios";
 choices[4][2] = "Decidir lo m&aacute;s tarde posible";
 choices[4][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[4] = 0;
 units[4] = ['34'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 556. Metodologias Lean";
 preguntaids[4] = 556


//  Id pregunta: 957 Año de creación de pregunta: 2016
 questions[5]= "6)  Indica la respuesta correcta";
 choices[5]= new Array();
 choices[5][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[5][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[5][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[5][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[5] = 0;
 units[5] = ['34', '84'];
 blocks[5] = ['B1', 'B3'];
 comments[5] = "Id Pregunta: 957. Metodologias &aacute;giles";
 preguntaids[5] = 957


//  Id pregunta: 10252 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[6]= new Array();
 choices[6][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[6][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[6][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[6][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[6] = 1;
 units[6] = ['34'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10252. Cada sprint suele durar de 15 a 30 d&iacute;as";
 preguntaids[6] = 10252


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[7]= new Array();
 choices[7][0] = "Lean startup";
 choices[7][1] = "Business Model Canvas";
 choices[7][2] = "Dynamic system Development method";
 choices[7][3] = "Lean software development";
 answers[7] = 2;
 units[7] = ['34'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 557. Metodologias Lean";
 preguntaids[7] = 557


//  Id pregunta: 952 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[8]= new Array();
 choices[8][0] = "Se dejan listos los entornos de desarrollo";
 choices[8][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[8][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[8][3] = "Todas las anteriores son correctas";
 answers[8] = 3;
 units[8] = ['34', '84'];
 blocks[8] = ['B1', 'B3'];
 comments[8] = "Id Pregunta: 952. Metodologias &aacute;giles";
 preguntaids[8] = 952


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[9]= new Array();
 choices[9][0] = "Maximizar el valor para los clientes";
 choices[9][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[9][2] = "Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[9][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[9] = 3;
 units[9] = ['34'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 553. Metodologias Lean";
 preguntaids[9] = 553


//  Id pregunta: 954 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[10]= new Array();
 choices[10][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[10][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[10][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[10][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[10] = 0;
 units[10] = ['34', '84'];
 blocks[10] = ['B1', 'B3'];
 comments[10] = "Id Pregunta: 954. Metodologias &aacute;giles";
 preguntaids[10] = 954


//  Id pregunta: 10254 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[11]= new Array();
 choices[11][0] = "Product Manager";
 choices[11][1] = "Chief architect";
 choices[11][2] = "Chief programmer";
 choices[11][3] = "System administrator";
 answers[11] = 1;
 units[11] = ['34'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 10254. ";
 preguntaids[11] = 10254


//  Id pregunta: 959 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[12]= new Array();
 choices[12][0] = "Se definen iteraciones";
 choices[12][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[12][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[12][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[12] = 1;
 units[12] = ['34', '84'];
 blocks[12] = ['B1', 'B3'];
 comments[12] = "Id Pregunta: 959. Metodologias &aacute;giles";
 preguntaids[12] = 959


//  Id pregunta: 956 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[13]= new Array();
 choices[13][0] = "Backlog refinement";
 choices[13][1] = "Backlog grooming";
 choices[13][2] = "a y b son correctas";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = 2;
 units[13] = ['34', '84'];
 blocks[13] = ['B1', 'B3'];
 comments[13] = "Id Pregunta: 956. Metodologias &aacute;giles";
 preguntaids[13] = 956


//  Id pregunta: 950 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[14]= new Array();
 choices[14][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[14][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[14][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 1;
 units[14] = ['34', '84'];
 blocks[14] = ['B1', 'B3'];
 comments[14] = "Id Pregunta: 950. Metodologias &aacute;giles";
 preguntaids[14] = 950


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[15]= new Array();
 choices[15][0] = "Eric Ries";
 choices[15][1] = "Steve Blank";
 choices[15][2] = "Tom Poppendieck";
 choices[15][3] = "Alexander Osterwalder";
 answers[15] = 2;
 units[15] = ['34'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 555. Metodologias Lean";
 preguntaids[15] = 555


//  Id pregunta: 958 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[16]= new Array();
 choices[16][0] = "Burn-up chart";
 choices[16][1] = "Arquitectural Skype";
 choices[16][2] = "Burn-down chart";
 choices[16][3] = "Definition of done";
 answers[16] = 1;
 units[16] = ['34', '84'];
 blocks[16] = ['B1', 'B3'];
 comments[16] = "Id Pregunta: 958. Metodologias &aacute;giles";
 preguntaids[16] = 958


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[17]= new Array();
 choices[17][0] = "Ford";
 choices[17][1] = "Google";
 choices[17][2] = "Toyota";
 choices[17][3] = "Facebook";
 answers[17] = 2;
 units[17] = ['34'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 554. Metodologias Lean";
 preguntaids[17] = 554


//  Id pregunta: 10251 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes NO es una Metodolog&iacute;a &Aacute;gil?";
 choices[18]= new Array();
 choices[18][0] = "XP";
 choices[18][1] = "Kanban";
 choices[18][2] = "FDD";
 choices[18][3] = "Todas son metodolog&iacute;as &aacute;giles";
 answers[18] = 3;
 units[18] = ['34'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 10251. eXtream Programming, Feature Driven Development";
 preguntaids[18] = 10251


//  Id pregunta: 955 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[19]= new Array();
 choices[19][0] = "De 1 a  4";
 choices[19][1] = "De 3 a  7";
 choices[19][2] = "De 5 a  9";
 choices[19][3] = "De 7 a 11";
 answers[19] = 2;
 units[19] = ['34', '84'];
 blocks[19] = ['B1', 'B3'];
 comments[19] = "Id Pregunta: 955. Metodologias &aacute;giles";
 preguntaids[19] = 955


//  Id pregunta: 960 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[20]= new Array();
 choices[20][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[20][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[20][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[20][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[20] = 3;
 units[20] = ['34', '84'];
 blocks[20] = ['B1', 'B3'];
 comments[20] = "Id Pregunta: 960. Metodologias &aacute;giles";
 preguntaids[20] = 960


