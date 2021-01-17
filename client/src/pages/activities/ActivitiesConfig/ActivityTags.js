import React from "react";

const {Component} = require("react/cjs/react.production.min");


const categories = ([{id: 1, name: 'tag1'}, {id: 2, name: 'tag2'}, {id: 3, name: 'tag3'}])


class ActivityTags extends Component {

    render() {
        return <div>
            <div className="row py-4 filter-content">
                <div className="col-5 d-flex justify-content-center no-wrap">
                    <input className="form-control"
                           id="exampleDataList"
                           style={{width: '50%'}}
                           placeholder="Type to search..."/>
                    <button type="button" className="btn btn-outline-primary">Valider</button>
                    {/*<button onClick={handleFilter}>Ajouter tag</button>*/}
                </div>
                <div>
                    {
                        categories.map((cat) => {
                            return <span key={cat.id}>{cat.name}</span>;
                        })
                    }
                </div>
            </div>
        </div>
    }
}

export default ActivityTags;