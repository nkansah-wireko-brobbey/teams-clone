package com.example.demo.services;

import com.example.demo.dto.MessageDto;
import com.example.demo.dto.MessageRequest;
import org.springframework.stereotype.Component;

@Component
public interface MessageService {

    MessageDto sendMessage(MessageRequest messageRequest)throws RuntimeException;
}
