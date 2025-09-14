package com.example.demo.repository;

import com.example.demo.model.ChatMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatMemberRepository extends JpaRepository<ChatMember, Long> {

    Optional<ChatMember> findByUserIdAndChatId(Long userId, Long chatId);
}
