import React, {useEffect, useState} from 'react'

import {Sidebar} from "../../common/Sidebar";
import IconUpdate from "./IconUpdate";
import IconOff from "../../common/IconOff";


export const ContentList = () => {
    const [articles, setArticles] = useState([{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'},{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'},{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'}]);


    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                    <table className="table white">
                        <thead>
                        <tr>
                            <th scope="col">Nom de l'article</th>
                            <th scope="col">Filtres</th>
                            <th scope="col">Date de publication</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {articles.map((article)=>{
                            return <tr key={article.id}>
                                <td scope="row">{article.title}</td>
                                <td>{article.filters}</td>
                                <td>{article.date}</td>
                                <td className="icon " ><IconUpdate/></td>
                                <td className="icon" >archiver-</td>
                            </tr>
                        })}

                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}