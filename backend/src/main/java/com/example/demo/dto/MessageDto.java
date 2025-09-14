package com.example.demo.dto;

import java.time.Instant;

public record MessageDto(
        Long id,
        Long chatId,
        ChatMemberDto sender,
        String content,
        String fileUrl,
        Instant timestamp
) {}
