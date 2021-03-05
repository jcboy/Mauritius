import axios from "axios";

class Admin {

    async getAdmin(userCredentials) {
        return await axios.post("http://localhost:8080/login", userCredentials);
    }

    async getAdminById(key) {
        const {data} = await axios.get("http://localhost:8080/login/" + localStorage.getItem(key), {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("authorization")
            }
        });
        return data;
    }

    async setPassword(password) {
        const {data} = await axios.put("http://localhost:8080/login/updatepwd",
            {
                password,
                id: localStorage.getItem("userId")
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authorization")
                }
            });
        return data;
    }

    async setEmail(email) {
        const {data} = await axios.put("http://localhost:8080/login/updateemail",
            {
                email,
                id: localStorage.getItem("userId")
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authorization")
                }
            });
        return data;
    }
}

export default new Admin();