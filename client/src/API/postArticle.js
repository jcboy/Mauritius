import axios from "axios";

const PostArticle = async (endpoint, article) => {
    const {data} = await axios.post(`http://localhost:8080/${endpoint}`, article)
    return data;
}

export default PostArticle;