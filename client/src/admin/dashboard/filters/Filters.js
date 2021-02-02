import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Sidebar} from "../../common/Sidebar";
import {AddFilter} from "./AddFilter";

export const Filters = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        return () => {
        axios.get('http://localhost:8080/categories')
            .then((response) => {
                setCategories(response.data);
            });
        }
    }, []);

    const deleteCategory = (e) => {
        const id = e.target["parentElement"].id;
        axios.delete('http://localhost:8080/categories/' + id)
            .then((response) => {
                const categoryToDelete = response.data.category;
                const idx = categories.findIndex((category) => {
                    return category._id === categoryToDelete._id
                });
                categories.splice(idx, 1);
                setCategories([...categories]);
            }).catch((err) => {
                console.log('Erreur : ', err);
        });
    }

    const addCategory = (e) => {
        axios.post('http://localhost:8080/categories/store', e).then(() => {
            setCategories([...categories, e])
        }).catch((err) => {
            console.log('error', err.message)
        })

    }


    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-4 px-4">
                    <h2>Gestion des filtres</h2>
                    <AddFilter setCategories={addCategory}/>
                    <h3 className="mt-5">Liste des filtres (ordre alphabétique)</h3>

                    <div className='d-flex flex-wrap'>
                        {
                            categories.map((category, i) => {
                                return <button onClick={deleteCategory}
                                               key={i}
                                               id={category._id}
                                               type="button"
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