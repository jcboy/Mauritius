import React, {Component} from "react";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import getButtonPanel from "./ActivitiesConfig/ActivityLogic/getButtonPanel";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import activities from "./ActivitiesConfig/ActivityList";

let pageIndex = 0;
const activityNumberPerPage = 4;
const pageIndexMax = Math.floor(activities.length / activityNumberPerPage);
const sequencedActivities = sequenceState(activityNumberPerPage);

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: [...sequencedActivities[pageIndex]],
            buttonBar: [...getButtonPanel(pageIndex, pageIndexMax)]
        };
        this.getNavigationPage = this.getNavigationPage.bind(this);
    }

    getNavigationPage(e) {
        const value = Number(e.target.id);
        return this.setState({
            info: [...sequencedActivities[value]],
            buttonBar: [...getButtonPanel(value, pageIndexMax)]
        });
    }


    render() {
        // STACKING HOC
        // CROSS-CUTTING CONCERNS
        const info = {
            info: this.state.info
        }
        return <div>
            <ActivityMapping {...info} />
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