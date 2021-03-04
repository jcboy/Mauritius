import React, {useState} from 'react';
import {useQuery} from 'react-query';
import '../styles/activities.css';

import Welcome from "../components/Welcome";
import Pagination from "../components/Activities/Pagination";
import MapActivities from "../components/Activities/MapActivities";
import TagComponent from "../components/Activities/TagComponent";
import fetchCategories from "../../services/fetchCategories";
import fetchActivities from "../../services/fetchActivities";

const Activities = () => {

    const [currentPage, setPage] = useState(1);
    const [tags, setTags] = useState([]);
    let endpoints = ['activities', currentPage, ...tags];

    const {status, data} = useQuery(endpoints, fetchActivities.getActivities);
    const {status: categoriesSucess, data: categories} = useQuery("categories", fetchCategories.getCategories);

    return (
        <div className="activities">
            <Welcome params={{
                title: "ACTIVITIES",
                background: 'url(' + 'https://images.pexels.com/photos/1603454/pexels-photo-1603454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' + ')',
                type: "notMain"
            }}/>
            <div className="container  pt-5 pb-5">
                {
                    (categoriesSucess === 'success') &&
                    <TagComponent setTags={setTags} setPage={setPage} data={categories}/>
                }
                {
                    (status === 'loading') && <div className="row">
                        <h3 className="text-center my-5">
                            Recherche en cours...
                        </h3>
                    </div>
                }
                {
                    (status === 'success') && (
                        ((data.response.length === 0) && <div className="row">
                            <p className="text-center my-5">
                                Aucun résultat trouvé
                            </p>
                        </div>) || <>
                            <MapActivities activities={data.response}/>
                            <Pagination setPage={setPage} currentPage={currentPage} pageMax={data.pageMax}/>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Activities;


/*

Submit preventDefault
https://www.robinwieruch.de/react-preventdefault

https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

 */