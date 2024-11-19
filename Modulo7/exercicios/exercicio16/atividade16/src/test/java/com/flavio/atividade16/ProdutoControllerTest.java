package com.flavio.atividade16;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.flavio.atividade16.Dto.ProdutoDto;
import com.flavio.atividade16.controller.ProdutoController;
import com.flavio.atividade16.model.Produto;
import com.flavio.atividade16.service.ProdutoService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ProdutoController.class)
public class ProdutoControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProdutoService service;
    @InjectMocks
    private ProdutoController controller;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void testCreateProduto() throws Exception{
        Produto produto = new Produto(1L,"Caderno","Caderno de criança", 1.44f,20);
        ProdutoDto dto = new ProdutoDto(produto.getId(), produto.getNome(),produto.getDescricao(), produto.getPreco(), produto.getQtdStock());
        when(service.createProduto(dto)).thenReturn(ResponseEntity.ok(dto));
        mockMvc.perform(post("/api/produtos")
                .content(objectMapper.writeValueAsString(dto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.nome").value("Caderno"));
    }

    @Test
    public void testReadAllProdutos() throws Exception{
        Produto produto = new Produto(1L,"Caderno","Caderno de criança", 1.44f,20);
        ProdutoDto dto = new ProdutoDto(produto.getId(), produto.getNome(),produto.getDescricao(), produto.getPreco(), produto.getQtdStock());
        when(service.readAllProduto()).thenReturn(ResponseEntity.ok(List.of(dto)));
        mockMvc.perform(get("/api/produtos"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].nome").value("Caderno"));
    }

    @Test
    public void testReadProdutosById() throws Exception{
        Produto produto = new Produto(1L,"Caderno","Caderno de criança", 1.44f,20);
        ProdutoDto dto = new ProdutoDto(produto.getId(), produto.getNome(),produto.getDescricao(), produto.getPreco(), produto.getQtdStock());
        when(service.readProdutoById(1L)).thenReturn(ResponseEntity.ok(dto));
        mockMvc.perform(get("/api/produtos/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.nome").value("Caderno"));
    }

    @Test
    public void testUpdateProduto() throws Exception{
        Produto produto = new Produto(1L,"Caderno","Caderno de criança", 1.44f,20);
        ProdutoDto dto = new ProdutoDto(produto.getId(), produto.getNome(),produto.getDescricao(), produto.getPreco(), produto.getQtdStock());
        when(service.updateProduto(1L,produto)).thenReturn(ResponseEntity.ok(dto));
        mockMvc.perform(put("/api/produtos/1")
                .content(objectMapper.writeValueAsString(dto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.nome").value("Caderno"));
    }

    @Test
    public void testDeleteProdutos() throws Exception{
        Produto produto = new Produto(1L,"Caderno","Caderno de criança", 1.44f,20);
        ProdutoDto dto = new ProdutoDto(produto.getId(), produto.getNome(),produto.getDescricao(), produto.getPreco(), produto.getQtdStock());
        when(service.deleteProduto(1L)).thenReturn(ResponseEntity.ok(dto));
        mockMvc.perform(delete("/api/produtos/1"))
                .andExpect(status().isOk());
    }

}
