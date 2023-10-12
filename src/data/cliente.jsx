export async function obtenerClientes() {

    const request = await fetch(import.meta.env.VITE_API_URL);
    const json = await request.json();
    return json;
}