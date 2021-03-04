import axios from "axios";

class fetchActualities {

    async getActualities(order) {
        const {data} = await axios.get(`http://localhost:8080/actualities${order}`)
        return data;
    }

    async getActuality(id) {
        const {data} = await axios.get(`http://localhost:8080/actualities/${id}`)
        return data;
    }

    async latestActualities(nb) {
       const {data} = await axios.get(`http://localhost:8080/actualities?limit=${nb}`)
        return data;
    }

}
export default new fetchActualities();