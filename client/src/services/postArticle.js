import axios from "axios";

const PostArticle = async (endpoint, article) => {
    const {data} = await axios.post(`http://localhost:8080/${endpoint}`, article, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authorization")
        }
    });
    return data;
}

export default PostArticle;