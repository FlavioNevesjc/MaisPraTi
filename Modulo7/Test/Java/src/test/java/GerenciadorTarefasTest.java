import org.example.exercicio2.GerenciadorDeTarefas;
import org.example.exercicio2.Tarefa;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.*;

public class GerenciadorTarefasTest {
    private GerenciadorDeTarefas gerenciadorDeTarefas;
    @BeforeEach
    public void setup(){
        gerenciadorDeTarefas = new GerenciadorDeTarefas();
    }

    @Test
    public void testAdcionarTarefa(){
        Tarefa tarefa = new Tarefa("Estudar Java");
        gerenciadorDeTarefas.adicionarTarefa(tarefa);

        assertNotNull(gerenciadorDeTarefas.buscarTarefa("Estudar Java"));
    }

    @Test
    public void testRemoverTarefa(){
        Tarefa tarefa = new Tarefa("Estudar Javascript");
        gerenciadorDeTarefas.adicionarTarefa(tarefa);
        gerenciadorDeTarefas.removerTarefas(tarefa);

        assertNull(gerenciadorDeTarefas.buscarTarefa("Estudar Javascript"));
    }

    @Test
    public void testBuscarTarefaExistente(){
        Tarefa tarefa = new Tarefa("Estudar Python");
        gerenciadorDeTarefas.adicionarTarefa(tarefa);

        Tarefa resultado = gerenciadorDeTarefas.buscarTarefa("Estudar Python");

        assertNotNull(resultado);
        assertEquals("Estudar Python",resultado.getTitulo());
    }


}


