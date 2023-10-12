export async function obtenerClientes() {
    const request = await fetch(import.meta.env.VITE_API_URL);
    const json = await request.json();
    return json;
}

export async function obtenerCliente(id) {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
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
    //    console.log(json);
    } catch (error) {
        console.log(error);
    }
}
export async function editarCliente(id,datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        });
       await respuesta.json();
    
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE'
        });
       await respuesta.json();
    
    } catch (error) {
        console.log(error);
    }
}
