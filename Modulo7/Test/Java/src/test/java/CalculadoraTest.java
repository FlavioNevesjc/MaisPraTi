import org.example.exercicio1.Calculadora;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTest {
    @Test
    public void testSomar(){
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.soma(2,3);
        assertEquals(5, resultado);
    }

    @Test
    public void testSomar1() {
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.soma(-12, -3);
        assertEquals(-15, resultado);
    }
}
