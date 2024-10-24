package com.example.relacionamento_springBoot.repository;

import com.example.relacionamento_springBoot.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClienteRepository extends JpaRepository<Cliente, UUID> {
}
