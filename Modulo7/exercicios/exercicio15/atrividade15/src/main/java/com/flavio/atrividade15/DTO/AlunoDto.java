package com.flavio.atrividade15.DTO;

import com.flavio.atrividade15.model.Curso;

import java.util.Set;

public record AlunoDto(String nome, String email, Set<Curso> curso) {
}
