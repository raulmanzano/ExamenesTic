package es.manzano.extic.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pregunta {

	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	
	public String examen;
	public String tipo;
	public String bloque; 
	public String numeroPregunta;
	
	@Column(columnDefinition = "TEXT")
	public String texto;
	
	public String attachs;	
	
	@Column(columnDefinition = "TEXT")
	public String textoOpcionA;
	
	@Column(columnDefinition = "TEXT")
	public String textoOpcionB;
	
	@Column(columnDefinition = "TEXT")
	public String textoOpcionC;
	
	@Column(columnDefinition = "TEXT")
	public String textoOpcionD;
	public String respuesta;
	public String temaA;
	public String temaB;
	
	public Pregunta() {
	}
	//Name of the file	Order number of the block	Order number of the question in the test	Text of the question	Have attachs?	Text of the first answer (a)	Text of the Second answer (b)	Text of the Third answer (c)	Text of the Fourth answer (d)	Correct Answer	Temary A	Temary B
	public Pregunta(Long id, String examen, String bloque, String numeroPregunta, String texto,
			String attachs, String textoOpcionA, String textoOpcionB, String textoOpcionC, String textoOpcionD,
			String respuesta, String temaA, String temaB, String tipo) {
		this.id = id;
		this.examen = examen;
		this.bloque = bloque;
		this.numeroPregunta = numeroPregunta;
		this.texto = texto;
		this.attachs = attachs;
		this.textoOpcionA = textoOpcionA;
		this.textoOpcionB = textoOpcionB;
		this.textoOpcionC = textoOpcionC;
		this.textoOpcionD = textoOpcionD;
		this.respuesta = respuesta;
		this.temaA = temaA;
		this.temaB = temaB;
		this.tipo = tipo;
	}
	
	public Pregunta(String examen, String bloque, String numeroPregunta, String texto,
			String attachs, String textoOpcionA, String textoOpcionB, String textoOpcionC, String textoOpcionD,
			String respuesta, String temaA, String temaB, String tipo) {
		this.examen = examen;
		this.bloque = bloque;
		this.numeroPregunta = numeroPregunta;
		this.texto = texto;
		this.attachs = attachs;
		this.textoOpcionA = textoOpcionA;
		this.textoOpcionB = textoOpcionB;
		this.textoOpcionC = textoOpcionC;
		this.textoOpcionD = textoOpcionD;
		this.respuesta = respuesta;
		this.temaA = temaA;
		this.temaB = temaB;
		this.tipo = tipo;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getExamen() {
		return examen;
	}
	public void setExamen(String examen) {
		this.examen = examen;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getBloque() {
		return bloque;
	}
	public void setBloque(String bloque) {
		this.bloque = bloque;
	}
	public String getNumeroPregunta() {
		return numeroPregunta;
	}
	public void setNumeroPregunta(String numeroPregunta) {
		this.numeroPregunta = numeroPregunta;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public String getAttachs() {
		return attachs;
	}
	public void setAttachs(String attachs) {
		this.attachs = attachs;
	}
	public String getTextoOpcionA() {
		return textoOpcionA;
	}
	public void setTextoOpcionA(String textoOpcionA) {
		this.textoOpcionA = textoOpcionA;
	}
	public String getTextoOpcionB() {
		return textoOpcionB;
	}
	public void setTextoOpcionB(String textoOpcionB) {
		this.textoOpcionB = textoOpcionB;
	}
	public String getTextoOpcionC() {
		return textoOpcionC;
	}
	public void setTextoOpcionC(String textoOpcionC) {
		this.textoOpcionC = textoOpcionC;
	}
	public String getTextoOpcionD() {
		return textoOpcionD;
	}
	public void setTextoOpcionD(String textoOpcionD) {
		this.textoOpcionD = textoOpcionD;
	}
	public String getRespuesta() {
		return respuesta;
	}
	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}
	public String getTemaA() {
		return temaA;
	}
	public void setTemaA(String temaA) {
		this.temaA = temaA;
	}
	public String getTemaB() {
		return temaB;
	}
	public void setTemaB(String temaB) {
		this.temaB = temaB;
	}
	
	
	
}
