import { array_obj, exportarDatosPrendaRopa, exportarDatosCamiseta, exportarDatosCalzado } from '../services/model.js';
import { TableComp } from './table-comp.js';
import { useState } from 'react';

/*
 * Creamos un nuevo array de objetos donde se introduciran solo los campos especificados en 
 * el array_obj. Si el campo existe en el array de objetos, se incluye en el array 'datos'. 
 * Si el campo no existe en el array de objetos, se añade un '-'.
 */
export function mapearDatos(objetos) {
    return objetos.map(objeto => {
        const datos = {};
        array_obj.forEach(({ field }) => {
            if (objeto.hasOwnProperty(field)) {
                datos[field] = objeto[field];
            } else {
                datos[field] = '-';
            }
        });
        return datos;
    });
}

export function ContainerComp() {
    let [titulo, setTitulo] = useState('Título Lista');
    let [arrayDatosCabecera, setDatosCabecera] = useState([]);
    let [verificarCabeceraAñadida, setVerificarCabeceraAñadida] = useState(false)
    let [arrayDatosTabla, setDatosTabla] = useState([]);

    let [resultTotalizarCampo, setResultTotalizarCampo] = useState(0);
    let [mensajeTotal, setMensajeTotal] = useState('');

    let [copiaDatosTabla, setCopiaDatosTabla] = useState([]);
    let [ordenOriginal, setOrdenOriginal] = useState(true);

    function cambiarTitulo() {
        let nuevoTitulo = prompt('Introduce un nuevo título: ');

        if (nuevoTitulo !== null) {
            setTitulo(nuevoTitulo);
        }
    }

    /*
    Iteramos sobre el array_obj con tal de extraer los valores de la propiedad 'header', con la 
    finalizad de almacenar dichos valores de la propiedad 'header' en el 'arrayDatosCabecera' 
    medinate setDatosCabecera();
    */
    function añadirCabecera() {
        setDatosCabecera(array_obj.map(headerField => headerField.header));
        setVerificarCabeceraAñadida(true);
    }

    function añadirCamposPrendaRopa() {
        const datosObjPrendaRopa = exportarDatosPrendaRopa();
        setDatosTabla([...arrayDatosTabla, ...datosObjPrendaRopa]);
        setCopiaDatosTabla([...datosTabla, ...datosObjPrendaRopa]);
    }

    function añadirCamposCamiseta() {
        const datosObjCamiseta = exportarDatosCamiseta();
        setDatosTabla([...arrayDatosTabla, ...datosObjCamiseta]);
        setCopiaDatosTabla([...datosTabla, ...datosObjCamiseta]);
    }

    function añadirCamposCalzado() {
        const datosObjCalzado = exportarDatosCalzado();
        setDatosTabla([...arrayDatosTabla, ...datosObjCalzado]);
        setCopiaDatosTabla([...datosTabla, ...datosObjCalzado]);
    }

    function configuracionTotalizarCampo(array, campoTotalizarIntroducido) {
        const resultCampoTotalizar = array.reduce((acumulador, valorActual) => {
            if (!isNaN(valorActual[campoTotalizarIntroducido])) {
                return acumulador + valorActual[campoTotalizarIntroducido];
            } else {
                return acumulador
            }
        }, 0);
        return resultCampoTotalizar;
    }

    function totalizarCampo() {
        let campoTotalizar = prompt('Introduce el campo a totalizar: ');
    
        if (campoTotalizar !== null) {
            campoTotalizar = campoTotalizar.toLowerCase();
    
            const resultCampoTotalizar = configuracionTotalizarCampo(datosTabla, campoTotalizar);
    
            if (!isNaN(resultCampoTotalizar)) {
                let resultadoFormateado;
    
                if (!Number.isInteger(resultCampoTotalizar)) {
                    resultadoFormateado = resultCampoTotalizar.toFixed(2);
                } else {
                    resultadoFormateado = resultCampoTotalizar.toFixed(0);
                }
    
                setMensajeTotal(`Total ${campoTotalizar}: ${resultadoFormateado}`);
                setResultTotalizarCampo(resultCampoTotalizar);
            } else {
                setMensajeTotal('No se puede totalizar por un campo alfabético');
            }
        }
    }

    function configOrdenarTabla(f) {
        if (!ordenOriginal) {
            setDatosTabla([...copiaDatosTabla]);
            setOrdenOriginal(true);
        } else {
            setDatosTabla([...datosTabla.sort(f)]);
            setOrdenOriginal(false);
        }
    }

    function ordenarCamposPorPrecio() {
        if (!ordenOriginal) {
            configOrdenarTabla(null);
        } else {
            configOrdenarTabla((a, b) => a.precio - b.precio);
        }
    }

    function configFiltrarCampo(f) {
        if (f && typeof f === 'function') {
            const datosFiltrados = copiaDatosTabla.filter(f);
            setDatosTabla(datosFiltrados);
        } else {
            setDatosTabla([...copiaDatosTabla]);
        }
    }
    
    function filtrarCampo() {
        let campoFiltrar = prompt('Introduce el campo a filtrar: ');
        let valorFiltrar = prompt('Introduce el valor a filtrar:');
    
        if (campoFiltrar && valorFiltrar) {
            const f = (item) => {
                return item[campoFiltrar].toString().toLowerCase().includes(valorFiltrar.toLowerCase());
            };
            configFiltrarCampo(f);
        } else {
            configFiltrarCampo(null);
        }
    }

    let datosTabla = [...arrayDatosTabla];

    return (
        <>
            <h1>{titulo}</h1>
            <div className='buttonContainer'>
                <button id='btn1' onClick={cambiarTitulo}>ACTUALIZAR TÍTULO</button>
                <button id='btn2' onClick={añadirCabecera}>MOSTRAR CABECERAS</button>
                <button id='btn3' onClick={añadirCamposPrendaRopa}>PRENDA</button>
                <button id='btn4' onClick={añadirCamposCamiseta}>CAMISETA</button>
                <button id='btn5' onClick={añadirCamposCalzado}>CALZADO</button>
                <button id='btn6' onClick={totalizarCampo}>TOTALIZAR</button>
                <button id='btn7' onClick={ordenarCamposPorPrecio}>ORDENAR</button>
                <button id='btn8' onClick={filtrarCampo}>FILTRAR</button>
            </div>
            {verificarCabeceraAñadida && <TableComp headers={arrayDatosCabecera} data={datosTabla} />}
            <p>{mensajeTotal}</p>
        </>
    );
}