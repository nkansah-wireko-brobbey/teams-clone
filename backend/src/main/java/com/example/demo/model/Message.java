package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
@Table(name = "messages")
public class Message {

    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private Chat chat;

    @ManyToOne
    private ChatMember sender;

    private String content;

    private String fileUrl;

    private Instant timestamp = Instant.now();


}
