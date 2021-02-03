import React, {Component} from "react";
import getButtonPanel from "./ActivitiesConfig/ActivityLogic/getButtonPanel";

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonPanel: [...getButtonPanel(1)]
        };
        this.updateIndex = props.indexChange;
        this.newIndex = this.newIndex.bind(this);
    }

    newIndex(e) {
        const value = Number(e.target.id);
        console.log(value);
        if (value < 1 || value === -1) {
            this.updateIndex(1);
        } else {
            this.updateIndex(value);
        }
        return this.setState({
            buttonPanel: [...getButtonPanel(value)]
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
                        this.state.buttonPanel.map((buttonIndex, i) => {
                            return <button type="button"
                                           key={i}
                                           id={buttonIndex}
                                           className="btn btn-outline-secondary"
                                           onClick={this.newIndex}
                            > {buttonIndex} </button>
                        })
                    }
                    <button type="button"
                            id="-1"
                            className="btn btn-outline-secondary"
                            onClick={this.newIndex}
                    > &raquo; </button>
                </div>
            </div>
        </div>
    }
}

export default Pagination;