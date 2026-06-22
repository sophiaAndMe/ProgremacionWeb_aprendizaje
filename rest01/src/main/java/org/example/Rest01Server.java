package org.example;

import jakarta.ws.rs.SeBootstrap;

import java.net.URI;

public class Rest01Server {

     static void main(String[] args) throws InterruptedException {
        SeBootstrap.Configuration config = SeBootstrap.Configuration.builder()

                .port(8080)
                .protocol("http")
                .build();

        SeBootstrap.start(MyApplication.class, config).thenAccept(
                instance -> {
                    System.out.println(instance);
                    URI uri = instance.configuration().baseUri();

                    System.out.println(uri);
                }
        ).exceptionally(ex -> {
            System.out.println(ex.getMessage());
            return null;
        });

        Thread.currentThread().join();
    }
}
