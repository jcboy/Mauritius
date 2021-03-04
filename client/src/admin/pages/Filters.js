import React, {useState} from 'react';
import {Sidebar} from "../components/Sidebar";
import {AddFilter} from "../components/AddFilter";
import {queryCache, useMutation, useQuery} from "react-query";
import fetchCategories from "../../services/fetchCategories";


export const Filters = () => {

    const [alert, setAlert] = useState(false);
    const {data: categories, status} = useQuery("categories", fetchCategories.getCategories);

    const [postCategory] = useMutation(fetchCategories.postCategory, {
            onSuccess: async () => {
                setAlert(!alert)
                await queryCache.refetchQueries("categories")
                setTimeout(() => {
                    setAlert(false)
                }, 2000)
            }
        }
    )

    const [deleteCategory] = useMutation(fetchCategories.deleteCategory, {
        onSuccess: async (response) => {
            await queryCache.setQueryData("categories",
                (current) => current.filter((category) => {
                    return category._id !== response.data.category._id;
                })
            )
        }
    })


    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-4 px-4">
                    <h2>Gestion des filtres</h2>
                    <AddFilter postCategory={postCategory}/>
                    {alert && <span className="alert alert-success">Le nouveau filtre a été créé</span>}
                    <h3 className="mt-5">Liste des filtres (ordre alphabétique)</h3>
                    <div className='d-flex flex-wrap'>
                        {
                            (status === "success") && categories.map((category, index) => {
                                return <button onClick={async () => {
                                    return await deleteCategory(category._id)
                                }}
                                               key={index}
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
