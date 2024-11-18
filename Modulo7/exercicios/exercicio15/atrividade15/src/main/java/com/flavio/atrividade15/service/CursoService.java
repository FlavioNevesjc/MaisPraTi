package com.flavio.atrividade15.service;

import com.flavio.atrividade15.DTO.CursoDto;
import com.flavio.atrividade15.model.Aluno;
import com.flavio.atrividade15.model.Curso;
import com.flavio.atrividade15.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CursoService {
    @Autowired
    private CursoRepository repository;

    public ResponseEntity<Curso> createCurso(CursoDto dto){
        try{
            Curso model = new Curso();
            model.setNome(dto.nome());
            model.setAlunos(dto.alunos());
            model.setDescricao(dto.descricao());
            model = repository.save(model);
            return ResponseEntity.ok(model);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<List<CursoDto>> readAllCurso(){
        try{
            return ResponseEntity.ok(repository.findAll().stream().map(this::convertToDto).toList());
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<CursoDto> readCursoById(Long id){
        try{
            Optional<Curso> curso = repository.findById(id);
            return ResponseEntity.ok(convertToDto(curso.get()));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<Curso> updateCurso (Long id, CursoDto dto){
        Optional<Curso> curso = repository.findById(id);
        if (curso.isEmpty()) return ResponseEntity.notFound().build();
        try {
            curso.get().setNome(dto.nome());
            curso.get().setAlunos(dto.alunos());
            curso.get().setDescricao(dto.descricao());
            return ResponseEntity.ok(repository.save(curso.get()));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity deleteCurso(Long id){
        Optional<Curso> curso = repository.findById(id);
        if (curso.isEmpty()) return ResponseEntity.notFound().build();
        try {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<Set<Aluno>> getAllAlunoByCursoId(Long id){
        try {
            Optional<Curso> curso = repository.findById(id);
            if (curso.isEmpty()) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(curso.get().getAlunos());
        }
        catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    private CursoDto convertToDto(Curso model){
        return new CursoDto(model.getNome(),model.getDescricao(), model.getAlunos());
    }
}
