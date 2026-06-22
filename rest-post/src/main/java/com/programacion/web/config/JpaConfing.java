package com.programacion.web.config;


import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Disposes;
import jakarta.enterprise.inject.Produces;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;


@ApplicationScoped
public class JpaConfing {

    private EntityManagerFactory emf;

    @PostConstruct
    void init(){
        emf = Persistence.createEntityManagerFactory("dbposts");
    }

    @Produces
    @ApplicationScoped
    public EntityManagerFactory emf(){
        return emf;
    }

    @Produces
    @ApplicationScoped
    public EntityManager entityManager(){
        return emf.createEntityManager();
    }

    void closeEntityManager(@Disposes EntityManager em){
        if(em!=null && em.isOpen()){
            em.close();
        }

    }




}
