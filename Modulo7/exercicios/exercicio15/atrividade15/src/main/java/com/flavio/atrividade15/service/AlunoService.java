package com.flavio.atrividade15.service;

import com.flavio.atrividade15.DTO.AlunoDto;
import com.flavio.atrividade15.model.Aluno;
import com.flavio.atrividade15.model.Curso;
import com.flavio.atrividade15.repository.AlunoRepository;
import com.flavio.atrividade15.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public ResponseEntity<Aluno> createAluno(AlunoDto dto){
        try{
            Aluno model = new Aluno();
            model.setNome(dto.nome());
            model.setCursos(dto.curso());
            model.setEmail(dto.email());
            model = alunoRepository.save(model);
            return ResponseEntity.ok(model);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<List<AlunoDto>> readAllAluno(){
        try{
            return ResponseEntity.ok(alunoRepository.findAll().stream().map(this::convertToDto).toList());
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<AlunoDto> readAlunoById(Long id){
        try{
            Optional<Aluno> aluno = alunoRepository.findById(id);
            if (aluno.isEmpty()) return ResponseEntity.notFound().build();
            AlunoDto alunoDto = convertToDto(aluno.get());
            return ResponseEntity.ok(alunoDto);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<Aluno> updateAluno(Long id,AlunoDto dto) {
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if (aluno.isEmpty()) return ResponseEntity.notFound().build();
        try{
            aluno.get().setNome(dto.nome());
            aluno.get().setCursos(dto.curso());
            aluno.get().setEmail(dto.email());
            return ResponseEntity.ok(alunoRepository.save(aluno.get()));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity deleteAluno(Long id){
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if (aluno.isEmpty()) return ResponseEntity.notFound().build();
        try{
            alunoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity setNewCurso(Long idAluno, Long idCurso){
        Optional<Aluno> aluno = alunoRepository.findById(idAluno);
        if (aluno.isEmpty()) return ResponseEntity.notFound().build();
        Optional<Curso> curso = cursoRepository.findById(idCurso);
        if (curso.isEmpty()) return ResponseEntity.notFound().build();
        try {
            Set<Curso> cursos = aluno.get().getCursos();
            if (!cursos.add(curso.get())) return ResponseEntity.badRequest().build();
            aluno.get().setCursos(cursos);
            alunoRepository.save(aluno.get());
            return ResponseEntity.ok().build();
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity unSetNewCurso(Long idAluno, Long idCurso){
        Optional<Aluno> aluno = alunoRepository.findById(idAluno);
        if (aluno.isEmpty()) return ResponseEntity.notFound().build();
        Optional<Curso> curso = cursoRepository.findById(idCurso);
        if (curso.isEmpty()) return ResponseEntity.notFound().build();
        try {
            Set<Curso> cursos = aluno.get().getCursos();
            if (!cursos.remove(curso.get())) return ResponseEntity.badRequest().build();
            aluno.get().setCursos(cursos);
            alunoRepository.save(aluno.get());
            return ResponseEntity.ok().build();
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<Set<Curso>> getAllAlunoCursos(Long id){
        Optional<Aluno> aluno = alunoRepository.findById(id);
        if (aluno.isEmpty()) return ResponseEntity.notFound().build();
        try {
            Set<Curso> cursos = aluno.get().getCursos();
            return ResponseEntity.ok(cursos);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    private AlunoDto convertToDto(Aluno model){
        return new AlunoDto(model.getNome(), model.getEmail(),model.getCursos());
    }
}
