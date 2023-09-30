import { Libro } from "../Entities/Libro";

export class LibroRepository {
    private libros: Libro[] = [];

    agregar(libro: Libro): void {
        this.libros.push(libro);
    }

    obtenerPorId(id: number): Libro | undefined {
        return this.libros.find(l => l.id === id);
    }
}
