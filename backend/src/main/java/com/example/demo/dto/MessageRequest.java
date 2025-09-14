package com.example.demo.dto;

public record MessageRequest(
        Long chatId,
        Long senderUserId,
        String content,
        String fileUrl
) {}
