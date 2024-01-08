import { PrendaRopa } from "./PrendaRopa";

class Camiseta extends PrendaRopa {
    constructor (nombre, marca, talla, unidades, precio, tipoManga, material) {
        super(nombre, marca, talla, unidades, precio);
        this.tipoManga = tipoManga;
        this.material = material;
    }
}

export {Camiseta};