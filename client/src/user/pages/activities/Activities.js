import React, {useState} from 'react';
import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import Pagination from "../../components/Activities/Pagination";
import MapActivities from "../../components/Activities/MapActivities";
import TagComponent from "../../components/Activities/TagComponent";

import {useQuery} from 'react-query';
import {getActivities} from "../../API/activities/getSomeActivities";

const Activities = () => {

    const [currentPage, setPage] = useState(1);
    const [tags, setTags] = useState([]);
    let endpoints = ['activities', currentPage, ...tags];

    const {status, data} = useQuery(endpoints, getActivities);

    return (
        <>
            <Welcome param={{path: '/activities'}}/>
            <div className="container activities pt-4 pb-5">
                <TagComponent setTags={setTags}/>
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
        </>
    );
}

export default Activities;


/*

Submit preventDefault
https://www.robinwieruch.de/react-preventdefault

https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

 */