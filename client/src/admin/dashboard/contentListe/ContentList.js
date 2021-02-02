import React, {useState} from 'react'

import {Sidebar} from "../../common/Sidebar";
import MapArticle from "./MapArticle";


export const ContentList = () => {

    const [path, setPath] = useState({
        path: 'actualities'
    })

    const getArticles = (e) => {
        if (e.target.id !== path.path) {
            setPath({
                path: e.target.id
            })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <table className="table white">
                        <thead>
                        <button id="actualities" onClick={getArticles}> Actualités</button>
                        <button id="activities" onClick={getArticles}> Activités</button>
                        </thead>
                        <tbody>
                        <MapArticle props={path}/>
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
