import { mapearDatos } from './container-comp.js';

export function TableComp( props) {
    const { headers, data } = props;
    const recorrerDatos = mapearDatos(data);

    return (
        <table className='customTable'>
            <thead>
                <tr>
                    {headers.map((headerFields, index) => (
                        <th key={index}>{headerFields}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {recorrerDatos.map((objectDataRow, index) => (
                    <tr key={index}>
                        {Object.values(objectDataRow).map((fieldValue, index) => (
                            <td key={index}>{fieldValue}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}