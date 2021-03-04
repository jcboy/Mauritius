import axios from "axios";

const getAdmin = async (userCredentials) => {
    return await axios.post("http://localhost:8080/login", userCredentials);
}

export default getAdmin;