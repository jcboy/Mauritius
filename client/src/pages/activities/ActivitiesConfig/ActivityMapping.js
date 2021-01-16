import {Component} from "react/cjs/react.production.min";
import ActivityPreview from "./ActivityPreview";

class ActivityMapping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities : props.infos.activities
        }
    }


    activityMapped(activities) {
        return activities.map((activity) => {
            return <ActivityPreview key={activity.id} info={activity}/>
        })
    }

    render() {
        return <>
            {this.activityMapped(this.state.activities)}
        </>
    }
}

export default ActivityMapping;