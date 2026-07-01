package com.programacion.web.data.dto;


import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "albums")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user_id", nullable = false,
            foreignKey = @ForeignKey(name = "albums_user_id_fkey"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonbTransient // <--- ESTO EVITA EL ERROR DE SERIALIZACIÓN DEL PROXY
    private User user;

    @Column(name = "title", columnDefinition = "text")
    private String title;
}
