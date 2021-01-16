import React from "react";

const {Component} = require("react/cjs/react.production.min");

class Pagination extends Component {

    constructor(props){
        super(props)
        this.state = props.size
        console.log(this.state)
    }

    buttonBar() {

        return
    }


    render() {
        return <div>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >&laquo;</button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >1
                    </button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >2
                    </button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >3
                    </button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >&raquo;</button>
                </div>
            </div>

        </div>
    }
}

export default Pagination;