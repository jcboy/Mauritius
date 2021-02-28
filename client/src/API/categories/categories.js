import axios from 'axios';

class Categories {

    async getCategories() {
        const response = await axios.get('http://localhost:8080/categories');
        console.log(response)
        return response.data;
    }




}

export default new Categories();