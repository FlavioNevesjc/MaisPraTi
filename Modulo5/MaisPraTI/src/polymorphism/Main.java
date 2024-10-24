package polymorphism;

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Cat myCat = new Cat();
        Dog myDog = new Dog();
        myAnimal.makeSound();
        myCat.makeSound();
        myDog.makeSound();
    }
}
