package com.programacion.web.data.dto;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "posts")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user_id", nullable = false,
            foreignKey = @ForeignKey(name = "posts_user_id_fkey"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonbTransient // <--- ESTO EVITA EL ERROR DE SERIALIZACIÓN DEL PROXY
    public User user;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;
}
