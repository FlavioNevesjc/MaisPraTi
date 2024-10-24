package POO.area.encapsulation;

import javax.sound.midi.Soundbank;
import java.sql.SQLOutput;

public abstract sealed class Shape  permits Circle, Rectangle {
    public abstract double area();

    public static void main(String [] args) {
        Shape circle = new Circle(5.0);
        System.out.println("Área do circulo = " + circle.area());

        Shape rectangle = new Rectangle(4.0, 5.0);
        System.out.println("Área do Retangulo = " + rectangle.area());

        Point point = new Point(3,5);
        System.out.println("Ponto = "+point);

    }
}
