package com.example.demo.services;

import com.example.demo.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User findOrCreate(String email, String name, String picture);
}
