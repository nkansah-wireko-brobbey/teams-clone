package com.example.demo.services;

import com.example.demo.dto.MessageDto;
import com.example.demo.dto.MessageRequest;
import com.example.demo.mapper.MessageMapper;
import com.example.demo.model.Chat;
import com.example.demo.model.ChatMember;
import com.example.demo.model.Message;
import com.example.demo.repository.ChatMemberRepository;
import com.example.demo.repository.ChatRepository;
import com.example.demo.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService{

    private final MessageRepository messageRepository;
    private final ChatRepository chatRepository;
    private final ChatMemberRepository chatMemberRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public MessageDto sendMessage(Long chatId, MessageRequest messageRequest)throws RuntimeException{
        Chat chat = chatRepository.findById(chatId)
                .orElseThrow(()->new RuntimeException("Chat not found!"));

        ChatMember sender = chatMemberRepository.findByUserIdAndChatId(
                messageRequest.senderUserId(), messageRequest.chatId())
                .orElseThrow(()->new RuntimeException("User not found in chat"));

        Message message = Message.builder()
                .chat(chat)
                .content(messageRequest.content())
                .fileUrl(messageRequest.fileUrl())
                .sender(sender)
                .build();

        message = messageRepository.save(message);

        MessageDto messageDto = MessageMapper.toDto(message);

        messagingTemplate.convertAndSend("/topic/chats/"+chat.getId(),messageDto);

        return messageDto;
    }

    public List<MessageDto> getMessages(Long chatId){

        List<Message> messageList = messageRepository.findByChatIdOrderByTimestampAsc(chatId);

        return messageList.stream()
                .map(MessageMapper::toDto)
                .toList();
    }
}
