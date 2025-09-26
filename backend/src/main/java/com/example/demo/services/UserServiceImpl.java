package com.example.demo.services;

import com.example.demo.dto.UserDto;
import com.example.demo.mapper.UserMapper;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;


    @Override
    public User findOrCreate(String email, String name, String picture) {
       User user = userRepository.findUserByEmail(email);

       if (user == null){
           user = User.builder()
                   .email(email)
                   .name(name)
                   .pictureUrl(picture)
                   .build();

           userRepository.save(user);
       }

       return user;
    }

    public List<UserDto> getAllUsers(){
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(UserMapper::toDto)
                .collect(Collectors.toList());
    }
}
