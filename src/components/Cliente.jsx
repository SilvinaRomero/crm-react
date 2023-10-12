import { Form, useNavigate, redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import { eliminarCliente } from '../data/cliente'

export async function action({ params }) {
    const r = await Swal.fire({
        title: 'Estas seguro?',
        text: "Esta acción es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo eliminarlo!'
    })
    if (r.isConfirmed) {
        await eliminarCliente(params.clienteId)
    }
    return redirect('/')
}

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
                        type='button'
                        className='button edit-button'
                        onClick={() => navigate(`/clientes/${id}/editar`)}
                    >Editar</button>
                    <Form
                        method='POST'
                        action={`/clientes/${id}/eliminar`}
                    >
                        <button
                            type='submit'
                            className='button delete-button'
                        >Eliminar</button>

                    </Form>
                </div>

            </td>
        </tr>
    )
}

export default Cliente
