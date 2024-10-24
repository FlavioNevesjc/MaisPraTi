package singleton;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigurationManager {
    private static ConfigurationManager instance;
        private Properties properties;
        private ConfigurationManager(){
            this.properties = new Properties();
            try (InputStream input =
                    getClass().getClassLoader().getResourceAsStream("Config.properties")){
                if (input == null){
                    System.out.println("O arquivo de configurações não foi encontrado");
                    return;
                }

                properties.load(input);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        public static ConfigurationManager getInstance(){
            if (instance == null){
                instance = new ConfigurationManager();
            }
            return instance;
        }

        public String getProperty(String key){
            return properties.getProperty(key);
        }
}
