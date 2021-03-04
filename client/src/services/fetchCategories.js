import axios from 'axios';

class FetchCategories {

    async getCategories() {
        const response = await axios.get('http://localhost:8080/categories');
        return response.data;
    }

    async postCategory(newFilter) {
        const {data} = await axios.post('http://localhost:8080/categories/store', newFilter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        });
        return data;
    }

    async deleteCategory(id) {
        return await axios.delete('http://localhost:8080/categories/' + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        });
    }

}

export default new FetchCategories();