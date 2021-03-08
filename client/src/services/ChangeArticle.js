import axios from "axios";

class ChangeArticle {


    async getArticle(endpoint, article) {
        const {data} = await axios.post(`http://localhost:8080/${endpoint}`, article, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        });
        return data;
    }

    async putArticle(endpoint, article) {
        const {data} = await axios.put(`http://localhost:8080/${endpoint}`, article, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        })
        return data[0];
    }

    async deleteArticle(endpoint, id) {
        const {data} = await axios.delete(`http://localhost:8080/${endpoint}/delete/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        })
        return data[0];
    }


}

export default new ChangeArticle();