package com.flavio.atrividade15.DTO;

import com.flavio.atrividade15.model.Aluno;

import java.util.Set;

public record CursoDto(String nome, String descricao, Set<Aluno> alunos) {
}
