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
//  Id pregunta: 3253 Año de creación de pregunta: 2003
 questions[0]= "1)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[0]= new Array();
 choices[0][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[0][1] = "Para establecer reglas de integridad.";
 choices[0][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[0][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[0] = 1;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3253. ";
 preguntaids[0] = 3253


//  Id pregunta: 3511 Año de creación de pregunta: 2006
 questions[1]= "2)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[1]= new Array();
 choices[1][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[1][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[1][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[1][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[1] = 1;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 3511. Ley 59/2003, art&iacute;culo 11";
 preguntaids[1] = 3511


//  Id pregunta: 8125 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia?";
 choices[2]= new Array();
 choices[2][0] = "Esteganograf&iacute;a.";
 choices[2][1] = "Criptograf&iacute;a.";
 choices[2][2] = "Criptoan&aacute;lisis.";
 choices[2][3] = "Estegan&aacute;lisis.";
 answers[2] = 0;
 units[2] = ['41'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8125. Examen TIC A2 2010";
 preguntaids[2] = 8125


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[3]= "4)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "No existen";
 choices[3][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[3][2] = "Pueden ser considerados como filtros de paquetes";
 choices[3][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[3] = 3;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[3] = 4383


//  Id pregunta: 7064 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[4]= new Array();
 choices[4][0] = "Los datos se perciben como tablas.";
 choices[4][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[4][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[4][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[4] = 1;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7064. ";
 preguntaids[4] = 7064


//  Id pregunta: 5469 Año de creación de pregunta: 2007
 questions[5]= "6)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[5]= new Array();
 choices[5][0] = "Mejorar los requisitos de trazabilidad.";
 choices[5][1] = "Construir diagramas Entidad-Historia";
 choices[5][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[5][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[5] = 3;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 5469. ";
 preguntaids[5] = 5469


//  Id pregunta: 2881 Año de creación de pregunta: 2002
 questions[6]= "7)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[6]= new Array();
 choices[6][0] = "Tiene privilegios suficientes";
 choices[6][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[6][2] = "Tiene suficientes recursos disponibles";
 choices[6][3] = "No puede";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2881. ";
 preguntaids[6] = 2881


//  Id pregunta: 4458 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[7]= new Array();
 choices[7][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[7][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[7][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[7][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[7] = 1;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4458. ";
 preguntaids[7] = 4458


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[8]= "9)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[8]= new Array();
 choices[8][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[8][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[8][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[8][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[8] = 0;
 units[8] = ['35'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 10542. ";
 preguntaids[8] = 10542


//  Id pregunta: 2329 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[9]= new Array();
 choices[9][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[9][1] = "Inspecci&oacute;n de Datos";
 choices[9][2] = "Secretar&iacute;a General";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 2;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2329. Pregunta similar a la del ex&aacute;men de SS del 2003. Real Decreto 428/1993";
 preguntaids[9] = 2329


//  Id pregunta: 3628 Año de creación de pregunta: 2002
 questions[10]= "11)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[10]= new Array();
 choices[10][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[10][1] = "Eficiente.";
 choices[10][2] = "Modular.";
 choices[10][3] = "Facilidad de mantenimiento.";
 answers[10] = 1;
 units[10] = ['86'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3628. ";
 preguntaids[10] = 3628


//  Id pregunta: 4035 Año de creación de pregunta: 2004
 questions[11]= "12)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[11]= new Array();
 choices[11][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[11][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[11][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[11][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[11] = 2;
 units[11] = ['92', '93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4035. ";
 preguntaids[11] = 4035


//  Id pregunta: 1150 Año de creación de pregunta: 2016
 questions[12]= "13)  En una base de datos de coches hay una tabla con marcas de coches (c&oacute;digo_marca y nombre_marca) y otra con modelos (c&oacute;digo_marca, c&oacute;digo_modelo, nombre_modelo). Para que la base de datos mantenga la integridad referencial:";
 choices[12]= new Array();
 choices[12][0] = "Si borro una marca, antes tengo que borrar todas las ocurrencias de modelos de esa marca.";
 choices[12][1] = "Si borro un modelo, antes tengo que borrar la marca correspondiente.";
 choices[12][2] = "No puedo dar de alta ninguna marca si no hay antes alg&uacute;n modelo de la misma.";
 choices[12][3] = "Al modificar el nombre de una marca tengo que modificar antes el c&oacute;digo_marca en los modelos correspondientes.";
 answers[12] = 0;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1150. ";
 preguntaids[12] = 1150


//  Id pregunta: 1356 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; es el &quot;Data staging Area&quot; en el contexto de los Data Warehouses?";
 choices[13]= new Array();
 choices[13][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extra en los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[13][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[13][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando estos no pueden ejecutarse en tiempo real.";
 choices[13][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[13] = 0;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1356. ";
 preguntaids[13] = 1356


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[14]= "15)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[14]= new Array();
 choices[14][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[14][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[14][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[14][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[14] = 2;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[14] = 83


//  Id pregunta: 1552 Año de creación de pregunta: 2016
 questions[15]= "16)  Cocoa es el conjunto de frameworks orientados a objetos que permiten el desarrollo de aplicaciones nativas para Mac OS X. &iquest;C&oacute;mo se llama la versi&oacute;n para iOS?";
 choices[15]= new Array();
 choices[15][0] = "Cocoa Touch.";
 choices[15][1] = "MiniCocoa.";
 choices[15][2] = "Cocoa iOS.";
 choices[15][3] = "iTunes.";
 answers[15] = 0;
 units[15] = ['59'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1552. ";
 preguntaids[15] = 1552


//  Id pregunta: 4440 Año de creación de pregunta: 2002
 questions[16]= "17)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[16]= new Array();
 choices[16][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[16][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[16][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[16][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[16] = 2;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4440. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";
 preguntaids[16] = 4440


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[17]= "18)  La arquitectura RISC:";
 choices[17]= new Array();
 choices[17][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[17][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[17][2] = "No es adaptable al sector de los microordenadores";
 choices[17][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[17] = 3;
 units[17] = ['50', '51'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2923. ";
 preguntaids[17] = 2923


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[18][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[18][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[18][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[18] = 2;
 units[18] = ['22'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 515. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[18] = 515


//  Id pregunta: 5967 Año de creación de pregunta: 2007
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativa a los sistemas de almacenamiento y m&eacute;todos de acceso NO es cierta?";
 choices[19]= new Array();
 choices[19][0] = "El &iacute;ndice basado en &aacute;rbol B presenta mayores densidades que el basado en &aacute;rbol B*";
 choices[19][1] = "Un fichero de datos puede tener varios &iacute;ndices, pero como mucho uno puede ser denso";
 choices[19][2] = "Una clave de b&uacute;squeda no tiene por qu&eacute; ser un&iacute;voca";
 choices[19][3] = "Los niveles n-1 (con n &gt; 1) de un &iacute;ndice multinivel (no arb&oacute;reo) son &iacute;ndices no-densos que indizan el nivel n";
 answers[19] = 0;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 5967. ";
 preguntaids[19] = 5967


//  Id pregunta: 9633 Año de creación de pregunta: 2014
 questions[20]= "21)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[20]= new Array();
 choices[20][0] = "Technical Especifications";
 choices[20][1] = "Technical Reports";
 choices[20][2] = "Technical Corrigendum";
 choices[20][3] = "Gu&iacute;as ISO";
 answers[20] = 1;
 units[20] = ['48'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 9633. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";
 preguntaids[20] = 9633


//  Id pregunta: 4453 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[21]= new Array();
 choices[21][0] = "A nivel f&iacute;sico";
 choices[21][1] = "A nivel de red";
 choices[21][2] = "A nivel de enlace";
 choices[21][3] = "A nivel de transporte";
 answers[21] = 2;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4453. ";
 preguntaids[21] = 4453


//  Id pregunta: 10161 Año de creación de pregunta: 2015
 questions[22]= "23)  En relaci&oacute;n con el modelo de gobernanza en el &aacute;mbito de las TIC de la Administraci&oacute;n General del Estado, y respecto a los medios y servicios de uso compartido es correcto que:";
 choices[22]= new Array();
 choices[22][0] = "Los medios y servicios TIC ser&aacute;n declarados de uso compartido cuando, en raz&oacute;n de su naturaleza o del inter&eacute;s com&uacute;n, respondan a necesidades transversales de los ciudadanos.";
 choices[22][1] = "La utilizaci&oacute;n de los medios y servicios compartidos ser&aacute; de car&aacute;cter obligatorio y sustitutivo respecto a los medios y servicios particulares empleados por las distintas unidades.";
 choices[22][2] = "Las Comisiones Ministeriales de Administraci&oacute;n Digital (CMAD) velar&aacute;n por el uso de los medios y servicios compartidos. En este sentido, cuando las necesidades puedan ser comunes a varias unidades, se escoger&aacute; la alternativa que permita independizar el servicio entre los Departamentos, solo en caso de que las unidades pertenezcan al mismo Ministerio.";
 choices[22][3] = "Los activos TIC afectos a la prestaci&oacute;n de servicios sectoriales deber&aacute;n migrarse a los medios y servicios compartidos.";
 answers[22] = 1;
 units[22] = ['47'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 10161. Examen TIC A1 2014";
 preguntaids[22] = 10161


//  Id pregunta: 7126 Año de creación de pregunta: 2010
 questions[23]= "24)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[23]= new Array();
 choices[23][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[23][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[23][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[23][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[23] = 0;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7126. Ley 59/2003, art&iacute;culo 3";
 preguntaids[23] = 7126


//  Id pregunta: 9487 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[24]= new Array();
 choices[24][0] = "Filtro de mediana";
 choices[24][1] = "Realce logar&iacute;tmico";
 choices[24][2] = "Filtro paso bajo";
 choices[24][3] = "Filtro paso alto";
 answers[24] = 1;
 units[24] = ['80'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9487. ";
 preguntaids[24] = 9487


//  Id pregunta: 8492 Año de creación de pregunta: 2011
 questions[25]= "26)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[25]= new Array();
 choices[25][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[25][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[25][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = 0;
 units[25] = ['108'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8492. Teleco Ayto. Madrid 2010";
 preguntaids[25] = 8492


//  Id pregunta: 2276 Año de creación de pregunta: 2002
 questions[26]= "27)  Respecto a los derechos de rectificaci&oacute;n y cancelaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "El plazo para hacer efectiva la rectificaci&oacute;n o cancelaci&oacute;n solicitada por el afectado, es de 1 a&ntilde;o";
 choices[26][1] = "La cancelaci&oacute;n se ejecutar&aacute; mediante supresi&oacute;n de los datos";
 choices[26][2] = "Los datos cancelados no podr&aacute;n ser conservados en ning&uacute;n caso";
 choices[26][3] = "La cancelaci&oacute;n de los datos se ejecutar&aacute; mediante bloqueo de los datos, conserv&aacute;ndose los mismos &uacute;nicamente a disposici&oacute;n de los Tribunales o de las AAPP";
 answers[26] = 3;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2276. ";
 preguntaids[26] = 2276


//  Id pregunta: 2352 Año de creación de pregunta: 2003
 questions[27]= "28)  La interfaz de M&eacute;tica V3 denominada &ldquo;Gesti&oacute;n de proyectos&rdquo;";
 choices[27]= new Array();
 choices[27][0] = "Contempla tanto el desarrollo de nuevos proyectos, como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[27][1] = "Consta de cuatro tipos de actividades; de inicio del proyecto , de seguimiento y control de finalizaci&oacute;n del proyecto, y de mantenimiento.";
 choices[27][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[27][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[27] = 0;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 2352. EXAMEN CASTILLA LA MANCHA";
 preguntaids[27] = 2352


//  Id pregunta: 7460 Año de creación de pregunta: 2010
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[28]= new Array();
 choices[28][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[28][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[28][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[28][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[28] = 1;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7460. ";
 preguntaids[28] = 7460


//  Id pregunta: 6779 Año de creación de pregunta: 2010
 questions[29]= "30)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[29]= new Array();
 choices[29][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[29][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[29][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[29][3] = "El proceso y el procedimiento";
 answers[29] = 1;
 units[29] = ['92'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6779. Castilla La Mancha 2009";
 preguntaids[29] = 6779


//  Id pregunta: 7651 Año de creación de pregunta: 2010
 questions[30]= "31)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[30]= new Array();
 choices[30][0] = "La preferencia local.";
 choices[30][1] = "El agregado at&oacute;mico.";
 choices[30][2] = "El pr&oacute;ximo salto.";
 choices[30][3] = "El agregador.";
 answers[30] = 2;
 units[30] = ['102'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7651. Map 2006";
 preguntaids[30] = 7651


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[31]= "32)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[31]= new Array();
 choices[31][0] = "los relativos a la escasez de direcciones";
 choices[31][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[31][2] = "los relativos a la calidad de servicio";
 choices[31][3] = "todos los anteriores";
 answers[31] = 3;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4992. ";
 preguntaids[31] = 4992


//  Id pregunta: 5915 Año de creación de pregunta: 2007
 questions[32]= "33)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[32]= new Array();
 choices[32][0] = "Primera FN";
 choices[32][1] = "Segunda FN";
 choices[32][2] = "Tercera FN";
 choices[32][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[32] = 1;
 units[32] = ['60'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5915. ";
 preguntaids[32] = 5915


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[33]= "34)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[33]= new Array();
 choices[33][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[33][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[33][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[33][3] = "Todas son ciertas";
 answers[33] = 3;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[33] = 3475


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[34]= new Array();
 choices[34][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[34][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[34][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[34][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[34] = 1;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[34] = 1020


//  Id pregunta: 7672 Año de creación de pregunta: 2010
 questions[35]= "36)  La Secretar&iacute;a General de Administraci&oacute;n Digital depende del Ministerio de:";
 choices[35]= new Array();
 choices[35][0] = "Energ&iacute;a, Turismo y Agenda Digital.";
 choices[35][1] = "Asuntos Exteriores y Cooperaci&oacute;n";
 choices[35][2] = "Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[35][3] = "Interior.";
 answers[35] = 2;
 units[35] = ['47'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 7672. Similar a Map 2007";
 preguntaids[35] = 7672


//  Id pregunta: 2064 Año de creación de pregunta: 2002
 questions[36]= "37)  En relaci&oacute;n con las pruebas de conformidad, si la comprobaci&oacute;n de que el producto satisface o no los requerimientos t&eacute;cnicos definidos en una norma es realizada por el consumidor, nos estamos refiriendo a:";
 choices[36]= new Array();
 choices[36][0] = "Comprobaci&oacute;n de pimera parte o &ldquo;first party testing&rdquo;";
 choices[36][1] = "Comprobaci&oacute;n de segunda parte o &ldquo; second party testing&rdquo;";
 choices[36][2] = "Comprobaci&oacute;n de tercera parte o &ldquo; third party testing&rdquo;";
 choices[36][3] = "Las pruebas de conformidad no pueden ser realizadas por los consumidores";
 answers[36] = 1;
 units[36] = ['48'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2064. ";
 preguntaids[36] = 2064


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[37]= new Array();
 choices[37][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[37][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[37][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 1;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 10401. ";
 preguntaids[37] = 10401


//  Id pregunta: 4859 Año de creación de pregunta: 2002
 questions[38]= "39)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[38]= new Array();
 choices[38][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[38][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[38][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[38][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[38] = 2;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4859. ";
 preguntaids[38] = 4859


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[39]= "40)  En relaci&oacute;n al dise&ntilde;o de un Data Warehouse (DW), se&ntilde;ale Ia respuesta incorecta:";
 choices[39]= new Array();
 choices[39][0] = "Slicing: selecciona una dimensi&oacute;n en particular de un cubo determinado, cuyo resultado es un nuevo 'sub-cubo'.";
 choices[39][1] = "Rolling up: permite subir de nivel en la jerarquia, es lo contrario al drilling-down.";
 choices[39][2] = "Drilling down: es la navegaci&oacute;n que permite ir de los datos resumidos a los datos detallados.";
 choices[39][3] = "Drilling across: permite cambiar la vista a otra jerarqu&iacute;a de diferente nivel.";
 answers[39] = 3;
 units[39] = ['72'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 732. AGE A2 2015";
 preguntaids[39] = 732


//  Id pregunta: 9177 Año de creación de pregunta: 2014
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[40]= new Array();
 choices[40][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[40][1] = "Formaci&oacute;n.";
 choices[40][2] = "Desarrollo.";
 choices[40][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[40] = 0;
 units[40] = ['43'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 9177. Examen TIC A2 2013";
 preguntaids[40] = 9177


//  Id pregunta: 1202 Año de creación de pregunta: 2016
 questions[41]= "42)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[41]= new Array();
 choices[41][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[41][1] = "RAID 0.";
 choices[41][2] = "RAID 1.";
 choices[41][3] = "RAID 5.";
 answers[41] = 1;
 units[41] = ['53'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1202. ";
 preguntaids[41] = 1202


//  Id pregunta: 3767 Año de creación de pregunta: 2002
 questions[42]= "43)  El acoplamiento es un concepto fundamental del dise&ntilde;o estructurado. &iquest;Cu&aacute;l de los siguientes tipos define el nivel de acoplamiento ordenados de mayor a menor?";
 choices[42]= new Array();
 choices[42][0] = "Por contenido, com&uacute;n, externo, de control, por estampado, de datos, normal.";
 choices[42][1] = "Externo, com&uacute;n, por contenido, por estampado, de control, directo y normal.";
 choices[42][2] = "Externo, por contenido, com&uacute;n, de control, por estampado, de datos y normal.";
 choices[42][3] = "Por contenido, externo, com&uacute;n, de control, de datos, por estampado y normal.";
 answers[42] = 0;
 units[42] = ['89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3767. ";
 preguntaids[42] = 3767


//  Id pregunta: 8259 Año de creación de pregunta: 2011
 questions[43]= "44)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[43]= new Array();
 choices[43][0] = "El encargado del fichero o del tratamiento.";
 choices[43][1] = "El responsable del fichero o del tratamiento.";
 choices[43][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[43][3] = "El propietario del fichero o del tratamiento.";
 answers[43] = 1;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 8259. Examen TIC A2 2010 interna";
 preguntaids[43] = 8259


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[44]= "45)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de Roma, 1957.";
 choices[44][1] = "El Acta &Uacute;nica Europea.";
 choices[44][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[44][3] = "Ninguna es correcta.";
 answers[44] = 2;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 384. Pol&iacute;ticas de igualdad";
 preguntaids[44] = 384


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[45]= "46)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[45]= new Array();
 choices[45][0] = "10 d&iacute;as naturales";
 choices[45][1] = "10 d&iacute;as h&aacute;biles";
 choices[45][2] = "20 d&iacute;as naturales";
 choices[45][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[45] = 0;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[45] = 6099


//  Id pregunta: 7389 Año de creación de pregunta: 2010
 questions[46]= "47)  El protocolo FTP es un protocolo:";
 choices[46]= new Array();
 choices[46][0] = "Seguro";
 choices[46][1] = "No orientado a conexi&oacute;n";
 choices[46][2] = "De nivel de aplicaci&oacute;n";
 choices[46][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[46] = 2;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7389. Examen TIC B 2009";
 preguntaids[46] = 7389


//  Id pregunta: 6081 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[47]= new Array();
 choices[47][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[47][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[47][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[47][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[47] = 0;
 units[47] = ['75'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6081. Examen TIC A1 MAP 2007";
 preguntaids[47] = 6081


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[48]= "49)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[48]= new Array();
 choices[48][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[48][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[48][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[48][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[48] = 0;
 units[48] = ['94'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6684. ";
 preguntaids[48] = 6684


//  Id pregunta: 2121 Año de creación de pregunta: 2002
 questions[49]= "50)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[49]= new Array();
 choices[49][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[49][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[49][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[49][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[49] = 3;
 units[49] = ['36', '45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2121. ";
 preguntaids[49] = 2121


//  Id pregunta: 7368 Año de creación de pregunta: 2010
 questions[50]= "51)  En Oracle, un tablespace es:";
 choices[50]= new Array();
 choices[50][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[50][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[50][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[50][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[50] = 3;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7368. Examen TIC B 2009";
 preguntaids[50] = 7368


//  Id pregunta: 7606 Año de creación de pregunta: 2010
 questions[51]= "52)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de las TIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &laquo;Gesti&oacute;n de la Calidad&raquo; se encuentra definido en el dominio de:";
 choices[51]= new Array();
 choices[51][0] = "Alinear, Planificar y Organizar";
 choices[51][1] = "Construir, Adquirir e Implementar";
 choices[51][2] = "Entregar, dar Servicio y Soporte.";
 choices[51][3] = "Supervisar, Evaluar y Valorar";
 answers[51] = 0;
 units[51] = ['101'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 7606. Similar a Map 2006";
 preguntaids[51] = 7606


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[52]= "53)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[52]= new Array();
 choices[52][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[52][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[52][2] = "Todos los datos relativos a una persona";
 choices[52][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[52] = 3;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[52] = 6782


//  Id pregunta: 7254 Año de creación de pregunta: 2010
 questions[53]= "54)  Deficiencias dentro del sistema Kerberos";
 choices[53]= new Array();
 choices[53][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[53][1] = "Privacidad";
 choices[53][2] = "Integridad";
 choices[53][3] = "Todas las respuestas anteriores son incorrectos";
 answers[53] = 0;
 units[53] = ['120'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7254. ";
 preguntaids[53] = 7254


//  Id pregunta: 3447 Año de creación de pregunta: 2006
 questions[54]= "55)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[54]= new Array();
 choices[54][0] = "Workflow";
 choices[54][1] = "B2B";
 choices[54][2] = "B2C";
 choices[54][3] = "SCM";
 answers[54] = 0;
 units[54] = ['72'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3447. ";
 preguntaids[54] = 3447


//  Id pregunta: 7481 Año de creación de pregunta: 2010
 questions[55]= "56)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[55]= new Array();
 choices[55][0] = "Una extensi&oacute;n de Swing.";
 choices[55][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[55][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[55][3] = "Una familia de fuentes de caracteres.";
 answers[55] = 1;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7481. Map 2005";
 preguntaids[55] = 7481


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[56]= new Array();
 choices[56][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[56][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[56][2] = "Fecha de otorgamiento.";
 choices[56][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[56] = 1;
 units[56] = ['43'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 595. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[56] = 595


//  Id pregunta: 6515 Año de creación de pregunta: 2003
 questions[57]= "58)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[57]= new Array();
 choices[57][0] = "755";
 choices[57][1] = "740";
 choices[57][2] = "760";
 choices[57][3] = "777";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6515. ";
 preguntaids[57] = 6515


//  Id pregunta: 2742 Año de creación de pregunta: 2002
 questions[58]= "59)  El cifrado TDES - 2EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[58]= new Array();
 choices[58][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[58][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[58][2] = "Un cifrado triple con una clave de 56 bits";
 choices[58][3] = "No existe";
 answers[58] = 1;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2742. ";
 preguntaids[58] = 2742


//  Id pregunta: 2298 Año de creación de pregunta: 2009
 questions[59]= "60)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[59]= new Array();
 choices[59][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[59][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[59][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = 3;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2298. ";
 preguntaids[59] = 2298


//  Id pregunta: 1459 Año de creación de pregunta: 2016
 questions[60]= "61)  Cuando la notificaci&oacute;n de inscripci&oacute;n al Registro de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos (AEPD) NO se ajusta a los requisitos exigibles:";
 choices[60]= new Array();
 choices[60][0] = "Se produce la inscripci&oacute;n, pero habr&aacute; que subsanarla en el plazo de 30 d&iacute;as.";
 choices[60][1] = "Se produce la inscripci&oacute;n si no hay queja o reclamaci&oacute;n por parte de las personas cuyos datos personales consten en el fichero.";
 choices[60][2] = "Inicialmente no se produce la inscripci&oacute;n y el Registro solicita los datos necesarios para la subsanaci&oacute;n en un plazo de 10 d&iacute;as.";
 choices[60][3] = "Se deniega la inscripci&oacute;n.";
 answers[60] = 2;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 1459. ";
 preguntaids[60] = 1459


//  Id pregunta: 7011 Año de creación de pregunta: 2010
 questions[61]= "62)  El c&oacute;digo &eacute;tico definido por ISACA resultar&aacute; de aplicaci&oacute;n a:";
 choices[61]= new Array();
 choices[61][0] = "Solamente a las personas certificadas como CISA y CISM.";
 choices[61][1] = "A los profesionales certificados CISA y CISM y a los miembros de la ISACA.";
 choices[61][2] = "A los miembros de la ISACA, que obligatoriamente ser&aacute;n profesionales con las certificaciones CISA y CISM, en lo que se refiere a la aplicaci&oacute;n de las pr&aacute;cticas definidas dentro de COBIT.";
 choices[61][3] = "A todos los profesionales que trabajen realizando auditor&iacute;as de sistemas de informaci&oacute;n y que para ello empleen como referencia los manuales del COBIT.";
 answers[61] = 1;
 units[61] = ['36'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 7011. ";
 preguntaids[61] = 7011


//  Id pregunta: 4628 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[62]= new Array();
 choices[62][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[62][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[62][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[62][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[62] = 3;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4628. ";
 preguntaids[62] = 4628


//  Id pregunta: 4708 Año de creación de pregunta: 2002
 questions[63]= "64)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[63]= new Array();
 choices[63][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[63][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[63][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[63][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[63] = 0;
 units[63] = ['107'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4708. ";
 preguntaids[63] = 4708


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[64]= new Array();
 choices[64][0] = "Joost";
 choices[64][1] = "Netflix";
 choices[64][2] = "Cassandra";
 choices[64][3] = "Hadoop";
 answers[64] = 3;
 units[64] = ['73'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1352. ";
 preguntaids[64] = 1352


//  Id pregunta: 8810 Año de creación de pregunta: 2013
 questions[65]= "66)  Una red de anillo en contienda.";
 choices[65]= new Array();
 choices[65][0] = "Nunca se pasa un testigo";
 choices[65][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[65][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[65][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[65] = 1;
 units[65] = ['112'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8810. ";
 preguntaids[65] = 8810


//  Id pregunta: 8045 Año de creación de pregunta: 2011
 questions[66]= "67)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[66]= new Array();
 choices[66][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[66][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento.";
 choices[66][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento.";
 choices[66][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[66] = 1;
 units[66] = ['44'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 8045. Examen TIC A2 2010";
 preguntaids[66] = 8045


//  Id pregunta: 3748 Año de creación de pregunta: 2002
 questions[67]= "68)  CODE-AND-FIX:";
 choices[67]= new Array();
 choices[67][0] = "Es un modelo en cascada";
 choices[67][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[67][2] = "Es equivalente a METRICA";
 choices[67][3] = "No resulta muy pr&aacute;ctico";
 answers[67] = 3;
 units[67] = ['82'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3748. ";
 preguntaids[67] = 3748


//  Id pregunta: 5918 Año de creación de pregunta: 2007
 questions[68]= "69)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[68]= new Array();
 choices[68][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[68][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[68][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[68][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[68] = 2;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5918. ";
 preguntaids[68] = 5918


//  Id pregunta: 3426 Año de creación de pregunta: 2006
 questions[69]= "70)  En los GIS, el sistema UTM:";
 choices[69]= new Array();
 choices[69][0] = "Asocia cada elemento a una clave de zona.";
 choices[69][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[69][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[69][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[69] = 1;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3426. ";
 preguntaids[69] = 3426


//  Id pregunta: 9665 Año de creación de pregunta: 2014
 questions[70]= "71)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal";
 choices[70]= new Array();
 choices[70][0] = "Est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[70][1] = "No pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal.";
 choices[70][2] = "Pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales.";
 choices[70][3] = "No permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales.";
 answers[70] = 2;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 9665. Examen TIC A1 2013";
 preguntaids[70] = 9665


//  Id pregunta: 10317 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[71]= new Array();
 choices[71][0] = "Nunca";
 choices[71][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[71][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[71][3] = "En todo caso";
 answers[71] = 2;
 units[71] = ['43'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 10317. ";
 preguntaids[71] = 10317


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[72]= "73)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[72]= new Array();
 choices[72][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[72][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[72][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[72][3] = "todas son correctas";
 answers[72] = 3;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[72] = 977


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[73]= "74)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[73]= new Array();
 choices[73][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio?n Europea (DOUE)";
 choices[73][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[73][2] = "A partir del 1 de enero de 2015";
 choices[73][3] = "A partir del 1 de julio de 2016";
 answers[73] = 1;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 792. Reglamento 910/2014";
 preguntaids[73] = 792


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[74]= new Array();
 choices[74][0] = "Indirecta.";
 choices[74][1] = "Directa.";
 choices[74][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[74][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[74] = 1;
 units[74] = ['14'];
 blocks[74] = ['A3'];
 comments[74] = "Id Pregunta: 1291. ";
 preguntaids[74] = 1291


