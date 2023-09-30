
// 1. Crear una carpeta utils con los siguientes archivos: 
// Error.ts clase para manejo de errores Not found y Validation Error
// EventEmitter.ts Crear la lógica para la escucha de eventos cuando se ejecuta alguna accion por ejemplo una creación de libro

// 2. Crear interfaces para la inyeccion de servicios


import { Autor } from "../Entities/Autor";
import { IAutorService } from "../Interfaces/IAutorService";
import { AutorRepository } from "../Repositories/AutorRepository";

export class AutorService implements IAutorService {
    constructor(private autorRepository: AutorRepository) {}

    agregarAutor(nombre: string, fechaNacimiento: Date): Autor {
        const autor = new Autor(Date.now(), nombre, fechaNacimiento);
        this.autorRepository.agregar(autor);
        return autor;
    }

    obtenerAutor(id: number): Autor | undefined {
        return this.autorRepository.obtenerPorId(id);
    }
}
