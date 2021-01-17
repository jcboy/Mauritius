import React from "react";
import {BehaviorSubject} from "rxjs";

const {Component} = require("react/cjs/react.production.min");

export let pageIndex$ = new BehaviorSubject(0);

class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = props.pageInfos;
        this.navigation = props.onClick;
    }

    getNavigationPage(value) {
        return this.navigation(value);
    }

    buttonBar() {
        let ext = this.state.pageIndex === this.state.pageIndexMax ? -2 : -1;
        ext = this.state.pageIndex === 0 ? 1 : ext;
        let buttonBar = Array.from({length: 3}, (v, i) => this.state.pageIndex + ext + i);
        console.log('value from pagination', this.state.pageIndex)
        // console.log(buttonBar)
        return buttonBar.map((buttonIndex, index) => {
            return <button type="button"
                           key={index}
                           className="btn btn-outline-secondary"
                           onClick={this.getNavigationPage.bind(this, index)}
            > {buttonIndex} </button>
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
                    >&laquo;</button>

                    {this.buttonBar()}

                    <button type="button"
                            id="4"
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage.bind(this, 4)}
                    >&raquo;</button>
                </div>
            </div>

        </div>
    }
}

export default Pagination;