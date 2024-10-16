package DS.exercicio.exer01;

public class Produtos {
    public int item;
    public String descricao;
    public String teste;

    public Produtos(int item, String descricao, String teste) {
        this.item = item;
        this.descricao = descricao;
        this.teste = teste;
    }

    @Override
    public String toString() {
        return "Produtos{" +
                "item=" + item +
                ", descricao='" + descricao + '\'' +
                '}';
    }
}
