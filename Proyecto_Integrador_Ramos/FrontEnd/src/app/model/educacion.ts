export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    tiempoE: string;
    institucionE: string;

    constructor(nombreE: string, descripcionE: string, tiempoE: string, institucionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tiempoE = tiempoE;
        this.institucionE = institucionE;
    }
}