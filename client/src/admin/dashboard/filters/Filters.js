import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Sidebar} from "../../common/Sidebar";

export const Filters = () => {

    const [state, setState] = useState({categories: [], loading: true})

    useEffect(() => {
        axios.get('http://localhost:8080/categories')
            .then((response) => {
                console.log(response.data);
                setState({categories: response.data, loading: false});
            });
    }, []);

    const deleteCategory = (id) => {
        axios.delete( 'http://localhost:8080/categories/'+id )
            .then((response) => {
                console.log(response);
                const cats = [...state.categories]; // 1. new array cats
                // 2. idx = index de la cat supprimé // 3. cherche la cat qui a un id égal à celui qu'on cliqué
                const idx = cats.findIndex( (category)=>category._id === id );
                // mise à jour du tableau en supprimant la cat dont l'index on a trouvé
                cats.splice(idx, 1);
                // on mat à jour le state du tableau on créant un nvo tableau
                setState({categories: [...cats]});
            });
    }

    const handleInputChange = () => {

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                    <h2>Gestion des filtres</h2>

                    <div className="form-row mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" onChange={handleInputChange}

                                   name="catName"
                                   className="form-control" id="floatingInput"
                                   placeholder="name@example.com" />
                                <label htmlFor="floatingInput" className="text-dark">Créer un filtre</label>
                        </div>
                    </div>

                    <h3>Liste des filtres (ordre alphabétique)</h3>
                    <div className='d-flex flex-wrap'>
                    {
                        state.categories.map( (category) => {
                            return <button key={category._id} onClick={()=> deleteCategory(category._id)} type="button" className="btn btn-sm filterBtn d-flex align-items-center">
                                    <div>{category.name}</div>
                                    <div className='text-center pl-3 delete'>x</div>
                                </button>
                        } )
                    }
                    </div>




                </main>
            </div>
        </div>
    )
}