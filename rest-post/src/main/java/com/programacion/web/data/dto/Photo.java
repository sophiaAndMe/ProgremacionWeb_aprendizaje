package com.programacion.web.data.dto;


import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "photos")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "album_id", nullable = false,
            foreignKey = @ForeignKey(name = "photos_album_id_fkey"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonbTransient // <--- ESTO EVITA EL ERROR DE SERIALIZACIÓN DEL PROXY
    private Album album;

    @Column(name = "title", columnDefinition = "text")
    private String title;

    @Column(name = "url", columnDefinition = "text")
    private String url;

    @Column(name = "thumbnail_url", columnDefinition = "text")
    private String thumbnailUrl;



}
