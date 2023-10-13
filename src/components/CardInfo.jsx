import { Form, useNavigate } from "react-router-dom";

const CardInfo = ({ cliente }) => {
    const navigate = useNavigate()
    const { nombre, telefono, email, empresa, notas, id } = cliente;
    return (
        <div className="formulario mt-5">
            <div>
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Información del cliente</h3>
                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Datos personales.</p>
                </div>
                <div class="mt-6 border-t border-gray-100">
                    <dl class="divide-y divide-gray-100">
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Nombre Completo</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{nombre}</dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Empresa</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{empresa}</dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Teléfono</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{telefono}</dd>
                        </div>
                        {notas && (
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="text-sm font-medium leading-6 text-gray-900">Notas</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{notas}</dd>
                            </div>
                        )}

                    </dl>
                </div>
                <div className='flex gap-10 justify-center items-center mt-10'>

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
            </div>

        </div>
    )
}

export default CardInfo
