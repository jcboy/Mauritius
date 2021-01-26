
import React, {useState} from "react";
import './../../styles/activities.css';
import thumb01 from "../../assets/images/thumb-01.jpg";
import {Link} from "react-router-dom";
import Welcome from "../../components/Welcome/welcome";

export const News = () => {

    const [news, setNews] = useState([
        {id: 1, title: 'actu', date: "05/11/1997", text: 'oikdzfjplsdplsld psdplplsdl plsdpl'},
        {id: 2, title: 'actu2', date: "07/03/1964", text: 'oikdzfj odsokdok doksokdsk kodsodok'},
        {id: 3, title: 'actu3', date: "03/11/1999", text: 'oikdzfj dsodkosd kodskdokds okdsodsk '},
        {id: 4, title: 'actu4', date: "09/051997", text: 'oikdzfjfd kfdodfok dokjfkdfo dfokdof'},
    ]);

    // set value for default selection (default, asc, desc)
    const [selectedValue, setSelectedValue] = useState('default');

    let sortedNews = [...news];

    // value after change selection
    const handleChange = (e) =>{
        setSelectedValue(e.target.value);
        console.log(e.target.value);

        if (selectedValue !== undefined) {
            sortedNews.sort((a,b)=>{
                // return a - b;

                if (a[selectedValue] < b[selectedValue]) {
                    return -1;
                }


            })
        }
    }


    sortedNews.sort( (a,b) => {
        return a.date - b.date;
    });


    return (
        <div>
            <Welcome param={{path: '/news'}}/>

            <div className="container news mt-5">
                <div className="row mb-4 justify-content-end">
                    <div className="col-md-2 ">
                        <select className="form-select" onChange={handleChange} value={selectedValue}>
                            <option value="default" disabled>Trier par</option>
                            <option value="asc">Ordre croissant</option>
                            <option value="desc">Ordre décroissant</option>
                        </select>
                    </div>
                </div>
                <div className="row">

                    {news.map(item => (
                        <div className="col-md-6 item  mb-5" key={item.id}>
                            <div className="row">
                                <div className="col-md-4 img-content">
                                    <img src={thumb01} alt=""/>
                                </div>
                                <div className="col-md-8 desc-content">
                                    <div className="wrapper">
                                        <h3 className="h3 red">
                                            {item.title}
                                        </h3>
                                        <p>Date : {item.date} </p>
                                        <p>text: {item.text} </p>

                                        <Link to={'/news/'+item.id}>&gt; Voir l'article  {item.id}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};


                </div>
            </div>

        </div>
    )

}




