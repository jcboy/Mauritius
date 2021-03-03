import axios from 'axios';

class FetchCategories {

    async getCategories() {
        const response = await axios.get('http://localhost:8080/categories');
        return response.data;
    }
}

export default new FetchCategories();