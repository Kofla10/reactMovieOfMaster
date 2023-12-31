export const useFetch = async (title) => {

    const API_URL = `http://www.omdbapi.com?apikey=c032e2d7&s=${title}`;
    console.log(API_URL)
    const resp = await fetch(API_URL);
    const data = await resp.json();

    return data;
}
