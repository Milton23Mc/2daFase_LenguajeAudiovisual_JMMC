Arquitectura Hexagonal

Modelos (Entities): Representan las entidades o modelos de datos.
DTOs (Data Transfer Objects): Objetos utilizados para transferir datos entre procesos.
Repositorios: Encargados de interactuar directamente con los datos (en este ejemplo, usaremos un almacenamiento en memoria, pero en la práctica, podría ser una base de datos).
Servicios: Contienen la lógica de negocio.
Controladores: Interfaz entre el usuario o cliente y los servicios.
Principal (Main): Punto de entrada al sistema.

Modelos (Entities): Representan los datos en su forma más pura.
DTOs: Permiten una representación más limpia y flexible de los datos para la transferencia entre las capas o entre cliente/servidor.
Repositorios: Actúan como el acceso a la fuente de datos, en este caso, un almacenamiento simple en memoria.
Servicios: Contienen la lógica de negocio y coordinan el uso de los repositorios y otros servicios.
Controladores: Son el punto de entrada para las solicitudes externas, convirtiendo datos de entrada/salida a/from DTOs y llamando a los servicios correspondientes.
Main: Punto de entrada al programa, donde se instancian todas las dependencias y se muestra un ejemplo de uso.
Esta estructura es similar a una arquitectura de "Clean Architecture" o "Hexagonal", en la que cada capa tiene responsabilidades claras y se aísla de las demás, permitiendo un código más mantenible y escalable.