import moment from "moment";
import {Link} from "react-router-dom";

const ActualitiesPreview = ({item}) => {

    return <div className="col-md-6 item  mb-5">
        <div className="row align-items-center">
            <div className="col-lg-5 img-content ">
                <div className="wrapper"
                     style={{backgroundImage: `url(${item.mainImage})`}}>
                    <img
                        src={item.mainImage} alt=""/></div>
            </div>
            <div className="col-lg-7 desc-content">
                <div className="wrapper">
                    <h3 className="h3 red"> {item.title} </h3>
                    <div className="date mb-2">Publié le {moment(item.createdAt).format('DD/MM/YYYY')} </div>
                    <p>
                        {
                            (item.description.length > 260) ?
                                (((item.description).substring(0, 260 - 3)) + '...') : item.description
                        }
                    </p>
                    <Link to={`/news-item/${item._id}`}>&gt; Voir l'article</Link>
                </div>
            </div>
        </div>
    </div>
}

export default ActualitiesPreview;