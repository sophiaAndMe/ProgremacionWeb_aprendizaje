package org.example.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import java.time.LocalDateTime;

@Path("/chao")
public class ChaoRest {

    @GET
    public String chao(){
        return "chao" + LocalDateTime.now();
    }
}
