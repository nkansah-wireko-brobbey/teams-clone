package com.example.demo.services;

import com.example.demo.dto.MessageDto;
import com.example.demo.dto.MessageRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MessageService {

    MessageDto sendMessage(Long chatId, MessageRequest messageRequest)throws RuntimeException;
    List<MessageDto> getMessages(Long chatId);
}
