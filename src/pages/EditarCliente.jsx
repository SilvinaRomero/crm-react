import { useLoaderData, Form, useNavigate } from "react-router-dom";
import { obtenerCliente } from "../data/cliente"
import Formulario from "../components/Formulario";
import Error from "../components/Error";

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

function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData();

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>A continuación puedes editar los datos del cliente.</p>

            <div className='flex justify-end'>
                <button
                    className='button info-button'
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
            <div className="formulario mt-5">
                {/* {errores?.length && errores.map((error, i) => <Error key={i}><p>{error}</p></Error>)} */}
                <Form
                    method="POST"
                    noValidate
                >
                    <Formulario
                        cliente={cliente}
                    />
                    <input
                        type="submit"
                        className="button info-button mt-5 w-full"
                        value="Registrar cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditarCliente
