import React, {useState} from 'react';
import {AddCategory} from "./AddCategory";
import {Link} from 'react-router-dom';
import '../../styles/activities.css';
import thumb01 from '../../assets/images/thumb-01.jpg';
import Welcome from "../../components/Welcome/welcome";


const ActivityList = () => {

    const [categories, setCategories] = useState([{id: 1, name: 'tag1'}, {id: 2, name: 'tag2'}, {id: 3, name: 'tag3'}])
    /* const handleFilter = () => {
        setCategories(cats => [...cats, {id: 5, name: 'tag5'}]);
        console.log('cool', categories)
    } */

    return (
        <div>
            <Welcome param={{path: '/activities'}}/>
            <div className="container activities">
                <div className="filter-content">

                    <AddCategory/>

                    {/*<button onClick={handleFilter}>Ajouter tag</button>*/}
                </div>
                <div>
                    {
                        categories.map((cat) => {
                            return <span key={cat.id}>{cat.name}</span>;
                        })
                    }
                </div>
                <div className="item  mb-5">
                    <div className="row">
                        <div className="col-md-4 img-content">
                            <img src={thumb01} alt=""/>
                        </div>
                        <div className="col-md-8 desc-content">
                            <div className="wrapper ">
                                <h3 className="h3 red">Plongé sous-marine</h3>
                                <p>Lieu :</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat pretium risus,
                                    sit amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in faucibus orci
                                    luctus et ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae
                                    dignissim mauris maximus id.</p>
                                <Link to="/">&gt; en savoir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item  mb-5">
                    <div className="row">
                        <div className="col-md-4 img-content">
                            <img src={thumb01} alt=""/>
                        </div>
                        <div className="col-md-8 desc-content">
                            <div className="wrapper ">
                                <h3 className="h3 red">Plongé sous-marine</h3>
                                <p>Lieu :</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat pretium risus,
                                    sit amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in faucibus orci
                                    luctus et ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae
                                    dignissim mauris maximus id.</p>
                                <Link to="/">&gt; en savoir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <nav aria-label="navigation mt-5">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link to="/" className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link to="/" className="page-link">1</Link></li>
                        <li className="page-item"><Link to="/" className="page-link">2</Link></li>
                        <li className="page-item"><Link to="/" className="page-link">3</Link></li>
                        <li className="page-item">
                            <Link to="/" className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ActivityList;