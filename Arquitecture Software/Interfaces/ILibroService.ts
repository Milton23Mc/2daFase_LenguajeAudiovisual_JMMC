// interfacelibro.ts

import { Libro } from "../Entities/Libro";

export interface ILibroService {
  agregarLibro(titulo: string, autorId: number): Libro;
  obtenerLibro(id: number): Libro | undefined;
}
