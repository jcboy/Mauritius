import IconUpdate from "./IconUpdate";
import React, {useState} from 'react'
import ToUpdate from "./ToUpdate";

const Article = ({list, field}) => {

    const [showUpdate, setShowUpdate] = useState(false);
    const [articleToUpdate, setArticleToUpdate] = useState();

    const getUpdated = (event) => {
        const article = list.data.filter((article) => {
            return article._id === event.target.parentElement.id;
        });
        setArticleToUpdate(...article);
        setShowUpdate(!showUpdate);
    }

    return (<>
            {
                list.data.map((article, index) => {
                    return <tr key={index}>
                        <td>{article.title}</td>
                        {
                            (field === "activities") && <td>{article.tags}</td>
                        }
                        <td>{article.createdAt.slice(0, 10)}</td>
                        <td className="icon">
                            <span onClick={getUpdated} title="update" id={article._id}><IconUpdate/></span>
                            {
                                showUpdate && articleToUpdate &&
                                <ToUpdate articleToUpdate={articleToUpdate} setShowUpdate={setShowUpdate}/>
                            }
                        </td>
                        <td className="icon">archiver</td>
                    </tr>
                })
            }
        </>
    )
}

export default Article;