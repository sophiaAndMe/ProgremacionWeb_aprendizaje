package org.example;


import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import org.example.rest.CustomerRest;
import org.example.rest.HolaRest;

import java.util.Set;

@ApplicationPath("api")
public class MyApplication extends Application {

    public Set<Class<?>> getClasses() {
        return Set.of(HolaRest.class, CustomerRest.class);
    }

}
