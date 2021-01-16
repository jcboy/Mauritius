import React from "react";

const {Component} = require("react/cjs/react.production.min");


const categories = ([{id: 1, name: 'tag1'}, {id: 2, name: 'tag2'}, {id: 3, name: 'tag3'}])



class Tags extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // COMMENCER PAR UNE ROW
        return <div>
            <div className="filter-content">

                <label htmlFor="exampleDataList" className="form-label">Filtre example</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                <datalist id="datalistOptions">
                    { }
                </datalist>

                <button type="button" className="btn btn-outline-primary ">Valider</button>

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
    }
}

export default Tags;