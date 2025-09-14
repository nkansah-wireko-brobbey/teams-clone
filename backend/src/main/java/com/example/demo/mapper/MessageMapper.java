package com.example.demo.mapper;

import com.example.demo.dto.ChatMemberDto;
import com.example.demo.dto.MessageDto;
import com.example.demo.model.Message;

public class MessageMapper {

    public static MessageDto toDto(Message message){
        return new MessageDto(
                message.getId(),
                message.getChat().getId(),
                ChatMemberMapper.toDto(message.getSender()),
                message.getContent(),
                message.getFileUrl(),
                message.getTimestamp()
        );
    }
}
