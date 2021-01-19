import React, {useEffect, useState} from 'react'

import {Sidebar} from "../../common/Sidebar";

export const ContentList = () => {


    const [articles, setArticles] = useState([{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'},{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'},{id:33, title:"tstts", filters:['filt A', 'filt B',  'filt B'], date: '12/09/2020'}]);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">




                </main>
            </div>
        </div>
    )
}