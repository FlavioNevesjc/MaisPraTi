package com.example.relacionamento_springBoot.repository;

import com.example.relacionamento_springBoot.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
