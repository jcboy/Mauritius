import React from 'react';
import ManageTags from "./ManageTags";
import filterActivitiesByExistingTags from "./ActivityLogic/filterActivitiesByExistingTags";

const TagComponent = (props) => {

    const showList = (value) => {
        console.log('VALUE', value);
        console.log('filter', filterActivitiesByExistingTags(value,props.activities));
    }

    return <div>
        <ManageTags onChange={showList}/>
    </div>
}

export default TagComponent;