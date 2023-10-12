import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente }) => {

    const navigate = useNavigate();
    const { nombre, empresa, email, telefono, id } = cliente

    return (
        <tr className='border-b'>
            <td className="celda space-y-2">
                <p className='resaltado'>{nombre}</p>
                <p className='opaca'>{empresa}</p>
            </td>
            <td className="celda">
                <p className='opaca'>
                    <span className='resaltado'>Email: {''}</span>
                    {email}
                </p>
                <p className='opaca'>
                    <span className='resaltado'>Teléfono: {''}</span>
                    {telefono}
                </p>
            </td>
            <td className="celda">
                <div className='flex gap-10 justify-center items-center'>

                    <button
                        className='button edit-button'
                        onClick={() => navigate(`/clientes/${id}/editar`)}
                    >Editar</button>
                    <button
                        className='button delete-button'
                    >Eliminar</button>
                </div>

            </td>
        </tr>
    )
}

export default Cliente
