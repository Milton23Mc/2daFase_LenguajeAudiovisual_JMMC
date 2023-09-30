import { Libro } from "../Entities/Libro";
import { LibroRepository } from "../Repositories/LibroRepository";
import { AutorService } from "./AutorService";


export class LibroService {
    constructor(private libroRepository: LibroRepository, private autorService: AutorService) {}

    agregarLibro(titulo: string, autorId: number): Libro {
        const autor = this.autorService.obtenerAutor(autorId);
        if (!autor) throw new Error("Autor no encontrado.");

        const libro = new Libro(Date.now(), titulo, autor);
        this.libroRepository.agregar(libro);
        return libro;
    }

    obtenerLibro(id: number): Libro | undefined {
        return this.libroRepository.obtenerPorId(id);
    }
}
