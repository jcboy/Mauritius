import IconUpdate from "../assets/IconUpdate";
import IconArchive from "../assets/IconArchive";
import React, {useState} from 'react'
import CardToUpdate from "./CardToUpdate";
import {queryCache, useMutation} from "react-query";
import ChangeArticle from "../../services/articles";

const ArticleItem = ({article, field}) => {

    const [showUpdate, setShowUpdate] = useState(false);


    const [getUpdated] = useMutation(ChangeArticle.putArticle, {
        onSuccess: async () => {
            await queryCache.refetchQueries(field);
        }
    });

    const [getDeleted] = useMutation(ChangeArticle.deleteArticle, {
        onSuccess: async () => {
            await queryCache.refetchQueries(field);
        }
    });

    return (<tr>
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
                <button id={article._id} onClick={
                    () => {
                        return getDeleted({field, id: article._id})
                    }}
                        title="update">
                    <IconArchive/>
                </button>
            </td>
        </tr>
    )
}

export default ArticleItem;