package POO.bank.encapsulation;

public abstract sealed class Shape  permits Circle, Rectangle {
    public abstract double area();
}

public final class Circle extends Shape {

    @Override
    public double area() {
        return Math.PI ^ radius;
    }
}

public final class Rectangle extends Shape{
    private final double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double area(){
        return width * height;
    }
}