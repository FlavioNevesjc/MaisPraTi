package Thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ConcurrencyExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Runnable task1 =() -> {
            for (int i = 0; i < 5; i++){
                System.out.println("Task 1 - Numero: " + i);
                try {
                    Thread.sleep(1);
                } catch (InterruptedException error){
                    error.printStackTrace();
                }
            }
        };

        Runnable task2 =() -> {
            for (char c = 'A'; c < 'F'; c++){
                System.out.println("Task 2 - Letra: " + c);
                try {
                    Thread.sleep(1);
                } catch (InterruptedException error){
                    error.printStackTrace();
                }
            }
        };

        executor.submit(task1);
        executor.submit(task2);

        executor.shutdown();
    }
}
