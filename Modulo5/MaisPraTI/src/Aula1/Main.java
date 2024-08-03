package Aula1;

import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        float floatVar = 1.200303f;
        System.out.println("%.2f\n"+floatVar);


        Locale.setDefault(Locale.US);
        System.out.println("%.2f\n"floatVar);

    }
}