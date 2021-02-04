import React, {useState} from 'react';
import TagPreview from "../tagConfig/TagPreview";
import InputTag from "../tagConfig/InputTag";

const TagComponent = (props) => {

    const [tagList, updateTagList] = useState([]);
    const updateTags = props.onTagChange;

    const saveTag = (value) => {
        return updateTagList([...tagList, value]);
    }

    const deleteTag = (event) => {
        console.log(event);
        const id = tagList.findIndex((tag) => {
            return tag === event;
        })
        const newTagList = [...tagList];
        newTagList.splice(id, 1);
        updateTagList(newTagList);
    }


    updateTags(tagList);

    return (
        <div className="row pb-3 filter-content flex-column">
            <InputTag onSave={saveTag}/>
            <div className="col">
                <div className="row">
                    <div className="col my-2 display-block">
                        {
                            (!!tagList[0]) && (tagList.map((tag, index) => {
                                return <TagPreview key={index}
                                                   tagName={tag}
                                                   noTag={deleteTag}/>
                            }))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagComponent;