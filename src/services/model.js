import { PrendaRopa } from "../model/PrendaRopa.js";
import { Camiseta } from "../model/Camiseta.js";
import { Calzado } from "../model/Calzado.js";

const prenda1 = new PrendaRopa('Pantalón', 'Marca A', 'M', 2, 35.99);
const prenda2 = new PrendaRopa('Chaqueta', 'Marca B', 'L', 1, 79.99);
const prenda3 = new PrendaRopa('Sudadera', 'Marca C', 'S', 3, 49.99);
const prenda4 = new PrendaRopa('Polo', 'Marca D', 'XS', 2, 29.99);
const prenda5 = new PrendaRopa('Camisa', 'Marca E', 'M', 4, 24.99);

const camiseta1 = new Camiseta('Camiseta Manga Corta', 'Marca F', 'M', 5, 19.99, 'Corta', 'Algodón');
const camiseta2 = new Camiseta('Camiseta Deportiva', 'Marca G', 'L', 3, 29.99, 'Larga', 'Poliéster');
const camiseta3 = new Camiseta('Camiseta Estampada', 'Marca H', 'S', 2, 14.99, 'Corta', 'Mezcla Algodón');

const calzado1 = new Calzado('Zapatillas Deportivas', 'Marca I', 'EU 40', 10, 59.99, 'Colaboración X', 'Zapatillas ideales para correr');
const calzado2 = new Calzado('Botas de Cuero', 'Marca J', 'EU 38', 4, 89.99, 'Colaboración Y', 'Botas elegantes para ocasiones formales');
const calzado3 = new Calzado('Sneakers Casual', 'Marca K', 'EU 42', 6, 49.99, 'Colaboración Z', 'Zapatillas informales para uso diario');

export const array_obj = [
    { field: 'nombre', header: 'Nombre' },
    { field: 'marca', header: 'Marca' },
    { field: 'talla', header: 'Talla' },
    { field: 'unidades', header: 'Unidades' },
    { field: 'precio', header: 'Precio' },
    { field: 'tipoManga', header: 'Tipo Manga' },
    { field: 'material', header: 'Material' },
    { field: 'colaboracion', header: 'Colaboración' },
    { field: 'descripcion', header: 'Descripción' }
];

export function exportarDatosPrendaRopa() {
    return [ prenda1, prenda2, prenda3, prenda4, prenda5 ];
};

export function exportarDatosCamiseta() {
    return [ camiseta1, camiseta2, camiseta3 ];
};

export function exportarDatosCalzado() {
    return [ calzado1, calzado2, calzado3 ];
};