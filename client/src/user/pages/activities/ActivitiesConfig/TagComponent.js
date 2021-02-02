import React, {useState} from 'react';
import checkExistTag from "./ActivityLogic/checkExistTag";
import getAllTags from "./ActivityLogic/tagList";

const TagComponent = (props) => {

    const [tagList, updateTagList] = useState([]);
    const updateTags = props.onTagChange;

    const saveTag = (e) => {
        let newTag = e.target["previousSibling"].value;
        const isNewTag = (checkExistTag(newTag, getAllTags())[0]) && !(checkExistTag(newTag, [...tagList])[0])
        if (isNewTag) {
            e.target["previousSibling"].value = '';
            return updateTagList([...tagList, newTag]);
        }
    }

    updateTags(tagList);

    return (
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
}

export default TagComponent;