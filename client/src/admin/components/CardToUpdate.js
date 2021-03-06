import React from "react";
import {useState} from "react";

const CardToUpdate = ({articleToUpdate, setShowUpdate}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{opacity: 1, display: "block"}} className="modal fade show" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modifier ce contenu</h5>
                        <button type="button" className="btn-close"
                                onClick={() => setShowUpdate(false)}>&nbsp;</button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Titre :</label>
                            <input type="email" className="form-control"
                                   defaultValue={articleToUpdate.title} onChange={setTitle} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Résumé :</label>
                            <textarea className="form-control" rows="6"
                                      defaultValue={articleToUpdate.shortDescription} onChange={setDescription}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description :</label>
                            <textarea className="form-control" rows="6"
                                      defaultValue={articleToUpdate.description} onChange={setDescription}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Catégories associées :</label>
                            <textarea className="form-control" rows="6"
                                      defaultValue={articleToUpdate.description} onChange={setDescription}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Images :</label>
                            <textarea className="form-control" rows="6"
                                      defaultValue={articleToUpdate.description} onChange={setDescription}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                                onClick={() => setShowUpdate(false)}>Annuler
                        </button>
                        <button type="button" className="btn btn-primary">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


}
export default CardToUpdate;