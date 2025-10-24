package com.example.demo.controller;

import com.example.demo.dto.MessageDto;
import com.example.demo.dto.MessageRequest;
import com.example.demo.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

}

