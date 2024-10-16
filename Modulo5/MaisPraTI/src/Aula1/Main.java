package Aula1;

import java.util.*;
import java.util.Locale;
import java.util.Scanner;
import Aula1.ContaBancaria;
import Aula1.util.Utilitarios;

public class Main {
    public static void main(String[] args) {
//        float floatVar = 1.200303f;
//        System.out.println("%.2f\n"+floatVar);
//
//
//        Locale.setDefault(Locale.US);
//        System.out.println("%.2f\n"+floatVar);

        Scanner sc = new Scanner(System.in);

        // Exercicio 1 - Conversão de celsius para Fahrenheit

//        System.out.print("Digite um valor em Celsius: ");
//        float temp = sc.nextFloat();
//        System.out.println("Temperatura em Fahrenheit é: "+((temp*1.8)+32)+" F");


        ///////////////////////
//
//        int idade = 19;
//
//        if (idade>=18){
//            System.out.println("Você é maior de idade");
//        } else {
//            System.out.println("Você é menor de idade");
//        }


//        System.out.print("Digite um numero: ");
//        int numero = sc.nextInt();
//
//        if (numero%2==0){
//            System.out.println("Numero " + numero+ " Par");
//        } else {
//            System.out.println("Numero " + numero + " Impar");
//        }

        // Exercicio 3 - Verificação de ano bisexto
//        int data = sc.nextInt();
//
//        if (data%4 == 0){
//            System.out.println("Ano bisexto");
//        } else {
//            System.out.println("Não e bisexto");
//        }

        // Exercicio 4: Calculadora simples

//        System.out.print("Digite o primeiro numero: ");
//        double num1 = sc.nextDouble();
//
//        System.out.print("Digite o segundo numero: ");
//        double num2 = sc.nextDouble();
//
//        System.out.print("Digite o operador : ");
//        char operador = sc.next().charAt(0);
//
//        double result = 0;
//        switch (operador) {
//            case '+':
//                result = num1 + num2;
//                break;
//
//            case '-':
//                result = num1 - num2;
//                break;
//
//            case '*':
//                result = num1 * num2;
//                break;
//
//            case '/':
//                result = num1 / num2;
//                break;
//
//            default:
//                result = 0;
//                break;
//        }
//        System.out.println("Resposta da conta " + num1 + " " + operador + " " + num2 + " = " + result);
//
//
//        String texto = "Java é melhor que aquela linguagem";
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculo = texto.toUpperCase();
//        String minusculo = texto.toLowerCase();
//        System.out.println(maiusculo + " " + minusculo);
//
//        boolean contem = texto.contains("Java");
//        System.out.println(contem);
//
//        String substituto = texto.replace("Java", "Python");
//        System.out.println(substituto);
//
//        String substring = texto.substring(7,13);
//        System.out.println(substring);
//
//        double num = 50.30;
//        double arredondadoBaixo = Math.round(num);
//        double arredondadoCima = Math.ceil(num);
//        double raizQuadrada = Math.sqrt(num);
//        double absoluto = Math.abs(num);
//        double aleatorio = Math.random();

        // Fatorial de um numero
//        int valor = 3;
//        int resultado = 1;
//        for (int i = valor; i > 0; i--){
//            resultado = (resultado * i);
//        }
//        System.out.println("Fatorial: " + resultado);

        // Sequencia de Fibonacci.
//        int valor1 = 1;
//        int valor2 = 0;
//        System.out.println("\n\n\nFibonacci");
//        for (int i = 1; i <= 8; i++){
//            valor1 = valor1 + valor2;
//            valor2 = valor1 - valor2;
//            System.out.print(valor1 + " ");
//        }

//        int[] vetor = new int[5];
//
//        vetor[0] = 10;
//        vetor[1] = 20;
//        vetor[2] = 30;
//        vetor[3] = 40;
//        vetor[4] = 50;
//        int[] vetorI = new int[5];
//
//        for (int i = 0; i < vetor.length; i++) {
//            vetorI[(vetor.length) - 1 - i] = vetor[i];
//            System.out.println("vetor["+i+"]: "+vetor[i]);
//       }
//        for (int i = 0; i < vetorI.length; i++) {
//            System.out.println("vetorI["+i+"]: " + vetorI[i]);
//        }
//
//        int[] vetorN = new int[6];
//        for(int i = 0; i < vetor.length; i++){
//            vetorN[i] = vetor[i];
//            System.out.println("vetorN["+i+"]: " + vetorN[i]);
//        }
//        vetorN[vetor.length] = 4;
//        System.out.println("vetorN[5]: " + vetorN[vetor.length]);
//

//
        int[][] matriz = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
//        int somaD = 0;
//        for (int i = 0; i < matriz.length; i++){
//            for (int j = 0; j < matriz[i].length; j++){
//                if (i == j)
//                somaD += matriz[i][j];
//            }
//        }
//        System.out.println("Soma de todos os elemetos na Diagonal "+somaD);
//
//        for (int i = 0; i < matriz.length; i++){
//            for (int j = 0; j <matriz[i].length; j++){
//                if (matriz[i][j] == 8){
//                    System.out.println("Valor encontrado na posição: " + i +" " + j);
//                }
//            }
//        }

//        ContaBancaria contaBancaria = new ContaBancaria();
//
//        contaBancaria.depositar(1000);
//        System.out.println(contaBancaria.consultaSaldo());

        Utilitarios.print("Olá Mundo");
    }
}