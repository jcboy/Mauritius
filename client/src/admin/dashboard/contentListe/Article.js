import IconUpdate from "./IconUpdate";
import React, {useState} from 'react'
import ToUpdate from "./ToUpdate";

const Article = ({data, field}) => {

    const [toUpdate, displayToUpdate] = useState({display: "none"})

    const updateArticle = (event) => {
        console.log(event.target.id)
    }

    const [showUpdate, setShowUpdate] = useState(false);
    const toggleShow = () => {
        setShowUpdate(!showUpdate)

    }

    return (<>
            {data.data.map((article, i) => {
                return <tr key={i}>
                        <td>{article.title}</td>
                        {
                            (field === "activities") && <td>{article.tags}</td>
                        }
                        <td>{article.createdAt.slice(0, 10)}</td>
                        <td className="icon" >
                            <span onClick={toggleShow}><IconUpdate/></span>
                            {showUpdate &&
                            <div style={showUpdate ? {opacity: 1, display: "block"} : {opacity: 0, display: "none"}}
                                 className={`modal fade ${showUpdate ? "show" : ""}`} tabIndex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form >
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modifier ce contenu</h5>
                                                <button type="button" className="btn-close"
                                                        onClick={toggleShow}>&nbsp;</button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <label className="form-label">Titre :</label>
                                                    <input type="email" className="form-control" defaultValue={article.title} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Contenu :</label>
                                                    <textarea className="form-control" rows="6" defaultValue={article.description} />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        onClick={toggleShow}>Annuler
                                                </button>
                                                <button type="button" className="btn btn-primary">Enregistrer</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            }
                        </td>
                        <td className="icon">archiver-</td>
                    </tr>
            })}

        </>
    )

}

export default Article