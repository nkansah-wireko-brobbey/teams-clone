package com.example.demo.dto;

public record UserDto(
        Long id,
        String name,
        String email,
        String pictureUrl
) {}
