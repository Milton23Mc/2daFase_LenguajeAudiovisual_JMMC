import { AutorController } from "./Controllers/AutorController";
import { LibroController } from "./Controllers/LibroController";
import { AutorRepository } from "./Repositories/AutorRepository";
import { LibroRepository } from "./Repositories/LibroRepository";
import { AutorService } from "./Services/AutorService";
import { LibroService } from "./Services/LibroService";

const autorRepository = new AutorRepository();
const libroRepository = new LibroRepository();

const autorService = new AutorService(autorRepository);
const libroService = new LibroService(libroRepository, autorService);

const autorController = new AutorController(autorService);
const libroController = new LibroController(libroService);

// Ejemplo de uso
const autorDTO = autorController.createAutor({ id: 0, nombre: 'Gabriel García Márquez', fechaNacimiento: '1927-03-06' });
console.log(autorDTO);

const libroDTO = libroController.createLibro({ id: 0, titulo: 'Cien años de soledad', autorId: autorDTO.id });
console.log(libroDTO);
