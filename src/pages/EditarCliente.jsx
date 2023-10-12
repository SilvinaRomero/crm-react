import { useLoaderData, useActionData, Form, useNavigate,redirect } from "react-router-dom";
import { obtenerCliente,editarCliente } from "../data/cliente"
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

export async function action({request,params}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');

    const errores = [];

    // Validación
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        errores.push('El email no es valido');
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }
    // si pasamos la validacion actualizamos al nuevo cliente
    await editarCliente(params.clienteId,datos); // no queremos que se e ejute el resto de codigo hasta que finalize esta funcion
    return redirect('/');
}

function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData();

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
                {errores?.length && errores.map((error, i) => <Error key={i}><p>{error}</p></Error>)}
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
                        value="Editar cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditarCliente
