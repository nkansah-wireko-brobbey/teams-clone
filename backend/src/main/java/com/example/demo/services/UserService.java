package com.example.demo.services;

import com.example.demo.dto.UserDto;
import com.example.demo.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    User findOrCreate(String email, String name, String picture);
    List<UserDto> getAllUsers();
}
