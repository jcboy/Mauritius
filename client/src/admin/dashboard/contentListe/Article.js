import IconUpdate from "./IconUpdate";
import React, {useState} from 'react'
import ToUpdate from "./ToUpdate";

const Article = ({data, field}) => {

    const [toUpdate, displayToUpdate] = useState({display: "none"})

    const updateArticle = (event) => {
        console.log(event.target.id)
    }

    return (<>
            {data.data.map((article, i) => {
                return <>
                    <tr key={i}>
                        <td>{article.title}</td>
                        {
                            (field === "activities") && <td>{article.tags}</td>
                        }
                        <td>{article.createdAt.slice(0, 10)}</td>
                        <td className="icon" onClick={updateArticle}><IconUpdate/></td>
                        <td className="icon">archiver-</td>
                    </tr>

                </>
            })}
        </>
    )

}

export default Article