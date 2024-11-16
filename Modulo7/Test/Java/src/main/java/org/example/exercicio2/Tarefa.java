package org.example.exercicio2;

public class Tarefa {
    private String titulo;
    private boolean concluido;

    public Tarefa(String titulo) {
        this.titulo = titulo;
        this.concluido = false;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public boolean isConcluido() {
        return concluido;
    }

    public void setConcluido(boolean concluido) {
        this.concluido = concluido;
    }

    public boolean isConcluida(){
        return concluido;
    }

    public void marcarComoConcluido(){
        this.concluido = true;
    }

    public void desmarcarComoConcluido(){
        this.concluido = false;
    }
}
