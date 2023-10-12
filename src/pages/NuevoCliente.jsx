import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/cliente";

export async function action({ request }) {

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
    // si pasamos la validacion agregamos al nuevo cliente
    await agregarCliente(datos); // no queremos que se e ejute el resto de codigo hasta que finalize esta funcion
    return redirect('/');
}

function NuevoCliente() {

    const navigate = useNavigate();

    const errores = useActionData();

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
                {errores?.length && errores.map((error, i) => <Error key={i}><p>{error}</p></Error>)}
                <Form
                    method="POST"
                    noValidate
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
