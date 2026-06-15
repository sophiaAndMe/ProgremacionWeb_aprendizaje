package org.example;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;

import java.time.LocalDateTime;


// http://8080/api/hola
@Path("/hola")
public class HolaRest {

    @GET
    @Path("/mundo1")
    public String hola() {
        return "hola" + LocalDateTime.now();
    }


    // USO PATHParam

        // http://8080/api/hola/mundo2/{nombre}/{apellido}

    @GET
    @Path("/mundo2/{nombre}/{apellido}")
    public String hola2(
            @PathParam("nombre") String nombre,
            @PathParam("apellido") String apellido){
        return "hola mundo 2 " + nombre + " " + apellido;
    }

    //USO QueryParams
    //se usa para ordenamiento o filtros y para identificar los recursos
    // ordenamiento de una coleccion completa,NO PUEDO HACER /PERSONAS/SORT=ASD NO SE PUEDE POR QUE ESO ES UN DATO INDIVIDUAL
    // http:://8080/api/hola/mundo3?nombre=aa$apellido=aa...........

    @GET
    @Path("/mundo3")
    public String hola3(@QueryParam("nombre") String nombre,
                        @QueryParam("apellido") @DefaultValue("sanchez") String apellido){
        return "Hola mundo 3:: " + nombre + " " + apellido;
    }

    @GET
    @Path("/mundo4")
    public String hola3(@Context HttpServletRequest request) {

        var Host = request.getHeader("Host");
        var nombre = request.getParameter("nombre");

        return "Hola mundo 4 " + Host + " " + nombre;

    }


}
