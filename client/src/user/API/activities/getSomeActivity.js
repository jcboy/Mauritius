const axios = require("axios");

export const getActivity = async (key) => {
    const URL = 'http://localhost:8080/activities/' + key;
    const {data} = await axios.get(URL);
    return data;
}