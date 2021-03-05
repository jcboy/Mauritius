import React, {useState} from "react";
import '../styles/activities.css';
import Header from "../components/Header";
import {useQuery} from "react-query";
import fetchActualities from "../../services/fetchActualities";
import ActualitiesPreview from "../components/Actualities/ActualitiesPreview";

const Actualities = () => {

    const [selectedValue, setSelectedValue] = useState('default');
    let endpoint = (selectedValue === 'desc') ? '?sortBy=createdAt&OrderBy=desc' : '';
    const {data, status} = useQuery(endpoint, fetchActualities.getActualities);

    return (
        <div className="news">
            <Header params={{
                title: "ACTUALITIES",
                background: 'url(' + 'https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_2178/1200x630_100_300_000000x30x0.jpg' + ')',
                type: "article"
            }}/>
            <div className="container mt-5">
                <div className="row mb-4 justify-content-end">
                    <div className="col-md-2 ">
                        <select className="form-select" value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)}>
                            <option value="default" disabled>Trier par</option>
                            <option value="asc">Ordre croissant</option>
                            <option value="desc">Ordre décroissant</option>
                        </select>
                    </div>
                </div>
                <div className="row flex-basis-1">
                    {
                        (status === "success") && data.map(
                            (item, index) => {
                                return <ActualitiesPreview key={index} item={item}/>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Actualities;


