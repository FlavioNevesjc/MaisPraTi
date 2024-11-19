package com.flavio.atividade16.service;

import com.flavio.atividade16.Dto.ProdutoDto;
import com.flavio.atividade16.model.Produto;
import com.flavio.atividade16.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;

    public ResponseEntity<ProdutoDto> createProduto(ProdutoDto data){
        try{
            Produto model = new Produto();
            model.setNome(data.getNome());
            model.setDescricao(data.getDescricao());
            model.setQtdStock(data.getQtdStock());
            model.setPreco(data.getPreco());
            Produto produto = repository.save(model);
            return ResponseEntity.ok(convertToDto(produto));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<List<ProdutoDto>> readAllProduto(){
        return ResponseEntity.ok(repository.findAll().stream().map(this::convertToDto).toList());
    }

    public ResponseEntity<ProdutoDto> readProdutoById(Long id){
        try{
            Optional<Produto> produto = repository.findById(id);
            if (produto.isEmpty()) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(convertToDto(produto.get()));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<ProdutoDto> updateProduto(Long id, Produto data){
        try{
            Optional<Produto> produto = repository.findById(id);
            if (produto.isEmpty()) return ResponseEntity.notFound().build();
            produto.get().setNome(data.getNome());
            produto.get().setDescricao(data.getDescricao());
            produto.get().setPreco(data.getPreco());
            produto.get().setQtdStock(data.getQtdStock());
            Produto produtoFinal = repository.save(produto.get());
            return ResponseEntity.ok(convertToDto(produtoFinal));
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity<Object> deleteProduto(Long id){
        try{
            Optional<Produto> produto = repository.findById(id);
            if (produto.isEmpty()) return ResponseEntity.notFound().build();
            repository.delete(produto.get());
            return ResponseEntity.ok(produto.get());
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }
    }

    private ProdutoDto convertToDto(Produto model){
        return new ProdutoDto(model.getId(),model.getNome(), model.getDescricao(), model.getPreco(), model.getQtdStock());
    }
}
