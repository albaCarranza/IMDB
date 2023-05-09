// 3. Crear una clase denominada Professional con los siguientes atributos públicos:

// - name: string
// - age: number
// - weight: number
// - height: number
// - isRetired: boolean
// - nationality: string
// - oscarsNumber: number
// - profession: string

// 4. Esta clase debe tener un constructor que incluirá en sus parámetros TODOS estos atributos

// 5. Esta clase tendrá un MÉTODO PUBLICO que muestre en consola el valor de TODOS sus atributos

export class Professional{
    name : string;
    age : number;
    weight: number;
    isRetired: boolean;
    nationality: string;
    oscarsNumber: number
    profession: string;

    constructor(name: string, age: number, weight: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string)
    {
        this.name = name;
        this.weight = weight;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

//metodos

    printAll(){
        console.log(`name - ${this.name},${"\n"}weight - ${this.weight},${"\n"}isRetired - ${this.isRetired},${"\n"}nationality - ${this.nationality},${"\n"}oscarsNumber - ${this.oscarsNumber},${"\n"}profession - ${this.profession}${"\n"}${"\n"}`);
    }
    }

