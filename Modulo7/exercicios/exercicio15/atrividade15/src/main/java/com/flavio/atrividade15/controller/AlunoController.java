package com.flavio.atrividade15.controller;

import com.flavio.atrividade15.DTO.AlunoDto;
import com.flavio.atrividade15.model.Aluno;
import com.flavio.atrividade15.model.Curso;
import com.flavio.atrividade15.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/aluno")
public class AlunoController {
    @Autowired
    private AlunoService service;

    @GetMapping
    private ResponseEntity<List<AlunoDto>> getAllAluno(){
        return service.readAllAluno();
    }

    @GetMapping("/{id}")
    private ResponseEntity<AlunoDto> getAlunoById(@PathVariable Long id){
        return service.readAlunoById(id);
    }

    @PostMapping
    private ResponseEntity<Aluno> postAluno(@RequestBody AlunoDto dto){
        return service.createAluno(dto);
    }

    @PutMapping("/{id}")
    private ResponseEntity<Aluno> putAluno(@PathVariable Long id, @RequestBody AlunoDto dto){
        return service.updateAluno(id, dto);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity deleteAluno(@PathVariable Long id){
        return service.deleteAluno(id);
    }

    @GetMapping("/{id}/cursos")
    private ResponseEntity<Set<Curso>> getAlunoCurso(@PathVariable Long id){
        return service.getAllAlunoCursos(id);
    }

    @PostMapping("/{idAluno}/cursos/{idCurso}")
    private ResponseEntity setAlunoCurso(@PathVariable Long idAluno,@PathVariable Long idCurso){
        return service.setNewCurso(idAluno, idCurso);
    }

    @PostMapping("/{idAluno}/cursos/{idCurso}")
    private ResponseEntity unSetAlunoCurso(@PathVariable Long idAluno,@PathVariable Long idCurso){
        return service.unSetNewCurso(idAluno, idCurso);
    }
}
