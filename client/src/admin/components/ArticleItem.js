import IconUpdate from "../assets/IconUpdate";
import IconOff from "../assets/IconOff";
import React, {useState} from 'react'
import CardToUpdate from "./CardToUpdate";
import {queryCache, useMutation} from "react-query";
import articles from "../../services/articles";
import IconUpdate from "../assets/IconUpdate";

const style = {display: "flex", alignSelf: "center"};

const ArticleItem = ({article, field, getUpdated, getDeleted}) => {

    const [showUpdate, setShowUpdate] = useState(false);


    const [getUpdated] = useMutation(articles.putArticle, {
        onSuccess: async () => {
            await queryCache.refetchQueries(field);
        }
    });

    const [getDeleted] = useMutation(articles.deleteArticle, {
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
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <IconUpdate/>
                </button>
                <CardToUpdate getUpdated={getUpdated} articleToUpdate={article} field={field}/>
            </td>
            <td className="icon">
                <button id={article._id} className="btn btn-primary" onClick={
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