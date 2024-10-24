package com.example.relacionamento_springBoot.repository;

import com.example.relacionamento_springBoot.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContaRepository extends JpaRepository<Conta, Long> {


}
