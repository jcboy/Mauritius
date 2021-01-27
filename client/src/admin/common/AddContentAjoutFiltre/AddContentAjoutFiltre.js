import React, {useState} from "react";
import {Component} from "react";
import './../../styles/activities.css';
import thumb01 from "../../assets/images/thumb-01.jpg";
import {Link} from "react-router-dom";

export const News = () => {


    const [news, setNews] = useState([
        {id: 1, title: 'actu', date: "05/11/1997", text: 'oikdzfjplsdplsld psdplplsdl plsdpl', link: "https://www.vanilla-islands.org/les-iles/ile-maurice/"},
        {id: 2, title: 'actu', date: "07/03/1964", text: 'oikdzfj odsokdok doksokdsk kodsodok', link: "odokfo"},
        {id: 3, title: 'actu', date: "03/11/1999", text: 'oikdzfj dsodkosd kodskdokds okdsodsk ', link: "okfdsok"},
        {id: 4, title: 'actu', date: "09/051997", text: 'oikdzfjfd kfdodfok dokjfkdfo dfokdof', link: "okfdkf"},
    ]);


    return (
        <div className="container news">
            <div className="row mb-4">
                <div className="col-2 text-end">
                    <select className="form-select" id="monselect">
                        <option value="valeur1"> Ordre croissant</option>
                        <option value="valeur2" selected>Ordre décroissant</option>
                    </select>
                </div>
            </div>

            {news.map(item => (
                <div className="item  mb-5" key={news}>
                    <div className="col-md-8 desc-content">
                        <div className="wrapper scrolling-wrapper card">
                            <div className="row">
                                <div className="col-md-4 img-content">
                                    <img src={thumb01} alt=""/>
                                </div>
                            </div>
                            <h3 className="h3 red">
                                {item.title}
                            </h3>
                            <p>Date : {item.date} </p>
                            <p>text: {item.text} </p>
                            <Link to={item.link}>&gt; Voir l'article </Link>
                        </div>
                    </div>
                </div>



            ))};

        </div>
    )

}