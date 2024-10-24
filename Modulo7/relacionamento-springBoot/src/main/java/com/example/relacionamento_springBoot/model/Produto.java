package com.example.relacionamento_springBoot.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String nome;
    private Double preco;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;
}
