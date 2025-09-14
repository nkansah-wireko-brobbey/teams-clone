package com.example.demo.dto;

import java.util.List;

public record ChatCreateRequest(
        String name,
        String type, // DIRECT or GROUP
        List<Long> memberUserIds
) {}

