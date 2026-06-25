package com.programacion.web.data.dto;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter @Setter
public class User {

    @Id // Llave primaria
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private String username;

    @Column
    private String email;
    //550 558 9245
}