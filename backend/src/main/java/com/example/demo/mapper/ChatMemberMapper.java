package com.example.demo.mapper;

import com.example.demo.dto.ChatMemberDto;
import com.example.demo.model.ChatMember;

public class ChatMemberMapper {
    public static ChatMemberDto toDto(ChatMember chatMember){
        return new ChatMemberDto(chatMember.getId(), UserMapper.toDto(chatMember.getUser()));
    }
}
