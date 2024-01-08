class PrendaRopa {
    constructor(nombre, marca, talla, unidades, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.talla = talla;
        this.unidades = unidades
        this.precio = precio;
    }
}

PrendaRopa.prototype.renderRow = function(array) {
    let row = '<tr>';
    array.forEach(field => {
        row += '<td>';
        if (this.hasOwnProperty(field)) {
            row += `${this[field]}`;
        } else {
            row += ''; 
        }
        row += '</td>';
    });
    row += '</tr>';
    return row;
};

export {PrendaRopa};