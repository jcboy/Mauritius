import {Component} from "react/cjs/react.production.min";
import ActivityPreview from "./ActivityPreview";


class ActivityMapping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: props.info.toDisplay
        }
    }

    render() {
        console.log(this.state.activities)
        return (
            <div> {
                this.state.activities.map(
                    (activity, index) => {
                        return <ActivityPreview key={index} info={activity}/>
                    })
            } </div>
        )
    }

}

export default ActivityMapping;
