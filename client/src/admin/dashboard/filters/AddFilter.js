import React, {useState} from 'react';
import axios from "axios";

export const AddFilter = ({addNewCategory}) => {

    const [values, setValues] = useState({name: ''}); // 1. state of the inputs & initial value

    const handleInputChange = ({target}) => { // 4. Fn Change value input, we need only target
        setValues({
            ...values,   // create new object
            [target.name] : target.value    //  & modify only the one I receive in this event
        })
        console.log(target.value);  // Option 2: setValues({[target.name]: target.value});
    }

    const handleSubmit = (e) =>{ // 3. submit values
        e.preventDefault();
        if (values.name.trim().length > 3) {
            axios.post('http://localhost:8080/categories/store', values)
                .then( (res)=> {
                    console.log(res.status);
                    // on a plus accès au categories ça n a pas été passé comme arg
                    // mais il est suffit en faisant referenc à setCategories qui possède un callback qui garde l'état antérieur

                    // setCategories(cats => [...cats, values]);

                    /*addNewCategory( (cats)=> [values, ...cats] );*/
                    addNewCategory( values );
                    setValues({name:''});
                });
        }
    }

    return <>
        <div className="row mb-3">
            <div className="col-md-4">
                <form className="form-row mb-3" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3"> {/* 2. declare initial values : value={ values } 3. add onChange */}
                        <input type="text"
                               onChange={handleInputChange}
                               value={values.name}
                               name="name"
                               className="form-control" id="floatingInput"
                               placeholder="nom de la catégorie" />
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
