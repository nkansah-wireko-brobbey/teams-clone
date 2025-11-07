package com.example.demo.sockethandler;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatSocketHandler extends TextWebSocketHandler {

    private final Map<String, Set<WebSocketSession>> chatGroups = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session){
        System.out.println("New connection: "+session.getId());
    }

//    @Override
}
