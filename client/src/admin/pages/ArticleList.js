import React, {useState} from 'react'

import {Sidebar} from "../components/Sidebar";
import {useQuery} from "react-query";
import articles from "../../services/articles";

import ArticleItem from "../components/ArticleItem";

export const ArticleList = () => {

    const [field, setField] = useState("actualities");
    const {data: list, status} = useQuery(field, articles.getArticleList);

    return (
        <div className="container-fluid contentList">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <button id="actualities" onClick={(event) => setField(event.target["id"])}
                            className="btn tab">&nbsp;&nbsp;&nbsp;Actualités&nbsp;&nbsp;&nbsp;</button>
                    <button id="activities" onClick={(event) => setField(event.target["id"])}
                            className="btn tab">&nbsp;&nbsp;&nbsp;Articles&nbsp;&nbsp;&nbsp;</button>
                    <table className="table white mt-3 mb-5">
                        <thead>
                        <tr>
                            <th scope="col">{field === "activities" ? "Nom de l'article" : "Titre Actu"}</th>
                            {
                                (field === "activities") && <th scope="col">Filtres</th>
                            }
                            <th scope="col">Date de publication</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (status === "success") && list.map((article) => {
                                return <ArticleItem article={article}
                                                    field={field}
                                                    key={article._id}/>
                            })
                        }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}

/*

ETAPE 1 :

créer un composant <ArticleInfo props={article}/>

articles.map((article) => {
    return ArticleInfo props={article}/>
}

ETAPE 2 :
contentList => afficher les info de
        - activités
        - actualités

    => créer un composant générique qui prend en props soit :
                        - props = { {path='activités'}}
                        - props = { {path='actualités'}}
 */
