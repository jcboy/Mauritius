import React, {useState} from 'react'

import {Sidebar} from "../../common/Sidebar";
import IconUpdate from "./IconUpdate";

export const ContentList = () => {

    const [articles, setArticles] = useState([
        {id: 33, title: "tstts", filters: ['filt A', 'filt B', 'filt B'], date: '12/09/2020'},
        {id: 33, title: "tstts", filters: ['filt A', 'filt B', 'filt B'], date: '12/09/2020'},
        {id: 33, title: "tstts", filters: ['filt A', 'filt B', 'filt B'], date: '12/09/2020'}
    ]);

    const getArticles = (e) => {
        console.log(e.target.id);
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
                        <tr>
                            <th scope="col">Nom de l'article</th>
                            <th scope="col">Filtres</th>
                            <th scope="col">Date de publication</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {articles.map((article, i) => {
                            return <tr key={i}>
                                <td scope="row">{article.title}</td>
                                <td>{article.filters}</td>
                                <td>{article.date}</td>
                                <td className="icon "><IconUpdate/></td>
                                <td className="icon">archiver-</td>
                            </tr>
                        })}

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
