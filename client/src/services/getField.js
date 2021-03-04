import axios from "axios";

export const getField = (key) => {
    return axios.get('http://localhost:8080/' + key);
}