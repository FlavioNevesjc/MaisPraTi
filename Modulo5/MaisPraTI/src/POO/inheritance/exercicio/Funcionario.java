package POO.inheritance;

import java.util.ArrayList;

public class Funcionario {
    private ArrayList<String> nome;
    private ArrayList<Integer> cpf;
    private ArrayList<Double> salario;
    private ArrayList<String> Cargo;

    public ArrayList<String> getNome() {
        return nome;
    }

    public void setNome(ArrayList<String> nome) {
        this.nome = nome;
    }

    public ArrayList<Integer> getCpf() {
        return cpf;
    }

    public void setCpf(ArrayList<Integer> cpf) {
        this.cpf = cpf;
    }

    public ArrayList<Double> getSalario() {
        return salario;
    }

    public void setSalario(ArrayList<Double> salario) {
        this.salario = salario;
    }

    public ArrayList<String> getCargo() {
        return Cargo;
    }

    public void setCargo(ArrayList<String> cargo) {
        Cargo = cargo;
    }
}
