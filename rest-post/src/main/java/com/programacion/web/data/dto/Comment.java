package com.programacion.web.data.dto;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comments")
public class Comment {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "post_id", nullable = false,
            foreignKey = @ForeignKey(name = "comments_post_id_fkey"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonbTransient // <--- ESTO EVITA EL ERROR DE SERIALIZACIÓN DEL PROXY
    private Post post;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "body", columnDefinition = "text")
    private String body;
}
