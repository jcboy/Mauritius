import React, {useState} from 'react';
import './../../styles/activities.css';
import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import MapActivities from "./ActivitiesConfig/MapActivities";
import TagComponent from "./ActivitiesConfig/TagComponent";
import {useQuery} from 'react-query';
import axios from 'axios';

const fetch = async (key, currentPage, ...tags) => {
    let endpoints = '';
    let URL = key + '?page=' + currentPage;
    if (!!tags[0]) {
        endpoints = tags.reduce((red, acc) => {
            return red + '&tag=' + acc
        }, '&tag=')
        URL = URL + endpoints;
    }
    console.log('URL', URL);
    const {data} = await axios.get('http://localhost:8080/' + URL)
    return data
}


const Activities = () => {

    const [currentPage, setPage] = useState(1);
    const [tags, setTags] = useState([]);

    let endpoints = ['activities', currentPage, ...tags];
    const {status, data} = useQuery(endpoints, fetch);

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