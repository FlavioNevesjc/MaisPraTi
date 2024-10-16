package POO.inheritance;

public class Veiculo {
    public String modelo;
    public String marca;
    public String tipo;
    public String categoria;
    public String anoFabricacao;
    public double potencia;
    private String nrChassi;

    void ligar(){
        System.out.println("O veiculo está ligado");
    }

    void acelerar(){
        System.out.println("Estou acelerando");
    }


}
