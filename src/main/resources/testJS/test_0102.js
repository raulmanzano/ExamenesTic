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
//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[0]= "1)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n General del Estado";
 choices[0][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[0][2] = "las Entidades Locales";
 choices[0][3] = "todas son correctas";
 answers[0] = 3;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 234. Ley 39/2015";
 preguntaids[0] = 234


//  Id pregunta: 4943 Año de creación de pregunta: 2002
 questions[1]= "2)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[1]= new Array();
 choices[1][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[1][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[1][2] = "Enlace - Conector V.24, Conector V.35";
 choices[1][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[1] = 2;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4943. ";
 preguntaids[1] = 4943


//  Id pregunta: 3237 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[2]= new Array();
 choices[2][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[2][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[2][2] = "Es un medio de documentos para personas";
 choices[2][3] = "Todas las anteriores son definiciones correctas";
 answers[2] = 1;
 units[2] = ['68'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3237. ";
 preguntaids[2] = 3237


//  Id pregunta: 3253 Año de creación de pregunta: 2003
 questions[3]= "4)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[3]= new Array();
 choices[3][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[3][1] = "Para establecer reglas de integridad.";
 choices[3][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[3][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[3] = 1;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3253. ";
 preguntaids[3] = 3253


//  Id pregunta: 5315 Año de creación de pregunta: 2006
 questions[4]= "5)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[4]= new Array();
 choices[4][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[4][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[4][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[4][3] = "Multiplexado tradicional (MUX)";
 answers[4] = 2;
 units[4] = ['106'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5315. ";
 preguntaids[4] = 5315


//  Id pregunta: 10407 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[5]= new Array();
 choices[5][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[5][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[5][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[5][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[5] = 1;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 10407. ";
 preguntaids[5] = 10407


//  Id pregunta: 984 Año de creación de pregunta: 2016
 questions[6]= "7)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[6]= new Array();
 choices[6][0] = "los Subsecretarios y los Secretarios generales";
 choices[6][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[6][2] = "los Secretarios de Estado y los Directores generales";
 choices[6][3] = "los Ministros y los Secretarios de Estado";
 answers[6] = 3;
 units[6] = ['4', '7', '8', '9'];
 blocks[6] = ['A1', 'A2'];
 comments[6] = "Id Pregunta: 984. Ley 40/2015";
 preguntaids[6] = 984


//  Id pregunta: 7478 Año de creación de pregunta: 2010
 questions[7]= "8)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Reusabilidad";
 choices[7][1] = "Encapsulaci&oacute;n.";
 choices[7][2] = "Abstracci&oacute;n";
 choices[7][3] = "Persistencia";
 answers[7] = 3;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7478. Map 2005";
 preguntaids[7] = 7478


//  Id pregunta: 7162 Año de creación de pregunta: 2010
 questions[8]= "9)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[8]= new Array();
 choices[8][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las claves de las entidades que participan en la relaci&oacute;n.";
 choices[8][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[8][2] = "Dos tablas son suficientes para mantener toda la informaci&oacute;n.";
 choices[8][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[8] = 0;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7162. ";
 preguntaids[8] = 7162


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[9]= "10)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[9]= new Array();
 choices[9][0] = "El derecho a la propiedad privada.";
 choices[9][1] = "El derecho de asociaci&oacute;n.";
 choices[9][2] = "El derecho de fundaci&oacute;n.";
 choices[9][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[9] = 2


//  Id pregunta: 7425 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[10]= new Array();
 choices[10][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[10][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[10][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[10][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[10] = 0;
 units[10] = ['119'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7425. Examen TIC B 2009";
 preguntaids[10] = 7425


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[11]= new Array();
 choices[11][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[11][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[11][2] = "Nativos digitales.";
 choices[11][3] = "Inclusi&oacute;n digital.";
 answers[11] = 2;
 units[11] = ['16'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[11] = 7865


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[12]= "13)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[12]= new Array();
 choices[12][0] = "Al Gobierno.";
 choices[12][1] = "A las Cortes Generales.";
 choices[12][2] = "Al Poder Judicial.";
 choices[12][3] = "Al Congreso de los Diputados.";
 answers[12] = 0;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 22. Constituci&oacute;n de 1978";
 preguntaids[12] = 22


//  Id pregunta: 1515 Año de creación de pregunta: 2016
 questions[13]= "14)  En la criptograf&iacute;a de clave p&uacute;blica, si queremos garantizar la autenticidad y el no repudio en origen de un mensaje que enviamos a un tercero, &iquest;con qu&eacute; clave debemos cifrar nuestro mensaje?";
 choices[13]= new Array();
 choices[13][0] = "Con nuestra clave p&uacute;blica.";
 choices[13][1] = "Con nuestra clave privada.";
 choices[13][2] = "Con la clave p&uacute;blica del receptor.";
 choices[13][3] = "Con la clave privada del receptor.";
 answers[13] = 1;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1515. ";
 preguntaids[13] = 1515


//  Id pregunta: 9905 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[14]= new Array();
 choices[14][0] = "Fecha de inscripci&oacute;n.";
 choices[14][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[14][2] = "Lugar de inscripci&oacute;n.";
 choices[14][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[14] = 2;
 units[14] = ['7', '19'];
 blocks[14] = ['A2', 'A4'];
 comments[14] = "Id Pregunta: 9905. ";
 preguntaids[14] = 9905


//  Id pregunta: 4713 Año de creación de pregunta: 2002
 questions[15]= "16)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[15]= new Array();
 choices[15][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[15][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[15][2] = "control de flujo y errores";
 choices[15][3] = "todas las anteriores";
 answers[15] = 0;
 units[15] = ['105'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4713. ";
 preguntaids[15] = 4713


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[16]= new Array();
 choices[16][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[16][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[16][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[16][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[16] = 1;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 46. Constituci&oacute;n de 1978";
 preguntaids[16] = 46


//  Id pregunta: 9795 Año de creación de pregunta: 2015
 questions[17]= "18)  La Ley 56/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[17][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[17][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[17][3] = "Todas las anteriores.";
 answers[17] = 3;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 9795. ";
 preguntaids[17] = 9795


//  Id pregunta: 3976 Año de creación de pregunta: 2002
 questions[18]= "19)  Una caracter&iacute;stica de los sistemas en tiempo real es:";
 choices[18]= new Array();
 choices[18][0] = "Gesti&oacute;n de memoria virtual eficiente.";
 choices[18][1] = "Inexistencia de mecanismos de exclusi&oacute;n mutua que retrasen el flujo en &quot;real time&quot;.";
 choices[18][2] = "Sem&aacute;foros para dirigir los procesos.";
 choices[18][3] = "Gesti&oacute;n de los accesos a disco exclusivamente mediante interrupciones.";
 answers[18] = 2;
 units[18] = ['86'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3976. ";
 preguntaids[18] = 3976


//  Id pregunta: 2182 Año de creación de pregunta: 2002
 questions[19]= "20)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores y el personal especializado de soporte deben centrarse?:";
 choices[19]= new Array();
 choices[19][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[19][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[19][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de controles y pruebas";
 choices[19][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[19] = 1;
 units[19] = ['36', '45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2182. ";
 preguntaids[19] = 2182


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas se corresponde con el administrador de paquetes para sistemas RedHat y Fedora, entre otros:";
 choices[20]= new Array();
 choices[20][0] = "dpkg";
 choices[20][1] = "apt-get";
 choices[20][2] = "yum";
 choices[20][3] = "zypper";
 answers[20] = 2;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 667. AGE A2 2015";
 preguntaids[20] = 667


//  Id pregunta: 2958 Año de creación de pregunta: 2002
 questions[21]= "22)  La ventaja fundamental de las memorias cache es:";
 choices[21]= new Array();
 choices[21][0] = "Su alta velocidad";
 choices[21][1] = "Su seguridad";
 choices[21][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[21][3] = "Su gran capacidad de direccionamiento";
 answers[21] = 0;
 units[21] = ['52'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2958. ";
 preguntaids[21] = 2958


//  Id pregunta: 9409 Año de creación de pregunta: 2014
 questions[22]= "23)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[22]= new Array();
 choices[22][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[22][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[22][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting.";
 choices[22][3] = "Sprint Planning Meeting, Daily Scrum, Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[22] = 1;
 units[22] = ['84'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 9409. ";
 preguntaids[22] = 9409


//  Id pregunta: 10736 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[23]= new Array();
 choices[23][0] = "GCAL de SISDEL";
 choices[23][1] = "FURPS";
 choices[23][2] = "ISO 9126-1";
 choices[23][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[23] = 0;
 units[23] = ['93'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10736. ";
 preguntaids[23] = 10736


//  Id pregunta: 10659 Año de creación de pregunta: 2015
 questions[24]= "25)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es regulada por el Gobierno para la administraci&oacute;n del espectro?";
 choices[24]= new Array();
 choices[24][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[24][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[24][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[24][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[24] = 1;
 units[24] = ['121'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 10659. ";
 preguntaids[24] = 10659


//  Id pregunta: 3114 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[25]= new Array();
 choices[25][0] = "LaCie";
 choices[25][1] = "Toshiba";
 choices[25][2] = "Apple";
 choices[25][3] = "Rank Xerox";
 answers[25] = 3;
 units[25] = ['52'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3114. ";
 preguntaids[25] = 3114


//  Id pregunta: 5886 Año de creación de pregunta: 2007
 questions[26]= "27)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, el espectro radioel&eacute;ctrico es un bien de dominio p&uacute;blico, cuya titularidad y administraci&oacute;n corresponden a";
 choices[26]= new Array();
 choices[26][0] = "El Gobierno";
 choices[26][1] = "La Agencia Estatal de Radiocomunicaciones";
 choices[26][2] = "El Estado";
 choices[26][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[26] = 2;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5886. ";
 preguntaids[26] = 5886


//  Id pregunta: 1300 Año de creación de pregunta: 2016
 questions[27]= "28)  Para crear en Solaris 10 un enlace simb&oacute;lico que se denomine &quot;soft_link&quot; a un archivo denominado &quot;test&quot; y que se encuentra en el mismo directorio que el enlace, &iquest;qu&eacute; comando de los siguientes tenemos que ejecutar?:";
 choices[27]= new Array();
 choices[27][0] = "In test soft_link";
 choices[27][1] = "In -5 test soft_link";
 choices[27][2] = "In soft_link test";
 choices[27][3] = "In -5 soft_link test";
 answers[27] = 1;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1300. ";
 preguntaids[27] = 1300


//  Id pregunta: 2180 Año de creación de pregunta: 2002
 questions[28]= "29)  En un sistema de informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[28][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[28][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[28][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[28] = 2;
 units[28] = ['24'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2180. ";
 preguntaids[28] = 2180


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[29]= "30)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[29]= new Array();
 choices[29][0] = "La Comisi&oacute;n Europea.";
 choices[29][1] = "El Consejo Europeo.";
 choices[29][2] = "El Consejo de Europa.";
 choices[29][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[29] = 0;
 units[29] = ['5'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[29] = 130


//  Id pregunta: 5546 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[30]= new Array();
 choices[30][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[30][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[30][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[30][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[30] = 1;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 5546. ";
 preguntaids[30] = 5546


//  Id pregunta: 10392 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[31]= new Array();
 choices[31][0] = "0.05";
 choices[31][1] = "0.01";
 choices[31][2] = "0.1";
 choices[31][3] = "0.2";
 answers[31] = 2;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 10392. ";
 preguntaids[31] = 10392


//  Id pregunta: 5095 Año de creación de pregunta: 2004
 questions[32]= "33)  El protocolo ARP";
 choices[32]= new Array();
 choices[32][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[32][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[32][2] = "Se utiliza en routers y bridges";
 choices[32][3] = "A y B son correctas";
 answers[32] = 0;
 units[32] = ['109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5095. ";
 preguntaids[32] = 5095


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[33]= "34)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[33]= new Array();
 choices[33][0] = "Tres a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os.";
 choices[33][2] = "Cinco a&ntilde;os.";
 choices[33][3] = "Seis a&ntilde;os.";
 answers[33] = 0;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 144. Uni&oacute;n Europea";
 preguntaids[33] = 144


//  Id pregunta: 2473 Año de creación de pregunta: 2002
 questions[34]= "35)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[34][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[34][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[34][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[34] = 1;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 2473. Ley 34/2002, art&iacute;culo 6";
 preguntaids[34] = 2473


//  Id pregunta: 6359 Año de creación de pregunta: 2003
 questions[35]= "36)  &Eacute;tica del Auditor. Cuatro afirmaciones.- El Auditor sirve con diligencia, lealtad y honradez los intereses de empleados, accionistas, clientes y p&uacute;blico en general. No participar&aacute; en ninguna actividad ilegal o impropia- Garantiza la confidencialidad de la informaci&oacute;n obtenida en el ejercicio de sus funciones. No la usar&aacute; en beneficio propio, ni dejar&aacute; que llegue a terceros.- Evita actividades que pongan en entredicho su independencia.- Fomenta la formaci&oacute;n de los directivos de la empresa, sus clientes, incluso del p&uacute;blico en general, para que sepan de que va la Auditor&iacute;a y los Sistemas de Informaci&oacute;n";
 choices[35]= new Array();
 choices[35][0] = "Las tres primeras afirmaciones son correctas, la cuarta no";
 choices[35][1] = "Todas son correctas";
 choices[35][2] = "La cuarta es correcta, las otras tres son afirmaciones obvias";
 choices[35][3] = "Son correctas, pero de ellas no se desprende nada pr&aacute;ctico";
 answers[35] = 1;
 units[35] = ['31'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 6359. Examen 2006 JCYL";
 preguntaids[35] = 6359


//  Id pregunta: 2445 Año de creación de pregunta: 2006
 questions[36]= "37)  &iquest;Cu&aacute;l es la diferencia entre una auditor&iacute;a de vulnerabilidades y un test de penetraci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "Un test de penetraci&oacute;n identifica los servicios en ejecuci&oacute;n. Una auditor&iacute;a de vulnerabilidades proporciona una mayor informaci&oacute;n sobre las vulnerabilidades.";
 choices[36][1] = "Un test de penetraci&oacute;n enumera los recursos, una auditor&iacute;a de vulnerabilidaes enumera las vulnerabilidades.";
 choices[36][2] = "Un test de penetraci&oacute;n aprovecha las vulnerabilidades, una auditor&iacute;a de vulnerabilidades encuentra las vulnerabilidades.";
 choices[36][3] = "Los dos son lo mismo.";
 answers[36] = 2;
 units[36] = ['36'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2445. ";
 preguntaids[36] = 2445


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[37]= "38)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[37]= new Array();
 choices[37][0] = "solo mediante ley";
 choices[37][1] = "reglamentariamente";
 choices[37][2] = "mediante ley o reglamentariamente";
 choices[37][3] = "ninguna es correcta";
 answers[37] = 1;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 213. Ley 39/2015";
 preguntaids[37] = 213


//  Id pregunta: 10622 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[38][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[38][2] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital, mediante Real Decreto.";
 choices[38][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[38] = 0;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10622. Articulo 19";
 preguntaids[38] = 10622


//  Id pregunta: 1884 Año de creación de pregunta: 2016
 questions[39]= "40)  Cuando se dispone de una tarjeta criptogr&aacute;fica para almacenar la clave privada, &iquest;Cu&aacute;l es el procedimiento m&aacute;s usual para firmar un documento?:";
 choices[39]= new Array();
 choices[39][0] = "Se transfiere a la tarjeta un &quot;hash&quot; del documento a firmar y esta devuelve la firma";
 choices[39][1] = "Se transfiere a la tarjeta el documento a firmar y esta devuelve la firma";
 choices[39][2] = "EI explorador de Internet calcula un &quot;hash&quot; del documento a firmar, obtiene la clave privada de la tarjeta y cifra el &quot;hash&quot; con ella.";
 choices[39][3] = "EI explorador de Internet obtiene la clave privada de la tarjeta, y firma el documento directamente.";
 answers[39] = 0;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1884. ";
 preguntaids[39] = 1884


//  Id pregunta: 3519 Año de creación de pregunta: 2006
 questions[40]= "41)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[40][1] = "Diagrama de Flujo de Datos";
 choices[40][2] = "Diagrama de Contexto";
 choices[40][3] = "Modelo de Datos";
 answers[40] = 0;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3519. ";
 preguntaids[40] = 3519


//  Id pregunta: 3808 Año de creación de pregunta: 2002
 questions[41]= "42)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[41]= new Array();
 choices[41][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[41][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[41][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[41][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[41] = 3;
 units[41] = ['82'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3808. ";
 preguntaids[41] = 3808


//  Id pregunta: 2700 Año de creación de pregunta: 2002
 questions[42]= "43)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[42]= new Array();
 choices[42][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[42][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[42][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[42][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[42] = 2;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2700. ";
 preguntaids[42] = 2700


//  Id pregunta: 3051 Año de creación de pregunta: 2002
 questions[43]= "44)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[43]= new Array();
 choices[43][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[43][1] = "Es muy cara de dise&ntilde;ar";
 choices[43][2] = "Es reprogramable f&aacute;cilmente";
 choices[43][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[43] = 2;
 units[43] = ['52'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3051. ";
 preguntaids[43] = 3051


//  Id pregunta: 1044 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[44][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[44][2] = "A y B son correctas.";
 choices[44][3] = "A y B son falsas.";
 answers[44] = 2;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 1044. Ley 40/2015";
 preguntaids[44] = 1044


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[45]= new Array();
 choices[45][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[45][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[45][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[45][3] = "todas son correctas";
 answers[45] = 3;
 units[45] = ['7'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[45] = 239


//  Id pregunta: 6704 Año de creación de pregunta: 2009
 questions[46]= "47)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[46]= new Array();
 choices[46][0] = "Un objeto del que obtenemos referencias a otros";
 choices[46][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario";
 choices[46][2] = "Un objeto del que s&oacute;lo existe una instancia";
 choices[46][3] = "Una clase que no se puede instanciar";
 answers[46] = 2;
 units[46] = ['89'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6704. MAP 2008 A1";
 preguntaids[46] = 6704


//  Id pregunta: 5506 Año de creación de pregunta: 2007
 questions[47]= "48)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[47]= new Array();
 choices[47][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[47][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[47][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[47][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[47] = 3;
 units[47] = ['77'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5506. Ley 59/2003, art&iacute;culo 24";
 preguntaids[47] = 5506


//  Id pregunta: 6471 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[48]= new Array();
 choices[48][0] = "ITIL";
 choices[48][1] = "CMMI";
 choices[48][2] = "COBIT";
 choices[48][3] = "M&Eacute;TRICA";
 answers[48] = 1;
 units[48] = ['101'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6471. ";
 preguntaids[48] = 6471


//  Id pregunta: 10707 Año de creación de pregunta: 2015
 questions[49]= "50)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[49]= new Array();
 choices[49][0] = "RFC 3161";
 choices[49][1] = "RFC 4510";
 choices[49][2] = "RFC 4120";
 choices[49][3] = "RFC 6101";
 answers[49] = 1;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 10707. ";
 preguntaids[49] = 10707


//  Id pregunta: 9916 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[50]= new Array();
 choices[50][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[50][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[50][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[50][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[50] = 1;
 units[50] = ['44'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 9916. ";
 preguntaids[50] = 9916


//  Id pregunta: 6644 Año de creación de pregunta: 2009
 questions[51]= "52)  Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[51][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[51][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[51][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[51] = 1;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 6644. MAP 2008 A2";
 preguntaids[51] = 6644


//  Id pregunta: 2184 Año de creación de pregunta: 2002
 questions[52]= "53)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[52]= new Array();
 choices[52][0] = "FM-200";
 choices[52][1] = "Argonite";
 choices[52][2] = "Antifire";
 choices[52][3] = "Argonfire";
 answers[52] = 2;
 units[52] = ['45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2184. ";
 preguntaids[52] = 2184


//  Id pregunta: 5567 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[53]= new Array();
 choices[53][0] = "La calidad.";
 choices[53][1] = "La planificaci&oacute;n.";
 choices[53][2] = "La tecnolog&iacute;a.";
 choices[53][3] = "Los est&aacute;ndares.";
 answers[53] = 2;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 5567. ";
 preguntaids[53] = 5567


//  Id pregunta: 1505 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;les son las dimensiones del modelo en espiral del ciclo de vida del software?";
 choices[54]= new Array();
 choices[54][0] = "Angular y radial.";
 choices[54][1] = "Radial y Lineal.";
 choices[54][2] = "Angular, lineal y radial.";
 choices[54][3] = "Lineal y Angular.";
 answers[54] = 0;
 units[54] = ['82'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 1505. ";
 preguntaids[54] = 1505


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[55]= "56)  Componen la Comisi&oacute;n Europea:";
 choices[55]= new Array();
 choices[55][0] = "Un Comisario por cada Estado miembro.";
 choices[55][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[55][2] = "Dos Comisarios por cada Estado miembro.";
 choices[55][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[55] = 0;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[55] = 127


//  Id pregunta: 4222 Año de creación de pregunta: 2006
 questions[56]= "57)  La t&eacute;cnica de Coste/beneficio contemplada en M&eacute;trica v3 no tiene como objetivo";
 choices[56]= new Array();
 choices[56][0] = "Estimar el plazo de realizaci&oacute;n del proyecto";
 choices[56][1] = "Estimar recursos";
 choices[56][2] = "selecci&oacute;n de alternativa m&aacute;s beneficiosa";
 choices[56][3] = "Oportunidad de acometer el proyecto";
 answers[56] = 0;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4222. ";
 preguntaids[56] = 4222


//  Id pregunta: 1934 Año de creación de pregunta: 2016
 questions[57]= "58)  El lenguaje de consulta SQL utiliza el comando &quot;GRANT&quot; para:";
 choices[57]= new Array();
 choices[57][0] = "Eliminar una tabla de datos.";
 choices[57][1] = "Dar derechos de acceso a un usuario sobre un objeto de la base de datos.";
 choices[57][2] = "Comparar 16gicamente la condici&oacute;n &quot;mayor que&quot; en dos variables.";
 choices[57][3] = "Crear una vista.";
 answers[57] = 1;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1934. ";
 preguntaids[57] = 1934


//  Id pregunta: 1773 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el art. 9.2 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[58]= new Array();
 choices[58][0] = "Corresponde a la Administraci&oacute;n General del Estado promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[58][1] = "Corresponde al gobierno central promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[58][2] = "Corresponde a los poderes p&uacute;blicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[58][3] = "Corresponde las Cortes Generales promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 answers[58] = 2;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 1773. ";
 preguntaids[58] = 1773


//  Id pregunta: 8515 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Qu&eacute; es en java una inner class?";
 choices[59]= new Array();
 choices[59][0] = "Es lo mismo que una clase abstracta";
 choices[59][1] = "Una clase declarada dentro de otra";
 choices[59][2] = "Una clase que no puede ser heredada";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = 1;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8515. ";
 preguntaids[59] = 8515


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[60]= new Array();
 choices[60][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[60][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[60][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[60][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[60] = 2;
 units[60] = ['15'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 423. Mercado laboral";
 preguntaids[60] = 423


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[61]= "62)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[61]= new Array();
 choices[61][0] = "Ley 39/2015";
 choices[61][1] = "Ley 40/2015";
 choices[61][2] = "Ley 29/2015";
 choices[61][3] = "Ley 30/2015";
 answers[61] = 0;
 units[61] = ['7'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 10786. ";
 preguntaids[61] = 10786


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[62]= new Array();
 choices[62][0] = "El Consejo Europeo.";
 choices[62][1] = "El Parlamento Europeo.";
 choices[62][2] = "El Consejo.";
 choices[62][3] = "La Comisi&oacute;n.";
 answers[62] = 3;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 184. Uni&oacute;n Europea";
 preguntaids[62] = 184


//  Id pregunta: 1230 Año de creación de pregunta: 2016
 questions[63]= "64)  La recomendaci&oacute;n ITU-T G.992.3 hace referencia a:";
 choices[63]= new Array();
 choices[63][0] = "ADSL";
 choices[63][1] = "VDSL";
 choices[63][2] = "ADSL2";
 choices[63][3] = "ADSL2+";
 answers[63] = 2;
 units[63] = ['106'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1230. ";
 preguntaids[63] = 1230


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[64]= "65)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[64]= new Array();
 choices[64][0] = "Fritz Machlup";
 choices[64][1] = "Charles Babbage";
 choices[64][2] = "Herman Hollerith";
 choices[64][3] = "Howard Aiken";
 answers[64] = 0;
 units[64] = ['21'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[64] = 6373


//  Id pregunta: 5139 Año de creación de pregunta: 2003
 questions[65]= "66)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, poniendo una marca de copiado a los archivos se habla de:";
 choices[65]= new Array();
 choices[65][0] = "Copia de seguridad incremental.";
 choices[65][1] = "Copia de seguridad diaria.";
 choices[65][2] = "Copia de seguridad intermedia.";
 choices[65][3] = "Copia de seguridad diferencial.";
 answers[65] = 0;
 units[65] = ['100'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 5139. ";
 preguntaids[65] = 5139


//  Id pregunta: 7276 Año de creación de pregunta: 2010
 questions[66]= "67)  El certificado X.509 no";
 choices[66]= new Array();
 choices[66][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[66][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[66][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[66][3] = "Todas las respuestas anteriores son ciertas";
 answers[66] = 3;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7276. ";
 preguntaids[66] = 7276


//  Id pregunta: 7845 Año de creación de pregunta: 2011
 questions[67]= "68)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[67]= new Array();
 choices[67][0] = "Emplea &quot;push parsing&quot;.";
 choices[67][1] = "Permite vistas XML de datos no XML.";
 choices[67][2] = "Es un API unidireccional.";
 choices[67][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[67] = 1;
 units[67] = ['122'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7845. Examen TIC A1 2010";
 preguntaids[67] = 7845


//  Id pregunta: 6551 Año de creación de pregunta: 2003
 questions[68]= "69)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[68]= new Array();
 choices[68][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[68][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[68][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[68][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[68] = 2;
 units[68] = ['104'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6551. ";
 preguntaids[68] = 6551


//  Id pregunta: 5014 Año de creación de pregunta: 2002
 questions[69]= "70)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[69][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[69][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[69][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[69] = 1;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5014. ";
 preguntaids[69] = 5014


//  Id pregunta: 10552 Año de creación de pregunta: 2015
 questions[70]= "71)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[70]= new Array();
 choices[70][0] = "Entregar servicios acordados";
 choices[70][1] = "Contratar proveedores TI";
 choices[70][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[70][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[70] = 2;
 units[70] = ['101'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10552. ";
 preguntaids[70] = 10552


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[71]= "72)  El Tribunal de Justicia se cre&oacute; en:";
 choices[71]= new Array();
 choices[71][0] = "El Tratado de la CECA.";
 choices[71][1] = "El Tratado de Niza.";
 choices[71][2] = "El Tratado de &Aacute;msterdam.";
 choices[71][3] = "El Tratado de Lisboa.";
 answers[71] = 0;
 units[71] = ['5'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 129. Uni&oacute;n Europea";
 preguntaids[71] = 129


//  Id pregunta: 10675 Año de creación de pregunta: 2015
 questions[72]= "73)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[72]= new Array();
 choices[72][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[72][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[72][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[72][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[72] = 0;
 units[72] = ['22'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 10675. ";
 preguntaids[72] = 10675


//  Id pregunta: 6674 Año de creación de pregunta: 2009
 questions[73]= "74)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[73]= new Array();
 choices[73][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[73][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[73][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[73][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[73] = 0;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6674. MAP 2008 A1";
 preguntaids[73] = 6674


//  Id pregunta: 5120 Año de creación de pregunta: 2003
 questions[74]= "75)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[74]= new Array();
 choices[74][0] = "HDLC, LAPB y LAPD.";
 choices[74][1] = "SDLC, LAPB e ICMP.";
 choices[74][2] = "LAPB, LAPD y LAPH.";
 choices[74][3] = "HDLC, LAPB e ICMP.";
 answers[74] = 0;
 units[74] = ['105'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5120. Junta Andaluc&iacute;a";
 preguntaids[74] = 5120


