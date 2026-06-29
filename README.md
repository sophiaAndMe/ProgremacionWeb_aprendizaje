# 🚀 Programación Web: Aprendizaje y Prácticas

![Status](https://img.shields.io/badge/Status-En_Desarrollo-success)
![Repo Size](https://img.shields.io/badge/Tamaño_del_Repo-En_Crecimiento-blue)
![License](https://img.shields.io/badge/Licencia-Educativa-orange)

## 📖 Descripción del Proyecto
Este repositorio documenta mi progreso, evolución y ejercicios enfocados en el desarrollo y la programación web *Full-Stack*. A través de múltiples proyectos de práctica progresivos, este espacio sirve como un portafolio de estudio activo, destacando la construcción de interfaces dinámicas y la implementación de lógicas de servidor y bases de datos.

## 🛠️ Tecnologías y Lenguajes
El ecosistema de este repositorio abarca tecnologías modernas para el desarrollo frontend y backend:

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Backend & Base de Datos**
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Jakarta EE](https://img.shields.io/badge/Jakarta_EE-052A82?style=for-the-badge&logo=jakartaee&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📂 Estructura del Repositorio
El entorno de trabajo está dividido en prácticas secuenciales y módulos de arquitectura backend:

* **`react01PRACTICA` a `react07PRACTICA`**: Módulos evolutivos de React. Cubren desde el manejo de estado local (`useState`), tipado de DTOs e interfaces, hasta el consumo de APIs.
* **`react08`**: Integración avanzada enfocada en el manejo de estado global utilizando **Redux Toolkit** (`slices`, `store`, `useSelector`, `useDispatch`).
* **`rest-post` / `rest01`**: Proyectos Backend implementando el patrón MVC y servicios RESTful.
    * **Data/DTO:** Entidades mapeadas con JPA e integradas con Lombok.
    * **Repository:** Repositorios implementando `FullEntityRepository` (Apache DeltaSpike).
    * **Service & Rest:** Lógica de negocio y controladores (`@Path`, `@GET`, `@POST`) con inyección de dependencias (`@Inject`, `@ApplicationScoped`).

---

## 🏗️ Arquitectura del Sistema
El proyecto final apunta a una arquitectura cliente-servidor completa:
1.  **Capa de Presentación (React):** Consumo de datos mediante `fetch`/`axios` y gestión de estados complejos (Redux). Capacidad de manejo de datos estáticos (Offline mediante `FileReader` y LocalStorage).
2.  **Capa de Negocio (Jakarta EE):** Endpoints REST que procesan las solicitudes HTTP, aplican reglas de negocio mediante interfaces de servicio e inyectan las dependencias necesarias.
3.  **Capa de Persistencia (PostgreSQL):** Base de datos relacional mapeada estrechamente mediante JPA/Hibernate, manejando relaciones complejas (`@ManyToOne`, `@OneToMany`) y asegurando la integridad de la información.

---

## ⚙️ Instalación y Ejecución

### **Entorno Frontend (React)**
El proyecto utiliza un ecosistema Node.js. Para levantar cualquier práctica en tu máquina local:
1. Navega a la carpeta de la práctica (ej. `cd react08`).
2. Instala las dependencias:
   ```bash
   npm install
