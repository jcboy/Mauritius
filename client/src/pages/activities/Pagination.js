import React from "react";
import {Subject} from "rxjs";
import {pageIndexMax} from "./ActivitiesConfig/ActivityMapping";
import btnCaroussel from "./ActivitiesConfig/ActivityLogic/buttonCaroussel";

const {Component} = require("react/cjs/react.production.min");

export let pageIndex$ = new Subject(0);
let pageIndex = 0;

class Pagination extends Component {

    constructor() {
        super()
        this.state = {
            pageIndexMax,
            pageIndex,
            buttonBar: btnCaroussel(pageIndex, pageIndexMax)
        };
    }

    getNavigationPage(value) {
        pageIndex$.next(value);
        this.setState({
            pageIndex: this.state.pageIndex + value,
            buttonBar: btnCaroussel(value, pageIndexMax)
        })
    }


    render() {
        return <div>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="0"
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage.bind(this, 0)}
                    > &laquo; </button>
                    {
                        this.state.buttonBar.map((buttonIndex) => {
                            return <button type="button"
                                           key={buttonIndex}
                                           className="btn btn-outline-secondary"
                                           onClick={this.getNavigationPage.bind(this, buttonIndex)}
                            > {buttonIndex + 1} </button>
                        })
                    }
                    <button type="button"
                            id="4"
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage.bind(this, 4)}
                    > &raquo; </button>
                </div>
            </div>
        </div>
    }
}

export default Pagination;