package es.manzano.extic;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import es.manzano.extic.dto.Pregunta;
public interface PreguntaRepository extends CrudRepository<Pregunta, Long> {

    List<Pregunta> findByTemaA(String temaA);
    List<Pregunta> findByTemaB(String temaB);

}