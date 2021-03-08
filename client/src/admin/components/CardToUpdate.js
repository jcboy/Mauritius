import React, {useState} from "react";

const CardToUpdate = ({articleToUpdate, field}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modifier ce contenu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <form action="update">
                            <div className="mb-3">
                                <label className="form-label">Titre :</label>
                                <input type="email" className="form-control"
                                       defaultValue={articleToUpdate.title} onChange={setTitle}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Sous-titre :</label>
                                <textarea className="form-control" rows="6"
                                          defaultValue={articleToUpdate.subtitle} onChange={setDescription}/>
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
                            {field === "activities" && <div className="mb-3">
                                <label className="form-label">Catégories associées :</label>
                                <textarea className="form-control" rows="6"
                                          defaultValue={articleToUpdate.tags} onChange={setDescription}/>
                                {console.log(articleToUpdate.tags)}
                            </div>
                            }
                            <div className="mb-3">
                                <label className="form-label">Image principale :</label>
                                <textarea className="form-control" rows="6"
                                          defaultValue={articleToUpdate.mainImage} onChange={setDescription}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"> secondary images :</label>
                                <textarea className="form-control" rows="6"
                                          defaultValue={articleToUpdate.secondaryImages} onChange={setDescription}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CardToUpdate;