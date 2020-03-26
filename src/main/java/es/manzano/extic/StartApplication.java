package es.manzano.extic;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;
import java.util.HashSet;
import java.util.Set;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

import org.apache.commons.text.StringEscapeUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import es.manzano.extic.dto.Pregunta;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

@SpringBootApplication
public class StartApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(StartApplication.class);

	@Autowired
	private PreguntaRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(StartApplication.class, args);
	}

	@Override
	public void run(String... args) {
	
		//esto pasa los test de las excel a un BBDD y realiza consultas para sacarlos en funcion de lso temas necesitados
		//principalmente pasa los de las excel clasificadas a mano de lso PDFs
		// fromExcel2BD();
		
		//esta funiconalidadtransforma los test de preparatic en formato JS a uan excel para poder usarlo con lo anterior 
		//fromJS2Excel();
		//
		//esta funiconalidadtransforma los test de preparatic de html a la excel . Estos test no tiene respuesta
		fromHTML2Excel();
	}

	
	private void fromHTML2Excel() {
	
	try {
		Set<Integer> tabla = new HashSet<Integer>();
		Workbook wb = new XSSFWorkbook();
		CreationHelper createHelper = wb.getCreationHelper();
		Sheet sheet = wb.createSheet("test-PREPARATIC");

		int contador = 0;
		Row cabecera = sheet.createRow(contador++);

		cabecera.createCell(0).setCellValue("Name of the file");
		cabecera.createCell(1).setCellValue("Order number of the block");
		cabecera.createCell(2).setCellValue("Order number of the question in the test");
		cabecera.createCell(3).setCellValue("Text of the question");
		cabecera.createCell(4).setCellValue("Have attachs?");
		cabecera.createCell(5).setCellValue("Text of the first answer (a)");
		cabecera.createCell(6).setCellValue("Text of the Second answer (b)");
		cabecera.createCell(7).setCellValue("Text of the Third answer (c)");
		cabecera.createCell(8).setCellValue("Text of the Fourth answer (d)");
		cabecera.createCell(9).setCellValue("Correct Answer");
		cabecera.createCell(10).setCellValue("Temary A");
		cabecera.createCell(11).setCellValue("Temary B");
		cabecera.createCell(12).setCellValue("Bloque PREPARATIC");
		cabecera.createCell(13).setCellValue("Temary PREPARATIC");
		cabecera.createCell(14).setCellValue("id PREPARATIC");
		cabecera.createCell(15).setCellValue("Comentario");

		
			for (File f : (new ClassPathResource("testHTML").getFile()).listFiles()) {
			   Document doc = Jsoup.parse(f, null);
			   String documentName =f.getName(); 
			   log.info("Procesando " + documentName);			   
			   Elements divs = doc.select(".question");			   
			   for (Element div : divs) {
								Row row = sheet.createRow(contador++);
								row.createCell(0).setCellValue(documentName);
								
								if (div.select(".questiontext").first().hasText())
								   {
									row.createCell(3).setCellValue(div.select(".questiontext").first().text().trim());
								   }

								   if (div.select(".questiontext").first().nextElementSibling().hasText())
								   {
									   row.createCell(3).setCellValue(div.select(".questiontext").first().nextElementSibling().text().trim());
								   }				   
								   	else
								   		{
								   		row.createCell(3).setCellValue(div.select(".questiontext").first().nextElementSibling().nextElementSibling().text().trim());
								   		}
			   String id = null;
			   int numeroPregunta= 0;
			   for (Element li : div.select("ul li")) {				   
				   row.createCell(5+(numeroPregunta++)).setCellValue(li.text());				   
				   id = li.childNode(0).attr("name").replace("quest_", "");			   
				   }			   			   
				row.createCell(14).setCellValue(id);			   
			   }
			   }
			OutputStream fileOut = new FileOutputStream("salidaTestHTML.xlsx");
			wb.write(fileOut);			
	}catch (Exception e) {
		log.error("Error",e);
	}
		
}
	
	
	
	private void fromHTML2TXT() {

//		<!-- question: 75592  name: ¿A cuánto asciende la multa para infracciones graves según la LOPD? -->
//		<div class="question">
//		<h3>¿A cuánto asciende la multa para infracciones graves según la LOPD?</h3>
//		<p class="questiontext"><p>¿A cuánto asciende la multa para infracciones graves según la LOPD?</p></p>
//		<ul class="multichoice">
//		  <li><input name="quest_75592" type="radio" value="De 900 a 40.000 euros." />De 900 a 40.000 euros.</li>
//		  <li><input name="quest_75592" type="radio" value="De 40.000 a 300.000 euros." />De 40.000 a 300.000 euros.</li>
//		  <li><input name="quest_75592" type="radio" value="De 300.001 a 600.000 euros." />De 300.001 a 600.000 euros.</li>
//		  <li><input name="quest_75592" type="radio" value="Ninguna de las anteriores." />Ninguna de las anteriores.</li>
//		</ul>
//		</div>
		
		try {
			for (File f : (new ClassPathResource("testHTML").getFile()).listFiles()) {
			   Document doc = Jsoup.parse(f, null);
			   Elements divs = doc.select(".question");			   
			   for (Element div : divs) {
				   if (div.select(".questiontext").first().hasText())
				   {
					   System.out.println(div.select(".questiontext").first().text().trim());
				   }
				   if (div.select(".questiontext").first().nextElementSibling().hasText())
				   {
					   System.out.println(div.select(".questiontext").first().nextElementSibling().text().trim());
				   }
				   else
				   {
					   System.out.println(div.select(".questiontext").first().nextElementSibling().nextElementSibling().text().trim());
				   }
				   
				   
			   
			   String id = null;
			   for (Element li : div.select("ul li")) {
				   System.out.println("-" +li.text());
				   id = li.childNode(0).attr("name").replace("quest_", "");			   
				   }			   			   
			   System.out.println(id);			   
			   }
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
			}
		
		
	}

	private void fromJS2Excel() {
		try {
			Set<Integer> tabla = new HashSet<Integer>();
			Workbook wb = new XSSFWorkbook();
			CreationHelper createHelper = wb.getCreationHelper();
			Sheet sheet = wb.createSheet("test-PREPARATIC");

			int contador = 0;
			Row cabecera = sheet.createRow(contador++);

			cabecera.createCell(0).setCellValue("Name of the file");
			cabecera.createCell(1).setCellValue("Order number of the block");
			cabecera.createCell(2).setCellValue("Order number of the question in the test");
			cabecera.createCell(3).setCellValue("Text of the question");
			cabecera.createCell(4).setCellValue("Have attachs?");
			cabecera.createCell(5).setCellValue("Text of the first answer (a)");
			cabecera.createCell(6).setCellValue("Text of the Second answer (b)");
			cabecera.createCell(7).setCellValue("Text of the Third answer (c)");
			cabecera.createCell(8).setCellValue("Text of the Fourth answer (d)");
			cabecera.createCell(9).setCellValue("Correct Answer");
			cabecera.createCell(10).setCellValue("Temary A");
			cabecera.createCell(11).setCellValue("Temary B");
			cabecera.createCell(12).setCellValue("Bloque PREPARATIC");
			cabecera.createCell(13).setCellValue("Temary PREPARATIC");
			cabecera.createCell(14).setCellValue("id PREPARATIC");
			cabecera.createCell(15).setCellValue("Comentario");

			for (File f : (new ClassPathResource("testJS").getFile()).listFiles()) {

				String documentName = f.getName();

				if (f.getName().equalsIgnoreCase("info_tests.js")) {
					// log.info(f.getName());
					ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
					engine.eval(new FileReader(f));

					ScriptObjectMirror salida = (ScriptObjectMirror) engine.eval("infoBloques");
					for (String valor : salida.getOwnKeys(true)) {
						System.out.println(valor + " - "
								+ StringEscapeUtils
										.unescapeHtml4((String) ((ScriptObjectMirror) salida.get(valor)).get("area"))
								+ " - " + StringEscapeUtils.unescapeHtml4(
										(String) ((ScriptObjectMirror) salida.get(valor)).get("titulo")));
					}

					salida = (ScriptObjectMirror) engine.eval("infoTemas");
					for (String valor : salida.getOwnKeys(true)) {
						System.out.println(valor + " - "
								+ (Integer) ((ScriptObjectMirror) salida.get(valor)).get("tema") + " - "
								+ StringEscapeUtils
										.unescapeHtml4((String) ((ScriptObjectMirror) salida.get(valor)).get("area"))
								+ " - "
								+ StringEscapeUtils
										.unescapeHtml4((String) ((ScriptObjectMirror) salida.get(valor)).get("titulo"))
								+ " - " + StringEscapeUtils.unescapeHtml4(
										(String) ((ScriptObjectMirror) salida.get(valor)).get("tituloLargo")));
					}

				}

				// if (documentName.equalsIgnoreCase("test_0001.js"))
				if (documentName.startsWith("test")) {

					ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
					engine.eval(new FileReader(f));

//				questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
//				 choices[1]= new Array();
//				 choices[1][0] = "Pueden verse los mismos datos por diferentes usuarios";
//				 choices[1][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
//				 choices[1][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
//				 choices[1][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
//				 answers[1] = 2;
//				 units[1] = ['60'];
//				 blocks[1] = ['B2'];
//				 comments[1] = "Id Pregunta: 2602. ";
//				 preguntaids[1] = 2602

					ScriptObjectMirror questions = (ScriptObjectMirror) engine.eval("questions");
					ScriptObjectMirror choices = (ScriptObjectMirror) engine.eval("choices");
					ScriptObjectMirror answers = (ScriptObjectMirror) engine.eval("answers");
					ScriptObjectMirror units = (ScriptObjectMirror) engine.eval("units");
					ScriptObjectMirror blocks = (ScriptObjectMirror) engine.eval("blocks");
					ScriptObjectMirror comments = (ScriptObjectMirror) engine.eval("comments");
					ScriptObjectMirror preguntaids = (ScriptObjectMirror) engine.eval("preguntaids");

					log.info("Procesando " + documentName);

//					row.createCell(0).setCellValue("Name of the file");
//					row.createCell(1).setCellValue("Order number of the block");
//					row.createCell(2).setCellValue("Order number of the question in the test");
//					row.createCell(3).setCellValue("Text of the question");
//					row.createCell(4).setCellValue("Have attachs?");
//					row.createCell(5).setCellValue("Text of the first answer (a)");
//					row.createCell(6).setCellValue("Text of the Second answer (b)");
//					row.createCell(7).setCellValue("Text of the Third answer (c)");
//					row.createCell(8).setCellValue("Text of the Fourth answer (d)");
//					row.createCell(9).setCellValue("Correct Answer");
//					row.createCell(10).setCellValue("Temary A");
//					row.createCell(11).setCellValue("Temary B");
//					row.createCell(12).setCellValue("Bloque PREPARATIC");
//					row.createCell(13).setCellValue("Temary PREPARATIC");
//					row.createCell(14).setCellValue("id PREPARATIC");

					for (String indice : questions.getOwnKeys(true)) {
						if (!indice.equalsIgnoreCase("length")) {

							Integer id = (Integer) preguntaids.get(indice);

							if (!(tabla.contains(id))) {
								Row row = sheet.createRow(contador++);
								row.createCell(0).setCellValue(documentName);
								row.createCell(14).setCellValue(id);
								String bloques = "";
								for (int i = 0; i < (Integer) ((ScriptObjectMirror) blocks.get(indice))
										.get("length"); i++) {
									if (i > 0)
										bloques += ",";
									bloques += ((ScriptObjectMirror) blocks.get(indice)).get(String.valueOf(i));
								}
								// System.out.println(bloques);
								row.createCell(12).setCellValue(bloques);

								String temas = "";
								for (int i = 0; i < (Integer) ((ScriptObjectMirror) units.get(indice))
										.get("length"); i++) {
									if (i > 0)
										temas += ",";
									temas += ((ScriptObjectMirror) units.get(indice)).get(String.valueOf(i));
									// System.out.println(StringEscapeUtils.unescapeHtml4((String)((ScriptObjectMirror)choices.get(indice)).get(String.valueOf(i))));
								}
								// System.out.println(temas);
								row.createCell(13).setCellValue(temas);

								row.createCell(3)
										.setCellValue(StringEscapeUtils.unescapeHtml4((String) questions.get(indice)));

								// System.out.println((Integer)preguntaids.get(indice));
								// System.out.println(StringEscapeUtils.unescapeHtml4((String)questions.get(indice)));
								for (int i = 0; i < (Integer) ((ScriptObjectMirror) choices.get(indice))
										.get("length"); i++) {

									// System.out.println(StringEscapeUtils.unescapeHtml4((String)((ScriptObjectMirror)choices.get(indice)).get(String.valueOf(i))));
									row.createCell(5 + i)
											.setCellValue(StringEscapeUtils
													.unescapeHtml4((String) ((ScriptObjectMirror) choices.get(indice))
															.get(String.valueOf(i))));
								}
								// System.out.println((Integer)answers.get(indice));
								row.createCell(9).setCellValue(getLetrarespuesta((Integer) answers.get(indice)));
								// System.out.println(StringEscapeUtils.unescapeHtml4((String)comments.get(indice)));
								row.createCell(15)
										.setCellValue(StringEscapeUtils.unescapeHtml4((String) comments.get(indice)));
								// System.out.println();

								tabla.add(id);
							}
						}
					}
				}
			}

			OutputStream fileOut = new FileOutputStream("salidaTestJS.xlsx");
			wb.write(fileOut);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	private void fromExcel2BD() {
		String[] filenames = { "estado1.xlsx", "estado2.xlsx"
				// "U1-Examenes-1.xlsx",
				// "U1-Examenes-2.xlsx",
				// "U1-Examenes-3.xlsx"
				// ,"U2-Examenes-1.xlsx"
				// ,"U2-Examenes-2.xlsx"
				// ,"U2-Examenes-3.xlsx"
		};

		for (String filename : filenames) {
			log.info("Procesando " + filename);

			try {
				FileInputStream file = new FileInputStream(new ClassPathResource("data/" + filename).getFile());
				Workbook workbook = new XSSFWorkbook(file);

				// Sheet sheet = workbook.getSheetAt(0);{
				for (Sheet sheet : workbook) {
					// se elimina la cabecera
					sheet.removeRow(sheet.getRow(0));
					for (Row row : sheet) {
//					for (Cell cell : row) {
//						System.out.println(getStringCellValue(cell));
//					}

						String enA = getStringCellValue(row.getCell(10));
						String enB = getStringCellValue(row.getCell(11));
						String enATemp = enA.replace(".", "");
						String enATemp2 = enATemp.replace(" ", "");

						String enBTemp = enB.replace(".", "");
						String enBTemp2 = enBTemp.replace(" ", "");

						for (String tema : enATemp2.split(",")) {
							repository.save(new Pregunta(getStringCellValue(row.getCell(0)),
									getStringCellValue(row.getCell(1)), getStringCellValue(row.getCell(2)),
									getStringCellValue(row.getCell(3)), getStringCellValue(row.getCell(4)),
									getStringCellValue(row.getCell(5)), getStringCellValue(row.getCell(6)),
									getStringCellValue(row.getCell(7)), getStringCellValue(row.getCell(8)),
									getStringCellValue(row.getCell(9)), tema, "", "" // el tipo aun no aparece en la
																						// excel
							));
						}
						for (String tema : enBTemp2.split(",")) {
							repository.save(new Pregunta(getStringCellValue(row.getCell(0)),
									getStringCellValue(row.getCell(1)), getStringCellValue(row.getCell(2)),
									getStringCellValue(row.getCell(3)), getStringCellValue(row.getCell(4)),
									getStringCellValue(row.getCell(5)), getStringCellValue(row.getCell(6)),
									getStringCellValue(row.getCell(7)), getStringCellValue(row.getCell(8)),
									getStringCellValue(row.getCell(9)), "", tema, "" // el tipo aun no aparece en la
																						// excel
							));
						}

					}
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

//		 repository.save(new Book("Java"));
//		 repository.findAll().forEach(x -> System.out.println(x));
//		 repository.findById(1l).ifPresent(x -> System.out.println(x));
//		 repository.findByName("Node").forEach(x -> System.out.println(x));

		String[] temasA = { "35", "58", "60", "61", "63", "64", "65", "67", "74", "75", "76", "77", "80", "81", "85",
				"87", "88", "89", "90", "91", "92", "97", "102", "107", "108", "110", "124", "125", "126" };
		for (String tema : temasA) {
			System.out.println("Preguntas A tema: " + tema + " _____________________________________________");

			repository.findByTemaA(tema).forEach(x -> {
				System.out.println(x.getExamen() + "-" + x.getNumeroPregunta() + " temaA:" + x.getTemaA() + " temaB:"
						+ x.getTemaB());
				System.out.println(x.getTexto());
				System.out.println("A.- " + x.getTextoOpcionA());
				System.out.println("B.- " + x.getTextoOpcionB());
				System.out.println("C.- " + x.getTextoOpcionC());
				System.out.println("D.- " + x.getTextoOpcionD());
				System.out.println("Respuesta: " + x.getRespuesta());
				System.out.println();
			});
		}

		String[] temasB = { "18", "22", "29", "31", "32", "33", "35", "41", "42", "44", "45", "47", "57", "60", "61" };
		for (String tema : temasB) {

			System.out.println("Preguntas B tema: " + tema + " _____________________________________________");

			repository.findByTemaB(tema).forEach(x -> {
				System.out.println(x.getExamen() + "-" + x.getNumeroPregunta() + " temaA:" + x.getTemaA() + " temaB:"
						+ x.getTemaB());
				System.out.println(x.getTexto());
				System.out.println("A.- " + x.getTextoOpcionA());
				System.out.println("B.- " + x.getTextoOpcionB());
				System.out.println("C.- " + x.getTextoOpcionC());
				System.out.println("D.- " + x.getTextoOpcionD());
				System.out.println("Respuesta: " + x.getRespuesta());
				System.out.println();
			});
		}

	}

	public String getStringCellValue(Cell cell) {
		if (cell != null) {
			switch (cell.getCellType()) {
			case STRING:
				return cell.getRichStringCellValue().getString();
			case NUMERIC:
				if (DateUtil.isCellDateFormatted(cell)) {
					return cell.getDateCellValue().toString();
				} else {
					return String.valueOf(cell.getNumericCellValue());
				}
			case BOOLEAN:
				return String.valueOf(cell.getBooleanCellValue());
			case FORMULA:
				return cell.getCellFormula();
			case BLANK:
				return "";
			default:
				return null;
			}
		}
		return "";

	}

	private String getLetrarespuesta(Integer key) {
		switch (key) {
		case 0:
			return "a";
		case 1:
			return "b";
		case 2:
			return "c";
		case 3:
			return "d";
		default:
			return "";
		}
	}

}