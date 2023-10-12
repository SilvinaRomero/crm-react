export async function obtenerClientes() {

    const request = await fetch(import.meta.env.VITE_API_URL);
    const json = await request.json();
    return json;
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        });
       const json = await respuesta.json();
       console.log(json);
    } catch (error) {
        console.log(error);
    }
}