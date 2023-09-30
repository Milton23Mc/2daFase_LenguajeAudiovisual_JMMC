import { LibroDTO } from "../Models/LibroDTO";
import { LibroService } from "../Services/LibroService";

export class LibroController {
    constructor(private libroService: LibroService) {}

    createLibro(data: LibroDTO): LibroDTO {
        const libro = this.libroService.agregarLibro(data.titulo, data.autorId);
        return {
            id: libro.id,
            titulo: libro.titulo,
            autorId: libro.autor.id
        };
    }

    getLibro(id: number): LibroDTO | undefined {
        const libro = this.libroService.obtenerLibro(id);
        return libro ? {
            id: libro.id,
            titulo: libro.titulo,
            autorId: libro.autor.id
        } : undefined;
    }
}
