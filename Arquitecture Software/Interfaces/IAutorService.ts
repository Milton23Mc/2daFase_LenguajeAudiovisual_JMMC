// interfacelibro.ts

import { Autor } from "../Entities/Autor";

export interface IAutorService {
  agregarAutor(nombre: string, fechaNacimiento: Date): Autor;
  obtenerAutor(id: number): Autor | undefined;
}
