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
//   A1: {area: "A.Temas generales.", titulo: "I. Marco constitucional espa&ntilde;ol y Uni&oacute;n Europea.", min: 1,	max: 6},    
var infoBloques = {

    A1: { area: "A.Temas generales. ", titulo: "I. Marco constitucional espa&ntilde;ol y Uni&oacute;n Europea ", min: 1, max: 6 },
    A2: { area: "A.Temas generales. ", titulo: "II. Actuaci&oacute;n administrativa y gesti&oacute;n financiera. ", min: 7, max: 11 },
    A3: { area: "A.Temas generales. ", titulo: "III. Estructura social y econ&oacute;mica de Espa&ntilde;a ", min: 12, max: 16 },
    A4: { area: "A.Temas generales. ", titulo: "IV. Direcci&oacute;n p&uacute;blica", min: 17, max: 23 },
    B1: { area: "B.Temas espec&iacute;ficos. ", titulo: "I.Organizaci&oacute;n y gesti&oacute;n de los sistemas de informaci&oacute;n", min: 24, max: 48 },
    B2: { area: "B.Temas espec&iacute;ficos. ", titulo: "II. Tecnolog&iacute;a b&aacute;sica", min: 49, max: 81 },
    B3: { area: "B.Temas espec&iacute;ficos. ", titulo: "III. Ingenier&iacute;a de los Sistemas de Informaci&oacute;n", min: 82, max: 101 },
    B4: { area: "B.Temas espec&iacute;ficos. ", titulo: "IV. Redes, Comunicaciones e Internet", min: 102, max: 125 },
};

function initBloquesMap()
{ 
    var theMap = {

				A1: 0,
				A2: 0,
				A3: 0,
				A4: 0,
				B1: 0,
				B2: 0,
				B3: 0,
				B4: 0,
    };
    return theMap;
};

//  T1: {area: "A1", tituloCorto: "La Constituci�n espa�ola de 1978 (I).",  tituloLargo: "La Constituci�n espa�ola de 1978 (I). Los principios constitucionales. Los derechos fundamentales y sus garant�as. La Corona. Cortes Generales. Congreso de los Diputados y Senado. El Gobierno. Los �rganos constitucionales de control del Gobierno: Tribunal"},
var infoTemas = { 

    T1: { area: "A1", titulo: "La Constituci&oacute;n espa&ntilde;ola de 1978 (I).", tituloLargo: "La Constituci&oacute;n espa&ntilde;ola de 1978 (I). Los principios constitucionales. Los derechos fundamentales y sus garant&iacute;as. La Corona. Cortes Generales. Congreso de los Diputados y Senado. El Gobierno. Los &Oacute;rganos constitucionales de control del Gobierno: Tribunal de Cuentas, Defensor del Pueblo. La funci&oacute;n consultiva: El Consejo de Estado.", peso: 1.0869565, tema: 1 },
    T2: { area: "A1", titulo: "La constituci&oacute;n espa&ntilde;ola de 1978 (II).", tituloLargo: "La Constituci&oacute;n espa&ntilde;ola de 1978 (II). El Poder Judicial. La justicia en la Constituci&oacute;n. El Consejo General del Poder Judicial. El Ministerio Fiscal. El Tribunal Constitucional. Naturaleza, organizaci&oacute;n y atribuciones.", peso: 1.0869565, tema: 2 },
    T3: { area: "A1", titulo: "La constituci&oacute;n espa&ntilde;ola de 1978 (III).", tituloLargo: "La Constituci&oacute;n espa&ntilde;ola de 1978 (III). Las Comunidades Aut&oacute;nomas: organizaci&oacute;n pol&iacute;tica y administrativa. La Administraci&oacute;n Local: Regulaci&oacute;n constitucional y entidades que la integran.", peso: 1.0869565, tema: 3 },
    T4: { area: "A1", titulo: "La constituci&oacute;n espa&ntilde;ola de 1978 (IV).", tituloLargo: "La Constituci&oacute;n espa&ntilde;ola de 1978 (IV). La Administraci&oacute;n P&uacute;blica: Principios constitucionales. La Administraci&oacute;n General del Estado. Sus &oacute;rganos centrales.", peso: 1.0869565, tema: 4 },
    T5: { area: "A1", titulo: "La Uni&oacute;n Europea: antecedentes, evoluci&oacute;n y objetivos.", tituloLargo: "La Uni&oacute;n Europea: antecedentes, evoluci&oacute;n y objetivos. Los tratados originarios y modificativos. El Derecho de la Uni&oacute;n Europea. Fuentes. Relaci&oacute;n entre el Derecho de la Uni&oacute;n Europea y el ordenamiento jur&iacute;dico de los Estados miembros. La participaci&oacute;n del Estados miembros en el proceso decisorio.", peso: 1.0869565, tema: 5 },
    T6: { area: "A1", titulo: "Las Instituciones de la Uni&oacute;n Europea.", tituloLargo: "Las Instituciones de la Uni&oacute;n Europea: el Consejo Europeo, el Consejo, la Comisi&oacute;n Europea, el Parlamento Europeo el Tribunal de Justicia de la Uni&oacute;n Europea, el Tribunal de Cuentas y el Banco Central Europeo.", peso: 1.0869565, tema: 6 },
    T7: { area: "A2", titulo: "Procedimiento administrativo presencial y telem&aacute;tico.", tituloLargo: "El r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas. El procedimiento administrativo y la relaci&oacute;n de los ciudadanos con las Administraciones P&uacute;blicas. La colaboraci&oacute;n entre Administraciones mediante acuerdos y convenios. La colaboraci&oacute;n p&uacute;blico-privada.", peso: 1.0869565, tema: 7 },
    T8: { area: "A2", titulo: "La revisi&oacute;n de los actos en v&iacute;a administrativa.", tituloLargo: "La revisi&oacute;n de los actos en v&iacute;a administrativa. Los recursos administrativos. El recurso contencioso-administrativo.", peso: 1.0869565, tema: 8 },
    T9: { area: "A2", titulo: "La responsabilidad patrimonial de las Administraciones P&uacute;blicas.", tituloLargo: "La responsabilidad patrimonial de las Administraciones P&uacute;blicas. Procedimiento de responsabilidad patrimonial. La acci&oacute;n de responsabilidad.", peso: 1.0869565, tema: 9 },
    T10: { area: "A2", titulo: "Los contratos de las Administraciones P&uacute;blicas.", tituloLargo: "Los contratos de las Administraciones P&uacute;blicas. Principios comunes. La Ley de Contratos del Sector P&uacute;blico. Requisitos necesarios para la celebraci&oacute;n de los contratos. Procedimientos de contrataci&oacute;n y formas de adjudicaci&oacute;n. Tipos de contratos y caracter&iacute;sticas generales. La facturaci&oacute;n en el Sector P&uacute;blico.", peso: 1.0869565, tema: 10 },
    T11: { area: "A2", titulo: "Los presupuestos generales del Estado.", tituloLargo: "Los presupuestos generales del Estado. Estructura del presupuesto: Clasificaci&oacute;n de los gastos. Las modificaciones presupuestarias. La ejecuci&oacute;n del gasto y su control. El control interno: La Intervenci&oacute;n General de la Administraci&oacute;n del Estado. El control externo: El Tribunal de Cuentas y las Cortes Generales.", peso: 1.0869565, tema: 11 },
    T12: { area: "A3", titulo: "El modelo econ&oacute;mico espa&ntilde;ol.", tituloLargo: "El modelo econ&oacute;mico espa&ntilde;ol en el marco de la econom&iacute;a mundial. El crecimiento sostenible y las pol&iacute;ticas ambientales. L&iacute;neas generales de la pol&iacute;tica econ&oacute;mica actual.", peso: 1.0869565, tema: 12 },
    T13: { area: "A3", titulo: "Los sectores de la econom&iacute;a.", tituloLargo: "El sector primario. El sector industrial. El sector servicios. Los subsectores de comercio, transportes y comunicaciones. El turismo.", peso: 1.0869565, tema: 13 },
    T14: { area: "A3", titulo: "Estructura social y pol&iacute;ticas de igualdad.", tituloLargo: "La estructura social. Tendencias demogr&aacute;ficas. Pol&iacute;ticas de igualdad de g&eacute;nero. Discapacidad y dependencia. Pol&iacute;ticas contra la violencia de g&eacute;nero.", peso: 1.0869565, tema: 14 },
    T15: { area: "A3", titulo: "El mercado de trabajo.", tituloLargo: "El mercado de trabajo: Evoluci&oacute;n y caracter&iacute;sticas actuales. Principales magnitudes. Pol&iacute;ticas p&uacute;blicas de empleo.", peso: 1.0869565, tema: 15 },
    T16: { area: "A3", titulo: "TIC y sociedad.", tituloLargo: "El impacto de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la sociedad. La brecha digital. Nuevos h&aacute;bitos de relaci&oacute;n y de consumo de la informaci&oacute;n.", peso: 1.0869565, tema: 16 },
    T17: { area: "A3", titulo: "TIC y mercado de trabajo.", tituloLargo: "El impacto de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la econom&iacute;a y en el mercado de trabajo. Principales magnitudes.", peso: 1.0869565, tema: 17 },
    T18: { area: "A4", titulo: "La funci&oacute;n gerencial de las AAPP.", tituloLargo: "La funci&oacute;n gerencial en las Administraciones P&uacute;blicas. Particularidades de la gesti&oacute;n p&uacute;blica.", peso: 1.0869565, tema: 18 },
    T19: { area: "A4", titulo: "La calidad en los servicios p&uacute;blicos.", tituloLargo: "La calidad en los servicios p&uacute;blicos y el papel de las TIC en su modernizaci&oacute;n. La legislaci&oacute;n en materia de sociedad de la informaci&oacute;n y administraci&oacute;n electr&oacute;nica en Espa&ntilde;a y Europa.", peso: 1.0869565, tema: 19 },
    T20: { area: "A4", titulo: "Modelo burocr&aacute;tico, management y gobernanza.", tituloLargo: "La crisis de la burocracia como sistema de gesti&oacute;n. La adecuaci&oacute;n de t&eacute;cnicas del sector privado. El &laquo;management&raquo; p&uacute;blico y la gobernanza. Hacia la excelencia en las instituciones p&uacute;blicas.", peso: 1.0869565, tema: 20 },
    T21: { area: "A4", titulo: "Gesti&oacute;n del conocimiento.", tituloLargo: "La gesti&oacute;n del conocimiento y el capital intelectual en las organizaciones.", peso: 1.0869565, tema: 21 },
    T22: { area: "A4", titulo: "&Eacute;tica p&uacute;blica y transparencia.", tituloLargo: "&Eacute;tica P&uacute;blica, transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno. La ley 79/2013, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno. El Consejo de Transparencia y Buen Gobierno: Real Decreto 979/2OI4, por el que se aprueba su estatuto. Funciones. La Oficina de Transparencia y Acceso a la Informaci&oacute;n (OTAI): Funciones. El Portal de Transparencia. Las Unidades de Informaci&oacute;n y Transparencia (UITS): Funciones, La transparencia y el acceso a la informaci&oacute;n en las Comunidades Aut&oacute;nomas y Entidades Locales.", peso: 1.0869565, tema: 22 },
    T23: { area: "A4", titulo: "Emprendimiento y unidad de mercado.", tituloLargo: "La dinamizaci&oacute;n y el apoyo a la actividad econ&oacute;mica y al emprendimiento. La garant&iacute;a de la unidad de mercado.", peso: 1.0869565, tema: 23 },
    T24: { area: "B1", titulo: "Conceptos de sistemas de informaci&oacute;n.", tituloLargo: "Definici&oacute;n, estructura, y dimensionamiento eficiente de los Sistemas de Informaci&oacute;n.", peso: 0.16891892, tema: 24 },
    T25: { area: "B1", titulo: "La informaci&oacute;n en las organizaciones.", tituloLargo: "La informaci&oacute;n en las organizaciones. Las organizaciones basadas en la informaci&oacute;n. La Administraci&oacute;n como caso espec&iacute;fico de este tipo de organizaci&oacute;n.", peso: 0.16891892, tema: 25 },
    T26: { area: "B1", titulo: "Gobernanza TIC.", tituloLargo: "Modelos de Gobernanza TIC. Organizaci&oacute;n e instrumentos operativos de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos. La Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado.", peso: 1.6891892, tema: 26 },
    T27: { area: "B1", titulo: "Reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.", tituloLargo: "Reutilizaci&oacute;n de la Informaci&oacute;n en el Sector P&uacute;blico en Europa y Espa&ntilde;a. Papel de las TIC en la implantaci&oacute;n de pol&iacute;ticas de datos abiertos y transparencia.", peso: 0.6756757, tema: 27 },
    T28: { area: "B1", titulo: "Directivo TIC.", tituloLargo: "Estrategia, objetivos y funciones del directivo de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n en la Administraci&oacute;n.", peso: 0.5067568, tema: 28 },
    T29: { area: "B1", titulo: "Herramientas para el directivo TIC.", tituloLargo: "Herramientas de planificaci&oacute;n y control de gesti&oacute;n de la funci&oacute;n del directivo de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n en la Administraci&oacute;n. El cuadro de mando.", peso: 0.33783785, tema: 29 },
    T30: { area: "B1", titulo: "Centro de sistemas de informaci&oacute;n.", tituloLargo: "Organizaci&oacute;n y funcionamiento de un Centro de Sistemas de Informaci&oacute;n. Funciones de: desarrollo, mantenimiento, sistemas, bases de datos, comunicaciones, seguridad, calidad, microinform&aacute;tica y atenci&oacute;n a usuarios.", peso: 0.33783785, tema: 30 },
    T31: { area: "B1", titulo: "Direcci&oacute;n y gesti&oacute;n de proyectos TIC.", tituloLargo: "Direcci&oacute;n y gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n. Planificaci&oacute;n estrat&eacute;gica, gesti&oacute;n de recursos, seguimiento de proyectos, toma de decisiones.", peso: 0.33783785, tema: 31 },
    T32: { area: "B1", titulo: "Gesti&oacute;n de equipos.", tituloLargo: "Liderazgo. Gesti&oacute;n de competencias y personas. Gesti&oacute;n de conflictos e inteligencia emocional en el puesto de trabajo. T&eacute;cnicas de negociaci&oacute;n y gesti&oacute;n comercial.", peso: 0.16891892, tema: 32 },
    T33: { area: "B1", titulo: "Metodolog&iacute;as predictivas para la gesti&oacute;n de proyectos.", tituloLargo: "Metodolog&iacute;as predictivas para la gesti&oacute;n de proyectos: GANTT, PERT.", peso: 0.5067568, tema: 33 },
    T34: { area: "B1", titulo: "Metodolog&iacute;as lean.", tituloLargo: "Metodolog&iacute;as &aacute;giles para la gesti&oacute;n de proyectos. Metodolog&iacute;as lean.", peso: 0.8445946, tema: 34 },
    T35: { area: "B1", titulo: "LOPD", tituloLargo: "La pol&iacute;tica de protecci&oacute;n de datos de car&aacute;cter personal. Normativa. La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.", peso: 1.8581082, tema: 35 },
    T36: { area: "B1", titulo: "Auditor&iacute;a inform&aacute;tica.", tituloLargo: "Auditor&iacute;a Inform&aacute;tica. Concepto y contenidos. Administraci&oacute;n, planeamiento, organizaci&oacute;n, infraestructura t&eacute;cnica y pr&aacute;cticas operativas.", peso: 0.33783785, tema: 36 },
    T37: { area: "B1", titulo: "Ley de contratos.", tituloLargo: "La gesti&oacute;n de la compra p&uacute;blica de tecnolog&iacute;as de la informaci&oacute;n.", peso: 0.8445946, tema: 37 },
    T38: { area: "B1", titulo: "Adquisici&oacute;n de sistemas.", tituloLargo: "Adquisici&oacute;n de sistemas: Estudio de alternativas, evaluaci&oacute;n de la viabilidad y toma de decisi&oacute;n.", peso: 0.16891892, tema: 38 },
    T39: { area: "B1", titulo: "Alternativas de decisi&oacute;n.", tituloLargo: "Alternativas b&aacute;sicas de decisi&oacute;n en el campo del equipamiento hardware y software.", peso: 0.33783785, tema: 39 },
    T40: { area: "B1", titulo: "Rentabilidad de las inversiones.", tituloLargo: "La rentabilidad de las inversiones en los proyectos de Tecnolog&iacute;as de la Informaci&oacute;n.", peso: 0.33783785, tema: 40 },
    T41: { area: "B1", titulo: "Protecci&oacute;n jur&iacute;dica del software.", tituloLargo: "La protecci&oacute;n jur&iacute;dica de los programas de ordenador. Los medios de comprobaci&oacute;n de la legalidad y control del software.", peso: 0.5067568, tema: 41 },
    T42: { area: "B1", titulo: "Accesibilidad y usabilidad.", tituloLargo: "Accesibilidad y usabilidad. W3C. Dise&ntilde;o universal. Dise&ntilde;o web adaptativo.", peso: 0.33783785, tema: 42 },
    T43: { area: "B1", titulo: "ENI", tituloLargo: "Interoperabilidad de sistemas (1). El Esquema Nacional de Interoperabilidad. Dimensiones de la interoperabilidad.", peso: 0.5067568, tema: 43 },
    T44: { area: "B1", titulo: "NTI", tituloLargo: "Interoperabilidad de sistemas (2). Las Normas T&eacute;cnicas de Interoperabilidad. Interoperabilidad de los documentos y expedientes electr&oacute;nicos y normas para el intercambio de datos entre Administraciones P&uacute;blicas.", peso: 0.33783785, tema: 44 },
    T45: { area: "B1", titulo: "An&aacute;lisis y gesti&oacute;n de riesgos.", tituloLargo: "Seguridad de sistemas (1). An&aacute;lisis y gesti&oacute;n de riesgos. Herramientas.", peso: 0.33783785, tema: 45 },
    T46: { area: "B1", titulo: "ENS.", tituloLargo: "Seguridad de sistemas (2). El Esquema Nacional de Seguridad. Adecuaci&oacute;n al Esquema Nacional de Seguridad. Estrategia Nacional de Seguridad. CCN-STIC.", peso: 0.5067568, tema: 46 },
    T47: { area: "B1", titulo: "Infraestructuras y servicios comunes.", tituloLargo: "Infraestructuras, servicios comunes y compartidos para la interoperabilidad entre AAPPs. Cl@ve, la Carpeta Ciudadana, el Sistema de Interconexi&oacute;n de Registros, la Plataforma de Intermediaci&oacute;n de Datos, y otros servicios.", peso: 2.5337837, tema: 47 },
    T48: { area: "B1", titulo: "Organizaci&oacute;nes de normalizaci&oacute;n.", tituloLargo: "Organizaciones internacionales y nacionales de normalizaci&oacute;n. Pruebas de conformidad y certificaci&oacute;n. El establecimiento de servicios de pruebas de conformidad.", peso: 0.33783785, tema: 48 },
    T49: { area: "B2", titulo: "Sistemas de altas prestaciones.", tituloLargo: "Sistemas de altas prestaciones. Grid Computing. Mainframe.", peso: 0.33783785, tema: 49 },
    T50: { area: "B2", titulo: "Equipos departamentales y servidores.", tituloLargo: "Equipos departamentales. Servidores. Medidas de seguridad para equipos departamentales y servidores. Centros de proceso de datos: dise&ntilde;o, implantaci&oacute;n y gesti&oacute;n.", peso: 0.16891892, tema: 50 },
    T51: { area: "B2", titulo: "Dispositivos personales y m&oacute;viles.", tituloLargo: "Dispositivos personales de PC y dispositivos m&oacute;viles. La conectividad de los dispositivos personales. Medidas de seguridad y gesti&oacute;n para equipos personales y dispositivos m&oacute;viles.", peso: 0.16891892, tema: 51 },
    T52: { area: "B2", titulo: "Cloud computing.", tituloLargo: "Cloud Computing. IaaS, PaaS, SaaS. Nubes privadas, p&uacute;blicas e h&iacute;bridas.", peso: 0.16891892, tema: 52 },
    T53: { area: "B2", titulo: "Sistemas de almacenamiento.", tituloLargo: "Sistemas de almacenamiento para sistemas grandes y departamentales. Dispositivos para tratamiento de informaci&oacute;n multimedia. Virtualizaci&oacute;n del almacenamiento. Copias de seguridad.", peso: 0.16891892, tema: 53 },
    T54: { area: "B2", titulo: "Sistemas de informaci&oacute;n multiusuario.", tituloLargo: "Tipos de sistemas de informaci&oacute;n multiusuario. Sistemas grandes, medios y peque&ntilde;os. Servidores de datos y de aplicaciones. Virtualizaci&oacute;n de servidores.", peso: 0.16891892, tema: 54 },
    T55: { area: "B2", titulo: "Arquitectura SOA.", tituloLargo: "El procesamiento cooperativo y la arquitectura cliente-servidor. Arquitectura SOA.", peso: 0.16891892, tema: 55 },
    T56: { area: "B2", titulo: "Sistemas Operativos.", tituloLargo: "Conceptos y fundamentos de sistemas operativos. Evoluci&oacute;n y tendencias.", peso: 0.16891892, tema: 56 },
    T57: { area: "B2", titulo: "UNIX-LINUX.", tituloLargo: "Sistemas operativos UNIX-LINUX. Fundamentos, administraci&oacute;n, instalaci&oacute;n, gesti&oacute;n.", peso: 0.33783785, tema: 57 },
    T58: { area: "B2", titulo: "Microsoft.", tituloLargo: "Sistemas operativos Microsoft. Fundamentos, administraci&oacute;n, instalaci&oacute;n, gesti&oacute;n.", peso: 0.16891892, tema: 58 },
    T59: { area: "B2", titulo: "Sistemas Operativos para m&oacute;viles.", tituloLargo: "Conceptos b&aacute;sicos de otros sistemas operativos: OS X, iOS, Android, z/OS. Sistemas operativos para dispositivos m&oacute;viles.", peso: 0.5067568, tema: 59 },
    T60: { area: "B2", titulo: "Sistemas de gesti&oacute;n de bases de datos.", tituloLargo: "Los sistemas de gesti&oacute;n de bases de datos SGBD. El modelo de referencia de ANSI.", peso: 0.5067568, tema: 60 },
    T61: { area: "B2", titulo: "El modelo relacional.", tituloLargo: "El modelo relacional. El lenguaje SQL. Normas y est&aacute;ndares para la interoperabilidad entre gestores de bases de datos relacionales.", peso: 0.6756757, tema: 61 },
    T62: { area: "B2", titulo: "Arquitectura de desarrollo en la web.", tituloLargo: "Arquitectura de desarrollo en la web. Desarrollo web front-end. Scripts de cliente. Frameworks. UX. Desarrollo web en servidor, conexi&oacute;n a bases de datos e interconexi&oacute;n con sistemas y servicios.", peso: 0.5067568, tema: 62 },
    T63: { area: "B2", titulo: "Entorno de desarrollo Microsoft.NET.", tituloLargo: "Entorno de desarrollo Microsoft.NET.", peso: 0.8445946, tema: 63 },
    T64: { area: "B2", titulo: "Entorno de desarrollo JAVA.", tituloLargo: "Entorno de desarrollo JAVA.", peso: 0.8445946, tema: 64 },
    T65: { area: "B2", titulo: "Entorno de desarrollo PHP.", tituloLargo: "Entorno de desarrollo PHP.", peso: 0.33783785, tema: 65 },
    T66: { area: "B2", titulo: "Software de c&oacute;digo abierto y libre.", tituloLargo: "Software de c&oacute;digo abierto. Software libre. Conceptos base. Aplicaciones en entorno ofim&aacute;tico y servidores Web.", peso: 0.5067568, tema: 66 },
    T67: { area: "B2", titulo: "Inteligencia artificial.", tituloLargo: "Inteligencia artificial: la orientaci&oacute;n heur&iacute;stica, inteligencia artificial distribuida, agentes inteligentes.", peso: 0.16891892, tema: 67 },
    T68: { area: "B2", titulo: "Gesti&oacute;n del conocimiento.", tituloLargo: "Gesti&oacute;n del conocimiento: representaci&oacute;n del conocimiento. Sistemas expertos. Herramientas.", peso: 0.16891892, tema: 68 },
    T69: { area: "B2", titulo: "Sistemas CRM y ERP.", tituloLargo: "Sistemas CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning). Generaci&oacute;n de informes a la Direcci&oacute;n.", peso: 0.16891892, tema: 69 },
    T70: { area: "B2", titulo: "E-learning.", tituloLargo: "E-learning: Conceptos, herramientas, sistemas de implantaci&oacute;n y normalizaci&oacute;n.", peso: 0.33783785, tema: 70 },
    T71: { area: "B2", titulo: "Los sistemas GIS.", tituloLargo: "Los sistemas de informaci&oacute;n geogr&aacute;fica. Conceptos y funcionalidad b&aacute;sicos.", peso: 0.5067568, tema: 71 },
    T72: { area: "B2", titulo: "Datawarehouse y miner&iacute;a de datos.", tituloLargo: "Gesti&oacute;n de los datos corporativos. Almac&eacute;n de datos (Data-Warehouse). Arquitectura OLAP. Miner&iacute;a de datos.", peso: 0.8445946, tema: 72 },
    T73: { area: "B2", titulo: "Big Data.", tituloLargo: "Big Data. Captura, an&aacute;lisis, transformaci&oacute;n, almacenamiento y explotaci&oacute;n de conjuntos masivos de datos. Entornos Hadoop o similares. Bases de datos NoSQL.", peso: 0.8445946, tema: 73 },
    T74: { area: "B2", titulo: "Lenguajes de marcado.", tituloLargo: "Lenguajes y herramientas para la utilizaci&oacute;n de redes globales. HTML, CSS y XML. Navegadores web y compatibilidad con est&aacute;ndares.", peso: 0.6756757, tema: 74 },
    T75: { area: "B2", titulo: "Comercio electr&oacute;nico.", tituloLargo: "Comercio electr&oacute;nico. Mecanismos de pago. Gesti&oacute;n del negocio. Factura electr&oacute;nica. Pasarelas de pago.", peso: 0.5067568, tema: 75 },
    T76: { area: "B2", titulo: "El cifrado.", tituloLargo: "El cifrado. Algoritmos de cifrado sim&eacute;tricos y asim&eacute;tricos. La funci&oacute;n hash. El notariado.", peso: 0.5067568, tema: 76 },
    T77: { area: "B2", titulo: "Identificaci&oacute;n y firma electr&oacute;nica I.", tituloLargo: "Identificaci&oacute;n y firma electr&oacute;nica (1) Marco europeo y nacional. Certificados digitales. Claves privadas, p&uacute;blicas y concertadas. Formatos de firma electr&oacute;nica. Protocolos de directorio basados en LDAP y X.500. Otros servicios.", peso: 0.5067568, tema: 77 },
    T78: { area: "B2", titulo: "Identificaci&oacute;n y firma electr&oacute;nica II.", tituloLargo: "Identificaci&oacute;n y firma electr&oacute;nica (2) Prestaci&oacute;n de servicios p&uacute;blicos y privados. Infraestructura de clave p&uacute;blica (PKI). Mecanismos de identificaci&oacute;n y firma: &laquo;Smart Cards&raquo;, DNI electr&oacute;nico, mecanismos biom&eacute;tricos.", peso: 0.5067568, tema: 78 },
    T79: { area: "B2", titulo: "Adaptaci&oacute;n LOPD.", tituloLargo: "Adaptaci&oacute;n de aplicaciones y entornos a los requisitos de la normativa de protecci&oacute;n de datos seg&uacute;n los niveles de seguridad. Herramientas de cifrado y auditor&iacute;a.", peso: 0.16891892, tema: 79 },
    T80: { area: "B2", titulo: "El tratamiento de im&aacute;genes.", tituloLargo: "El tratamiento de im&aacute;genes. Tecnolog&iacute;as de digitalizaci&oacute;n y de impresi&oacute;n. Impresi&oacute;n 3D.", peso: 0.16891892, tema: 80 },
    T81: { area: "B2", titulo: "Reconocimiento &oacute;ptico de caracteres.", tituloLargo: "Reconocimiento &oacute;ptico de caracteres (OCR, ICR). Reconocimiento biom&eacute;trico.", peso: 0.16891892, tema: 81 },
    T82: { area: "B3", titulo: "Modelos de ciclo de vida.", tituloLargo: "El ciclo de vida de los sistemas de informaci&oacute;n. Modelos del ciclo de vida.", peso: 0.5067568, tema: 82 },
    T83: { area: "B3", titulo: "Plan de sistemas de informaci&oacute;n.", tituloLargo: "Planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n y de comunicaciones. El plan de sistemas de informaci&oacute;n.", peso: 0.16891892, tema: 83 },
    T84: { area: "B3", titulo: "An&aacute;lisis de sistemas y metodolog&iacute;as &aacute;giles.", tituloLargo: "An&aacute;lisis funcional de sistemas, casos de uso e historias de usuario. Metodolog&iacute;as de desarrollo de sistemas. Metodolog&iacute;as &aacute;giles: Scrum y Kanban.", peso: 0.6756757, tema: 84 },
    T85: { area: "B3", titulo: "An&aacute;lisis del dominio de los sistemas.", tituloLargo: "An&aacute;lisis del dominio de los sistemas: Modelado de dominio, modelo entidad relaci&oacute;n y modelos de clases.", peso: 0.33783785, tema: 85 },
    T86: { area: "B3", titulo: "An&aacute;lisis din&aacute;mico de sistemas.", tituloLargo: "An&aacute;lisis din&aacute;mico de sistemas: Modelado de procesos, modelado din&aacute;mico y BPMN (Business Process Model and Notation).", peso: 0.33783785, tema: 86 },
    T87: { area: "B3", titulo: "An&aacute;lisis de aspectos no funcionales.", tituloLargo: "An&aacute;lisis de aspectos no funcionales: Rendimiento, seguridad, privacidad.", peso: 0.16891892, tema: 87 },
    T88: { area: "B3", titulo: "Dise&ntilde;o arquitect&oacute;nico de sistemas.", tituloLargo: "Dise&ntilde;o arquitect&oacute;nico de sistemas. Diagramas de despliegue.", peso: 0.33783785, tema: 88 },
    T89: { area: "B3", titulo: "T&eacute;cnicas de dise&ntilde;o de software.", tituloLargo: "T&eacute;cnicas de dise&ntilde;o de software. Dise&ntilde;o por capas y patrones de dise&ntilde;o.", peso: 0.16891892, tema: 89 },
    T90: { area: "B3", titulo: "Prototipos en el desarrollo de sistemas.", tituloLargo: "La elaboraci&oacute;n de prototipos en el desarrollo de sistemas. Dise&ntilde;o de interfaces de aplicaciones.", peso: 0.16891892, tema: 90 },
    T91: { area: "B3", titulo: "Metrica", tituloLargo: "La metodolog&iacute;a de planificaci&oacute;n y desarrollo de Sistemas de Informaci&oacute;n M&eacute;trica.", peso: 1.1824324, tema: 91 },
    T92: { area: "B3", titulo: "Pruebas de software.", tituloLargo: "Procesos de pruebas y garant&iacute;a de calidad en el desarrollo de software. Planificaci&oacute;n, estrategia de pruebas y est&aacute;ndares. Niveles, t&eacute;cnicas y herramientas de pruebas de software. Criterios de aceptaci&oacute;n de software.", peso: 0.6756757, tema: 92 },
    T93: { area: "B3", titulo: "Evaluaci&oacute;n de la calidad del software.", tituloLargo: "M&eacute;tricas y evaluaci&oacute;n de la calidad del software. La implantaci&oacute;n de la funci&oacute;n de calidad.", peso: 0.5067568, tema: 93 },
    T94: { area: "B3", titulo: "Estimaci&oacute;n de recursos.", tituloLargo: "La estimaci&oacute;n de recursos y esfuerzo en el desarrollo de sistemas de informaci&oacute;n.", peso: 0.5067568, tema: 94 },
    T95: { area: "B3", titulo: "Migraci&oacute;n de aplicaciones y ajuste dimensional.", tituloLargo: "La migraci&oacute;n de aplicaciones en el marco de procesos de ajuste dimensional y por obsolescencia t&eacute;cnica. Gesti&oacute;n de la configuraci&oacute;n y de versiones. Gesti&oacute;n de entornos.", peso: 0.33783785, tema: 95 },
    T96: { area: "B3", titulo: "Mantenimiento de sistemas.", tituloLargo: "Mantenimiento de sistemas. Mantenimiento predictivo, adaptativo y correctivo. Planificaci&oacute;n y gesti&oacute;n del mantenimiento.", peso: 0.33783785, tema: 96 },
    T97: { area: "B3", titulo: "Reingenier&iacute;a de sistemas.", tituloLargo: "Reingenier&iacute;a de sistemas de informaci&oacute;n e ingenier&iacute;a inversa.", peso: 0.33783785, tema: 97 },
    T98: { area: "B3", titulo: "Calidad de los servicios.", tituloLargo: "La calidad en los servicios de informaci&oacute;n. El Modelo EFQM y la Gu&iacute;a para los servicios ISO 9004.", peso: 0.5067568, tema: 98 },
    T99: { area: "B3", titulo: "Gesti&oacute;n documental.", tituloLargo: "Gesti&oacute;n documental. Gesti&oacute;n de contenidos. Tecnolog&iacute;as CMS y DMS de alta implantaci&oacute;n.", peso: 0.16891892, tema: 99 },
    T100: { area: "B3", titulo: "Sistemas de recuperaci&oacute;n de la informaci&oacute;n.", tituloLargo: "Sistemas de recuperaci&oacute;n de la informaci&oacute;n. Pol&iacute;ticas, procedimientos y m&eacute;todos para la conservaci&oacute;n de la informaci&oacute;n.", peso: 0.16891892, tema: 100 },
    T101: { area: "B3", titulo: "ITIL y COBIT.", tituloLargo: "Planificaci&oacute;n y control de las TIC: Gesti&oacute;n de servicios e infraestructuras TIC, gesti&oacute;n del valor de las TIC. Acuerdos de Nivel de Servicio. Gesti&oacute;n de incidencias. Bases conceptuales de ITIL (IT Infrastructure Library), y CoBIT (Control Objetives for Information and Related Technology), objetivos de control y m&eacute;tricas.", peso: 1.3513514, tema: 101 },
    T102: { area: "B4", titulo: "Redes de telecomunicaciones.", tituloLargo: "Redes de telecomunicaciones. Conceptos. Medios de transmisi&oacute;n. Conmutaci&oacute;n de circuitos y paquetes. Protocolos de encaminamiento. Infraestructuras de acceso. Interconexi&oacute;n de redes. Calidad de servicio.", peso: 0.16891892, tema: 102 },
    T103: { area: "B4", titulo: "Internet.", tituloLargo: "La red Internet y los servicios b&aacute;sicos.", peso: 0.16891892, tema: 103 },
    T104: { area: "B4", titulo: "Cableado.", tituloLargo: "Sistemas de cableado y equipos de interconexi&oacute;n de redes.", peso: 0.33783785, tema: 104 },
    T105: { area: "B4", titulo: "Modelo OSI.", tituloLargo: "El modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) de ISO: arquitectura, capas, interfaces, protocolos, direccionamiento y encaminamiento.", peso: 0.5067568, tema: 105 },
    T106: { area: "B4", titulo: "Tecnolog&iacute;as de acceso.", tituloLargo: "Tecnolog&iacute;as de acceso: Fibra (GPON, FTTH), M&oacute;viles (LTE), Inal&aacute;mbrica.", peso: 0.33783785, tema: 106 },
    T107: { area: "B4", titulo: "Redes de transporte.", tituloLargo: "Redes de transporte: JDSxWDM, MPLS. Redes de agregaci&oacute;n: ATM, Carrier Ethernet - VPLS (H-VPLS).", peso: 0.6756757, tema: 107 },
    T108: { area: "B4", titulo: "Redes inal&aacute;mbricas.", tituloLargo: "Redes inal&aacute;mbricas: El est&aacute;ndar IEEE 802.11.Caracter&iacute;sticas funcionales y t&eacute;cnicas. Sistemas de expansi&oacute;n del espectro. Sistemas de acceso. Autenticaci&oacute;n. Modos de operaci&oacute;n. Bluetooth. Seguridad, normativa reguladora.", peso: 0.8445946, tema: 108 },
    T109: { area: "B4", titulo: "Redes IP.", tituloLargo: "Redes IP: Arquitectura de redes, encaminamiento y calidad de servicio. Transici&oacute;n y convivencia IPv4 - IPv6. Funcionalidades espec&iacute;ficas de IPv6.", peso: 0.33783785, tema: 109 },
    T110: { area: "B4", titulo: "Redes de nueva generaci&oacute;n.", tituloLargo: "Redes de nueva generaci&oacute;n y servicios convergentes (NGN/IMS). VoIP, ToIP y Comunicaciones Unificadas.", peso: 0.33783785, tema: 110 },
    T111: { area: "B4", titulo: "Transformaci&oacute;n digital.", tituloLargo: "La Transformaci&oacute;n Digital e Industria 4.0: Ciudades inteligentes. Internet de las Cosas (IoT).", peso: 0.6756757, tema: 111 },
    T112: { area: "B4", titulo: "Redes de &aacute;rea local.", tituloLargo: "Redes de &aacute;rea local. Arquitectura. Tipolog&iacute;a. Medios de transmisi&oacute;n. M&eacute;todos de acceso. Dispositivos de interconexi&oacute;n. Gesti&oacute;n de dispositivos. Administraci&oacute;n de redes LAN. Gesti&oacute;n de usuarios en redes locales. Monitorizaci&oacute;n y control de tr&aacute;fico. Gesti&oacute;n SNMP. Configuraci&oacute;n y gesti&oacute;n de redes virtuales (VLAN). Redes de &aacute;rea extensa.", peso: 0.6756757, tema: 112 },
    T113: { area: "B4", titulo: "Intranet y extranet.", tituloLargo: "Arquitectura de las redes Intranet y Extranet. Concepto, estructura y caracter&iacute;sticas. Su implantaci&oacute;n en las organizaciones. Modelo de capas: Servidores de aplicaciones, servidores de datos, granjas de servidores.", peso: 0.33783785, tema: 113 },
    T114: { area: "B4", titulo: "Redes p&uacute;blicas.", tituloLargo: "Las redes p&uacute;blicas de transmisi&oacute;n de datos. La red SARA. La red sTESTA. Planificaci&oacute;n y gesti&oacute;n de redes.", peso: 0.33783785, tema: 114 },
    T115: { area: "B4", titulo: "CATV.", tituloLargo: "Telecomunicaciones por cable (CATV). Estructura de la red de cable. Operadores del mercado. Servicios de red.", peso: 0.16891892, tema: 115 },
    T116: { area: "B4", titulo: "Correo electr&oacute;nico.", tituloLargo: "El correo electr&oacute;nico. Servicios de mensajer&iacute;a. Servicios de directorio.", peso: 0.33783785, tema: 116 },
    T117: { area: "B4", titulo: "Comunicaciones m&oacute;viles.", tituloLargo: "Las comunicaciones m&oacute;viles. Generaciones de tecnolog&iacute;as de telefon&iacute;a m&oacute;vil.", peso: 0.5067568, tema: 117 },
    T118: { area: "B4", titulo: "Aplicaciones m&oacute;viles.", tituloLargo: "Aplicaciones m&oacute;viles. Caracter&iacute;sticas, tecnolog&iacute;as, distribuci&oacute;n y tendencias.", peso: 0.33783785, tema: 118 },
    T119: { area: "B4", titulo: "Seguridad en redes.", tituloLargo: "La seguridad en redes. Tipos de ataques y herramientas para su prevenci&oacute;n: cortafuegos, control de accesos e intrusiones, t&eacute;cnicas criptogr&aacute;ficas, etc. Medidas espec&iacute;ficas para las comunicaciones m&oacute;viles.", peso: 1.3513514, tema: 119 },
    T120: { area: "B4", titulo: "Seguridad en el nivel de aplicaci&oacute;n.", tituloLargo: "La seguridad en el nivel de aplicaci&oacute;n. Tipos de ataques y protecci&oacute;n de servicios web, bases de datos e interfaces de usuario.", peso: 1.6891892, tema: 120 },
    T121: { area: "B4", titulo: "Regulaci&oacute;n de las telecomunicaciones.", tituloLargo: "Normas reguladoras de las telecomunicaciones. La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC): Organizaci&oacute;n, funciones y competencia en el &aacute;mbito de las telecomunicaciones.", peso: 1.6891892, tema: 121 },
    T122: { area: "B4", titulo: "Videoconferencia.", tituloLargo: "Sistemas de videoconferencia. Herramientas de trabajo en grupo. Dimensionamiento y calidad de servicio en las comunicaciones y acondicionamiento de salas y equipos. Streaming de video.", peso: 0.33783785, tema: 122 },
    T123: { area: "B4", titulo: "Single sign-on.", tituloLargo: "Acceso remoto a sistemas corporativos: gesti&oacute;n de identidades, single sign-on y teletrabajo.", peso: 0.16891892, tema: 123 },
    T124: { area: "B4", titulo: "Virtualizaci&oacute;n de sistemas.", tituloLargo: "Virtualizaci&oacute;n de sistemas y de centros de datos. Virtualizaci&oacute;n de puestos de trabajo. Maquetas de terminales Windows y de servidores Linux.", peso: 0.5067568, tema: 124 },
    T125: { area: "B4", titulo: "Trabajo colaborativo y redes sociales.", tituloLargo: "Herramientas de trabajo colaborativo y Redes sociales. La Gu&iacute;a de comunicaci&oacute;n digital de la Administraci&oacute;n del Estado.", peso: 0.16891892, tema: 125 },
};

function initTemasArray()
{ 
    var theArr = Array.apply(null, Array(Object.keys(infoTemas).length)).map(Number.prototype.valueOf, 0);
    return theArr;
};
