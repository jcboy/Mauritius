import axios from 'axios';

export const getCategories = async (key) => {
    const { data } = await axios.get('http://localhost:8080/' + key);
    return data;
}


