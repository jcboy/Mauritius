import IconUpdate from "../assets/IconUpdate";
import IconOff from "../assets/IconOff";
import React, {useState} from 'react'
import CardToUpdate from "./CardToUpdate";

const ArticleItem = ({article, field, getUpdated, getDeleted}) => {

    const [showUpdate, setShowUpdate] = useState(false);

    return (<tr key={index}>
            <td>{article.title}</td>
            {
                (field === "activities") && <td>{article.tags}</td>
            }
            <td>{article.createdAt.slice(0, 10)}</td>
            <td className="icon">
                <button onClick={() => setShowUpdate(true)}
                        title="update" id={article._id}><IconUpdate/></button>
                {
                    showUpdate &&
                    <CardToUpdate articleToUpdate={article}
                                  getUpdated={getUpdated}
                                  setShowUpdate={setShowUpdate}/>
                }
            </td>
            <td className="icon">
                <button onClick={() => getDeleted(field, article._id)}
                        title="update">
                    <IconOff/>
                </button>
            </td>
        </tr>
    )
}

export default ArticleItem;