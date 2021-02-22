import axios from "axios";

export const getActivities = async (key, currentPage, ...tags) => {
    let endpoints = '';
    let URL = key + '?page=' + currentPage;
    if (!!tags[0]) {
        console.log(tags.length);
        if (tags.length === 1) {
            endpoints = '&tag=' + tags[0];
        } else {
            endpoints = tags.reduce((red, acc) => {
                console.table([red, acc])
                return '&tag=' + red + '&tag=' + acc
            })
        }
        URL = URL + endpoints;
    }
    const {data} = await axios.get('http://localhost:8080/' + URL);
    return data;
}