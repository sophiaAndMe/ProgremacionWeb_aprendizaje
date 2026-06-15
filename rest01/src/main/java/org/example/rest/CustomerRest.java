package org.example.rest;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.example.dto.Customer;

import java.util.Map;

@Path("/customers")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON) // todos los metodos ya reciben json
public class CustomerRest {

    private static final Map<Integer, Customer> customers =
            Map.of(
                    1, Customer.builder().id(1).name("cliente1").dirrecion("dir1").build(),
                    2, Customer.builder().id(2).name("cliente2").dirrecion("dir2").build(),
                    3, Customer.builder().id(3).name("cliente3").dirrecion("dir3").build(),
                    4, Customer.builder().id(4).name("cliente4").dirrecion("dir4").build(),
                    5, Customer.builder().id(5).name("cliente5").dirrecion("dir5").build()


            );

//    @GET
//    @Path("/{id}")
//    @Produces("application/json") // el valor que retorna es json
//    public String findById(@PathParam("id") Integer id) {
//
//        var customer = CustomerRest.customers.get(id);
//
//        if(customer == null) {
//            return "customer  not found";
//        }
//
//        String json = """
//                {
//                    "id": "%d",
//                    "name": "%s",
//                    "direccion": "%s",
//
//                }
//                """.formatted(
//                        customer.getId(),
//                customer.getName(),
//                customer.getDirrecion());
//
//
//        return json;
//
//    }

    @GET
    @Path("/{id}")
    //@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML}) // el valor que retorna es json
    public Response findById(@PathParam("id") Integer id) {

        var customer = CustomerRest.customers.get(id);

        if(customer == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(customer).header("mi cabecera", "123").build();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void save(@HeaderParam("Content-Type") String contentType,
                     @Context HttpServletRequest request,
                     Customer customer) {

        System.out.println(contentType + "Context " + request.getHeader("content-type"));

        System.out.println(customer);
    }


}
