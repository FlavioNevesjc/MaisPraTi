package com.flavio.atividade16.controller;

import com.flavio.atividade16.Dto.ProdutoDto;
import com.flavio.atividade16.model.Produto;
import com.flavio.atividade16.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<ProdutoDto>> getAllProdutos(){
        return service.readAllProduto();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDto> getProdutoById(@PathVariable Long id){
        return service.readProdutoById(id);
    }

    @PostMapping
    public ResponseEntity<ProdutoDto> postNewProduto(@RequestBody ProdutoDto data){
        return service.createProduto(data);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDto> putProduto(@PathVariable Long id,@RequestBody Produto data){
        return service.updateProduto(id, data);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable Long id){
        return service.deleteProduto(id);
    }
}
