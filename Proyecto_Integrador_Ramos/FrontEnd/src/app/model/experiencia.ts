export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    tiempoE : string;
    empresaE : string;

    constructor(nombreE: string, descripcionE: string, tiempoE: string, empresaE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tiempoE = tiempoE;
        this.empresaE = empresaE;
    }
}
