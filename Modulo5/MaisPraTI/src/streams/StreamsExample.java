package streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n%2 == 0)
                .map(n -> n*2)
                .collect(Collectors.toList());
        System.out.println(evenNumbers);
        int sum = numbers.stream().reduce(0,Integer::sum);
        System.out.println("Soma "+ sum);
        List<String> names = Arrays.asList("Flávio","Regiane", "Anthony");
        names.stream().map(String::toUpperCase).forEach(System.out::println);

        List<String> frase = Arrays.asList("Peguem um um parágrafo de texto e usem streams para contar o número de palavras únicas, ignorarem maiúsculas, miniúsculas e removam pontuações");
        int count = (int) frase.stream()
                .map(x -> x.toLowerCase())
                .distinct()
                .count();
        System.out.println(count);
    }
}