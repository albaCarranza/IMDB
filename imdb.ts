import { Movie } from "./movie";

// 1. Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie
// 2. Debe tener un único atributo publico denominado películas que es un array de objetos de la clase Movie
// 3. Crear un fichero testImdb para probar esta clase creando un objeto de tipo Imdb

export class Imdb {
    peliculas: Movie[]

    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }

    public getpeliculas(): Movie[]{
        return this.peliculas
    }

    public setpeliculas(actors: Movie[]): void {
        this.peliculas = this.peliculas;
    }

}