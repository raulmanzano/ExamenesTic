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
//  Id pregunta: 9706 Año de creación de pregunta: 2014
 questions[0]= "1)  Seg&uacute;n la Ley 9/2014, que tipo de infracci&oacute;n es: La realizaci&oacute;n de actividades sin disponer de la habilitaci&oacute;n oportuna en las materias reguladas por esta Ley, cuando legalmente sea necesaria.";
 choices[0]= new Array();
 choices[0][0] = "Muy Grave";
 choices[0][1] = "Grave";
 choices[0][2] = "Leve";
 choices[0][3] = "No es Infraccion";
 answers[0] = 0;
 units[0] = ['121'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9706. Art 76.1 de la Ley 9/2014";
 preguntaids[0] = 9706


//  Id pregunta: 10643 Año de creación de pregunta: 2015
 questions[1]= "2)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la correcta:";
 choices[1]= new Array();
 choices[1][0] = "El Gobierno aprueba por ley los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n (PNDD).";
 choices[1][1] = "El Ministerio de Energia, Turismo y Agenda Digital debe regular el uso de los recursos p&uacute;blicos asociados a los PNDD.";
 choices[1][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red corren a cuenta del operador.";
 choices[1][3] = "El Ministerio de Energia, Turismo y Agenda Digital requiere informe de la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital para modificar los planes nacionales.";
 answers[1] = 1;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10643. ";
 preguntaids[1] = 10643


//  Id pregunta: 9732 Año de creación de pregunta: 2014
 questions[2]= "3)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[2]= new Array();
 choices[2][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante";
 choices[2][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general.";
 choices[2][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[2][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa";
 answers[2] = 2;
 units[2] = ['121'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9732. ";
 preguntaids[2] = 9732


//  Id pregunta: 10617 Año de creación de pregunta: 2015
 questions[3]= "4)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[3]= new Array();
 choices[3][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[3][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[3][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[3][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[3] = 2;
 units[3] = ['121'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10617. Articulo 47";
 preguntaids[3] = 10617


//  Id pregunta: 10603 Año de creación de pregunta: 2015
 questions[4]= "5)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n de propuestas de planes nacionales para ser elevados al gobierno y desarrollo normativo de estos planes?";
 choices[4]= new Array();
 choices[4][0] = "CNMC.";
 choices[4][1] = "ORECE.";
 choices[4][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[4][3] = "Ministerio de Energia, Turismo y Agenda Digital.";
 answers[4] = 3;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10603. Articulo 69";
 preguntaids[4] = 10603


//  Id pregunta: 10612 Año de creación de pregunta: 2015
 questions[5]= "6)  Seg&uacute;n la Ley 9/2014, respecto a la protecci&oacute;n de los datos personales es falso que:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo se tratar&aacute;n los datos de localizaci&oacute;n cuando sean an&oacute;nimos o previo consentimiento.";
 choices[5][1] = "Los datos se har&aacute;n siempre an&oacute;nimos o se cancelar&aacute;n cuando no sean necesarios.";
 choices[5][2] = "Los datos ser&aacute;n usados para promoci&oacute;n comercial cuando se haya prestado consentimiento.";
 choices[5][3] = "Se pueden tratar datos de localizaci&oacute;n de forma an&oacute;nima hasta que expire el plazo de impugnaci&oacute;n de factura.";
 answers[5] = 1;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10612. ";
 preguntaids[5] = 10612


//  Id pregunta: 10614 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n la Ley 9/2014, la reasignaci&oacute;n del uso de bandas de frecuencias con el objetivo de alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico es facultad de:";
 choices[6]= new Array();
 choices[6][0] = "El gobierno.";
 choices[6][1] = "La CNMC.";
 choices[6][2] = "El Ayuntamiento de la localidad.";
 choices[6][3] = "Los organismos internacionales.";
 answers[6] = 0;
 units[6] = ['121'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10614. Articulo 61";
 preguntaids[6] = 10614


//  Id pregunta: 10631 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[7]= new Array();
 choices[7][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[7][1] = "Derecho a la continuidad de servicio.";
 choices[7][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[7][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[7] = 3;
 units[7] = ['121'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10631. Articulo 47";
 preguntaids[7] = 10631


//  Id pregunta: 10627 Año de creación de pregunta: 2015
 questions[8]= "9)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[8]= new Array();
 choices[8][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[8][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[8][2] = "Derecho al cambio de operador.";
 choices[8][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[8] = 1;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10627. ";
 preguntaids[8] = 10627


//  Id pregunta: 10638 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n la Ley 9/2014, a qui&eacute;n corresponde establecer los procedimientos y plazos para la habilitaci&oacute;n del ejercicio de los derechos de uso del Dominio P&uacute;blico Radioel&eacute;ctrico";
 choices[9]= new Array();
 choices[9][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[9][1] = "Gobierno de Espa&ntilde;a.";
 choices[9][2] = "CNMC.";
 choices[9][3] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 answers[9] = 1;
 units[9] = ['121'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10638. ";
 preguntaids[9] = 10638


//  Id pregunta: 10634 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece los procedimientos para la habilitaci&oacute;n del ejercicio de los derechos del uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[10]= new Array();
 choices[10][0] = "La CNMC.";
 choices[10][1] = "El gobierno.";
 choices[10][2] = "El Estado.";
 choices[10][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[10] = 1;
 units[10] = ['121'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10634. Articulo 61";
 preguntaids[10] = 10634


//  Id pregunta: 10625 Año de creación de pregunta: 2015
 questions[11]= "12)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[11]= new Array();
 choices[11][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[11][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[11][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[11][3] = "Ninguno es un derecho del usuario.";
 answers[11] = 3;
 units[11] = ['121'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 10625. Articulo 48";
 preguntaids[11] = 10625


//  Id pregunta: 10624 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[12]= new Array();
 choices[12][0] = "La regulaci&oacute;n de la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[12][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[12][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[12][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[12] = 2;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10624. Articulo 61";
 preguntaids[12] = 10624


//  Id pregunta: 10611 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n la Ley 9/2014, las decisiones de otorgamiento de uso de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se adoptar&aacute;n y comunicar&aacute;n en un plazo m&aacute;ximo de:";
 choices[13]= new Array();
 choices[13][0] = "15 d&iacute;as.";
 choices[13][1] = "10 d&iacute;as.";
 choices[13][2] = "3 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 choices[13][3] = "6 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 answers[13] = 3;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10611. Articulo 19";
 preguntaids[13] = 10611


//  Id pregunta: 9735 Año de creación de pregunta: 2014
 questions[14]= "15)  Indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[14]= new Array();
 choices[14][0] = "Las multas coercitivas son incompatibles con las sanciones";
 choices[14][1] = "El importe m&aacute;ximo de las multas coercitivas son 30000 euros";
 choices[14][2] = "El importe de las multas coercitivas  se ingresar&aacute; en el Fondo Nacional del Servicio Universal";
 choices[14][3] = "Ninguna de las anteriores es cierta";
 answers[14] = 1;
 units[14] = ['121'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9735. ";
 preguntaids[14] = 9735


//  Id pregunta: 10623 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la regulaci&oacute;n de la elaboraci&oacute;n y aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro?";
 choices[15]= new Array();
 choices[15][0] = "CNMC.";
 choices[15][1] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[15][2] = "Gobierno.";
 choices[15][3] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 answers[15] = 2;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10623. Articulo 61";
 preguntaids[15] = 10623


//  Id pregunta: 8877 Año de creación de pregunta: 2013
 questions[16]= "17)  Una de las siguientes no es una funci&oacute;n de la Comisi&oacute;n Nacional de los Mercados y la Competencia:";
 choices[16]= new Array();
 choices[16][0] = "Arbitrar en los conflictos que puedan surgir entre los operadores del sector de las comunicaciones electr&oacute;nicas";
 choices[16][1] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas";
 choices[16][2] = "Determinar la cuant&iacute;a que supone el coste neto en la prestaci&oacute;n del servicio universal";
 choices[16][3] = "La creaci&oacute;n de un plan de numeraci&oacute;n";
 answers[16] = 3;
 units[16] = ['121'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8877. ";
 preguntaids[16] = 8877


//  Id pregunta: 8876 Año de creación de pregunta: 2013
 questions[17]= "18)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[17]= new Array();
 choices[17][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[17][1] = "MINETUR (actual Ministerio de Energ&iacute;a, Turismo y Agenda Digital)";
 choices[17][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[17][3] = "El Gobierno";
 answers[17] = 1;
 units[17] = ['121'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8876. ";
 preguntaids[17] = 8876


//  Id pregunta: 8874 Año de creación de pregunta: 2013
 questions[18]= "19)  La Ley General de Telecomunicaciones establece una serie de contenidos m&iacute;nimos que deben incluir los contratos que se celebren entre usuarios finales y operadores. Entre ellos NO se incluye:";
 choices[18]= new Array();
 choices[18][0] = "Los niveles m&iacute;nimos de calidad de servicio que se ofrecen, en particular, el plazo para la conexi&oacute;n inicial, as&iacute; como, en su caso, otros par&aacute;metros de calidad de servicio establecidos reglamentariamente.";
 choices[18][1] = "Los tipos de mantenimiento ofrecidos y los servicios de apoyo facilitados al cliente, as&iacute; como los medios para entrar en contacto con dichos servicios.";
 choices[18][2] = "Los tipos de marcaci&oacute;n relacionados con el servicio, incluyendo servicios avanzados, como n&uacute;mero oculto, servicios de cobro revertido y tarificaciones especiales.";
 choices[18][3] = "Todos los gastos relacionados con la conservaci&oacute;n del n&uacute;mero y otros identificadores.";
 answers[18] = 2;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8874. ";
 preguntaids[18] = 8874


//  Id pregunta: 9731 Año de creación de pregunta: 2014
 questions[19]= "20)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[19]= new Array();
 choices[19][0] = "10 d&iacute;as";
 choices[19][1] = "15 d&iacute;as";
 choices[19][2] = "1 mes";
 choices[19][3] = "3 meses";
 answers[19] = 1;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9731. ";
 preguntaids[19] = 9731


//  Id pregunta: 10523 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[20]= new Array();
 choices[20][0] = "Numeraci&oacute;n y direccionamiento";
 choices[20][1] = "Denominaci&oacute;n";
 choices[20][2] = "Las dos anteriores";
 choices[20][3] = "Ninguna";
 answers[20] = 2;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 10523. ";
 preguntaids[20] = 10523


//  Id pregunta: 10605 Año de creación de pregunta: 2015
 questions[21]= "22)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del dominio p&uacute;blico radiol&eacute;ctrico?";
 choices[21]= new Array();
 choices[21][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[21][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[21][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[21][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[21] = 2;
 units[21] = ['121'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10605. Articulo 61";
 preguntaids[21] = 10605


//  Id pregunta: 10113 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[22]= new Array();
 choices[22][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[22][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[22][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[22][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[22] = 3;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10113. Examen TIC A2 2014";
 preguntaids[22] = 10113


//  Id pregunta: 10606 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico:";
 choices[23]= new Array();
 choices[23][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del Ministerio de Energia, Turismo y Agenda Digital.";
 choices[23][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga Ministerio de Energia, Turismo y Agenda Digital.";
 choices[23][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[23][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[23] = 2;
 units[23] = ['121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10606. Articulo 61";
 preguntaids[23] = 10606


//  Id pregunta: 9734 Año de creación de pregunta: 2014
 questions[24]= "25)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[24]= new Array();
 choices[24][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[24][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[24][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[24][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[24] = 2;
 units[24] = ['121'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9734. ";
 preguntaids[24] = 9734


//  Id pregunta: 9865 Año de creación de pregunta: 2015
 questions[25]= "26)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[25]= new Array();
 choices[25][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[25][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[25][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[25][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[25] = 0;
 units[25] = ['121'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9865. ";
 preguntaids[25] = 9865


//  Id pregunta: 8878 Año de creación de pregunta: 2013
 questions[26]= "27)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[26]= new Array();
 choices[26][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[26][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[26][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[26][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[26] = 2;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8878. ";
 preguntaids[26] = 8878


//  Id pregunta: 10602 Año de creación de pregunta: 2015
 questions[27]= "28)  Indique la afirmaci&oacute;n INCORRECTA seg&uacute;n la Ley 9/2014:";
 choices[27]= new Array();
 choices[27][0] = "Se regular&aacute; el derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[27][1] = "Se regular&aacute; el derecho a la continuidad del servicio.";
 choices[27][2] = "Se regular&aacute; el derecho a la utilizaci&oacute;n del servicio de contestador autom&aacute;tico de llamadas.";
 choices[27][3] = "Se regular&aacute; el derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 answers[27] = 2;
 units[27] = ['121'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10602. Articulo 47";
 preguntaids[27] = 10602


//  Id pregunta: 10604 Año de creación de pregunta: 2015
 questions[28]= "29)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[28]= new Array();
 choices[28][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[28][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[28][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[28][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[28] = 3;
 units[28] = ['121'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10604. Articulo 47";
 preguntaids[28] = 10604


//  Id pregunta: 9707 Año de creación de pregunta: 2014
 questions[29]= "30)  Cual es el importe m&aacute;ximo de una sanci&oacute;n muy grave seg&uacute;n la Ley 9/2014, si no se puede calcular el beneficio bruto obtenido";
 choices[29]= new Array();
 choices[29][0] = "10 millones de euros";
 choices[29][1] = "No hay un l&iacute;mite";
 choices[29][2] = "20 millones de euros";
 choices[29][3] = "El qu&iacute;ntuplo del beneficio bruto obtenido";
 answers[29] = 2;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9707. Art 79.1.a) de la Ley 9/2014. La respuesta D no es correcta puesto que en la pregunta se especifica que no se puede calcular el beneficio bruto obtenido";
 preguntaids[29] = 9707


//  Id pregunta: 10622 Año de creación de pregunta: 2015
 questions[30]= "31)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[30][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[30][2] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital, mediante Real Decreto.";
 choices[30][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[30] = 0;
 units[30] = ['121'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10622. Articulo 19";
 preguntaids[30] = 10622


//  Id pregunta: 10641 Año de creación de pregunta: 2015
 questions[31]= "32)  Seg&uacute;n la Ley 9/2014, el Gobierno regular&aacute; las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico, que ser&aacute;n (1) no discriminatorias, (2) proporcionadas, (3) neutrales y (4) transparentes.";
 choices[31]= new Array();
 choices[31][0] = "Son ciertas 1, 2 y 3";
 choices[31][1] = "Son ciertas 1, 2, y 4";
 choices[31][2] = "Son ciertas 1, 3, y 4";
 choices[31][3] = "Son todas ciertas";
 answers[31] = 1;
 units[31] = ['121'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10641. Articulo 61";
 preguntaids[31] = 10641


//  Id pregunta: 9733 Año de creación de pregunta: 2014
 questions[32]= "33)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas al que pueden dar lugar las infracciones muy graves:";
 choices[32]= new Array();
 choices[32][0] = "10 a&ntilde;os";
 choices[32][1] = "5 a&ntilde;os";
 choices[32][2] = "3 a&ntilde;os";
 choices[32][3] = "1 a&ntilde;o";
 answers[32] = 1;
 units[32] = ['121'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9733. ";
 preguntaids[32] = 9733


//  Id pregunta: 8880 Año de creación de pregunta: 2013
 questions[33]= "34)  El Fondo nacional del servicio universal tiene por finalidad garantizar la financiaci&oacute;n del servicio universal. La aportaci&oacute;n de activos en met&aacute;lico a dicho Fondo la realiza:";
 choices[33]= new Array();
 choices[33][0] = "El Gobierno a trav&eacute;s de los Presupuestos Generales del Estado.";
 choices[33][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[33][2] = "Las Comunidades Aut&oacute;nomas.";
 choices[33][3] = "Los operadores con obligaciones de contribuir a la financiaci&oacute;n del servicio universal.";
 answers[33] = 3;
 units[33] = ['121'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8880. Examen Xunta Galicia 2011 TIC A1";
 preguntaids[33] = 8880


//  Id pregunta: 9730 Año de creación de pregunta: 2014
 questions[34]= "35)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[34]= new Array();
 choices[34][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[34][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[34][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Energia, Turismo y Agenda Digital cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[34][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas.";
 answers[34] = 1;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9730. ";
 preguntaids[34] = 9730


//  Id pregunta: 8879 Año de creación de pregunta: 2013
 questions[35]= "36)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[35][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[35][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[35][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[35] = 2;
 units[35] = ['121'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8879. ";
 preguntaids[35] = 8879


//  Id pregunta: 10525 Año de creación de pregunta: 2015
 questions[36]= "37)  La Ley General de Telecomunicaciones establece los conceptos por los que se puede aplicar tasa. Seleccione cu&aacute;l se corresponde con esta definici&oacute;n: &quot;para cubrir gastos por certificaciones registrales, la recepci&oacute;n de proyectos t&eacute;cnicos, cumplimiento de especificaciones t&eacute;cnicas de aparatos y equipos, etc.&quot;";
 choices[36]= new Array();
 choices[36][0] = "Tasa General de Operadores.";
 choices[36][1] = "Tasas por numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[36][2] = "Tasa por reserva del espacio radioel&eacute;ctrico";
 choices[36][3] = "Tasa de telecomunicaciones";
 answers[36] = 3;
 units[36] = ['121'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10525. ";
 preguntaids[36] = 10525


//  Id pregunta: 10610 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones?";
 choices[37]= new Array();
 choices[37][0] = "Derecho de acceder a los servicios de emergencia de forma gratuita.";
 choices[37][1] = "A impedir mediante un procedimiento sencillo y gratuito la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea a las llamadas emitidas.";
 choices[37][2] = "El derecho a la continuidad de servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[37][3] = "A figurar en las gu&iacute;as de abonados obteniendo una retribuci&oacute;n econ&oacute;mica por ello a cargo del Fondo General del Servicio P&uacute;blico.";
 answers[37] = 3;
 units[37] = ['121'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10610. Articulo 47";
 preguntaids[37] = 10610


//  Id pregunta: 10644 Año de creación de pregunta: 2015
 questions[38]= "39)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable corresponde a:";
 choices[38]= new Array();
 choices[38][0] = "CNMC.";
 choices[38][1] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[38][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[38][3] = "Gobierno.";
 answers[38] = 3;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10644. Art&iacute;culo 61";
 preguntaids[38] = 10644


//  Id pregunta: 10609 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n la Ley 9/2014, los planes nacionales de numeraci&oacute;n se aprueban mediante:";
 choices[39]= new Array();
 choices[39][0] = "Orden Ministerial del MINETUR.";
 choices[39][1] = "Resoluci&oacute;n de la CNMC.";
 choices[39][2] = "Real Decreto.";
 choices[39][3] = "Ninguna de las anteriores.";
 answers[39] = 2;
 units[39] = ['121'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10609. Articulo 19";
 preguntaids[39] = 10609


//  Id pregunta: 10618 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento para la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[40]= new Array();
 choices[40][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[40][1] = "A la CNMC.";
 choices[40][2] = "Al Gobierno.";
 choices[40][3] = "Ninguno de los anteriores.";
 answers[40] = 2;
 units[40] = ['121'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10618. Articulo 61";
 preguntaids[40] = 10618


//  Id pregunta: 10642 Año de creación de pregunta: 2015
 questions[41]= "42)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de estos no es un derecho del usuario final?";
 choices[41]= new Array();
 choices[41][0] = "Cambio de operador.";
 choices[41][1] = "Acceder a servicios de emergencia gratuitamente.";
 choices[41][2] = "Desconexi&oacute;n de ciertos servicios.";
 choices[41][3] = "Impedir, bajo pago de tasa, la identificaci&oacute;n de su l&iacute;nea.";
 answers[41] = 3;
 units[41] = ['121'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10642. Articulo 47";
 preguntaids[41] = 10642


//  Id pregunta: 10620 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n la Ley 9/2014, qu&eacute; no regula el Gobierno, respecto al espectro:";
 choices[42]= new Array();
 choices[42][0] = "Niveles de emisi&oacute;n.";
 choices[42][1] = "Asignaci&oacute;n de bandas de frecuencia.";
 choices[42][2] = "Los contenidos enviados dentro del espectro.";
 choices[42][3] = "Establecer condiciones no discriminatorias.";
 answers[42] = 2;
 units[42] = ['121'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10620. Articulo 61";
 preguntaids[42] = 10620


//  Id pregunta: 9220 Año de creación de pregunta: 2014
 questions[43]= "44)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[43]= new Array();
 choices[43][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[43][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[43][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[43][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[43] = 0;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9220. Examen TIC A1 2013";
 preguntaids[43] = 9220


//  Id pregunta: 10608 Año de creación de pregunta: 2015
 questions[44]= "45)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[44]= new Array();
 choices[44][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[44][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[44][2] = "La continuidad del servicio.";
 choices[44][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[44] = 2;
 units[44] = ['121'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10608. Articulo 47";
 preguntaids[44] = 10608


//  Id pregunta: 10632 Año de creación de pregunta: 2015
 questions[45]= "46)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[45]= new Array();
 choices[45][0] = "Siempre que se mantenga el mismo operador.";
 choices[45][1] = "Sin ning&uacute;n requisito previo.";
 choices[45][2] = "Previa solicitud.";
 choices[45][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[45] = 2;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10632. Articulo 21";
 preguntaids[45] = 10632


//  Id pregunta: 10380 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes supuestos permite al Minetur revocar los t&iacute;tulos habilitantes, de acuerdo con la LGT 9/2014?";
 choices[46]= new Array();
 choices[46][0] = "No se efect&uacute;a un uso eficaz y eficiente";
 choices[46][1] = "Utiliza frecuencias con fines distintos a los que motivaron su asignaci&oacute;n";
 choices[46][2] = "No pagar el Impuesto de Transmisiones Patrimoniales y Actos Jur&iacute;dicos";
 choices[46][3] = "Todos los anteriores";
 answers[46] = 3;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10380. ";
 preguntaids[46] = 10380


//  Id pregunta: 10628 Año de creación de pregunta: 2015
 questions[47]= "48)  Seg&uacute;n la Ley 9/2014, los t&iacute;tulos habilitantes mediante los que se otorguen derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico se otorgar&aacute;n en un plazo de:";
 choices[47]= new Array();
 choices[47][0] = "10 d&iacute;as.";
 choices[47][1] = "15 d&iacute;as.";
 choices[47][2] = "3 semanas.";
 choices[47][3] = "6 semanas.";
 answers[47] = 3;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10628. Art&iacute;culo 62";
 preguntaids[47] = 10628


//  Id pregunta: 10616 Año de creación de pregunta: 2015
 questions[48]= "49)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n podr&aacute; fijar las condiciones para la conservaci&oacute;n de los n&uacute;meros de los abonados?:";
 choices[48]= new Array();
 choices[48][0] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[48][1] = "El Gobierno.";
 choices[48][2] = "La CNMC.";
 choices[48][3] = "La Comisi&oacute;n Europea.";
 answers[48] = 2;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10616. Articulo 21";
 preguntaids[48] = 10616


//  Id pregunta: 10636 Año de creación de pregunta: 2015
 questions[49]= "50)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[49][1] = "CNMC.";
 choices[49][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[49][3] = "ORECE.";
 answers[49] = 0;
 units[49] = ['121'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10636. Articulo 19";
 preguntaids[49] = 10636


//  Id pregunta: 10633 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n la Ley 9/2014, los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas tendr&aacute;n derecho a:";
 choices[50]= new Array();
 choices[50][0] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea en las llamadas que genere, mediante procedimiento sencillo y gratuito.";
 choices[50][1] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea origen en las llamadas entrantes, mediante un procedimiento sencillo y gratuito.";
 choices[50][2] = "Rechazar las llamadas entrantes en que la l&iacute;nea origen no aparezca identificada, mediante un procedimiento sencillo y gratuito.";
 choices[50][3] = "Todas las anteriores.";
 answers[50] = 3;
 units[50] = ['121'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10633. Articulo 47";
 preguntaids[50] = 10633


//  Id pregunta: 9756 Año de creación de pregunta: 2014
 questions[51]= "52)  Europa 2020...";
 choices[51]= new Array();
 choices[51][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[51][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[51][2] = "A y B son correctas";
 choices[51][3] = "Todas son incorrectas";
 answers[51] = 2;
 units[51] = ['121'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9756. ";
 preguntaids[51] = 9756


//  Id pregunta: 10640 Año de creación de pregunta: 2015
 questions[52]= "53)  Seg&uacute;n la Ley 9/2014, si el Ministerio de Energia, Turismo y Agenda Digital emite un informe negativo de una planificaci&oacute;n urbana o territorial, se podr&aacute; alegar:";
 choices[52]= new Array();
 choices[52][0] = "En el plazo m&aacute;ximo de tres meses.";
 choices[52][1] = "Nunca, ya que el informe emitido por MINETUR es negativo.";
 choices[52][2] = "En el plazo m&aacute;ximo de tres meses siempre y cuando el informe negativo permita modificar el informe.";
 choices[52][3] = "En el plazo m&aacute;ximo de un mes.";
 answers[52] = 3;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 10640. Articulo 35";
 preguntaids[52] = 10640


//  Id pregunta: 9736 Año de creación de pregunta: 2014
 questions[53]= "54)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[53]= new Array();
 choices[53][0] = "El Gobierno";
 choices[53][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[53][2] = "Red.es";
 choices[53][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[53] = 2;
 units[53] = ['121'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9736. ";
 preguntaids[53] = 9736


//  Id pregunta: 10629 Año de creación de pregunta: 2015
 questions[54]= "55)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[54]= new Array();
 choices[54][0] = "Solo al finalizar el contrato";
 choices[54][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[54][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = 3;
 units[54] = ['121'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10629. Articulo 47. Sin penalizaci&oacute;n en el supuesto de modificaci&oacute;n de las condiciones.";
 preguntaids[54] = 10629


//  Id pregunta: 10607 Año de creación de pregunta: 2015
 questions[55]= "56)  Se&ntilde;alar la FALSA de acuerdo a la Ley 9/2014. Entre las facultades del gobierno para la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, se encuentran:";
 choices[55]= new Array();
 choices[55][0] = "Aprobar los planes de utilizaci&oacute;n del espectro bas&aacute;ndose en las propuestas del MINETUR.";
 choices[55][1] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[55][2] = "La regulaci&oacute;n del procedimiento de determinaci&oacute;n de los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[55][3] = "La regulaci&oacute;n de las condiciones de otorgamiento de t&iacute;tulos habilitantes para uso del dominio p&uacute;blico para eventos de corta duraci&oacute;n.";
 answers[55] = 0;
 units[55] = ['121'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 10607. Articulo 61";
 preguntaids[55] = 10607


//  Id pregunta: 10379 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al MINETUR?";
 choices[56]= new Array();
 choices[56][0] = "Gestionar el Registro de Operadores";
 choices[56][1] = "Establecer obligaciones espec&iacute;ficas de operadores con poder significativo";
 choices[56][2] = "Proponer al gobierno la aprobaci&oacute;n de los planes de numeraci&oacute;n";
 choices[56][3] = "Administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico";
 answers[56] = 1;
 units[56] = ['121'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 10379. ";
 preguntaids[56] = 10379


//  Id pregunta: 10613 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[57]= new Array();
 choices[57][0] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[57][1] = "AGE.";
 choices[57][2] = "Organismos internacionales.";
 choices[57][3] = "CNMC.";
 answers[57] = 0;
 units[57] = ['121'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10613. Articulo 69";
 preguntaids[57] = 10613


//  Id pregunta: 9866 Año de creación de pregunta: 2015
 questions[58]= "59)  Seg&uacute;n la Ley 9/2014, la emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas es una infracci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Muy grave.";
 choices[58][1] = "Grave.";
 choices[58][2] = "Leve";
 choices[58][3] = "No es una infracci&oacute;n.";
 answers[58] = 1;
 units[58] = ['121'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9866. ";
 preguntaids[58] = 9866


//  Id pregunta: 9757 Año de creación de pregunta: 2014
 questions[59]= "60)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[59]= new Array();
 choices[59][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[59][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[59][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[59][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[59] = 2;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9757. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";
 preguntaids[59] = 9757


//  Id pregunta: 10512 Año de creación de pregunta: 2015
 questions[60]= "61)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[60]= new Array();
 choices[60][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[60][1] = "Tipo de comunicaci&oacute;n.";
 choices[60][2] = "Datos de llamadas no conectadas";
 choices[60][3] = "Datos de llamadas infructuosas";
 answers[60] = 2;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10512. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";
 preguntaids[60] = 10512


//  Id pregunta: 9213 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[61]= new Array();
 choices[61][0] = "Al Gobierno.";
 choices[61][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[61][2] = "Al Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[61][3] = "A la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 answers[61] = 0;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9213. Examen TIC A1 2013";
 preguntaids[61] = 9213


//  Id pregunta: 10626 Año de creación de pregunta: 2015
 questions[62]= "63)  Respecto a los derechos de los usuarios finales en la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[62]= new Array();
 choices[62][0] = "El derecho al cambio de operador en 1 d&iacute;a laborable.";
 choices[62][1] = "El derecho a mostrar, mediante un procedimiento sencillo y gratuito, la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en las llamadas entrantes.";
 choices[62][2] = "Derecho de continuidad del servicio y a obtener compensaci&oacute;n econ&oacute;mica por interrupci&oacute;n.";
 choices[62][3] = "Derecho a detener el desv&iacute;o autom&aacute;tico de llamada efectuado a su terminal por un tercero.";
 answers[62] = 1;
 units[62] = ['121'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10626. Articulo 47";
 preguntaids[62] = 10626


//  Id pregunta: 10104 Año de creación de pregunta: 2015
 questions[63]= "64)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[63]= new Array();
 choices[63][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[63][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[63][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[63][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[63] = 3;
 units[63] = ['121'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 10104. Examen TIC A2 2014";
 preguntaids[63] = 10104


//  Id pregunta: 10637 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a los derechos relativos a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[64]= new Array();
 choices[64][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[64][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[64][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[64][3] = "Todas las anteriores.";
 answers[64] = 3;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10637. ";
 preguntaids[64] = 10637


//  Id pregunta: 10621 Año de creación de pregunta: 2015
 questions[65]= "66)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[65]= new Array();
 choices[65][0] = "Continuidad servicio.";
 choices[65][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[65][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[65][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[65] = 1;
 units[65] = ['121'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 10621. Articulo 47";
 preguntaids[65] = 10621


//  Id pregunta: 10630 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es correcta?:";
 choices[66]= new Array();
 choices[66][0] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados autom&aacute;ticamente.";
 choices[66][1] = "Los costes derivados de la actualizaci&oacute;n de los elementos de red ser&aacute;n sufragados por el abonado.";
 choices[66][2] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados previa solicitud.";
 choices[66][3] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital la aprobaci&oacute;n por RD de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 answers[66] = 2;
 units[66] = ['121'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 10630. ";
 preguntaids[66] = 10630


//  Id pregunta: 8875 Año de creación de pregunta: 2013
 questions[67]= "68)  Los prestadores de servicios de instalaci&oacute;n de telecomunicaciones:";
 choices[67]= new Array();
 choices[67][0] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n, por medios electr&oacute;nicos o telem&aacute;ticos, una declaraci&oacute;n responsable sobre el cumplimiento de los requisitos exigibles para el ejercicio de la actividad.";
 choices[67][1] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 15 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[67][2] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 30 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[67][3] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En un mes sin respuesta, se entender&aacute; estimada la solicitud.";
 answers[67] = 0;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8875. ";
 preguntaids[67] = 8875


//  Id pregunta: 10601 Año de creación de pregunta: 2015
 questions[68]= "69)  De acuerdo a la Ley 9/2014:";
 choices[68]= new Array();
 choices[68][0] = "La CNMC garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[68][1] = "El Ministerio de Energia, Turismo y Agenda Digital garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[68][2] = "Los operadores garantizan la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[68][3] = "La Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 answers[68] = 2;
 units[68] = ['121'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10601. Articulo 21";
 preguntaids[68] = 10601


//  Id pregunta: 10527 Año de creación de pregunta: 2015
 questions[69]= "70)  Cuando la CNMC detecta operadores con poder significativo en los mercados de referencia, &iquest;cu&aacute;l de las siguientes no es una medida que pueda tomar?";
 choices[69]= new Array();
 choices[69][0] = "Imponer obligaciones de transparencia: informaci&oacute;n sobre contabilidad, especificaciones o precios";
 choices[69][1] = "Obligar a la separaci&oacute;n de cuentas";
 choices[69][2] = "Control de precios";
 choices[69][3] = "Promover intervencion judicial de la empresa";
 answers[69] = 3;
 units[69] = ['121'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 10527. Dicha medida no aparece en la LGT";
 preguntaids[69] = 10527


//  Id pregunta: 10615 Año de creación de pregunta: 2015
 questions[70]= "71)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta correcta:";
 choices[70]= new Array();
 choices[70][0] = "El Ministerio de Energia, Turismo y Agenda Digital fijar&aacute; las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de n&uacute;meros";
 choices[70][1] = "Los planes nacionales designar&aacute;n los servicios para los que puedan utilizarse los n&uacute;meros.";
 choices[70][2] = "La CNMC establece el uso de los recursos num&eacute;ricos.";
 choices[70][3] = "El Ministerio de Energia, Turismo y Agenda Digital fijar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n y direccionamiento.";
 answers[70] = 1;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 10615. Articulo 20";
 preguntaids[70] = 10615


//  Id pregunta: 9755 Año de creación de pregunta: 2014
 questions[71]= "72)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[71]= new Array();
 choices[71][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[71][1] = "25% de hogares conectados a redes NGA";
 choices[71][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[71][3] = "Todas las anteriores";
 answers[71] = 3;
 units[71] = ['121'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9755. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";
 preguntaids[71] = 9755


//  Id pregunta: 10635 Año de creación de pregunta: 2015
 questions[72]= "73)  Identifique la respuesta incorrecta sobre derechos del usuario final de la LGT (9/2014):";
 choices[72]= new Array();
 choices[72][0] = "Tiene derecho a celebrar contratos con operadores.";
 choices[72][1] = "Tiene derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros.";
 choices[72][2] = "Tiene derecho a una factura en papel, clara y detallada.";
 choices[72][3] = "Tiene derecho a acceder a los servicios de emergencia.";
 answers[72] = 2;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10635. Articulo 47";
 preguntaids[72] = 10635


//  Id pregunta: 10639 Año de creación de pregunta: 2015
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, el retraso en la conservaci&oacute;n de los n&uacute;meros por parte del operador, da derecho a los abonados a:";
 choices[73]= new Array();
 choices[73][0] = "Una compensaci&oacute;n.";
 choices[73][1] = "Nada.";
 choices[73][2] = "Alegar a recibir una segunda l&iacute;nea.";
 choices[73][3] = "Servicio gratuito durante los 3 primeros a&ntilde;os.";
 answers[73] = 0;
 units[73] = ['121'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10639. ";
 preguntaids[73] = 10639


//  Id pregunta: 10619 Año de creación de pregunta: 2015
 questions[74]= "75)  Seg&uacute;n la Ley 9/2014, los abonados tendr&aacute;n derecho al cambio de operador con conservaci&oacute;n de los n&uacute;meros:";
 choices[74]= new Array();
 choices[74][0] = "En el plazo m&iacute;nimo de un d&iacute;a laborable.";
 choices[74][1] = "En el plazo m&aacute;ximo de un d&iacute;a laborable.";
 choices[74][2] = "En el plazo de un d&iacute;a laborable.";
 choices[74][3] = "Ninguna de las anteriores.";
 answers[74] = 1;
 units[74] = ['121'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 10619. Articulo 47";
 preguntaids[74] = 10619


