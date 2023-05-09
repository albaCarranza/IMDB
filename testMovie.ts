import { Movie } from "./movie";
import { Professional } from "./profesional";

//declaracion de películas

let guardianesDelaGalaxia : Movie = new Movie ("Guardianes de la Galaxia", 2014, ["Chris Pratt", "Zoe Saldaña", "Dave Bautista"], "Estadounidense", "James Gunn", "Stan Lee", "English", "Primevideo", true, "Star-Lord", "Marvel", "Disney", "Ciencia ficcion");
let starWars : Movie = new Movie ("Star Wars", 1999, ["Daisy Ridley", "Adam Driver", "Mark Hamill"], "Estadounidense", "George Lucas", "George Lucas", "English", "Disney+", true, "Luke Skywalker", "Lucasfilm", "Disney", "Ciencia ficcion");

let myMovies = [guardianesDelaGalaxia, starWars]
console.log('-----Todos los datos------')

for(let movies of myMovies) {
    movies.printAll()
}


