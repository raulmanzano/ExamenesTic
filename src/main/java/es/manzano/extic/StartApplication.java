package es.manzano.extic;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;

import es.manzano.extic.dto.Pregunta;

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
		String[] filenames = 
			{
			"estado1.xlsx","estado2.xlsx"
			//"U1-Examenes-1.xlsx",
			//"U1-Examenes-2.xlsx",
			//"U1-Examenes-3.xlsx"
			//,"U2-Examenes-1.xlsx"
			//,"U2-Examenes-2.xlsx"
			//,"U2-Examenes-3.xlsx"
			};
		
		for (String filename : filenames) {
			log.info("Procesando "+ filename);			
		
		try {
			FileInputStream file = new FileInputStream(new ClassPathResource("data/" + filename).getFile());
			Workbook workbook = new XSSFWorkbook(file);
			
			//Sheet sheet = workbook.getSheetAt(0);{
			for (Sheet sheet : workbook) {				
				//se elimina la cabecera	
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
	
					for (String tema: enATemp2.split(",") )
					{
						repository.save(new Pregunta(
								getStringCellValue(row.getCell(0)),
								getStringCellValue(row.getCell(1)),
								getStringCellValue(row.getCell(2)),
								getStringCellValue(row.getCell(3)),
								getStringCellValue(row.getCell(4)),
								getStringCellValue(row.getCell(5)),
								getStringCellValue(row.getCell(6)),
								getStringCellValue(row.getCell(7)),
								getStringCellValue(row.getCell(8)),
								getStringCellValue(row.getCell(9)),
								tema,
								"",
								"" // el tipo aun no aparece en la excel 
								));	
					}
					for (String tema: enBTemp2.split(",") )
					{
						repository.save(new Pregunta(
								getStringCellValue(row.getCell(0)),
								getStringCellValue(row.getCell(1)),
								getStringCellValue(row.getCell(2)),
								getStringCellValue(row.getCell(3)),
								getStringCellValue(row.getCell(4)),
								getStringCellValue(row.getCell(5)),
								getStringCellValue(row.getCell(6)),
								getStringCellValue(row.getCell(7)),
								getStringCellValue(row.getCell(8)),
								getStringCellValue(row.getCell(9)),
								"",
								tema,
								"" // el tipo aun no aparece en la excel 
								));	
					}
					
					
					
							
				}}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		}

//		 repository.save(new Book("Java"));
//		 repository.findAll().forEach(x -> System.out.println(x));
//		 repository.findById(1l).ifPresent(x -> System.out.println(x));
//		 repository.findByName("Node").forEach(x -> System.out.println(x));

		
		String[] temasA = {"35"
				,"58"
				,"60"
				,"61"
				,"63"
				,"64"
				,"65"
				,"67"
				,"74"
				,"75"
				,"76"
				,"77"
				,"80"
				,"81"
				,"85"
				,"87"
				,"88"
				,"89"
				,"90"
				,"91"
				,"92"
				,"97"
				,"102"
				,"107"
				,"108"
				,"110"
				,"124"
				,"125"
				,"126"};
		for (String tema : temasA)
		{
			System.out.println("Preguntas A tema: "+ tema + " _____________________________________________"); 
			
			 repository.findByTemaA(tema).forEach(x -> {
				 System.out.println(x.getExamen()+ "-" + x.getNumeroPregunta()+" temaA:"+x.getTemaA()+" temaB:"+x.getTemaB());
				 System.out.println(x.getTexto());
				 System.out.println("A.- "+x.getTextoOpcionA());
				 System.out.println("B.- "+x.getTextoOpcionB());
				 System.out.println("C.- "+x.getTextoOpcionC());
				 System.out.println("D.- "+x.getTextoOpcionD());
				 System.out.println("Respuesta: "+x.getRespuesta());
				 System.out.println();
			 });			
		}
	
		String[] temasB = {
				"18"
				,"22"
				,"29"
				,"31"
				,"32"
				,"33"
				,"35"
				,"41"
				,"42"
				,"44"
				,"45"
				,"47"
				,"57"
				,"60"
				,"61"
				};
		for (String tema : temasB)
		{

			System.out.println("Preguntas B tema: "+ tema + " _____________________________________________"); 
			
			repository.findByTemaB(tema).forEach(x -> {
				 System.out.println(x.getExamen()+ "-" + x.getNumeroPregunta()+" temaA:"+x.getTemaA()+" temaB:"+x.getTemaB());
				 System.out.println(x.getTexto());
				 System.out.println("A.- "+x.getTextoOpcionA());
				 System.out.println("B.- "+x.getTextoOpcionB());
				 System.out.println("C.- "+x.getTextoOpcionC());
				 System.out.println("D.- "+x.getTextoOpcionD());
				 System.out.println("Respuesta: "+x.getRespuesta());
				 System.out.println();
			 });			
		}
	
		
		
	}

	
	public String getStringCellValue(Cell cell)
	{
		if (cell!=null)
		{
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
	
	
	
}