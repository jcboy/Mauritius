import axios from "axios";

class FetchMail {

    async getMails() {
        const {data} = await axios.get("http://localhost:8080/mails", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        });
        return data;
    }

    async postMail(mail) {
        const {data} = await axios.post("http://localhost:8080/mails/store", mail)
        return data
    }

    async getMailById(id) {
        const {data} = await axios.get("http://localhost:8080/mails/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        })
        return data[0];
    }

}

export default new FetchMail();