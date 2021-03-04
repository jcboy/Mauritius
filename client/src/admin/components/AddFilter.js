import React, {useState} from 'react';

export const AddFilter = ({postCategory}) => {

    const [value, setValue] = useState(""); // 1. state of the inputs & initial value

    const handleSubmit = () => { // 3. submit value
        postCategory({name: value});
        const inputValue = document.getElementById("floatingInput");
        inputValue.value = "";
    }

    return (<div className="row mb-3">
        <div className="col-md-4">
            <form className="form-row mb-3" onSubmit={handleSubmit}>
                <div
                    className="form-floating mb-3">
                    <input type="text"
                           onChange={(event) => {
                               setValue(event.target.value)
                           }}
                           value={value.name}
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
    </div>)

}
