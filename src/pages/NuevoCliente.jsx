import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {

    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const errores = [];

    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');

    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }

    return ['bien']
}

function NuevoCliente() {

    const navigate = useNavigate();

    const data = useActionData();
    console.log(data)

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Añadir Nuevo Cliente</h1>
            <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente.</p>

            <div className='flex justify-end'>
                <button
                    className='button info-button'
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
            <div className="formulario mt-5">
                {data?.length && data.map((error,i) => <Error key={i}><p>{error}</p></Error>)}
                <Form
                    method="POST"

                >
                    <Formulario />
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

export default NuevoCliente
