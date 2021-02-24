import React, {useState} from 'react'

import {Sidebar} from "../../common/Sidebar";
import IconUpdate from "./IconUpdate";
import {useQuery} from "react-query";
import {getField} from "../../../user/API/getField";


export const ContentList = () => {

    const [field, setField] = useState("actualities");
    const {data, status} = useQuery(field, getField)

    const getArticles = (e) => {
        setField(e.target.id);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <button id="actualities" onClick={getArticles}> Actualités</button>
                    <button id="activities" onClick={getArticles}> Activités</button>
                    <table className="table white">
                        <thead>
                        <tr>
                            <th scope="col">Nom de l'article</th>
                            {
                                (field === "activities") && <th scope="col">Filtres</th>
                            }
                            <th scope="col">Date de publication</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(status === "success") && data.data.map((article, i) => {
                                return <tr key={i}>
                                    <td>{article.title}</td>
                                    {
                                        (field === "activities") && <td>{article.tags}</td>
                                    }
                                    <td>{article.createdAt.slice(0, 10)}</td>
                                    <td className="icon "><IconUpdate/></td>
                                    <td className="icon">archiver-</td>
                                </tr>
                            }
                        )}

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
