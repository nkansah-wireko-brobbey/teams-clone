package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    public final UserService userService;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        System.out.println("User controller");
        List<UserDto> userList = userService.getAllUsers();
        System.out.println("User list get mapping");
        return ResponseEntity.status(HttpStatus.OK).body(userList);
    }
}
