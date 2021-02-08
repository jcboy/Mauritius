import React, {useEffect, useState} from "react";
import AsyncSelect from 'react-select/async';
import axios from 'axios';

const style = {
    color: 'black',
    backgroundColor: 'white',

}

const InputTag = (props) => {

    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/categories').then((response) => {
            setTagList(response.data)
        }).catch((err) => {
            console.log('An error has occurred : ', err.message)
        });
    }, [])


    const sendTag = props.onSave;

    const saveTag = (event) => {
        sendTag(event.target["previousSibling"].value)
        event.target["previousSibling"].value = '';
    }

    const filterColors = (tagName) => {
        console.log('tagName', tagName);
        return tagList.filter((tag) => {
            return tag.tagName.toLowerCase().includes(tagName.toLowerCase());
        });
    };

    const promiseOptions = (tagName) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterColors(tagName));
            }, 1000);
        });
    }

    return <div className="col-8 d-flex pl-5 no-wrap">
        <style>{'AsyncSelect { color: #f1e5f1; }'}</style>
        <AsyncSelect cacheOptions style={style} className="btn" loadOptions={promiseOptions}/>
        <button type="button"
                className="btn btn-outline-primary"
                onClick={saveTag}
        > Valider
        </button>
    </div>

}

export default InputTag;