package com.programacion.web.rest;

import com.programacion.web.data.dto.User;
import com.programacion.web.repositorios.UserRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import lombok.RequiredArgsConstructor;

import java.awt.*;
import java.util.List;

@Path("users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserRest {

    final UserRepository userRepository;

    @Inject
    public UserRest(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GET
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") Integer id){
        return userRepository.findOptionalBy(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();

    }

    @PUT
    @PathParam("/{id}")
    public void update(@PathParam("id") Integer id, User user) {
        userRepository.findOptionalBy(id)
                .ifPresent(existingUser ->
                        userRepository.save(user));
    }


    @DELETE
    @PathParam("/{id}")
    public void delete(@PathParam("id") Integer id) {


        userRepository.findOptionalBy(id)
                .ifPresent(userRepository::remove);
    }

}
