package singleton;

public class Main {
    public static void main(String[] args) {
        ConfigurationManager configManager = ConfigurationManager.getInstance();

        String dbUser = configManager.getProperty("dbUser");
        System.out.println("Usuario do Banco de dados "+dbUser);
    }
}
