import React, {useState} from 'react';
import filterActivitiesByExistingTags from "./ActivityLogic/filterActivitiesByExistingTags";
import checkExistTag from "./ActivityLogic/checkExistTag";


const TagComponent = (props) => {

    const [tagList, updateTagList] = useState([]);
    const [id, setId] = useState(0);

    const updateActivities = props.activityListUpdate;

    const saveTag = (e) => {
        let newTag = e.target["previousSibling"].value;
        if (newTag !== '' && !(checkExistTag(newTag, [...tagList])[0])) {
            setId((previousId) => previousId + 1);
            e.target["previousSibling"].value = '';
            return updateTagList([...tagList, {id, tagName: newTag}]);
        }
    }

    if (tagList[0]) {
        updateActivities(filterActivitiesByExistingTags(tagList, props.activities));
    }


    return <div>
        (
        <div className="row py-4 filter-content">
            <div className="col-5 d-flex justify-content-center no-wrap">
                <input className="form-control"
                       id="exampleDataList"
                       style={{width: '50%'}}
                       placeholder="Type to search..."
                />
                <button type="button"
                        className="btn btn-outline-primary"
                        onClick={saveTag}
                > Valider
                </button>
            </div>
        </div>
        )
    </div>
}

export default TagComponent;