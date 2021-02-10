import axios from "axios";

export const getActivities = async (key, currentPage, ...tags) => {
    let endpoints = '';
    let URL = key + '?page=' + currentPage;
    if (!!tags[0]) {
        endpoints = tags.reduce((red, acc) => {
            return red + '&tag=' + acc
        }, '&tag=')
        URL = URL + endpoints;
    }
    //console.log('URL', URL);
    const {data} = await axios.get('http://localhost:8080/' + URL);
    return data;
}