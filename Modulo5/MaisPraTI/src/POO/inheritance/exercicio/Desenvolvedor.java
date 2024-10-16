package POO.inheritance.exercicio;

import java.util.ArrayList;

public class Desenvolvedor extends Funcionario{
    private int anoExperiencia;

    public Desenvolvedor(String nome, int cpf, double salario, String cargo, int anoExperiencia) {
        super(nome, cpf, salario, cargo);
        this.anoExperiencia = anoExperiencia;
    }
}
