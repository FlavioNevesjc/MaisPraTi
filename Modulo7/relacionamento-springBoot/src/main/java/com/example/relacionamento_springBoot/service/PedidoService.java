package com.example.relacionamento_springBoot.service;

import com.example.relacionamento_springBoot.model.Pedido;
import com.example.relacionamento_springBoot.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;
    public Pedido salvarPedidocomProduto(Pedido pedido){
       // pedido.getProduto().forEach(produto -> )
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> listarPedidos(){
        return pedidoRepository.findAll();
    }

    public Pedido buscarPedido(Long id){
        return pedidoRepository.findById(id).orElse(null);
    }
}
