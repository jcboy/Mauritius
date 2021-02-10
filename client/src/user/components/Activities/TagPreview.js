import '../../styles/tagStyleActivities.css';

const TagPreview = (props) => {

    console.log(props)

    const deleteTag = (event) => {
        props.noTag(event.target.id);
    }

    return <button className="wrapBtn" id={props.tagName} onClick={deleteTag}>
        {props.tagName} &nbsp; <span className="croix"> x </span>
    </button>


}

export default TagPreview;