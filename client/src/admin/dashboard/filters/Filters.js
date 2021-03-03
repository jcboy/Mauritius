import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Sidebar} from "../../common/Sidebar";
import {AddFilter} from "./AddFilter";

export const Filters = () => {

    const [categories, setCategories] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        // let mounted = true;
        if (categories.length && !alert) {
            return
        }

        axios.get('http://localhost:8080/categories')
            .then((response) => {
                setCategories(response.data);
            });
        // return () => mounted = false;
    }, [alert]);

    const addNewCategory = inputCategory => {
        const newCategories = [...categories, inputCategory];
        setCategories(newCategories);
        setAlert(true);
    }

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false);
            }, 2000)
        }
    })
    const deleteCategory = (id) => {
        axios.delete('http://localhost:8080/categories/' + id)
            .then((response) => {
                console.log(response);
                const cats = [...categories]; // 1. new array cats
                // 2. idx = index de la cat supprimé // 3. cherche la cat qui a un id égal à celui qu'on cliqué
                const idx = cats.findIndex((category) => category._id === id);
                // mise à jour du tableau en supprimant la cat dont l'index on a trouvé
                cats.splice(idx, 1);
                // on mat à jour le state du tableau on créant un nvo tableau
                setCategories([...cats]);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-4 px-4">

                    <h2>Gestion des filtres</h2>

                    <AddFilter addNewCategory={addNewCategory}/>
                    {alert && <span className="alert alert-success">Le nouveau filtre a été créé</span>}

                    <h3 className="mt-5">Liste des filtres (ordre alphabétique)</h3>

                    <div className='d-flex flex-wrap'>
                        {
                            categories.map((category, index) => {
                                return <button onClick={() => deleteCategory(category._id)} key={index} type="button"
                                               className="btn btn-sm filterBtn d-flex align-items-center">
                                    <div>{category.name}</div>
                                    <div className='text-center pl-3 delete'>x</div>
                                </button>
                            })
                        }
                    </div>

                </main>
            </div>
        </div>
    )
}
