import React from "react";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import btnCaroussel from "./ActivitiesConfig/ActivityLogic/buttonCaroussel";
import sequencedState from "./ActivitiesConfig/ActivityLogic/sequencedStateActivities";
import activities from "./ActivitiesConfig/ActivityList";

const {Component} = require("react/cjs/react.production.min");

let pageIndex = 0;
const activityNumberPerPage = 4;
const pageIndexMax = Math.floor(activities.length / activityNumberPerPage);

const act = sequencedState(activityNumberPerPage);

class Pagination extends Component {

    constructor() {
        super()
        this.state = {
            pageIndex,
            act: act[pageIndex],
            buttonBar: btnCaroussel(pageIndex, pageIndexMax)
        };
    }

    getNavigationPage(value) {
        this.setState({
            pageIndex: value,
            act: act[value],
            buttonBar: btnCaroussel(value, pageIndexMax)
        })
    }

    /* réfléchir à onChange={} sur
                             <button type="button"
                                           key={buttonIndex}
                                           className="btn btn-outline-secondary"
     et voir si il est possible de faire remonter vers ActivityMapping
     pour régler problème observable
     */

    render() {
        const {act, buttonBar} = this.state;
        // console.log('act', act, 'buttonBar', buttonBar)
        console.log(<ActivityMapping info={{toDisplay: act}}/>.props.info.toDisplay)
        const toDisplay = <ActivityMapping info={{toDisplay: act}}/>
        return <div>
            {toDisplay}
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="0"
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage.bind(this, 0)}
                    > &laquo; </button>
                    {
                        buttonBar.map((buttonIndex) => {
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