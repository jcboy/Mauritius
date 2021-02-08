import ActivityPreview from "./ActivityPreview";

const MapActivities = (props) => {
    return (
        <div>
            {
                props.info.map(
                    (activity, index) => {
                        return <ActivityPreview key={index} activity={activity}/>
                    }
                )
            }
        </div>
    )
}

export default MapActivities;
