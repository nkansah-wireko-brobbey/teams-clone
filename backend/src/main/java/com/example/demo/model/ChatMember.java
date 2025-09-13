package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Setter @Getter
@AllArgsConstructor @NoArgsConstructor
@Table(name = "chat_members")
public class ChatMember {
    @Id @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    private Chat chat;

    @ManyToOne
    private User user;

}
