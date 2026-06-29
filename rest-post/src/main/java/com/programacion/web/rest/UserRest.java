package com.programacion.web.rest;

import com.programacion.web.data.dto.User;
import com.programacion.web.servicios.impl.UserServiceImpl;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserRest {

    final UserServiceImpl userServiceImpl;

    @Inject
    public UserRest(UserServiceImpl userServiceImpl){
        this.userServiceImpl = userServiceImpl;
    }

    @GET
    public List<User> findAll() {
        return userServiceImpl.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id") Integer id){
        return userServiceImpl.findById(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();

    }

    @PUT
    @PathParam("/{id}")
    public void update(@PathParam("id") Integer id, User user) {
        userServiceImpl.findById(id)
                .ifPresent(existingUser ->
                        userServiceImpl.save(user));
    }


    @DELETE
    @PathParam("/{id}")
    public void delete(@PathParam("id") Integer id) {
        userServiceImpl.findById(id)
                .ifPresent(userServiceImpl::remove);
    }

}
