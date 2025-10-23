package com.example.demo.controller;

import com.example.demo.dto.ChatCreateRequest;
import com.example.demo.dto.ChatDto;
import com.example.demo.dto.MessageDto;
import com.example.demo.services.ChatService;
import com.example.demo.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chats")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;
    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<ChatDto> createChat(@RequestBody ChatCreateRequest chatCreateRequest){
        ChatDto newChat = chatService.createChat(chatCreateRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(newChat);
    }

    @GetMapping
    public ResponseEntity<List<ChatDto>> getChats(){
        List<ChatDto> chatsForLoggedInUser = chatService.getChatsForLoggedInUser();
        return ResponseEntity.status(HttpStatus.CREATED).body(chatsForLoggedInUser);
    }

    @GetMapping("/{chatId}/messages")
    public ResponseEntity<List<MessageDto>> getMessages(@PathVariable Long chatId){

        List<MessageDto> messageDtoList = messageService.getMessages(chatId);

        return ResponseEntity.status(HttpStatus.OK).body(messageDtoList);
    }
}
