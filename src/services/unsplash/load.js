const client_id = import.meta.env.VITE_CLIENT_ID


export async function getUnsplash({color, query}) {
    let colorRequest = color ? `&color=${color}` : '';
    const res = await fetch(`https://api.unsplash.com/search/?query=${query}${colorRequest}&per_page=50&client_id=${client_id}`);
    return await res.json();
}