import React, {useState} from 'react';
import axios from "axios";

export const AddFilter = (props) => {

    const [category, setCategory] = useState([])

    const setCategories = props.setCategories;

    const handleInputChange = (e) => {
        const newCategory = {
            name : e.target.value
        }
        setCategory(newCategory);
    }

    const handleSubmit = () => {
        setCategories(category);
    }

    return <>
        <div className="row">
            <div className="col-md-4">
                <form className="form-row mb-3">
                    <div
                        className="form-floating mb-3"> {/* 2. declare initial values : value={ values } 3. add onChange */}
                        <input type="text"
                               onChange={handleInputChange}
                               name="name"
                               className="form-control" id="floatingInput"
                               placeholder="nom de la catégorie"/>
                        <label htmlFor="floatingInput" className="">Créer un filtre</label>
                    </div>
                </form>
            </div>
            <div className="col-auto d-flex align-items-end mb-3">
                <button onClick={handleSubmit} type="button" className="btn btn-primary ">Ok</button>
            </div>
        </div>
    </>

}