export class Student  {
    
    numero_id: number;
    nombre: string;
    telefono: number;
    edad: number;

    constructor(num: number, nom: string, tel: number, ed: number) {
        this.numero_id = num;
        this.nombre = nom;
        this.telefono = tel;
        this.edad = ed;
    }
};