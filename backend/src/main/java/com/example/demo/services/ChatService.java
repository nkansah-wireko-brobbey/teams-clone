package com.example.demo.services;

import com.example.demo.dto.ChatCreateRequest;
import com.example.demo.dto.ChatDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ChatService {
    ChatDto createChat(ChatCreateRequest dto);
    List<ChatDto> getChatsForLoggedInUser();
}
