import ActivityPreview from "./ActivityPreview";

const ActivityMapping = (props) => {
    return (
        <div>
            {
                props.info.map(
                    (activity, index) => {
                        return <ActivityPreview key={index} activity={activity}/>
                    })
            }
        </div>
    )
}

export default ActivityMapping;
