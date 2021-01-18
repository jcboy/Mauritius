import React, {Component} from "react";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import getButtonPanel from "./ActivitiesConfig/ActivityLogic/getButtonPanel";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import activities from "./ActivitiesConfig/ActivityList";


let pageIndex = 0;
const activityNumberPerPage = 4;
const pageIndexMax = Math.floor(activities.length / activityNumberPerPage);

const act = sequenceState(activityNumberPerPage);

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: [...act[pageIndex]],
            buttonBar: [...getButtonPanel(pageIndex, pageIndexMax)]
        };
        this.getNavigationPage = this.getNavigationPage.bind(this)
    }

    getNavigationPage(e) {
        const value = Number(e.target.id);
        return this.setState({
            activities: [...act[value]],
            buttonBar: [...getButtonPanel(value, pageIndexMax)]
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
        // STACKING HOC
        return <div>
            <ActivityMapping info={{toDisplay: this.state.activities}}/>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="0"
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage}
                    > &laquo; </button>
                    {
                        this.state.buttonBar.map((buttonIndex) => {
                            return <button type="button"
                                           key={buttonIndex}
                                           id={buttonIndex}
                                           className="btn btn-outline-secondary"
                                           onClick={this.getNavigationPage}
                            > {buttonIndex + 1} </button>
                        })
                    }
                    <button type="button"
                            id={pageIndexMax}
                            className="btn btn-outline-secondary"
                            onClick={this.getNavigationPage}
                    > &raquo; </button>
                </div>
            </div>
        </div>
    }
}

export default Pagination;