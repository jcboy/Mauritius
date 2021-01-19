import React from 'react';
import ManageTags from "./ManageTags";

const TagComponent = (props) => {

    console.log(props.activities)

    const showList = (value) => {
        console.log('VALUE', value);
    }

    return <div>
        <ManageTags onChange={showList}/>
    </div>
}

export default TagComponent;