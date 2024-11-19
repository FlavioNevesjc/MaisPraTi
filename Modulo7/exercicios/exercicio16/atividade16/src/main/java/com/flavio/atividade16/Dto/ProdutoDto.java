package com.flavio.atividade16.Dto;

import com.flavio.atividade16.model.Produto;

public record ProdutoDto(Long id, String nome, String descricao, float preco, int qtdStock) {

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public float getPreco() {
        return preco;
    }

    public int getQtdStock() {
        return qtdStock;
    }
}
