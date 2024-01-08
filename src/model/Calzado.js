import { PrendaRopa } from "./PrendaRopa";

class Calzado extends PrendaRopa {
    constructor (nombre, marca, talla, unidades, precio, colaboracion, descripcion ) {
        super(nombre, marca, talla, unidades, precio);
        this.colaboracion = colaboracion;
        this.descripcion = descripcion;
    }
}

export {Calzado};