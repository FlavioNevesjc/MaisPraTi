package POO.abstraction;

import java.util.ArrayList;

public class ContaBancaria {
    //Desenvolvam classe ContaBancaria com constructor, getters, setters, depositar, sacar, transferir,
    // exibirExtrato, registrarExtrato, validações, exceções, arrayList
    private String conta;
    private String nome;
    private ArrayList<Character> operacao;
    private ArrayList<Double> valor;
    private double totalSaldo;

    public ContaBancaria(String conta, String nome, ArrayList<Character> operacao, ArrayList<Double> valor) {
        this.conta = conta;
        this.nome = nome;
        this.operacao = operacao;
        this.valor = valor;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public ArrayList<Character> getOperacao() {
        return operacao;
    }

    public void setOperacao(ArrayList<Character> operacao) {
        this.operacao = operacao;
    }

    public ArrayList<Double> getValor() {
        return valor;
    }

    public void setValor(ArrayList<Double> valor) {
        this.valor = valor;
    }

    public double getTotalSaldo() {
        return totalSaldo;
    }

    public void setTotalSaldo(double totalSaldo) {
        this.totalSaldo = totalSaldo;
    }

    public void depositar(double valor){
        if (valor > 0){
            this.valor.add(valor);
            this.operacao.add('C');
            this.totalSaldo += valor;
        } else {
            throw new IllegalArgumentException("Não tem como depositar valor menor que 0");
        }
    }

    public void sacar (double valor){
        if (valor > 0 && valor < this.totalSaldo) {
            this.valor.add(valor);
            this.operacao.add('D');
            this.totalSaldo -= valor;
        } else {
            throw new IllegalArgumentException("Não tem como sacar valor menor que 0");
        }
    }

    public void transferir (double valor, String conta){
        if (valor > 0) {
            this.valor.add(valor);
            this.operacao.add('D');
            this.totalSaldo -= valor;
        } else {
            throw new IllegalArgumentException("Não tem como tranferir valor menor que 0");
        }
    }
//
//    public void exibirExtrato (){
//        for (int i; i > operacao.lis)



        }
