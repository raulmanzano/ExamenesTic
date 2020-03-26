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
//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[0]= new Array();
 choices[0][0] = "As&iacute;ncrona.";
 choices[0][1] = "Log-shipping.";
 choices[0][2] = "Disk buffering.";
 choices[0][3] = "S&iacute;ncrona.";
 answers[0] = 3;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 652. Xunta de Galicia 2015";
 preguntaids[0] = 652


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[1]= "2)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[1]= new Array();
 choices[1][0] = "6 TB.";
 choices[1][1] = "8 TB.";
 choices[1][2] = "7 TB.";
 choices[1][3] = "4 TB.";
 answers[1] = 3;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 654. Xunta de Galicia 2015";
 preguntaids[1] = 654


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[2]= new Array();
 choices[2][0] = "Backup full.";
 choices[2][1] = "Backup diferencial.";
 choices[2][2] = "Backup incremental.";
 choices[2][3] = "Backup deduplicado.";
 answers[2] = 3;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 653. Xunta de Galicia 2015";
 preguntaids[2] = 653


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[3]= "4)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[3]= new Array();
 choices[3][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[3][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[3][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[3][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[3] = 0;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 614. Xunta de Galicia 2015";
 preguntaids[3] = 614


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[4]= "5)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[4]= new Array();
 choices[4][0] = "6 TB.";
 choices[4][1] = "5 TB.";
 choices[4][2] = "7 TB.";
 choices[4][3] = "3 TB.";
 answers[4] = 1;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 655. Xunta de Galicia 2015";
 preguntaids[4] = 655


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[5]= new Array();
 choices[5][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[5][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[5][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[5][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 781. Xunta de Galicia 2015";
 preguntaids[5] = 781


