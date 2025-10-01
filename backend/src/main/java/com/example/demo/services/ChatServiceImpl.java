package com.example.demo.services;

import com.example.demo.dto.ChatCreateRequest;
import com.example.demo.dto.ChatDto;
import com.example.demo.dto.ChatMemberDto;
import com.example.demo.mapper.ChatMapper;
import com.example.demo.mapper.UserMapper;
import com.example.demo.model.Chat;
import com.example.demo.model.ChatMember;
import com.example.demo.model.ChatType;
import com.example.demo.model.User;
import com.example.demo.repository.ChatMemberRepository;
import com.example.demo.repository.ChatRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.security.Principal;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final UserRepository userRepository;
    private final ChatRepository chatRepository;
    private final ChatMemberRepository chatMemberRepository;

    @Override
    public ChatDto createChat(ChatCreateRequest dto) {
        System.out.println("Chat request data: "+dto);
        ChatType chatType = ChatType.valueOf(dto.type().toUpperCase());
        Chat chat = new Chat();
        chat.setName(chatType == ChatType.GROUP ? dto.name() : null);
        chat.setType(chatType);
        chatRepository.save(chat);

        Set<User> users = new HashSet<>(userRepository.findAllById(dto.memberUserIds()));

        Set<ChatMember> members = users.stream()
                .map(user -> {
                    ChatMember member = new ChatMember();
                    member.setChat(chat);
                    member.setUser(user);
                    return member;
                })
                .collect(Collectors.toSet());

        List<ChatMember> chatMemberList = chatMemberRepository.saveAll(members);

        Set<ChatMemberDto> memberDtos = chatMemberList.stream()
                .map(m -> new ChatMemberDto(
                        m.getId(),
                        UserMapper.toDto(m.getUser())))
                .collect(Collectors.toSet());

        return new ChatDto(chat.getId(), chat.getName(), chat.getType(), memberDtos);
    }

    @Override
    public List<ChatDto> getChatsForLoggedInUser(){
        User user = (User)SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        if (user == null){
            throw new RuntimeException("User not found!");
        }

        List<Chat> chatList = chatRepository.findDistinctByMembersUserId(user.getId());
        return chatList.stream()
                .map(ChatMapper::chatDto)
                .collect(Collectors.toList());
            }
}
