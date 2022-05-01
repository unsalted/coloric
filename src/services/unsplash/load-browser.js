
export async function getUnsplash(options) {
    let colorRequest = color ? `&color=${color}` : '';
    const res = await fetch(`/services/unsplash?query=${query}${colorRequest}`);
    return await res.json();
};