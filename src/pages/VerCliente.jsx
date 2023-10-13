import { useLoaderData, useNavigate } from "react-router-dom";
import { obtenerCliente } from "../data/cliente"
import CardInfo from "../components/CardInfo";

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No existe ese cliente'

        })
    }
    // console.log(cliente)
    return cliente
}


function VerCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData();

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>{cliente.nombre}</h1>
            <p className='mt-3'>A continuación puedes editar los datos del cliente.</p>

            <div className='flex justify-end'>
                <button
                    className='button info-button'
                    onClick={() => navigate('/')}
                >
                    Volver
                </button>
            </div>
            <CardInfo
                cliente={cliente}
            />
        </>
    )
}

export default VerCliente
