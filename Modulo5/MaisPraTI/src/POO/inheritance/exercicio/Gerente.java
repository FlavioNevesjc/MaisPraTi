package POO.inheritance.exercicio;

import java.util.ArrayList;

public class Gerente extends Funcionario {
    private double bonus;

    public Gerente(String nome, int cpf, double salario, String cargo, double bonus) {
        super(nome, cpf, salario, cargo);
        this.bonus = bonus;
    }
}
