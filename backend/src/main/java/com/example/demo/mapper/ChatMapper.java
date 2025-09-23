package com.example.demo.mapper;

import com.example.demo.dto.ChatDto;
import com.example.demo.dto.ChatMemberDto;
import com.example.demo.model.Chat;

import java.util.Set;
import java.util.stream.Collectors;

public class ChatMapper {

    public static ChatDto chatDto(Chat chat){
        Set<ChatMemberDto> chatMemberDtoSet = chat.getMembers().stream()
                .map(ChatMemberMapper::toDto)
                .collect(Collectors.toSet());
        return new ChatDto(chat.getId(), chat.getName(), chat.getType(),chatMemberDtoSet);
    }
}
