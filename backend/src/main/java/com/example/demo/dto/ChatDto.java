package com.example.demo.dto;

import com.example.demo.model.ChatType;
import java.util.Set;

public record ChatDto(
        Long id,
        String name,
        ChatType type,
        Set<ChatMemberDto> members
) {}
