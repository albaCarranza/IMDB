import { Imdb } from "./imdb";
import { Movie } from "./movie";

let pepitoGrillo : Movie = new Movie ("Pepito Grillo", 2005, "Estadounidense", "familiar");
let laSilla : Movie = new Movie ("La Silla", 1990, "Espanish", "terror");


let object : Imdb = new Imdb([pepitoGrillo, laSilla])

console.log(object);
