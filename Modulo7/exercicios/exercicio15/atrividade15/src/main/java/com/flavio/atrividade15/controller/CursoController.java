package com.flavio.atrividade15.controller;

import com.flavio.atrividade15.DTO.CursoDto;
import com.flavio.atrividade15.model.Aluno;
import com.flavio.atrividade15.model.Curso;
import com.flavio.atrividade15.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/curso")
public class CursoController {
    @Autowired
    private CursoService service;

    @GetMapping
    private ResponseEntity<List<CursoDto>> getAllCurso(){
        return service.readAllCurso();
    }

    @GetMapping("/{id}")
    private ResponseEntity<CursoDto> getCursoById(@PathVariable Long id){
        return service.readCursoById(id);
    }

    @PostMapping
    private ResponseEntity<Curso> postCurso(@RequestBody CursoDto dto){
        return service.createCurso(dto);
    }

    @PutMapping("/{id}")
    private ResponseEntity<Curso> putCurso(@PathVariable Long id, @RequestBody CursoDto dto){
        return service.updateCurso(id, dto);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity deleteCurso(@PathVariable Long id){
        return service.deleteCurso(id);
    }

    @GetMapping("/{id}//alunos")
    private ResponseEntity<Set<Aluno>> getAllAlunosByCurso(@PathVariable Long id){
        return service.getAllAlunoByCursoId(id);
    }
}
