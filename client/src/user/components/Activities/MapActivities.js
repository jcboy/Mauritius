import ActivityPreview from "./ActivityPreview";

const MapActivities = ({activities}) => {
    return (
        <div>
            {
                activities.map(
                    (activity, index) => {
                        return <ActivityPreview key={index} activity={activity}/>
                    }
                )
            }
        </div>
    )
}

export default MapActivities;
