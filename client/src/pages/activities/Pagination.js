import React from "react";

const {Component} = require("react/cjs/react.production.min");

class Pagination extends Component {

    constructor(props){
        super(props)
        this.state = props.pageInfos;
        console.log(this.state)
    }

    buttonBar() {
        let ext = this.state.pageNumber === this.state.totalPageNumber ? -2 : -1;
        ext = this.state.pageNumber === 1 ? 0 : ext;
        let buttonBar = Array.from({length: 3}, (v, i) => this.state.pageNumber + ext + i);
        return buttonBar.map((buttonNumber, index) => {
            return <button type="button"
                           key={index}
                           className="btn btn-outline-secondary"> {buttonNumber} </button>
        })
    }



    render() {
        return <div>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="start"
                            className="btn btn-outline-secondary"
                    >&laquo;</button>

                    {this.buttonBar()}

                    <button type="button"
                            id="end"
                            className="btn btn-outline-secondary"
                    >&raquo;</button>
                </div>
            </div>

        </div>
    }
}

export default Pagination;