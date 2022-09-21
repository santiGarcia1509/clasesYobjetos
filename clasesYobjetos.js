// ----------------------------Clases------------------------------

class usuario{
    constructor(name,id,user,passw){
        this.name = name;
        this.id = id;
        this.user = user;
        this.passw = passw;
    }
    registrarse(){
        return `El usuario escrito es ${this.user} y la contraseña escrita es ${this.passw}`; 
    }
    datos(){
        return `El nombre del usuario registrado es ${this.name} y su id es ${this.id}`;
    }
}

console.log("*************** clase principal *************");
const nuevoUser = new usuario("Carlos",123,"CarlitosPerez","soycarlosperez123");
console.log(nuevoUser.registrarse());
console.log(nuevoUser.datos());
console.log("");

class empleados extends usuario{
    constructor(name,id,user,passw,cargo,startYear){
        super(name,id,user,passw);
        this.cargo = cargo;
        this.startYear = startYear;
    }
    yearsInCompany(){
        let presentYear = new Date()
        let timeInCompany = presentYear.getFullYear() - this.startYear;
        return `El tiempo que lleva el empleado es ${timeInCompany} años y el cargo que ocupa es ${this.cargo}`;
    }
}

const nuevoUserDos = new empleados("Sara",789,"SaraHerrera","sarasarita456","Atención al cliente",2009);
console.log("*************** herencia (clase hija) *************");
console.log(nuevoUserDos.yearsInCompany());
console.log(nuevoUserDos.datos());
console.log(nuevoUserDos.registrarse());

//--------------------------- objetos ------------------------------
/*
let medellínCity = {
    nombre : "Medellin",
    id: 321,
    area: "382 km²",
    popularSpaces:[{
        nombre: "Estadio Atanacio Girardot",
        tipo: "Estadio deportivo",
        capacidad: 40943
    },{
        nombre: "Parque Norte",
        tipo: "Parque de diversiones",
        capacidad: 7000
    },{
        nombre: "Jardin Botanico",
        tipo: "Parque cultural y familiar",
        capacidad: 20000
    }],
// Las comunas estaran separadas en dos grupos de 5 y uno de 6, haiendo asi 3 esspacios en el arreglo
    comunas:[{
        numeroComunas: "De la comuna 1 a la 5",
        comunas: "Popular, Santa Cruz, Manrrique, Aranjuez, Castilla"
    },{
        numeroComunas: "De la comuna 6 a la 10",
        comunas: "12 de Octubre, Robledo, Villa Hermosa, Buenos Aires, La Candelaria"
    },{
        numeroComunas: "De la comuna 11 a la 16",
        comunas: "Laureles-Estadio, La America, San Javier, El Poblado, Guayabal, Belén"
    }]
}

console.log(medellínCity.comunas[0])
console.log(medellínCity.comunas[1])
console.log(medellínCity.comunas[2])
console.log("")
console.log(medellínCity.popularSpaces[0])
console.log(medellínCity.popularSpaces[1])
console.log(medellínCity.popularSpaces[2])
console.log("")
console.log(medellínCity.nombre)
console.log(medellínCity.id)
console.log(medellínCity.area)
*/