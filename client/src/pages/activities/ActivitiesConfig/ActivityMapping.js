import {Component} from "react/cjs/react.production.min";
import ActivityPreview from "./ActivityPreview";
import activities from "./ActivityList";
import {pageIndex$} from "../Pagination";
import sequencedState from "./ActivityLogic/sequencedStateActivities";

const activityNumberPerPage = 5;
export const pageIndexMax = Math.floor(activities.length / activityNumberPerPage);

class ActivityMapping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            activities: sequencedState(activityNumberPerPage)
        }
    }

    componentDidMount() {
        this.subscription = pageIndex$.subscribe((newPageIndex) => {
            console.log(newPageIndex)
            this.setState(() => ({
                pageIndex: newPageIndex
            }));
        }, (err) => {
            console.log(err.message)
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        console.log('pageIndex', this.state.pageIndex);
        console.log('state index : ' + this.state.pageIndex, this.state.activities[this.state.pageIndex]);
        const MAPPED = this.state.activities[this.state.pageIndex].map(
            (activity, index) => {
                return <ActivityPreview key={index} info={activity}/>
            })
        return (
            <div>
                {
                    MAPPED
                }
            </div>
        )
    }
}

export default ActivityMapping;