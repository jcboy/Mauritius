import React, {Component} from "react";
import getButtonPanel from "./ActivitiesConfig/ActivityLogic/getButtonPanel";
import {pageIndexMax} from "./Activities";

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonPanel: [...getButtonPanel(0, pageIndexMax)]
        };
        this.updateIndex = props.indexChange;
        this.newIndex = this.newIndex.bind(this);
    }

    newIndex(e) {
        const value = Number(e.target.id);
        this.updateIndex(value);
        return this.setState({
            buttonPanel: [...getButtonPanel(value, pageIndexMax)]
        });
    }


    render() {
        return <div>
            <div className="btn-toolbar justify-content-center" role="toolbar"
                 aria-label="Toolbar with button groups">
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button"
                            id="0"
                            className="btn btn-outline-secondary"
                            onClick={this.newIndex}
                    > &laquo; </button>
                    {
                        this.state.buttonPanel.map((buttonIndex) => {
                            return <button type="button"
                                           key={buttonIndex}
                                           id={buttonIndex}
                                           className="btn btn-outline-secondary"
                                           onClick={this.newIndex}
                            > {buttonIndex + 1} </button>
                        })
                    }
                    <button type="button"
                            id={pageIndexMax}
                            className="btn btn-outline-secondary"
                            onClick={this.newIndex}
                    > &raquo; </button>
                </div>
            </div>
        </div>
    }
}

export default Pagination;