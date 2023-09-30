import { Autor } from "../Entities/Autor";

export class AutorRepository {
    private autores: Autor[] = [];

    agregar(autor: Autor): void {
        this.autores.push(autor);
    }

    obtenerPorId(id: number): Autor | undefined {
        return this.autores.find(a => a.id === id);
    }
}
