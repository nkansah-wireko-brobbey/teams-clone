package com.example.demo.controller;

import com.example.demo.dto.MessageDto;
import com.example.demo.dto.MessageRequest;
import com.example.demo.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @PostMapping
    public MessageDto sendMessage(@RequestBody MessageRequest req) {
        return messageService.sendMessage(req);
    }
}

