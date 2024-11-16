package org.example.exercicio2;

import java.util.ArrayList;
import java.util.List;

public class GerenciadorDeTarefas {
    private List<Tarefa> tarefas = new ArrayList<>();
    public void adicionarTarefa(Tarefa tarefa){
        tarefas.add(tarefa);
    }

    public void removerTarefas(Tarefa tarefa){
        tarefas.remove(tarefa);
    }

    public Tarefa buscarTarefa(String titulo){
        for(Tarefa tarefa : tarefas){
            if (tarefa.getTitulo().equalsIgnoreCase(titulo)){
                return tarefa;
            }
        }
        return null;
    }

    public List<Tarefa> listarTarefasConcluidas(){
        List<Tarefa> concluidas = new ArrayList<>();
        for (Tarefa tarefa : tarefas){
            if (tarefa.isConcluida()){
                concluidas.add(tarefa);
            }
        }
        return concluidas;
    }
}
