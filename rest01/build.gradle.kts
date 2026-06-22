plugins {
    id("java")
    id("io.freefair.lombok") version "9.5.0"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:6.0.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    // Source: https://mvnrepository.com/artifact/org.jboss.resteasy/resteasy-core
    implementation("org.jboss.resteasy:resteasy-core:7.0.2.Final")


    // Source: https://mvnrepository.com/artifact/org.jboss.resteasy/resteasy-undertow
    implementation("org.jboss.resteasy:resteasy-undertow:7.0.2.Final")

    // Source: https://mvnrepository.com/artifact/org.jboss.resteasy/resteasy-json-binding-provider
    implementation("org.jboss.resteasy:resteasy-json-binding-provider:7.0.2.Final")

    // xml
    // Source: https://mvnrepository.com/artifact/org.jboss.resteasy/resteasy-jaxb-provider
    implementation("org.jboss.resteasy:resteasy-jaxb-provider:7.0.2.Final")

    // Source: https://mvnrepository.com/artifact/org.postgresql/postgresql
    implementation("org.postgresql:postgresql:42.7.11")

}

tasks.test {
    useJUnitPlatform()
}