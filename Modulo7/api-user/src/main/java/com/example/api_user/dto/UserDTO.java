package com.example.api_user.dto;

import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Data
public class UserDTO {
    private int id;
    private String nome;
    private String email;
    private String senha (new BCryptPasswordEncoder);
}
