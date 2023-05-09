// Paso 3: Clase Movie

// 1. Crear una clase que se llame Movie con los siguientes atributos Públicos.

// - title: string
// - releaseYear: number
// - actors: Professional[]
// - nacionality: string
// - director: Professional
// - writer: Professional
// - language: string
// - plataforma: string
// - isMCU: boolean
// - mainCharacterName: string
// - producer: string
// - distributor: string
// - genre: string

// 2. Los únicos parámetros del constructor son: title, releaseYear, nacionality y genre

// 3. Crear un método PUBLICO que muestre todos los datos de las peliculas
import { Professional } from "./profesional"

export class Movie{
    title: string
    releaseYear: number
    actors: Professional[]
    nacionality: string
    director: Professional
    writer: Professional
    language: string
    plataforma: string
    isMCU: boolean
    mainCharacterName: string
    producer: string
    distributor: string
    genre: string

    constructor(title: string, releaseYear: number, nacionality: string, genre: string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

//metodos

    printAll(){
        console.log(`title - ${this.title},${"\n"}realaseYear - ${this.releaseYear},${"\n"}actors - ${this.actors},${"\n"}nationality - ${this.nacionality},${"\n"}director - ${this.director},${"\n"}writer - ${this.writer}${"\n"}languaje - ${this.language},${"\n"}plataforma - ${this.plataforma},${"\n"}isMCU - ${this.isMCU},${"\n"}mainCharacterName - ${this.mainCharacterName},${"\n"}producer - ${this.producer},${"\n"}distributor - ${this.distributor}${"\n"}genre - ${this.genre}${"\n"}${"\n"}`);
    }
    }