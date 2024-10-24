package com.example.relacionamento_springBoot.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Conta {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numero;

    @OneToOne(mappedBy = "conta")
    private Cliente cliente;
}
