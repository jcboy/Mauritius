import React from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import fetchActivities from "../../../services/fetchActivities";
import {useQuery} from "react-query";

export const ActivitiesItem = () => {

    const {id: endpoint} = useParams();
    const {data, status} = useQuery(endpoint, fetchActivities.getActivity)

    return (
        <div>
            {
                ((status === "loading") &&
                    <div className="text-center py-5 my-5">
                        Recherche en cours...
                    </div>)
                || ((status === "success") &&
                    <>
                        <Header params={{
                            title: data[0].title,
                            background: 'url(' + data[0].mainImage + ')',
                            type: "notMain"
                        }}/>
                        <div className="container activitiesItem data[0] mb-5">
                            <div className="row">
                                <div className="col-9 mb-4 mt-5">
                                    <Link to={`/activities`}>&gt; Retour aux activités </Link>
                                    <h2 className="h2 green text-center my-5">{data[0].subtitle}</h2>
                                    <p className="description">{data[0].description}</p>

                                </div>
                                <div className="col-md-3 mt-5">
                                    <div className="content-filter mt-5 pt-4">
                                        <h2 className="h3 red text-align">FILTRES ASSOCIES</h2>
                                        <p>{data[0].tags}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )
                || ((status === "error") &&
                    <div className="text-center py-5 my-5">
                        Une erreur est survenue...
                    </div>)
            }
            <Footer/>
        </div>
    )
}

export default ActivitiesItem;